import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Footer from "./Footer";

const SupportCard: React.FC = () => {
  return (
    <>
    <div className="bg-white rounded-xl shadow-md px-6 py-10 max-w-3xl mx-auto mt-16 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
        Still have questions about how{" "}
        <span className="text-black font-bold">Websites.co.in</span> can help your business?
      </h2>
      <p className="text-gray-600 mb-6">
        Our customer success team is here to help 🙂 
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="tel:+919999999999"
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md flex items-center gap-2 text-sm font-medium shadow"
        >
          <FaPhoneAlt /> Call us
        </a>
        <a
          href="mailto:help@websites.co.in"
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md flex items-center gap-2 text-sm font-medium shadow"
        >
          <FaEnvelope /> Mail us
        </a>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SupportCard;




