import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Capabilities from "@/components/home/Capabilities";
import CTAStrip from "@/components/home/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedProjects />
      <Capabilities />
      <CTAStrip />
    </>
  );
}
