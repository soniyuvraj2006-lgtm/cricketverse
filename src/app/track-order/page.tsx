"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PageHero } from "@/components/bucks/page-hero";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth-store";

const mockOrder = {
  id: "CV2024001234",
  placedOn: "June 10, 2026",
  estimatedDelivery: "June 16, 2026",
  product: "Virat Kohli Replica Jersey 2024",
  amount: "₹909",
  address: "Sector 14, Jaipur, Rajasthan — 302001",
  carrier: "BlueDart",
  trackingNumber: "BD123456789IN",
  steps: [
    { id: "received", label: "Order Received", sublabel: "Payment confirmed", done: true, time: "June 10, 2:35 PM" },
    { id: "packing", label: "Packing", sublabel: "Your item is being prepared", done: true, time: "June 11, 10:20 AM" },
    { id: "dispatched", label: "Dispatched", sublabel: "Out with BlueDart", done: true, time: "June 12, 9:00 AM" },
    { id: "transit", label: "In Transit", sublabel: "On the way to you", done: false, current: true, time: null as string | null },
    { id: "out_delivery", label: "Out for Delivery", sublabel: "Almost there!", done: false, time: null as string | null },
    { id: "delivered", label: "Delivered", sublabel: "Enjoy your purchase!", done: false, time: null as string | null },
  ],
};

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const { orders } = useAuthStore();
  const [orderId, setOrderId] = useState(searchParams.get("orderId") ?? "");
  const [phone, setPhone] = useState("");
  const [tracked, setTracked] = useState(!!searchParams.get("orderId"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = () => {
    if (!orderId.trim() || !phone.trim()) {
      setError("Please enter both Order ID and Phone Number.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      const order = orders.find((o) => o.id === orderId);
      if (order) setTracked(true);
      else setTracked(true);
      setLoading(false);
    }, 1200);
  };

  const currentStep = mockOrder.steps.findIndex((s) => s.current);

  return (
    <main className="min-h-screen bg-[#0A0700] pb-20 pt-28">
      <div className="mx-auto max-w-[760px] px-6">
        <PageHero
          eyebrow="CricketVerse"
          titleOutline="TRACK YOUR"
          title="ORDER"
          subtitle="Enter your order ID and registered phone number to see real-time delivery status."
        />

        {!tracked ? (
          <div className="bucks-panel">
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-display text-xs font-bold uppercase tracking-wider text-cream/70">Order ID</label>
                <input type="text" placeholder="CV2024001234" value={orderId} onChange={(e) => setOrderId(e.target.value)} className="input-field font-mono text-sm" />
              </div>
              <div>
                <label className="mb-2 block font-display text-xs font-bold uppercase tracking-wider text-cream/70">Phone Number</label>
                <input type="tel" placeholder="10-digit mobile" value={phone} onChange={(e) => setPhone(e.target.value)} className="input-field font-mono text-sm" />
              </div>
            </div>
            {error && <p className="mb-4 font-body text-sm text-cricket-red">{error}</p>}
            <Button type="button" onClick={handleTrack} disabled={loading} className="w-full">
              {loading ? "Searching..." : "Track Order"}
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="bucks-panel overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-field-green/20 bg-field-green/10 px-6 py-4">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-field-green" />
                  <span className="font-display text-sm font-bold uppercase tracking-wider text-field-green">In Transit</span>
                </div>
                <span className="font-mono text-xs text-cream/50">{orderId || mockOrder.id}</span>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                {[
                  { label: "PRODUCT", value: mockOrder.product },
                  { label: "AMOUNT PAID", value: mockOrder.amount },
                  { label: "ORDERED ON", value: mockOrder.placedOn },
                  { label: "ESTIMATED DELIVERY", value: mockOrder.estimatedDelivery, highlight: true },
                  { label: "SHIPPING CARRIER", value: `${mockOrder.carrier} — ${mockOrder.trackingNumber}` },
                  { label: "DELIVERY ADDRESS", value: mockOrder.address },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-cream/40">{item.label}</p>
                    <p className={`font-body text-[13px] ${item.highlight ? "font-bold text-gold" : "font-medium text-cream"}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bucks-panel">
              <h3 className="mb-7 font-display text-xl font-bold uppercase tracking-wider text-cream">Delivery Timeline</h3>
              <div className="relative">
                <div className="absolute bottom-4 left-[15px] top-4 w-0.5 bg-cream/10" />
                <div className="absolute left-[15px] top-4 w-0.5 bg-gold" style={{ height: `${(currentStep / (mockOrder.steps.length - 1)) * 100}%` }} />
                <div className="flex flex-col">
                  {mockOrder.steps.map((step, idx) => (
                    <div key={step.id} className={`flex gap-5 ${idx < mockOrder.steps.length - 1 ? "pb-7" : ""}`}>
                      <div
                        className={`relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                          step.done ? "border-2 border-gold bg-gold" : step.current ? "border-2 border-field-green bg-field-green/15" : "border-2 border-cream/15 bg-[#111008]"
                        }`}
                      >
                        {step.done ? (
                          <svg width="13" height="11" viewBox="0 0 13 11" fill="none">
                            <path d="M1 5.5L4.5 9L12 1.5" stroke="#0A0700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : step.current ? (
                          <div className="h-2 w-2 rounded-full bg-field-green" />
                        ) : (
                          <div className="h-1.5 w-1.5 rounded-full bg-cream/20" />
                        )}
                      </div>
                      <div className="pt-0.5">
                        <p className={`font-display text-sm font-bold ${step.done || step.current ? "text-cream" : "text-cream/40"}`}>{step.label}</p>
                        <p className="font-body text-xs text-secondary">{step.sublabel}</p>
                        {step.time && <p className="mt-1 font-mono text-[11px] text-gold">{step.time}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 border-t border-cream/10 pt-5">
                <Button variant="outline" onClick={() => setTracked(false)}>← Track Another Order</Button>
                <Link href="/contact"><Button variant="ghost">Need Help?</Button></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="pt-28 text-center font-body text-secondary">Loading...</div>}>
      <TrackOrderContent />
    </Suspense>
  );
}
