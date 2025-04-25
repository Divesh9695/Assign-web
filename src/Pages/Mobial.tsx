import React from 'react';
import Web from "./Web"

interface ComparisonItemProps {
  factor: string;
  freelancer: string;
  agency: string;
  websites: string;
}

const ComparisonItem: React.FC<ComparisonItemProps> = ({ factor, freelancer, agency, websites }) => {
  return (
   
    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-300 py-4 text-sm md:text-base">
      <div className="font-semibold text-center md:text-left border border-gray-400 p-2 bg-gray-100">
        {factor}
      </div>
      <div className="text-center text-red-500 border border-gray-400 p-2">
        {freelancer}
      </div>
      <div className="text-center text-white bg-[#f13841] border border-gray-400 p-2">
        {agency}
      </div>
      <div className="text-center text-white bg-purple-600 font-semibold border border-gray-400 p-2">
        {websites}
      </div>
    </div>
  );
};

const ComparisonTable: React.FC = () => {
  return (
  
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Heading */}
      <div className="bg-gray-100 py-6 px-4 sm:px-8">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 text-center">
          Compare the Services & Cost of A Freelancer v/s Agency v/s Websites.co.in
        </h2>
      </div>

      {/* Column Headers (hidden on small screens) */}
      <div className="hidden md:grid grid-cols-4 py-2 bg-gray-200 items-center">
        <div className="font-semibold px-4 text-center border border-gray-400 p-2">Factors</div>
        <div className="text-center font-semibold text-red-500 border border-gray-400 p-2">FREELANCER</div>
        <div className="text-center font-semibold text-white bg-[#f13841] border border-gray-400 p-2">AGENCY</div>
        <div className="text-center font-semibold text-white border border-gray-400 p-2 bg-purple-600">WEBSITES.CO.IN</div>
      </div>

      {/* Comparison Rows */}
      <ComparisonItem factor="Time" freelancer="15 to 30 Days" agency="3 to 6 Months" websites="5 Minutes" />
      <ComparisonItem factor="Domain Name Cost" freelancer="₹1000 per year" agency="₹1000 per year" websites="FREE" />
      <ComparisonItem factor="Web Hosting Costs" freelancer="₹5000 per year" agency="₹10000 per year" websites="FREE" />
      <ComparisonItem factor="SSL Certificate Cost" freelancer="₹2000 per year" agency="₹2500 per year" websites="FREE" />
      <ComparisonItem factor="Annual Maintenance Cost" freelancer="₹10000 per year" agency="₹15000 per year" websites="FREE" />
      <ComparisonItem factor="Website Making Cost" freelancer="₹25,000 to ₹2 lacs" agency="₹2 lacs to ₹5 lacs" websites="Only ₹353 per month" />
      <ComparisonItem factor="Free Headaches" freelancer="Lot of Headaches 😫" agency="Maybe a little 😟" websites="None" />
      <ComparisonItem factor="Free Worries" freelancer="Lot of Worries 😨" agency="Lot of Worries 😟" websites="None" />
      <ComparisonItem factor="Delays In Projects" freelancer="3 to 4 days" agency="5 to 7 days" websites="None" />
      <ComparisonItem factor="Changes In Website" freelancer="Couple of weeks" agency="Couple of months" websites="Instantaneous" />
      <ComparisonItem factor="Business understanding" freelancer="Narrow" agency="Restricted" websites="Your Own Business" />
    </div>

  );
};


const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
     
      <ComparisonTable />
      <Web />
    </div>
  );
};

export default App;
