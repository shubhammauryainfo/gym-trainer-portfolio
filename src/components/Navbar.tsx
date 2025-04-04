
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-fitness-black/95 py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-2xl font-display tracking-wider uppercase">
            <span className="text-white">SAMEER</span>
            <span className="text-fitness-red">SHAIKH</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-fitness-red font-medium transition-colors">ABOUT</a>
          <a href="#services" className="text-white hover:text-fitness-red font-medium transition-colors">SERVICES</a>
          <a href="#gallery" className="text-white hover:text-fitness-red font-medium transition-colors">GALLERY</a>
          <a href="#testimonials" className="text-white hover:text-fitness-red font-medium transition-colors">TESTIMONIALS</a>
          <a href="#contact" className="btn-primary">GET IN TOUCH</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-fitness-dark-gray absolute top-full left-0 w-full">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-white py-2 hover:text-fitness-red font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </a>
            <a 
              href="#services" 
              className="text-white py-2 hover:text-fitness-red font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              SERVICES
            </a>
            <a 
              href="#gallery" 
              className="text-white py-2 hover:text-fitness-red font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              GALLERY
            </a>
            <a 
              href="#testimonials" 
              className="text-white py-2 hover:text-fitness-red font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              TESTIMONIALS
            </a>
            <a 
              href="#contact" 
              className="btn-primary inline-block text-center w-full"
              onClick={() => setIsOpen(false)}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
