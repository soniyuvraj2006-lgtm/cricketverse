"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/product-card";
import { getTrendingProducts } from "@/lib/data/products";

export function TrendingSection() {
  const products = getTrendingProducts();

  return (
    <section className="section-padding bg-deep">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-[var(--display-md)] text-primary"
            >
              TRENDING NOW
            </motion.h2>
            <p className="mt-2 font-body text-secondary">What cricket fans are buying right now</p>
            <div className="mt-4 h-px w-[120px] bg-gradient-to-r from-gold to-transparent" />
          </div>
          <Link href="/jerseys" className="group hidden items-center gap-1 font-body text-sm font-medium text-gold md:flex">
            View All
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {products.map((product, i) => (
            <div key={product.id} className="w-[260px] flex-shrink-0">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
