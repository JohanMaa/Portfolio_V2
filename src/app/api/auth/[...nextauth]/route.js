import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from "@/firebase"; // Pastikan path benar
import { signInWithEmailAndPassword } from "firebase/auth";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("🔑 [Authorize] Mulai proses login...");
        console.log("📩 [Authorize] Diterima credentials:", {
          email: credentials?.email,
          password: credentials?.password ? "****" : null,
        });

        if (!credentials?.email || !credentials?.password) {
          console.warn("⚠️ [Authorize] Email atau password tidak dikirim");
          return null;
        }

        try {
          console.log("🚀 [Authorize] Mencoba login Firebase untuk:", credentials.email);
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );
          const user = userCredential.user;

          console.log("✅ [Authorize] Login Firebase berhasil:", {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          });

          return {
            id: user.uid,
            email: user.email,
            name: user.displayName || user.email.split("@")[0] || "Admin",
          };
        } catch (error) {
          console.error("❌ [Authorize] Firebase gagal:", {
            code: error.code,
            message: error.message,
          });
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("🟢 [JWT Callback] Sebelum:", token);
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        console.log("🟢 [JWT Callback] Tambahkan data user ke token:", token);
      }
      return token;
    },
    async session({ session, token }) {
      console.log("🟣 [Session Callback] Sebelum:", session);
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          name: token.name,
        };
        console.log("🟣 [Session Callback] Session setelah update:", session);
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
