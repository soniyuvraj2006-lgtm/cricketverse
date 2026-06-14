import { StaticPage } from "@/components/layout/static-page";

export default function RefundPolicyPage() {
  return (
    <StaticPage title="POLICY" titleOutline="REFUND & RETURN" subtitle="15-day hassle-free returns for all fans.">
      <h2 className="font-display text-lg font-bold uppercase tracking-wider text-cream">15-Day Easy Returns</h2>
      <p>Not satisfied? Return any unused item within 15 days of delivery for a full refund. No questions asked.</p>
      <h2 className="mt-6 font-display text-lg font-bold uppercase tracking-wider text-cream">Return Conditions</h2>
      <ul className="mt-2 list-inside list-disc space-y-1">
        <li>Item must be unused with original tags attached</li>
        <li>Original packaging required</li>
        <li>Signed merchandise cannot be returned unless defective</li>
        <li>Personalized items are non-returnable</li>
      </ul>
      <h2 className="mt-6 font-display text-lg font-bold uppercase tracking-wider text-cream">Refund Process</h2>
      <p>Refunds are processed within 5-7 business days after we receive the returned item. Amount is credited to your original payment method.</p>
      <h2 className="mt-6 font-display text-lg font-bold uppercase tracking-wider text-cream">How to Initiate a Return</h2>
      <p>Go to My Orders in your account, select the order, and click &ldquo;Return/Refund&rdquo;. Or contact support@cricketverse.in</p>
    </StaticPage>
  );
}
