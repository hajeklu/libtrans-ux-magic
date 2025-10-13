
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo section */}
          <Link to="/" className="flex items-center space-x-2" aria-label="Libtrans - Domovská stránka">
            <img 
              src="/logo.png" 
              alt="Libtrans logo - nákladní doprava Liberec" 
              className="h-10 w-auto"
              width="120"
              height="40"
            />
          </Link>

          {/* Contact info */}
          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Desktop version */}
            <div className="hidden md:flex items-center divide-x divide-libtrans-200">
              <a 
                href="tel:+420725776260" 
                className="flex items-center space-x-2 text-sm text-libtrans-600 hover:text-libtrans-900 transition-colors pr-6"
              >
                <Phone className="h-4 w-4" />
                <span>+420 725 776 260</span>
              </a>
              <a 
                href="mailto:info@libtrans.cz" 
                className="flex items-center space-x-2 text-sm text-libtrans-600 hover:text-libtrans-900 transition-colors px-6"
              >
                <Mail className="h-4 w-4" />
                <span>info@libtrans.cz</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-libtrans-600 pl-6">
                <MapPin className="h-4 w-4" />
                <span>Liberec</span>
              </div>
            </div>

            {/* Mobile version */}
            <div className="flex md:hidden items-center bg-gray-50 rounded-full px-4 py-2">
              <a 
                href="tel:+420725776260" 
                className="flex items-center space-x-1.5 text-sm text-libtrans-600 hover:text-libtrans-900"
              >
                <Phone className="h-4 w-4" />
                <span>Zavolat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
