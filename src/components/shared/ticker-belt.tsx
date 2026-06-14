"use client";

export function TickerBelt() {
  const text = "🏏 INDIA'S PREMIUM CRICKET STORE · 100% AUTHENTIC · SHIPS IN 24 HOURS · FANS FIRST · 🏆 ";
  return (
    <div className="group overflow-hidden border-y-2 border-dashed border-[#0A0700] bg-cream py-4">
      <div className="flex w-max animate-ticker group-hover:[animation-play-state:paused]">
        <span className="whitespace-nowrap px-4 font-display text-base font-bold tracking-widest text-[#0A0700]">{text.repeat(4)}</span>
        <span className="whitespace-nowrap px-4 font-display text-base font-bold tracking-widest text-[#0A0700]">{text.repeat(4)}</span>
      </div>
    </div>
  );
}
