import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Introduction */}
        <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
        <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl mx-auto">
          The Japanese word <span className="font-semibold text-indigo-600">tanoshii</span> (楽しい) means pleasant, delightful, enjoyable, or fun. At Tanoshi Adventures, we bring this spirit to life by crafting memorable experiences for all occasions. 
        </p>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          From family reunions to company retreats, we’re dedicated to planning and executing every detail so you can relax and enjoy. Let us take care of your next adventure!
        </p>

        {/* Key Services Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Our Key Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-2">Family Gatherings</h4>
              <p className="text-gray-600">Create lasting memories with loved ones in serene natural settings or exciting themed events.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-2">Corporate Retreats</h4>
              <p className="text-gray-600">Boost morale and foster team spirit through thoughtfully designed retreats and team-building exercises.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold mb-2">Nature Excursions</h4>
              <p className="text-gray-600">Reconnect with nature through guided hikes, adventure sports, and peaceful camping experiences.</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-6">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"Our family gathering was everything we hoped for and more! The Tanoshi team handled all the details so we could focus on having a great time together."</p>
              <p className="font-semibold text-indigo-600">– Sarah J.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"The corporate retreat was a game-changer for our team. The outdoor activities were well-organized and really brought us closer as a group."</p>
              <p className="font-semibold text-indigo-600">– Mark W.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for Your Next Adventure?</h3>
          <p className="text-lg text-gray-700 mb-6">Let Tanoshi Adventures bring your vision to life. Contact us today to start planning an experience you’ll never forget.</p>
          <a href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
