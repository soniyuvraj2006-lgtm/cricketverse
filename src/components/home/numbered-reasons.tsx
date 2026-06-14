"use client";

import { motion } from "framer-motion";
import { TickerBelt } from "@/components/shared/ticker-belt";

const reasons = [
  {
    num: "01",
    label: "LICENSED PRODUCTS",
    desc: "Every product is officially licensed. Jerseys carry the real team badges. Steel cards are certified collector's items. Not replicas. Never fakes.",
  },
  {
    num: "02",
    label: "COLLECTOR GRADE",
    desc: "Steel cards use 0.4mm cold-rolled steel with UV digital print. Jerseys use performance polyester — the same fabric worn on the field.",
  },
  {
    num: "03",
    label: "SHIPS IN 24 HOURS",
    desc: "Order by 5PM, dispatched same day. We partner with BlueDart and Delhivery for pan-India coverage. Track every step in real time.",
  },
];

export function NumberedReasons() {
  return (
    <section className="bg-[#0A0700]">
      <TickerBelt />
      {reasons.map((r, idx) => (
        <div key={r.num}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl px-6 py-20 text-center"
          >
            <p className="font-display text-[200px] font-black leading-none text-outline-lg">{r.num}</p>
            <div className="mt-6 flex justify-center">
              <span className="pill-label">• {r.label} •</span>
            </div>
            <p className="mt-6 font-body text-base leading-relaxed text-cream/75">{r.desc}</p>
          </motion.div>
          {idx < reasons.length - 1 && <TickerBelt />}
        </div>
      ))}
    </section>
  );
}
