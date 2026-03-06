interface ExtraSectionProps {
  section: {
    title: string;
    content: string[];
    image?: string;
    imageAlt?: string;
    bulletPoints?: string[];
  };
  index: number;
}

const renderBoldText = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
  );
};

const ServiceExtraSection = ({ section, index }: ExtraSectionProps) => {
  const isEven = index % 2 === 0;

  return (
    <section className={`py-12 ${isEven ? "bg-background" : "bg-muted/20"}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${section.image ? "lg:flex-row" : ""} gap-8 items-start`}>
          <div className={`flex-1 ${section.image && !isEven ? "lg:order-2" : ""}`}>
            <h2 className="text-comic text-2xl md:text-3xl text-primary mb-6">{section.title}</h2>
            {section.content.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4">
                {renderBoldText(paragraph)}
              </p>
            ))}
            {section.bulletPoints && (
              <ul className="space-y-3 mt-4">
                {section.bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1.5 text-lg">•</span>
                    <span className="text-muted-foreground text-lg leading-relaxed">{renderBoldText(point)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {section.image && (
            <div className={`w-full lg:w-2/5 ${!isEven ? "lg:order-1" : ""}`}>
              <img
                src={section.image}
                alt={section.imageAlt || section.title}
                className="w-full rounded-xl cyan-border shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceExtraSection;
