import React from "react";
import Footer from "./Footer";

const Contact: React.FC = () => {
  return (
    <>
    <div className="w-full px-4 md:px-16 py-10">
      <h2 className="text-3xl font-bold mb-2">Don't be shy, say Hello</h2>
      <p className="text-gray-600 mb-6">
        You have a question? Drop a message to us.
      </p>
      <hr className="mb-6" />

      <div className="flex flex-col md:flex-row gap-6">
        {/* Map Section */}
        <div className="w-full md:w-1/2 h-[400px]">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Noida&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border rounded"
            loading="lazy"
          ></iframe>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block font-medium mb-1">Phone</label>
              <input
                type="tel"
                placeholder="Your phone"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              placeholder="Your message"
              className="w-full border rounded px-3 py-2 h-28"
            ></textarea>
          </div>

          <div className="border rounded p-4 flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>I'm not a robot</span>
            </label>
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="reCAPTCHA"
              className="h-8"
            />
          </div>

          <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 flex items-center gap-2">
            <span>📨</span> Send Message
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>

  );
};

export default Contact;
