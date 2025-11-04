import Hero from "@/components/Hero";
import IADilemma from "@/components/IADilemma";
import Comparison from "@/components/Comparison";
import MeetBia from "@/components/MeetBia";
import Demo from "@/components/Demo";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <IADilemma />
      <MeetBia />
      <Demo />
      <Comparison />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
