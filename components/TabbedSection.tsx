// components/TabbedSection.tsx
'use client';

import { useState } from 'react';

interface TabbedSectionProps {
  description: string;
}

const TabbedSection = ({ description }: TabbedSectionProps) => {
  const [activeTab, setActiveTab] = useState('description');

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="p-5 bg-white">
            <p className="text-sm text-gray-700 tracking-wide leading-relaxed">
              {description}
            </p>
          </div>
        );
      case 'additional':
        return (
          <div className="p-5 bg-white">
            <p className="text-sm text-gray-700">
              Additional information would go here. For example, product dimensions, weight, materials, etc.
            </p>
          </div>
        );
      case 'reviews':
        return (
          <div className="p-5 bg-white">
            <p className="text-sm text-gray-700">
              Customer reviews section. You could integrate a review system here.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full mt-10">
      <div className="flex border-b border-gray-200">
        <button
          className={`px-6 py-3 text-sm font-semibold transition-colors duration-200 ease-in-out ${
            activeTab === 'description'
              ? 'border-b-2 border-shadow-pink-400 text-shadow-pink-400'
              : 'text-gray-600 hover:text-shadow-pink-400'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`px-6 py-3 text-sm font-semibold transition-colors duration-200 ease-in-out ${
            activeTab === 'additional'
              ? 'border-b-2 border-shadow-pink-400 text-shadow-pink-400'
              : 'text-gray-600 hover:text-shadow-pink-400'
          }`}
          onClick={() => setActiveTab('additional')}
        >
          Additional Information
        </button>
        <button
          className={`px-6 py-3 text-sm font-semibold transition-colors duration-200 ease-in-out ${
            activeTab === 'reviews'
              ? 'border-b-2 border-shadow-pink-400 text-shadow-pink-400'
              : 'text-gray-600 hover:text-shadow-pink-400'
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>
      <div className="mt-5">{renderContent()}</div>
    </div>
  );
};

export default TabbedSection;