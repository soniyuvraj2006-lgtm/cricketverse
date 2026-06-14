interface BucksInfoCardProps {
  title: string;
  children: React.ReactNode;
}

export function BucksInfoCard({ title, children }: BucksInfoCardProps) {
  return (
    <div className="rounded-xl border border-cream/20 bg-[#111008]/80 p-4 backdrop-blur-sm">
      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-cream">{title}</h3>
      <div className="mt-3 font-body text-sm leading-relaxed text-secondary">{children}</div>
    </div>
  );
}
