"use client";

import { useAuthStore } from "@/stores/auth-store";
import { teams } from "@/lib/data/teams";
import { players } from "@/lib/data/players";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AccountProfilePage() {
  const { user, updateProfile, logout } = useAuthStore();

  return (
    <div className="bucks-panel">
      <h2 className="mb-6 font-display text-xl font-bold uppercase tracking-wider text-cream">Profile</h2>
      <div className="space-y-4">
        <Input label="Name" defaultValue={user?.name} onChange={(e) => updateProfile({ name: e.target.value })} />
        <Input label="Email" defaultValue={user?.email} disabled />
        <Input label="Phone" defaultValue={user?.phone ?? ""} onChange={(e) => updateProfile({ phone: e.target.value })} />
        <div>
          <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-cream/70">Favorite Team</label>
          <select className="input-field" defaultValue={user?.favoriteTeam} onChange={(e) => updateProfile({ favoriteTeam: e.target.value })}>
            {teams.map((t) => (
              <option key={t.slug} value={t.slug}>{t.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-cream/70">Favorite Player</label>
          <select className="input-field" defaultValue={user?.favoritePlayer} onChange={(e) => updateProfile({ favoritePlayer: e.target.value })}>
            {players.map((p) => (
              <option key={p.slug} value={p.slug}>{p.name}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-3 pt-4">
          <Button>Save Changes</Button>
          <Button variant="outline" onClick={logout}>Logout</Button>
        </div>
      </div>
    </div>
  );
}
