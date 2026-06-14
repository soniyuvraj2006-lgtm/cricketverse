"use client";

import { motion } from "framer-motion";
import { TickerBelt } from "@/components/shared/ticker-belt";
import { numberedReasons } from "@/lib/data/numbered-reasons";

export function NumberedReason({
  num,
  label,
  desc,
}: {
  num: string;
  label: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl bg-[#0A0700] px-6 py-20 text-center"
    >
      <p className="font-display text-[200px] font-black leading-none text-outline-lg">{num}</p>
      <div className="mt-6 flex justify-center">
        <span className="pill-label">• {label} •</span>
      </div>
      <p className="mt-6 font-body text-base leading-relaxed text-cream/75">{desc}</p>
    </motion.div>
  );
}

export function NumberedReasonsSection() {
  return (
    <section className="bg-[#0A0700]">
      <TickerBelt />
      {numberedReasons.map((reason, idx) => (
        <div key={reason.num}>
          <NumberedReason {...reason} />
          {idx < numberedReasons.length - 1 && <TickerBelt />}
        </div>
      ))}
    </section>
  );
}
