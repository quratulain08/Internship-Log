"use client";
import { useState } from 'react';

interface IStudentProfile {
  name: string;
  course: string;
  cnic: string;
  class: string;
  semester: string;
  registrationId: string;
  cgpa: string;
  fatherName: string;
  email: string;
  mobileNo: string;
}

const StudentProfileForm: React.FC = () => {
  const [formData, setFormData] = useState<IStudentProfile>({
    name: '',
    course: '',
    cnic: '',
    class: '',
    semester: '',
    registrationId: '',
    cgpa: '',
    fatherName: '',
    email: '',
    mobileNo: ''
  });

  const [submittedData, setSubmittedData] = useState<IStudentProfile | null>(null);
  const [error, setError] = useState<string>('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Validate required fields
    const requiredFields: (keyof IStudentProfile)[] = ['name', 'course', 'cnic', 'class', 'semester', 'registrationId', 'cgpa', 'fatherName', 'email', 'mobileNo'];
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
      course: '',
      cnic: '',
      class: '',
      semester: '',
      registrationId: '',
      cgpa: '',
      fatherName: '',
      email: '',
      mobileNo: ''
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Student Profile</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Row for Name and Course */}
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
              <label htmlFor="course" className="block mb-2 text-base sm:text-lg font-medium">Degree Program</label>
              <input
                id="course"
                type="text"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                placeholder="Enter your Course"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
          </div>

          {/* Row for CNIC and Class */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="cnic" className="block mb-2 text-base sm:text-lg font-medium">CNIC</label>
              <input
                id="cnic"
                type="text"
                value={formData.cnic}
                onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                placeholder="Enter your CNIC"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="class" className="block mb-2 text-base sm:text-lg font-medium">Enrolled Class</label>
              <input
                id="class"
                type="text"
                value={formData.class}
                onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                placeholder="Enter your Class"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
          </div>

          {/* Row for Semester and Registration ID */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="semester" className="block mb-2 text-base sm:text-lg font-medium">Semester</label>
              <input
                id="semester"
                type="text"
                value={formData.semester}
                onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                placeholder="Enter your Semester"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="registrationId" className="block mb-2 text-base sm:text-lg font-medium">Registration ID</label>
              <input
                id="registrationId"
                type="text"
                value={formData.registrationId}
                onChange={(e) => setFormData({ ...formData, registrationId: e.target.value })}
                placeholder="Enter your Registration ID"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
          </div>

          {/* Row for CGPA and Father's Name */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="cgpa" className="block mb-2 text-base sm:text-lg font-medium">CGPA</label>
              <input
                id="cgpa"
                type="number"
                value={formData.cgpa}
                onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
                placeholder="Enter your CGPA"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="fatherName" className="block mb-2 text-base sm:text-lg font-medium">Father's Name</label>
              <input
                id="fatherName"
                type="text"
                value={formData.fatherName}
                onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                placeholder="Enter your Father's Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
          </div>

          {/* Row for Email and Mobile No */}
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
              <label htmlFor="mobileNo" className="block mb-2 text-base sm:text-lg font-medium">Mobile No</label>
              <input
                id="mobileNo"
                type="text"
                value={formData.mobileNo}
                onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
                placeholder="Enter your Mobile No"
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

export default StudentProfileForm;
