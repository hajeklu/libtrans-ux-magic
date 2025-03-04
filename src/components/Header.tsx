
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-libtrans-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Libtrans logo" className="h-12 w-auto bg-white rounded-lg p-1" />
          </Link>
        </div>
      </div>
    </header>
  );
};
