import React, { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import SupportCard from "./SupportCard"
import { Link } from "react-router-dom";

const ServicesSection: React.FC = () => {
  const serviceRefs = {
    googleAds: useRef<HTMLDivElement>(null),
    metaAds: useRef<HTMLDivElement>(null),
    linkedinAds: useRef<HTMLDivElement>(null),
    applications: useRef<HTMLDivElement>(null),
    loadingDesign: useRef<HTMLDivElement>(null),
    socialMediaReels: useRef<HTMLDivElement>(null),
    productShoot: useRef<HTMLDivElement>(null),
    subscribers: useRef<HTMLDivElement>(null),
    watchtime: useRef<HTMLDivElement>(null),
    pressRelease1: useRef<HTMLDivElement>(null),
  };

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleScroll = (key: keyof typeof serviceRefs) => {
    const targetRef = serviceRefs[key];
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveCard(key);
      setTimeout(() => setActiveCard(null), 1500);
    }
  };

  const cardClass = (key: string) =>
    `bg-white rounded-md shadow-md overflow-hidden transition-all duration-500 ${
      activeCard === key ? "ring-4 ring-purple-500" : ""
    }`;

  const renderCard = (key: keyof typeof serviceRefs, title: string, items?: string[]) => (
    <div ref={serviceRefs[key]} className={cardClass(key)}>
      <img src="ai.webp" alt={title} className="w-full h-auto" />
      <div className="p-6">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        {items && (
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        <div className="mt-4 text-gray-800 font-bold shadow-md rounded px-2 py-1 bg-purple-50 w-fit">
          <FaWhatsapp className="text-lg bg-green-500" />
          Starting From: ₹48000
        </div>
    <Link to={'/top'}>
        <button className="flex items-center gap-2 mt-3 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded shadow-md">
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-white py-12 px-8 md:px-16 lg:px-24 h-screen">
      {/* Top Banner */}
      <div className="bg-purple-600 text-white py-8 px-6 rounded-md mb-6">
        <span className="bg-purple-950 text-white text-xs font-semibold py-2 px-2">
          Services
        </span>
        <h2 className="text-2xl font-bold mt-2">
          A one place solution for all your online needs
        </h2>
        <p className="text-sm mt-1">We are here to help you achieve your digital goals</p>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-8 h-[calc(100vh-220px)] overflow-hidden">
        {/* Sidebar (fixed on small screens) */}
        <div className="w-full md:w-1/4 md:sticky top-0 h-[calc(100vh-220px)] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <div className="flex flex-col space-y-2">
            {Object.entries(serviceRefs).map(([key]) => (
              <button
                key={key}
                onClick={() => handleScroll(key as keyof typeof serviceRefs)}
                className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md w-full text-left hover:bg-gray-200"
              >
                {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
              </button>
            ))}
          </div>
        </div>

        {/* Service Grid */}
        <div className="w-full md:w-3/4 overflow-y-auto pr-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {renderCard("googleAds", "Google Ads", ["Account Setup", "Analytics Integration", "Campaign Reporting"])}
            {renderCard("metaAds", "Meta Ads", ["Facebook & Instagram", "Deep Pixel Setup"])}
            {renderCard("linkedinAds", "LinkedIn Ads", ["B2B Campaigns", "Lead Gen"])}
            {renderCard("applications", "Web & App Development")}
            {renderCard("loadingDesign", "Loading Design")}
            {renderCard("socialMediaReels", "Monthly Social Media Reels & Posts")}
            {renderCard("productShoot", "Product Shoot")}
            {renderCard("subscribers", "Subscribers")}
            {renderCard("watchtime", "Watchtime")}
            {renderCard("pressRelease1", "Press Release 1")}
          </div>
        </div>
      </div>
   <SupportCard />
    </div>
  );
};

export default ServicesSection;
