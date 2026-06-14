"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductVisualHero } from "@/components/shared/cricket-illustrations";

const slides = [
  {
    id: 1,
    lines: [
      { text: "THE CRICKET JERSEY", outline: true },
      { text: "THAT MAKES", outline: false, large: true },
      { text: "OTHER FANS JEALOUS", outline: true },
    ],
    productNum: "PRODUCT N0.01",
    productName: "VIRAT KOHLI JERSEY",
    glow: "#003B7E",
    visual: "jersey" as const,
    href: "/product/virat-kohli-replica-jersey-2024",
  },
  {
    id: 2,
    lines: [
      { text: "THE STEEL CARD", outline: true },
      { text: "LEGENDS", outline: false, large: true },
      { text: "COLLECT", outline: true },
    ],
    productNum: "PRODUCT N0.02",
    productName: "MS DHONI STEEL CARD",
    glow: "#B8860B",
    visual: "card" as const,
    href: "/steel-cards",
  },
  {
    id: 3,
    lines: [
      { text: "THE POSTER THAT", outline: true },
      { text: "GIVES YOUR WALL", outline: false, large: true },
      { text: "GOOSEBUMPS", outline: true },
    ],
    productNum: "PRODUCT N0.03",
    productName: "WORLD CUP POSTER",
    glow: "#8B1A1A",
    visual: "poster" as const,
    href: "/posters",
  },
  {
    id: 4,
    lines: [
      { text: "THE FRIDGE MAGNET", outline: true },
      { text: "FANS FIGHT", outline: false, large: true },
      { text: "OVER", outline: true },
    ],
    productNum: "PRODUCT N0.04",
    productName: "ROHIT MAGNET SET",
    glow: "#003B7E",
    visual: "magnet" as const,
    href: "/fridge-magnets",
  },
  {
    id: 5,
    lines: [
      { text: "THE COLLECTIBLE", outline: true },
      { text: "GODS OF CRICKET", outline: false, large: true },
      { text: "APPROVE OF", outline: true },
    ],
    productNum: "PRODUCT N0.05",
    productName: "SACHIN COLLECTIBLE",
    glow: "#C8A84B",
    visual: "collectible" as const,
    href: "/collectibles",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative min-h-screen overflow-visible bg-[#0A0700] pt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div key={slide.id} custom={direction} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="max-w-4xl">
              {slide.lines.map((line, i) => (
                <motion.h1
                  key={line.text}
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0% 0 0 0)" }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "font-display font-black leading-[0.95] tracking-tight",
                    line.outline ? "text-outline" : "text-cream",
                    line.large ? "text-[clamp(56px,11vw,140px)]" : "text-[clamp(40px,8vw,100px)]"
                  )}
                >
                  {line.text}
                </motion.h1>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 mt-8 flex items-center border-t border-white/15 pt-4">
          <AnimatePresence mode="wait">
            <motion.span key={slide.productNum} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-[11px] tracking-[0.25em] text-cream/50">
              {slide.productNum}
            </motion.span>
          </AnimatePresence>
          <div className="flex-1" />
          <AnimatePresence mode="wait">
            <motion.span key={slide.productName} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-[11px] tracking-[0.25em] text-cream/50">
              {slide.productName}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative mx-auto flex justify-center">
        <motion.div
          key={slide.glow}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-[-80px] left-1/2 z-[1] h-[380px] w-[380px] -translate-x-1/2 rounded-full"
          style={{ background: slide.glow }}
        />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ x: direction > 0 ? "120%" : "-120%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? "-120%" : "120%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[2]"
          >
            <Link href={slide.href}>
              <ProductVisualHero type={slide.visual} />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute bottom-32 left-0 right-0 z-20 mx-auto flex max-w-7xl justify-between px-4 lg:px-8">
        <button
          onClick={() => go(-1)}
          className="pointer-events-auto flex h-[72px] w-[72px] animate-pulse-arrow items-center justify-center rounded-full bg-cream text-[#0A0700] transition-transform hover:scale-110"
          aria-label="Previous product"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={() => go(1)}
          className="pointer-events-auto flex h-[72px] w-[72px] animate-pulse-arrow items-center justify-center rounded-full bg-cream text-[#0A0700] transition-transform hover:scale-110"
          aria-label="Next product"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
