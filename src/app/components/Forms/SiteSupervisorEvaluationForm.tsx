"use client";
import React, { useState, FormEvent } from 'react';

const SiteSupervisorEvaluationForm: React.FC = () => {
  const [siteSupervisor, setSiteSupervisor] = useState<string>('');
  const [designation, setDesignation] = useState<string>('');
  const [hostInstitution, setHostInstitution] = useState<string>('');
  const [studentInternName, setStudentInternName] = useState<string>('');
  const [studentProgram, setStudentProgram] = useState<string>('');
  const [semester, setSemester] = useState<string>('');
  const [startingDate, setStartingDate] = useState<string>('');
  const [endingDate, setEndingDate] = useState<string>('');
  const [internshipDuration, setInternshipDuration] = useState<string>('');

  const [performanceRatings, setPerformanceRatings] = useState<{ [key: number]: number }>({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
  });

  // Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const evaluationObj = {
      siteSupervisor,
      designation,
      hostInstitution,
      studentInternName,
      studentProgram,
      semester,
      startingDate,
      endingDate,
      internshipDuration,
      performanceRatings,
    };
    console.log(evaluationObj);

    // Alert for successful submission (mock functionality)
    alert('Evaluation Submitted Successfully!');

    // Reset form fields
    setSiteSupervisor('');
    setDesignation('');
    setHostInstitution('');
    setStudentInternName('');
    setStudentProgram('');
    setSemester('');
    setStartingDate('');
    setEndingDate('');
    setInternshipDuration('');
    setPerformanceRatings({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  };

  const handleRatingChange = (questionNumber: number, rating: number) => {
    setPerformanceRatings((prevRatings) => ({
      ...prevRatings,
      [questionNumber]: rating,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Site Supervisor Evaluation Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                placeholder="Enter Site Supervisor Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Designation */}
            <div>
              <label htmlFor="designation" className="block mb-2 text-base sm:text-lg font-medium">
                Designation
              </label>
              <input
                id="designation"
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="Enter Designation"
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

            {/* Student Program */}
            <div>
              <label htmlFor="studentProgram" className="block mb-2 text-base sm:text-lg font-medium">
                Student Program
              </label>
              <input
                id="studentProgram"
                type="text"
                value={studentProgram}
                onChange={(e) => setStudentProgram(e.target.value)}
                placeholder="Enter Student Program"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Semester */}
            <div>
              <label htmlFor="semester" className="block mb-2 text-base sm:text-lg font-medium">
                Semester
              </label>
              <input
                id="semester"
                type="text"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                placeholder="Enter Semester"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Starting Date */}
            <div>
              <label htmlFor="startingDate" className="block mb-2 text-base sm:text-lg font-medium">
                Starting Date of Internship
              </label>
              <input
                id="startingDate"
                type="date"
                value={startingDate}
                onChange={(e) => setStartingDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Ending Date */}
            <div>
              <label htmlFor="endingDate" className="block mb-2 text-base sm:text-lg font-medium">
                Ending Date of Internship
              </label>
              <input
                id="endingDate"
                type="date"
                value={endingDate}
                onChange={(e) => setEndingDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Internship Duration */}
            <div>
              <label htmlFor="internshipDuration" className="block mb-2 text-base sm:text-lg font-medium">
                Internship Duration (Circle any one)
              </label>
              <select
                id="internshipDuration"
                value={internshipDuration}
                onChange={(e) => setInternshipDuration(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Select Duration</option>
                <option value="6 Weeks">6 Weeks</option>
                <option value="8 Weeks">8 Weeks</option>
              </select>
            </div>
          </div>

          {/* Key */}
          <div className="mt-6 mb-4">
            <p className="text-lg font-semibold">Key</p>
            <ul className="list-disc pl-5">
              <li>1 = Does not meet expectations</li>
              <li>2 = Inconsistently meets expectations</li>
              <li>3 = Consistently Meets expectations</li>
              <li>4 = Above Expectations</li>
              <li>5 = Far above expectations</li>
            </ul>
          </div>

          {/* Performance Evaluation Table */}
          <div>
            <p className="text-lg font-semibold mb-2">Circle the number that best describes the Student Intern’s Performance</p>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Criteria</th>
                  <th className="border border-gray-300 px-4 py-2">1</th>
                  <th className="border border-gray-300 px-4 py-2">2</th>
                  <th className="border border-gray-300 px-4 py-2">3</th>
                  <th className="border border-gray-300 px-4 py-2">4</th>
                  <th className="border border-gray-300 px-4 py-2">5</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Arrives to work on time / Available online as per schedule',
                  'Demonstrates respect for organizational staff, policies, and norms',
                  'Shows requisite understanding and ability to learn about organizational work',
                  'Exhibits necessary skills required at the workplace',
                  'Conducts self professionally in all work-related scenarios',
                  'Takes initiative and seeks opportunities to make contributions',
                  'Completes tasks and reports to supervisor on time',
                  'Demonstrates the ability to work with others in a team',
                  'Proves to be Reliable and Dependable',
                ].map((criteria, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{criteria}</td>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <td key={num} className="border border-gray-300 px-2 py-1 text-center">
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={num}
                          checked={performanceRatings[index + 1] === num}
                          onChange={() => handleRatingChange(index + 1, num)}
                          className="form-radio text-indigo-600"
                        />
                      </td>
                    ))}
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

export default SiteSupervisorEvaluationForm;
