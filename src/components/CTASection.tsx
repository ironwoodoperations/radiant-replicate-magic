import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="quote" className="hero-bg py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-comic text-4xl md:text-5xl text-primary-foreground mb-6">
          Get Your Quote Today
        </h2>
        <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          Don't wait—restore comfort and peace to your home with professional pest control services from Dang Pest Control. Located in Tyler, TX, we proudly serve the surrounding areas.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { name: "Longview", slug: "longview-tx" },
            { name: "Jacksonville", slug: "jacksonville-tx" },
            { name: "Lindale", slug: "lindale-tx" },
            { name: "Bullard", slug: "bullard-tx" },
            { name: "Whitehouse", slug: "whitehouse-tx" },
          ].map((loc) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}`}
              className="text-primary-foreground/80 hover:text-secondary underline transition-colors"
            >
              {loc.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:9038710550" className="btn-cta-outline flex items-center gap-2 text-xl">
            <Phone className="w-6 h-6" />
            (903) 871-0550
          </a>
          <Link to="/quote" className="btn-cta text-xl">
            Get Your Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
