"use client";

import { useAuthStore } from "@/stores/auth-store";

export default function AddressesPage() {
  const { addresses } = useAuthStore();

  return (
    <div>
      <h2 className="mb-6 font-display text-xl font-bold uppercase tracking-wider text-cream">Saved Addresses</h2>
      <div className="space-y-4">
        {addresses.map((addr) => (
          <div key={addr.id} className="bucks-panel">
            {addr.isDefault && <span className="font-mono text-xs uppercase tracking-wider text-gold">Default</span>}
            <p className="font-display font-bold text-cream">{addr.fullName}</p>
            <p className="mt-1 font-body text-sm text-secondary">
              {addr.addressLine1}{addr.addressLine2 ? `, ${addr.addressLine2}` : ""}
            </p>
            <p className="font-body text-sm text-secondary">{addr.city}, {addr.state} — {addr.pinCode}</p>
            <p className="font-mono text-sm text-cream/50">{addr.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
