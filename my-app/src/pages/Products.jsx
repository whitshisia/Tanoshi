// src/components/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Family Events',
    description: 'Create unforgettable memories with our family adventure events in the great outdoors.',
    link: '/services/family-events',
    imageUrl: 'path-to-family-events-image.jpg', // Replace with actual image path
  },
  {
    id: 2,
    title: 'Friends Get-Togethers',
    description: 'Nothing beats the thrill of exploring the wild with friends! Join us for unforgettable adventures.',
    link: '/services/friends-get-togethers',
    imageUrl: 'path-to-friends-get-togethers-image.jpg', // Replace with actual image path
  },
  {
    id: 3,
    title: 'Group Meetings',
    description: 'Transform your next group meeting into an adventure with our unique experiences.',
    link: '/services/group-meetings',
    imageUrl: 'path-to-group-meetings-image.jpg', // Replace with actual image path
  },
  {
    id: 4,
    title: 'Retreats',
    description: 'Escape the daily grind and immerse yourself in nature with our tranquil retreats.',
    link: '/services/retreats',
    imageUrl: 'path-to-retreats-image.jpg', // Replace with actual image path
  },
  {
    id: 5,
    title: 'Nature Race',
    description: 'Unleash your competitive spirit with our high-energy Nature Race events!',
    link: '/services/nature-race',
    imageUrl: 'path-to-nature-race-image.jpg', // Replace with actual image path
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={service.link} className="text-blue-600 hover:underline">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
