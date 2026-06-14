"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/bucks/page-hero";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth-store";

export default function OrderConfirmedPage({ params }: { params: { id: string } }) {
  const { orders } = useAuthStore();
  const order = orders.find((o) => o.id === params.id);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((t) => Math.max(0, t - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);

  return (
    <div className="section-padding pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-6xl">🏏</div>
        <PageHero eyebrow="Success" title="PLACED!" titleOutline="ORDER" align="center" />

        <p className="font-body text-secondary">
          Order ID: <span className="font-mono text-gold">{params.id}</span>
        </p>
        {order && (
          <p className="mt-2 font-body text-secondary">
            Estimated delivery: <strong className="text-cream">{order.estimatedDelivery}</strong>
          </p>
        )}

        <div className="bucks-panel mt-8 text-left">
          <h2 className="font-display font-bold uppercase tracking-wider text-cream">24-Hour Add-On Window</h2>
          <p className="mt-2 font-body text-sm text-secondary">Add more items to this order before it ships</p>
          <p className="mt-3 font-mono text-2xl text-gold">{hours}h {minutes}m remaining</p>
          <Button variant={timeLeft > 0 ? "primary" : "outline"} className="mt-4 w-full" disabled={timeLeft <= 0}>
            {timeLeft > 0 ? "Add More to This Order" : "Window Expired"}
          </Button>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href={`/track-order?orderId=${params.id}`}>
            <Button variant="outline">Track Order</Button>
          </Link>
          <Link href="/jerseys">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
