"use client";
import React, { useState } from 'react';

const dummyData = [
  {
    studentName: 'Alice Johnson',
    studentId: 'S12345',
    department: 'Computer Science',
    hostInstitution: 'Tech Corp',
    siteSupervisor: 'John Smith',
    facultySupervisor: 'Dr. Emily Davis',
    reportingPeriod: '2024-01-01 to 2024-01-15',
    progressReportNumber: '2nd',
    tasksAssigned: 'Developed a new feature for the app.',
    learningExperience: 'Gained experience in React and backend development.',
    limitationsChallenges: 'Faced challenges with integrating third-party APIs.',
  },
  {
    studentName: 'Bob Brown',
    studentId: 'S67890',
    department: 'Mechanical Engineering',
    hostInstitution: 'Engineering Solutions Inc.',
    siteSupervisor: 'Mary Johnson',
    facultySupervisor: 'Dr. William Clark',
    reportingPeriod: '2024-01-01 to 2024-01-15',
    progressReportNumber: '4th',
    tasksAssigned: 'Worked on a design project and created prototypes.',
    learningExperience: 'Improved skills in CAD software and project management.',
    limitationsChallenges: 'Had issues with material procurement.',
  },
  // Add more dummy data as needed
];

const GetStudentInternshipProgress: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const handleStudentClick = (student: any) => {
    setSelectedStudent(student);
  };

  const handleCloseDetails = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f7f7f7] p-6">
      <div className="bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-md max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Internship Progress Overview</h2>
        <div className="p-4">
          {dummyData.map((student, index) => (
            <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{student.studentName}</h3>
              <button
                onClick={() => handleStudentClick(student)}
                className="mt-2 text-blue-600 hover:underline"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {selectedStudent && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full overflow-y-auto" style={{ maxHeight: '80vh' }}>
              <button
                onClick={handleCloseDetails}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4">{selectedStudent.studentName}</h3>
              <p><strong>Student ID:</strong> {selectedStudent.studentId}</p>
              <p><strong>Department:</strong> {selectedStudent.department}</p>
              <p><strong>Host Institution:</strong> {selectedStudent.hostInstitution}</p>
              <p><strong>Site Supervisor:</strong> {selectedStudent.siteSupervisor}</p>
              <p><strong>Faculty Supervisor:</strong> {selectedStudent.facultySupervisor}</p>
              <p><strong>Reporting Period:</strong> {selectedStudent.reportingPeriod}</p>
              <p><strong>Progress Report Number:</strong> {selectedStudent.progressReportNumber}</p>
              <p><strong>Tasks Assigned & Performed:</strong> {selectedStudent.tasksAssigned}</p>
              <p><strong>Learning Experience:</strong> {selectedStudent.learningExperience}</p>
              <p><strong>Limitations & Challenges:</strong> {selectedStudent.limitationsChallenges}</p>
              <button
                onClick={handleCloseDetails}
                className="mt-4 w-full py-2 px-4 bg-[#112d60] text-white rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetStudentInternshipProgress;
