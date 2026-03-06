import { Bug, Rat, TreeDeciduous } from "lucide-react";

const services = [
  { icon: "🐜", name: "General Pest Control" },
  { icon: "🪳", name: "Termite Control & Inspections" },
  { icon: "🐜", name: "Ant Pest Control" },
  { icon: "🕷️", name: "Spider Pest Control" },
  { icon: "🐝", name: "Wasp & Hornet Control" },
  { icon: "🦂", name: "Scorpion Pest Control" },
  { icon: "🐀", name: "Rodent Pest Control" },
  { icon: "🦟", name: "Mosquito Pest Control" },
  { icon: "🪲", name: "Flea & Tick Control" },
  { icon: "🪳", name: "Roach Pest Control" },
  { icon: "🛏️", name: "Bed Bug Pest Control" },
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
            <div key={service.name} className="card-service cursor-pointer group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-comic text-lg text-foreground">{service.name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#quote" className="btn-cta">Get Your Quote</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
