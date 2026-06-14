"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloaderStore } from "@/stores/preloader-store";
import { CricketBallIllustration, CricketBatIllustration, JerseyIllustration, SteelCardIllustration, LogoMark } from "@/components/shared/cricket-illustrations";

const flyingItems = [
  { Component: CricketBallIllustration, from: { x: -200, y: -200 }, to: { x: "22%", y: "28%" }, rotate: -12 },
  { Component: CricketBatIllustration, from: { x: 200, y: -200 }, to: { x: "72%", y: "22%" }, rotate: 15 },
  { Component: JerseyIllustration, from: { x: -200, y: 200 }, to: { x: "20%", y: "68%" }, rotate: -8 },
  { Component: SteelCardIllustration, from: { x: 200, y: 200 }, to: { x: "74%", y: "70%" }, rotate: 10 },
];

export function Preloader() {
  const { hasSeenPreloader, setComplete, skipPreloader } = usePreloaderStore();
  const [phase, setPhase] = useState<"logo" | "wipe" | "done">("logo");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || hasSeenPreloader) return;
    const skipTimer = setTimeout(() => skipPreloader(), 1000);
    const wipeTimer = setTimeout(() => setPhase("wipe"), 800);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      setComplete();
    }, 2000);
    return () => {
      clearTimeout(skipTimer);
      clearTimeout(wipeTimer);
      clearTimeout(doneTimer);
    };
  }, [mounted, hasSeenPreloader, setComplete, skipPreloader]);

  if (!mounted || hasSeenPreloader) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#0A0700]"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={skipPreloader}
        role="presentation"
      >
        {flyingItems.map(({ Component, from, to, rotate }, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ x: from.x, y: from.y, opacity: 0, rotate: 0 }}
            animate={{ x: to.x, y: to.y, opacity: 1, rotate }}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            style={{ left: 0, top: 0 }}
          >
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
              <Component className="h-24 w-24 md:h-28 md:w-28" />
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="relative z-20 flex flex-col items-center gap-3"
        >
          <LogoMark className="h-16 w-16" />
          <span className="font-display text-2xl font-black tracking-wide text-cream">
            CRICKET<span className="text-gold">VERSE</span>
          </span>
        </motion.div>

        <AnimatePresence>
          {phase === "wipe" && (
            <>
              <motion.div
                className="absolute left-1/2 top-1/2 z-30 rounded-full bg-india-blue"
                initial={{ scale: 0, x: "-50%", y: "-50%" }}
                animate={{ scale: 5 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                style={{ width: 200, height: 200, marginLeft: -100, marginTop: -100 }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 z-31 rounded-full bg-gold"
                initial={{ scale: 0, x: "-50%", y: "-50%" }}
                animate={{ scale: 4 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                style={{ width: 160, height: 160, marginLeft: -80, marginTop: -80 }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 z-32 rounded-full bg-[#0A0700]"
                initial={{ scale: 0, x: "-50%", y: "-50%" }}
                animate={{ scale: 2 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
                style={{ width: 80, height: 80, marginLeft: -40, marginTop: -40 }}
              />
            </>
          )}
        </AnimatePresence>

        <p className="absolute bottom-8 font-mono text-[10px] tracking-widest text-cream/40">TAP TO SKIP</p>
      </motion.div>
    </AnimatePresence>
  );
}
