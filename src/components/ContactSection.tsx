
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-libtrans-700 mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium text-libtrans-900">Telefon</h3>
                  <p className="text-libtrans-600">+420 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-libtrans-700 mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium text-libtrans-900">Email</h3>
                  <p className="text-libtrans-600">info@libtrans.cz</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-libtrans-700 mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium text-libtrans-900">Adresa</h3>
                  <p className="text-libtrans-600">
                    Liberec, Česká republika
                  </p>
                </div>
              </div>
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
