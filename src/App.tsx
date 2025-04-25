import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import HowItWorks from "./Pages/HowItWorks";
import Features from "./Pages/Features";
import Mobial from "./Pages/Mobial";
import Web from "./Pages/Web";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Login from "./Components/Login";
import SignUpPage from "./Components/SignUpPage";
import Contact from "./Pages/Contact";
import Top from "./Components/Top";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUpPage" element={<SignUpPage />} />
        <Route path="/top" element={<Top />} />
        <Route path="/mobial" element={<Mobial />} />
        <Route path="/web" element={<Web />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />

        {/* Universal fallback route to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
