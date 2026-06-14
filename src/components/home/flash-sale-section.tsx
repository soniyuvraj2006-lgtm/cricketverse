"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/product-card";
import { FlashSaleTimer } from "@/components/home/flash-sale-timer";
import { getFlashSaleProducts } from "@/lib/data/products";

export function FlashSaleSection() {
  const products = getFlashSaleProducts().slice(0, 4);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0200]" />
      <div className="absolute inset-0 bg-[radial-gradient(500px_at_top_right,rgba(239,68,68,0.2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(400px_at_bottom_left,rgba(200,100,30,0.15),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-alert">
              <motion.span
                className="h-2 w-2 rounded-full bg-alert"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              LIVE NOW
            </span>
            <h2 className="font-display text-[var(--display-md)] text-primary">FLASH SALE</h2>
            <p className="mt-2 font-body text-[13px] text-white/40">Sale ends when timer hits zero</p>
          </div>
          <FlashSaleTimer />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} showStockBar flashMode />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/flash-sale" className="font-body text-sm font-medium text-gold hover:underline">
            View All Flash Deals →
          </Link>
        </div>
      </div>
    </section>
  );
}
