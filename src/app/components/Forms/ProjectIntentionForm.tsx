"use client";
import React, { useState, FormEvent } from 'react';

const ProjectIntentionForm: React.FC = () => {
  const [projectId, setProjectId] = useState<string>('');
  const [facultyName, setFacultyName] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [degreeProgram, setDegreeProgram] = useState<string>('');
  const [projectTitle, setProjectTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [facultySignature, setFacultySignature] = useState<string>('');

  // Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const projectObj = {
      projectId,
      facultyName,
      department,
      degreeProgram,
      projectTitle,
      description,
      facultySignature,
    };
    console.log(projectObj);

    // Alert for successful submission (mock functionality)
    alert('Project Uploaded Successfully!');

    // Reset form fields
    setProjectId('');
    setFacultyName('');
    setDepartment('');
    setDegreeProgram('');
    setProjectTitle('');
    setDescription('');
    setFacultySignature('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Internship/Project Intention Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project ID */}
            <div>
              <label htmlFor="projectId" className="block mb-2 text-base sm:text-lg font-medium">
                Project ID
              </label>
              <input
                id="projectId"
                type="text"
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                placeholder="Enter Project ID"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Faculty Member Name */}
            <div>
              <label htmlFor="facultyName" className="block mb-2 text-base sm:text-lg font-medium">
                Name of Faculty Member
              </label>
              <input
                id="facultyName"
                type="text"
                value={facultyName}
                onChange={(e) => setFacultyName(e.target.value)}
                placeholder="Enter Faculty Member Name"
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

            {/* Targeted Degree Program */}
            <div>
              <label htmlFor="degreeProgram" className="block mb-2 text-base sm:text-lg font-medium">
                Targeted Degree Program
              </label>
              <input
                id="degreeProgram"
                type="text"
                value={degreeProgram}
                onChange={(e) => setDegreeProgram(e.target.value)}
                placeholder="Enter Targeted Degree Program"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Project Title */}
            <div>
              <label htmlFor="projectTitle" className="block mb-2 text-base sm:text-lg font-medium">
                Project Title
              </label>
              <input
                id="projectTitle"
                type="text"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="Enter Project Title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Faculty Signature */}
            <div>
              <label htmlFor="facultySignature" className="block mb-2 text-base sm:text-lg font-medium">
                Faculty Signature
              </label>
              <input
                id="facultySignature"
                type="text"
                value={facultySignature}
                onChange={(e) => setFacultySignature(e.target.value)}
                placeholder="Enter Faculty Signature"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block mb-2 text-base sm:text-lg font-medium">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a description of the project..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
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

export default ProjectIntentionForm;
