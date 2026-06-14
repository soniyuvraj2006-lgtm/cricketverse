import { HeroCarousel } from "@/components/home/hero-carousel";
import { KineticTextSection } from "@/components/home/kinetic-text-section";
import { FeaturesAccordion } from "@/components/home/features-accordion";
import { ProductShowcaseCards } from "@/components/home/product-showcase-cards";
import { WhyCurvedSection } from "@/components/home/why-curved-section";
import { NumberedReasonsSection } from "@/components/home/numbered-reasons";
import { BundleBuilder } from "@/components/home/bundle-builder";
import { ReviewsBucks } from "@/components/home/reviews-bucks";
import { TickerBelt } from "@/components/shared/ticker-belt";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <TickerBelt />
      <KineticTextSection />
      <FeaturesAccordion />
      <ProductShowcaseCards />
      <WhyCurvedSection />
      <NumberedReasonsSection />
      <BundleBuilder />
      <ReviewsBucks />
    </>
  );
}
