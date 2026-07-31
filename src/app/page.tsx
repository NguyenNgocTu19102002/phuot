import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import ProductsSection from "@/components/home/ProductsSection";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import ProcessSection from "@/components/home/ProcessSection";
import ContactSection from "@/components/home/ContactSection";
import LatestArticles from "@/components/home/LatestArticles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Hero />
      <Services />
      <ProductsSection />
      <StatsSection />
      <WhyChooseUs />
      <NewsletterCTA />
      <ProcessSection />
      <ContactSection />
      <LatestArticles />
    </main>
  );
}
