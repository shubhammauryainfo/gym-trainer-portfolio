
import React from 'react';
import { Users, Monitor, UserPlus } from 'lucide-react';

const ServiceCard = ({ title, description, icon, price, features, isPopular }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  features: string[];
  isPopular?: boolean;
}) => {
  return (
    <div className={`relative bg-fitness-dark-gray p-6 rounded-lg transition-transform hover:-translate-y-2 ${isPopular ? 'border-2 border-fitness-red' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 right-4 bg-fitness-red text-white px-4 py-1 rounded-full text-sm font-bold">
          MOST POPULAR
        </div>
      )}
      
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-fitness-red/20 flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <p className="text-white/70 mb-6">{description}</p>
      
      <div className="mb-6">
        <span className="text-3xl font-bold text-white">{price}</span>
        {title !== "Group Training" ? <span className="text-white/60 ml-2">/month</span> : <span className="text-white/60 ml-2">/person</span>}
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-6 w-6 text-fitness-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white/80">{feature}</span>
          </li>
        ))}
      </ul>
      
      <a href="#contact" className={`block text-center py-3 px-6 rounded font-semibold transition-colors ${isPopular ? 'bg-fitness-red text-white hover:bg-red-700' : 'bg-white/10 text-white hover:bg-white/20'}`}>
        GET STARTED
      </a>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-fitness-black">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1637666062717-1c6bcfa4e4b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Background Pattern" 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            TRAINING <span className="text-fitness-red">SERVICES</span>
          </h2>
          <p className="text-white/80 text-lg">
            Professional training programs designed to help you achieve your fitness goals, whether you're a beginner or an experienced athlete.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Personal Training"
            description="One-on-one sessions focused entirely on your unique fitness goals and needs."
            icon={<UserPlus size={24} className="text-fitness-red" />}
            price="₹12,000"
            features={[
              "Customized workout programs",
              "Nutrition guidance & meal planning",
              "12 sessions per month (3/week)",
              "Progress tracking & adjustments",
              "24/7 WhatsApp support",
              "Access to private gym facilities"
            ]}
            isPopular={true}
          />
          
          <ServiceCard
            title="Online Coaching"
            description="Remote coaching with personalized plans you can follow from anywhere."
            icon={<Monitor size={24} className="text-fitness-red" />}
            price="₹5,000"
            features={[
              "Custom workout plan with videos",
              "Monthly program updates",
              "Detailed nutrition guidelines",
              "Weekly check-ins via video call",
              "Form feedback via recorded videos",
              "Progress tracking app access"
            ]}
          />
          
          <ServiceCard
            title="Group Training"
            description="High-energy small group sessions (3-5 people) for motivation and value."
            icon={<Users size={24} className="text-fitness-red" />}
            price="₹3,000"
            features={[
              "8 sessions per month (2/week)",
              "Varied, challenging workouts",
              "Team accountability & support",
              "Basic nutrition guidance",
              "Fitness community access",
              "Monthly fitness assessments"
            ]}
          />
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-fitness-dark-gray to-fitness-black p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Need a Custom Training Solution?</h3>
              <p className="text-white/80 mb-6">
                Whether you're preparing for a competition, recovering from an injury, or have specific fitness requirements, I offer bespoke training programs to match your exact needs.
              </p>
              <a href="#contact" className="btn-primary inline-block">CONTACT FOR DETAILS</a>
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Custom Training" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
