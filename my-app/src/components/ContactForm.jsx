import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aorod2t', 'template_vmubar1', e.target, '7s5VqScBeYTmfQeHg')
      .then((result) => {
          console.log(result.text);
          setMessageSent(true);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Contact Form */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">First Name</label>
              <input type="text" name="first_name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Last Name</label>
              <input type="text" name="last_name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input type="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Phone Number</label>
            <input type="tel" name="phone" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea name="message" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600" rows="5" required></textarea>
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Send Message</button>
        </form>
        {messageSent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
      </div>

      {/* Contact Information */}
      <div className="flex-1 bg-gray-200 p-6 rounded-lg shadow-md flex flex-col justify-center items-start">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 mb-4">
          Have a question or just want to say hi? Our team is here to help and would love to hear from you!
        </p>
        <p className="text-gray-800 font-semibold">Email:</p>
        <p className="text-gray-600 mb-4">contact@tanoshiadventures.com</p>
        <p className="text-gray-800 font-semibold">Phone:</p>
        <p className="text-gray-600 mb-4">+1 (123) 456-7890</p>
        <p className="text-gray-800 font-semibold">Address:</p>
        <p className="text-gray-600">123 Adventure Lane<br />Wilderness City, USA</p>

        {/* Additional Social Links or Info */}
        <div className="mt-6">
          <h3 className="text-gray-800 font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-700">Facebook</a>
            <a href="https://instagram.com" className="text-pink-500 hover:text-pink-600">Instagram</a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-500">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
