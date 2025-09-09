import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Jig Manufacturing & Calibration",
      description: "Precision manufacturing and calibration of aerospace jigs using advanced laser tracker technology for maximum accuracy.",
      color: "bg-pastel-blue",
      textColor: "text-pastel-blue-foreground"
    },
    {
      title: "Concept Design & Engineering",
      description: "Expert design services from concept to completion, specialized in aerospace and aircraft component engineering solutions.",
      color: "bg-pastel-mint",
      textColor: "text-pastel-mint-foreground"
    },
    {
      title: "Precision Fabrications",
      description: "Custom fabrication services including working stands and specialized fixtures for aerospace manufacturing processes.",
      color: "bg-pastel-lavender",
      textColor: "text-pastel-lavender-foreground"
    },
    {
      title: "Aircraft Ground Equipment",
      description: "Complete range of ground support equipment including hydraulic systems, lifting trolleys, and recovery equipment.",
      color: "bg-pastel-peach",
      textColor: "text-pastel-peach-foreground"
    },
    {
      title: "Component Manufacturing",
      description: "High-precision manufacturing of aircraft components and assemblies meeting strict aerospace industry standards.",
      color: "bg-primary/10",
      textColor: "text-primary"
    },
    {
      title: "Jig Setting Services",
      description: "Professional jig setting and alignment services ensuring precise manufacturing and assembly operations.",
      color: "bg-gray-100",
      textColor: "text-gray-700"
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-industrial">
      <div className="container mx-auto px-6">
        {/* Cinematic Section Header */}
        <div className="mb-24">
          <div className="max-w-4xl">
            <span className="text-primary font-technical text-sm tracking-wider uppercase opacity-60">
              Our Expertise
            </span>
            <h2 className="text-cinematic font-industrial text-foreground mt-4 mb-8 leading-none">
              SERVICES
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Specialized in manufacturing and calibration of jigs using laser tracker, designing on concepts, 
              fabrications, aircraft ground equipment, and manufacturing of aircraft components.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${service.color} border-0 shadow-industrial hover:shadow-elevated transition-all duration-500 clip-polygon-card group cursor-pointer`}
            >
              <CardHeader className="pb-4">
                <CardTitle className={`text-xl font-industrial ${service.textColor} group-hover:text-primary transition-colors`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`${service.textColor} leading-relaxed text-sm`}>
                  {service.description}
                </p>
                <div className="mt-6 w-8 h-1 bg-primary group-hover:w-full transition-all duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialization Banner */}
        <div className="bg-black text-white p-12 clip-polygon-section">
          <div className="max-w-4xl">
            <h3 className="text-dramatic font-industrial mb-6 text-primary">SPECIALIZED EXPERTISE</h3>
            <p className="text-lg font-technical tracking-wide leading-relaxed opacity-80">
              MANUFACTURING AND CALIBRATION OF JIGS USING LASER TRACKER, DESIGNING ON CONCEPTS, 
              FABRICATIONS (WORKING STAND), AIRCRAFT GROUND EQUIPMENTS, JIG SETTING AND MANUFACTURING OF AIRCRAFT COMPONENTS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;