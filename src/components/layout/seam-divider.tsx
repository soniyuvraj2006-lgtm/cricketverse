"use client";

import { motion } from "framer-motion";

export function SeamDivider({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden py-2 ${className ?? ""}`}>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold bg-pitch" />
    </div>
  );
}
