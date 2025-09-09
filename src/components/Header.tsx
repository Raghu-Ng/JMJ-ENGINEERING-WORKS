import { useState } from "react";
import { Button } from "@/components/ui/button";
import jmjLogo from "@/assets/jmj-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Cinematic Navigation - Top Corners */}
      <div className="fixed top-6 left-6 z-50">
        <div className="flex items-center space-x-3">
          <img 
            src={jmjLogo} 
            alt="JMJ Engineering Works Logo" 
            className="h-8 w-auto"
          />
          <div>
            <h1 className="text-lg font-industrial text-primary">JMJ</h1>
            <p className="text-xs font-technical text-muted-foreground tracking-wider">ENGINEERING</p>
          </div>
        </div>
      </div>

      <div className="fixed top-6 right-6 z-50">
        <Button variant="outline" size="sm" className="font-technical tracking-wider border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          GET QUOTE
        </Button>
      </div>

      {/* Desktop Navigation - Right Side */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-6 text-right">
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-technical text-xs tracking-wider uppercase opacity-80 hover:opacity-100">
            SERVICES
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-technical text-xs tracking-wider uppercase opacity-80 hover:opacity-100">
            ABOUT
          </a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-technical text-xs tracking-wider uppercase opacity-80 hover:opacity-100">
            GALLERY
          </a>
          <a href="#clients" className="text-foreground hover:text-primary transition-colors font-technical text-xs tracking-wider uppercase opacity-80 hover:opacity-100">
            CLIENTS
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-technical text-xs tracking-wider uppercase opacity-80 hover:opacity-100">
            CONTACT
          </a>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-20 z-50 lg:hidden p-2"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm lg:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-industrial text-foreground hover:text-primary transition-colors">
              SERVICES
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-industrial text-foreground hover:text-primary transition-colors">
              ABOUT
            </a>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-2xl font-industrial text-foreground hover:text-primary transition-colors">
              GALLERY
            </a>
            <a href="#clients" onClick={() => setIsMenuOpen(false)} className="text-2xl font-industrial text-foreground hover:text-primary transition-colors">
              CLIENTS
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-industrial text-foreground hover:text-primary transition-colors">
              CONTACT
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;