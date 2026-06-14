"use client";

import { useAuthStore } from "@/stores/auth-store";
import { Button } from "@/components/ui/button";

export default function RewardsPage() {
  const { user } = useAuthStore();
  const points = user?.points ?? 0;

  return (
    <div className="space-y-6">
      <div className="bucks-panel p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-wider text-cream/50">Your Points Balance</p>
        <p className="font-mono text-5xl font-bold text-gold">{points}</p>
        <p className="mt-2 font-body text-sm text-secondary">₹{Math.floor(points / 500) * 100} redeemable value</p>
      </div>
      <div className="bucks-panel">
        <h3 className="font-display font-bold uppercase tracking-wider text-cream">How to Earn</h3>
        <ul className="mt-4 space-y-2 font-body text-sm text-secondary">
          <li>🛒 1 point per ₹10 spent</li>
          <li>⭐ 50 points per product review</li>
          <li>👥 200 points per referral</li>
          <li>🎂 100 birthday bonus points</li>
        </ul>
      </div>
      <div className="bucks-panel">
        <h3 className="font-display font-bold uppercase tracking-wider text-cream">Referral Code</h3>
        <p className="mt-2 font-mono text-gold">CRICKET{user?.id?.toUpperCase()}</p>
        <Button variant="outline" size="sm" className="mt-3">Share Code</Button>
      </div>
    </div>
  );
}
