"use client";
import React, { useState, FormEvent } from 'react';

const StudentInternshipActivityLog: React.FC = () => {
  const [studentInternName, setStudentInternName] = useState<string>('');
  const [studentId, setStudentId] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [hostInstitution, setHostInstitution] = useState<string>('');
  const [siteSupervisor, setSiteSupervisor] = useState<string>('');
  const [facultySupervisor, setFacultySupervisor] = useState<string>('');
  const [completionDate, setCompletionDate] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>(Array(8).fill('')); // Array to hold tasks for each week

  // Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const logObj = {
      studentInternName,
      studentId,
      department,
      hostInstitution,
      siteSupervisor,
      facultySupervisor,
      completionDate,
      tasks,
    };
    console.log(logObj);

    // Alert for successful submission (mock functionality)
    alert('Activity Log Submitted Successfully!');

    // Reset form fields
    setStudentInternName('');
    setStudentId('');
    setDepartment('');
    setHostInstitution('');
    setSiteSupervisor('');
    setFacultySupervisor('');
    setCompletionDate('');
    setTasks(Array(8).fill(''));
  };

  const handleTaskChange = (index: number, value: string) => {
    const newTasks = [...tasks];
    newTasks[index] = value;
    setTasks(newTasks);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Student Internship Activity Log</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Student Intern Name */}
            <div>
              <label htmlFor="studentInternName" className="block mb-2 text-base sm:text-lg font-medium">
                Student Intern Name
              </label>
              <input
                id="studentInternName"
                type="text"
                value={studentInternName}
                onChange={(e) => setStudentInternName(e.target.value)}
                placeholder="Enter Student Intern Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Student ID & Dept. */}
            <div>
              <label htmlFor="studentId" className="block mb-2 text-base sm:text-lg font-medium">
                Student ID
              </label>
              <input
                id="studentId"
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="Enter Student ID"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block mb-2 text-base sm:text-lg font-medium">
                Department
              </label>
              <input
                id="department"
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Enter Department"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Host Institution */}
            <div>
              <label htmlFor="hostInstitution" className="block mb-2 text-base sm:text-lg font-medium">
                Host Institution
              </label>
              <input
                id="hostInstitution"
                type="text"
                value={hostInstitution}
                onChange={(e) => setHostInstitution(e.target.value)}
                placeholder="Enter Host Institution"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Site Supervisor */}
            <div>
              <label htmlFor="siteSupervisor" className="block mb-2 text-base sm:text-lg font-medium">
                Site Supervisor
              </label>
              <input
                id="siteSupervisor"
                type="text"
                value={siteSupervisor}
                onChange={(e) => setSiteSupervisor(e.target.value)}
                placeholder="Enter Site Supervisor"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Faculty Supervisor */}
            <div>
              <label htmlFor="facultySupervisor" className="block mb-2 text-base sm:text-lg font-medium">
                Faculty Supervisor
              </label>
              <input
                id="facultySupervisor"
                type="text"
                value={facultySupervisor}
                onChange={(e) => setFacultySupervisor(e.target.value)}
                placeholder="Enter Faculty Supervisor"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Internship Completion Date */}
            <div>
              <label htmlFor="completionDate" className="block mb-2 text-base sm:text-lg font-medium">
                Internship Completion Date
              </label>
              <input
                id="completionDate"
                type="date"
                value={completionDate}
                onChange={(e) => setCompletionDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Activity Log Table */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Activity Log</h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Week</th>
                  <th className="border border-gray-300 px-4 py-2">Tasks Performed</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 8 }, (_, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">Week {index + 1}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <textarea
                        value={tasks[index]}
                        onChange={(e) => handleTaskChange(index, e.target.value)}
                        placeholder="Enter tasks performed"
                        rows={3}
                        className="w-full px-2 py-1 border border-gray-300 rounded-md text-black resize-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full sm:w-1/3 py-2 px-4 bg-[#112d60] text-white rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentInternshipActivityLog;
