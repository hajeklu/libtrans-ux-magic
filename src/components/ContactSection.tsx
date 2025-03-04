import React from "react";
import { Mail, Phone, MapPin, Building2, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-libtrans-50 relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506017669510-0bcbe8003d70?auto=format&fit=crop&q=80"
          alt="Kontakt pozadí"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-libtrans-900 mb-6">
              Kontaktujte nás
            </h2>
            <p className="text-libtrans-600 mb-8">
              Jsme tu pro vás. Neváhejte nás kontaktovat s jakýmkoliv dotazem ohledně našich služeb.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white/95 backdrop-blur-sm h-full">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-libtrans-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-libtrans-900 mb-2">Adresa</h3>
                    <p className="text-libtrans-600 text-sm leading-relaxed">
                      LibTrans Express s.r.o.<br />
                      Krásný Les 254<br />
                      46401 Frýdlant
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/95 backdrop-blur-sm h-full">
                <div className="flex items-start space-x-4">
                  <Building2 className="w-5 h-5 text-libtrans-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-libtrans-900 mb-2">Identifikace</h3>
                    <p className="text-libtrans-600 text-sm leading-relaxed">
                      IČO: 08175039<br />
                      DIČ: CZ08175039
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/95 backdrop-blur-sm h-full">
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-libtrans-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-libtrans-900 mb-2">Telefon</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-libtrans-700 block">Luboš Hájek:</span>
                        <a href="tel:+420602129636" className="text-libtrans-600 hover:text-libtrans-700">
                          +420 602 129 636
                        </a>
                      </div>
                      <div>
                        <span className="font-medium text-libtrans-700 block">Luboš Hájek ml.:</span>
                        <a href="tel:+420725776260" className="text-libtrans-600 hover:text-libtrans-700">
                          +420 725 776 260
                        </a>
                      </div>
                      <div>
                        <span className="font-medium text-libtrans-700 block">Jaroslav Šírek:</span>
                        <a href="tel:+420605700246" className="text-libtrans-600 hover:text-libtrans-700">
                          +420 605 700 246
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/95 backdrop-blur-sm h-full">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-libtrans-700 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-libtrans-900 mb-2">Email</h3>
                    <div className="space-y-2 text-sm">
                      <a href="mailto:info@libtrans.cz" className="block text-libtrans-600 hover:text-libtrans-700">
                        info@libtrans.cz
                      </a>
                      <a href="mailto:ucetni@libtrans.cz" className="block text-libtrans-600 hover:text-libtrans-700">
                        ucetni@libtrans.cz
                      </a>
                      <a href="mailto:lubos.hajek@libtrans.cz" className="block text-libtrans-600 hover:text-libtrans-700">
                        lubos.hajek@libtrans.cz
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-libtrans-900">
                    Jméno
                  </label>
                  <Input className="mt-1" placeholder="Vaše jméno" />
                </div>
                <div>
                  <label className="text-sm font-medium text-libtrans-900">
                    Email
                  </label>
                  <Input className="mt-1" type="email" placeholder="vas@email.cz" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-libtrans-900">
                  Předmět
                </label>
                <Input className="mt-1" placeholder="Předmět zprávy" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-libtrans-900">
                  Zpráva
                </label>
                <Textarea
                  className="mt-1"
                  placeholder="Vaše zpráva..."
                  rows={4}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-libtrans-800 hover:bg-libtrans-900 text-white"
              >
                Odeslat zprávu
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
