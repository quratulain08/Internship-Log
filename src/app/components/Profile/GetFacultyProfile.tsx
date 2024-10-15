"use client";
import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";

interface IFacultyProfile {
  name: string;
  department: string;
  employeeId: string;
  email: string;
  mobileNo: string;
  qualification: string;
  experience: string;
}

const FacultyProfileTable: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false); // State to toggle edit mode

  // Static data for demonstration
  const [facultyData, setFacultyData] = useState<IFacultyProfile>({
    name: "Dr. Alice Smith",
    department: "Computer Science",
    employeeId: "EMP-2023-001",
    email: "alice.smith@university.edu",
    mobileNo: "0300-7654321",
    qualification: "PhD in Computer Science",
    experience: "10 years",
  });

  // Handle change in form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFacultyData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle Save button click
  const handleSave = () => {
    setIsEditing(false); // Exit edit mode
    console.log("Updated Faculty Data:", facultyData);
  };

  // Render form if editing mode is enabled
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
            Edit Faculty Profile
          </h2>
          <div className="space-y-4">
            {Object.keys(facultyData).map((key) => (
              <div key={key} className="flex flex-col">
                <label className="font-semibold mb-1 capitalize">{key}</label>
                <input
                  type="text"
                  name={key}
                  value={(facultyData as any)[key]}
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

  // Render profile view if not in editing mode
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">
          Faculty Profile Data
        </h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Faculty Information</h3>
          <table className="min-w-full border border-collapse">
            <tbody>
              {Object.entries(facultyData).map(([key, value]) => (
                <tr key={key}>
                  <td className="border border-gray-300 px-4 py-2 capitalize">
                    {key}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

export default FacultyProfileTable;
