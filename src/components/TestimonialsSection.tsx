
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "IT Professional",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    stars: 5,
    text: "Working with Sameer has been transformative. His approach is comprehensive and personalized. I've lost 15 kg in 4 months while gaining significant muscle. The customized nutrition plan made all the difference."
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Medical Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    stars: 5,
    text: "As someone with a busy schedule, I thought consistent fitness was impossible. Sameer created a program that fits perfectly into my hectic life as a medical student. His online training is as effective as in-person sessions."
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Amateur Bodybuilder",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    stars: 5,
    text: "I was plateauing in my bodybuilding journey until I started training with Sameer. His competition experience and scientific approach helped me break through barriers. I placed 2nd in my first competition thanks to his guidance."
  },
  {
    id: 4,
    name: "Nisha Kapoor",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    stars: 5,
    text: "After two pregnancies, I was struggling to get back in shape. Sameer's program was challenging but sustainable. Six months later, I'm in better shape than before kids! His positive energy keeps me motivated every session."
  },
];

const TestimonialCard = ({ name, role, image, stars, text }: {
  name: string;
  role: string;
  image: string;
  stars: number;
  text: string;
}) => {
  return (
    <div className="bg-fitness-black p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-white/70 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      
      <blockquote className="text-white/80 italic">"{text}"</blockquote>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding relative bg-gradient-to-b from-fitness-black to-fitness-dark-gray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            CLIENT <span className="text-fitness-red">STORIES</span>
          </h2>
          <p className="text-white/80 text-lg">
            Hear from people who have transformed their bodies and lives through dedicated training.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              stars={testimonial.stars}
              text={testimonial.text}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-fitness-red rounded-lg p-8 inline-block max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-white mb-6">
              Join hundreds of satisfied clients who have achieved their fitness goals with personalized training.
            </p>
            <a href="#contact" className="bg-white text-fitness-red px-6 py-3 font-bold rounded transition-all hover:bg-gray-100 inline-block">
              START YOUR JOURNEY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
