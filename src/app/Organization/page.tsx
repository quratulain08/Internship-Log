"use client";
import React, { useState } from 'react';
import { HiDocumentReport, HiViewList, HiChartBar, HiLogout, HiMenu, HiX } from 'react-icons/hi';
import Layout from '../components/Layout';
//import ViewAllStudents from '../components/ViewAllStudents'; // Import ViewAllStudents component
import PostInternship from '../components/Forms/PostInternship'; // Import PostInternship component
//import StudentsProgress from '../components/StudentsProgress'; // Import StudentsProgress component

const OrganizationSidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [activeComponent, setActiveComponent] = useState<string>(''); // Keep track of active component
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(true);

  const handleLogout = () => {
    console.log('Logging out...');
    // Logic to handle logout
  };

  const handleNavigation = (component: string) => {
    setActiveComponent(component); // Update active component
    setShowWelcomeMessage(false); // Hide welcome message
  };

  return (

      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-[#112d60] text-white p-4 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <div className="flex flex-col items-start mt-12 mb-6">
            <div className="text-2xl font-bold text-white">Organization</div>
          </div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleNavigation('ViewAllStudents')}
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiViewList className="mr-3 text-xl" />
                <span>View All Students</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('PostInternship')}
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiDocumentReport className="mr-3 text-xl" />
                <span>Post an Internship</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('StudentsProgress')}
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiChartBar className="mr-3 text-xl" />
                <span>Students Progress</span>
              </button>
            </li>
            {/* Logout Button */}
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiLogout className="mr-3 text-xl" />
                <span>Logout</span>
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
                <h1 className="font-serif">Welcome to the Organization Portal</h1>
                <p>Select an option from the sidebar to get started.</p>
              </div>
            </div>
          )}
          {/* Conditionally render the selected component */}
       {/* {activeComponent === 'ViewAllStudents' && <ViewAllStudents />}  */}  
          {activeComponent === 'PostInternship' && <PostInternship />}
        {/*  {activeComponent === 'StudentsProgress' && <StudentsProgress />}*/} 
        </div>
      </div>
   
  );
};

export default OrganizationSidebar;
