import { notFound } from "next/navigation";
import { PageHero } from "@/components/bucks/page-hero";
import { BucksInfoCard } from "@/components/bucks/info-card";
import { getPlayerBySlug, players } from "@/lib/data/players";
import { getProductsByPlayer } from "@/lib/data/products";
import { ProductCard } from "@/components/ui/product-card";
import { playerCircleData } from "@/lib/data/player-circles";
import type { Metadata } from "next";

export function generateStaticParams() {
  return players.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const player = getPlayerBySlug(params.slug);
  return { title: player ? `${player.name} Collection` : "Player Not Found" };
}

export default function PlayerPage({ params }: { params: { slug: string } }) {
  const player = getPlayerBySlug(params.slug);
  if (!player) notFound();
  const products = getProductsByPlayer(params.slug);
  const circle = playerCircleData.find((p) => p.slug === params.slug);
  const nameParts = player.name.split(" ");
  const outline = nameParts.slice(0, -1).join(" ").toUpperCase() || player.name.toUpperCase();
  const filled = nameParts.slice(-1)[0]?.toUpperCase() ?? "";

  return (
    <div className="bg-[#0A0700]">
      <div className="section-padding pt-28" style={{ background: `linear-gradient(135deg, ${circle?.color1 ?? "#003B7E"}44, #0A0700)` }}>
        <div className="mx-auto max-w-7xl">
          <PageHero eyebrow={player.role} title={filled} titleOutline={outline} subtitle={`"${player.quote}"`} />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <BucksInfoCard title="Player Stats">
              {player.stats.map((stat) => (
                <div key={stat.label} className="flex justify-between border-b border-cream/10 py-2 last:border-0">
                  <span className="font-body text-sm text-secondary">{stat.label}</span>
                  <span className="font-mono font-bold text-gold">{stat.value}</span>
                </div>
              ))}
            </BucksInfoCard>
            <div className="md:col-span-2 bucks-panel">
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-cream">Player Story</h3>
              <p className="mt-4 font-body leading-relaxed text-secondary">{player.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-center"><span className="pill-label text-xs">• OFFICIAL MERCH •</span></p>
          <PageHero title="MERCH" titleOutline={`${player.name.split(" ")[0]?.toUpperCase()}'S`} subtitle={`${products.length} products available`} align="center" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
