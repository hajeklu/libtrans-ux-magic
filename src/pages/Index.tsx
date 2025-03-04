
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { PreviewWidget } from "@/components/PreviewWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PreviewWidget />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
