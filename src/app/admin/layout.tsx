"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AdminTopBar } from "@/components/admin/admin-top-bar";

const navSections = [
  {
    label: "OVERVIEW",
    items: [
      { href: "/admin", label: "Dashboard", icon: "📊" },
      { href: "/admin/analytics", label: "Analytics", icon: "📈" },
      { href: "/admin/live", label: "Live Activity", icon: "🔴" },
    ],
  },
  {
    label: "STORE",
    items: [
      { href: "/admin/orders", label: "Orders", icon: "📦" },
      { href: "/admin/products", label: "Products", icon: "👕" },
      { href: "/admin/inventory", label: "Inventory", icon: "📋" },
      { href: "/admin/categories", label: "Categories", icon: "🏷️" },
    ],
  },
  {
    label: "BUSINESS",
    items: [
      { href: "/admin/vendors", label: "Vendors", icon: "🏪" },
      { href: "/admin/subscriptions", label: "Subscriptions", icon: "💳" },
    ],
  },
  {
    label: "MARKETING",
    items: [
      { href: "/admin/marketing", label: "Coupons", icon: "🎟️" },
      { href: "/admin/flash-sales", label: "Flash Sales", icon: "⚡" },
      { href: "/admin/banners", label: "Banners", icon: "🖼️" },
    ],
  },
  {
    label: "CUSTOMERS",
    items: [
      { href: "/admin/customers", label: "Customers", icon: "👤" },
      { href: "/admin/reviews", label: "Reviews", icon: "⭐" },
    ],
  },
  {
    label: "SETTINGS",
    items: [
      { href: "/admin/settings", label: "Site Settings", icon: "⚙️" },
      { href: "/admin/team", label: "Team", icon: "👥" },
      { href: "/admin/logs", label: "Audit Logs", icon: "📋" },
    ],
  },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#0A0C12] text-[#F1F5F9]">
      <aside className="hidden w-[220px] flex-shrink-0 border-r border-[rgba(59,130,246,0.06)] bg-[#0F1218] lg:block">
        <nav className="sticky top-[52px] max-h-[calc(100vh-52px)] overflow-y-auto py-2">
          {navSections.map((section) => (
            <div key={section.label}>
              <p className="px-4 pb-1.5 pt-4 font-mono text-[9px] tracking-[0.18em] text-[#475569]">
                {section.label}
              </p>
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2.5 px-4 py-2 font-body text-[13px] transition-all duration-150",
                      active
                        ? "border-l-2 border-[#3B82F6] bg-[rgba(59,130,246,0.08)] font-semibold text-[#3B82F6]"
                        : "border-l-2 border-transparent text-[#94A3B8] hover:bg-[rgba(59,130,246,0.04)] hover:text-[#F1F5F9]"
                    )}
                  >
                    <span className="text-sm">{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <AdminTopBar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
