// components/About.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { FaRocket, FaLightbulb, FaBullhorn, FaHandsHelping } from 'react-icons/fa';

const About = () => {
  return (
    <div id="about"> 
      {/* Heading Section */}
      
      <h2 className='text-5xl font-bold leading-snug text-center' style={{ color: '#112d60' }}>About Us</h2>
       
      

      {/* Main Content Section */}
      <div className='px-4 my-8 lg:px-16 bg-gradient-to-l from-[#7defe0] to-[#b6c0c5] py-8'>
        <h2 className='text-4xl font-bold leading-snug text-center' style={{ color: '#112d60' }}>
          Empowering Future Leaders
        </h2>
        <p className='text-xl text-center text-gray-600'>
          Connecting Students with Real-World Opportunities
        </p>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-1/2'>
            <Image
              src='/images/About2.png'
              alt='About Us Image'
              className='rounded-lg shadow-lg'
              width={400}
              height={250}
            />
          </div>
          <div className='md:w-1/2 md:pl-8'>
            <p className='text-base text-gray-700'>
              Welcome to our platform! We are dedicated to providing exceptional opportunities for personal and professional growth. Our mission is to foster skill development, create networking opportunities, and offer real-world experiences that pave the way for career growth. With a commitment to excellence, we strive to support our users in achieving their goals and maximizing their potential. Join us as we embark on this journey of learning and success together.
            </p>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Mission Section */}
          <div className='flex items-center space-x-4'>
            <FaRocket size={24} className='text-[#112d60]' />
            <div>
              <h3 className='text-xl font-semibold' style={{ color: '#112d60' }}>Our Commitment</h3>
              <p className='text-base text-gray-700'>
                Helping students excel
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <FaBullhorn size={24} className='text-[#112d60]' />
            <div>
              <h3 className='text-xl font-semibold' style={{ color: '#112d60' }}>Our Voice</h3>
              <p className='text-base text-gray-700'>
                Amplifying voices for change
              </p>
            </div>
          </div>
          {/* Vision Section */}
          <div className='flex items-center space-x-4'>
            <FaLightbulb size={24} className='text-[#112d60]' />
            <div>
              <h3 className='text-xl font-semibold' style={{ color: '#112d60' }}>Our Vision</h3>
              <p className='text-base text-gray-700'>
                Building career pathways
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <FaHandsHelping size={24} className='text-[#112d60]' />
            <div>
              <h3 className='text-xl font-semibold' style={{ color: '#112d60' }}>Our Approach</h3>
              <p className='text-base text-gray-700'>
                Fostering collaborative growth
              </p>
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-8'>
          <button className='px-5 py-2 font-semibold text-white bg-[#112d60] rounded-full flex items-center gap-2 hover:bg-blue-800 transition duration-300'>
            Explore Internships
            <span className='text-lg'>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
