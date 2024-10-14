"use client";
import { useState } from 'react';

interface IFacultyProfile {
  name: string;
  department: string;
  employeeId: string;
  qualification: string;
  email: string;
  contactNo: string;
}

const FacultyProfileForm: React.FC = () => {
  const [formData, setFormData] = useState<IFacultyProfile>({
    name: '',
    department: '',
    employeeId: '',
    qualification: '',
    email: '',
    contactNo: ''
  });

  const [submittedData, setSubmittedData] = useState<IFacultyProfile | null>(null);
  const [error, setError] = useState<string>('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Validate required fields
    const requiredFields: (keyof IFacultyProfile)[] = ['name', 'department', 'employeeId', 'qualification', 'email', 'contactNo'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setError(`${field} is required`);
        return;
      }
    }

    // Set submitted data to display it
    setSubmittedData(formData);
    // Reset form
    setFormData({
      name: '',
      department: '',
      employeeId: '',
      qualification: '',
      email: '',
      contactNo: ''
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Faculty Profile</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Row for Name and Department */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="block mb-2 text-base sm:text-lg font-medium">Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="department" className="block mb-2 text-base sm:text-lg font-medium">Department</label>
              <input
                id="department"
                type="text"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                placeholder="Enter your Department"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
          </div>

          {/* Row for Employee ID and Qualification */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="employeeId" className="block mb-2 text-base sm:text-lg font-medium">Employee ID</label>
              <input
                id="employeeId"
                type="text"
                value={formData.employeeId}
                onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                placeholder="Enter your Employee ID"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="qualification" className="block mb-2 text-base sm:text-lg font-medium">Qualification</label>
              <input
                id="qualification"
                type="text"
                value={formData.qualification}
                onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                placeholder="Enter your Qualification"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
          </div>

          {/* Row for Email and Contact No */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="email" className="block mb-2 text-base sm:text-lg font-medium">Email Address</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="contactNo" className="block mb-2 text-base sm:text-lg font-medium">Contact No</label>
              <input
                id="contactNo"
                type="text"
                value={formData.contactNo}
                onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                placeholder="Enter your Contact No"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#112d60] text-white rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 mt-4"
          >
            Submit
          </button>
        </form>

        {/* Display submitted data */}
        {submittedData && (
          <div className="mt-6">
            <h3 className="text-xl font-bold">Submitted Data</h3>
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}

        {/* Display error message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default FacultyProfileForm;
