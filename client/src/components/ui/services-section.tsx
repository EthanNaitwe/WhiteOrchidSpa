import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Therapeutic Massage",
    description: "Swedish, deep tissue, and hot stone massages to release tension and promote relaxation.",
    price: "From $120",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  },
  {
    title: "Rejuvenating Facials",
    description: "Customized facials using organic ingredients to cleanse, nourish, and revitalize your skin.",
    price: "From $95",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  },
  {
    title: "Aromatherapy",
    description: "Therapeutic essential oil treatments to enhance physical and emotional well-being.",
    price: "From $85",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  },
  {
    title: "Body Treatments",
    description: "Detoxifying wraps and exfoliating scrubs to restore your skin's natural glow.",
    price: "From $110",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  },
  {
    title: "Couples Treatments",
    description: "Romantic spa experiences designed for two in our private couples suite.",
    price: "From $240",
    image: "https://images.unsplash.com/photo-1498966518889-2cbecc307aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  },
  {
    title: "Wellness Programs",
    description: "Holistic wellness programs combining meditation, yoga, and mindfulness practices.",
    price: "From $75",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  },
];

export default function ServicesSection() {
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-spa-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-spa-text max-w-3xl mx-auto leading-relaxed">
            Indulge in our comprehensive range of wellness treatments designed to restore balance and harmony to your mind, body, and spirit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-spa-secondary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-spa-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-spa-text mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-spa-gold font-semibold text-lg">
                  {/* {service.price} */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            className="bg-spa-primary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 font-semibold"
          >
            Book Your Treatment
          </Button>
        </div>
      </div>
    </section>
  );
}
