import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-technical text-sm tracking-wider uppercase">
              Company Profile
            </span>
            <h2 className="text-4xl md:text-5xl font-industrial text-foreground mt-4 mb-8">
              BIRTH OF JMJ
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Incorporated in 2011</strong> to engage in the business of 
                manufacturing aerospace and aircraft related products under the sole proprietorship of{" "}
                <strong className="text-primary">Mrs. Mary Dominica Francis</strong> and technical guidance from{" "}
                <strong className="text-primary">Mr. J. Joseph Francis</strong>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With over a decade of excellence in aerospace manufacturing, JMJ Engineering Works has established 
                itself as a trusted partner for precision engineering solutions in the aerospace industry.
              </p>
            </div>

            {/* ISO Certification */}
            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-technical text-xs font-bold">ISO</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-industrial text-foreground">
                      ISO 9001:2015 CERTIFIED
                    </h3>
                    <p className="text-muted-foreground">
                      Quality Management System Certified
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <Card className="bg-pastel-blue border-0 shadow-industrial">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-industrial text-pastel-blue-foreground mb-2">13+</div>
                <div className="text-pastel-blue-foreground font-medium">Years of Excellence</div>
              </CardContent>
            </Card>

            <Card className="bg-pastel-mint border-0 shadow-industrial">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-industrial text-pastel-mint-foreground mb-2">100+</div>
                <div className="text-pastel-mint-foreground font-medium">Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="bg-pastel-lavender border-0 shadow-industrial">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-industrial text-pastel-lavender-foreground mb-2">7+</div>
                <div className="text-pastel-lavender-foreground font-medium">Major Clients</div>
              </CardContent>
            </Card>

            <Card className="bg-primary border-0 shadow-industrial">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-industrial text-primary-foreground mb-2">100%</div>
                <div className="text-primary-foreground font-medium">Quality Assurance</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-industrial text-foreground mb-8">LEADERSHIP</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-industrial border-0 shadow-industrial">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-industrial text-foreground mb-2">Mrs. Mary Dominica Francis</h4>
                <p className="text-muted-foreground">Sole Proprietor</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-industrial border-0 shadow-industrial">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-industrial text-foreground mb-2">Mr. J. Joseph Francis</h4>
                <p className="text-muted-foreground">Technical Guidance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;