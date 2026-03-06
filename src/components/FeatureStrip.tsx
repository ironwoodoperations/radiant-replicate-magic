import servicesIcon from "@/assets/services-icon.png";
import expertIcon from "@/assets/expert-icon.png";

const features = [
  {
    icon: servicesIcon,
    title: "Super Hero Response Team!",
    description: "Committed to Excellent Customer Service & Communication!",
  },
  {
    icon: expertIcon,
    title: "Certified Expert",
    description: "Licensed & Insured.",
  },
];

const FeatureStrip = () => {
  return (
    <section className="feature-strip py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-4">
              <img src={f.icon} alt={f.title} className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-comic text-xl text-secondary">{f.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
