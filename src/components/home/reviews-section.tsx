"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@/components/icons";

const reviews = [
  {
    name: "Rahul M.",
    location: "Mumbai",
    rating: 5,
    product: "via Jerseys",
    text: "Got my MS Dhoni jersey and it's absolutely premium quality. The stitching and fabric feel authentic. Delivery was super fast!",
    height: "min-h-[280px]",
  },
  {
    name: "Priya K.",
    location: "Bangalore",
    rating: 5,
    product: "via Steel Cards",
    text: "The steel card collection is incredible.",
    height: "min-h-[180px]",
  },
  {
    name: "Arun S.",
    location: "Chennai",
    rating: 5,
    product: "via Collectibles",
    text: "Best cricket merchandise site in India. Customer support helped me pick the right jersey size. Highly recommend!",
    height: "min-h-[220px]",
  },
  {
    name: "Sneha P.",
    location: "Delhi",
    rating: 5,
    product: "via Posters",
    text: "World Cup poster quality is museum-grade. Framed it immediately.",
    height: "min-h-[200px]",
  },
  {
    name: "Karan J.",
    location: "Pune",
    rating: 4,
    product: "via Magnets",
    text: "Fridge magnets are a fun addition to my cricket corner at home.",
    height: "min-h-[160px]",
  },
  {
    name: "Meera R.",
    location: "Hyderabad",
    rating: 5,
    product: "via Jerseys",
    text: "Virat Kohli edition jersey fits perfectly. Authentic feel throughout.",
    height: "min-h-[240px]",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className={`group relative rounded-xl border border-[var(--border-dim)] bg-surface p-6 transition-all hover:scale-[1.01] hover:border-[var(--border-subtle)] ${review.height}`}>
      <span className="pointer-events-none absolute font-display text-[72px] leading-none text-gold opacity-15 transition-opacity group-hover:opacity-25">❝</span>
      <div className="relative flex items-start justify-between">
        <div className="flex-1" />
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < review.rating} className={`h-3.5 w-3.5 ${i < review.rating ? "text-gold" : "text-muted"}`} />
          ))}
        </div>
      </div>
      <p className="relative mt-4 font-body text-base leading-relaxed text-secondary">{review.text}</p>
      <div className="my-4 h-px w-10 bg-gradient-to-r from-gold to-transparent" />
      <p className="font-body text-sm font-bold text-primary">{review.name}</p>
      <p className="font-body text-xs text-muted">{review.location}</p>
      <p className="mt-1 font-mono text-[11px] text-gold">{review.product}</p>
    </div>
  );
}

function ScrollColumn({ items, duration }: { items: typeof reviews; duration: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="group/col relative h-[520px] overflow-hidden">
      <motion.div
        className="flex flex-col gap-4 group-hover/col:[animation-play-state:paused]"
        animate={{ y: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </motion.div>
    </div>
  );
}

export function ReviewsSection() {
  const col1 = reviews.filter((_, i) => i % 3 === 0);
  const col2 = reviews.filter((_, i) => i % 3 === 1);
  const col3 = reviews.filter((_, i) => i % 3 === 2);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-[var(--display-md)] text-primary"
            >
              FAN REVIEWS
            </motion.h2>
            <p className="mt-2 font-body text-secondary">50,000+ happy fans across India</p>
          </div>
          <div className="text-right">
            <p className="font-display text-[56px] leading-none text-gold">4.9</p>
            <p className="font-body text-[28px] font-light text-muted">/5.0</p>
            <div className="mt-2 flex justify-end gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} filled className="h-4 w-4 text-gold" />
              ))}
            </div>
            <p className="mt-2 font-mono text-xs text-muted">Based on 12,480 reviews</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <ScrollColumn items={col1.length ? col1 : reviews.slice(0, 2)} duration={30} />
          <ScrollColumn items={col2.length ? col2 : reviews.slice(2, 4)} duration={45} />
          <ScrollColumn items={col3.length ? col3 : reviews.slice(4, 6)} duration={38} />
        </div>
      </div>
    </section>
  );
}
