import React from 'react';

const services = [
  { id: 1, title: 'Family Events', img: 'https://media.istockphoto.com/id/1159094800/photo/mother-father-children-son-and-daughter-on-sunset.jpg?s=612x612&w=0&k=20&c=D7jhSvfz3XbqqI4xBcAv-JeXwVbzg0tgBUHrwKfWRFc=', description: 'Organize memorable family events with us!' },
  { id: 2, title: 'Friends Get Togethers', img: 'https://media.istockphoto.com/id/1371940128/photo/multiracial-friends-taking-big-group-selfie-shot-smiling-at-camera-laughing-young-people.jpg?s=612x612&w=0&k=20&c=FPs-C92zbN6RkHnPG4Fl9zyP2-HZWGy9Prdt46Yn-IY=', description: 'Bring your friends closer with exciting activities.' },
  { id: 3, title: 'Group Meeting Facilitation', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08v2vOdSh3KXZKwNbS0fgUAjjI5lMSo5avqlF9iKsOpGMGiUNiS3IsfpEVg&s', description: 'Facilitate meetings with a professional touch.' },
  { id: 4, title: 'Retreats & Excursions', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7C-FGsQqsmG_tlkZlfkJVKSbG61ml2MRcJw&s', description: 'Plan your next retreat or excursion with us.' },
  { id: 5, title: 'Nature Race Activities', img: 'https://img.freepik.com/free-photo/young-man-rides-motorcycle-with-surfboard_72229-1125.jpg', description: 'Enjoy thrilling nature races in beautiful settings.' },
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="relative group">
              <img src={service.img} alt={service.title} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
