import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="quote" className="hero-bg py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-comic text-4xl md:text-5xl text-primary-foreground mb-6">
          Get Your Quote Today
        </h2>
        <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Don't wait—restore comfort and peace to your home with professional pest control services from Dang Pest Control. Located in Tyler, TX, we proudly serve the surrounding areas including Longview, Jacksonville, Lindale, Bullard, Whitehouse, and more.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:9038710550" className="btn-cta-outline flex items-center gap-2 text-xl">
            <Phone className="w-6 h-6" />
            (903) 871-0550
          </a>
          <a href="#quote" className="btn-cta text-xl">
            Get Your Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
