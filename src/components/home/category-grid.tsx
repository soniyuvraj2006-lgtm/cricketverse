"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { JerseySilhouette } from "@/components/icons";
import type { Category } from "@/lib/types";

const categories: {
  slug: Category;
  span: string;
  gradient: string;
  title: [string, string];
  count: string;
  accent?: string;
}[] = [
  {
    slug: "jerseys",
    span: "col-span-2 row-span-2 min-h-[300px] lg:col-span-5 lg:row-span-2",
    gradient: "linear-gradient(160deg, #0B1A2F 0%, #071020 60%, #0B1A2F 100%)",
    title: ["Cricket", "Jerseys"],
    count: "12 products",
  },
  {
    slug: "steel-cards",
    span: "col-span-1 min-h-[160px] lg:col-span-4",
    gradient: "linear-gradient(135deg, #141420, #1E1E32)",
    title: ["Steel Player", "Cards"],
    count: "10 products",
  },
  {
    slug: "fridge-magnets",
    span: "col-span-1 min-h-[160px] lg:col-span-3",
    gradient: "linear-gradient(135deg, #200E0E, #2A1818)",
    title: ["Fridge", "Magnets"],
    count: "8 products",
  },
  {
    slug: "posters",
    span: "col-span-1 min-h-[160px] lg:col-span-4",
    gradient: "linear-gradient(135deg, #0E1820, #121E2A)",
    title: ["Cricket", "Posters"],
    count: "8 products",
  },
  {
    slug: "collectibles",
    span: "col-span-1 min-h-[160px] lg:col-span-3",
    gradient: "linear-gradient(135deg, #1A1206, #221808)",
    title: ["Limited", "Collectibles"],
    count: "8 products",
  },
];

function CategoryCard({ cat, index }: { cat: (typeof categories)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      className={`group relative overflow-hidden rounded-2xl border border-[var(--border-dim)] transition-colors hover:border-[var(--border-active)] ${cat.span}`}
      style={{ background: cat.gradient }}
    >
      <Link href={`/${cat.slug}`} className="absolute inset-0 z-10" />
      {cat.slug === "jerseys" && <JerseySilhouette />}
      {cat.slug === "jerseys" && (
        <div className="absolute right-4 top-1/2 h-[40%] w-px -translate-y-1/2 bg-gold/30" />
      )}
      <div className="relative flex h-full flex-col justify-end p-6">
        <span className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {cat.slug.replace("-", " ").toUpperCase()}
        </span>
        <p className="font-body text-2xl font-light text-secondary">{cat.title[0]}</p>
        <p
          className={`font-display leading-tight text-primary ${
            cat.slug === "jerseys" ? "text-[clamp(28px,4vw,48px)]" : "text-[clamp(22px,3.5vw,36px)] line-clamp-2"
          }`}
        >
          {cat.title[1]}
        </p>
        <p className="mt-2 font-mono text-xs text-gold">{cat.count}</p>
        <p className="mt-3 translate-y-2 font-body text-sm font-medium text-gold opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          Shop Now →
        </p>
      </div>
    </motion.div>
  );
}

export function CategoryGrid() {
  return (
    <section className="section-padding bg-deep">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[var(--display-md)] text-primary"
        >
          THE LINEUP
        </motion.h2>
        <p className="mt-2 font-body text-secondary">Find your perfect cricket merchandise</p>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:gap-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
