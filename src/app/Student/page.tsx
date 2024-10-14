"use client";
import React, { useState } from 'react';
import { HiPlus, HiViewList, HiDocumentReport, HiEye, HiLogout, HiMenu, HiX, HiChat, HiMail } from 'react-icons/hi';
import Layout from '../components/Layout'; // Ensure the Layout component is imported
import EligiblityCriteria from '../components/EligiblityCriteria';
import GetPostedInternship from '../components/GetData/GetPostedInternship';
import StudentInternshipApprovalForm from '../components/Forms/StudentInternshipApprovalForm';
import ApplicationForRecommendationLetter from '../components/Forms/ApplicationForRecommendationLetter';
import StudentInternshipProgressForm from '../components/Forms/StudentInternshipProgessForm';
import StudentInternshipActivityLog from '../components/Forms/StudentInternshipActivityLog';


const StudentSidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); 
  const [activeComponent, setActiveComponent] = useState<JSX.Element | null>(null); // State for the active component
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(true);

  const handleLogout = () => {
    console.log('Logging out...');
    setActiveComponent(null); // Clear the active component on logout
  };

  const handleNavigation = (component: JSX.Element) => {
    setShowWelcomeMessage(false); // Hide welcome message when a component is active
    setActiveComponent(component); // Set the selected component to be rendered
  };

  return (
    
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-[#112d60] text-white p-4 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <div className="flex flex-col items-start mt-12 mb-6"> {/* Adjusted margin-top */}
            <div className="text-2xl font-bold text-white">Student Portal</div>
          </div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleNavigation(<GetPostedInternship />)} // Render the GetPostedInternship component
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiEye className="mr-3 text-xl" />
                <span>View Posted Internships</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation(<StudentInternshipApprovalForm />)} // Render the StudentInternshipApprovalForm component
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiPlus className="mr-3 text-xl" />
                <span>Student Internship Approval Form</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation(<ApplicationForRecommendationLetter />)} // Render the ApplicationForRecommendationLetter component
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiMail className="mr-3 text-xl" />
                <span>Application for Recommendation Letter</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation(<StudentInternshipProgressForm />)} // Render the StudentInternshipProgressForm component
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiDocumentReport className="mr-3 text-xl" />
                <span>Student Internship Progress Form</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation(<StudentInternshipActivityLog />)} // Render the StudentInternshipActivityLog component
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiViewList className="mr-3 text-xl" />
                <span>Student Internship Activity Log</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation(<div>Chat</div>)} 
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiChat className="mr-3 text-xl" />
                <span>Chat With Supervisors</span>
              </button>
            </li>
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
          {showWelcomeMessage ? (
            <div className="flex justify-center items-center h-full">
              <div className="p-4 w-full max-w-4xl text-center text-xl text-[#112d60]">
                <h1 className="font-serif">Welcome to the Student Portal</h1>
                <p>Select an option from the sidebar to get started.</p>
                <EligiblityCriteria />
              </div>
            </div>
          ) : (
            <div>{activeComponent}</div> // Render the active component
          )}
        </div>
      </div>

  );
};

export default StudentSidebar;
