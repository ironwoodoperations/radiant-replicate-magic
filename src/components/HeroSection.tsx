import dangSeal from "@/assets/dang-seal.png";

const HeroSection = () => {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-comic text-5xl md:text-7xl leading-tight text-primary-foreground drop-shadow-lg">
              Super Powered<br />Pest Control
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-lg leading-relaxed">
              We are a hands-on, personable, relationship-based company. We live, work, worship, and play in the Tyler community. Our innovative pest control practices make us stand out amongst our competitors.
            </p>
            <a href="#quote" className="btn-cta inline-block">
              Get Your Quote
            </a>
          </div>

          {/* Right - Seal image */}
          <div className="flex justify-center">
            <img
              src={dangSeal}
              alt="Dang Super Powered Guarantee Seal"
              className="w-72 md:w-96 animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
