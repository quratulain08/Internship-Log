"use client";
import React, { useState } from 'react';
import { FaBriefcase, FaHandshake, FaStar, FaChartLine } from 'react-icons/fa';

const features = [
  {
    title: "Skill Development",
    description: "Enhance your skills with hands-on experience and professional training.",
    icon: <FaBriefcase />
  },
  {
    title: "Networking Opportunities",
    description: "Connect with industry professionals and expand your network.",
    icon: <FaHandshake />
  },
  {
    title: "Real-World Experience",
    description: "Gain valuable experience working on real-world projects.",
    icon: <FaStar />
  },
  {
    title: "Career Growth",
    description: "Improve your career prospects with practical insights and knowledge.",
    icon: <FaChartLine />
  },
  // Add more features as needed
];

const KeyFeatures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className='relative px-4 my-12 lg:px-24 z-10'>
      {/* Heading Section */}
      
        <h2 className='text-5xl font-bold leading-snug text-center' style={{ color: '#112d60' }}>Key Features</h2>
      
      {/* Features Carousel */}
      <div className='relative mt-6'>
        <div className='overflow-hidden'>
          <div
            className='flex transition-transform duration-500'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className='w-full flex-shrink-0 px-4 py-6 bg-gradient-to-r from-[#7defe0] to-[#b6c0c5] border rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'
              >
                <div className='text-center space-y-4'>
                  <div className='flex justify-center items-center h-16'>
                    <div className='text-5xl text-gray-600'>{feature.icon}</div>
                  </div>
                  <h5 className='text-md font-medium text-gray-800'>{feature.title}</h5>
                  <p className='text-sm text-gray-600'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md'
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md'
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default KeyFeatures;
