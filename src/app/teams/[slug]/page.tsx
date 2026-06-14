import { notFound } from "next/navigation";
import { PageHero } from "@/components/bucks/page-hero";
import { getTeamBySlug, teams } from "@/lib/data/teams";
import { getProductsByTeam } from "@/lib/data/products";
import { ProductCard } from "@/components/ui/product-card";
import type { Metadata } from "next";

export function generateStaticParams() {
  return teams.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const team = getTeamBySlug(params.slug);
  return { title: team ? `${team.name} Shop` : "Team Not Found" };
}

export default function TeamPage({ params }: { params: { slug: string } }) {
  const team = getTeamBySlug(params.slug);
  if (!team) notFound();
  const products = getProductsByTeam(params.slug);

  return (
    <div>
      <div className="section-padding pt-28" style={{ background: `linear-gradient(135deg, ${team.colors.primary}33, #0A0700)` }}>
        <div className="mx-auto max-w-7xl text-center">
          <span className="text-6xl">{team.logo}</span>
          <PageHero title={`${team.shortName} SHOP`} titleOutline="OFFICIAL" subtitle={team.description} align="center" />
        </div>
      </div>
      <div className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
