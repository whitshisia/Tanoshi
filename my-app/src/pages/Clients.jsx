import React from 'react';

const Clients = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">Our Clients</h2>
        <p className="text-lg text-gray-700 mb-4">
          We’ve had the pleasure of working with numerous clients from different industries. Here are just a few of them:
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <li><img src="/path-to-client1-logo.jpg" alt="Client 1" className="w-full h-24 object-cover" /></li>
          <li><img src="/path-to-client2-logo.jpg" alt="Client 2" className="w-full h-24 object-cover" /></li>
          <li><img src="/path-to-client3-logo.jpg" alt="Client 3" className="w-full h-24 object-cover" /></li>
          <li><img src="/path-to-client4-logo.jpg" alt="Client 4" className="w-full h-24 object-cover" /></li>
        </ul>
      </div>
    </section>
  );
};

export default Clients;
