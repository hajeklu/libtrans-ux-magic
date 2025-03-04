
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-libtrans-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo section */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Libtrans logo" 
              className="h-12 w-auto" 
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-libtrans-700 hover:text-libtrans-900 transition-colors"
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-libtrans-700 hover:text-libtrans-900 transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Contact info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="tel:+420777888999" 
              className="flex items-center space-x-2 text-sm text-libtrans-700 hover:text-libtrans-900"
            >
              <Phone className="h-4 w-4" />
              <span>+420 777 888 999</span>
            </a>
            <a 
              href="mailto:info@libtrans.cz" 
              className="flex items-center space-x-2 text-sm text-libtrans-700 hover:text-libtrans-900"
            >
              <Mail className="h-4 w-4" />
              <span>info@libtrans.cz</span>
            </a>
            <div className="flex items-center space-x-2 text-sm text-libtrans-700">
              <MapPin className="h-4 w-4" />
              <span>Liberec</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
