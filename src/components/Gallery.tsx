import { Card, CardContent } from "@/components/ui/card";
import equipmentImage from "@/assets/equipment-gallery.jpg";

const Gallery = () => {
  const products = [
    {
      title: "Crash Recovery Trolley",
      category: "Ground Equipment",
      color: "bg-pastel-blue"
    },
    {
      title: "Hydraulic System Underbelly Drop Tank",
      category: "Hydraulic Systems",
      color: "bg-pastel-mint"
    },
    {
      title: "UC Lifter for Installation and Removal",
      category: "Lifting Equipment",
      color: "bg-pastel-lavender"
    },
    {
      title: "JFS IDG Lifting Trolley",
      category: "Specialized Tools",
      color: "bg-pastel-peach"
    },
    {
      title: "Aileron Jig Manufacturing",
      category: "Precision Jigs",
      color: "bg-primary/10"
    },
    {
      title: "HTT-40 Components",
      category: "Aircraft Parts",
      color: "bg-gray-100"
    },
    {
      title: "NLG & MLG Systems",
      category: "Landing Gear",
      color: "bg-pastel-blue"
    },
    {
      title: "DFCC Trolley Systems",
      category: "Transport Equipment",
      color: "bg-pastel-mint"
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-gradient-industrial">
      <div className="container mx-auto px-6">
        {/* Cinematic Section Header */}
        <div className="mb-24">
          <div className="max-w-4xl">
            <span className="text-primary font-technical text-sm tracking-wider uppercase opacity-60">
              Our Work
            </span>
            <h2 className="text-cinematic font-industrial text-foreground mt-4 mb-8 leading-none">
              GALLERY
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Showcasing our precision-engineered aerospace products and ground support equipment, 
              manufactured to the highest industry standards.
            </p>
          </div>
        </div>

        {/* Featured Image - Cinematic Style */}
        <div className="mb-24 relative h-[70vh] overflow-hidden">
          <img 
            src={equipmentImage} 
            alt="JMJ Engineering Works - Equipment Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-12 left-12 text-white max-w-2xl">
            <h3 className="text-dramatic font-industrial mb-4 text-primary">PRECISION</h3>
            <h3 className="text-dramatic font-industrial mb-6 leading-none">MANUFACTURING</h3>
            <p className="text-lg font-technical opacity-80 tracking-wide">
              Advanced aerospace equipment and ground support systems
            </p>
          </div>
          <div className="absolute top-12 right-12 text-right text-white">
            <div className="text-6xl font-industrial opacity-20">2024</div>
            <div className="text-xs font-technical opacity-60 tracking-wider">PORTFOLIO</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className={`${product.color} border-0 shadow-industrial hover:shadow-elevated transition-all duration-500 clip-polygon-card group cursor-pointer`}
            >
              <CardContent className="p-8">
                <div className="mb-4">
                  <span className="text-xs font-technical text-muted-foreground uppercase tracking-wider opacity-60">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-industrial text-foreground group-hover:text-primary transition-colors mb-6">
                  {product.title}
                </h3>
                <div className="w-8 h-1 bg-primary group-hover:w-full transition-all duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities Banner - Cinematic Style */}
        <div className="bg-black text-white p-16 clip-polygon-section">
          <div className="max-w-6xl">
            <h3 className="text-dramatic font-industrial mb-12 text-center text-primary">MANUFACTURING CAPABILITIES</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-6xl font-industrial mb-4 text-primary">LASER</div>
                <div className="text-sm font-technical opacity-80 tracking-wider">TRACKER CALIBRATION</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-industrial mb-4 text-primary">PRECISION</div>
                <div className="text-sm font-technical opacity-80 tracking-wider">CNC MACHINING</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-industrial mb-4 text-primary">QUALITY</div>
                <div className="text-sm font-technical opacity-80 tracking-wider">ISO 9001:2015</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;