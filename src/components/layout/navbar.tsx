"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { LogoMark } from "@/components/shared/cricket-illustrations";
import { useCartStore } from "@/stores/cart-store";
import { useAuthStore } from "@/stores/auth-store";
import { useTextScramble } from "@/hooks/useTextScramble";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/jerseys", label: "JERSEYS" },
  { href: "/steel-cards", label: "STEEL CARDS" },
  { href: "/fridge-magnets", label: "MAGNETS" },
  { href: "/posters", label: "POSTERS" },
  { href: "/collectibles", label: "COLLECTIBLES" },
  { href: "/track-order", label: "TRACK ORDER" },
];

function ScrambleNavLink({
  href,
  label,
  isActive,
  className,
  onClick,
}: {
  href: string;
  label: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const displayText = useTextScramble(label, hovered, 450);

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "inline-block min-w-[6ch] text-center font-display text-lg font-bold tracking-[0.06em] transition-colors duration-150",
        isActive ? "text-gold" : hovered ? "text-cream" : "text-cream/60",
        className
      )}
      style={{ minWidth: `${label.length}ch` }}
    >
      {displayText}
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const cartCount = useCartStore((s) => s.getItemCount());
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLinkActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-[100] flex h-[72px] items-center px-6 transition-all duration-300 md:px-10",
          scrolled
            ? "border-b border-cream/[0.08] bg-[#0A0700]/90 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <Link href="/" className="mr-auto flex items-center gap-3">
          <LogoMark className="h-11 w-11" />
          <div className="hidden sm:block">
            <p className="font-display text-lg font-black leading-none tracking-wide text-cream">
              CRICKET<span className="text-gold">VERSE</span>
            </p>
            <p className="font-mono text-[9px] tracking-[0.15em] text-cream/40">INDIA&apos;S PREMIUM STORE</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <ScrambleNavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={isLinkActive(link.href)}
            />
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-8">
          {!isAuthenticated ? (
            <>
              <ScrambleNavLink href="/login" label="LOGIN" className="hidden md:inline-block" />
              <Link
                href="/signup"
                className="hidden rounded-full bg-cream px-5 py-2 font-display text-[15px] font-bold tracking-wider text-[#0A0700] transition-colors hover:bg-[#F5F0E8] md:inline-block"
              >
                SIGN UP
              </Link>
            </>
          ) : (
            <ScrambleNavLink href="/account" label="ACCOUNT" className="hidden md:inline-block" />
          )}
          <Link
            href="/add-business"
            className="hidden rounded-full border-2 border-cream/50 px-5 py-2 font-display text-[15px] font-bold tracking-wider text-cream transition-colors hover:border-cream lg:inline-block"
          >
            ADD BUSINESS
          </Link>
          <Link
            href="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-cream text-[#0A0700]"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold px-1 font-mono text-[10px] font-bold text-[#0A0700]">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 lg:hidden"
            aria-label="Menu"
          >
            <Menu size={20} className="text-cream" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex flex-col bg-[#0A0700] lg:hidden"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} aria-label="Close">
                <X size={28} className="text-cream" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "font-display text-4xl font-black hover:text-gold",
                      isLinkActive(link.href) ? "text-gold" : "text-cream"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
