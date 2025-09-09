import { Card, CardContent } from "@/components/ui/card";

const Clients = () => {
  const clients = [
    {
      name: "HAL LCA-LSP",
      location: "Bangalore",
      type: "Light Combat Aircraft",
      color: "bg-pastel-blue"
    },
    {
      name: "ARDC-HAL",
      location: "Bangalore", 
      type: "R&D Division",
      color: "bg-pastel-mint"
    },
    {
      name: "HAL Aircraft Division",
      location: "Bangalore",
      type: "Manufacturing",
      color: "bg-pastel-lavender"
    },
    {
      name: "BEML Aerospace",
      location: "Mysore",
      type: "Aerospace Systems",
      color: "bg-pastel-peach"
    },
    {
      name: "BEML Aerospace",
      location: "Bangalore",
      type: "Manufacturing Hub",
      color: "bg-primary/10"
    },
    {
      name: "Taneja Aerospace (TAAL)",
      location: "Bangalore",
      type: "Aviation Services",
      color: "bg-gray-100"
    },
    {
      name: "Nebula 3D Services",
      location: "Private Ltd",
      type: "3D Solutions",
      color: "bg-pastel-blue"
    }
  ];

  return (
    <section id="clients" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-technical text-sm tracking-wider uppercase">
            Trusted Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-industrial text-foreground mt-4 mb-6">
            OUR ESTEEMED CLIENTS
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proud to serve India's leading aerospace organizations and defense establishments 
            with precision engineering solutions and reliable service.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className={`${client.color} border-0 shadow-industrial hover:shadow-elevated transition-all duration-300 clip-polygon-card group`}
            >
              <CardContent className="p-8">
                <div className="mb-4">
                  <span className="text-xs font-technical text-muted-foreground uppercase tracking-wider">
                    {client.type}
                  </span>
                </div>
                <h3 className="text-xl font-industrial text-foreground mb-2 group-hover:text-primary transition-colors">
                  {client.name}
                </h3>
                <p className="text-muted-foreground font-medium">
                  {client.location}
                </p>
                <div className="mt-6 w-16 h-1 bg-primary group-hover:w-full transition-all duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Statement */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-primary border-0 shadow-elevated">
            <CardContent className="p-12">
              <h3 className="text-3xl font-industrial text-primary-foreground mb-6">
                STRATEGIC PARTNERSHIPS
              </h3>
              <p className="text-lg text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                Our long-standing relationships with India's premier aerospace organizations reflect our commitment 
                to excellence, reliability, and innovation. We take pride in contributing to India's aerospace 
                and defense capabilities through precision engineering and manufacturing solutions.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-industrial text-primary-foreground mb-2">13+</div>
                  <div className="text-primary-foreground/80">Years Partnership</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-industrial text-primary-foreground mb-2">7+</div>
                  <div className="text-primary-foreground/80">Major Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-industrial text-primary-foreground mb-2">100%</div>
                  <div className="text-primary-foreground/80">Client Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Clients;