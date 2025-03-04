
import React from "react";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
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
              <Card className="p-6 bg-white/95 backdrop-blur-sm h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-libtrans-100 p-2">
                    <MapPin className="w-5 h-5 text-libtrans-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-libtrans-900 mb-3">Adresa</h3>
                    <p className="text-libtrans-600 text-sm leading-relaxed">
                      LibTrans Express s.r.o.<br />
                      Krásný Les 254<br />
                      46401 Frýdlant
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/95 backdrop-blur-sm h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-libtrans-100 p-2">
                    <Building2 className="w-5 h-5 text-libtrans-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-libtrans-900 mb-3">Identifikace</h3>
                    <div className="space-y-1 text-sm">
                      <p className="text-libtrans-600">
                        <span className="font-medium">IČO:</span> 08175039
                      </p>
                      <p className="text-libtrans-600">
                        <span className="font-medium">DIČ:</span> CZ08175039
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/95 backdrop-blur-sm h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-libtrans-100 p-2">
                    <Phone className="w-5 h-5 text-libtrans-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-libtrans-900 mb-3">Telefon</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium text-libtrans-700">Luboš Hájek</p>
                        <a href="tel:+420602129636" className="text-libtrans-600 hover:text-libtrans-800 transition-colors">
                          +420 602 129 636
                        </a>
                      </div>
                      <div>
                        <p className="font-medium text-libtrans-700">Luboš Hájek ml.</p>
                        <a href="tel:+420725776260" className="text-libtrans-600 hover:text-libtrans-800 transition-colors">
                          +420 725 776 260
                        </a>
                      </div>
                      <div>
                        <p className="font-medium text-libtrans-700">Jaroslav Šírek</p>
                        <a href="tel:+420605700246" className="text-libtrans-600 hover:text-libtrans-800 transition-colors">
                          +420 605 700 246
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/95 backdrop-blur-sm h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-libtrans-100 p-2">
                    <Mail className="w-5 h-5 text-libtrans-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-libtrans-900 mb-3">Email</h3>
                    <div className="space-y-2 text-sm">
                      <a href="mailto:info@libtrans.cz" className="block text-libtrans-600 hover:text-libtrans-800 transition-colors">
                        info@libtrans.cz
                      </a>
                      <a href="mailto:ucetni@libtrans.cz" className="block text-libtrans-600 hover:text-libtrans-800 transition-colors">
                        ucetni@libtrans.cz
                      </a>
                      <a href="mailto:lubos.hajek@libtrans.cz" className="block text-libtrans-600 hover:text-libtrans-800 transition-colors">
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
