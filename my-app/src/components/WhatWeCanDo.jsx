import React, { useState } from 'react';

const whatWeCanDo = [
  { id: 1, title: 'Event Management', description: 'We manage and execute large-scale events tailored to your needs.' },
  { id: 2, title: 'Custom Retreats', description: 'Customized retreats that provide a relaxing and rejuvenating experience.' },
  { id: 3, title: 'Team Building', description: 'Fun and effective team-building activities for all group sizes.' },
];

const WhatWeCanDo = () => {
  const [openService, setOpenService] = useState(null);

  const toggleService = (id) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWpTXhwyfRtBdJyBUOdHtDmjMs1sO4prHRg&s" alt="What We Can Do" className="w-full h-80 object-cover rounded-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">What We Can Do for You</h2>
          <div>
            {whatWeCanDo.map(service => (
              <div key={service.id} className="mb-4">
                <button
                  onClick={() => toggleService(service.id)}
                  className="flex justify-between items-center w-full bg-gray-200 px-4 py-2 rounded-lg focus:outline-none"
                >
                  <span className="text-lg font-medium">{service.title}</span>
                  <span className="text-xl">{openService === service.id ? '-' : '+'}</span>
                </button>
                {openService === service.id && (
                  <div className="mt-2 px-4 py-2 bg-gray-100 rounded-lg">
                    <p>{service.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanDo;
