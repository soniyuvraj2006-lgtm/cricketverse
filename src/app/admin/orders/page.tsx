"use client";

import { useState } from "react";

const orders = [
  { id: "CV2024001234", customer: "Arjun Sharma", date: "Jun 10", items: 3, amount: "₹3,248", status: "Packing" },
  { id: "CV2024001233", customer: "Priya K.", date: "Jun 10", items: 1, amount: "₹1,499", status: "Delivered" },
  { id: "CV2024001232", customer: "Rahul M.", date: "Jun 9", items: 2, amount: "₹2,100", status: "Dispatched" },
  { id: "CV2024001231", customer: "Ananya S.", date: "Jun 9", items: 4, amount: "₹4,500", status: "Pending" },
  { id: "CV2024001230", customer: "Karan V.", date: "Jun 8", items: 1, amount: "₹899", status: "Cancelled" },
];

const statuses = ["ALL", "PENDING", "PACKING", "DISPATCHED", "DELIVERED", "RETURNED", "CANCELLED", "REFUND"];

const statusStyles: Record<string, string> = {
  Pending: "bg-[rgba(245,158,11,0.1)] text-[#F59E0B]",
  Packing: "bg-[rgba(59,130,246,0.1)] text-[#3B82F6]",
  Dispatched: "bg-[rgba(139,92,246,0.1)] text-[#8B5CF6]",
  Delivered: "bg-[rgba(16,185,129,0.1)] text-[#10B981]",
  Cancelled: "bg-[rgba(239,68,68,0.1)] text-[#EF4444]",
};

export default function AdminOrdersPage() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filtered =
    activeTab === "ALL"
      ? orders
      : orders.filter((o) => o.status.toUpperCase() === activeTab);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-body text-[22px] font-bold text-[#F1F5F9]">Orders</h1>
        <button
          type="button"
          className="rounded-md border border-[rgba(255,255,255,0.08)] bg-[#161C28] px-4 py-2 font-body text-xs text-[#94A3B8]"
        >
          Export CSV
        </button>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {statuses.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setActiveTab(s)}
            className={
              activeTab === s
                ? "rounded-full bg-[#3B82F6] px-3 py-1.5 font-body text-xs font-semibold text-[#060810]"
                : "rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-1.5 font-body text-xs text-[#94A3B8] hover:border-[#3B82F6]/40"
            }
          >
            {s}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-[10px] border border-[rgba(255,255,255,0.06)] bg-[#0F1218]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.04)] text-left font-body text-[11px] uppercase tracking-wide text-[#475569]">
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Date</th>
              <th className="p-4">Items</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => (
              <tr
                key={o.id}
                className="border-b border-[rgba(255,255,255,0.04)] transition-colors hover:bg-[rgba(59,130,246,0.03)]"
              >
                <td className="p-4 font-mono text-xs text-[#3B82F6]">{o.id}</td>
                <td className="p-4 font-body text-[#F1F5F9]">{o.customer}</td>
                <td className="p-4 font-body text-[#94A3B8]">{o.date}</td>
                <td className="p-4 font-body text-[#94A3B8]">{o.items}</td>
                <td className="p-4 font-mono font-bold text-[#F59E0B]">{o.amount}</td>
                <td className="p-4">
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${statusStyles[o.status] ?? "text-[#94A3B8]"}`}
                  >
                    {o.status.toUpperCase()}
                  </span>
                </td>
                <td className="p-4">
                  <button type="button" className="font-body text-xs text-[#3B82F6] hover:underline">
                    Update →
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
