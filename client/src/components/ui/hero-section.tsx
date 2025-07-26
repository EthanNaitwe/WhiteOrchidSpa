import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      const navHeight = 64;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
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
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to <span className="text-spa-gold">White Orchid</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
          Experience tranquility and rejuvenation at Bulindo's premier luxury spa
        </p>
        <div className="space-x-4">
          <Button
            onClick={scrollToServices}
            className="bg-spa-primary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 font-semibold"
          >
            Explore Services
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-spa-primary transition-all duration-300 font-semibold"
          >
            Book Appointment
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
