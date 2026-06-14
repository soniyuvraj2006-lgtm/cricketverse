"use client";

import { motion } from "framer-motion";
import type { Category } from "@/lib/types";
import { playerCircleData } from "@/lib/data/player-circles";

const playerNumbers: Record<string, string> = Object.fromEntries(
  playerCircleData.map((p) => [p.slug, p.number])
);

export const categoryVisualConfig: Record<
  Category,
  { gradient: string; accentColor: string; symbol: string; backgroundSVG: string }
> = {
  jerseys: {
    gradient: "linear-gradient(145deg, #071B3F 0%, #0B2456 60%, #071B3F 100%)",
    accentColor: "#3B82F6",
    symbol: "18",
    backgroundSVG: `<svg width="100%" height="100%" viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="55" x2="300" y2="55" stroke="white" stroke-width="0.5" stroke-opacity="0.06"/><line x1="0" y1="110" x2="300" y2="110" stroke="white" stroke-width="0.5" stroke-opacity="0.06"/><line x1="0" y1="165" x2="300" y2="165" stroke="white" stroke-width="0.5" stroke-opacity="0.06"/><line x1="75" y1="0" x2="75" y2="220" stroke="white" stroke-width="0.5" stroke-opacity="0.04"/><line x1="150" y1="0" x2="150" y2="220" stroke="white" stroke-width="0.5" stroke-opacity="0.04"/><line x1="225" y1="0" x2="225" y2="220" stroke="white" stroke-width="0.5" stroke-opacity="0.04"/></svg>`,
  },
  "steel-cards": {
    gradient: "linear-gradient(145deg, #1A1420 0%, #241A2E 60%, #1A1420 100%)",
    accentColor: "#A78BFA",
    symbol: "★",
    backgroundSVG: `<svg width="100%" height="100%" viewBox="0 0 300 220" fill="none"><rect x="60" y="30" width="160" height="220" rx="8" stroke="white" stroke-width="0.8" stroke-opacity="0.06" transform="rotate(-8 140 140)"/><rect x="70" y="20" width="160" height="220" rx="8" stroke="white" stroke-width="0.8" stroke-opacity="0.04" transform="rotate(-4 150 130)"/><rect x="80" y="10" width="160" height="220" rx="8" stroke="white" stroke-width="0.8" stroke-opacity="0.08"/></svg>`,
  },
  "fridge-magnets": {
    gradient: "linear-gradient(145deg, #200A0A 0%, #2E1010 60%, #200A0A 100%)",
    accentColor: "#F87171",
    symbol: "∪",
    backgroundSVG: `<svg width="100%" height="100%" viewBox="0 0 300 220" fill="none"><circle cx="150" cy="110" r="80" stroke="white" stroke-width="0.6" stroke-opacity="0.05"/><circle cx="150" cy="110" r="55" stroke="white" stroke-width="0.6" stroke-opacity="0.04"/><circle cx="150" cy="110" r="30" stroke="white" stroke-width="0.6" stroke-opacity="0.03"/></svg>`,
  },
  posters: {
    gradient: "linear-gradient(145deg, #081820 0%, #0C2030 60%, #081820 100%)",
    accentColor: "#38BDF8",
    symbol: "◈",
    backgroundSVG: `<svg width="100%" height="100%" viewBox="0 0 300 220" fill="none"><rect x="50" y="20" width="120" height="180" rx="2" stroke="white" stroke-width="0.8" stroke-opacity="0.07" transform="rotate(3 110 110)"/><rect x="45" y="15" width="120" height="180" rx="2" stroke="white" stroke-width="0.5" stroke-opacity="0.04" transform="rotate(6 105 105)"/></svg>`,
  },
  collectibles: {
    gradient: "linear-gradient(145deg, #1A1006 0%, #261809 60%, #1A1006 100%)",
    accentColor: "#F0C040",
    symbol: "✦",
    backgroundSVG: `<svg width="100%" height="100%" viewBox="0 0 300 220" fill="none"><path d="M150 20 L175 80 L240 80 L190 120 L210 180 L150 145 L90 180 L110 120 L60 80 L125 80 Z" stroke="white" stroke-width="0.8" stroke-opacity="0.06" fill="none"/></svg>`,
  },
  "signed-merch": {
    gradient: "linear-gradient(145deg, #1A1006 0%, #261809 60%, #1A1006 100%)",
    accentColor: "#F0C040",
    symbol: "✦",
    backgroundSVG: `<svg width="100%" height="100%" viewBox="0 0 300 220" fill="none"><path d="M150 20 L175 80 L240 80 L190 120 L210 180 L150 145 L90 180 L110 120 L60 80 L125 80 Z" stroke="white" stroke-width="0.8" stroke-opacity="0.06" fill="none"/></svg>`,
  },
};

interface ProductVisualProps {
  category: Category;
  playerSlug?: string;
  playerName?: string;
  badge?: string;
  badgeVariant?: "gold" | "sale" | "trending";
  discount?: string;
  flashSale?: boolean;
  className?: string;
}

export function ProductVisual({
  category,
  playerSlug,
  playerName,
  badge,
  badgeVariant = "gold",
  discount,
  flashSale,
  className = "",
}: ProductVisualProps) {
  const config = categoryVisualConfig[category] ?? categoryVisualConfig.jerseys;
  const initials = playerName
    ?.split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  const jerseyNum = playerSlug ? playerNumbers[playerSlug] ?? config.symbol : config.symbol;

  const badgeColors = {
    gold: "bg-gold text-void",
    sale: "bg-alert text-white",
    trending: "bg-gold text-void",
  };

  return (
    <div
      className={`group/visual relative h-[220px] overflow-hidden ${className}`}
      style={{ background: config.gradient }}
    >
      <div className="absolute inset-0" dangerouslySetInnerHTML={{ __html: config.backgroundSVG }} aria-hidden />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: 160,
          height: 80,
          background: `radial-gradient(ellipse, ${config.accentColor}18 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}
        aria-hidden
      />

      <span
        className="pointer-events-none absolute select-none font-display leading-none text-white/[0.04]"
        style={{ fontSize: 130, right: -10, bottom: -15 }}
        aria-hidden
      >
        {jerseyNum}
      </span>

      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
        <span className="font-display text-[48px] text-white/[0.07]">{config.symbol}</span>
      </div>

      {initials && (
        <div
          className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full font-body text-[11px] font-bold backdrop-blur-md"
          style={{ border: `1.5px solid ${config.accentColor}55`, background: "rgba(0,0,0,0.45)", color: config.accentColor }}
        >
          {initials}
        </div>
      )}

      <div className="absolute right-3 top-3 flex flex-col items-end gap-1">
        {badge && (
          <span className={`rounded-sm px-2 py-0.5 font-mono text-[9px] font-bold tracking-widest ${badgeColors[badgeVariant]}`}>
            {badge}
          </span>
        )}
        {discount && (
          <span className="rounded-sm bg-alert px-2 py-0.5 font-mono text-[9px] font-bold text-white">{discount}</span>
        )}
      </div>

      <div
        className="sheen pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover/visual:opacity-100"
        style={{ animation: "sheen-sweep 1.2s ease-in-out" }}
      />

      <div
        className="absolute bottom-0 left-0 top-0 w-[3px]"
        style={{
          background: flashSale ? "#EF4444" : `linear-gradient(to bottom, ${config.accentColor}80, transparent)`,
        }}
      />
    </div>
  );
}

export function HeroProductPanel({
  type,
  title,
  price,
  number,
  initials,
  subtitle,
  className,
  delay = 0,
}: {
  type: string;
  title: string;
  price: string;
  number?: string;
  initials?: string;
  subtitle?: string;
  className?: string;
  delay?: number;
}) {
  const isSteel = type === "STEEL CARD";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1.6 + delay }}
      className={`overflow-hidden rounded-xl border border-[var(--border-subtle)] shadow-float ${className ?? ""}`}
      style={{
        background: isSteel
          ? "linear-gradient(135deg, #1C1C2E, #2D2D44)"
          : type === "POSTER"
            ? "linear-gradient(135deg, #1A1206, #2A1E0A)"
            : "linear-gradient(135deg, #1A2235, #111827)",
      }}
    >
      {isSteel && <div className="sheen pointer-events-none absolute inset-0" />}
      <div className="relative p-4">
        <span className="inline-block rounded-sm bg-gold px-2 py-0.5 font-mono text-[10px] text-void">{type}</span>
        {number && (
          <span className="absolute right-4 top-12 font-display text-[80px] leading-none text-white/[0.08]">{number}</span>
        )}
        {initials && (
          <div className="mt-6 text-center">
            <span className="font-display text-5xl text-gradient-gold">{initials}</span>
            {subtitle && <p className="mt-1 font-mono text-[9px] tracking-[0.3em] text-gold">{subtitle}</p>}
          </div>
        )}
        <p className="relative mt-8 font-body text-sm font-semibold text-primary">{title}</p>
        <p className="relative font-mono text-lg font-bold text-gold">{price}</p>
        <div className="relative mt-3 h-0.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-3/4 bg-gold" />
        </div>
      </div>
    </motion.div>
  );
}
