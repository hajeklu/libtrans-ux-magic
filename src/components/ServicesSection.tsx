
import { Shield, Truck, Clock, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Truck,
    title: "Nákladní doprava",
    description: "Vnitrostátní i mezinárodní přeprava zajištěná naší moderní flotilou vozidel DAF.",
    image: "/lovable-uploads/5cab5d7d-db32-4926-ac06-c918e9a95891.png"
  },
  {
    icon: Globe,
    title: "Mezinárodní přeprava",
    description: "Spolehlivá přeprava po celé Evropě s důrazem na včasné dodání a sledování zásilek.",
    image: "/lovable-uploads/3f6b0d38-ee32-473f-a8aa-1070123666c6.png"
  },
  {
    icon: Shield,
    title: "Pojištěný náklad",
    description: "Komplexní pojištění přepravovaného zboží pro vaši jistotu a bezpečnost vašeho majetku.",
    image: "/lovable-uploads/3f3eeb0c-3b77-48bf-87fc-e1170b2f5830.png"
  },
  {
    icon: Clock,
    title: "24/7 Servis",
    description: "Nepřetržitý provoz a pohotovostní služba pro okamžitou reakci na všechny vaše požadavky.",
    image: "/lovable-uploads/d22cf6fb-9a08-49df-aa78-4080958c1428.png"
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-libtrans-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1 mb-4 text-libtrans-700 bg-libtrans-100 rounded-full text-sm font-medium">
            Profesionální řešení
          </span>
          <h2 className="text-4xl font-bold text-libtrans-900 mb-4">
            Naše služby
          </h2>
          <p className="text-libtrans-600 max-w-2xl mx-auto text-lg">
            Poskytujeme kompletní logistické služby s vlastním moderním vozovým parkem DAF, který splňuje nejvyšší standardy kvality a bezpečnosti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-libtrans-100 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-libtrans-900/20 group-hover:bg-libtrans-900/10 transition-all z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="h-12 w-12 bg-libtrans-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-libtrans-100 transition-colors">
                  <service.icon className="h-6 w-6 text-libtrans-700" />
                </div>
                <h3 className="text-xl font-semibold text-libtrans-900 mb-3 group-hover:text-libtrans-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-libtrans-600 mb-4">
                  {service.description}
                </p>
                <Button variant="ghost" className="text-libtrans-700 hover:text-libtrans-900 p-0 hover:bg-transparent group">
                  <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-libtrans-700 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                    Více informací
                  </span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
