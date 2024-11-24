import React, { useState } from 'react';

const teamMembers = [
    { id: 1, name: 'John Doe', position: 'CEO', img: '/path-to-john-doe.jpg' },
    { id: 2, name: 'Jane Smith', position: 'Event Manager', img: '/path-to-jane-smith.jpg' },
    { id: 3, name: 'Mike Johnson', position: 'Marketing Head', img: '/path-to-mike-johnson.jpg' },
    // Add more team members as needed
  ];
  
  const TeamSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = teamMembers.length;
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
  
          <div className="relative">
            {/* Team Members */}
            <div className="flex justify-center items-center">
              <div className="text-center">
                <img
                  src={teamMembers[currentSlide].img}
                  alt={teamMembers[currentSlide].name}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{teamMembers[currentSlide].name}</h3>
                <p className="text-gray-500">{teamMembers[currentSlide].position}</p>
              </div>
            </div>
  
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevSlide}
                className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 focus:outline-none"
              >
                Previous
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 focus:outline-none"
              >
                Next
              </button>
            </div>
  
            {/* Dots Navigation */}
            <div className="flex justify-center mt-4">
              {teamMembers.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'}`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TeamSlider;
  