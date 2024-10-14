import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="flex flex-col items-center px-4 lg:px-24 bg-gradient-to-r from-[#7defe0] to-[#b6c0c5]">
      <div className="flex flex-col items-center justify-center w-full gap-12 py-20 md:py-40 md:flex-row md:gap-24">
        {/* Left Side */}
        <div className="flex flex-col items-center text-center md:text-left md:w-1/2">
          <h2 className="text-3xl font-bold font-mono leading-snug text-black md:text-4xl">
            Unlock Your Career Potential!
            <span className="block text-[#112d60]">Find Internships that Fit Your Goals.</span>
          </h2>
          <p className="mt-4 md:w-4/5 md:mt-8">
            Discover exciting opportunities and gain real-world experience through our extensive internship programs. Start your journey towards a successful career today!
          </p>
          <div className="mt-6 flex flex-col items-center md:flex-row md:items-start md:mt-8">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for Internships"
              className="px-4 py-2 rounded-l-md border border-gray-300 outline-none md:px-6 md:py-3 md:border-2"
            />
            <button className="mt-2 md:mt-0 md:ml-2 px-6 py-3 font-medium text-white transition-all duration-200 ease-in bg-[#112d60] hover:bg-black rounded-md">
              Search
            </button>
          
          </div>
        </div>

        {/* Right Side */}
        <img
          src="/images/students.png"
          alt="Students"
          className="w-80  h-auto md:w-80 md:h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
