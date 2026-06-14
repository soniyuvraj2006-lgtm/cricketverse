import { notFound } from "next/navigation";
import { getVendorBySlug, vendors } from "@/lib/data/vendors";
import { getProductsByVendor } from "@/lib/data/products";
import { ProductCard } from "@/components/ui/product-card";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export function generateStaticParams() {
  return vendors.map((v) => ({ "vendor-slug": v.slug }));
}

export async function generateMetadata({ params }: { params: { "vendor-slug": string } }): Promise<Metadata> {
  const vendor = getVendorBySlug(params["vendor-slug"]);
  return { title: vendor?.name ?? "Store" };
}

export default function StorePage({ params }: { params: { "vendor-slug": string } }) {
  const vendor = getVendorBySlug(params["vendor-slug"]);
  if (!vendor) notFound();
  const products = getProductsByVendor(vendor.id);
  const initial = vendor.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div>
      <div className="relative h-48 overflow-hidden bg-deep md:h-64">
        <div className="dot-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.12),transparent_50%)]" />
      </div>
      <div className="section-padding pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="-mt-16 flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-void bg-gradient-to-br from-electric/30 to-raised font-display text-2xl text-gold md:h-32 md:w-32 md:text-3xl">
              {initial}
            </div>
            <div className="flex-1">
              <h1 className="font-body text-2xl font-bold text-primary md:text-3xl">{vendor.name}</h1>
              <StarRating rating={vendor.rating} showValue reviewCount={vendor.reviewCount} className="mt-1" />
              <p className="mt-2 max-w-xl font-body text-sm text-secondary">{vendor.description}</p>
              <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-muted">
                <span>Member since {vendor.memberSince}</span>
                <span>Response time: {vendor.responseTime}</span>
              </div>
            </div>
            <Button variant="outline">Follow Store</Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
