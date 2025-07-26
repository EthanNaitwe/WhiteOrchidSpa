import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '260px',
                height: '56px',
                backgroundImage: `url('https://images.unsplash.com/photo-1565825051903-b22d86e652a2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '0.5rem',
                overflow: 'hidden',
              }}
            >
              <div
                className="absolute inset-0 bg-white/70 dark:bg-black/60"
                style={{ zIndex: 1 }}
              />
              <h1
                className="font-serif text-2xl font-semibold text-spa-primary relative z-10 text-center w-full"
                style={{ lineHeight: '56px' }}
              >
                White Orchid Spa
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-spa-text hover:text-spa-primary transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-spa-text hover:text-spa-primary transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-spa-text hover:text-spa-primary transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-spa-text hover:text-spa-primary transition-colors duration-300 font-medium"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-spa-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300"
              >
                Book Now
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-spa-text hover:text-spa-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-spa-text hover:text-spa-primary transition-colors duration-300 font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-spa-text hover:text-spa-primary transition-colors duration-300 font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-spa-text hover:text-spa-primary transition-colors duration-300 font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-spa-text hover:text-spa-primary transition-colors duration-300 font-medium w-full text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="mx-3 mt-2 bg-spa-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
