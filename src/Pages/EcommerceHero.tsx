import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import SeoSection from "./SeoSection"

const EcommerceHero: React.FC = () => {
  return (
    <>
    <section className="relative bg-[#f4f1f7] overflow-hidden py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side Image */}
   
     
      <div className="relative z-10 mb-10 md:mb-0">
      <img
            src="/public/dot.png" // Replace with your image path
            alt="Excited Woman"
            className="w-[px] h-40 mx-auto"
          />
        <div className="bg-[#9400FF] rounded-2xl p-4 shadow-xl">
          <img
            src="/public/girl1.webp" // Replace with your image path
            alt="Excited Woman"
            className="w-[200px] h-auto mx-auto"
          />
        </div>
        {/* Decorative Dots */}
        <div className="absolute top-[-20px] left-[-20px] w-16 h-16 bg-dotted-pattern" />
        <img
            src="/public/dot.png" // Replace with your image path
            alt="Excited Woman"
            className="w-[px] h-40 mx-auto"
          />
      </div>

      {/* Right Content */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
          <span className="underline">Build E-Commerce</span> <br />
          <span className="underline">Websites</span> With Plug-n-Play Features
        </h1>
        <ul className="text-lg text-gray-700 space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-purple-600 mt-1" />
            E-commerce and m-commerce ready <FaGlobe className="inline ml-1 text-blue-500" />
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-purple-600 mt-1" />
            Setup your own store & sell your products online.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-purple-600 mt-1" />
            Easily add “unlimited” products with web or mobile app.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-purple-600 mt-1" />
            Choose from a variety of free e-commerce templates.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-purple-600 mt-1" />
            Plug-n-play features to get you started instantly.
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-purple-600 mt-1" />
            No need to install any extra plugins or tools.
          </li>
        </ul>

        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
          Get Started For Free
        </button>
        <p className="text-sm text-gray-500 mt-2">No credit card required.</p>
      </div>

      {/* Optional Curved Decorations */}
     
   

      {/* Watermark or Logo */}
      <div className="absolute bottom-4 right-4 h-29">
  <img src="/up.webp" alt="Arrow" className="w-10 h-20 rotate-540" />
</div>

    </section>
    <SeoSection />
    </>
  );
};

export default EcommerceHero;
