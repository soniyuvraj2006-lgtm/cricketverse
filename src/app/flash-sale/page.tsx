"use client";

import { useState, useEffect } from "react";
import { PageHero } from "@/components/bucks/page-hero";
import { ProductCard } from "@/components/ui/product-card";
import { getFlashSaleProducts } from "@/lib/data/products";

function CountdownTimer() {
  const [time, setTime] = useState({ hours: 2, minutes: 45, seconds: 30 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    <div className="flex justify-center gap-4 font-mono text-4xl font-bold md:text-6xl">
      {[time.hours, time.minutes, time.seconds].map((v, i) => (
        <div key={i} className="flex items-center gap-4">
          <span className="border border-cream/20 bg-[#111008] px-6 py-3 text-cream">{pad(v)}</span>
          {i < 2 && <span className="text-gold">:</span>}
        </div>
      ))}
    </div>
  );
}

export default function FlashSalePage() {
  const products = getFlashSaleProducts();
  const tabs = ["All", "Jerseys", "Cards", "Posters"];
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? products
    : products.filter((p) => p.category.includes(activeTab.toLowerCase().replace("cards", "steel-cards")));

  return (
    <div className="min-h-screen bg-[#0A0700]">
      <div className="section-padding pt-28 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">⚡ Limited Time Only</p>
        <PageHero title="SALE" titleOutline="FLASH" align="center" />
        <div className="my-10"><CountdownTimer /></div>
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-6 py-2 font-display text-sm font-bold uppercase tracking-wider ${
                  activeTab === tab ? "bg-cream text-[#0A0700]" : "border border-cream/30 text-cream"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((p, i) => (
              <div key={p.id} className="relative">
                <ProductCard product={p} index={i} flashMode />
                {p.stockCount <= 5 && (
                  <div className="absolute bottom-20 left-4 right-4">
                    <div className="h-1.5 overflow-hidden bg-cream/10">
                      <div className="h-full bg-cricket-red" style={{ width: `${(p.stockCount / 10) * 100}%` }} />
                    </div>
                    <p className="mt-1 font-mono text-xs text-cricket-red">Only {p.stockCount} left!</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
