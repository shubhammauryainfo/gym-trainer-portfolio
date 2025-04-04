
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-fitness-black"></div>
      
      <div className="container-custom z-10 text-center mt-16">
        <div data-aos="fade-down" data-aos-delay="200">
          <p className="text-fitness-red font-medium mb-4 text-lg md:text-xl uppercase tracking-widest">
            Certified Personal Trainer & HSF Champion
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="400">
          <h1 className="heading-xl mb-6">
            TRAIN WITH <span className="text-fitness-red">PURPOSE</span>.<br />
            WIN WITH <span className="text-fitness-red">PASSION</span>.
          </h1>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="600">
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Elevate your fitness journey with personalized training programs designed to transform your body, mind, and performance.
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="800">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services" className="btn-primary">
              EXPLORE SERVICES
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-6 py-3 font-bold rounded transition-all hover:bg-white/10 transform hover:-translate-y-1">
              BOOK A CONSULTATION
            </a>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce cursor-pointer z-10"
        onClick={scrollToNext}
        data-aos="fade-up" 
        data-aos-delay="1000"
      >
        <ChevronDown size={36} className="text-fitness-red" />
      </div>
    </section>
  );
};

export default HeroSection;
