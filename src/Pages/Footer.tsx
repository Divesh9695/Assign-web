import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#e9e8eb] text-black py-8 px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <img
            src="/web.png"
            alt="Websites.co.in Logo"
            className="h-8 mb-4"
          />
          <p className="text-sm">
            Websites.co.in is a no code, mobile-first, SaaS platform that
            empowers you to create your website, eCommerce store and blog
            anytime, anywhere - instantly. Post unlimited updates, offers,
            blogs & eCommerce catalogues to your website through our platform
            and grow online.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold mb-2">Office Address</h3>
          <p className="text-sm">
            Atal Incubation Centre, Second Floor, NMIMS University V.L.
            Pherozeshah Mehta RD, Vile Parle West, Mumbai, Maharashtra, India.
            Pin: 400056.
          </p>
          <p className="text-sm mt-2">🇮🇳 (+91) 02248934309 (IN)</p>
          <p className="text-sm">(+1) 617-444-9693 (US)</p>
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

        {/* Website Builder Links */}
        <div>
          <h3 className="font-bold mb-2">Website Builder</h3>
          <ul className="text-sm space-y-2 font-bold">
            <li><a href="#" className="hover:text-gray-600">Home </a></li>
            <li><a href="#" className="hover:text-gray-600">Features</a></li>
            <li><a href="#" className="hover:text-gray-600">Services</a></li>
            <li><a href="#" className="hover:text-gray-600">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-600">Refund</a></li>
            <li><a href="#" className="hover:text-gray-600">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-600">Report Abuse</a></li>
          </ul>
        </div>

        {/* Company Info and Sitemap */}
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-gray-600">Privacy policy</a></li>
            <li><a href="#" className="hover:text-gray-600">Terms of Usage</a></li>
            <li><a href="#" className="hover:text-gray-600">Grievance</a></li>
          </ul>

          <h3 className="font-bold mt-4 mb-2">Sitemap</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-gray-600">View Sitemap</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-8 md:col-span-4">
        <p>© 2017 - {new Date().getFullYear()} Websites.co.in. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
