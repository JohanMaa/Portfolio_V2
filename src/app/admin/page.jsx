"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LayoutClient from "../layout-client"; // pastikan path benar

export default function Admin() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("🔐 Admin mounted:", { session, status });
    if (status === "loading") return;
    if (!session) router.push("/login");
  }, [session, status, router]);

  if (status === "loading") return <div>Loading...</div>;

  return (
    <LayoutClient>
      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-[#111827] mb-4">Admin Dashboard</h1>
        <p>Selamat datang, {session?.user?.email || "Admin"}!</p>
      </div>
    </LayoutClient>
  );
}
