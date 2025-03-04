
import { Shield, Truck, Clock, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Truck,
    title: "Nákladní doprava",
    description: "Vnitrostátní i mezinárodní přeprava s moderní flotilou vozidel DAF.",
    image: "/lovable-uploads/5cab5d7d-db32-4926-ac06-c918e9a95891.png"
  },
  {
    icon: Globe,
    title: "Mezinárodní přeprava",
    description: "Spolehlivá přeprava po celé Evropě s důrazem na včasné dodání.",
    image: "/lovable-uploads/3f6b0d38-ee32-473f-a8aa-1070123666c6.png"
  },
  {
    icon: Shield,
    title: "Pojištěný náklad",
    description: "Komplexní pojištění přepravovaného zboží pro vaši jistotu.",
    image: "/lovable-uploads/3f3eeb0c-3b77-48bf-87fc-e1170b2f5830.png"
  },
  {
    icon: Clock,
    title: "24/7 Servis",
    description: "Nepřetržitý provoz a pohotovostní služba pro naše klienty.",
    image: "/lovable-uploads/d22cf6fb-9a08-49df-aa78-4080958c1428.png"
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-libtrans-900 mb-4">
            Naše služby
          </h2>
          <p className="text-libtrans-600 max-w-2xl mx-auto">
            Nabízíme komplexní řešení v oblasti nákladní dopravy a logistiky s vlastním vozovým parkem DAF.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-libtrans-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="h-12 w-12 bg-libtrans-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-libtrans-700" />
                </div>
                <h3 className="text-xl font-semibold text-libtrans-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-libtrans-600">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
