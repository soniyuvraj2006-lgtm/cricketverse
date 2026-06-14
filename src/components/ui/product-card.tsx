"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product, Category } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { ProductVisual } from "@/components/ui/product-visual";
import { useCartStore } from "@/stores/cart-store";

const productThemes: Record<
  Category,
  { bg: string; floatLeft: string; floatRight: string; wingColor: string }
> = {
  jerseys: { bg: "#1B3A6B", floatLeft: "🏏", floatRight: "⚡", wingColor: "#E8DCC8" },
  "steel-cards": { bg: "#3B1A6B", floatLeft: "⭐", floatRight: "🏆", wingColor: "#E8DCC8" },
  "fridge-magnets": { bg: "#6B1A1A", floatLeft: "🧲", floatRight: "❤️", wingColor: "#E8DCC8" },
  posters: { bg: "#1A3B1A", floatLeft: "🎨", floatRight: "📸", wingColor: "#E8DCC8" },
  collectibles: { bg: "#6B5A1A", floatLeft: "💎", floatRight: "🏅", wingColor: "#E8DCC8" },
  "signed-merch": { bg: "#3B1A6B", floatLeft: "✍️", floatRight: "🏆", wingColor: "#E8DCC8" },
};

function CricketWingsSVG({ color = "#E8DCC8" }: { color?: string }) {
  return (
    <svg
      width="280"
      height="160"
      viewBox="0 0 280 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute left-1/2 top-[30%] -translate-x-1/2"
    >
      <path d="M140 80 C120 60, 90 40, 60 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M140 80 C115 65, 80 55, 45 50" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M140 80 C118 75, 85 78, 50 85" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M140 80 C120 90, 92 100, 65 115" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M140 80 C160 60, 190 40, 220 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M140 80 C165 65, 200 55, 235 50" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M140 80 C162 75, 195 78, 230 85" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M140 80 C160 90, 188 100, 215 115" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M125 90 Q140 80 155 90" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M125 70 Q140 80 155 70" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

interface ProductCardProps {
  product: Product;
  index?: number;
  showStockBar?: boolean;
  flashMode?: boolean;
  isFeatured?: boolean;
}

export function ProductCard({
  product,
  index = 0,
  isFeatured = false,
}: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const [hovered, setHovered] = useState(false);
  const [cartState, setCartState] = useState<"idle" | "adding" | "added">("idle");
  const theme = productThemes[product.category];
  const tagline = product.description.split(".")[0] + ".";

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCartState("adding");
    setTimeout(() => {
      addItem(product);
      setCartState("added");
      setTimeout(() => setCartState("idle"), 2200);
    }, 400);
  };

  const viewLabel =
    product.category === "jerseys"
      ? "VIEW JERSEY"
      : product.category === "steel-cards"
        ? "VIEW CARD"
        : "VIEW PRODUCT";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-[20px]"
      style={{
        background: theme.bg,
        height: isFeatured ? "680px" : "620px",
        transition: "height 300ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-2 rounded-[14px] border border-dashed border-cream/25"
        style={{ zIndex: 1 }}
      />

      <div className="relative z-[2] flex h-full flex-col">
        <div className="px-6 pb-0 pt-7 text-center">
          {product.player && (
            <p className="mb-1.5 font-display text-xs tracking-[0.2em] text-cream/50">
              {product.player.toUpperCase()}
            </p>
          )}
          <h3
            className="font-display text-[clamp(28px,3.5vw,48px)] font-black leading-none tracking-tight text-cream"
            style={{
              transition: "transform 300ms ease",
              transform: hovered ? "translateY(-8px)" : "translateY(0)",
            }}
          >
            {product.name.toUpperCase()}
          </h3>
          <p
            className="mx-auto mt-2.5 max-w-xs font-body text-[15px] italic leading-snug text-cream/75"
            style={{
              transform: hovered ? "translateY(0)" : "translateY(-16px)",
              opacity: hovered ? 1 : 0,
              transition: hovered
                ? "transform 300ms ease, opacity 300ms ease"
                : "transform 200ms ease, opacity 200ms ease",
            }}
          >
            {tagline}
          </p>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1)" : "scale(0.7)",
              transition: hovered
                ? "opacity 350ms ease 100ms, transform 350ms cubic-bezier(0.22,1,0.36,1) 100ms"
                : "opacity 200ms ease, transform 200ms ease",
            }}
          >
            <CricketWingsSVG color={theme.wingColor} />
          </div>

          <div
            className="absolute left-[8%] top-1/2 text-[52px] leading-none"
            style={{
              transform: hovered
                ? "translate(0, -50%) rotate(-12deg)"
                : "translate(-80px, -50%) rotate(-12deg)",
              opacity: hovered ? 1 : 0,
              transition: hovered
                ? "transform 400ms cubic-bezier(0.22,1,0.36,1) 150ms, opacity 400ms ease 150ms"
                : "transform 200ms ease, opacity 200ms ease",
              filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))",
            }}
          >
            {theme.floatLeft}
          </div>

          <div
            className="absolute right-[8%] top-1/2 text-[52px] leading-none"
            style={{
              transform: hovered
                ? "translate(0, -50%) rotate(12deg)"
                : "translate(80px, -50%) rotate(12deg)",
              opacity: hovered ? 1 : 0,
              transition: hovered
                ? "transform 400ms cubic-bezier(0.22,1,0.36,1) 150ms, opacity 400ms ease 150ms"
                : "transform 200ms ease, opacity 200ms ease",
              filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))",
            }}
          >
            {theme.floatRight}
          </div>

          <Link
            href={`/product/${product.slug}`}
            className="relative z-[5] block"
            style={{
              transform: hovered ? "translateY(-8px) scale(1.03)" : "translateY(0) scale(1)",
              transition: hovered
                ? "transform 600ms cubic-bezier(0.22,1,0.36,1)"
                : "transform 200ms ease",
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
            }}
          >
            <ProductVisual
              category={product.category}
              playerSlug={product.playerSlug}
              playerName={product.player}
              className="!h-[220px] !w-[220px] !border-0 !bg-transparent"
            />
          </Link>
        </div>

        <div
          className="flex gap-2 px-4 pb-4"
          style={{
            transform: hovered ? "translateY(0)" : "translateY(72px)",
            opacity: hovered ? 1 : 0,
            transition: hovered
              ? "transform 350ms cubic-bezier(0.22,1,0.36,1) 200ms, opacity 350ms ease 200ms"
              : "transform 200ms ease, opacity 200ms ease",
          }}
        >
          <button
            type="button"
            onClick={handleAdd}
            disabled={!product.inStock || cartState === "adding"}
            className="flex flex-1 items-center justify-between rounded-full bg-cream px-4 py-3.5 font-display text-sm font-bold tracking-wider text-[#0A0700] transition-colors hover:bg-[#F5F0E8] disabled:opacity-50"
          >
            <span>{cartState === "added" ? "ADDED" : cartState === "adding" ? "..." : "ADD TO CART"}</span>
            <span className="font-mono font-bold">{formatPrice(product.price)}</span>
          </button>
          <Link
            href={`/product/${product.slug}`}
            className="flex flex-1 items-center justify-between rounded-full border-2 border-cream bg-black/25 px-4 py-3.5 font-display text-sm font-bold tracking-wider text-cream transition-colors hover:bg-cream/10"
          >
            <span>{viewLabel}</span>
            <span className="text-base">↗</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
