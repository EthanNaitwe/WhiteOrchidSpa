import { Leaf } from "lucide-react";

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "1000+", label: "Happy Clients" },
  { number: "15+", label: "Services" },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Head Therapist",
    specialization: "Certified in Swedish, Deep Tissue & Hot Stone Massage",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },
  {
    name: "Maria Rodriguez",
    role: "Wellness Specialist",
    specialization: "Expert in Aromatherapy & Holistic Treatments",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },
  {
    name: "Emma Thompson",
    role: "Senior Aesthetician",
    specialization: "Specializing in Facials & Skincare Treatments",
    image: "https://plus.unsplash.com/premium_photo-1661680271644-00e5bdf97627?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-spa-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-spa-primary mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-spa-text mb-6 leading-relaxed">
              At White Orchid Spa, we believe that true wellness encompasses the harmony of mind, body, and spirit. Located in the serene environment of Bulindo, our sanctuary offers a respite from the demands of daily life.
            </p>
            <p className="text-lg text-spa-text mb-6 leading-relaxed">
              Our approach combines ancient healing traditions with modern therapeutic techniques, using only the finest natural ingredients and products. Every treatment is carefully crafted to provide not just relaxation, but genuine transformation and renewal.
            </p>
            <div className="flex items-center space-x-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-spa-primary">{stat.number}</div>
                  <div className="text-spa-text">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="White Orchid Spa interior"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Leaf className="text-spa-primary h-8 w-8" />
                <div>
                  <div className="font-semibold text-spa-text">100% Natural</div>
                  <div className="text-sm text-gray-600">Organic Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-spa-primary mb-4">
            Meet Our Expert Team
          </h3>
          <p className="text-lg text-spa-text max-w-2xl mx-auto leading-relaxed">
            Our certified therapists bring years of experience and passion for wellness to every treatment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="font-serif text-xl font-semibold text-spa-primary mb-2">
                {member.name}
              </h4>
              <p className="text-spa-text mb-2">{member.role}</p>
              <p className="text-sm text-gray-600">{member.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
