"use client";

import Link from "next/link";
import { useAuthStore } from "@/stores/auth-store";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function OrdersPage() {
  const { orders } = useAuthStore();

  if (orders.length === 0) {
    return (
      <div className="bucks-panel text-center">
        <p className="font-body text-secondary">No orders yet. Time to gear up!</p>
        <Link href="/jerseys"><Button className="mt-4">Shop Now</Button></Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold uppercase tracking-wider text-cream">My Orders</h2>
      {orders.map((order) => (
        <div key={order.id} className="bucks-panel">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-gold">{order.id}</p>
              <p className="font-mono text-xs text-cream/50">{new Date(order.createdAt).toLocaleDateString("en-IN")}</p>
            </div>
            <Badge variant={order.status === "Delivered" ? "new" : "trending"}>{order.status}</Badge>
            <p className="font-mono font-bold text-gold">{formatPrice(order.total)}</p>
          </div>
          <div className="mt-4 flex gap-3">
            <Link href={`/track-order?orderId=${order.id}`}>
              <Button variant="outline" size="sm">Track Order</Button>
            </Link>
            <Button variant="outline" size="sm">Reorder</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
