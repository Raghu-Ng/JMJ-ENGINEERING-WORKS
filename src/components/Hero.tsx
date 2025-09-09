import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-manufacturing.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="JMJ Engineering Works - Precision Manufacturing"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-primary/40" />
      </div>

      {/* Cinematic Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            {/* Massive Company Name */}
            <div className="mb-4">
              <h1 className="text-mega font-industrial text-white leading-none tracking-tight">
                JMJ
              </h1>
              <div className="text-cinematic font-industrial text-primary leading-none mt-2">
                ENGINEERING
              </div>
              <div className="text-dramatic font-industrial text-white/90 leading-none mt-1">
                WORKS
              </div>
            </div>

            {/* Tagline */}
            <div className="mb-8 max-w-2xl">
              <p className="text-xl md:text-2xl text-white/80 font-technical tracking-wider uppercase">
                Quality and Trusted Service
              </p>
            </div>

            {/* Description */}
            <div className="mb-12 max-w-3xl">
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                Specialized in manufacturing and calibration of aerospace jigs using laser tracker, 
                precision fabrications, aircraft ground equipment, and aircraft component manufacturing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="default" size="lg" className="shadow-industrial font-technical tracking-wider">
                VIEW OUR SERVICES
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-technical tracking-wider">
                GET QUOTE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ISO Certification Badge - Bottom Left */}
      <div className="absolute bottom-6 left-6 z-20">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
          <span className="text-white font-technical text-xs tracking-wider">
            ISO 9001:2015 CERTIFIED
          </span>
        </div>
      </div>

      {/* Year Badge - Bottom Right */}
      <div className="absolute bottom-6 right-6 z-20">
        <div className="text-right">
          <div className="text-6xl md:text-8xl font-industrial text-white/20 leading-none">
            2024
          </div>
          <div className="text-xs font-technical text-white/60 tracking-wider uppercase">
            AEROSPACE EXCELLENCE
          </div>
        </div>
      </div>

      {/* Geometric Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-b from-primary/20 to-transparent clip-polygon-hero" />
    </section>
  );
};

export default Hero;