import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const quoteSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Phone number is required").max(20),
  address: z.string().trim().min(1, "Address is required").max(200),
  city: z.string().trim().min(1, "City is required").max(100),
  state: z.string().trim().min(1, "State is required").max(50),
  zip: z.string().trim().min(5, "ZIP code is required").max(10),
  services: z.array(z.string()).min(1, "Select at least one service"),
  message: z.string().trim().max(1000).optional(),
  consentTransactional: z.boolean().refine((v) => v, "Consent is required"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const serviceOptions = [
  "General Pest Control",
  "Mosquito Control",
  "Termite Control",
  "Flea & Tick Control",
  "Bed Bug Control",
  "Ant Control",
  "Spider Control",
  "Wasp Control",
  "Hornet Control",
  "Scorpion Control",
  "Rodent Control",
  "Roach Control",
  "Termite Inspections",
];

const QuotePage = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { services: [], consentTransactional: false },
  });

  const onSubmit = (data: QuoteFormData) => {
    console.log("Quote request submitted:", data);
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    reset();
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="hero-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-comic text-5xl md:text-6xl text-primary-foreground mb-4">
            Get Your Quote
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-xl mx-auto">
            Fill out the form below and our team will get back to you quickly with a customized quote for your pest control needs.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">First Name *</label>
                <input
                  {...register("firstName")}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="First Name"
                />
                {errors.firstName && <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Last Name *</label>
                <input
                  {...register("lastName")}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Last Name"
                />
                {errors.lastName && <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>}
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Email *</label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="email@example.com"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Phone *</label>
                <input
                  type="tel"
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="(903) 555-1234"
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">Street Address *</label>
              <input
                {...register("address")}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="123 Main St"
              />
              {errors.address && <p className="text-destructive text-sm mt-1">{errors.address.message}</p>}
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">City *</label>
                <input
                  {...register("city")}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Tyler"
                />
                {errors.city && <p className="text-destructive text-sm mt-1">{errors.city.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">State *</label>
                <input
                  {...register("state")}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="TX"
                />
                {errors.state && <p className="text-destructive text-sm mt-1">{errors.state.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">ZIP *</label>
                <input
                  {...register("zip")}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="75701"
                />
                {errors.zip && <p className="text-destructive text-sm mt-1">{errors.zip.message}</p>}
              </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Service(s) Requested *</label>
              <div className="grid sm:grid-cols-2 gap-2">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-muted transition-colors">
                    <input
                      type="checkbox"
                      value={service}
                      {...register("services")}
                      className="w-4 h-4 rounded text-primary accent-primary"
                    />
                    <span className="text-sm text-foreground">{service}</span>
                  </label>
                ))}
              </div>
              {errors.services && <p className="text-destructive text-sm mt-1">{errors.services.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">Additional Details (Optional)</label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                placeholder="Tell us more about your pest issue..."
              />
            </div>

            {/* Consent */}
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                {...register("consentTransactional")}
                className="w-4 h-4 mt-1 rounded text-primary accent-primary"
              />
              <span className="text-xs text-muted-foreground">
                By checking this box, I consent to receive transactional messages related to Dang Pest Control for my account, orders, or services I have requested. Message & Data rates may apply.
              </span>
            </label>
            {errors.consentTransactional && <p className="text-destructive text-sm">{errors.consentTransactional.message}</p>}

            <button type="submit" className="btn-cta w-full flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Send Request
            </button>
          </form>

          {/* Phone CTA */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-2">Or call us directly:</p>
            <a href="tel:9038710550" className="text-comic text-2xl text-primary flex items-center justify-center gap-2">
              <Phone className="w-6 h-6" />
              (903) 871-0550
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuotePage;
