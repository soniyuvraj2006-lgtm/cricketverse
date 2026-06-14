"use client";

import Link from "next/link";
import { LogoMark } from "@/components/shared/cricket-illustrations";
import { InstagramIcon, TwitterIcon, YoutubeIcon } from "@/components/icons";

const shopLinks = [
  { href: "/jerseys", label: "Jerseys" },
  { href: "/steel-cards", label: "Steel Cards" },
  { href: "/fridge-magnets", label: "Fridge Magnets" },
  { href: "/posters", label: "Posters" },
  { href: "/collectibles", label: "Collectibles" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const supportLinks = [
  { href: "/track-order", label: "Track Order" },
  { href: "/refund-policy", label: "Returns" },
  { href: "/size-guide", label: "Size Guide" },
  { href: "/privacy-policy", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-[#0A0700] pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-10 w-10" />
            <span className="font-display text-lg font-black text-cream">
              CRICKET<span className="text-gold">VERSE</span>
            </span>
          </div>
          <p className="mt-4 font-body text-sm text-cream/60">Own The Legends. Wear The Legacy.</p>
          <div className="mt-4 flex gap-4">
            <Link href="#" className="text-cream/50 hover:text-gold"><InstagramIcon className="h-5 w-5" /></Link>
            <Link href="#" className="text-cream/50 hover:text-gold"><TwitterIcon className="h-5 w-5" /></Link>
            <Link href="#" className="text-cream/50 hover:text-gold"><YoutubeIcon className="h-5 w-5" /></Link>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-display text-[clamp(36px,5vw,60px)] font-black leading-none text-outline">JOIN THE</h3>
          <h3 className="font-display text-[clamp(36px,5vw,60px)] font-black leading-none text-cream">CRICKET CLUB</h3>
          <p className="mt-2 font-body text-sm text-cream/60">New drops. Flash sales. Collector alerts.</p>
          <form className="mt-6 flex border-b border-cream/30 pb-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent font-body text-cream outline-none placeholder:text-cream/30" />
            <button type="submit" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-[#0A0700]">→</button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-3 font-display text-xs font-bold tracking-widest text-cream">SHOP</p>
            {shopLinks.map((l) => (
              <Link key={l.href} href={l.href} className="block py-1 font-body text-cream/50 hover:text-cream">{l.label}</Link>
            ))}
          </div>
          <div>
            <p className="mb-3 font-display text-xs font-bold tracking-widest text-cream">COMPANY</p>
            {companyLinks.map((l) => (
              <Link key={l.href} href={l.href} className="block py-1 font-body text-cream/50 hover:text-cream">{l.label}</Link>
            ))}
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="mb-3 font-display text-xs font-bold tracking-widest text-cream">SUPPORT</p>
            {supportLinks.map((l) => (
              <Link key={l.href} href={l.href} className="block py-1 font-body text-cream/50 hover:text-cream">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-cream/10 px-6 py-6 md:flex-row">
        <p className="font-mono text-[11px] text-cream/40">© 2026 CricketVerse. Made for Indian Cricket Fans.</p>
        <p className="font-mono text-[11px] text-cream/40">Secure Payments</p>
      </div>
    </footer>
  );
}
