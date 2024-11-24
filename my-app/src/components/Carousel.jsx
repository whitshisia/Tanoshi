import React, { useState, useEffect } from 'react';

const images = [
  { 
    src: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=700&q=80', 
    alt: 'Service 1', 
    title: 'Family Events', 
    description: 'Bringing families together for memorable experiences.' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=700&q=80', 
    alt: 'Service 2', 
    title: 'Corporate Retreats', 
    description: 'Enhance team spirit with engaging corporate retreats.' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=700&q=80', 
    alt: 'Service 3', 
    title: 'Nature Excursions', 
    description: 'Adventure into the wild with our nature excursions.' 
  },
  // Add more slides as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const delay = 3000; // 3 seconds delay for autoplay

  // Handle autoplay
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        goToNextSlide();
      }, delay);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPlaying]);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Manually go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-64 sm:h-96 overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 sm:h-96 object-cover"
            />

            {/* Title and Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 sm:px-8">
              <h2 className="text-white text-xl sm:text-3xl font-bold">{image.title}</h2>
              <p className="text-white mt-2 text-sm sm:text-lg">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        &lt;
      </button>

      {/* Next Button */}
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
      >
        &gt;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
