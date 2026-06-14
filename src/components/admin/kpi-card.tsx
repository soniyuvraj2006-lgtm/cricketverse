"use client";

import { motion } from "framer-motion";

interface KpiCardProps {
  label: string;
  value: string;
  change: string;
  up: boolean;
  accent: string;
  icon?: string;
}

function Sparkline({ color }: { color: string }) {
  const points = "0,20 10,15 20,18 30,8 40,12 50,5 60,10 70,3 80,8";
  return (
    <svg width="80" height="24" className="opacity-50">
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function KpiCard({ label, value, change, up, accent, icon = "📊" }: KpiCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[10px] border border-[rgba(255,255,255,0.06)] bg-[#0F1218] p-5"
      style={{ borderTop: `3px solid ${accent}` }}
    >
      <div className="mb-3 flex items-start justify-between">
        <div>
          <p className="font-body text-xs text-[#94A3B8]">{label}</p>
          <p className="mt-1.5 font-mono text-[26px] font-bold text-[#F1F5F9]">{value}</p>
        </div>
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg text-base"
          style={{ background: `${accent}18` }}
        >
          {icon}
        </div>
      </div>
      <Sparkline color={accent} />
      <p className={`mt-2 font-body text-xs ${up ? "text-[#10B981]" : "text-[#EF4444]"}`}>
        {up ? "▲" : "▼"} {change} vs last month
      </p>
    </motion.div>
  );
}
