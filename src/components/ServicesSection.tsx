
import { Shield, Truck, Clock, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Truck,
    title: "Nákladní doprava",
    description: "Vnitrostátní i mezinárodní přeprava s moderní flotilou vozidel.",
  },
  {
    icon: Globe,
    title: "Mezinárodní přeprava",
    description: "Spolehlivá přeprava po celé Evropě s důrazem na včasné dodání.",
  },
  {
    icon: Shield,
    title: "Pojištěný náklad",
    description: "Komplexní pojištění přepravovaného zboží pro vaši jistotu.",
  },
  {
    icon: Clock,
    title: "Expresní služby",
    description: "Rychlá přeprava pro urgentní zásilky s garantovaným časem dodání.",
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
            Nabízíme komplexní řešení v oblasti nákladní dopravy a logistiky.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300 border-libtrans-100"
            >
              <div className="h-12 w-12 bg-libtrans-50 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-libtrans-700" />
              </div>
              <h3 className="text-xl font-semibold text-libtrans-900 mb-2">
                {service.title}
              </h3>
              <p className="text-libtrans-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
