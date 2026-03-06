import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Cara D.",
    title: "So Helpful!",
    text: "Oh my gosh I love Dang so much! Kirk is always so helpful, informative and nice!",
  },
  {
    name: "Murray S.",
    title: "Professional & Super Friendly",
    text: "Dang Pest Control is very professional and super friendly! I love that they always explain what they are doing and follow up after the service. Highly recommend!",
  },
  {
    name: "Shelley H.",
    title: "Quick Treatment & Suggestions",
    text: "When we moved into our new Barndominium, we apparently brought German Cockroaches in with our moving boxes. Dang quickly discovered where they were coming from and treated them. We haven't had any issues since!",
  },
  {
    name: "Kelley S.",
    title: "Friendly & Informative",
    text: "Dang is so friendly and informative. We recommend everyone use them!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-comic text-4xl md:text-5xl text-secondary mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-primary">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
