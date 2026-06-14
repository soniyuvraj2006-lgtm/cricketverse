"use client";

export default function NotificationsPage() {
  const prefs = [
    { label: "Order Updates", desc: "Shipping and delivery notifications", enabled: true },
    { label: "Flash Sale Alerts", desc: "Be first to know about flash sales", enabled: true },
    { label: "Price Drop Alerts", desc: "Wishlist item price changes", enabled: false },
    { label: "Newsletter", desc: "Weekly cricket merchandise news", enabled: true },
  ];

  return (
    <div>
      <h2 className="mb-6 font-display text-xl font-bold uppercase tracking-wider text-cream">Notification Preferences</h2>
      <div className="space-y-3">
        {prefs.map((pref) => (
          <label key={pref.label} className="bucks-panel flex cursor-pointer items-center justify-between">
            <div>
              <p className="font-display text-sm font-bold text-cream">{pref.label}</p>
              <p className="font-body text-sm text-secondary">{pref.desc}</p>
            </div>
            <input type="checkbox" defaultChecked={pref.enabled} className="h-5 w-5 accent-gold" />
          </label>
        ))}
      </div>
    </div>
  );
}
