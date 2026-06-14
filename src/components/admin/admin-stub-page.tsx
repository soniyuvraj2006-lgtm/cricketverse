interface AdminStubPageProps {
  title: string;
  description: string;
}

export function AdminStubPage({ title, description }: AdminStubPageProps) {
  return (
    <div>
      <h1 className="mb-2 font-body text-[22px] font-bold text-[#F1F5F9]">{title}</h1>
      <p className="mb-8 font-body text-sm text-[#94A3B8]">{description}</p>
      <div className="rounded-[10px] border border-[rgba(255,255,255,0.06)] bg-[#0F1218] p-8">
        <p className="font-mono text-xs text-[#475569]">Module ready for data integration.</p>
      </div>
    </div>
  );
}
