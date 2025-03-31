"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
      <div className="relative w-full overflow-hidden rounded-lg aspect-[16/9] md:aspect-[21/9]">
        {/* Slides */}
        <div className="h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Using Next.js Image with proper aspect ratio */}
              <div className="relative h-full w-full">
                <Image 
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority={index === 0}
                  className="object-cover"
                />
                {/* Optional dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/10 sm:bg-black/20"></div>
              </div>
              
              {/* Content with responsive text sizes */}
              <div className="absolute inset-0 flex items-center z-10">
                <div className="container mx-auto px-4 md:px-12">
                  <div className="max-w-xl sm:backdrop-blur-sm bg-black/20 sm:bg-black/30 p-4 md:p-6 rounded-sm">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 md:mb-4 text-white uppercase tracking-tight">{slide.title}</h2>
                    <p className="text-lg md:text-xl mb-4 md:mb-6 text-white">{slide.description}</p>
                    <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-sm font-bold transition-colors shadow-lg uppercase tracking-wide text-sm md:text-base">
                      {slide.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows - responsively sized */}
        <button 
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 md:p-3 rounded-sm shadow-md hover:bg-[var(--primary)] transition z-10"
          onClick={goToPrevSlide}
        >
          <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button 
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 md:p-3 rounded-sm shadow-md hover:bg-[var(--primary)] transition z-10"
          onClick={goToNextSlide}
        >
          <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Slide indicators - better positioned for mobile */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-none transition-colors ${
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