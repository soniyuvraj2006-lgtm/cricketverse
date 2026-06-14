import { StaticPage } from "@/components/layout/static-page";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <StaticPage title="SUPPORT" titleOutline="CONTACT &" subtitle="Have a question? We're here to help cricket fans 24/7." panel={false}>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <div className="space-y-4 font-body text-secondary">
          <p>📧 support@cricketverse.in</p>
          <p>📞 +91 1800-CRICKET</p>
          <p>📍 Mumbai, Maharashtra, India</p>
          <p className="font-mono text-xs text-cream/50">Response time: Under 2 hours</p>
        </div>
        <form className="bucks-panel space-y-4">
          <Input label="Name" required />
          <Input label="Email" type="email" required />
          <Input label="Subject" required />
          <div>
            <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-cream/70">Message</label>
            <textarea className="input-field min-h-[120px]" required />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </StaticPage>
  );
}
