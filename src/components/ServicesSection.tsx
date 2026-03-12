import { Link } from "react-router-dom";

const services = [
  { icon: "🐜", name: "General Pest Control", slug: "pest-control" },
  { icon: "🪳", name: "Termite Control & Inspections", slug: "termite-inspections" },
  { icon: "🐜", name: "Ant Pest Control", slug: "ant-control" },
  { icon: "🕷️", name: "Spider Pest Control", slug: "spider-control" },
  { icon: "🐝", name: "Wasp & Hornet Control", slug: "wasp-hornet-control" },
  { icon: "🦂", name: "Scorpion Pest Control", slug: "scorpion-control" },
  { icon: "🐀", name: "Rodent Pest Control", slug: "rodent-control" },
  { icon: "🦟", name: "Mosquito Pest Control", slug: "mosquito-control" },
  { icon: "🪲", name: "Flea & Tick Control", slug: "flea-tick-control" },
  { icon: "🪳", name: "Roach Pest Control", slug: "roach-control" },
  { icon: "🛏️", name: "Bed Bug Pest Control", slug: "bed-bug-control" },
  { icon: "🐍", name: "Snake Control", slug: "snake-control" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-comic text-4xl md:text-5xl text-primary mb-4">
            Our Pest Control Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Using the latest industry techniques, we deliver tailored treatment plans that are highly effective while remaining friendly for your family, pets, and the environment.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`} className="card-service cursor-pointer group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-comic text-lg text-foreground">{service.name}</h3>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/quote" className="btn-cta">Get Your Quote</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
