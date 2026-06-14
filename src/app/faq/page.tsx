"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StaticPage } from "@/components/layout/static-page";

const faqs = [
  { q: "Are all products authentic?", a: "Yes. Every product on CricketVerse is verified and licensed. We partner only with authorized vendors and official merchandise suppliers." },
  { q: "What is the delivery time?", a: "Standard delivery takes 3-5 business days. Express (1-2 days) and same-day delivery (metro cities) are also available." },
  { q: "What is your return policy?", a: "We offer a hassle-free 15-day return policy. Items must be unused with original tags attached." },
  { q: "Do you offer Cash on Delivery?", a: "Yes, COD is available across India with a ₹25 handling charge." },
  { q: "How do I track my order?", a: "Use our Track Order page with your Order ID and phone number. No login required." },
  { q: "Can I add items to an order after placing it?", a: "Yes! You have a 24-hour add-on window after placing your order to add more items before it ships." },
  { q: "What coupon codes are available?", a: "Try CRICKET20 for 20% off, NEWUSER20 for new users, or FREESHIP for free shipping on orders above ₹499." },
  { q: "How do I become a seller?", a: "Visit our Add Business page to register as a vendor. Plans start at ₹5,000/month." },
];

export default function FAQPage() {
  const [open, setOpen] = useState(0);

  return (
    <StaticPage title="QUESTIONS" titleOutline="FREQUENTLY ASKED" subtitle="Everything you need to know about CricketVerse." panel={false}>
      <div className="mx-auto max-w-[600px] space-y-0">
        {faqs.map((faq, i) => (
          <div key={faq.q}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-center gap-2 border border-[#0A0700] bg-cream py-4 font-display text-sm font-bold tracking-wider text-[#0A0700] transition-colors hover:bg-gold"
            >
              • {faq.q.toUpperCase()} •
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden bg-[#111008]"
                >
                  <p className="px-6 py-6 font-body text-sm leading-relaxed text-secondary">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </StaticPage>
  );
}
