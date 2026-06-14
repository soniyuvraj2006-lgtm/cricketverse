import Link from "next/link";
import { PageHero } from "@/components/bucks/page-hero";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: "🏪", title: "Your Own Branded Storefront", desc: "Custom store page with your logo and banner" },
  { icon: "📦", title: "Unlimited Product Listings", desc: "List up to 500 products on our platform" },
  { icon: "📊", title: "Seller Analytics Dashboard", desc: "Track sales, revenue, and customer insights" },
  { icon: "🚚", title: "Pan-India Delivery Network", desc: "Ship anywhere in India via our partners" },
  { icon: "💬", title: "Priority Customer Support", desc: "24/7 dedicated seller support team" },
  { icon: "📣", title: "Marketing & Featured Placement", desc: "Get featured on homepage and flash sales" },
];

export default function AddBusinessPage() {
  return (
    <div>
      <section className="section-padding pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <PageHero
            eyebrow="Vendor Program"
            titleOutline="SELL TO 50,000+"
            title="CRICKET FANS"
            subtitle="List your cricket merchandise on CricketVerse and reach buyers across India"
            align="center"
          />
          <Link href="/add-business/register" className="mt-8 inline-block">
            <Button size="lg">Get Started — ₹5,000/month</Button>
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <p className="mb-10 text-center"><span className="pill-label">• WHAT YOU GET •</span></p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="bucks-panel">
                <span className="text-3xl">{b.icon}</span>
                <h3 className="mt-3 font-display font-bold uppercase tracking-wider text-cream">{b.title}</h3>
                <p className="mt-2 font-body text-sm text-secondary">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-cream/10">
        <div className="mx-auto max-w-md">
          <div className="bucks-panel border-gold/30 text-center">
            <span className="text-3xl">🏆</span>
            <h3 className="mt-4 font-display text-2xl font-black text-cream">SELLER PLAN</h3>
            <p className="mt-2 font-mono text-4xl font-bold text-gold">₹5,000<span className="text-lg text-cream/50">/month</span></p>
            <p className="font-mono text-sm text-cream/50">+ 5% commission per sale</p>
            <ul className="mt-6 space-y-2 text-left font-body text-sm text-secondary">
              {["Storefront page", "Up to 500 products", "Analytics access", "24/7 seller support", "Featured in homepage"].map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <Link href="/add-business/register" className="mt-6 block">
              <Button className="w-full">Start Selling</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
