import React from 'react';

const funImages = [
  { id: 1, img: 'https://media.istockphoto.com/id/1162744428/photo/millennial-african-american-man-leading-friends-hiking-single-file-uphill-on-a-path-in.jpg?s=612x612&w=0&k=20&c=28RSfrfLEkOyNyV96_uYUhGOKr-Y1vBYyhd8JKCHYCo=', caption: 'Outdoor Adventures' },
  { id: 2, img: 'https://riftvalleyadventures.com/wp-content/uploads/2019/12/56941423-D61C-4D01-BACB-67960CB8FCF8_1_105_c-768x576.jpeg', caption: 'Team Building Games' },
  { id: 3, img: 'https://cdn.vallarta-adventures.com/sites/default/files/2023-09/Outdoor.jpg', caption: 'Nature Excursions' },
  // Add more images as needed
];

const FunImages = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Fun Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {funImages.map(image => (
            <div key={image.id} className="relative group">
              <img src={image.img} alt={image.caption} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center">
                <span className="text-white text-xl font-bold">{image.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunImages;
