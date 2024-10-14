"use client";
import React, { useState, FormEvent } from 'react';

const StudentInternshipApprovalForm: React.FC = () => {
  const [projectId, setProjectId] = useState<string>('');
  const [studentName, setStudentName] = useState<string>('');
  const [internshipType, setInternshipType] = useState<string>('On campus');
  const [studentId, setStudentId] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [projectTitle, setProjectTitle] = useState<string>('');
  const [facultySupervisor, setFacultySupervisor] = useState<string>('');
  const [hostInstitution, setHostInstitution] = useState<string>('');
  const [siteSupervisor, setSiteSupervisor] = useState<string>('');
  const [cv, setCv] = useState<File | null>(null);
  const [email, setEmail] = useState<string>(''); // New state for email

  // Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const internshipObj = {
      projectId,
      studentName,
      internshipType,
      studentId,
      department,
      projectTitle,
      facultySupervisor,
      hostInstitution,
      siteSupervisor,
      cv: cv ? cv.name : 'No file uploaded', // Include file name or status
      email, // Include email in submission data
      internshipId: "YOUR_INTERNSHIP_ID" // Replace with actual internship ID
    };

    console.log(internshipObj);

    // Make a POST request to the API
    fetch('/api/studentInternshipApproval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(internshipObj),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        alert(data.message);
        // Reset form fields as needed
      } else {
        alert('Submission failed: ' + data.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    });
};


  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setCv(event.target.files[0]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Student Internship Approval Form</h2>
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

            {/* Internship Type */}
            <div>
              <label htmlFor="internshipType" className="block mb-2 text-base sm:text-lg font-medium">
                Internship Type
              </label>
              <select
                id="internshipType"
                value={internshipType}
                onChange={(e) => setInternshipType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="On campus">On campus</option>
                <option value="On site">On site</option>
              </select>
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

            {/* Project Title */}
            <div>
              <label htmlFor="projectTitle" className="block mb-2 text-base sm:text-lg font-medium">
                Project Title (*If applicable)
              </label>
              <input
                id="projectTitle"
                type="text"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="Enter Project Title"
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

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-base sm:text-lg font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* CV Upload */}
            <div>
              <label htmlFor="cv" className="block mb-2 text-base sm:text-lg font-medium">
                Upload CV
              </label>
              <input
                id="cv"
                type="file"
                onChange={handleFileChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200"
              />
            </div>
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

export default StudentInternshipApprovalForm;
