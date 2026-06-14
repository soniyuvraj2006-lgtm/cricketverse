"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlipNumberProps {
  value: number;
  label?: string;
}

export function FlipNumber({ value, label }: FlipNumberProps) {
  const display = String(value).padStart(2, "0");
  const prevRef = useRef(display);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (prevRef.current !== display) {
      setFlipping(true);
      const t = setTimeout(() => {
        setFlipping(false);
        prevRef.current = display;
      }, 200);
      return () => clearTimeout(t);
    }
  }, [display]);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative h-[72px] w-16 overflow-hidden rounded-lg border border-white/[0.08] bg-black/50 shadow-[0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]" style={{ perspective: 400 }}>
        <div className="absolute inset-x-0 top-0 z-10 h-1/2 overflow-hidden border-b border-black/40 bg-[#0a0a0a]">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={`top-${display}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex h-full items-end justify-center font-mono text-[36px] font-bold leading-none text-primary"
            >
              {display}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-[#050505]">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={`bottom-${display}`}
              initial={flipping ? { rotateX: -90, opacity: 0 } : false}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="flex h-full items-start justify-center font-mono text-[36px] font-bold leading-none text-primary"
              style={{ transformOrigin: "top center" }}
            >
              {display}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 h-px bg-black/60" />
      </div>
      {label && <span className="font-mono text-[9px] text-muted">{label}</span>}
    </div>
  );
}
