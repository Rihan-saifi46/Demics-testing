import React, { useState } from 'react';
import Featured from '../sections/Featured';
import Social from '../sections/Social';
import Marketing from '../sections/Marketing';
import Websites from '../sections/Websites';
import Ad from '../sections/Ad';

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('branding'); // Default "Branding" selected

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'social', label: 'Social Media' },
    { id: 'marketing', label: 'Marketing Campaigns' },
    { id: 'websites', label: 'Websites' },
    { id: 'ad', label: 'AD Creatives' }
  ];

  return (
    <div className="w-full py-16">
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-7xl font-serif italic text-white mb-8">
          Our Projects
        </h1>
        
        <div className="flex flex-wrap justify-center items-center gap-4 px-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* YAHAN BAS SELECTED CATEGORY HI SHOW HOGI */}
      <div className="transition-all duration-500">
        {activeFilter === 'all' && (
          <>
            <Featured />
            <Social />
            <Marketing />
            <Websites />
            <Ad />
          </>
        )}
        
        {activeFilter === 'branding' && <Featured />}
        {activeFilter === 'social' && <Social />}
        {activeFilter === 'marketing' && <Marketing />}
        {activeFilter === 'websites' && <Websites />}
        {activeFilter === 'ad' && <Ad />}
      </div>
    </div>
  );
};

export default Project;