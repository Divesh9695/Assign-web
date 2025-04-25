import React from "react";
import HowItWorks from './HowItWorks';
// import Features from "./Features"
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <>
    <section className="px-6 py-12 lg:px-16 bg-white">
      

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Side: Text & Buttons */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">
            Create Your Website, Blog, Or E-Commerce Site <span className="underline">In 5 Minutes</span>
          </h1>
          <p className="flex items-center gap-3 text-gray-700">
  <img src="/cake.png" alt="Yahoo" className="h-10" />
  <span>
  4 million users  <strong>190+ countries</strong></span>
</p>
<p className="flex items-center gap-3 text-gray-700">
  <img src="/ab.png" alt="Yahoo" className="h-10" />
  <span>
  Create your website in   <strong>98 languages

</strong></span>
</p>
<p className="flex items-center gap-3 text-gray-700">
  <img src="/star.png" alt="Yahoo" className="h-10" />
  <span>
  <strong>4.5 star ratings on </strong>
  Create your website in  </span>
</p>
          <div className="flex flex-col sm:flex-row gap-4">
          <Link to={'/signUpPage'}>
            <button className="bg-purple-600 text-white px-6 py-3 rounded font-medium hover:bg-purple-700">
              Start For Free
            </button>
            </Link>
            
            <a
  href="https://play.google.com/store/apps/details?id=in.co.websites.websitesapp&referrer=utm_source%3Dwebsite_landing_page%26utm_medium%3Dweb_dashboard%"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded font-medium hover:bg-purple-50">
    Download Mobile App
  </button>
</a>

          </div>
        </div>

        {/* Right Side: Image Mockups */}
        <div className="lg:w-1/2 flex flex-col items-center relative">
          <img
            src="/public/img.webp" // Replace with your local asset or use an <Image> tag if using Next.js
            alt="Devices"
            className="max-w-full h-auto"
          />
          <span className="absolute bottom-0 left-10 bg-yellow-200 px-3 py-1 text-sm rounded font-mono">
            Zero technical knowledge needed
          </span>
        </div>
      </div>

      {/* As Seen In Logos */}
      <div className="mt-16 text-center">
        <h3 className="text-lg font-medium mb-6">As Seen In</h3>
        <div className="flex flex-wrap justify-center items-center gap-18">
          <img src="/public/toi.png" alt="Yahoo" className="h-10" />
          <img src="/public/yahoo.png" alt="BusinessWorld" className="h-10" />
          <img src="/public/word.webp" alt="Print" className="h-10" />
          <img src="/public/the.png" alt="Print" className="h-12" />
          <img src="/public/iifl.png" alt="IIFL" className="h-10" />
          <img src="/public/image.png" alt="Tracxn" className="h-10" />
    
        </div>
      </div>
      
    </section>
    {/* <Features /> */}
    <HowItWorks />
    
    </>
  );
};

export default HeroSection;
