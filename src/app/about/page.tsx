import { StaticPage } from "@/components/layout/static-page";

export default function AboutPage() {
  return (
    <StaticPage title="CRICKETVERSE" titleOutline="ABOUT" subtitle="Own The Legends. Wear The Legacy.">
      <p>
        CricketVerse is India&apos;s premium cricket merchandise marketplace, built for the passionate fans who live and breathe cricket.
      </p>
      <p>
        Founded with a mission to connect cricket lovers with authentic, licensed merchandise — from replica jerseys and steel collector cards to signed memorabilia and limited edition collectibles.
      </p>
      <h2 className="mt-6 font-display text-xl font-bold uppercase tracking-wider text-cream">Our Mission</h2>
      <p>Own The Legends. Wear The Legacy. Every product on CricketVerse is verified for authenticity and quality.</p>
      <h2 className="mt-6 font-display text-xl font-bold uppercase tracking-wider text-cream">By the Numbers</h2>
      <ul className="mt-2 list-inside list-disc space-y-1">
        <li>50,000+ registered cricket fans</li>
        <li>500+ authentic products</li>
        <li>5 verified vendor partners</li>
        <li>Pan-India delivery within 24 hours</li>
      </ul>
    </StaticPage>
  );
}
