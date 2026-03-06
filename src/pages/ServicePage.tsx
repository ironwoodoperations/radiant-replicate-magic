import { useParams, Link } from "react-router-dom";
import { Phone, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceProcess from "@/components/service/ServiceProcess";
import ServiceWhyChoose from "@/components/service/ServiceWhyChoose";
import ServiceExtraSection from "@/components/service/ServiceExtraSection";
import ServiceFAQs from "@/components/service/ServiceFAQs";
import { servicesData, serviceKeys } from "@/data/servicesData";
import { useEffect } from "react";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-comic text-4xl text-primary mb-4">Service Not Found</h1>
          <Link to="/" className="btn-cta">Return Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero with image */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
          <Link to="/" className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <p className="text-comic text-accent text-lg mb-2">{service.subtitle}</p>
          <h1 className="text-comic text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 max-w-3xl">
            {service.title}
          </h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl leading-relaxed mb-8">{service.intro}</p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:9038710550" className="btn-cta-outline flex items-center gap-2 text-lg">
              <Phone className="w-5 h-5" /> (903) 871-0550
            </a>
            <Link to="/quote" className="btn-cta text-lg">Get Your Quote</Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ServiceProcess
        title={service.processTitle}
        intro={service.processIntro}
        steps={service.steps}
      />

      {/* Extra Sections (fire ant details, termite identification, health risks, etc.) */}
      {service.extraSections?.map((section, i) => (
        <ServiceExtraSection key={i} section={section} index={i} />
      ))}

      {/* Why Choose Us */}
      <ServiceWhyChoose items={service.whyChooseUs} intro={service.whyChooseIntro} />

      {/* FAQs (bed bugs, etc.) */}
      {service.faqs && service.faqs.length > 0 && (
        <ServiceFAQs faqs={service.faqs} />
      )}

      {/* Bottom CTA with optional image */}
      <section className="section-orange py-16">
        <div className="container mx-auto px-4">
          <div className={`flex flex-col ${service.bottomImage ? "lg:flex-row" : ""} gap-8 items-center`}>
            <div className={`flex-1 ${service.bottomImage ? "" : "text-center"}`}>
              <h2 className="text-comic text-3xl md:text-4xl text-primary-foreground mb-4">{service.bottomCTA.title}</h2>
              <p className="text-primary-foreground/90 text-lg max-w-2xl leading-relaxed mb-8">{service.bottomCTA.text}</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:9038710550" className="btn-cta-outline flex items-center gap-2">
                  <Phone className="w-5 h-5" /> (903) 871-0550
                </a>
                <Link to="/quote" className="btn-cta">Get Your Quote</Link>
              </div>
            </div>
            {service.bottomImage && (
              <div className="w-full lg:w-2/5">
                <img
                  src={service.bottomImage}
                  alt={service.bottomImageAlt || ""}
                  className="w-full rounded-xl cyan-border shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-comic text-3xl text-primary mb-2">Additional Services</h2>
          <p className="text-muted-foreground text-lg mb-6">We also provide specialized services for a wide range of pests:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceKeys
              .filter((key) => key !== slug)
              .map((key) => {
                const s = servicesData[key];
                return (
                  <Link key={key} to={`/services/${key}`} className="card-service group">
                    <h3 className="text-comic text-sm text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
