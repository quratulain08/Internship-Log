"use client";
import React, { useState } from 'react';
import { HiEye, HiChat, HiLogout, HiMenu, HiX, HiUser } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import SiteSupervisor from '../components/Profile/SiteSupervisor';
import GetSiteSupervisorProfile from '../components/Profile/GetSiteSupervisorProfile';
import SiteSupervisorEvaluationForm from '../components/Forms/SiteSupervisorEvaluationForm'; // Import your form component

const SiteSupervisorSidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(true);
  const [showEvaluationForm, setShowEvaluationForm] = useState<boolean>(false); // State to control form visibility
  const [showProfile, setShowProfile] = useState<boolean>(false); // State to control profile visibility

  const router = useRouter();

  const handleLogout = () => {
    console.log('Logging out...');
    router.push('/'); // Adjust this path to your logout or home page
  };

  const handleNavigation = (path: string) => {
    setShowWelcomeMessage(false);
    if (path === 'form') {
      setShowEvaluationForm(true);
      setShowProfile(false);
    } else if (path === 'profile') {
      setShowProfile(true);
      setShowEvaluationForm(false);
    } else {
      setShowEvaluationForm(false);
      setShowProfile(false);
      router.push(path);
    }
  };

  // Static data for site supervisor profile demonstration
  const profileData = {
    name: 'Jane Smith',
    cnic: '12345-1234567-8',
    qualification: 'Masters in Engineering',
    organization: 'ABC University',
    mobileNo: '0300-7654321',
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#112d60] text-white p-4 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="flex items-center mb-6">
          <div className="text-2xl font-bold text-white">Site Supervisor</div>
        </div>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleNavigation('form')}
              className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
            >
              <HiEye className="mr-3 text-xl" />
              <span>Submit Site Supervisor Evaluation Form</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('/chat/Sitesupervisorchat')}
              className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
            >
              <HiChat className="mr-3 text-xl" />
              <span>Chat With Students</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('profile')}
              className="flex items-center p-2 rounded hover:bg-blue-900 w-full text-left"
            >
              <HiUser className="mr-3 text-xl" />
              <span>Profile</span>
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
        {showWelcomeMessage && (
          <div className="flex justify-center items-center h-full">
            <div className="p-4 w-full max-w-4xl text-center text-xl text-[#112d60]">
              <h1 className="font-serif">Welcome to the Site Supervisor Portal</h1>
              <p>Select an option from the sidebar to get started.</p>
            </div>
          </div>
        )}

        {showEvaluationForm && <SiteSupervisorEvaluationForm />} {/* Render the evaluation form when needed */}
        {showProfile && <GetSiteSupervisorProfile profileData={profileData} />} {/* Pass the profile data as a prop */}
      </div>
    </div>
  );
};

export default SiteSupervisorSidebar;
