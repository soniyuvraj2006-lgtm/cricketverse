"use client";

import { motion } from "framer-motion";
import { CricketBallIcon, DiamondIcon } from "@/components/icons";

const messages = [
  "Free Shipping on orders above ₹999",
  "Flash Sale Live — Up to 40% Off",
  "100% Authentic Licensed Merchandise",
  "Use code CRICKET20 for 20% off your first order",
  "New Virat Kohli Collection Dropping This Friday",
];

export function AnnouncementBar() {
  const items = [...messages, ...messages];

  return (
    <div className="relative h-9 overflow-hidden shimmer-bar shadow-[0_1px_0_rgba(200,168,75,0.3)]">
      <motion.div
        className="flex h-full items-center whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {items.map((msg, i) => (
          <span key={i} className="mx-6 flex items-center gap-2 font-body text-xs font-semibold tracking-wide text-void">
            <CricketBallIcon className="h-3 w-3" />
            {msg}
            <DiamondIcon className="mx-4 h-2 w-2 opacity-60" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
