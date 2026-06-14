"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import type { Product, Category } from "@/lib/types";
import { cn } from "@/lib/utils";

const categoryPageConfig: Record<
  Category,
  {
    titleOutline: string;
    title: string;
    tagline: string;
    filterPills: string[];
  }
> = {
  jerseys: {
    titleOutline: "CRICKET",
    title: "JERSEYS",
    tagline: "Wear your hero's colors. Premium replica jerseys from all IPL teams and Team India.",
    filterPills: ["ALL", "INDIA", "CSK", "MI", "RCB", "KKR", "DC", "GT", "SRH", "LSG", "PBKS"],
  },
  "steel-cards": {
    titleOutline: "STEEL",
    title: "PLAYER CARDS",
    tagline: "Collector's grade. Frame-worthy. Non-negotiable.",
    filterPills: ["ALL", "VIRAT KOHLI", "MS DHONI", "ROHIT", "BUMRAH", "LEGEND SERIES", "LIMITED EDITION"],
  },
  "fridge-magnets": {
    titleOutline: "FRIDGE",
    title: "MAGNETS",
    tagline: "Every fridge tells a cricket story.",
    filterPills: ["ALL", "TEAM INDIA", "IPL TEAMS", "WORLD CUP", "PLAYER EDITION"],
  },
  posters: {
    titleOutline: "CRICKET",
    title: "POSTERS",
    tagline: "Frame the legendary moments.",
    filterPills: ["ALL", "A2", "A1", "A0", "FRAMED", "CANVAS"],
  },
  collectibles: {
    titleOutline: "LIMITED",
    title: "COLLECTIBLES",
    tagline: "Own a piece of cricket history.",
    filterPills: ["ALL", "SIGNED", "NUMBERED SERIES", "WORLD CUP", "CENTURY CLUB"],
  },
  "signed-merch": {
    titleOutline: "SIGNED",
    title: "MERCHANDISE",
    tagline: "Authenticated memorabilia with certificate of authenticity.",
    filterPills: ["ALL", "BATS", "JERSEYS", "PHOTOS", "BALLS"],
  },
};

const teamSlugMap: Record<string, string> = {
  INDIA: "india",
  CSK: "chennai-super-kings",
  MI: "mumbai-indians",
  RCB: "royal-challengers-bengaluru",
  KKR: "kolkata-knight-riders",
  DC: "delhi-capitals",
  GT: "gujarat-titans",
  SRH: "sunrisers-hyderabad",
  LSG: "lucknow-super-giants",
  PBKS: "punjab-kings",
};

interface CategoryPageProps {
  category: Category;
  products: Product[];
}

export function CategoryPageClient({ category, products: allProducts }: CategoryPageProps) {
  const config = categoryPageConfig[category];
  const [sortBy, setSortBy] = useState("relevant");
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = useMemo(() => {
    let result = [...allProducts];

    if (activeFilter !== "ALL") {
      const filter = activeFilter.toLowerCase();
      if (category === "jerseys" && teamSlugMap[activeFilter]) {
        result = result.filter((p) => p.teamSlug === teamSlugMap[activeFilter]);
      } else if (category === "steel-cards") {
        result = result.filter(
          (p) =>
            p.player?.toLowerCase().includes(filter) ||
            p.tags.some((t) => t.toLowerCase().includes(filter))
        );
      } else {
        result = result.filter(
          (p) =>
            p.tags.some((t) => t.toLowerCase().includes(filter)) ||
            p.name.toLowerCase().includes(filter) ||
            p.team?.toLowerCase().includes(filter)
        );
      }
    }

    switch (sortBy) {
      case "price_asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
    }
    return result;
  }, [allProducts, activeFilter, sortBy, category]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-[#0A0700] pt-20">
      <div className="px-6 py-16 md:px-[60px] md:pb-10 md:pt-[60px]">
        <p className="font-display text-[13px] tracking-[0.2em] text-gold">SHOP</p>
        <h1 className="font-display font-black leading-[0.95]">
          <span className="block text-[clamp(60px,10vw,120px)] text-outline">{config.titleOutline}</span>
          <span className="block text-[clamp(80px,13vw,160px)] text-cream">{config.title}</span>
        </h1>
        <p className="mt-3 max-w-md font-body text-base text-cream/60">{config.tagline}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3 border-b border-cream/[0.08] px-6 pb-8 md:px-[60px]">
        <span className="mr-auto font-mono text-xs uppercase tracking-wide text-cream/40">
          {filtered.length} PRODUCTS
        </span>

        {config.filterPills.map((pill) => (
          <button
            key={pill}
            type="button"
            onClick={() => setActiveFilter(pill)}
            className={cn(
              "rounded-full border-[1.5px] px-4 py-1.5 font-display text-[13px] font-bold tracking-wide transition-all duration-150",
              activeFilter === pill
                ? "border-gold bg-gold text-[#0A0700]"
                : "border-cream/15 text-cream/60 hover:border-cream/30"
            )}
          >
            {pill}
          </button>
        ))}

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="cursor-pointer rounded-lg border-[1.5px] border-cream/15 bg-cream/5 px-3.5 py-2 font-display text-[13px] font-bold tracking-wide text-cream/80 outline-none"
        >
          <option value="relevant">MOST RELEVANT</option>
          <option value="price_asc">PRICE ↑</option>
          <option value="price_desc">PRICE ↓</option>
          <option value="newest">NEWEST</option>
          <option value="rating">HIGHEST RATED</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 px-6 pb-8 md:grid-cols-2 md:px-[60px] xl:grid-cols-3 xl:gap-5">
        {visible.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="py-12 text-center">
          <Button variant="outline" onClick={() => setVisibleCount((c) => c + 12)}>
            Load More
          </Button>
        </div>
      )}
    </main>
  );
}
