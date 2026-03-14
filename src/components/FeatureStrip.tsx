import dangSeal from "@/assets/dang-seal.png";
import servicesIcon from "@/assets/services-icon.png";
import expertIcon from "@/assets/expert-icon.png";

const FeatureStrip = () => {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Guarantee Seal */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={dangSeal}
              alt="100% Super-Powered Guarantee"
              className="w-28 h-28 object-contain"
            />
            <p className="text-muted-foreground text-sm max-w-xs">
              If our service doesn't provide the results we say it will, we'll treat it again for free! If still not the desired results, we'll refund your money!
            </p>
          </div>

          {/* Super Hero Response Team */}
          <div className="flex flex-col items-center gap-3 border-x border-border px-4">
            <img src={servicesIcon} alt="Super Hero Response Team" className="w-16 h-16 object-contain" />
            <h3 className="text-comic text-xl text-foreground">Super Hero Response Team!</h3>
            <p className="text-muted-foreground text-sm">
              Committed to Excellent Customer Service & Communication!
            </p>
          </div>

          {/* Certified Expert */}
          <div className="flex flex-col items-center gap-3">
            <img src={expertIcon} alt="Certified Expert" className="w-16 h-16 object-contain" />
            <h3 className="text-comic text-xl text-foreground">Certified Expert</h3>
            <p className="text-muted-foreground text-sm">Licensed & Insured.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
