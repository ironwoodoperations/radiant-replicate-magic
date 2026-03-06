import { WhyChooseItem } from "@/data/servicesData";
import { Link } from "react-router-dom";

interface ServiceWhyChooseProps {
  items: WhyChooseItem[];
  intro?: string;
}

const ServiceWhyChoose = ({ items, intro }: ServiceWhyChooseProps) => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4">
      <h2 className="text-comic text-3xl md:text-4xl text-primary mb-4">Why Choose Us?</h2>
      {intro && <p className="text-muted-foreground text-lg mb-8 max-w-3xl">{intro}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border shadow-sm">
            <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain mb-4" />
            <h3 className="text-comic text-xl text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/quote" className="btn-cta">Get Your Quote</Link>
      </div>
    </div>
  </section>
);

export default ServiceWhyChoose;
