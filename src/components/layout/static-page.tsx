import { PageHero } from "@/components/bucks/page-hero";

interface StaticPageProps {
  title: string;
  titleOutline?: string;
  subtitle?: string;
  panel?: boolean;
  children: React.ReactNode;
}

export function StaticPage({ title, titleOutline, subtitle, panel = true, children }: StaticPageProps) {
  return (
    <div className="section-padding pt-28">
      <div className="mx-auto max-w-3xl">
        <PageHero
          eyebrow="CricketVerse"
          title={title}
          titleOutline={titleOutline}
          subtitle={subtitle}
        />
        {panel ? (
          <div className="bucks-panel space-y-4 font-body leading-relaxed text-secondary">{children}</div>
        ) : (
          <div className="space-y-4 font-body leading-relaxed text-secondary">{children}</div>
        )}
      </div>
    </div>
  );
}
