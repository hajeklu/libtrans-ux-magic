
import { Button } from "@/components/ui/button";
import { ChevronRight, Truck } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-libtrans-50 to-libtrans-100">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116493-d654c66d388b?auto=format&fit=crop&q=80&w=2000"
          alt="Nákladní doprava"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
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
            Spolehlivá přeprava pro váš byznys
          </h1>
          
          <p className="mt-6 text-xl text-libtrans-700 animate-fade-up">
            Specializujeme se na vnitrostátní i mezinárodní přepravu zboží. Nabízíme komplexní logistické služby s důrazem na kvalitu a spolehlivost.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up">
            <Button
              size="lg"
              className="bg-libtrans-800 hover:bg-libtrans-900 text-white"
            >
              Nezávazná poptávka
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-libtrans-300 text-libtrans-800 hover:bg-libtrans-50"
            >
              Naše služby
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
