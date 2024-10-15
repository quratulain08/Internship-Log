"use client";
import { useState } from 'react';

interface ISiteSupervisorProfile {
  name: string;
  cnic: string;
  phoneNo: string;
  organization: string;
  department: string;
}

const SiteSupervisorForm: React.FC = () => {
  const [formData, setFormData] = useState<ISiteSupervisorProfile>({
    name: '',
    cnic: '',
    phoneNo: '',
    organization: '',
    department: ''
  });

  const [submittedData, setSubmittedData] = useState<ISiteSupervisorProfile | null>(null);
  const [error, setError] = useState<string>('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Validate required fields
    const requiredFields: (keyof ISiteSupervisorProfile)[] = ['name', 'cnic', 'phoneNo', 'organization', 'department'];
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
      cnic: '',
      phoneNo: '',
      organization: '',
      department: ''
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Site Supervisor Profile</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Row for Name and CNIC */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="block mb-2 text-base sm:text-lg font-medium">Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter Supervisor's Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cnic" className="block mb-2 text-base sm:text-lg font-medium">CNIC</label>
              <input
                id="cnic"
                type="text"
                value={formData.cnic}
                onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                placeholder="Enter Supervisor's CNIC"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
          </div>

          {/* Row for Phone No and Organization */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="phoneNo" className="block mb-2 text-base sm:text-lg font-medium">Phone No</label>
              <input
                id="phoneNo"
                type="text"
                value={formData.phoneNo}
                onChange={(e) => setFormData({ ...formData, phoneNo: e.target.value })}
                placeholder="Enter Supervisor's Phone No"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="organization" className="block mb-2 text-base sm:text-lg font-medium">Organization</label>
              <input
                id="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="Enter Supervisor's Organization"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
          </div>

          {/* Row for Department */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="department" className="block mb-2 text-base sm:text-lg font-medium">Department</label>
              <input
                id="department"
                type="text"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                placeholder="Enter  Department"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
  <button
    type="submit"
    className="w-24 py-2 px-3 bg-[#112d60] text-white rounded-full shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 mt-2 text-s"
  >
    Submit
  </button>
</div>




        </form>

        {/* Display error message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default SiteSupervisorForm;
