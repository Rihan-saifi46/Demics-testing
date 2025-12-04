import React, { useState } from 'react';
import color from '../assets/img/color 2.png'
import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-[40vh]  relative home text-white">
      {/* <img src={color} className='z-[0] absolute w-[20vw] top-[-30vw] h-[100vw]' alt="" /> */}
      {/* Contact Form Section */}
      {/* <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-light mb-12">
          <span className="italic">Interested in</span>
          <br />
          <span className="font-normal">Working Together?</span>
        </h1>

        <div>
          {/* Name and Email Row */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className='rounded border-t-2 border-l-2 border-white my-btn
 p-[1.2vw]'>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 py-3 px-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            <div className=' rounded border-t-2 border-l-2 border-white my-btn
 p-[1.2vw]'>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-600 bg-transparent py-3 px-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div> */}

          {/* Message Text Area */}
         {/* <div className='rounded border-t-2 border-l-2 border-white my-btn
 p-[1.2vw]'>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-600 bg-transparent py-3 px-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div> */}

          {/* Submit Button */}
          {/* <div className="text-center mt-[2vw]">
            <button
              onClick={handleSubmit}
              className="an text-white  font-semibold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[-1px_-1px_1px_0_rgba(255,255,255,1)]" 
            >
              SEE MORE
            </button>
          </div>
        </div>
      </div> */} 

      {/* Footer Section */}
      <div className=" bg-opacity-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Important Links */}
            <div>
              <h3 className="text-sm font-semibold mb-4 tracking-wider">IMPORTANT LINKS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Work</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold mb-4 tracking-wider">SERVICES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-white transition-colors">Branding</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Social Media Management</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Marketing</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Website</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">4D Creation</a></li>
              </ul>
            </div>

            {/* Specialized Industry */}
            <div>
              <h3 className="text-sm font-semibold mb-4 tracking-wider">SPECIALIZED INDUSTRY</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-white transition-colors">Fintech Industry</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Healthcare Industry</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Edtech Industry</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">E-Commerce Industry</a></li>
                <li><a href="#" className="text-white hover:text-white transition-colors">Company Deck</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold mb-4 tracking-wider">CONTACT</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-purple-500" />
                  <a href="mailto:hello@demics.com" className="text-white hover:text-white transition-colors text-sm">
                    hello@demics.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-purple-500" />
                  <a href="tel:+919191823300" className="text-white hover:text-white transition-colors text-sm">
                    +91 91918 23 2300
                  </a>
                </li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-white hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}