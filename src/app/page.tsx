import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import StatsSection from "@/components/home/StatsSection";
import G7Explainer from "@/components/home/G7Explainer";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import ContactSection from "@/components/home/ContactSection";
import LatestArticles from "@/components/home/LatestArticles";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Hero />
      <Services />
      <StatsSection />
      <G7Explainer />
      <WhyChooseUs />
      <ProcessSection />
      <LatestArticles />
      <ContactSection />
    </div>
  );
}
