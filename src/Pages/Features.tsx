
import { motion } from "framer-motion";
import Task from "./Task"
// import HowItWorks from "./HowItWorks"
import { Link } from 'react-router-dom';

interface Feature {
  icon: string;
  label: string;
}

const features: Feature[] = [
  { icon: "🌐", label: "Free Web Hosting" },
  { icon: "📍", label: "Geo Tagging" },
  { icon: "🔒", label: "Free SSL Certificate" },
  { icon: "📩", label: "Get Business Enquiries" },
  { icon: "📊", label: "Get Business Analytics" },
  { icon: "📦", label: "Get Business Alerts" },
  { icon: "➕", label: "Extra Sections" },
  { icon: "💬", label: "Live Chat" },
  { icon: "🐦", label: "Tawk Chat" },
  { icon: "🟢", label: "WhatsApp Chat" },
  { icon: "⏱", label: "Powerful Auto-SEO" },
  { icon: "📡", label: "Easy Auto Social Media" },
  { icon: "🧠", label: "Smart Lead Engagement" },
  { icon: "🛒", label: "E-commerce ready" },
  { icon: "📱", label: "M-commerce ready" },
  { icon: "🌐", label: "Auto Multilingual Website" },
  { icon: "📘", label: "Facebook Pixel" },
  { icon: "💬", label: "Facebook Messenger Chat" },
  { icon: "🔄", label: "1-click Facebook Page to Website" },
  { icon: "📈", label: "Advanced SEO Optimization" },
  { icon: "🔑", label: "Unlimited Keywords SEO" },
  { icon: "📦", label: "Unlimited Product Listing" },
  { icon: "🖼️", label: "Unlimited Photos" },
  { icon: "🔔", label: "Unlimited Updates" },
  { icon: "📉", label: "Hotjar" },
  { icon: "📍", label: "Google Maps" },
  { icon: "💸", label: "Google AdSense" },
  { icon: "📊", label: "Google Analytics" },
  { icon: "🧰", label: "Google Tag Manager" },
];

const Features = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-12 px-4 md:px-10 max-w-7xl mx-auto text-center relative"
    >
      
      <h2 className="text-2xl text-center md:text-2xlg font-bold mb-2">
        <span className="underline underline-offset-4">30+ Amazing Features</span>{" "}
        That Will Help You <br />Create Any Kind Of Website Easily...
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl">{feature.icon}</div>
            <p className="text-gray-700">{feature.label}</p>
          </motion.div>
        ))}
      </div>
      <Link to={'/signUpPage'}>
      <motion.button
        className="mt-12 bg-purple-600 text-white text-lg font-semibold px-6 py-3 rounded hover:bg-purple-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        Get Started For Free
      </motion.button>
      </Link>

      
    </motion.div>
    {/* <HowItWorks /> */}
    <Task />
    </>
  );
};

export default Features;
