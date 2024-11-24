// src/components/ServiceDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

// Sample data for service details
const serviceDetails = {
  'family-events': {
    title: 'Family Events',
    description: 'Our family adventure events are designed to bring loved ones together in the great outdoors. From treasure hunts and nature trails to team-building activities and camping nights, we create moments for families to bond, laugh, and build memories. Whether it’s a quiet family hike or an adrenaline-filled obstacle course, there is something for all ages to enjoy.',
    imageUrl: 'path-to-family-events-image.jpg', // Replace with actual image path
  },
  'friends-get-togethers': {
    title: 'Friends Get-Togethers',
    description: 'Nothing beats the thrill of exploring the wild with friends! Our friends get-togethers are crafted to maximize fun and excitement with activities like rock climbing, zip-lining, and kayaking. It’s the perfect chance to reconnect, challenge each other, and strengthen your friendships through unforgettable adventures.',
    imageUrl: 'path-to-friends-get-togethers-image.jpg', // Replace with actual image path
  },
  'group-meetings': {
    title: 'Group Meetings',
    description: 'Turn your next group meeting into an adventure! Our team-building programs foster creativity, collaboration, and motivation in natural settings. Whether it’s for a business retreat, school outing, or club event, we provide an inspiring environment to enhance group dynamics through outdoor challenges, guided hikes, and problem-solving games.',
    imageUrl: 'path-to-group-meetings-image.jpg', // Replace with actual image path
  },
  'retreats': {
    title: 'Retreats',
    description: 'Step away from the daily grind and immerse yourself in nature with our peaceful retreats. Ideal for mindfulness and relaxation, our retreats offer a mix of yoga, meditation, and guided nature walks, helping you rejuvenate and refocus. It’s the perfect escape for anyone seeking tranquility, balance, and inner peace in the natural world.',
    imageUrl: 'path-to-retreats-image.jpg', // Replace with actual image path
  },
  'nature-race': {
    title: 'Nature Race',
    description: 'Get ready to unleash your competitive spirit with our high-energy Nature Race events! We blend natural terrains with obstacle courses, trail running, and team challenges to create an action-packed day. It’s an exhilarating experience for fitness enthusiasts, adventure seekers, and teams looking to push their limits in a friendly yet challenging environment.',
    imageUrl: 'path-to-nature-race-image.jpg', // Replace with actual image path
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <p>Service not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <img src={service.imageUrl} alt={service.title} className="w-full h-64 object-cover rounded-md mb-4" />
      <p className="text-lg text-gray-700">{service.description}</p>
    </div>
  );
};

export default ServiceDetail;
