import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { PopularBrands } from "@/components/PopularBrands";
import { About } from "@/components/About";
import { Support } from "@/components/Support";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PopularBrands />
        <About />
        <Support />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
