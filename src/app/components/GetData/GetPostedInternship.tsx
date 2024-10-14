"use client";
import React from 'react';

// Define the interface for the internship data
interface Internship {
  hostInstitution: string;
  siteSupervisor: string;
  projectDescription: string;
  availableInternships: string;
  internshipType: 'Onsite' | 'Oncampus';
  joiningDate: string;
  emailHostInstitution: string;
}

// Example dummy data for internships
const dummyInternships: Internship[] = [
  {
    hostInstitution: 'Tech University',
    siteSupervisor: 'Ms. Johnson',
    projectDescription: 'AI Research Project focusing on neural networks and deep learning.',
    availableInternships: '5',
    internshipType: 'Oncampus',
    joiningDate: '2024-09-01',
    emailHostInstitution: 'contact@techuniversity.edu',
  },
  {
    hostInstitution: 'Engineering Corp',
    siteSupervisor: 'Mr. Lee',
    projectDescription: 'Robotics Development including autonomous systems and machine learning.',
    availableInternships: '3',
    internshipType: 'Onsite',
    joiningDate: '2024-10-01',
    emailHostInstitution: 'info@engineeringcorp.com',
  },
];

const InternshipList: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7] p-4">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-lg max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Available Internships</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyInternships.map((internship, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{internship.hostInstitution}</h3>
                <p className="text-sm text-gray-600 mb-2"><strong>Site Supervisor:</strong> {internship.siteSupervisor}</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Project Description:</strong> {internship.projectDescription}</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Available Internships:</strong> {internship.availableInternships}</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Internship Type:</strong> {internship.internshipType}</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Joining Date:</strong> {internship.joiningDate}</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Email of Host Institution:</strong> {internship.emailHostInstitution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipList;