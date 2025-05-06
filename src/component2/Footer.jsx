import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        
        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow us on</h3>
          <div className="flex space-x-4">
            <FaTwitter className="text-blue-500 text-2xl hover:scale-110 cursor-pointer" />
            <FaFacebook className="text-blue-700 text-2xl hover:scale-110 cursor-pointer" />
            <FaInstagram className="text-pink-500 text-2xl hover:scale-110 cursor-pointer" />
            <FaYoutube className="text-red-600 text-2xl hover:scale-110 cursor-pointer" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Sell Phone</li>
            <li>Sell Television</li>
            <li>Sell Smart Watch</li>
            <li>Sell Smart Speakers</li>
            <li>Sell DSLR Camera</li>
            <li>Sell Earbuds</li>
            <li>Repair Phone</li>
            <li>Buy Phone</li>
            <li>Recycle Phone</li>
            <li>Find New Phone</li>
            <li>Partner With Us</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Articles</li>
            <li>Press Releases</li>
            <li>Become Cashify Partner</li>
            <li>Become Supersale Partner</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        {/* Sell Device */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Sell Device</h3>
          <ul className="space-y-1 text-sm">
            <li>Mobile Phone</li>
            <li>Laptop</li>
            <li>Tablet</li>
            <li>iMac</li>
            <li>Gaming Consoles</li>
          </ul>
        </div>

        {/* Help & More Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Help & Support</h3>
          <ul className="space-y-1 text-sm mb-4">
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Warranty Policy</li>
            <li>Refund Policy</li>
          </ul>

          <h3 className="text-lg font-semibold mb-3">More Info</h3>
          <ul className="space-y-1 text-sm">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>E-Waste Policy</li>
            <li>Cookie Policy</li>
            <li>GDPR Compliance</li>
            <li>What is Refurbished</li>
            <li>Device Safety</li>
          </ul>
        </div>
      </div>

      {/* Chat with Us */}
      <div className="mt-10 text-center">
        <button className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
          <BsChatDots className="text-lg" />
          Chat with Us
        </button>
        <p className="text-sm mt-2 text-gray-500">Got questions? Just ask.</p>
      </div>
    </footer>
  );
};

export default Footer;
