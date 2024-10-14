"use client";
import React, { useState, FormEvent } from 'react';

const FacultySupervisorEvaluationForm: React.FC = () => {
  const [studentId, setStudentId] = useState<string>('');
  const [studentName, setStudentName] = useState<string>('');
  const [tasksPerformed, setTasksPerformed] = useState<number | null>(null);
  const [learningExperience, setLearningExperience] = useState<number | null>(null);
  const [overcomingChallenges, setOvercomingChallenges] = useState<number | null>(null);
  const [comments, setComments] = useState<string>('');

  // Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const evaluation = {
      studentId,
      studentName,
      tasksPerformed,
      learningExperience,
      overcomingChallenges,
      comments,
    };
    console.log(evaluation);

    // Alert for successful submission (mock functionality)
    alert('Evaluation Submitted Successfully!');

    // Reset form fields
    setStudentId('');
    setStudentName('');
    setTasksPerformed(null);
    setLearningExperience(null);
    setOvercomingChallenges(null);
    setComments('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7f7f7] p-6">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Faculty Supervisor Evaluation Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Student Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          {/* Scoring Rubric Key */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-[#112d60]">Scoring Rubric</h3>
            <p className="text-sm mb-4 text-gray-600">Choose the number that best describes the Student Intern’s Performance:</p>
            <p className="text-sm mb-4 text-gray-600">
              <strong>1</strong> = Does not meet expectations &nbsp;|&nbsp; 
              <strong>2</strong> = Inconsistently meets expectations &nbsp;|&nbsp; 
              <strong>3</strong> = Consistently meets expectations &nbsp;|&nbsp; 
              <strong>4</strong> = Above Expectations &nbsp;|&nbsp; 
              <strong>5</strong> = Far above expectations
            </p>

            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-left">Criteria</th>
                  <th className="border-b px-4 py-2 text-center">1</th>
                  <th className="border-b px-4 py-2 text-center">2</th>
                  <th className="border-b px-4 py-2 text-center">3</th>
                  <th className="border-b px-4 py-2 text-center">4</th>
                  <th className="border-b px-4 py-2 text-center">5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b px-4 py-2">Tasks Performed</td>
                  {[1, 2, 3, 4, 5].map(num => (
                    <td key={num} className="border-b px-4 py-2 text-center">
                      <input
                        type="radio"
                        name="tasksPerformed"
                        value={num}
                        checked={tasksPerformed === num}
                        onChange={() => setTasksPerformed(num)}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">Learning Experience</td>
                  {[1, 2, 3, 4, 5].map(num => (
                    <td key={num} className="border-b px-4 py-2 text-center">
                      <input
                        type="radio"
                        name="learningExperience"
                        value={num}
                        checked={learningExperience === num}
                        onChange={() => setLearningExperience(num)}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">Overcoming Challenges</td>
                  {[1, 2, 3, 4, 5].map(num => (
                    <td key={num} className="border-b px-4 py-2 text-center">
                      <input
                        type="radio"
                        name="overcomingChallenges"
                        value={num}
                        checked={overcomingChallenges === num}
                        onChange={() => setOvercomingChallenges(num)}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Comments */}
          <div>
            <label htmlFor="comments" className="block mb-2 text-base sm:text-lg font-medium">
              Additional Comments (if any)
            </label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Write your comments here..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full sm:w-1/3 py-2 px-4 bg-[#112d60] text-white rounded-md shadow-sm hover:bg-[#0a1b40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0a1b40]"
            >
              Submit Evaluation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FacultySupervisorEvaluationForm;
