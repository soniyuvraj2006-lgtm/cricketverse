import type { Category } from "@/lib/types";
import { CATEGORY_IMAGES } from "@/lib/images";

const CATEGORY_ICONS: Record<Category, string> = {
  jerseys: "👕",
  "steel-cards": "🃏",
  "fridge-magnets": "🧲",
  posters: "🖼️",
  collectibles: "🏆",
  "signed-merch": "✍️",
};

interface PlaceholderProps {
  category?: Category;
  name?: string;
  playerName?: string;
  teamColor?: string;
  className?: string;
}

export function CategoryPlaceholder({ category = "jerseys", name, className }: PlaceholderProps) {
  const meta = CATEGORY_IMAGES[category];
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center ${className ?? ""}`}
      style={{
        background: `linear-gradient(135deg, ${meta.accent}22, ${meta.accent}44)`,
      }}
    >
      <div className="text-center">
        <span className="text-5xl">{CATEGORY_ICONS[category]}</span>
        {name && (
          <p className="mt-2 line-clamp-2 px-4 text-sm font-semibold text-white">{name}</p>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}

export function JerseyPlaceholder({ playerName, teamColor = "#004C97", className }: PlaceholderProps) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center ${className ?? ""}`}
      style={{
        background: `linear-gradient(135deg, ${teamColor}22, ${teamColor}55)`,
        border: `1px solid ${teamColor}44`,
      }}
    >
      <div className="relative z-10 text-center">
        <span className="text-6xl">👕</span>
        {playerName && <p className="mt-2 font-bold text-white">{playerName}</p>}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}

export function SteelCardPlaceholder({ playerName, className }: PlaceholderProps) {
  const initial = playerName?.charAt(0) ?? "C";
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-600 to-slate-900 ${className ?? ""}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="relative z-10 text-center">
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600">
          <span className="font-mono text-2xl font-black text-slate-900">{initial}</span>
        </div>
        {playerName && <p className="text-sm font-bold text-white">{playerName}</p>}
        <p className="mt-1 text-xs text-gold">STEEL CARD</p>
      </div>
    </div>
  );
}

export function ProductImageFallback({
  category,
  name,
  playerName,
  teamColor,
}: PlaceholderProps) {
  if (category === "jerseys") {
    return <JerseyPlaceholder category={category} playerName={playerName ?? name} teamColor={teamColor} />;
  }
  if (category === "steel-cards") {
    return <SteelCardPlaceholder playerName={playerName ?? name} category={category} />;
  }
  return <CategoryPlaceholder category={category} name={name} />;
}
