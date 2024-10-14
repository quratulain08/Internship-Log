"use client";
import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface IInternship {
  hostInstitution: string;
  siteSupervisor: string;
  description: string;
  availableInternships: number;
  internshipType: 'Onsite' | 'Oncampus';
  joiningDate: string;
  email: string;
}

const PostInternshipForm: React.FC = () => {
  const [internships, setInternships] = useState<IInternship[]>([]);
  const [formData, setFormData] = useState<IInternship>({
    hostInstitution: '',
    siteSupervisor: '',
    description: '',
    availableInternships: 0,
    internshipType: 'Onsite',
    joiningDate: '',
    email: ''
  });
  const [error, setError] = useState<string>('');
  const router = useRouter();

  // Fetch existing internships (if needed)
  useEffect(() => {
    async function fetchInternships() {
      try {
        const res = await fetch('/api/internships');
        if (!res.ok) throw new Error('Failed to fetch internships');
        const data = await res.json();
        setInternships(data);
      } catch (error) {
        console.error('Error fetching internships:', error);
        setError('Failed to fetch internships. Please try again later.');
      }
    }
    fetchInternships();
  }, []);

  // Handle form submission to add a new internship
  const addInternship = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/internships', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to post internship');
      }

      const data = await res.json();
      alert(data.message);
      setFormData({
        hostInstitution: '',
        siteSupervisor: '',
        description: '',
        availableInternships: 0,
        internshipType: 'Onsite',
        joiningDate: '',
        email: ''
      });
      // Refresh internships after adding
      const refreshedInternships = await fetch('/api/internships');
      setInternships(await refreshedInternships.json());
    } catch (error) {
      console.error('Error posting internship:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Post an Internship</h2>
        <form onSubmit={addInternship} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Host Institution */}
            <div>
              <label htmlFor="hostInstitution" className="block mb-2 text-base sm:text-lg font-medium">
                Host Institution
              </label>
              <input
                id="hostInstitution"
                type="text"
                value={formData.hostInstitution}
                onChange={(e) => setFormData({ ...formData, hostInstitution: e.target.value })}
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
                value={formData.siteSupervisor}
                onChange={(e) => setFormData({ ...formData, siteSupervisor: e.target.value })}
                placeholder="Enter Site Supervisor"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Available Internships */}
            <div>
              <label htmlFor="availableInternships" className="block mb-2 text-base sm:text-lg font-medium">
                Available Internships
              </label>
              <input
                id="availableInternships"
                type="number"
                value={formData.availableInternships}
                onChange={(e) => setFormData({ ...formData, availableInternships: Number(e.target.value) })}
                placeholder="Enter Available Internships"
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
                value={formData.internshipType}
                onChange={(e) => setFormData({ ...formData, internshipType: e.target.value as 'Onsite' | 'Oncampus' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="Onsite">Onsite</option>
                <option value="Oncampus">Oncampus</option>
              </select>
            </div>

            {/* Joining Date */}
            <div>
              <label htmlFor="joiningDate" className="block mb-2 text-base sm:text-lg font-medium">
                Joining Date
              </label>
              <input
                id="joiningDate"
                type="date"
                value={formData.joiningDate}
                onChange={(e) => setFormData({ ...formData, joiningDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Email of Host Institution */}
            <div>
              <label htmlFor="email" className="block mb-2 text-base sm:text-lg font-medium">
                Email of Host Institution
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter Email of Host Institution"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            {/* Project/Internship Description */}
            <div>
              <label htmlFor="description" className="block mb-2 text-base sm:text-lg font-medium">
                Project/Internship Description
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Write a description of the project or internship..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <button
              type="submit"
              className="w-full sm:w-1/3 py-2 px-4 bg-[#112d60] text-white rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="w-full sm:w-1/3 py-2 px-4 bg-gray-500 text-white rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
            >
              Back
            </button>
          </div>
        </form>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default PostInternshipForm;
