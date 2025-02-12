
import { Shield, Truck, Clock, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Truck,
    title: "Nákladní doprava",
    description: "Vnitrostátní i mezinárodní přeprava s moderní flotilou vozidel.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Globe,
    title: "Mezinárodní přeprava",
    description: "Spolehlivá přeprava po celé Evropě s důrazem na včasné dodání.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Shield,
    title: "Pojištěný náklad",
    description: "Komplexní pojištění přepravovaného zboží pro vaši jistotu.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Clock,
    title: "Expresní služby",
    description: "Rychlá přeprava pro urgentní zásilky s garantovaným časem dodání.",
    image: "https://images.unsplash.com/photo-1637763723578-79a4ca9749f8?auto=format&fit=crop&q=80&w=800&h=600"
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
