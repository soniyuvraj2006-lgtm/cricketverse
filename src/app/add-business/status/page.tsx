import { PageHero } from "@/components/bucks/page-hero";

export default function VendorStatusPage() {
  return (
    <div className="section-padding pt-28">
      <div className="mx-auto max-w-lg text-center">
        <div className="text-5xl">⏳</div>
        <PageHero eyebrow="Vendor" title="SUBMITTED" titleOutline="APPLICATION" align="center" />
        <p className="font-body text-secondary">
          Your vendor application is under review. We&apos;ll notify you via email within 3 business days.
        </p>
        <div className="bucks-panel mt-8">
          <div className="flex items-center justify-between">
            {["Submitted", "Under Review", "Approved"].map((status, i) => (
              <div key={status} className="flex flex-col items-center">
                <div className={`flex h-8 w-8 items-center justify-center font-mono text-sm ${
                  i === 0 ? "bg-field-green text-cream" : i === 1 ? "bg-gold text-[#0A0700]" : "border border-cream/20 text-cream/40"
                }`}>
                  {i === 0 ? "✓" : i === 1 ? "⏳" : "○"}
                </div>
                <span className="mt-2 font-mono text-xs text-cream/50">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
