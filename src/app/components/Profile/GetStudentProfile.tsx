"use client";
import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";

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

const StudentProfileTable: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false); // State to toggle edit mode

  // Static data for demonstration
  const [studentData, setStudentData] = useState<IStudentProfile>({
    name: "John Doe",
    course: "Computer Science",
    cnic: "12345-1234567-1",
    class: "BSCS",
    semester: "4th",
    registrationId: "CS-2020-001",
    cgpa: "3.5",
    fatherName: "Mr. Doe",
    email: "john.doe@example.com",
    mobileNo: "0300-1234567",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Save updated data and exit edit mode
  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated Student Data:", studentData);
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
            Edit Student Profile
          </h2>
          <div className="space-y-4">
            {Object.keys(studentData).map((key) => (
              <div key={key} className="flex flex-col">
                <label className="font-semibold mb-1 capitalize">{key}</label>
                <input
                  type="text"
                  name={key}
                  value={(studentData as any)[key]}
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
          Student Profile Data
        </h2>

        {/* Air University Information Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Air University Information</h3>
          <table className="min-w-full border border-collapse">
            <tbody>
              {["course", "registrationId", "class", "semester", "cgpa"].map(
                (key) => (
                  <tr key={key}>
                    <td className="border border-gray-300 px-4 py-2 capitalize">
                      {key}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {(studentData as any)[key]}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Personal Information Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
          <table className="min-w-full border border-collapse">
            <tbody>
              {["name", "fatherName", "cnic", "email", "mobileNo"].map((key) => (
                <tr key={key}>
                  <td className="border border-gray-300 px-4 py-2 capitalize">
                    {key}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {(studentData as any)[key]}
                  </td>
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

export default StudentProfileTable;
