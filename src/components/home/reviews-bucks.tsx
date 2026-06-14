"use client";

const reviews = [
  {
    name: "KARTIK D.",
    headline: "REPLACED EVERY OTHER MERCH I OWNED.",
    body: "This is the first cricket store I trust. Everything is premium. (@kartikd_fan)",
  },
  {
    name: "MEERA T.",
    headline: "SHIPS FAST. LOOKS BETTER IN PERSON.",
    body: "Ordered a magnet set for my brother. He thought I spent 3x what I did.",
  },
  {
    name: "RAHUL M.",
    headline: "BEST CRICKET JERSEY I'VE OWNED IN A VERY LONG TIME.",
    body: "The stitching is insane. Wore it during the Australia series. Got 11 compliments.",
  },
  {
    name: "PRIYA K.",
    headline: "BEST STEEL CARD I EVER GOT...AND IT'S NOT CLOSE.",
    body: "I put the Dhoni card on my desk. My colleagues thought it was a piece of art.",
  },
  {
    name: "ARUN S.",
    headline: "WE DON'T TALK ABOUT THE OLD MERCH SITE AND WHAT IT DID.",
    body: "It's still wrapped in the box. Nobody touches it because they know what it did.",
  },
  {
    name: "SNEHA P.",
    headline: "THE POSTER MADE MY ROOM FEEL LIKE A STADIUM.",
    body: "World Cup moment on my wall. Guests always ask where I got it.",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <article className="w-[360px] flex-shrink-0 snap-start">
      <div className="relative z-[5] flex items-center justify-center gap-2.5 bg-cream px-5 py-3.5">
        <span className="text-[10px] text-[#0A0700]">•</span>
        <span className="font-display text-[15px] font-bold tracking-[0.08em] text-[#0A0700]">{review.name}</span>
        <span className="text-[10px] text-[#0A0700]">•</span>
      </div>
      <div className="min-h-[260px] border border-cream/[0.08] bg-[#111008] px-6 py-7">
        <span className="font-display text-[56px] leading-[0.8] text-cream/[0.12]">&ldquo;</span>
        <h3 className="mb-3.5 font-display text-xl font-bold leading-snug text-cream">{review.headline}</h3>
        <p className="mb-4 font-body text-[13px] leading-relaxed text-cream/55">{review.body}</p>
        <div className="text-lg text-gold">★★★★★</div>
      </div>
    </article>
  );
}

export function ReviewsBucks() {
  const loop = [...reviews, ...reviews];

  return (
    <section className="relative overflow-hidden bg-[#0A0700]">
      {/* Watermark — outline only, behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 z-0 flex h-[260px] items-center justify-center overflow-hidden"
      >
        <span
          className="whitespace-nowrap font-display text-[clamp(100px,20vw,240px)] font-black uppercase leading-none"
          style={{
            WebkitTextStroke: "1.5px #E8DCC8",
            color: "transparent",
            opacity: 0.1,
          }}
        >
          REVIEWS
        </span>
      </div>

      <div className="relative z-[2]">
        <div className="pt-[200px] text-center">
          <span className="pill-label text-xs">• FAN REVIEWS •</span>
        </div>

        <div
          className="flex gap-0 overflow-x-auto pb-20 pt-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {loop.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
