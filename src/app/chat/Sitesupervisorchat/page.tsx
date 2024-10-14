"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { HiArrowLeft, HiPaperAirplane } from 'react-icons/hi';

// Mock student list
const students = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
];

// Mock messages by student ID
const mockMessages: Record<string, Array<{ id: number; student: string; message: string }>> = {
  '1': [
    { id: 1, student: 'John Doe', message: 'Hi, I have a question about my internship progress.' },
    { id: 2, student: 'Site Supervisor', message: 'Sure, what would you like to know?' },
  ],
  '2': [
    { id: 3, student: 'Jane Smith', message: 'Can you provide feedback on my recent activity log?' },
    { id: 4, student: 'Site Supervisor', message: 'I will review it and get back to you.' },
  ],
};

const SiteSupervisorChat: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{ id: number; student: string; message: string }>>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleStudentClick = (studentId: string) => {
    setSelectedStudent(studentId);
    setMessages(mockMessages[studentId] || []);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedStudent) {
      setMessages(prevMessages => [
        ...prevMessages,
        { id: prevMessages.length + 1, student: 'Site Supervisor', message: newMessage }
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#f7f7f7]">
      {/* Header */}
      <div className="bg-[#112d60] text-white p-4 flex items-center shadow-md">
        <Link href="/SiteSupervisor" className="text-white mr-4">
          <HiArrowLeft className="text-xl" />
        </Link>
        <h1 className="text-2xl font-bold">Chat with Students</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Student List */}
        <div className="w-1/5 p-4 border-r border-gray-300 bg-[#112d60] text-white">
          <h2 className="text-xl font-bold mb-4">Student List</h2>
          <ul>
            {students.map(student => (
              <li key={student.id} className="mb-2">
                <button
                  onClick={() => handleStudentClick(student.id)}
                  className={`block p-2 text-blue-200 hover:bg-blue-900 rounded ${selectedStudent === student.id ? 'font-bold' : ''}`}
                >
                  {student.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedStudent ? (
            <>
              <div className="flex-1 p-4 overflow-auto bg-gray-100">
                <div className="bg-white p-4 rounded-lg shadow-lg max-h-[500px]">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`mb-2 ${msg.student === 'Site Supervisor' ? 'text-right' : ''}`}>
                      <div className={`p-3 rounded-lg ${msg.student === 'Site Supervisor' ? 'bg-[#112d60] text-white' : 'bg-gray-200'}`}>
                        <strong>{msg.student}:</strong> {msg.message}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 flex items-center border-t border-gray-300 shadow-inner rounded-b-lg">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="ml-2 p-2 bg-[#112d60] text-white rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out text-sm"
                >
                  <HiPaperAirplane className="text-lg" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select a student to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SiteSupervisorChat;
