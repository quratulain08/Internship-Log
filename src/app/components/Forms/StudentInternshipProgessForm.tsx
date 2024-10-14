"use client";
import React, { useState, FormEvent } from 'react';

const StudentInternshipProgressForm: React.FC = () => {
  const [studentName, setStudentName] = useState<string>('');
  const [studentId, setStudentId] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [hostInstitution, setHostInstitution] = useState<string>('');
  const [siteSupervisor, setSiteSupervisor] = useState<string>('');
  const [facultySupervisor, setFacultySupervisor] = useState<string>('');
  const [reportingPeriod, setReportingPeriod] = useState<string>('');
  const [progressReportNumber, setProgressReportNumber] = useState<string>('2nd');
  const [tasksAssigned, setTasksAssigned] = useState<string>('');
  const [learningExperience, setLearningExperience] = useState<string>('');
  const [limitationsChallenges, setLimitationsChallenges] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const progressObj = {
      studentId,
      facultySupervisorId: facultySupervisor,
      siteSupervisor,
      hostInstitution,
      reportingPeriod,
      progressReportNumber,
      tasksAssigned,
      learningExperience,
      limitationsChallenges,
    };

    try {
      const response = await fetch('/api/internship-progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(progressObj),
      });

      if (response.ok) {
        alert('Internship Progress Submitted Successfully!');
        // Reset form fields
        setStudentName('');
        setStudentId('');
        setDepartment('');
        setHostInstitution('');
        setSiteSupervisor('');
        setFacultySupervisor('');
        setReportingPeriod('');
        setProgressReportNumber('2nd');
        setTasksAssigned('');
        setLearningExperience('');
        setLimitationsChallenges('');
      } else {
        const data = await response.json();
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error submitting progress:', error);
      alert('Failed to submit progress. Please try again.');
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Student Internship Progress Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Student Name */}
            <div>
              <label htmlFor="studentName" className="block mb-2 text-base sm:text-lg font-medium">
                Student Name
              </label>
              <input
                id="studentName"
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter Student Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Student ID */}
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

            {/* Reporting Period */}
            <div>
              <label htmlFor="reportingPeriod" className="block mb-2 text-base sm:text-lg font-medium">
                Reporting Period
              </label>
              <input
                id="reportingPeriod"
                type="text"
                value={reportingPeriod}
                onChange={(e) => setReportingPeriod(e.target.value)}
                placeholder="Enter Reporting Period"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Progress Report Number */}
            <div>
              <label htmlFor="progressReportNumber" className="block mb-2 text-base sm:text-lg font-medium">
                Progress Report Number
              </label>
              <select
                id="progressReportNumber"
                value={progressReportNumber}
                onChange={(e) => setProgressReportNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="2nd">2nd</option>
                <option value="4th">4th</option>
                <option value="6th/8th">6th/8th</option>
              </select>
            </div>
          </div>

          {/* Tasks Assigned & Performed */}
          <div>
            <label htmlFor="tasksAssigned" className="block mb-2 text-base sm:text-lg font-medium">
              Tasks Assigned & Performed
            </label>
            <textarea
              id="tasksAssigned"
              value={tasksAssigned}
              onChange={(e) => setTasksAssigned(e.target.value)}
              placeholder="Describe the tasks assigned and performed"
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Learning Experience */}
          <div>
            <label htmlFor="learningExperience" className="block mb-2 text-base sm:text-lg font-medium">
              Learning Experience
            </label>
            <textarea
              id="learningExperience"
              value={learningExperience}
              onChange={(e) => setLearningExperience(e.target.value)}
              placeholder="Describe the skills and knowledge gained during the internship"
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Limitations & Challenges */}
          <div>
            <label htmlFor="limitationsChallenges" className="block mb-2 text-base sm:text-lg font-medium">
              Limitations & Challenges
            </label>
            <textarea
              id="limitationsChallenges"
              value={limitationsChallenges}
              onChange={(e) => setLimitationsChallenges(e.target.value)}
              placeholder="Describe any challenges, limitations, and obstacles faced"
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
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

export default StudentInternshipProgressForm;
