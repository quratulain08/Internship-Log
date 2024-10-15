"use client";
import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";

interface ISiteSupervisorProfile {
  name: string;
  cnic: string;
  qualification: string;
  organization: string;
  mobileNo: string;
}

const GetSiteSupervisorProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false); // State to toggle edit mode

  // Static data for demonstration
  const [profileData, setProfileData] = useState<ISiteSupervisorProfile>({
    name: "John Doe",
    cnic: "12345-6789012-3",
    qualification: "Master's in Management",
    organization: "ABC Corporation",
    mobileNo: "0300-1234567",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Save the updated data and exit edit mode
  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated Site Supervisor Data:", profileData);
  };

  // Render edit form when in edit mode
  if (isEditing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7]">
        <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
          <button
            onClick={() => setIsEditing(false)}
            className="flex items-center text-blue-700 mb-4"
          >
            <HiArrowLeft className="mr-2" />
            Back to Profile
          </button>
          <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">
            Edit Site Supervisor Profile
          </h2>
          <div className="space-y-4">
            {Object.keys(profileData).map((key) => (
              <div key={key} className="flex flex-col">
                <label className="font-semibold mb-1 capitalize">{key}</label>
                <input
                  type="text"
                  name={key}
                  value={(profileData as any)[key]}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render profile view when not editing
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">
          Site Supervisor Profile Data
        </h2>
        <table className="min-w-full border border-collapse">
          <tbody>
            {Object.entries(profileData).map(([key, value]) => (
              <tr key={key}>
                <td className="border border-gray-300 px-4 py-2 capitalize">
                  {key}
                </td>
                <td className="border border-gray-300 px-4 py-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsEditing(true)}
            className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetSiteSupervisorProfile;
