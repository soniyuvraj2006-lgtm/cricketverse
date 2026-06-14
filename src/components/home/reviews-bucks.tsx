"use client";

const reviews = [
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
  {
    name: "KARTIK D.",
    headline: "YEAH… THIS REPLACED EVERY OTHER MERCH I HAD.",
    body: "Not exaggerating — this is the first cricket store that actually feels premium.",
  },
  {
    name: "MEERA T.",
    headline: "SHIPS FAST. LOOKS BETTER IN PERSON.",
    body: "Ordered a magnet set for my brother. He thought I spent 3x what I did.",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <article className="relative w-[320px] flex-shrink-0 md:w-[380px]">
      <div className="relative z-10 flex items-center justify-center gap-2 bg-cream px-5 py-3">
        <span className="text-[8px] text-[#0A0700]">•</span>
        <span className="font-display text-sm font-bold tracking-[0.08em] text-[#0A0700]">{review.name}</span>
        <span className="text-[8px] text-[#0A0700]">•</span>
      </div>
      <div className="relative z-[3] border border-cream/20 bg-[#111008] p-8">
        <span className="font-display text-5xl leading-none text-cream/15">&ldquo;</span>
        <h3 className="mt-2 font-display text-xl font-bold leading-snug text-cream">{review.headline}</h3>
        <p className="mt-4 font-body text-sm text-cream/60">{review.body}</p>
        <div className="mt-4 text-gold">★★★★★</div>
      </div>
    </article>
  );
}

export function ReviewsBucks() {
  const loop = [...reviews, ...reviews];

  return (
    <section className="relative overflow-hidden bg-[#0A0700] py-24">
      <h2
        className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 select-none whitespace-nowrap font-display text-[clamp(80px,16vw,200px)] font-black leading-none text-outline-lg opacity-[0.08]"
        aria-hidden
      >
        REVIEWS
      </h2>

      <div className="relative z-[5] pt-16 text-center">
        <span className="pill-label text-xs">• FAN REVIEWS •</span>
      </div>

      <div className="relative z-[3] mt-10 overflow-hidden">
        <div className="flex w-max animate-ticker gap-0 hover:[animation-play-state:paused]">
          {loop.map((review, i) => (
            <div key={`${review.name}-${i}`} className="px-2">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
