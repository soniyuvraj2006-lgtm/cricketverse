"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { KpiCard } from "@/components/admin/kpi-card";

const RevenueChart = dynamic(
  () => import("@/components/admin/revenue-chart").then((m) => m.RevenueChart),
  { ssr: false }
);

const kpiCards = [
  { label: "Total Revenue", value: "₹14,28,350", change: "+18.4%", up: true, accent: "#F59E0B", icon: "₹" },
  { label: "This Month", value: "₹4,28,350", change: "+12.1%", up: true, accent: "#3B82F6", icon: "📅" },
  { label: "Total Orders", value: "2,847", change: "+23.5%", up: true, accent: "#10B981", icon: "📦" },
  { label: "Active Customers", value: "18,492", change: "+8.2%", up: true, accent: "#8B5CF6", icon: "👤" },
  { label: "Vendors", value: "47", change: "+3 this month", up: true, accent: "#F97316", icon: "🏪" },
  { label: "Products Listed", value: "284", change: "+12 new", up: true, accent: "#06B6D4", icon: "👕" },
  { label: "Conversion Rate", value: "3.8%", change: "-0.2%", up: false, accent: "#EF4444", icon: "📊" },
  { label: "Avg Order Value", value: "₹1,247", change: "+₹84", up: true, accent: "#A855F7", icon: "💰" },
];

const recentOrders = [
  { id: "CV-92841", customer: "Rahul M.", items: 2, amount: "₹2,098", status: "Packing" },
  { id: "CV-92840", customer: "Priya K.", items: 1, amount: "₹799", status: "Dispatched" },
  { id: "CV-92839", customer: "Arun S.", items: 3, amount: "₹4,497", status: "Delivered" },
  { id: "CV-92838", customer: "Sneha P.", items: 1, amount: "₹599", status: "Pending" },
];

const statusStyles: Record<string, string> = {
  Packing: "bg-[rgba(59,130,246,0.1)] text-[#3B82F6] border-[rgba(59,130,246,0.3)]",
  Dispatched: "bg-[rgba(139,92,246,0.1)] text-[#8B5CF6] border-[rgba(139,92,246,0.3)]",
  Delivered: "bg-[rgba(16,185,129,0.1)] text-[#10B981] border-[rgba(16,185,129,0.3)]",
  Pending: "bg-[rgba(245,158,11,0.1)] text-[#F59E0B] border-[rgba(245,158,11,0.3)]",
};

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="font-body text-[22px] font-bold text-[#F1F5F9]">Dashboard</h1>
          <p className="font-mono text-[11px] text-[#475569]">Last updated: just now</p>
        </div>
        <select className="rounded-md border border-[rgba(255,255,255,0.08)] bg-[#161C28] px-3 py-1.5 font-body text-[13px] text-[#94A3B8] outline-none">
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpiCards.map((card) => (
          <KpiCard key={card.label} {...card} />
        ))}
      </div>

      <div className="mt-6 rounded-[10px] border border-[rgba(255,255,255,0.06)] bg-[#0F1218] p-6">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="font-body text-sm font-bold text-[#F1F5F9]">Revenue</p>
            <p className="font-mono text-[28px] font-bold text-[#F59E0B]">₹4,28,350</p>
          </div>
          <div className="flex gap-4 font-body text-[13px]">
            {["Daily", "Weekly", "Monthly", "Yearly"].map((tab, i) => (
              <button
                key={tab}
                type="button"
                className={i === 0 ? "border-b border-[#3B82F6] text-[#3B82F6]" : "text-[#475569]"}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <RevenueChart />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <div className="rounded-[10px] border border-[rgba(255,255,255,0.06)] bg-[#0F1218] p-6 lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-body text-sm font-bold text-[#F1F5F9]">Recent Orders</p>
            <Link href="/admin/orders" className="font-body text-xs text-[#3B82F6] hover:underline">
              View all →
            </Link>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.04)] text-left font-body text-[11px] uppercase tracking-wide text-[#475569]">
                <th className="pb-2">Order ID</th>
                <th className="pb-2">Customer</th>
                <th className="pb-2">Items</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-[rgba(255,255,255,0.04)] transition-colors hover:bg-[rgba(59,130,246,0.03)]"
                >
                  <td className="py-3 font-mono text-xs text-[#3B82F6]">{order.id}</td>
                  <td className="py-3 font-body text-[13px] text-[#F1F5F9]">{order.customer}</td>
                  <td className="py-3 font-body text-xs text-[#94A3B8]">{order.items}</td>
                  <td className="py-3 font-mono text-[13px] font-bold text-[#F59E0B]">{order.amount}</td>
                  <td className="py-3">
                    <span
                      className={`rounded border px-2 py-0.5 font-mono text-[10px] tracking-wider ${statusStyles[order.status]}`}
                    >
                      {order.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-[10px] border border-[rgba(255,255,255,0.06)] bg-[#0F1218] p-6 lg:col-span-2">
          <p className="mb-4 font-body text-sm font-bold text-[#F1F5F9]">
            Vendor Applications <span className="ml-2 text-[#EF4444]">● 3 pending</span>
          </p>
          {["Cricket Gear Co.", "Legend Cards", "Fan Zone"].map((name) => (
            <div
              key={name}
              className="mb-2 flex items-center gap-3 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#161C28] p-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3B82F6]/40 to-[#8B5CF6]/40 font-body text-sm font-bold">
                {name[0]}
              </div>
              <div className="flex-1">
                <p className="font-body text-sm font-semibold text-[#F1F5F9]">{name}</p>
                <p className="font-mono text-[11px] text-[#475569]">Submitted 2 days ago</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded border border-[#10B981] px-2 py-1 font-body text-xs text-[#10B981] hover:bg-[#10B981] hover:text-white"
                >
                  Approve
                </button>
                <button
                  type="button"
                  className="rounded border border-[#EF4444] px-2 py-1 font-body text-xs text-[#EF4444] hover:bg-[#EF4444] hover:text-white"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
