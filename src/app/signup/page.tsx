"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageHero } from "@/components/bucks/page-hero";
import { useAuthStore } from "@/stores/auth-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  const router = useRouter();
  const signup = useAuthStore((s) => s.signup);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(name, email, password);
    router.push("/account");
  };

  return (
    <div className="section-padding pt-28">
      <div className="mx-auto max-w-md">
        <PageHero eyebrow="Join" title="CLUB" titleOutline="THE CRICKET" subtitle="Join 50,000+ cricket fans" align="center" />
        <form onSubmit={handleSubmit} className="bucks-panel space-y-4">
          <Input label="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} />
          <Button type="submit" className="w-full">Create Account</Button>
          <Button type="button" variant="outline" className="w-full">Sign Up with Google</Button>
          <p className="text-center text-sm text-secondary">
            Already have an account? <Link href="/login" className="text-gold hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
