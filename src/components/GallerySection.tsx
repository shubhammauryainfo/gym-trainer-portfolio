
import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "HSF Competition Winner - Delhi 2024",
    category: "competitions"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "One-on-one training session",
    category: "training"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1616279969098-e8cc696ecae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Client transformation - 12 weeks",
    category: "transformations"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "High-intensity group training",
    category: "training"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Fitness Seminar - Mumbai",
    category: "events"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Client transformation - 6 months",
    category: "transformations"
  },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="section-padding bg-fitness-dark-gray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-6">
            TRAINING <span className="text-fitness-red">GALLERY</span>
          </h2>
          <p className="text-white/80 text-lg">
            Visual highlights from competitions, training sessions, client transformations, and fitness events.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`px-4 py-2 rounded-full font-medium transition-colors ${activeFilter === 'all' ? 'bg-fitness-red text-white' : 'bg-fitness-black/50 text-white hover:bg-fitness-black'}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-full font-medium transition-colors ${activeFilter === 'competitions' ? 'bg-fitness-red text-white' : 'bg-fitness-black/50 text-white hover:bg-fitness-black'}`}
            onClick={() => setActiveFilter('competitions')}
          >
            Competitions
          </button>
          <button 
            className={`px-4 py-2 rounded-full font-medium transition-colors ${activeFilter === 'training' ? 'bg-fitness-red text-white' : 'bg-fitness-black/50 text-white hover:bg-fitness-black'}`}
            onClick={() => setActiveFilter('training')}
          >
            Training
          </button>
          <button 
            className={`px-4 py-2 rounded-full font-medium transition-colors ${activeFilter === 'transformations' ? 'bg-fitness-red text-white' : 'bg-fitness-black/50 text-white hover:bg-fitness-black'}`}
            onClick={() => setActiveFilter('transformations')}
          >
            Transformations
          </button>
          <button 
            className={`px-4 py-2 rounded-full font-medium transition-colors ${activeFilter === 'events' ? 'bg-fitness-red text-white' : 'bg-fitness-black/50 text-white hover:bg-fitness-black'}`}
            onClick={() => setActiveFilter('events')}
          >
            Events
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="group relative h-64 md:h-72 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-medium text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-6 right-6 text-white hover:text-fitness-red"
              onClick={closeModal}
            >
              <X size={32} />
            </button>
            
            {galleryImages.find(img => img.id === selectedImage) && (
              <div className="max-w-4xl max-h-[90vh]">
                <img 
                  src={galleryImages.find(img => img.id === selectedImage)?.src} 
                  alt={galleryImages.find(img => img.id === selectedImage)?.caption}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                <p className="text-white text-center mt-4 text-lg">
                  {galleryImages.find(img => img.id === selectedImage)?.caption}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
