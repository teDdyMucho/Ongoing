import React, { useState, useEffect } from 'react';
import GetStartedModal from './GetStartedModal';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Transform Your Business',
    description: 'Empower your team with cutting-edge workforce solutions that blend human expertise with AI innovation.',
  },
  {
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    title: 'Human Excellence',
    description: 'Experience the power of dedicated professionals who understand your unique business needs.',
  },
  {
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    title: 'AI Innovation',
    description: 'Leverage advanced AI technology for 24/7 automated solutions that scale with your business.',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden min-h-screen pt-16">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-2000 scale-105"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center min-h-[calc(100vh-4rem)] py-12">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 absolute transform ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-white">
                  <span className="block">{slide.title}</span>
                  <span className="block text-green-400 mt-2">with Smart Solutions</span>
                </h1>
                <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-200 sm:mt-5 sm:max-w-xl">
                  {slide.description}
                </p>
                <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 mb-4 sm:mb-0"
                  >
                    Get Started
                  </button>
                  <a
                    href="#learn-more"
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-green-500 w-8' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}