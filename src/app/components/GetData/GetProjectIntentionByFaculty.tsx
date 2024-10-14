"use client";
import React, { useState } from 'react';

// Dummy data to simulate fetching multiple projects
const dummyProjects = [
  {
    projectId: 'P001',
    facultyName: 'Dr. Jane Doe',
    department: 'Computer Science',
    degreeProgram: 'Bachelor of Science in Computer Science',
    projectTitle: 'AI-Based Predictive Analytics',
    description: 'A project focusing on developing AI algorithms to predict future trends based on historical data.',
    facultySignature: 'Dr. Jane Doe'
  },
  {
    projectId: 'P002',
    facultyName: 'Dr. John Smith',
    department: 'Electrical Engineering',
    degreeProgram: 'Master of Science in Electrical Engineering',
    projectTitle: 'Smart Grid Technology',
    description: 'Research on enhancing the efficiency of power distribution using smart grid technology.',
    facultySignature: 'Dr. John Smith'
  },
  // Add more projects as needed
];

const GetProjectIntentionByFaculty: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [status, setStatus] = useState<string | null>(null); // 'approved' | 'declined' | null
  const [reason, setReason] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean>(false); // Track if the reason has been sent

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setStatus(null);
    setReason('');
    setIsSent(false);
  };

  const handleApprove = () => {
    setStatus('approved');
  };

  const handleDecline = () => {
    setStatus('declined');
  };

  const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReason(e.target.value);
  };

  const handleSend = () => {
    // Logic to handle sending the reason
    console.log('Sending reason:', reason);
    // Here you would normally send the data to a server or handle it as needed

    // Update state to show that the reason has been sent
    setIsSent(true);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        {!selectedProject ? (
          <>
            <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Project/Internship Intention List</h2>
            <div className="flex flex-col gap-4">
              {dummyProjects.map((project) => (
                <div key={project.projectId} className="p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-100">
                  <h3 className="text-lg font-semibold">{project.projectTitle}</h3>
                  <button
                onClick={() => handleProjectClick(project)}
                className="mt-2 text-blue-600 hover:underline"
              >
                View Details
              </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Project Details</h2>
            <div className="flex flex-col gap-4">
              {/* Display project information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Project ID</h3>
                  <p>{selectedProject.projectId}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Name of Faculty Member</h3>
                  <p>{selectedProject.facultyName}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Department</h3>
                  <p>{selectedProject.department}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Targeted Degree Program</h3>
                  <p>{selectedProject.degreeProgram}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Project Title</h3>
                  <p>{selectedProject.projectTitle}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Faculty Signature</h3>
                  <p>{selectedProject.facultySignature}</p>
                </div>
              </div>

              {/* Display project description */}
              <div>
                <h3 className="text-lg font-semibold">Description</h3>
                <p>{selectedProject.description}</p>
              </div>

              {/* Approval/Decline Section */}
              <div className="mt-6">
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={handleApprove}
                    className="py-2 px-4 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Approve
                  </button>
                  <button
                    onClick={handleDecline}
                    className="py-2 px-4 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Decline
                  </button>
                </div>

                {status && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">Reason for {status === 'approved' ? 'Approval' : 'Decline'}</h3>
                    <textarea
                      value={reason}
                      onChange={handleReasonChange}
                      placeholder={`Provide the reason for ${status === 'approved' ? 'approval' : 'decline'}...`}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                )}

                {/* Send Button */}
                {status && (
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={handleSend}
                      className="py-2 px-4 bg-[#112d60] text-white rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Send
                    </button>
                  </div>
                )}

                {isSent && (
                  <div className="mt-4 text-center text-green-600">
                    <p>Reason has been sent successfully!</p>
                  </div>
                )}

                {/* Back Button */}
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handleBack}
                    className="py-2 px-4 bg-[#112d60] text-white rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Back to List
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GetProjectIntentionByFaculty;
