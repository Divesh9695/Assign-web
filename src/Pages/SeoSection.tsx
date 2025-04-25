import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Hero from "./Hero"
import { Link } from "react-router-dom";

const SeoSection: React.FC = () => {
  return (
    <>
    <section className="bg-white py-16 px-4 relative overflow-hidden">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 relative z-10">
        {/* Left Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            <span className="underline decoration-purple-600 underline-offset-4">
              Magic SEO Tool
            </span>{" "}
            To Rank On <br />
            Google Search Automagically
          </h2>

          <ul className="mt-6 space-y-3 text-gray-700">
            {[
              "Your site will rank on Google automagically.",
              "No need to do SEO keyword research or coding.",
              "Magic SEO keyword tool inbuilt within Website Builder.",
              "SEO keywords are identified and ranked automagically.",
              "Save thousands of dollars on SEO optimization.",
              "No need to hire a SEO freelancer or agency.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaCheckCircle className="text-purple-600 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
          <Link to={'/signUpPage'}>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md text-lg shadow-md">
              Get Started For Free
            </button>
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              No credit card required.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="bg-[#7b1fa2] rounded-2xl shadow-lg p-2">
            <img
              src="/man22.webp" // <-- replace with your image
              alt="Man pointing"
              className="rounded-xl max-h-[400px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom curved shape */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 100"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f6f5f8"
            d="M0,0 C360,100 1080,0 1440,100 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>
    </section>
    <Hero />
    </>
  );
};

export default SeoSection;

