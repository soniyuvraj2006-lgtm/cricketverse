"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageHero } from "@/components/bucks/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const steps = ["Business Info", "Brand Assets", "Products", "Payment"];

export default function VendorRegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  return (
    <div className="section-padding pt-28">
      <div className="mx-auto max-w-2xl">
        <PageHero eyebrow="Vendor" title="REGISTRATION" titleOutline="VENDOR" />
        <div className="mb-8 flex gap-2">
          {steps.map((s, i) => (
            <div key={s} className={`flex-1 py-1.5 text-center font-mono text-[10px] uppercase tracking-wider ${
              i <= step ? "bg-cream text-[#0A0700]" : "border border-cream/20 text-cream/40"
            }`}>{s}</div>
          ))}
        </div>
        <div className="bucks-panel space-y-4">
          {step === 0 && (
            <>
              <Input label="Business Name" required />
              <Input label="Owner Full Name" required />
              <Input label="Business Email" type="email" required />
              <Input label="Phone Number" required />
              <Input label="GST Number (optional)" />
              <Input label="Business Address" required />
              <div>
                <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-cream/70">Business Category</label>
                <select className="input-field">
                  <option>Cricket Jerseys</option>
                  <option>Collectibles</option>
                  <option>Equipment</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea className="input-field min-h-[100px]" placeholder="Business Description (500 chars max)" />
            </>
          )}
          {step === 1 && (
            <>
              <div className="border-2 border-dashed border-cream/20 p-8 text-center">
                <p className="font-body text-secondary">Upload Business Logo (min 400×400px)</p>
                <Button variant="outline" size="sm" className="mt-3">Choose File</Button>
              </div>
              <div className="border-2 border-dashed border-cream/20 p-8 text-center">
                <p className="font-body text-secondary">Upload Banner (1200×400px)</p>
                <Button variant="outline" size="sm" className="mt-3">Choose File</Button>
              </div>
              <Input label="Instagram Handle" placeholder="@yourstore" />
              <Input label="Facebook Page" />
            </>
          )}
          {step === 2 && (
            <>
              <Input label="Product Name" required />
              <div>
                <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-cream/70">Category</label>
                <select className="input-field">
                  <option>Jerseys</option>
                  <option>Steel Cards</option>
                  <option>Posters</option>
                </select>
              </div>
              <Input label="Price (MRP)" type="number" />
              <Input label="Selling Price" type="number" />
              <Input label="Stock Quantity" type="number" />
              <textarea className="input-field min-h-[80px]" placeholder="Product Description" />
            </>
          )}
          {step === 3 && (
            <div className="text-center">
              <p className="font-mono text-2xl font-bold text-gold">₹5,000</p>
              <p className="mt-2 font-body text-secondary">Monthly subscription payment</p>
              <p className="mt-4 font-mono text-xs text-cream/40">Real Razorpay integration coming before launch</p>
              <Button className="mt-6" onClick={() => router.push("/add-business/status")}>
                Pay & Submit Application
              </Button>
            </div>
          )}
          <div className="flex justify-between pt-4">
            {step > 0 && step < 3 && <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>}
            {step < 3 && <Button onClick={() => setStep(step + 1)} className="ml-auto">Continue</Button>}
          </div>
        </div>
      </div>
    </div>
  );
}
