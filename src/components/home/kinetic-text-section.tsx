"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { CricketBallIllustration, CricketBatIllustration, WicketsIllustration } from "@/components/shared/cricket-illustrations";

export function KineticTextSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0A0700] py-32">
      <div className="pointer-events-none absolute left-[5%] top-[20%] opacity-40">
        <CricketBallIllustration className="h-32 w-32 animate-float-y" />
      </div>
      <div className="pointer-events-none absolute right-[8%] top-[40%] opacity-30">
        <WicketsIllustration className="h-40 w-40" />
      </div>
      <div className="pointer-events-none absolute bottom-[15%] left-[15%] opacity-25">
        <CricketBatIllustration className="h-28 w-28 rotate-12" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Link href="/jerseys" className="pill-btn-filled mb-16 inline-flex h-16 items-center px-12 text-lg">
          SHOP THE COLLECTION
        </Link>
        <motion.div style={{ y }} className="space-y-6 text-left font-body text-[clamp(28px,4vw,52px)] leading-snug text-cream">
          <p>Our cricket gear is crafted for real fans who bleed blue.</p>
          <p className="text-[0.85em] opacity-80">Wear it on match day, display it in your room</p>
          <p>
            and act <span className="text-[0.75em]">surprised</span> when people think you&apos;re the biggest cricket fan they&apos;ve ever met.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
