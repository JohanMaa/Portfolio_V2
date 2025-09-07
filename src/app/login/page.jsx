"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export const dynamic = "force-dynamic";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();

  // Ambil callbackUrl dari query params atau fallback ke /admin
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";

  // Jika sudah login, redirect ke callbackUrl
  useEffect(() => {
    if (status === "authenticated") {
      console.log("✅ Session authenticated, redirecting to:", callbackUrl);
      router.replace(callbackUrl); // pakai replace supaya tidak bisa back ke /login
    }
  }, [status, callbackUrl, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false, // biar kita handle redirect manual
      email,
      password,
      callbackUrl,
    });

    setLoading(false);

    console.log("🔑 Sign-in result:", result);

    if (result?.error) {
      alert("Login gagal: " + result.error);
    } else {
      console.log("✅ Login success, waiting for session update...");
      // Tidak langsung router.push, biarkan useEffect yang handle redirect
    }
  };

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#111827] text-center">
          Login Admin
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-[#111827] text-white p-2 rounded hover:bg-gray-800 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
