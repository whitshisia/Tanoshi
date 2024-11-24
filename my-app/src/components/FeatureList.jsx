import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 1,
    title: 'family-events',
    description: 'Our family adventure events are designed to bring loved ones together in the great outdoors...',
    link: '/services/family-events',
  },
  {
    id: 2,
    title: 'friends-get-togethers',
    description: 'Nothing beats the thrill of exploring the wild with friends!',
    link: '/services/friends-get-togethers',
  },
  {
    id: 3,
    title: 'group-meetings',
    description: 'Turn your next group meeting into an adventure...',
    link: '/services/group-meetings',
  },
  {
    id: 4,
    title: 'retreats',
    description: 'Step away from the daily grind and immerse yourself in nature...',
    link: '/services/retreats',
  },
  {
    id: 5,
    title: 'nature-race',
    description: 'Get ready to unleash your competitive spirit with our Nature Race events!',
    link: '/services/nature-race',
  },
];

const FeatureList = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const toggleFeature = (id) => {
    setActiveFeature(activeFeature === id ? null : id);
  };

  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">Our Services</h1>

      <div className="flex space-x-6 mb-4">
        {features.map((feature) => (
          <h2
            key={feature.id}
            className={`text-lg bg-green-500 px-4 py-2 cursor-pointer ${
              activeFeature === feature.id ? 'hover:bg-green-600' : ''
            }`}
            onClick={() => toggleFeature(feature.id)}
          >
            {feature.title}
          </h2>
        ))}
      </div>

      {activeFeature !== null && (
        <div className="mt-4">
          <p>{features.find((feature) => feature.id === activeFeature).description}</p>
          <Link
            to={features.find((feature) => feature.id === activeFeature).link}
            className="text-blue-600 hover:underline"
          >
            Read More
          </Link>
        </div>
      )}
    </div>
  );
};

export default FeatureList;
