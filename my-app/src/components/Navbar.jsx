import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      {/* Small Top Navbar */}
      <div className="bg-yellow-100 py-2">
        <div className="container mx-auto flex justify-center items-center flex-wrap space-x-6">
          <span className="text-gray-800">Call Us: +1234567890</span>
          <div className="flex space-x-4">
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">
              Tiktok
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-center items-center flex-wrap max-w-screen-lg">
          {/* Company Logo */}
          <div className="text-2xl font-bold text-gray-800 mr-auto">
            Tanoshi Adventures
          </div>

          {/* Navbar Links */}
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-800 hover:underline">Home</a>
            </li>
            <li>
              <a href="/whoweare" className="text-gray-800 hover:underline">Who We Are</a>
            </li>
            
            {/* Products/Services with Dropdown */}
            <li className="relative group">
          <Link to="/services" className="text-gray-800 hover:underline">Products/Services</Link>
          
          {/* Dropdown Menu */}
          <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg hidden group-hover:block">
            <li><Link to="/services/family-events" className="block px-4 py-2 hover:bg-gray-100">Family Events</Link></li>
            <li><Link to="/services/friends-get-togethers" className="block px-4 py-2 hover:bg-gray-100">Friends Get Togethers</Link></li>
            <li><Link to="/services/group-meetings" className="block px-4 py-2 hover:bg-gray-100">Group Meeting Facilitation</Link></li>
            <li><Link to="/services/retreats" className="block px-4 py-2 hover:bg-gray-100">Retreats & Excursions</Link></li>
            <li><Link to="/services/nature-race" className="block px-4 py-2 hover:bg-gray-100">Nature Race Activities</Link></li>
          </ul>
        </li>
            
            <li>
              <a href="/our-clients" className="text-gray-800 hover:underline">Our Clients</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-800 hover:underline">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
