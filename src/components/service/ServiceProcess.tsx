import { Link } from "react-router-dom";
import { ProcessStep } from "@/data/servicesData";

interface ServiceProcessProps {
  title: string;
  intro?: string;
  steps: ProcessStep[];
}

const ServiceProcess = ({ title, intro, steps }: ServiceProcessProps) => {
  if (steps.length === 0 && !intro) return null;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-comic text-3xl md:text-4xl text-primary mb-6">{title}</h2>
        {intro && <p className="text-foreground text-lg leading-relaxed mb-10 max-w-3xl">{intro}</p>}
        <div className="space-y-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20">
                <img src={step.icon} alt={step.subtitle || step.title} className="w-full h-full object-contain" />
              </div>
              <div>
                {step.title && <span className="text-comic text-accent text-lg">{step.title}</span>}
                {step.subtitle && <h3 className="text-comic text-2xl text-foreground mt-1 mb-2">{step.subtitle}</h3>}
                <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/quote" className="btn-cta">Get Your Quote</Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
