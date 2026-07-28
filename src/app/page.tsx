import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import JourneyGrid from "@/components/home/JourneyGrid";
import CTAStrip from "@/components/home/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedDestinations />
      <JourneyGrid />
      <CTAStrip />
    </>
  );
}
