import { FaCheckCircle } from "react-icons/fa";
import EcommerceHero from "./EcommerceHero"
import { Link } from "react-router-dom";

const FreeDomainPage = () => {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
     
      {/* Decorative arrows */}
      <img
  src="/up.webp" // ✅ Correct the path by removing ``
  alt="arrow left"
  className="absolute top-0 left-0 w-10 md:w-14 rotate-[-580deg] h-20"
/>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="underline font-extrabold">Free Domain</span>, Free Hosting,<br />
            Free SSL Certificate
          </h1>

          <ul className="space-y-4 text-gray-700 text-base">
            {[
              "A domain name of your choice is included for free.",
              "Free web hosting is included in all plans. 🎁",
              "Free SSL certificate or https indicator for your site.",
              "Get the maximum value for money you possibly can.",
              "No need to spend extra hundreds of dollars.",
              "Save money, time, and energy on development costs.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-purple-600 mt-1" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <Link to={'/signUpPage'}>
          <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
            Get Started For Free
          </button>
          </Link>

          <p className="text-sm text-gray-500 mt-2">No credit card required.</p>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="bg-purple-600 rounded-2xl shadow-lg p- h-60">
            <img
              src="/boy.webp"
              alt="person with laptop"
              className="w-72 md:w-80 rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Optional wave or background effect at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" className="w-full" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#f4f4f4"
            d="M0,0 C360,100 1080,0 1440,100 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>
      <EcommerceHero />
    </div>
  );
};

export default FreeDomainPage;
