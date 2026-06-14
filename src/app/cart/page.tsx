"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { PageHero } from "@/components/bucks/page-hero";
import { useCartStore } from "@/stores/cart-store";
import { formatPrice } from "@/lib/utils";
import { validateCoupon } from "@/lib/data/coupons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SeamDivider } from "@/components/layout/seam-divider";
import { ProductVisual } from "@/components/ui/product-visual";
import { CategoryVisualIcon } from "@/components/icons";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getSubtotal, getTotal, couponCode, couponDiscount, applyCoupon, removeCoupon } = useCartStore();
  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState("");
  const subtotal = getSubtotal();
  const shipping = subtotal >= 999 ? 0 : 99;
  const total = getTotal();
  const freeShippingGap = Math.max(0, 999 - subtotal);

  const handleApplyCoupon = () => {
    const result = validateCoupon(couponInput, subtotal);
    if (result.valid) {
      applyCoupon(couponInput.toUpperCase(), result.discount);
      setCouponError("");
    } else {
      setCouponError(result.message);
    }
  };

  if (items.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center section-padding pt-28">
        <CategoryVisualIcon category="jerseys" className="h-16 w-16 opacity-30" />
        <h1 className="mt-4 font-display text-3xl text-outline">YOUR CART</h1>
        <h1 className="font-display text-3xl text-cream">IS EMPTY</h1>
        <p className="mt-2 font-body text-secondary">Time to gear up like a legend!</p>
        <Link href="/jerseys" className="mt-6">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="section-padding pt-28">
      <div className="mx-auto max-w-7xl">
        <PageHero eyebrow="Cart" title="GEAR" titleOutline="YOUR" />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.size}`} className="bucks-panel flex gap-4">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                  <ProductVisual
                    category={item.product.category}
                    playerSlug={item.product.playerSlug}
                    playerName={item.product.player}
                    className="!h-24"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold uppercase tracking-wide text-cream">{item.product.name}</h3>
                    {item.size && <p className="font-mono text-xs text-cream/50">Size: {item.size}</p>}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-cream/20">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size)} className="px-3 py-1 hover:text-gold">−</button>
                      <span className="w-8 text-center font-mono text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size)} className="px-3 py-1 hover:text-gold">+</button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono font-bold text-gold">{formatPrice(item.product.price * item.quantity)}</span>
                      <button onClick={() => removeItem(item.product.id, item.size)} className="text-muted hover:text-alert">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bucks-panel h-fit">
            <h2 className="font-display text-lg font-bold uppercase tracking-wider text-cream">Order Summary</h2>
            <SeamDivider className="my-4" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-secondary">Subtotal</span><span className="font-mono">{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-secondary">Shipping</span><span className="font-mono">{shipping === 0 ? "FREE" : formatPrice(shipping)}</span></div>
              {couponDiscount > 0 && (
                <div className="flex justify-between text-field-green"><span>Coupon ({couponCode})</span><span className="font-mono">−{formatPrice(couponDiscount)}</span></div>
              )}
            </div>
            {freeShippingGap > 0 && (
              <p className="mt-3 text-xs text-muted">Add {formatPrice(freeShippingGap)} more for free shipping</p>
            )}
            <SeamDivider className="my-4" />
            <div className="flex justify-between font-display text-lg font-bold text-cream">
              <span>Total</span>
              <span className="font-mono text-gold">{formatPrice(total + shipping)}</span>
            </div>
            <div className="mt-4 flex gap-2">
              <Input placeholder="Coupon code" value={couponInput} onChange={(e) => setCouponInput(e.target.value)} />
              <Button variant="outline" onClick={handleApplyCoupon}>Apply</Button>
            </div>
            {couponError && <p className="mt-2 text-xs text-alert">{couponError}</p>}
            {couponCode && (
              <button onClick={removeCoupon} className="mt-2 text-xs text-muted hover:text-alert">Remove coupon</button>
            )}
            <Link href="/checkout" className="mt-6 block">
              <Button className="w-full" variant="gold">Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
