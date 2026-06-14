"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroProductPanel } from "@/components/ui/product-visual";

const stats = [
  { value: "50K+", label: "Happy Fans" },
  { value: "500+", label: "Products" },
  { value: "100%", label: "Authentic" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-void pt-28">
      <div className="dot-grid pointer-events-none absolute inset-0" />

      <motion.div
        className="pointer-events-none absolute right-0 top-1/4 h-[900px] w-[900px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(200,168,75,0.06) 0%, transparent 70%)" }}
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 60%)" }}
        animate={{ opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="pitch-line absolute left-0 right-0 top-[70%]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1440px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-10 lg:px-20">
        {/* Left column — text constrained */}
        <div className="max-w-[560px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-gold"
          >
            <motion.span initial={{ width: 0 }} animate={{ width: 40 }} transition={{ delay: 0.3, duration: 0.3 }} className="h-px bg-gold" />
            INDIA&apos;S PREMIUM CRICKET STORE
            <motion.span initial={{ width: 0 }} animate={{ width: 40 }} transition={{ delay: 0.3, duration: 0.3 }} className="h-px bg-gold" />
          </motion.div>

          <h1 className="leading-none">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block font-display text-[clamp(40px,6vw,88px)] text-primary"
            >
              OWN THE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block overflow-hidden font-display text-[clamp(56px,9vw,120px)] leading-none text-gradient-gold drop-shadow-[0_0_20px_rgba(200,168,75,0.3)]"
            >
              LEGENDS
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block font-display text-[clamp(40px,6vw,88px)] text-primary"
            >
              OF CRICKET
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-6 max-w-md font-body text-lg text-secondary"
          >
            Premium jerseys, steel cards, magnets, posters &amp; rare collectibles — curated for every Indian cricket fan.
          </motion.p>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.25 }} className="mt-10 flex flex-wrap gap-4">
            <Link href="/jerseys">
              <motion.span
                whileHover={{ y: -2, boxShadow: "0 0 0 4px rgba(200,168,75,0.2)" }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded bg-gold px-8 py-3.5 font-body text-[15px] font-bold text-void"
              >
                Shop Now
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </motion.span>
            </Link>
            <Link href="/collectibles">
              <motion.span
                whileHover={{ backgroundColor: "rgba(200,168,75,0.08)" }}
                className="inline-flex rounded border border-[var(--border-active)] px-8 py-3.5 font-body font-medium text-gold"
              >
                Explore Collections
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-12 flex gap-8 border-t border-white/10 pt-8"
          >
            {stats.map((s, i) => (
              <div key={s.label} className={i > 0 ? "border-l border-gold/20 pl-8" : ""}>
                <p className="font-mono text-2xl font-bold text-gold">{s.value}</p>
                <p className="font-body text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column — panels contained */}
        <div className="relative hidden h-[600px] lg:block">
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [-3, -2, -3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-10"
          >
            <HeroProductPanel type="JERSEY" title="Virat Kohli Edition" price="₹1,299" number="18" delay={0} className="w-[180px]" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <HeroProductPanel type="STEEL CARD" title="MS Dhoni Legend Card" price="₹799" initials="MSD" subtitle="LEGEND EDITION" delay={0.15} className="w-[200px]" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [2, 3, 2] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-10 right-0"
          >
            <HeroProductPanel type="POSTER" title="World Cup Victory" price="₹599" delay={0.3} className="w-[160px]" />
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex h-8 w-5 items-start justify-center rounded-full border border-muted pt-1.5">
          <div className="h-2 w-1 rounded-full bg-electric" />
        </motion.div>
      </motion.div>
    </section>
  );
}
