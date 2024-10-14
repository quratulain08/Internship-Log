"use client";
import React, { useState } from 'react';
import { HiDocumentReport, HiViewList, HiChartBar, HiEye, HiLogout, HiMenu, HiX } from 'react-icons/hi';
import Layout from '../components/Layout';

// Import the components that were previously pages
import GetProjectIntentionByFaculty from '../components/GetData/GetProjectIntentionByFaculty';
import GetPostedInternship from '../components/GetData/GetPostedInternship';
import GetStudentInternshipApproval from '../components/GetData/GetStudentInternshipApproval';
import GetFacultyEvaluationForm from '../components/GetData/GetFacultyEvaluationForm';

const DICSidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [activeComponent, setActiveComponent] = useState<string>(''); // Track the active component
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(true);

  const handleLogout = () => {
    console.log('Logging out...');
    // Handle logout logic
  };

  const handleNavigation = (componentName: string) => {
    setShowWelcomeMessage(false); // Hide welcome message
    setActiveComponent(componentName); // Set the active component
  };

  // Conditionally render the selected component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'GetProjectIntentionByFaculty':
        return <GetProjectIntentionByFaculty />;
      case 'GetPostedInternship':
        return <GetPostedInternship />;
      case 'GetStudentInternshipApproval':
        return <GetStudentInternshipApproval />;
      case 'GetFacultyEvaluationForm':
        return <GetFacultyEvaluationForm />;
      default:
        return null; // Show nothing if no component is selected
    }
  };

  return (
  
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-[#112d60] text-white p-4 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <div className="flex flex-col items-start mt-12 mb-6"> {/* Adjusted margin-top */}
            <div className="text-2xl font-bold text-white">Departmental Internship Coordinator</div>
          </div>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleNavigation('GetProjectIntentionByFaculty')} 
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiDocumentReport className="mr-3 text-xl" />
                <span>Intention Forms by Faculty</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('GetPostedInternship')} 
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiViewList className="mr-3 text-xl" />
                <span>Available Internships</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('GetStudentInternshipApproval')} 
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiChartBar className="mr-3 text-xl" />
                <span>Share Consolidated Report</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('GetFacultyEvaluationForm')} 
                className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
              >
                <HiEye className="mr-3 text-xl" />
                <span>View Faculty Supervisor Evaluation Form</span>
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
                <h1 className="font-serif">Welcome to the Departmental Internship Coordinator Portal</h1>
                <p>Select an option from the sidebar to get started.</p>
              </div>
            </div>
          )}
          {/* Render the selected component */}
          {!showWelcomeMessage && renderComponent()}
        </div>
      </div>
    
  );
};

export default DICSidebar;
