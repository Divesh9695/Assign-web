// src/pages/Pricing.tsx
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [plan, setPlan] = useState<'monthly' | 'yearly' | '3yearly' | '5yearly'>('yearly');

  const priceMapping = {
    monthly: 2083,
    yearly: 610,
    '3yearly': 510,
    '5yearly': 410,
  };

  const handlePlanChange = (selected: typeof plan) => setPlan(selected);

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-10  lg:px-20 text-center ">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Simple,Transparent Pricing. Always know what you'll pay.
      </h2>
      <p className="text-gray-600 mb-10">
        Pick a plan & create your business website in minutes. No technical knowledge required. Cancel anytime.
      </p>

      {/* Plan Selector */}
      <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
        {['monthly', 'yearly', '3yearly', '5yearly'].map((p) => (
          <div key={p} className="flex flex-col items-center">
            <button
              onClick={() => handlePlanChange(p as typeof plan)}
              className={`text-sm md:text-base px-4 py-2 border rounded-md transition-all duration-200 ${
                plan === p ? 'bg-blue-100 text-blue-700 font-semibold' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {p === 'yearly' && <span className="text-green-600 text-xs font-bold">POPULAR</span>}
              <span className="capitalize">{p} Plan</span>
            </button>
          </div>
        ))}
      </div>

      {/* Two Column Grid */}
      <div className="grid md:grid-cols-2 gap-10 text-left">
        {/* Left Side: Pricing Details */}
        <div className="text-center md:text-left">
          <div className="text-2xl md:text-3xl text-gray-400 line-through">₹2083</div>
          <div className="text-3xl md:text-4xl font-bold text-green-700">₹{priceMapping[plan]}</div>
          <p className="text-gray-500 text-sm">/month</p>
          <p className="text-green-600 text-sm mt-1">SAVE 71% every month</p>
          <p className="text-gray-400 text-xs mt-1">* Billed Yearly</p>
          <button className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded shadow">
            BUY SUBSCRIPTION
          </button>
          <p className="text-xs mt-2 text-gray-400">
            Review our <a href="#" className="underline">Terms</a> for trial, subscription, and renewal details.
          </p>

          <div className="mt-8">
            <div className="text-sm font-semibold text-gray-700 mb-1">
              89% of today's offer claimed — act fast
            </div>
            <div className="w-full bg-red-200 rounded-full h-3">
              <div className="bg-red-500 h-3 rounded-full w-[89%]"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Features Grid */}
        <div className="border-2 border-solid border-ray-100 bg-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            STANDARD FEATURES INCLUDED IN ALL PLANS 🔥
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 text-sm">
            <p>✅ Free Hosting</p>
            <p>✅ Free SSL Certificate</p>
            <p>✅ Unlimited Updates</p>
            <p>✅ Unlimited SEO Keywords</p>
            <p>✅ Smart Lead Engagement</p>
            <p>✅ Geo Tagging</p>
            <p>✅ Easy Auto Social Media</p>
            <p>✅ WhatsApp Chat</p>
            <p>✅ Facebook Messenger</p>
            <p>✅ Google Maps</p>
            <p>✅ E-commerce ready</p>
            <p>✅ M-commerce ready</p>
            <p>✅ Extra Sections</p>
            <p>✅ Get Business Enquiries</p>
            <p>✅ Get Business Analytics</p>
            <p>✅ Auto Multilingual Website</p>
            <p>✅ Google Analytics</p>
            <p>✅ Google Tag Manager</p>
            <p>✅ Facebook Pixel</p>
            <p>✅ Hotjar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const SupportCard: React.FC = () => {
  return (
    <div className="bg-gray-300 rounded-xl shadow-md px-6 py-10 max-w-3xl mx-auto  text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
        Still have question about how <span className="text-black font-bold">Websites.co.in</span> can help your business?
      </h2>
      <p className="text-gray-600 mb-6">Our customer success team is here to help 🙂</p>

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
  );
};


// import React from 'react';
import { Phone, Mail, Pin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-200">Terms of Usage</a></li>
              <li><a href="#" className="hover:text-purple-200">Refund</a></li>
              <li><a href="#" className="hover:text-purple-200">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-200">Report Abuse</a></li>
              <li><a href="#" className="hover:text-purple-200">Sitemap</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-200">Customers</a></li>
              <li><a href="#" className="hover:text-purple-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-200">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Pin className="w-4 h-4" />
                <p>Atal Incubation Centre, Second Floor, NMIMS University V.L. Pherozeshah Mehta RD, Vile Parle West, Mumbai, Maharashtra 400056</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <div>
                    <p>(+91) 02248934309 (IN)</p>
                    <p>(+1) 617-444-9693 (US)</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <p>support@websites.co.in</p>
              </div>
            </div>
          </div>

          {/* About Websites.co.in */}
          <div>
            <img src="https://via.placeholder.com/150" alt="Websites.co.in Logo" className="mb-4" />
            <p className="text-sm">
              Websites.co.in is a SaaS Platform that takes local Small and Medium businesses online within 5 minutes, lets them post updates to their website through web and app platforms, and helps them rank better for location based searches on Google at an affordable price.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          <p>© 2017-2025 Websites.co.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const WebsitesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content Area  */}
      <main className="flex-grow p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome to Websites.co.in
          </h1>
          <p className="text-gray-700 mb-4">
            Our platform empowers local Small and Medium Businesses to establish
            their online presence swiftly and efficiently.
          </p>
          <p className="text-gray-700 mb-8">
            Key features include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Rapid online presence creation (within 5 minutes)</li>
            <li>Easy website updates via web and mobile apps</li>
            <li>Improved local search ranking on Google</li>
            <li>Affordable pricing plans</li>
          </ul>
          {/* Add more components and content as needed */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  Website Creation
                </h3>
                <p className="text-gray-600">
                  Quick and easy website setup for your business.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  Content Management
                </h3>
                <p className="text-gray-600">
                  Update your website content anytime, anywhere.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  SEO Optimization
                </h3>
                <p className="text-gray-600">
                  Boost your local search rankings.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer  */}
      <Footer />
    </div>
  );
};

// export default WebsitesPage;

const Support: React.FC = () => {
    return (
      <div>
        <Pricing />
       
       <SupportCard />
       <WebsitesPage/>
      
      </div>
    );
  };
  export default Support;
