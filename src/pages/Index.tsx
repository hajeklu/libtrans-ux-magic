
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
