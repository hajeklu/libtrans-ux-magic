
import { Button } from "@/components/ui/button";
import { ChevronRight, Truck } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-libtrans-50 to-libtrans-100">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/c65fa998-53bd-408e-b8df-cf67b1b4bb3f.png?format=webp&quality=80&w=1920"
          alt="Nákladní vozy DAF"
          className="object-cover w-full h-full brightness-95 contrast-105"
        />
        <div className="block md:hidden absolute inset-0 bg-white/90" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent w-[80%]" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-down">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-libtrans-100 text-libtrans-700">
              <Truck className="w-4 h-4 mr-2" />
              Profesionální dopravní služby
            </span>
          </div>
          
          <h1 className="mt-6 text-5xl sm:text-6xl font-bold text-libtrans-900 animate-fade-up">
            Spolehlivá přeprava pro vás nebo vaší firmu
          </h1>
          
          <p className="mt-6 text-xl text-libtrans-700 animate-fade-up">
            Specializujeme se na vnitrostátní i mezinárodní přepravu zboží. Nabízíme komplexní logistické služby s důrazem na kvalitu a spolehlivost.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up">
            <Button
              size="lg"
              className="bg-libtrans-800 hover:bg-libtrans-900 text-white"
              onClick={() => scrollToSection('contact')}
            >
              Nezávazná poptávka
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-libtrans-300 text-libtrans-800 hover:bg-libtrans-50"
              onClick={() => scrollToSection('services')}
            >
              Naše služby
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
