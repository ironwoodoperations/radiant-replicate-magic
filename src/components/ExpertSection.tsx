import interiorService from "@/assets/interior-service.jpg";
import { Phone } from "lucide-react";

const ExpertSection = () => {
  return (
    <section className="section-orange py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-comic text-4xl md:text-5xl text-primary-foreground leading-tight">
              Expert Pest Control & Management Services around Tyler, TX
            </h2>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              At Dang Pest Control, we know pest problems can seriously disrupt your life. That's why we offer a wide array of reliable pest control services tailored to meet your specific needs. Whether it's a small nuisance or a full-blown infestation, our licensed and experienced technicians provide professional solutions that eliminate issues and prevent their return.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:9038710550" className="btn-cta-outline flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (903) 871-0550
              </a>
              <a href="#quote" className="btn-cta">Get Your Quote</a>
            </div>
          </div>

          <div className="cyan-border overflow-hidden">
            <img
              src={interiorService}
              alt="Pest Control Service Technician Spraying in Kitchen"
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
