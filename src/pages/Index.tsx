
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
