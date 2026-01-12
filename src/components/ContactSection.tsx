import React, { useState } from "react";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Chyba",
        description: "Prosím vyplňte všechna povinná pole",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Nová zpráva z kontaktního formuláře",
          message: formData.message,
          to_name: 'LibTrans Express',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Odesláno",
        description: "Vaše zpráva byla úspěšně odeslána. Budeme vás kontaktovat co nejdříve.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Chyba",
        description: "Nepodařilo se odeslat zprávu. Prosím zkuste to znovu později.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-libtrans-100/30 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-libtrans-50/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-libtrans-200/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kontaktujte nás
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jsme tu pro vás. Neváhejte nás kontaktovat s jakýmkoliv dotazem ohledně našich služeb.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative space-y-12 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="space-y-8 flex flex-col items-center text-center">
              <div className="flex flex-col items-center space-y-4 group hover:scale-105 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-libtrans-100 to-libtrans-200">
                  <MapPin className="w-6 h-6 text-libtrans-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Adresa</h3>
                  <p className="text-gray-600 leading-relaxed">
                    LibTrans Express s.r.o.<br />
                    Krásný Les 254<br />
                    46401 Frýdlant<br />
                    <span className="text-sm italic">Nacházíme se blízko města Frýdlant</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 group hover:scale-105 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-libtrans-100 to-libtrans-200">
                  <Phone className="w-6 h-6 text-libtrans-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">Luboš Hájek</p>
                      <a href="tel:+420602129636" className="text-gray-600 hover:text-libtrans-800 transition-colors">
                        +420 602 129 636
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Luboš Hájek ml.</p>
                      <a href="tel:+420725776260" className="text-gray-600 hover:text-libtrans-800 transition-colors">
                        +420 725 776 260
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Jaroslav Šírek</p>
                      <a href="tel:+420605700246" className="text-gray-600 hover:text-libtrans-800 transition-colors">
                        +420 605 700 246
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 group hover:scale-105 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-libtrans-100 to-libtrans-200">
                  <Mail className="w-6 h-6 text-libtrans-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <div className="space-y-2">
                    <a href="mailto:info@libtrans.cz" className="block text-gray-600 hover:text-libtrans-800 transition-colors">
                      info@libtrans.cz
                    </a>
                    <a href="mailto:ucetni@libtrans.cz" className="block text-gray-600 hover:text-libtrans-800 transition-colors">
                      ucetni@libtrans.cz
                    </a>
                    <a href="mailto:lubos.hajek@libtrans.cz" className="block text-gray-600 hover:text-libtrans-800 transition-colors">
                      lubos.hajek@libtrans.cz
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 group hover:scale-105 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-libtrans-100 to-libtrans-200">
                  <Building2 className="w-6 h-6 text-libtrans-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Identifikace</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium text-gray-900">IČO:</span> 08175039</p>
                    <p><span className="font-medium text-gray-900">DIČ:</span> CZ08175039</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Kde nás najdete
            </h3>
            <p className="text-gray-600 mb-8">
              Nacházíme se blízko města Frýdlant, snadno dostupné pro zákazníky z Frýdlantu a okolí.
            </p>
            <a 
              href="https://maps.app.goo.gl/un4VcBvKoDhQnKpu8"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-[300px] mb-8 rounded-xl overflow-hidden bg-white group"
            >
              <div className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 group-hover:opacity-0">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-white opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-60" />
              </div>
              <img
                src="/lovable-uploads/a36fdfe2-d59d-4a1d-bd25-b4ef5a99929d.png"
                alt="Mapa umístění firmy LibTrans Express"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Napište nám
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 block">
                    Jméno *
                  </label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vaše jméno" 
                    className="bg-white/80 border-gray-200 focus:border-libtrans-200" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 block">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vas@email.cz" 
                    className="bg-white/80 border-gray-200 focus:border-libtrans-200" 
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 block">
                  Předmět
                </label>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Předmět zprávy" 
                  className="bg-white/80 border-gray-200 focus:border-libtrans-200" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 block">
                  Zpráva *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Vaše zpráva..."
                  rows={6}
                  className="bg-white/80 border-gray-200 focus:border-libtrans-200 resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-libtrans-800 hover:bg-libtrans-900 text-white transition-colors"
              >
                {isLoading ? "Odesílám..." : "Odeslat zprávu"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
