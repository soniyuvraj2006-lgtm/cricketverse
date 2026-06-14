"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";

export function AdminTopBar() {
  const router = useRouter();
  const [time, setTime] = useState("");
  const logout = useAuthStore((s) => s.logout);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex h-[52px] items-center gap-4 border-b border-[rgba(59,130,246,0.1)] bg-[#060810] px-6">
      <div className="mr-auto flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#3B82F6] font-display text-base font-black text-[#060810]">
          CV
        </div>
        <span className="font-body text-sm font-bold text-[#F1F5F9]">CRICKETVERSE</span>
        <span className="font-mono text-[10px] tracking-[0.15em] text-[#3B82F6]">ADMIN</span>
      </div>

      <span className="hidden font-mono text-xs text-[#475569] md:block">{time}</span>

      <button
        type="button"
        className="relative cursor-pointer border-none bg-transparent text-[#94A3B8]"
        aria-label="Notifications"
      >
        🔔
        <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#EF4444] text-[9px] text-white">
          3
        </span>
      </button>

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] font-body text-xs font-bold text-white">
        A
      </div>

      <button
        type="button"
        onClick={() => {
          logout();
          router.push("/admin/login");
        }}
        className="border-none bg-transparent font-body text-[13px] text-[#94A3B8] transition-colors hover:text-[#F1F5F9]"
      >
        Logout
      </button>
    </header>
  );
}
