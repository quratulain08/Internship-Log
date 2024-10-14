"use client";
import React, { useState } from 'react';

// Dummy data for site supervisor evaluations
const evaluations = [
  { id: '1', studentName: 'Alice Johnson', studentId: 'S123' },
  { id: '2', studentName: 'Bob Smith', studentId: 'S124' },
  { id: '3', studentName: 'Charlie Brown', studentId: 'S125' },
];

// Dummy data for evaluation details
const evaluationDetails: Record<string, {
  studentName: string;
  studentId: string;
  designation: string;
  hostInstitution: string;
  studentProgram: string;
  semester: string;
  startingDate: string;
  endingDate: string;
  duration: string;
  performance: {
    [key: string]: number;
  };
}> = {
  '1': {
    studentName: 'Alice Johnson',
    studentId: 'S123',
    designation: 'Junior Developer',
    hostInstitution: 'TechCorp',
    studentProgram: 'Computer Science',
    semester: '6',
    startingDate: '2024-01-10',
    endingDate: '2024-07-10',
    duration: '6 Weeks',
    performance: {
      '1': 5,
      '2': 4,
      '3': 5,
      '4': 4,
      '5': 5,
      '6': 4,
      '7': 5,
      '8': 5,
      '9': 4,
    },
  },
  '2': {
    studentName: 'Bob Smith',
    studentId: 'S124',
    designation: 'Intern',
    hostInstitution: 'InnoTech',
    studentProgram: 'Information Systems',
    semester: '4',
    startingDate: '2024-02-01',
    endingDate: '2024-08-01',
    duration: '8 Weeks',
    performance: {
      '1': 3,
      '2': 4,
      '3': 3,
      '4': 3,
      '5': 4,
      '6': 3,
      '7': 3,
      '8': 3,
      '9': 3,
    },
  },
  '3': {
    studentName: 'Charlie Brown',
    studentId: 'S125',
    designation: 'Software Engineer',
    hostInstitution: 'CodeWorks',
    studentProgram: 'Software Engineering',
    semester: '8',
    startingDate: '2024-03-01',
    endingDate: '2024-09-01',
    duration: '6 Weeks',
    performance: {
      '1': 5,
      '2': 5,
      '3': 5,
      '4': 5,
      '5': 5,
      '6': 5,
      '7': 5,
      '8': 5,
      '9': 5,
    },
  },
};

const criteria = [
  'Arrives to work on time / Available online as per schedule',
  'Demonstrates respect for organizational staff, policies, and norms',
  'Shows requisite understanding and ability to learn about organizational work',
  'Exhibits necessary skills required at the workplace',
  'Conducts self professionally in all work-related scenarios',
  'Takes initiative and seeks opportunities to make contributions',
  'Completes tasks and reports to supervisor on time',
  'Demonstrates the ability to work with others in a team',
  'Proves to be Reliable and Dependable'
];

const GetSiteSupervisorEvaluationForm: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setSelectedId(id);
  };

  const handleClose = () => {
    setSelectedId(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        {!selectedId ? (
          <>
            <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Site Supervisor Evaluations</h2>
            <div className="flex flex-col gap-4">
              {evaluations.map((evaluation) => (
                <div
                  key={evaluation.id}
                  className="p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
                  onClick={() => handleClick(evaluation.id)}
                >
                  <h3 className="text-lg font-semibold">{evaluation.studentName}</h3>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Evaluation Details</h2>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Student Name</h3>
                  <p>{evaluationDetails[selectedId].studentName}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Student ID</h3>
                  <p>{evaluationDetails[selectedId].studentId}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Designation</h3>
                  <p>{evaluationDetails[selectedId].designation}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Host Institution</h3>
                  <p>{evaluationDetails[selectedId].hostInstitution}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Student Program</h3>
                  <p>{evaluationDetails[selectedId].studentProgram}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Semester</h3>
                  <p>{evaluationDetails[selectedId].semester}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Starting Date</h3>
                  <p>{evaluationDetails[selectedId].startingDate}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Ending Date</h3>
                  <p>{evaluationDetails[selectedId].endingDate}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Internship Duration</h3>
                  <p>{evaluationDetails[selectedId].duration}</p>
                </div>
              </div>

              <div className="mt-6">
               

                <h3 className="text-lg font-semibold mt-6">Key</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>1 = Does not meet expectations</li>
                  <li>2 = Inconsistently meets expectations</li>
                  <li>3 = Consistently meets expectations</li>
                  <li>4 = Above Expectations</li>
                  <li>5 = Far above expectations</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold mt-6">Performance Scores</h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Criteria</th>
                    <th className="border px-4 py-2">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(evaluationDetails[selectedId].performance).map(([criteriaIndex, score]) => (
                    <tr key={criteriaIndex}>
                      <td className="border px-4 py-2">{criteria[parseInt(criteriaIndex) - 1]}</td>
                      <td className="border px-4 py-2 text-center">{score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Back Button */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleClose}
                  className="py-2 px-4 bg-[#112d60] text-white rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Back to List
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GetSiteSupervisorEvaluationForm;
