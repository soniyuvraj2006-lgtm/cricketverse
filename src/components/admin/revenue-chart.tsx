"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", revenue: 42000 },
  { day: "Tue", revenue: 38000 },
  { day: "Wed", revenue: 52000 },
  { day: "Thu", revenue: 47000 },
  { day: "Fri", revenue: 61000 },
  { day: "Sat", revenue: 78000 },
  { day: "Sun", revenue: 71000 },
];

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(56,189,248,0.3)" />
            <stop offset="100%" stopColor="rgba(56,189,248,0)" />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
        <XAxis dataKey="day" tick={{ fill: "#475569", fontSize: 11, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#475569", fontSize: 11, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}K`} />
        <Tooltip
          contentStyle={{ background: "#1E2333", border: "1px solid rgba(56,189,248,0.3)", borderRadius: 6, fontSize: 12 }}
          labelStyle={{ color: "#94A3B8" }}
          itemStyle={{ color: "#38BDF8", fontFamily: "JetBrains Mono", fontWeight: 700 }}
          formatter={(value) => [`₹${Number(value ?? 0).toLocaleString("en-IN")}`, "Revenue"]}
        />
        <Area type="monotone" dataKey="revenue" stroke="#38BDF8" strokeWidth={2} fill="url(#revenueGrad)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
