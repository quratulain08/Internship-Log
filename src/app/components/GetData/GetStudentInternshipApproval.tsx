"use client";
import React from 'react';

interface InternshipApprovalData {
  projectId: string;
  studentName: string;
  internshipType: string;
  studentId: string;
  department: string;
  projectTitle: string;
  facultySupervisor: string;
  hostInstitution: string;
  siteSupervisor: string;
  cv: string; // File name or status
  email: string;
}

// Example dummy data for multiple entries
const dummyDataList: InternshipApprovalData[] = [
  {
    projectId: '12345',
    studentName: 'John Doe',
    internshipType: 'On campus',
    studentId: 'S123456',
    department: 'Computer Science',
    projectTitle: 'AI Research',
    facultySupervisor: 'Dr. Smith',
    hostInstitution: 'Tech University',
    siteSupervisor: 'Ms. Johnson',
    cv: 'john_doe_cv.pdf',
    email: 'john.doe@example.com',
  },
  {
    projectId: '67890',
    studentName: 'Jane Smith',
    internshipType: 'On site',
    studentId: 'S654321',
    department: 'Mechanical Engineering',
    projectTitle: 'Robotics Development',
    facultySupervisor: 'Dr. Brown',
    hostInstitution: 'Engineering Corp',
    siteSupervisor: 'Mr. Lee',
    cv: 'jane_smith_cv.pdf',
    email: 'jane.smith@example.com',
  },
];

const SubmittedApprovalData: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7] p-4">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-lg max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Submitted Internship Approval Data</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project ID</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Internship Type</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Title</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Faculty Supervisor</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Host Institution</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Site Supervisor</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CV</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email Address</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dummyDataList.map((data, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 whitespace-nowrap">{data.projectId}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{data.studentName}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{data.internshipType}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{data.studentId}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{data.department}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{data.projectTitle}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{data.facultySupervisor}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{data.hostInstitution}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{data.siteSupervisor}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{data.cv}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{data.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubmittedApprovalData;
