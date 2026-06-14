"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DiamondIcon } from "@/components/icons";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-padding relative border-y border-[rgba(22,163,74,0.2)] bg-field">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.015) 1px, transparent 1px)" }} />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-field-green">EXCLUSIVE DROPS &amp; EARLY ACCESS</p>
        <h2 className="mt-4 font-display text-[var(--display-md)] text-primary">BE FIRST.</h2>
        <h2 className="font-display text-[var(--display-md)] text-gold">GET EARLY ACCESS.</h2>
        <p className="mt-4 font-body text-base text-secondary">
          Join 50,000+ cricket fans for exclusive drops, flash sales &amp; player collections.
        </p>

        {submitted ? (
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 font-body text-lg text-field-green">
            You&apos;re in! Welcome to the CricketVerse family.
          </motion.p>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="mx-auto mt-8 flex max-w-[480px] items-center rounded-full border border-[rgba(22,163,74,0.3)] bg-white/5 p-1 pl-6 focus-within:border-[rgba(22,163,74,0.6)] focus-within:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-transparent font-body text-[15px] text-secondary outline-none placeholder:text-muted"
            />
            <button type="submit" className="rounded-full bg-field-green px-6 py-2.5 font-body text-sm font-semibold text-white">
              Subscribe
            </button>
          </form>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] text-muted">
          <span>50K+ subscribers</span>
          <DiamondIcon className="h-2 w-2 text-muted" />
          <span>No spam, ever</span>
          <DiamondIcon className="h-2 w-2 text-muted" />
          <span>Unsubscribe anytime</span>
        </div>
      </div>
    </section>
  );
}
