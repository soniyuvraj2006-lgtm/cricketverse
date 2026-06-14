export default function AdminMarketingPage() {
  return (
    <div>
      <h1 className="mb-6 font-display text-3xl tracking-wider">MARKETING</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card p-6">
          <h2 className="font-heading font-bold">Active Coupons</h2>
          <div className="mt-4 space-y-3">
            {["CRICKET20 — 20% off", "NEWUSER20 — 20% off new users", "FREESHIP — Free shipping"].map((c) => (
              <div key={c} className="flex items-center justify-between rounded-lg bg-glass p-3 text-sm">
                <span>{c}</span>
                <span className="text-success text-xs">Active</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-6">
          <h2 className="font-heading font-bold">Flash Sales</h2>
          <p className="mt-2 text-sm text-off-white/60">1 active flash sale running</p>
          <button className="mt-4 rounded-full bg-electric px-4 py-2 text-sm font-semibold text-pitch">Create Flash Sale</button>
        </div>
      </div>
    </div>
  );
}
