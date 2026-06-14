import { vendors } from "@/lib/data/vendors";

export default function AdminVendorsPage() {
  return (
    <div>
      <h1 className="mb-6 font-display text-3xl tracking-wider">VENDORS</h1>
      <div className="space-y-4">
        {vendors.map((v) => (
          <div key={v.id} className="glass-card flex flex-wrap items-center justify-between gap-4 p-6">
            <div>
              <h3 className="font-heading font-bold">{v.name}</h3>
              <p className="text-sm text-off-white/60">{v.description}</p>
              <p className="mt-1 text-xs text-off-white/40">Since {v.memberSince} • ⭐ {v.rating}</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full bg-success/20 px-4 py-1.5 text-xs text-success">Approve</button>
              <button className="rounded-full bg-error/20 px-4 py-1.5 text-xs text-error">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
