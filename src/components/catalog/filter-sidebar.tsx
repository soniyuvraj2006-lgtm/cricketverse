"use client";

function FilterCheckbox({
  label,
  checked,
  onChange,
  accent,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
  accent?: string;
}) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-2.5 rounded-full px-3 py-2 transition-colors ${
        checked ? "bg-cream/10" : "hover:bg-cream/5"
      }`}
    >
      <button
        type="button"
        onClick={onChange}
        className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border transition-all ${
          checked ? "border-gold bg-gold" : "border-cream/25 bg-transparent"
        }`}
      >
        {checked && (
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
            <path d="M1 3.5L3.5 6L8 1" stroke="#0A0700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      <span className={`flex-1 font-body text-sm ${checked ? "text-cream" : "text-secondary"}`}>{label}</span>
      {accent && <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: accent }} />}
    </label>
  );
}

function PriceRangeSlider({ value, max, onChange }: { value: number; max: number; onChange: (v: number) => void }) {
  const percent = (value / max) * 100;
  return (
    <div className="pt-2">
      <div className="relative flex h-5 items-center">
        <div className="absolute inset-x-0 h-1 rounded-sm bg-cream/10" />
        <div className="absolute left-0 h-1 rounded-sm bg-gold" style={{ width: `${percent}%` }} />
        <input
          type="range"
          min={0}
          max={max}
          step={100}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-x-0 h-5 w-full cursor-pointer opacity-0"
        />
        <div
          className="pointer-events-none absolute h-5 w-5 rounded-full bg-gold shadow-[0_0_0_3px_rgba(200,168,75,0.25)]"
          style={{ left: `calc(${percent}% - 10px)` }}
        />
      </div>
      <div className="mt-3 flex justify-between">
        <span className="font-mono text-xs text-cream/40">₹0</span>
        <span className="font-mono text-[13px] font-bold text-gold">Up to ₹{value.toLocaleString("en-IN")}</span>
      </div>
    </div>
  );
}

const sortOptions = [
  { value: "relevance", label: "Most Relevant" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest First" },
  { value: "rating", label: "Highest Rated" },
];

export interface FilterSidebarProps {
  sortBy: string;
  onSortChange: (v: string) => void;
  priceMax: number;
  onPriceChange: (v: number) => void;
  selectedTeams: string[];
  onToggleTeam: (slug: string) => void;
  selectedPlayers: string[];
  onTogglePlayer: (slug: string) => void;
  inStockOnly: boolean;
  onInStockChange: (v: boolean) => void;
  teams: { slug: string; shortName: string; name: string; colors: { primary: string } }[];
  players: { slug: string; name: string }[];
}

export function FilterSidebar({
  sortBy,
  onSortChange,
  priceMax,
  onPriceChange,
  selectedTeams,
  onToggleTeam,
  selectedPlayers,
  onTogglePlayer,
  inStockOnly,
  onInStockChange,
  teams,
  players,
}: FilterSidebarProps) {
  const activeCount =
    selectedTeams.length + selectedPlayers.length + (inStockOnly ? 1 : 0) + (priceMax < 10000 ? 1 : 0);

  const clearAll = () => {
    [...selectedTeams].forEach(onToggleTeam);
    [...selectedPlayers].forEach(onTogglePlayer);
    onInStockChange(false);
    onPriceChange(10000);
  };

  return (
    <aside className="bucks-panel sticky top-28 max-h-[calc(100vh-100px)] w-[260px] flex-shrink-0 overflow-y-auto p-0">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-cream/10 bg-[#111008] px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-bold uppercase tracking-wider text-cream">Filters</span>
          {activeCount > 0 && (
            <span className="rounded-full bg-gold px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#0A0700]">{activeCount}</span>
          )}
        </div>
        {activeCount > 0 && (
          <button type="button" onClick={clearAll} className="font-mono text-xs text-gold hover:underline">
            Clear all
          </button>
        )}
      </div>

      <div className="py-1">
        <div className="border-b border-cream/10 px-4 py-3.5">
          <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-cream/40">Sort By</p>
          <div className="flex flex-col gap-1">
            {sortOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => onSortChange(opt.value)}
                className={`flex w-full items-center gap-2 rounded-full px-3 py-2 text-left transition-colors ${
                  sortBy === opt.value ? "bg-cream text-[#0A0700]" : "text-secondary hover:bg-cream/5 hover:text-cream"
                }`}
              >
                <span className={`font-display text-xs font-bold uppercase tracking-wide ${sortBy === opt.value ? "text-[#0A0700]" : ""}`}>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="border-b border-cream/10 px-4 py-3.5">
          <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-cream/40">Price Range</p>
          <PriceRangeSlider value={priceMax} max={10000} onChange={onPriceChange} />
        </div>

        <div className="border-b border-cream/10 px-4 py-3.5">
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-cream/40">Team</p>
          {teams.slice(0, 6).map((team) => (
            <FilterCheckbox
              key={team.slug}
              label={`${team.shortName} — ${team.name}`}
              checked={selectedTeams.includes(team.slug)}
              onChange={() => onToggleTeam(team.slug)}
              accent={team.colors.primary}
            />
          ))}
        </div>

        <div className="border-b border-cream/10 px-4 py-3.5">
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-cream/40">Player</p>
          {players.slice(0, 6).map((player) => (
            <FilterCheckbox
              key={player.slug}
              label={player.name}
              checked={selectedPlayers.includes(player.slug)}
              onChange={() => onTogglePlayer(player.slug)}
            />
          ))}
        </div>

        <div className="px-4 py-3.5">
          <FilterCheckbox label="In Stock Only" checked={inStockOnly} onChange={() => onInStockChange(!inStockOnly)} />
        </div>
      </div>
    </aside>
  );
}
