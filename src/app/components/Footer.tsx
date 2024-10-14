
import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-[#112d60] text-white pt-10">
      <div className="w-full px-4 lg:px-24">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Company Section */}
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>

          {/* Help Center Section */}
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Help Center</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full mt-6 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; 2024 Air University™. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <BsFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
