"use client";
import React, { useState } from 'react';
import { HiPlus, HiViewList, HiDocumentReport, HiMenu, HiX } from 'react-icons/hi';
import PostInternship from '../components/Forms/PostInternship'; // Adjust the import path if necessary
import GetPostedInternship from '../components/GetData/GetPostedInternship'; // Adjust the import path if necessary
import GetStudentInternshipApproval from '../components/GetData/GetStudentInternshipApproval'; // Adjust the import path if necessary
import Layout from '../components/Layout';

const AUPPlacementSidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [activeComponent, setActiveComponent] = useState<string>(''); // State to manage the active component
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(true);

  const handleNavigation = (component: string) => {
    setShowWelcomeMessage(false);
    setActiveComponent(component); // Set the active component based on the button clicked
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'PostInternship':
        return <PostInternship />;
      case 'GetPostedInternship':
        return <GetPostedInternship />;
      case 'GetStudentInternshipApproval':
        return <GetStudentInternshipApproval />;
      default:
        return null; // Default to null if no component is selected
    }
  };

  return (

      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-[#112d60] text-white p-4 transition-transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
        >
          <div className="flex flex-col items-start mt-12 mb-6"> {/* Adjusted margin-top */}
            <div className="text-2xl font-bold text-white">AU Placement Office</div>
          </div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleNavigation('PostInternship')}
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiPlus className="mr-3 text-xl" />
                <span>List New Internships</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('GetPostedInternship')}
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiViewList className="mr-3 text-xl" />
                <span>View Listed Internships</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('GetStudentInternshipApproval')}
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiDocumentReport className="mr-3 text-xl" />
                <span>View Consolidated Report</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Sidebar Toggle Button (visible on small screens) */}
        <button
          className="fixed top-4 right-4 z-50 md:hidden bg-gray-200 p-2 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
        </button>

        {/* Main Content */}
        <div className={`flex-1 p-4 transition-transform ${isSidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
          {showWelcomeMessage && (
            <div className="flex justify-center items-center h-full">
              <div className="p-4 w-full max-w-4xl text-center text-xl text-[#112d60]">
                <h1 className="font-serif">Welcome to the AU Placement Office</h1>
                <p>Select an option from the sidebar to get started.</p>
              </div>
            </div>
          )}
          
          {/* Render the active component based on selection */}
          {!showWelcomeMessage && renderActiveComponent()}
        </div>
      </div>
   
  );
};

export default AUPPlacementSidebar;
