import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import AboutSection from "@/components/ui/about-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
