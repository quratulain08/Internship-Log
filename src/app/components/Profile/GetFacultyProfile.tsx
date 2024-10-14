import React from 'react';

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
  // Static data for demonstration
  const facultyData: IFacultyProfile = {
    name: 'Dr. Alice Smith',
    department: 'Computer Science',
    employeeId: 'EMP-2023-001',
    email: 'alice.smith@university.edu',
    mobileNo: '0300-7654321',
    qualification: 'PhD in Computer Science',
    experience: '10 years'
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Faculty Profile Data</h2>

        {/* Faculty Information Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Faculty Information</h3>
          <table className="min-w-full border border-collapse">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Department</td>
                <td className="border border-gray-300 px-4 py-2">{facultyData.department}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Employee ID</td>
                <td className="border border-gray-300 px-4 py-2">{facultyData.employeeId}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Qualification</td>
                <td className="border border-gray-300 px-4 py-2">{facultyData.qualification}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Experience</td>
                <td className="border border-gray-300 px-4 py-2">{facultyData.experience}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Personal Information Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
          <table className="min-w-full border border-collapse">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Name</td>
                <td className="border border-gray-300 px-4 py-2">{facultyData.name}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Email</td>
                <td className="border border-gray-300 px-4 py-2">{facultyData.email}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Mobile No</td>
                <td className="border border-gray-300 px-4 py-2">{facultyData.mobileNo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfileTable;
