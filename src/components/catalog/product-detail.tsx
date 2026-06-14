"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Share2, Truck, RotateCcw, Shield, Flame } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { ProductVisual } from "@/components/ui/product-visual";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ui/product-card";
import { PageHero } from "@/components/bucks/page-hero";
import { BucksInfoCard } from "@/components/bucks/info-card";
import { useCartStore } from "@/stores/cart-store";
import { useWishlistStore } from "@/stores/wishlist-store";
import { products } from "@/lib/data/products";

const panelByCategory: Record<string, { bg: string; subtitle: string }> = {
  jerseys: { bg: "#D35400", subtitle: "MEET THE JERSEY THAT EARNS RESPECT" },
  "steel-cards": { bg: "#B8860B", subtitle: "COLLECTOR GRADE. BUILT TO DISPLAY." },
  posters: { bg: "#8B1A1A", subtitle: "WALL ART THAT HITS DIFFERENT" },
  "fridge-magnets": { bg: "#1B3A6B", subtitle: "SMALL SIZE. BIG FAN ENERGY." },
  collectibles: { bg: "#C8A84B", subtitle: "LIMITED RUNS. LEGENDARY FEEL." },
  "signed-merch": { bg: "#1A4A2A", subtitle: "SIGNED. SEALED. LEGENDARY." },
};

const trustBadges = [
  { label: "100% AUTHENTIC", icon: "✓" },
  { label: "SHIPS 24H", icon: "⚡" },
  { label: "15-DAY RETURNS", icon: "↩" },
  { label: "SECURE CHECKOUT", icon: "🔒" },
];

interface ProductDetailProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[1] ?? "");
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name ?? "");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [cartState, setCartState] = useState<"idle" | "adding" | "added">("idle");
  const addItem = useCartStore((s) => s.addItem);
  const { toggleItem, isInWishlist } = useWishlistStore();
  const discount = calculateDiscount(product.price, product.mrp);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const panel = panelByCategory[product.category] ?? { bg: "#D35400", subtitle: "OWN THE LEGENDS. WEAR THE LEGACY." };

  const tabs = ["description", "specifications", "reviews", "shipping"];
  const nameParts = product.name.split(" ");
  const titleOutline = nameParts.slice(0, Math.ceil(nameParts.length / 2)).join(" ").toUpperCase();
  const titleFilled = nameParts.slice(Math.ceil(nameParts.length / 2)).join(" ").toUpperCase() || product.name.toUpperCase();

  const handleAddToCart = () => {
    setCartState("adding");
    setTimeout(() => {
      addItem(product, quantity, selectedSize, selectedColor);
      setCartState("added");
      setTimeout(() => setCartState("idle"), 2000);
    }, 400);
  };

  return (
    <div className="bg-[#0A0700]">
      {/* Bucks split hero */}
      <div className="grid min-h-[calc(100vh-80px)] lg:grid-cols-2">
        <div className="relative flex min-h-[420px] items-center justify-center px-6 py-16 lg:sticky lg:top-20 lg:min-h-[calc(100vh-80px)]" style={{ background: panel.bg }}>
          <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-cream/40" />
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 w-full max-w-sm">
            <ProductVisual
              category={product.category}
              playerSlug={product.playerSlug}
              playerName={product.player}
              badge={product.flashSale ? "SALE" : product.trending ? "TRENDING" : undefined}
              badgeVariant={product.flashSale ? "sale" : "gold"}
              discount={discount > 0 ? `${discount}% OFF` : undefined}
              className="!h-[360px] border-2 border-cream/20 shadow-2xl lg:!h-[420px]"
            />
          </motion.div>
          <div className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3">
            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-[#0A0700]" aria-label="Previous">
              <ChevronLeft size={22} />
            </button>
            <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-[#0A0700]" aria-label="Next">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="bucks-dot-bg flex flex-col justify-center px-6 py-12 lg:px-12 lg:py-16">
          <p className="font-mono text-[11px] tracking-[0.25em] text-cream/50">PRODUCT N0.{product.id.slice(-2).padStart(2, "0")}</p>
          <h1 className="mt-2 font-display text-[clamp(32px,5vw,52px)] font-black leading-[0.95] text-outline">{titleOutline}</h1>
          <h1 className="font-display text-[clamp(32px,5vw,52px)] font-black leading-[0.95] text-cream">{titleFilled}</h1>
          <p className="mt-3 font-display text-sm font-bold tracking-wider text-cream/70">{panel.subtitle}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {product.player && (
              <Link href={`/players/${product.playerSlug}`} className="font-mono text-xs uppercase tracking-wider text-gold">{product.player}</Link>
            )}
            {product.team && <Badge>{product.team}</Badge>}
            <StarRating rating={product.rating} showValue reviewCount={product.reviewCount} />
            <span className="flex items-center gap-1 font-mono text-xs text-gold"><Flame size={14} /> {product.soldThisWeek} sold</span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <BucksInfoCard title="Fan Profile">
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-gold">🔥</span> Premium licensed quality</li>
                <li className="flex gap-2"><span className="text-gold">🔥</span> Built for match-day wear</li>
                <li className="flex gap-2"><span className="text-gold">🔥</span> Collector-approved finish</li>
              </ul>
            </BucksInfoCard>
            <BucksInfoCard title="Pairs With">
              <p>Match-day fits, stadium posters, steel cards for your desk, and limited collectibles for the ultimate fan cave.</p>
            </BucksInfoCard>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-lg">{b.icon}</div>
                <span className="max-w-[72px] text-center font-mono text-[9px] uppercase tracking-wide text-cream/60">{b.label}</span>
              </div>
            ))}
          </div>

          <div className="bucks-divider my-8" />

          <div className="flex items-baseline gap-3">
            <span className="font-mono text-4xl font-bold text-gold">{formatPrice(product.price)}</span>
            {discount > 0 && (
              <>
                <span className="font-mono text-lg text-cream/40 line-through">{formatPrice(product.mrp)}</span>
                <Badge variant="sale">{discount}% OFF</Badge>
              </>
            )}
          </div>

          {product.sizes && (
            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-display text-sm font-bold tracking-wider text-cream">SIZE</span>
                <Link href="/size-guide" className="font-mono text-xs text-gold hover:underline">Size Guide</Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-full border px-5 py-2 font-mono text-sm transition-colors ${
                      selectedSize === size ? "border-cream bg-cream text-[#0A0700]" : "border-cream/30 text-cream hover:border-cream"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.colors && (
            <div className="mt-6">
              <span className="mb-3 block font-display text-sm font-bold tracking-wider text-cream">COLOR</span>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color.name)}
                    title={color.name}
                    className={`h-9 w-9 rounded-full border-2 ${
                      selectedColor === color.name ? "border-gold ring-2 ring-gold/30" : "border-cream/25"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-end gap-4">
            <div>
              <span className="mb-2 block font-display text-sm font-bold tracking-wider text-cream">QUANTITY</span>
              <div className="inline-flex items-center rounded-full border border-cream/30">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-lg hover:text-gold">−</button>
                <span className="w-10 text-center font-mono">{quantity}</span>
                <button type="button" onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-lg hover:text-gold">+</button>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!product.inStock || cartState === "adding"}
              className="flex w-full items-center justify-between rounded-xl px-6 py-4 font-display text-sm font-bold uppercase tracking-wider transition-all disabled:opacity-50"
              style={{
                background: cartState === "added" ? "#1a4a2a" : panel.bg,
                color: "#E8DCC8",
              }}
            >
              <span>
                {cartState === "idle" && (product.inStock ? "Add to Cart" : "Out of Stock")}
                {cartState === "adding" && "Adding..."}
                {cartState === "added" && "Added to Cart"}
              </span>
              {product.inStock && <span className="font-mono">{formatPrice(product.price * quantity)}</span>}
            </button>
            <Link href="/checkout" className="block">
              <Button variant="outline" className="w-full">Buy Now</Button>
            </Link>
          </div>

          <div className="mt-4 flex gap-3">
            <Button variant="outline" size="sm" onClick={() => toggleItem(product)} className="flex-1">
              <Heart size={16} className={isInWishlist(product.id) ? "fill-cricket-red text-cricket-red" : ""} />
              {isInWishlist(product.id) ? "Saved" : "Wishlist"}
            </Button>
            <Button variant="outline" size="sm" className="flex-1"><Share2 size={16} /> Share</Button>
          </div>
        </div>
      </div>

      {/* Tabs + related */}
      <div className="section-padding border-t border-cream/10">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/40">
            <Link href="/" className="hover:text-gold">Home</Link>
            {" / "}
            <Link href={`/${product.category}`} className="hover:text-gold capitalize">{product.category.replace("-", " ")}</Link>
            {" / "}
            <span className="text-cream/70">{product.name}</span>
          </nav>

          <div className="flex gap-6 overflow-x-auto border-b border-cream/10">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`pb-3 font-display text-sm font-bold uppercase tracking-wider transition-colors ${
                  activeTab === tab ? "border-b-2 border-gold text-gold" : "text-cream/50 hover:text-cream"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="py-8">
            {activeTab === "description" && <p className="max-w-3xl font-body leading-relaxed text-secondary">{product.description}</p>}
            {activeTab === "specifications" && (
              <dl className="grid max-w-2xl gap-4 sm:grid-cols-2">
                {[
                  ["Material", "Premium Polyester Blend"],
                  ["Brand", "CricketVerse Licensed"],
                  ["Player", product.player ?? "N/A"],
                  ["Team", product.team ?? "N/A"],
                  ["Category", product.category],
                  ["SKU", product.id.toUpperCase()],
                ].map(([key, val]) => (
                  <div key={key} className="bucks-panel">
                    <dt className="font-mono text-xs text-cream/40">{key}</dt>
                    <dd className="mt-1 font-body font-medium capitalize text-cream">{val}</dd>
                  </div>
                ))}
              </dl>
            )}
            {activeTab === "reviews" && (
              <div className="max-w-2xl space-y-4">
                {[5, 4, 5].map((rating, i) => (
                  <div key={i} className="bucks-panel">
                    <StarRating rating={rating} size={14} />
                    <p className="mt-2 font-body text-sm text-secondary">Amazing quality! Exactly as described. Will buy again from CricketVerse.</p>
                    <p className="mt-2 font-mono text-xs text-cream/40">Verified Buyer — 2 weeks ago</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "shipping" && (
              <div className="max-w-2xl space-y-3 font-body text-secondary">
                <p className="flex items-center gap-2"><Truck size={16} className="text-gold" /> Standard delivery: 3-5 business days</p>
                <p className="flex items-center gap-2"><Truck size={16} className="text-gold" /> Express delivery: 1-2 business days (₹199)</p>
                <p className="flex items-center gap-2"><RotateCcw size={16} className="text-gold" /> Free returns within 15 days</p>
                <p className="flex items-center gap-2"><Shield size={16} className="text-gold" /> Fully insured shipping</p>
              </div>
            )}
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <PageHero eyebrow="You may also like" title="BOUGHT" titleOutline="FANS ALSO" />
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
