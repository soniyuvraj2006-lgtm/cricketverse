"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageHero } from "@/components/bucks/page-hero";
import { useAuthStore } from "@/stores/auth-store";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { href: "/account", label: "Profile" },
  { href: "/account/orders", label: "My Orders" },
  { href: "/account/wishlist", label: "Wishlist" },
  { href: "/account/rewards", label: "Rewards & Points" },
  { href: "/account/addresses", label: "Addresses" },
  { href: "/account/notifications", label: "Notifications" },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center pt-28">
        <p className="font-body text-secondary">Please login to access your account</p>
        <Link href="/login" className="pill-btn-filled mt-6">Login →</Link>
      </div>
    );
  }

  return (
    <div className="section-padding pt-28">
      <div className="mx-auto max-w-7xl">
        <PageHero eyebrow="Account" title={user?.name?.split(" ").slice(-1)[0]?.toUpperCase() ?? "FAN"} titleOutline="WELCOME BACK," subtitle={`Manage your orders, wishlist, and rewards.`} />
        <div className="grid gap-8 lg:grid-cols-4">
          <aside className="hidden lg:block">
            <nav className="bucks-panel space-y-1">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-2.5 font-display text-sm font-bold uppercase tracking-wider transition-colors",
                    pathname === link.href ? "bg-cream text-[#0A0700]" : "text-cream/60 hover:text-cream"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
          <div className="lg:col-span-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
