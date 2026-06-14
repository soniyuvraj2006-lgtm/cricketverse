import type { Coupon } from "@/lib/types";

export const coupons: Coupon[] = [
  { code: "CRICKET20", discount: 20, type: "percentage", minOrder: 499, active: true },
  { code: "CRICKET10", discount: 10, type: "percentage", minOrder: 299, active: true },
  { code: "NEWUSER20", discount: 20, type: "percentage", minOrder: 0, active: true },
  { code: "FREESHIP", discount: 99, type: "shipping", minOrder: 499, active: true },
];

export function validateCoupon(code: string, subtotal: number): { valid: boolean; discount: number; message: string } {
  const coupon = coupons.find((c) => c.code.toUpperCase() === code.toUpperCase() && c.active);
  if (!coupon) return { valid: false, discount: 0, message: "Invalid coupon code" };
  if (coupon.minOrder && subtotal < coupon.minOrder) {
    return { valid: false, discount: 0, message: `Minimum order of ₹${coupon.minOrder} required` };
  }
  if (coupon.type === "percentage") {
    return { valid: true, discount: Math.round(subtotal * (coupon.discount / 100)), message: `${coupon.discount}% off applied!` };
  }
  if (coupon.type === "shipping") {
    return { valid: true, discount: coupon.discount, message: "Free shipping applied!" };
  }
  return { valid: true, discount: coupon.discount, message: `₹${coupon.discount} off applied!` };
}
