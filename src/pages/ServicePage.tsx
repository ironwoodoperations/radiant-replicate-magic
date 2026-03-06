import { useParams, Link } from "react-router-dom";
import { Phone, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const servicesData: Record<string, { title: string; icon: string; intro: string; details: string[]; prevention: string }> = {
  "pest-control": {
    title: "General Pest Control",
    icon: "🐜",
    intro: "Your home or property deserves year-round protection from pests. We deliver general pest control services tailored to the unique challenges of the East Texas environment. Count on our team of skilled technicians to protect your home from unwanted invaders with precision and professionalism.",
    details: [
      "Comprehensive interior and exterior inspection to identify pests, evidence of activity, entry points, and harborage areas.",
      "Targeted interior and exterior treatments including spraying in kitchens, bathrooms, wall penetrations, foundations, windows, doors, and eaves.",
      "Prevention treatments up to 10 feet from your foundation, spider web removal, and entry point fortification.",
      "Custom treatment plans using Integrated Pest Management to address root causes, not just symptoms.",
      "Regular monitoring and preventative care with adjustments as needed for long-lasting protection.",
    ],
    prevention: "Our integrated pest management approach doesn't just treat pests temporarily—it gets to the root of the problem to keep them away year-round.",
  },
  "ant-control": {
    title: "Ant Pest Control",
    icon: "🐜",
    intro: "Ants can invade your home in large numbers, contaminating food and causing structural damage. Our expert ant control services target colonies at their source for lasting elimination.",
    details: [
      "Identification of ant species and colony locations for targeted treatment.",
      "Interior and exterior baiting and barrier treatments.",
      "Entry point sealing and preventative measures.",
      "Follow-up monitoring to ensure colony elimination.",
    ],
    prevention: "We focus on eliminating entire colonies, not just visible ants, ensuring long-term protection for your home.",
  },
  "termite-inspections": {
    title: "Termite Control & Inspections",
    icon: "🪳",
    intro: "Termites can silently eat away at your home's structure and value. Whether you need a thorough termite inspection or effective termite treatment, our certified technicians have you covered.",
    details: [
      "Comprehensive property inspection for termite activity and damage.",
      "Wood-destroying insect reports for real estate transactions.",
      "Advanced treatment options including liquid barriers and baiting systems.",
      "Ongoing monitoring and prevention programs.",
    ],
    prevention: "Early detection is key. Our regular inspection programs catch termite activity before significant damage occurs.",
  },
  "spider-control": {
    title: "Spider Pest Control",
    icon: "🕷️",
    intro: "While most spiders are harmless, some species in East Texas can pose health risks. Our spider control services eliminate existing populations and prevent new ones from taking hold.",
    details: [
      "Identification of spider species including potentially dangerous varieties.",
      "Web removal and targeted treatment of harborage areas.",
      "Exterior perimeter treatments to prevent entry.",
      "Reduction of prey insects that attract spiders.",
    ],
    prevention: "By eliminating the insects spiders feed on and sealing entry points, we create an environment where spiders can't thrive.",
  },
  "wasp-hornet-control": {
    title: "Wasp & Hornet Pest Control",
    icon: "🐝",
    intro: "Wasps and hornets can be aggressive and their stings dangerous. Our technicians safely remove nests and implement prevention strategies to keep your family safe.",
    details: [
      "Safe identification and removal of wasp and hornet nests.",
      "Treatment of nesting areas to prevent rebuilding.",
      "Exterior treatments targeting common nesting sites like eaves and overhangs.",
      "Ongoing prevention during peak season.",
    ],
    prevention: "We remove existing nests and treat potential nesting sites to prevent these stinging insects from returning.",
  },
  "scorpion-control": {
    title: "Scorpion Pest Control",
    icon: "🦂",
    intro: "Scorpions can be a scary find in your home, and some species in Texas can deliver painful stings. Our scorpion control targets their hiding spots and entry points.",
    details: [
      "Thorough inspection of common scorpion harborage areas.",
      "Targeted treatment of cracks, crevices, and entry points.",
      "Exterior perimeter treatments and moisture control recommendations.",
      "Removal of debris and harborage areas near the structure.",
    ],
    prevention: "Scorpions seek shelter in dark, moist areas. We address these conditions while treating for existing populations.",
  },
  "rodent-control": {
    title: "Rodent Pest Control",
    icon: "🐀",
    intro: "Mice and rats can cause significant damage and spread disease. Our rodent control plans remove these unwanted guests and prevent them from coming back.",
    details: [
      "Comprehensive inspection to identify entry points and activity areas.",
      "Strategic placement of traps and exclusion devices.",
      "Sealing of entry points to prevent re-entry.",
      "Sanitation recommendations and ongoing monitoring.",
    ],
    prevention: "Exclusion is key to long-term rodent control. We seal entry points and eliminate conditions that attract rodents.",
  },
  "mosquito-control": {
    title: "Mosquito Pest Control",
    icon: "🦟",
    intro: "Don't let mosquitos ruin your outdoor spaces. We use proven methods to reduce mosquito populations so you can enjoy your yard worry-free.",
    details: [
      "Identification and treatment of mosquito breeding sites.",
      "Barrier spray treatments for immediate relief.",
      "Larvicide applications to prevent new generations.",
      "Recommendations for reducing standing water and breeding habitats.",
    ],
    prevention: "Our comprehensive approach targets mosquitos at every stage of their life cycle for maximum population reduction.",
  },
  "flea-tick-control": {
    title: "Flea & Tick Pest Control",
    icon: "🪲",
    intro: "Fleas and ticks aren't just a nuisance—they can transmit diseases to your family and pets. Our treatments eliminate existing infestations and prevent future ones.",
    details: [
      "Interior treatment targeting flea and tick life stages.",
      "Exterior yard treatments to reduce populations.",
      "Pet-safe products that protect your furry family members.",
      "Follow-up treatments to break the reproduction cycle.",
    ],
    prevention: "Breaking the flea and tick life cycle is essential. Our multi-treatment approach ensures complete elimination.",
  },
  "roach-control": {
    title: "Roach Pest Control",
    icon: "🪳",
    intro: "Cockroaches are resilient pests that can spread bacteria and trigger allergies. Our targeted roach control eliminates infestations and prevents their return.",
    details: [
      "Species identification for targeted treatment strategies.",
      "Gel bait applications in cracks, crevices, and harborage areas.",
      "Interior and exterior barrier treatments.",
      "Sanitation recommendations and ongoing monitoring.",
    ],
    prevention: "Different roach species require different approaches. Our customized plans target the specific species in your home.",
  },
  "bed-bug-control": {
    title: "Bed Bug Pest Control",
    icon: "🛏️",
    intro: "Say goodbye to sleepless nights. Our expert team will eliminate bed bugs from your home quickly and effectively with proven treatment methods.",
    details: [
      "Thorough inspection of sleeping areas, furniture, and common hiding spots.",
      "Multi-step treatment process for complete elimination.",
      "Mattress and box spring treatments.",
      "Follow-up inspections to confirm elimination.",
    ],
    prevention: "Bed bugs are excellent hitchhikers. We'll provide prevention tips to help you avoid future infestations.",
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-comic text-4xl text-primary mb-4">Service Not Found</h1>
          <Link to="/" className="btn-cta">Return Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{service.icon}</span>
            <h1 className="text-comic text-4xl md:text-6xl text-primary-foreground">{service.title}</h1>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-2xl">{service.intro}</p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="tel:9038710550" className="btn-cta-outline flex items-center gap-2">
              <Phone className="w-5 h-5" /> (903) 871-0550
            </a>
            <Link to="/quote" className="btn-cta">Get Your Quote</Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-comic text-3xl md:text-4xl text-primary mb-8">Our Process</h2>
          <div className="space-y-6">
            {service.details.map((detail, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                  <span className="text-comic text-primary-foreground text-lg">{i + 1}</span>
                </div>
                <p className="text-foreground text-lg leading-relaxed pt-1">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section className="section-orange py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-comic text-3xl md:text-4xl text-primary-foreground mb-4">Long-Term Prevention</h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">{service.prevention}</p>
          <Link to="/quote" className="btn-cta">Get Your Quote Today</Link>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-comic text-3xl text-primary mb-6">Other Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(servicesData)
              .filter(([key]) => key !== slug)
              .map(([key, s]) => (
                <Link key={key} to={`/services/${key}`} className="card-service group">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{s.icon}</div>
                  <h3 className="text-comic text-sm text-foreground">{s.title}</h3>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
