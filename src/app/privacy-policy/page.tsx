import { StaticPage } from "@/components/layout/static-page";

export default function PrivacyPolicyPage() {
  return (
    <StaticPage title="POLICY" titleOutline="PRIVACY" subtitle="Last updated: June 2024">
      <h2 className="font-display text-lg font-bold uppercase tracking-wider text-cream">Information We Collect</h2>
      <p>We collect information you provide directly: name, email, phone, shipping address, and payment details (processed securely via our payment partners).</p>
      <h2 className="mt-6 font-display text-lg font-bold uppercase tracking-wider text-cream">How We Use Your Information</h2>
      <p>To process orders, provide customer support, send order updates, personalize your experience, and improve our services.</p>
      <h2 className="mt-6 font-display text-lg font-bold uppercase tracking-wider text-cream">Data Security</h2>
      <p>We use 256-bit SSL encryption and follow industry best practices to protect your personal information.</p>
      <h2 className="mt-6 font-display text-lg font-bold uppercase tracking-wider text-cream">Contact</h2>
      <p>For privacy concerns, email privacy@cricketverse.in</p>
    </StaticPage>
  );
}
