import React, { useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarProps } from "../Pages/types"; 

const Navbar: React.FC<NavbarProps> = ({ openLoginModal }) => { 
  const [isOpen, setIsOpen] = React.useState(false);
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "How it Works", path: "/how-it-works" },
    { name: "Mobile App", path: "/mobial" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },

  ];

 
  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY >= 100) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`w-full bg-white sticky top-0 z-90 ${
      hasShadow ? "shadow-lg bg-white" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/web.png" alt="Websites Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-purple-600 text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
           <Link to={'/signUpPage'}>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm font-semibold">
            Free Signup
          </button>
          </Link>
          <Link to={'/login'}>

          <button
            onClick={openLoginModal} // Call the passed openLoginModal function on button click
            className="border border-purple-600 text-purple-600 px-4 py-2 rounded hover:bg-purple-50 text-sm font-semibold"
          >
            Login
          </button></Link>
        </nav>

        {/* Mobile Icon */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 py-4 space-y-3 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-gray-700 hover:text-purple-600 text-sm"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
           <Link to={'/signUpPage'}>
          <button className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm font-semibold">
            Free Signup
          </button>
          </Link>
          <Link to={'/login'}>
          <button
            onClick={openLoginModal} // Call the passed openLoginModal function on button click
            className="w-full border border-purple-600 text-purple-600 px-4 py-2 rounded hover:bg-purple-50 text-sm font-semibold"
          >
            Login
          </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
