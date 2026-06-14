"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PageHero } from "@/components/bucks/page-hero";
import { searchProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/ui/product-card";
import { Input } from "@/components/ui/input";

function SearchContent() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const results = query.length > 1 ? searchProducts(query) : [];

  return (
    <div className="section-padding pt-28">
      <div className="mx-auto max-w-7xl">
        <PageHero eyebrow="Find" title="GEAR" titleOutline="YOUR" />
        <Input
          placeholder="Search jerseys, players, teams..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mb-8 text-lg"
        />
        {query.length > 1 && (
          <p className="mb-6 font-mono text-sm text-cream/50">{results.length} results for &ldquo;{query}&rdquo;</p>
        )}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {results.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="pt-28 text-center font-body text-secondary">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
