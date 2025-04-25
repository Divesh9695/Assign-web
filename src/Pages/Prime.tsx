import React from 'react';
import { FaPhoneAlt, FaStar, FaEnvelope, FaGlobe, FaHandsHelping, FaUserTie } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import Found from "./Found"
import { Link } from 'react-router-dom';

const PremiumFeaturesSection: React.FC = () => {
  return (
    <>
    <section className="bg-white text-center px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold">
        <span className="font-bold underline">7 Premium Features</span> For Power Users Who<br />
        Upgrade To Our Premium Plan
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-left text-sm md:text-base max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-green-500" />
          <span>Telephonic Support</span>
        </div>
        <div className="flex items-center gap-2">
          <FaGlobe className="text-blue-500" />
          <span>Custom Domain Name</span>
        </div>
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <span>Premium Support</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-purple-500" />
          <span>Email Based Support</span>
        </div>
        <div className="flex items-center gap-2">
          <FaHandsHelping className="text-orange-500" />
          <span>Dedicated Support</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserTie className="text-yellow-600" />
          <span>1-on-1 Business Counselling</span>
        </div>
        <div className="flex items-center gap-2">
          <MdWeb className="text-yellow-400" />
          <span>One Time Website Setup Service</span>
        </div>
      </div>

      <div className="mt-10">
      <Link to={'/signUpPage'}>
        <button className="bg-purple-600 text-white px-6 py-3 rounded font-semibold shadow-md hover:bg-purple-700">
          Get Instant Access To The Premium Plan
        </button>
        </Link>
        <p className="text-sm text-gray-500 mt-2">Get 78% discount by upgrading to the Premium Plan</p>
      </div>

      {/* Testimonial Section */}
      
    </section>
    <Found />
    </>
  );
};

export default PremiumFeaturesSection;
