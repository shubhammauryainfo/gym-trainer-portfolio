
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-fitness-black">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            GET IN <span className="text-fitness-red">TOUCH</span>
          </h2>
          <p className="text-white/80 text-lg">
            Ready to transform your fitness journey? Contact me for personalized training solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-fitness-dark-gray p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            {formStatus === 'success' && (
              <div className="bg-green-500/20 border border-green-500 text-green-100 px-4 py-3 rounded mb-6 flex items-center">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Your message has been sent! I'll get back to you soon.</span>
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-500 text-red-100 px-4 py-3 rounded mb-6">
                <span>There was an error sending your message. Please try again.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-fitness-black border border-gray-700 rounded text-white focus:border-fitness-red focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-fitness-black border border-gray-700 rounded text-white focus:border-fitness-red focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-fitness-black border border-gray-700 rounded text-white focus:border-fitness-red focus:outline-none"
                    placeholder="Your phone (optional)"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white mb-2">Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-fitness-black border border-gray-700 rounded text-white focus:border-fitness-red focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="online-coaching">Online Coaching</option>
                    <option value="group-training">Group Training</option>
                    <option value="custom">Custom Program</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-fitness-black border border-gray-700 rounded text-white focus:border-fitness-red focus:outline-none"
                  placeholder="Tell me about your fitness goals..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary flex items-center justify-center w-full"
              >
                <span>SEND MESSAGE</span>
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-fitness-dark-gray p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-fitness-red/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={20} className="text-fitness-red" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-white/80">+91 98765 43210</p>
                    <p className="text-white/60 text-sm">Available 9AM-7PM IST, Monday-Saturday</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-fitness-red/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={20} className="text-fitness-red" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-white/80">sameer@fitnesschamp.com</p>
                    <p className="text-white/60 text-sm">For inquiries and training requests</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-fitness-red/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={20} className="text-fitness-red" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Training Location</h4>
                    <p className="text-white/80">FitZone Gym, 123 Fitness Avenue</p>
                    <p className="text-white/80">Delhi, India 110001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-fitness-red/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock size={20} className="text-fitness-red" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Training Hours</h4>
                    <p className="text-white/80">Monday-Friday: 5:00 AM - 9:00 PM</p>
                    <p className="text-white/80">Saturday: 6:00 AM - 6:00 PM</p>
                    <p className="text-white/80">Sunday: 8:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-fitness-red p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Follow on Social Media</h3>
              <p className="mb-6">Stay updated with fitness tips, transformation stories, and training insights.</p>
              
              <div className="flex space-x-4">
                <a href="#" className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a href="#" className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                
                <a href="#" className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a href="#" className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
