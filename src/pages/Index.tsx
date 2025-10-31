import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import VisualDemo from "@/components/VisualDemo";
import ValueProposition from "@/components/ValueProposition";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <VisualDemo />
      <ValueProposition />
      <Testimonials />
      <FAQ />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
