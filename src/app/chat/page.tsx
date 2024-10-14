"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { HiArrowLeft, HiChat } from 'react-icons/hi';

const ChatPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#112d60] text-white p-4 flex items-center shadow-md">
        <button
          onClick={() => router.back()}
          className="text-white mr-4"
        >
          <HiArrowLeft className="text-xl" />
        </button>
        <h1 className="text-2xl font-bold">Chat With Supervisors</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <ul className="space-y-4">
            <li>
              <button
                className="flex items-center p-4 rounded-lg bg-[#112d60] text-white hover:bg-blue-900 w-full text-left transition duration-300 ease-in-out"
                onClick={() => router.push('/chat/facultysupervisor-studentside')} 
              >
                <HiChat className="mr-3 text-xl" />
                <span className="text-lg font-semibold">Chat With Faculty Supervisor</span>
              </button>
            </li>
            <li>
              <button
                className="flex items-center p-4 rounded-lg bg-[#112d60] text-white hover:bg-blue-900 w-full text-left transition duration-300 ease-in-out"
                onClick={() => router.push('/chat/sitesupervisor-studentside')}
              >
                <HiChat className="mr-3 text-xl" />
                <span className="text-lg font-semibold">Chat With Site Supervisor</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
