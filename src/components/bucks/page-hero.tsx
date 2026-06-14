"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleOutline?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function PageHero({ eyebrow, title, titleOutline, subtitle, align = "left" }: PageHeroProps) {
  const centered = align === "center";

  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-cream/50">
          {centered ? `• ${eyebrow} •` : eyebrow}
        </p>
      )}
      {titleOutline && (
        <motion.h1
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(40px,8vw,96px)] font-black leading-[0.95] text-outline"
        >
          {titleOutline}
        </motion.h1>
      )}
      <motion.h1
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[clamp(40px,8vw,96px)] font-black leading-[0.95] text-cream"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <p className={`mt-4 max-w-xl font-body text-secondary ${centered ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
    </div>
  );
}
