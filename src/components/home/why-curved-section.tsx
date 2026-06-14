"use client";

import { motion } from "framer-motion";
import { CricketBallIllustration } from "@/components/shared/cricket-illustrations";
export function WhyCurvedSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0700] py-24">
      <svg className="mx-auto mb-12 w-full max-w-5xl" viewBox="0 0 1200 200" fill="none">
        <defs>
          <path id="why-curve" d="M 0,180 Q 600,40 1200,180" />
        </defs>
        <text fill="#E8DCC8" fontFamily="Barlow Condensed, sans-serif" fontSize="120" fontWeight="900" letterSpacing="-0.02em">
          <textPath href="#why-curve" startOffset="50%" textAnchor="middle">
            WHY CRICKETVERSE
          </textPath>
        </text>
      </svg>

      <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 md:flex-row md:items-center">
        <p className="max-w-xl font-display text-[clamp(24px,3vw,30px)] font-bold leading-snug text-cream">
          WE SELL CRICKET GEAR BECAUSE MASS-PRODUCED MERCH TASTES LIKE SADNESS.{" "}
          <span className="font-black">WE&apos;RE ENDING BORING FAN GEAR.</span>
        </p>
        <motion.div animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <div className="relative">
            <CricketBallIllustration className="h-32 w-32" />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
