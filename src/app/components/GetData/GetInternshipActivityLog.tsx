"use client";
import React, { useState } from 'react';

interface ActivityLog {
  studentInternName: string;
  studentId: string;
  department: string;
  hostInstitution: string;
  siteSupervisor: string;
  facultySupervisor: string;
  completionDate: string;
  tasks: string[];
}

const dummyActivityData: ActivityLog[] = [
  {
    studentInternName: 'Alice Johnson',
    studentId: 'S12345',
    department: 'Computer Science',
    hostInstitution: 'Tech Corp',
    siteSupervisor: 'John Smith',
    facultySupervisor: 'Dr. Emily Davis',
    completionDate: '2024-01-15',
    tasks: [
      'Developed a new feature for the app.',
      'Fixed bugs in the existing codebase.',
      'Conducted user testing and gathered feedback.',
      'Reviewed code and provided feedback to peers.',
      'Attended team meetings and discussed project progress.',
      'Prepared documentation for the feature developed.',
      'Collaborated with the design team to improve UI.',
      'Deployed the updated app to the staging environment.'
    ]
  },
  {
    studentInternName: 'Bob Brown',
    studentId: 'S67890',
    department: 'Mechanical Engineering',
    hostInstitution: 'Engineering Solutions Inc.',
    siteSupervisor: 'Mary Johnson',
    facultySupervisor: 'Dr. William Clark',
    completionDate: '2024-01-15',
    tasks: [
      'Worked on a design project and created prototypes.',
      'Conducted material testing and analysis.',
      'Participated in project planning meetings.',
      'Developed CAD models and simulations.',
      'Reviewed design specifications and requirements.',
      'Assisted in the assembly of prototype models.',
      'Prepared project reports and presentations.',
      'Collaborated with the engineering team to refine designs.'
    ]
  },
  // Add more dummy data as needed
];

const GetInternshipActivityLog: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<ActivityLog | null>(null);

  const handleStudentClick = (student: ActivityLog) => {
    setSelectedStudent(student);
  };

  const handleCloseDetails = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f7f7f7] p-6">
      <div className="bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-md max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Internship Activity Log Overview</h2>
        <div className="p-4">
          {dummyActivityData.map((student, index) => (
            <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{student.studentInternName}</h3>
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
              <h3 className="text-2xl font-bold mb-4">{selectedStudent.studentInternName}</h3>
              <p><strong>Student ID:</strong> {selectedStudent.studentId}</p>
              <p><strong>Department:</strong> {selectedStudent.department}</p>
              <p><strong>Host Institution:</strong> {selectedStudent.hostInstitution}</p>
              <p><strong>Site Supervisor:</strong> {selectedStudent.siteSupervisor}</p>
              <p><strong>Faculty Supervisor:</strong> {selectedStudent.facultySupervisor}</p>
              <p><strong>Completion Date:</strong> {selectedStudent.completionDate}</p>

              <h4 className="text-lg font-semibold mt-4">Activity Log</h4>
              <table className="w-full border-collapse border border-gray-300 mt-2">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Week</th>
                    <th className="border border-gray-300 px-4 py-2">Tasks Performed</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedStudent.tasks.map((task, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">Week {index + 1}</td>
                      <td className="border border-gray-300 px-4 py-2">{task}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default GetInternshipActivityLog;
