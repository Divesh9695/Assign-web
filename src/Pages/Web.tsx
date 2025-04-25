// Web.tsx

import React from 'react';
import { Link } from 'react-router-dom';



const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:flex md:items-center md:justify-between">
    
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/phone.webp"
          alt="Mobile App Preview"
          className="rounded-lg shadow-lg w-64"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Download the Instant Website builder: websites.co.in App & get online instantly
        </h1>
        <p className="text-gray-600 mb-6">Or Request A Free Demo Now</p>
        <div className="mb-4">
          <p className="text-sm text-gray-700">
            Call (+91) 02248934309 to connect to our representative who will walk you through building your website in minutes. You can also send us an email with details of your requirements on support@websites.co.in and we will get back to you shortly.
          </p>
        </div>
        <Link to={'/signUpPage'}>
        <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md mb-4">
          Click here to download our Mobile App for Free
        </button>
        </Link>
        <div>
          <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">
            Or start using the web dashboard for free...
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-#e9e8eb text-black py-8 px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <img src="/web.png" alt="Websites.co.in Logo White" className="h-8 mb-4" />
        <p className="text-sm">
          Websites.co.in is a no code, mobile-first, SaaS platform that empowers you to create your website, eCommerce store and blog anytime, anywhere - instantly. Post unlimited updates, offers, blogs & eCommerce catalogues to your website through our platform and grow online.
        </p>
      </div>
      <div>
        <h3 className="font-bold mb-2">Office Address</h3>
        <p className="text-sm">
          Atal Incubation Centre, Second Floor, NMIMS University V.L. Pherozeshah Mehta RD, Vile Parle West, Mumbai, Maharashtra, India. Pin: 400056.
        </p>
        <p className="text-sm mt-2">🇮🇳 (+91) 02248934309 (IN)</p>
        <p className="text-sm"> (+1) 617-444-9693 (US)</p>
        <p className="text-sm">support@websites.co.in</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="hover:opacity-75">
            <img src="/f.png" alt="Facebook" className="h-6" />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src="/linkedin.png" alt="LinkedIn" className="h-6" />
          </a>
          <a href="#" className="hover:opacity-75">
            <img src="/twitter.webp" alt="Twitter" className="h-6" />
          </a>
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-2">Website Builder</h3>
        <ul className="text-sm space-y-2">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Features</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-300">Refund</a></li>
          <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
          <li><a href="#" className="hover:text-gray-300">Report Abuse</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Company</h3>
        <ul className="text-sm space-y-2">
          <li><a href="#" className="hover:text-gray-300">Privacy policy</a></li>
          <li><a href="#" className="hover:text-gray-300">Terms of Usage</a></li>
          <li><a href="#" className="hover:text-gray-300">Grievance</a></li>
        </ul>
        <h3 className="font-bold mt-4 mb-2">Sitemap</h3>
        <ul className="text-sm space-y-2">
          <li><a href="#" className="hover:text-gray-300">View Sitemap</a></li>
        </ul>
      </div>
      <div className="md:col-span-4 text-center text-sm mt-8">
        <p>© 2017 - {new Date().getFullYear()} Websites.co.in. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Web: React.FC = () => {
  return (
    <div>
     
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Web;
