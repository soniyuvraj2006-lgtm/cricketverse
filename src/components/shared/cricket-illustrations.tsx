export function CricketBallIllustration({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="52" fill="#C0392B" stroke="#8B1A1A" strokeWidth="2" />
      <path d="M20 45 Q60 60 20 75" stroke="#E8DCC8" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M100 45 Q60 60 100 75" stroke="#E8DCC8" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );
}

export function CricketBatIllustration({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none">
      <path d="M35 100 L45 20 Q50 8 58 8 Q66 8 71 20 L81 100 Z" fill="#C8A84B" stroke="#8B6914" strokeWidth="1.5" />
      <rect x="48" y="95" width="20" height="18" rx="2" fill="#0A0700" />
    </svg>
  );
}

export function JerseyIllustration({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none">
      <path d="M30 25 L45 35 L60 20 L75 35 L90 25 L85 100 L35 100 Z" fill="#003B7E" stroke="#001628" strokeWidth="1.5" />
      <text x="60" y="72" textAnchor="middle" fill="#E8DCC8" fontSize="28" fontWeight="900" fontFamily="Barlow Condensed">18</text>
    </svg>
  );
}

export function SteelCardIllustration({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none">
      <rect x="25" y="15" width="70" height="90" rx="6" fill="#B8860B" stroke="#C8A84B" strokeWidth="2" />
      <text x="60" y="68" textAnchor="middle" fill="#0A0700" fontSize="22" fontWeight="900" fontFamily="Barlow Condensed">MSD</text>
    </svg>
  );
}

export function WicketsIllustration({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none">
      <rect x="35" y="20" width="4" height="80" fill="#E8DCC8" />
      <rect x="58" y="20" width="4" height="80" fill="#E8DCC8" />
      <rect x="81" y="20" width="4" height="80" fill="#E8DCC8" />
      <rect x="32" y="18" width="56" height="4" fill="#C8A84B" />
    </svg>
  );
}

export function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" fill="#003B7E" stroke="#C8A84B" strokeWidth="2" />
      <text x="24" y="30" textAnchor="middle" fill="#E8DCC8" fontSize="18" fontWeight="900" fontFamily="Barlow Condensed">C</text>
    </svg>
  );
}

export function ProductVisualHero({ type, className = "" }: { type: "jersey" | "card" | "poster" | "magnet" | "collectible"; className?: string }) {
  const configs = {
    jersey: { bg: "#003B7E", label: "18", sub: "JERSEY" },
    card: { bg: "#B8860B", label: "MSD", sub: "STEEL CARD" },
    poster: { bg: "#8B1A1A", label: "11", sub: "POSTER" },
    magnet: { bg: "#003B7E", label: "45", sub: "MAGNET" },
    collectible: { bg: "#C8A84B", label: "10", sub: "LEGEND" },
  };
  const c = configs[type];
  return (
    <div className={`relative flex flex-col items-center justify-end ${className}`} style={{ height: "65vh", minHeight: 420 }}>
      <div
        className="relative z-10 flex w-[280px] flex-col items-center justify-center rounded-2xl border-2 border-cream/20 shadow-2xl md:w-[340px]"
        style={{ height: "55vh", minHeight: 360, background: `linear-gradient(160deg, ${c.bg}, ${c.bg}cc)` }}
      >
        <span className="mb-2 font-mono text-[10px] tracking-[0.3em] text-cream/60">{c.sub}</span>
        <span className="font-display text-[120px] leading-none text-cream/90 md:text-[160px]">{c.label}</span>
        <div className="mt-4 h-1 w-24 bg-cream/30" />
      </div>
    </div>
  );
}
