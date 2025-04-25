import React from "react";
import { FaFacebookF } from "react-icons/fa";
import Features from "./Features"
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <>
    <section className="w-full bg-[#f5f4fb] py-10 px-4 flex flex-col md:flex-row items-center justify-center min-h-screen relative overflow-hidden">
      {/* Left Image */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
        <div className="bg-[#9e00ff] p-4 rounded-xl shadow-lg">
          <img
            src="/public/men.webp"
            alt="Man holding phone"
            className="w-[280px] h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          <span className="font-bold underline">1-Click</span> Facebook Page To
          Website Tool
        </h1>

        <ul className="space-y-3 text-lg text-gray-700 mb-6">
          {[
            "Convert your Facebook page into a website.",
            "Transform your Facebook covers into a carousel. 🪄",
            "Automatically send Facebook statuses as updates.",
            "Your photos get magically populated into a gallery.",
            "Save money, time, and energy on building a site.",
            "Developed by our inhouse developers at Websites.co.in.",
          ].map((text, index) => (
            <li key={index} className="flex items-start gap-2">
              <img
                src="https://instawebeustorage01.blob.core.windows.net/websites-co-in-users-files/assets/tick.svg"
                alt="tick"
                className="w-5 h-5 mt-1"
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <Link to={'/signUpPage'}>
        <button className="flex items-center gap-2 bg-[#264ede] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
          <FaFacebookF className="text-white" />
          <span className="font-medium">
            Create A Website With Your Facebook Page
          </span>
        </button>
        </Link>

        <p className="text-sm text-gray-500 mt-2">
          Get started for free. No credit card required.
        </p>
      </div>
     
    </section>
    <Features />
    </>
    
  );
};

export default Hero;
