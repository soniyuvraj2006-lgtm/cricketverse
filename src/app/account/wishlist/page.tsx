"use client";

import { useWishlistStore } from "@/stores/wishlist-store";
import { ProductCard } from "@/components/ui/product-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
  const { items } = useWishlistStore();

  if (items.length === 0) {
    return (
      <div className="bucks-panel p-8 text-center">
        <p className="font-body text-secondary">Your wishlist is empty</p>
        <Link href="/jerseys"><Button className="mt-4">Browse Products</Button></Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-6 font-display text-xl font-bold uppercase tracking-wider text-cream">Wishlist ({items.length})</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  );
}
