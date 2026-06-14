"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const packs = [
  { name: "FAN STARTER COMBO", items: ["Jersey", "Steel Card", "Poster"], price: "₹1,999", was: "₹2,599", href: "/jerseys" },
  { name: "MATCH DAY PACK", items: ["Jersey", "Magnet", "Collectible"], price: "₹2,499", was: "₹3,199", href: "/collectibles" },
  { name: "FULL SQUAD KIT", items: ["All 5 Categories"], price: "₹3,999", was: "₹5,299", href: "/flash-sale" },
];

export function BundleBuilder() {
  const [packIndex, setPackIndex] = useState(0);
  const [toggle, setToggle] = useState<"combo" | "squad">("combo");
  const pack = packs[packIndex];

  return (
    <section className="grid min-h-[80vh] bg-[#0A0700] lg:grid-cols-2">
      <div className="sticky top-0 hidden h-screen lg:block" style={{ background: "linear-gradient(135deg, #003B7E, #001628)" }}>
        <div className="flex h-full flex-col items-center justify-center p-12">
          <span className="font-display text-[120px] font-black text-cream/10">11</span>
          <p className="mt-4 font-display text-2xl font-bold text-cream">STADIUM AT NIGHT</p>
          <p className="font-body text-cream/60">Build your ultimate fan collection</p>
        </div>
      </div>

      <div className="flex flex-col justify-center px-6 py-24 lg:px-16">
        <h2 className="font-display text-[clamp(48px,8vw,80px)] font-black leading-none text-outline">BUILD YOUR</h2>
        <h2 className="font-display text-[clamp(48px,8vw,80px)] font-black leading-none text-cream">COLLECTION</h2>
        <p className="mt-4 font-display text-xl font-bold text-cream/60">SAVE MORE. WIN MORE.</p>

        <div className="mt-8 flex gap-2">
          {(["combo", "squad"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setToggle(t)}
              className={`rounded-full px-6 py-2 font-display text-sm font-bold uppercase tracking-wider ${
                toggle === t ? "bg-cream text-[#0A0700]" : "border border-cream text-cream"
              }`}
            >
              {t === "combo" ? "COMBO DEAL" : "FULL SQUAD"}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-none bg-card-gold p-8">
          <h3 className="font-display text-2xl font-bold text-[#0A0700]">{pack.name}</h3>
          <div className="mt-4 flex gap-3">
            {pack.items.map((item) => (
              <div key={item} className="flex h-24 w-20 flex-col items-center justify-center border border-[#0A0700]/20 bg-[#0A0700]/10">
                <span className="font-mono text-[9px] text-[#0A0700]/70">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-mono text-2xl font-bold text-[#0A0700]">{pack.price}</span>
            <span className="font-mono text-sm text-[#0A0700]/50 line-through">{pack.was}</span>
          </div>
          <Link href={pack.href} className="mt-4 inline-flex items-center gap-2 font-display text-sm font-bold text-[#0A0700] hover:underline">
            SHOP COMBO <ChevronRight size={16} />
          </Link>
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={() => setPackIndex((i) => (i - 1 + packs.length) % packs.length)} className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-[#0A0700]">
            <ChevronLeft size={22} />
          </button>
          <button onClick={() => setPackIndex((i) => (i + 1) % packs.length)} className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-[#0A0700]">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
