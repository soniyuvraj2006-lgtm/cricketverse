export default function AdminAnalyticsPage() {
  return (
    <div>
      <h1 className="mb-6 font-display text-3xl tracking-wider">ANALYTICS</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card p-6">
          <h2 className="font-heading font-bold">Conversion Funnel</h2>
          <div className="mt-4 space-y-3">
            {[
              { stage: "Visitors", count: "45,230", pct: 100 },
              { stage: "Added to Cart", count: "8,940", pct: 20 },
              { stage: "Checkout Started", count: "4,120", pct: 9 },
              { stage: "Purchase", count: "1,847", pct: 4 },
            ].map((s) => (
              <div key={s.stage}>
                <div className="flex justify-between text-sm"><span>{s.stage}</span><span className="font-mono">{s.count}</span></div>
                <div className="mt-1 h-3 overflow-hidden rounded-full bg-glass">
                  <div className="h-full rounded-full bg-gold" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-6">
          <h2 className="font-heading font-bold">Top States by Revenue</h2>
          <div className="mt-4 space-y-2">
            {["Maharashtra", "Karnataka", "Delhi", "Tamil Nadu", "Gujarat"].map((state, i) => (
              <div key={state} className="flex justify-between text-sm">
                <span>{state}</span>
                <span className="font-mono text-gold">₹{(5 - i) * 2.1}L</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
