import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400">
              Have any questions? Reach out to us through our{" "}
              <Link to="/contact" className="text-indigo-400 hover:underline">
                contact form
              </Link>{" "}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Who We Are</h3>
            <p className="text-gray-400">
              Tanoshi Adventures is dedicated to organizing unforgettable events like{" "}
              <Link to="/services/family-events" className="text-green-400 hover:underline">
                Family Gatherings
              </Link>
              ,{" "}
              <Link to="/services/friends-get-togethers" className="text-green-400 hover:underline">
                Friends’ Get-Togethers
              </Link>
              ,{" "}
              <Link to="/services/group-meetings" className="text-green-400 hover:underline">
                Group Meetings
              </Link>
              ,{" "}
              <Link to="/services/retreats" className="text-green-400 hover:underline">
                Retreats
              </Link>
              , and{" "}
              <Link to="/services/nature-race" className="text-green-400 hover:underline">
                Nature Races
              </Link>.
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Main Footer */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Tanoshi Adventures. All rights reserved.</p>
          <p className="mt-2">Bringing people closer to nature, one adventure at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
