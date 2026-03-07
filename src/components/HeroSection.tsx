import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import dangSeal from "@/assets/dang-seal.png";
import { Play } from "lucide-react";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-comic text-5xl md:text-7xl leading-tight text-primary-foreground drop-shadow-lg">
              Super Powered<br />Pest Control
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-lg leading-relaxed">
              We are a hands-on, personable, relationship-based company. We live, work, worship, and play in the Tyler community. Our innovative pest control practices make us stand out amongst our competitors.
            </p>
            <Link to="/quote" className="btn-cta inline-block">
              Get Your Quote
            </Link>
          </div>
          <div className="flex justify-center relative">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl cyan-border relative">
              {!isPlaying ? (
                <button
                  onClick={handlePlay}
                  className="relative w-full block group cursor-pointer"
                  aria-label="Play Video"
                >
                  <img
                    src="/video-poster.webp"
                    alt="Dang Pest Control Video"
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </button>
              ) : (
                <video
                  ref={videoRef}
                  className="w-full aspect-video"
                  controls
                  preload="auto"
                  controlsList="nodownload"
                  src="https://www.dangpestcontrol.com/wp-content/uploads/2025/04/dang-pest-homepage.mp4"
                />
              )}
            </div>
          </div>
        </div>

        {/* Guarantee Seal Section */}
        <div className="mt-12 flex justify-center">
          <img
            src={dangSeal}
            alt="Dang Super Powered Guarantee Seal"
            className="w-72 md:w-96 animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
