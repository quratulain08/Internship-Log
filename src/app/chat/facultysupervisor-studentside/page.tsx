"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HiArrowLeft, HiPaperAirplane } from 'react-icons/hi';

// Mock messages
const mockMessages: Array<{ id: number; sender: string; message: string }> = [
  { id: 1, sender: 'Student', message: 'Hi, I need help with my project.' },
  { id: 2, sender: 'Faculty Supervisor', message: 'Sure, how can I assist you?' },
];

const FacultySupervisorChat: React.FC = () => {
  const router = useRouter();
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add the new message from the student
      setMessages(prevMessages => [
        ...prevMessages,
        { id: prevMessages.length + 1, sender: 'Student', message: newMessage }
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#f7f7f7]">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="bg-[#112d60] text-white p-4 flex items-center shadow-md rounded-t-lg">
          <button
            onClick={() => router.back()}
            className="text-white mr-4"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <h1 className="text-2xl font-bold">Chat with Faculty Supervisor</h1>
        </div>

        {/* Chat Area */}
        <div className="h-80 overflow-auto p-4 bg-gray-100">
          <div className="flex flex-col gap-2">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'Student' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-lg ${msg.sender === 'Student' ? 'bg-[#112d60] text-white' : 'bg-gray-200'}`}>
                  <strong>{msg.sender}:</strong> {msg.message}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
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
            className="ml-2 p-2 bg-[#112d60] text-white rounded-lg hover:bg-blue-900 transition duration-300 ease-in-out text-sm"
          >
            <HiPaperAirplane className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultySupervisorChat;
