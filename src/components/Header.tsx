
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export const Header = () => {
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

          {/* Contact info */}
          <div className="flex items-center space-x-3 md:space-x-6">
            <a 
              href="tel:+420725776260" 
              className="flex items-center space-x-1 md:space-x-2 text-sm text-libtrans-700 hover:text-libtrans-900"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">+420 725 776 260</span>
              <span className="md:hidden">Zavolat</span>
            </a>
            <a 
              href="mailto:info@libtrans.cz" 
              className="hidden md:flex items-center space-x-2 text-sm text-libtrans-700 hover:text-libtrans-900"
            >
              <Mail className="h-4 w-4" />
              <span>info@libtrans.cz</span>
            </a>
            <div className="hidden md:flex items-center space-x-2 text-sm text-libtrans-700">
              <MapPin className="h-4 w-4" />
              <span>Liberec</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
