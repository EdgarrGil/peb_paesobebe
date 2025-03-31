"use client";
import { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Updated slides with urban culture focus
  const slides = [
    { 
      id: 1, 
      title: "URBAN CULTURE",
      description: "Showcasing real moments from street to screen",
      image: "https://aldianews.com/sites/default/files/2022-11/foto%20grande%20AL%20DIA_8.png",
      ctaText: "EXPLORE",
      ctaLink: "/videos"
    },
    { 
      id: 2, 
      title: "NIGHTLIFE VIBES",
      description: "Experience the energy of the city after dark",
      image: "https://i.ytimg.com/vi/4vZqO7luLUs/maxresdefault.jpg",
      ctaText: "WATCH NOW",
      ctaLink: "/nightlife"
    },
    { 
      id: 3, 
      title: "STREET STYLE",
      description: "The fashion and lifestyle defining a generation",
      image: "https://res.cloudinary.com/dwzhqvxaz/image/upload/c_pad,w_1500,ar_2,q_auto,f_auto,b_auto/umbraco-prod/j5wlde24/10-12-el-alfa_mobile-hero_1500x750_sfc.jpg",
      ctaText: "GET INSPIRED",
      ctaLink: "/style"
    }
  ];

  useEffect(() => {
    // Auto-advance slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-6">
      <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
        {/* Slides */}
        <div className="h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Background Image with no overlay
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* No gradient overlay for more eye-catching images */}
              </div>
              
              {/* Content with text shadow for readability */}
              {/* <div className="relative h-full flex items-center z-0">
                <div className="container mx-auto px-6 md:px-12 z-10">
                  <div className="max-w-xl backdrop-blur-sm bg-black/20 p-6 rounded-sm">
                    <h2 className="text-5xl md:text-7xl font-black mb-4 text-white uppercase tracking-tight text-shadow-lg">{slide.title}</h2>
                    <p className="text-xl md:text-2xl mb-8 text-white text-shadow-md">{slide.description}</p>
                    <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-8 py-3 rounded-sm font-bold transition-colors shadow-lg uppercase tracking-wide">
                      {slide.ctaText}
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Navigation arrows with darker theme */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-3 rounded-sm shadow-md hover:bg-[var(--primary)] transition z-10"
          onClick={goToPrevSlide}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-3 rounded-sm shadow-md hover:bg-[var(--primary)] transition z-10"
          onClick={goToNextSlide}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Slide indicators with darker theme */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-none transition-colors ${
                index === currentSlide ? 'bg-[var(--primary)]' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider; 