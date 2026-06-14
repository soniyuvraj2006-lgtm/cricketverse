"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageHero } from "@/components/bucks/page-hero";
import { useAuthStore } from "@/stores/auth-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      const user = useAuthStore.getState().user;
      router.push(user?.role === "admin" ? "/admin" : "/account");
    } else {
      setError("Invalid email or password. Try fan@cricketverse.in / Cricket@123");
    }
  };

  return (
    <div className="section-padding pt-28">
      <div className="mx-auto max-w-md">
        <PageHero eyebrow="Account" title="BACK IN" titleOutline="WELCOME" subtitle="Welcome back, cricket fan!" align="center" />
        <form onSubmit={handleSubmit} className="bucks-panel space-y-4">
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p className="text-sm text-cricket-red">{error}</p>}
          <Button type="submit" className="w-full">Login</Button>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full bucks-divider" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-[#111008] px-2 font-mono text-cream/40">OR</span></div>
          </div>
          <Button type="button" variant="outline" className="w-full">Continue with Google</Button>
          <p className="text-center text-sm text-secondary">
            Don&apos;t have an account? <Link href="/signup" className="text-gold hover:underline">Sign Up</Link>
          </p>
        </form>
        <div className="mt-6 bucks-panel text-xs text-secondary">
          <p className="font-display font-bold text-cream">Demo Credentials:</p>
          <p className="mt-2 font-mono">fan@cricketverse.in / Cricket@123</p>
          <p className="font-mono">admin@cricketverse.in / AdminCV@2024</p>
        </div>
      </div>
    </div>
  );
}
