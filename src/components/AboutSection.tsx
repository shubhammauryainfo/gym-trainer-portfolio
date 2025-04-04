
import React from 'react';
import { Award, Target, Dumbbell } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-fitness-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Sameer Shaikh" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fitness-black to-transparent"></div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-fitness-dark-gray rounded-lg">
              <p className="text-fitness-red font-bold mb-2">VERIFIED ACHIEVEMENTS</p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-fitness-red" />
                  <span>Winner, HSF Expo Delhi 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-fitness-red" />
                  <span>Certified Personal Trainer (CPT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-fitness-red" />
                  <span>Sports Nutrition Specialist</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Side */}
          <div>
            <h2 className="heading-lg mb-6">
              ABOUT <span className="text-fitness-red">SAMEER</span>
            </h2>
            
            <div className="space-y-6 text-white/80">
              <p>
                For over a decade, I've dedicated my life to fitness and athletic performance, transforming not just my own physique, but helping hundreds of clients reach their full potential.
              </p>
              
              <p>
                My fitness journey began as a skinny college student determined to build strength. Through consistent training and strategic nutrition, I developed both my body and a profound understanding of human physiology. This passion led me to compete—and win—at the prestigious Himalayan Stallion Sports Festival (HSF) Expo in Delhi.
              </p>
              
              <p>
                Today, I combine scientific principles with practical experience to create personalized programs that deliver real, sustainable results for clients of all fitness levels.
              </p>

              <p className="text-white font-semibold text-lg">
                "Success in fitness is no accident. It's careful programming, dedicated work, and learning to push past what you thought possible."
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-fitness-dark-gray rounded-lg">
                <div className="h-16 w-16 rounded-full bg-fitness-red/20 flex items-center justify-center mb-4">
                  <Target size={32} className="text-fitness-red" />
                </div>
                <h3 className="font-bold text-xl mb-2">Personalized</h3>
                <p className="text-white/70">Custom programs tailored to your unique needs</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-fitness-dark-gray rounded-lg">
                <div className="h-16 w-16 rounded-full bg-fitness-red/20 flex items-center justify-center mb-4">
                  <Dumbbell size={32} className="text-fitness-red" />
                </div>
                <h3 className="font-bold text-xl mb-2">Effective</h3>
                <p className="text-white/70">Science-backed methods with proven results</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-fitness-dark-gray rounded-lg">
                <div className="h-16 w-16 rounded-full bg-fitness-red/20 flex items-center justify-center mb-4">
                  <Award size={32} className="text-fitness-red" />
                </div>
                <h3 className="font-bold text-xl mb-2">Champion</h3>
                <p className="text-white/70">Training that creates winners in fitness and life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
