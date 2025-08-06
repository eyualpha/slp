import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-10";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-7";
import Pricing from "@/components/pricing";
import StatsSection from "@/components/stats-2";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <StatsSection />
      <Pricing />
      <Testimonials />
      <FAQsThree />
      <FooterSection />
    </div>
  );
}
