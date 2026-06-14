"use client";

import { motion } from "framer-motion";
import { ShieldCheckIcon, LightningIcon, ReturnIcon, LockIcon } from "@/components/icons";

const pillars = [
  { icon: ShieldCheckIcon, title: "100% Authentic", desc: "Every product verified and licensed" },
  { icon: LightningIcon, title: "Pan-India Delivery", desc: "Ships within 24 hours" },
  { icon: ReturnIcon, title: "Easy 15-Day Returns", desc: "No questions asked" },
  { icon: LockIcon, title: "Secure Payments", desc: "256-bit SSL encryption" },
];

export function TrustRail() {
  return (
    <section className="section-padding bg-deep">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center font-display text-[var(--display-md)] text-primary"
        >
          THE PROMISE
        </motion.h2>
        <div className="flex flex-col overflow-hidden rounded-2xl border border-[var(--border-dim)] bg-surface sm:flex-row">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex-1 border-b border-[var(--border-dim)] p-8 transition-colors last:border-b-0 hover:bg-[rgba(200,168,75,0.04)] sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[rgba(200,168,75,0.08)] text-gold transition-all group-hover:border-[var(--border-active)] group-hover:drop-shadow-[0_0_8px_rgba(200,168,75,0.6)]">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-body text-base font-bold text-primary transition-colors group-hover:text-gold">{pillar.title}</h3>
                <p className="mt-1.5 font-body text-sm text-secondary">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
