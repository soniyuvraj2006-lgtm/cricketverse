"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";
import { getTrendingProducts } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";
import { ProductVisual } from "@/components/ui/product-visual";
import { CricketBallIllustration, CricketBatIllustration } from "@/components/shared/cricket-illustrations";

const cardStyles = [
  {
    bg: "#D35400",
    tagline: "Legend Heat. Clean Finish. No Compromises.",
    accent: "#0A0700",
  },
  {
    bg: "#1B3A6B",
    tagline: "Collector's Grade. Frame-Worthy. Built to Last.",
    accent: "#E8DCC8",
  },
  {
    bg: "#B8860B",
    tagline: "Epic Moment. Epic Size. Stadium Energy.",
    accent: "#0A0700",
  },
];

function splitTitle(name: string): string[] {
  const words = name.toUpperCase().split(" ");
  if (words.length <= 2) return [name.toUpperCase()];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export function ProductShowcaseCards() {
  const products = getTrendingProducts().slice(0, 3);
  const addItem = useCartStore((s) => s.addItem);
  const [addingId, setAddingId] = useState<string | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (productId: string, product: (typeof products)[0]) => {
    setAddingId(productId);
    setTimeout(() => {
      addItem(product);
      setAddingId(null);
      setAddedId(productId);
      setTimeout(() => setAddedId(null), 2000);
    }, 350);
  };

  return (
    <section className="overflow-visible bg-[#0A0700] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-10 text-center">
          <span className="pill-label text-xs">• SHOP THE LINEUP •</span>
        </p>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          {products.map((product, i) => {
            const style = cardStyles[i];
            const titleLines = splitTitle(product.name);
            const isAdding = addingId === product.id;
            const isAdded = addedId === product.id;
            const btnText = isAdded ? "#0A0700" : style.accent;
            const btnBg = isAdded ? "#1a4a2a" : "#E8DCC8";

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="flex h-[620px] flex-col rounded-2xl border-[3px] border-[#0A0700] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                style={{ background: style.bg }}
              >
                <div className="flex h-full flex-col rounded-xl border-2 border-dashed border-cream/70 p-5">
                  {/* Title block */}
                  <div className="text-center">
                    {titleLines.map((line) => (
                      <h3
                        key={line}
                        className="font-display text-[clamp(22px,3.5vw,28px)] font-black leading-[0.95] tracking-tight text-cream"
                      >
                        {line}
                      </h3>
                    ))}
                    <p className="mt-3 font-body text-sm leading-snug text-cream/90">{style.tagline}</p>
                  </div>

                  {/* Product visual */}
                  <div className="relative my-6 flex flex-1 items-center justify-center">
                    <motion.div
                      className="pointer-events-none absolute -left-2 top-8 opacity-70"
                      animate={{ y: [0, -10, 0], rotate: [-8, -4, -8] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <CricketBallIllustration className="h-14 w-14" />
                    </motion.div>
                    <motion.div
                      className="pointer-events-none absolute -right-1 bottom-6 opacity-60"
                      animate={{ y: [0, 8, 0], rotate: [12, 8, 12] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    >
                      <CricketBatIllustration className="h-16 w-16" />
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10 w-[min(100%,240px)] shrink-0 overflow-hidden rounded-xl"
                    >
                      <ProductVisual
                        category={product.category}
                        playerSlug={product.playerSlug}
                        playerName={product.player}
                        imageSrc={product.images[0]}
                        className="!h-[200px] md:!h-[220px]"
                      />
                    </motion.div>
                  </div>

                  {/* Action buttons — always visible, side by side like Bucks */}
                  <div className="mt-auto grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleAdd(product.id, product)}
                      disabled={isAdding || !product.inStock}
                      className="flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-[11px] font-bold uppercase tracking-wide transition-all md:text-xs"
                      style={{
                        background: isAdded ? btnBg : "#E8DCC8",
                        color: isAdded ? "#E8DCC8" : btnText,
                      }}
                    >
                      <span>{isAdding ? "Adding..." : isAdded ? "Added" : "Add to Cart"}</span>
                      <span className="font-mono text-[11px] md:text-xs">{formatPrice(product.price)}</span>
                    </button>

                    <Link
                      href={`/product/${product.slug}`}
                      className="flex items-center justify-between rounded-xl border-2 border-cream/80 px-4 py-3.5 font-display text-[11px] font-bold uppercase tracking-wide text-cream transition-colors hover:bg-cream/10 md:text-xs"
                    >
                      <span>View Product</span>
                      <ArrowUpRight size={16} className="flex-shrink-0" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
