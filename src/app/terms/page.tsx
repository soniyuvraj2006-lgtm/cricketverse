import { StaticPage } from "@/components/layout/static-page";

export default function TermsPage() {
  return (
    <StaticPage title="SERVICE" titleOutline="TERMS OF" subtitle="Last updated: June 2024">
      <h2 className="font-display text-lg font-bold uppercase tracking-wider text-cream">Acceptance of Terms</h2>
      <p>By accessing CricketVerse, you agree to these terms. If you disagree, please do not use our services.</p>
      <h2 className="mt-6 font-display text-lg font-bold uppercase tracking-wider text-cream">Products & Pricing</h2>
      <p>All prices are in INR and include applicable taxes. We reserve the right to modify prices without notice. Product images are representative; actual products may vary slightly.</p>
      <h2 className="mt-6 font-display text-lg font-bold uppercase tracking-wider text-cream">Orders & Payment</h2>
      <p>Orders are confirmed upon successful payment. We accept UPI, cards, net banking, wallets, and COD.</p>
      <h2 className="mt-6 font-display text-lg font-bold uppercase tracking-wider text-cream">Intellectual Property</h2>
      <p>All CricketVerse branding, content, and design are protected. Cricket team logos and player likenesses are used under official licensing agreements.</p>
    </StaticPage>
  );
}
