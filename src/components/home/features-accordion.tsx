"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CricketBallIllustration, WicketsIllustration } from "@/components/shared/cricket-illustrations";

const items = [
  {
    label: "100% AUTHENTIC",
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" stroke="#E8DCC8" strokeWidth="1.5">
        <path d="M32 8L8 16v16c0 14 10.5 26.5 24 30 13.5-3.5 24-16 24-30V16L32 8z" />
        <path d="M22 32l8 8 16-16" strokeLinecap="round" />
      </svg>
    ),
    desc: "Every jersey, card, and poster is officially licensed. Not a replica. Not a knockoff. The real deal — the same quality worn by legends.",
  },
  {
    label: "SHIPS IN 24 HOURS",
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 64 64" fill="#E8DCC8">
        <path d="M36 4L16 36h16l-4 24 28-36H40l4-20z" />
      </svg>
    ),
    desc: "Ordered before 5PM? We pack and dispatch the same day. Pan-India delivery. Your gear arrives before the next match.",
  },
  {
    label: "COLLECTOR QUALITY",
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" stroke="#E8DCC8" strokeWidth="1.5">
        <path d="M32 6l6 18h19l-15 11 6 18-16-12-16 12 6-18-15-11h19z" />
      </svg>
    ),
    desc: "Our steel cards and limited edition items are built to display. Thick steel, UV-print, sealed edges. Not a trinket — a trophy.",
  },
  {
    label: "15-DAY RETURNS",
    icon: (
      <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" stroke="#E8DCC8" strokeWidth="1.5">
        <path d="M20 32a12 12 0 1 0 3.5-8.5" strokeLinecap="round" />
        <path d="M20 16v16h16" strokeLinecap="round" />
      </svg>
    ),
    desc: "If it's not right, we make it right. No interrogation. No forms. Just message us and we handle it.",
  },
];

export function FeaturesAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#0A0700] py-24">
      <div className="pointer-events-none absolute left-[5%] top-[10%] opacity-20">
        <CricketBallIllustration className="h-48 w-48 rotate-12" />
      </div>
      <div className="pointer-events-none absolute right-[5%] bottom-[10%] opacity-20">
        <WicketsIllustration className="h-52 w-52 -rotate-6" />
      </div>

      <div className="relative z-10 mx-auto max-w-[600px] px-4">
        {items.map((item, i) => (
          <div key={item.label}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-center gap-2 border border-[#0A0700] bg-cream py-4 font-display text-sm font-bold tracking-wider text-[#0A0700] transition-colors hover:bg-gold"
            >
              • {item.label} •
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden bg-[#0A0700]"
                >
                  <div className="flex flex-col items-center gap-4 px-6 py-8 text-center">
                    {item.icon}
                    <p className="font-body text-sm leading-relaxed text-cream/80">{item.desc}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
