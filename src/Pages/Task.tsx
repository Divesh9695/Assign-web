import React from 'react';
import Prime from "./Prime"
import { Link } from 'react-router-dom';

const templates = [
  {
    title: 'Better Blog',
    image: '/grid.webp',
  },
  {
    title: 'Clinca',
    image: '/CLINCA.webp',
  },
  {
    title: 'Estore',
    image: '/estore.webp',
  },
  {
    title: 'Udyog',
    image: '/udyog.webp',
  },
];

const TemplateSelectionPage: React.FC = () => {
  return (
    <>
    
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        <span className="underline">Choose From A Variety Of Templates</span>
      </h2>
      <p className="text-lg text-center mb-8">Based On Your Industry</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {templates.map((template, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
            <img src={template.image} alt={template.title} className="w-full h-60 object-cover" />
            <div className="p-4 text-center font-medium">{template.title}</div>
          </div>
        ))}
      </div>

      <p className="text-blue-600 underline cursor-pointer mb-4">See more...</p>
      <Link to={'/signUpPage'}>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full text-center">
        Choose A Template of Your Choice For Free
      </button>
      </Link>

      <p className="text-sm text-gray-500 mt-2">
        No need to pay for installing themes of your choice.
      </p>
    </div>
    <Prime />
   
    </>
  );
};

export default TemplateSelectionPage;
