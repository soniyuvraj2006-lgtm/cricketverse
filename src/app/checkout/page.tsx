"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageHero } from "@/components/bucks/page-hero";
import { useCartStore } from "@/stores/cart-store";
import { useAuthStore } from "@/stores/auth-store";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SeamDivider } from "@/components/layout/seam-divider";
import type { Order, OrderStatus } from "@/lib/types";

const steps = ["Address", "Delivery", "Payment", "Review"];
const deliveryOptions = [
  { id: "standard", label: "Standard (3-5 days)", price: 99, note: "Free above ₹999" },
  { id: "express", label: "Express (1-2 days)", price: 199, note: "" },
  { id: "same-day", label: "Same Day (Metro cities)", price: 299, note: "" },
];
const paymentMethods = ["UPI", "Credit/Debit Card", "Net Banking", "Wallet", "Cash on Delivery"];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getSubtotal, clearCart, couponDiscount } = useCartStore();
  const { addresses, addOrder } = useAuthStore();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [delivery, setDelivery] = useState("standard");
  const [payment, setPayment] = useState("UPI");
  const [address, setAddress] = useState({
    fullName: addresses[0]?.fullName ?? "",
    phone: addresses[0]?.phone ?? "",
    pinCode: addresses[0]?.pinCode ?? "",
    addressLine1: addresses[0]?.addressLine1 ?? "",
    addressLine2: "",
    landmark: "",
    city: addresses[0]?.city ?? "",
    state: addresses[0]?.state ?? "",
  });

  const subtotal = getSubtotal();
  const deliveryPrice = delivery === "standard" && subtotal >= 999 ? 0 : deliveryOptions.find((d) => d.id === delivery)?.price ?? 99;
  const codCharge = payment === "Cash on Delivery" ? 25 : 0;
  const total = subtotal + deliveryPrice + codCharge - couponDiscount;

  const placeOrder = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    const orderId = `CV${Date.now().toString().slice(-8)}`;
    const timeline: { status: OrderStatus; date: string; completed: boolean }[] = [
      { status: "Order Received", date: new Date().toLocaleString("en-IN"), completed: true },
      { status: "Payment Confirmed", date: new Date().toLocaleString("en-IN"), completed: true },
      { status: "Packing Started", date: "", completed: false },
      { status: "Ready to Dispatch", date: "", completed: false },
      { status: "Dispatched", date: "", completed: false },
      { status: "In Transit", date: "", completed: false },
      { status: "Out for Delivery", date: "", completed: false },
      { status: "Delivered", date: "", completed: false },
    ];
    const order: Order = {
      id: orderId,
      items: [...items],
      total,
      status: "Payment Confirmed",
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 5 * 86400000).toISOString().split("T")[0],
      address: { id: "new", ...address },
      paymentMethod: payment,
      timeline,
    };
    addOrder(order);
    clearCart();
    router.push(`/order-confirmed/${orderId}`);
  };

  if (items.length === 0) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center pt-28">
        <div className="text-center">
          <p className="font-body text-secondary">Your cart is empty</p>
          <Button className="mt-4" onClick={() => router.push("/jerseys")}>Shop Now</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding pt-28">
      <div className="mx-auto max-w-3xl">
        <PageHero eyebrow="Checkout" title="ORDER" titleOutline="YOUR" />

        {/* Progress */}
        <div className="mb-10 flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-1 items-center">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full font-display text-sm font-bold ${
                i <= step ? "bg-cream text-[#0A0700]" : "border border-cream/20 text-cream/40"
              }`}>
                {i + 1}
              </div>
              <span className={`ml-2 hidden text-sm sm:block ${i <= step ? "text-cream" : "text-cream/40"}`}>{s}</span>
              {i < steps.length - 1 && <div className={`mx-2 h-px flex-1 ${i < step ? "bg-cream" : "bg-cream/15"}`} />}
            </div>
          ))}
        </div>

        <div className="bucks-panel">
          {step === 0 && (
            <div className="space-y-4">
              <h2 className="font-display font-bold uppercase tracking-wider text-cream">Delivery Address</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Full Name" value={address.fullName} onChange={(e) => setAddress({ ...address, fullName: e.target.value })} required />
                <Input label="Phone" value={address.phone} onChange={(e) => setAddress({ ...address, phone: e.target.value })} required />
                <Input label="Pin Code" value={address.pinCode} onChange={(e) => setAddress({ ...address, pinCode: e.target.value })} required />
                <Input label="City" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} required />
                <Input label="State" value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} required />
              </div>
              <Input label="Address Line 1" value={address.addressLine1} onChange={(e) => setAddress({ ...address, addressLine1: e.target.value })} required />
              <Input label="Address Line 2" value={address.addressLine2} onChange={(e) => setAddress({ ...address, addressLine2: e.target.value })} />
              <Input label="Landmark" value={address.landmark} onChange={(e) => setAddress({ ...address, landmark: e.target.value })} />
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-display font-bold uppercase tracking-wider text-cream">Delivery Option</h2>
              {deliveryOptions.map((opt) => (
                <label key={opt.id} className={`flex cursor-pointer items-center justify-between rounded-full border px-5 py-4 ${
                  delivery === opt.id ? "border-gold bg-gold/10" : "border-cream/15"
                }`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="delivery" checked={delivery === opt.id} onChange={() => setDelivery(opt.id)} className="accent-gold" />
                    <div>
                      <p className="font-medium">{opt.label}</p>
                      {opt.note && <p className="text-xs text-success">{opt.note}</p>}
                    </div>
                  </div>
                  <span className="font-mono">{opt.id === "standard" && subtotal >= 999 ? "FREE" : formatPrice(opt.price)}</span>
                </label>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="font-display font-bold uppercase tracking-wider text-cream">Payment Method</h2>
              <p className="font-mono text-xs text-cream/50">Real payment gateway (Razorpay) will be integrated before launch</p>
              {paymentMethods.map((method) => (
                <label key={method} className={`flex cursor-pointer items-center gap-3 rounded-full border px-5 py-4 ${
                  payment === method ? "border-gold bg-gold/10" : "border-cream/15"
                }`}>
                  <input type="radio" name="payment" checked={payment === method} onChange={() => setPayment(method)} className="accent-gold" />
                  <span>{method}</span>
                  {method === "Cash on Delivery" && <span className="ml-auto text-xs text-warning">+₹25 COD charge</span>}
                </label>
              ))}
              {payment === "UPI" && (
                <div className="border border-cream/15 bg-cream/5 p-4 text-center">
                  <div className="mx-auto mb-2 flex h-32 w-32 items-center justify-center border border-cream/10 bg-[#0A0700] text-cream/40">QR Code</div>
                  <p className="font-body text-sm text-secondary">Scan to pay via UPI</p>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="font-display font-bold uppercase tracking-wider text-cream">Review Order</h2>
              <div className="space-y-2 font-body text-sm text-secondary">
                <p><span className="text-cream/50">Deliver to:</span> {address.fullName}, {address.addressLine1}, {address.city}</p>
                <p><span className="text-cream/50">Delivery:</span> {deliveryOptions.find((d) => d.id === delivery)?.label}</p>
                <p><span className="text-cream/50">Payment:</span> {payment}</p>
              </div>
              <SeamDivider />
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span>{item.product.name} × {item.quantity}</span>
                    <span className="font-mono">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <SeamDivider />
              <div className="flex justify-between font-display text-lg font-bold text-cream">
                <span>Total</span>
                <span className="font-mono text-gold">{formatPrice(total)}</span>
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            {step > 0 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>
            ) : <div />}
            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)}>Continue</Button>
            ) : (
              <Button onClick={placeOrder} disabled={loading}>
                {loading ? "🏏 Placing Order..." : "Place Order"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
