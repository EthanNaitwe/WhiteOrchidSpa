import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface BookingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<BookingForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: BookingForm) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Submitted",
        description: "We'll contact you soon to confirm your appointment.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    bookingMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof BookingForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-spa-primary mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-spa-text max-w-3xl mx-auto leading-relaxed">
            Ready to embark on your wellness journey? Book your appointment today or get in touch with any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-spa-secondary rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-semibold text-spa-primary mb-6">
              Book Your Appointment
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="block text-spa-text font-medium mb-2">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange("firstName")}
                    placeholder="Your first name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-spa-text font-medium mb-2">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange("lastName")}
                    placeholder="Your last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="block text-spa-text font-medium mb-2">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="block text-spa-text font-medium mb-2">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange("phone")}
                  placeholder="+256 XXX XXX XXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <Label htmlFor="service" className="block text-spa-text font-medium mb-2">
                  Preferred Service *
                </Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-primary focus:border-transparent">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="therapeutic-massage">Therapeutic Massage</SelectItem>
                    <SelectItem value="rejuvenating-facials">Rejuvenating Facials</SelectItem>
                    <SelectItem value="aromatherapy">Aromatherapy</SelectItem>
                    <SelectItem value="body-treatments">Body Treatments</SelectItem>
                    <SelectItem value="couples-treatments">Couples Treatments</SelectItem>
                    <SelectItem value="wellness-programs">Wellness Programs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message" className="block text-spa-text font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  rows={4}
                  placeholder="Any special requests or questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-spa-primary focus:border-transparent"
                />
              </div>
              <Button
                type="submit"
                disabled={bookingMutation.isPending}
                className="w-full bg-spa-primary text-white py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold"
              >
                {bookingMutation.isPending ? "Submitting..." : "Book Appointment"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-spa-primary mb-6">
                Visit Our Spa
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-spa-primary text-white p-3 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-spa-text mb-1">Location</h4>
                    <p className="text-gray-600">
                      White Orchid Spa<br />
                      Bulindo Trading Center<br />
                      Wakiso District, Uganda
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-spa-primary text-white p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-spa-text mb-1">Phone</h4>
                    <p className="text-gray-600">
                      +256 700 123 456<br />
                      +256 750 987 654
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-spa-primary text-white p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-spa-text mb-1">Email</h4>
                    <p className="text-gray-600">
                      info@whiteorchidspa.ug<br />
                      bookings@whiteorchidspa.ug
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-spa-primary text-white p-3 rounded-full">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-spa-text mb-1">Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 8:00 PM<br />
                      Saturday: 8:00 AM - 9:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Bulindo, Wakiso District</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
