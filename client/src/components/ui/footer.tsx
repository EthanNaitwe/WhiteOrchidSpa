import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
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
  };

  return (
    <footer className="bg-spa-text text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-semibold mb-4">White Orchid Spa</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your sanctuary for wellness and rejuvenation in the heart of Bulindo. Experience the perfect harmony of luxury and tranquility.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-spa-primary text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-spa-primary text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-spa-primary text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-spa-primary text-white p-2 rounded-full hover:bg-opacity-80 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Massage Therapy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Facial Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Body Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Couples Packages
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 White Orchid Spa. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
