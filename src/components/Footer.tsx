import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import jmjLogo from "@/assets/jmj-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Contact Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-industrial text-primary mb-8">GET IN TOUCH</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ready to discuss your aerospace manufacturing needs? Our team of experts is here to provide 
                precision engineering solutions tailored to your requirements.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-industrial text-white mb-1">Location</h4>
                    <p className="text-gray-300">Bangalore, Karnataka, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-industrial text-white mb-1">Email</h4>
                    <p className="text-gray-300">info@jmjengineeringworks.in</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-industrial text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+91 XXX XXX XXXX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-gray-800 border-gray-700 shadow-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-industrial text-white mb-6">Request Quote</h3>
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-4 bg-gray-700 text-white border border-gray-600 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-4 bg-gray-700 text-white border border-gray-600 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      className="w-full p-4 bg-gray-700 text-white border border-gray-600 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={4} 
                      placeholder="Project Requirements" 
                      className="w-full p-4 bg-gray-700 text-white border border-gray-600 focus:border-primary focus:outline-none resize-none"
                    />
                  </div>
                  <Button className="w-full shadow-sharp">
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and Company Info */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src={jmjLogo} 
                alt="JMJ Engineering Works"
                className="h-10 w-auto"
              />
              <div>
                <div className="font-industrial text-white text-sm">JMJ ENGINEERING WORKS</div>
                <div className="text-xs text-gray-400">ISO 9001:2015 Certified</div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 JMJ Engineering Works. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Precision Aerospace Manufacturing Since 2011
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;