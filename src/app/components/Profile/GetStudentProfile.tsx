import React from 'react';

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
  // Static data for demonstration
  const studentData: IStudentProfile = {
    name: 'John Doe',
    course: 'Computer Science',
    cnic: '12345-1234567-1',
    class: 'BSCS',
    semester: '4th',
    registrationId: 'CS-2020-001',
    cgpa: '3.5',
    fatherName: 'Mr. Doe',
    email: 'john.doe@example.com',
    mobileNo: '0300-1234567'
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Student Profile Data</h2>

        {/* Air University Information Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Air University Information</h3>
          <table className="min-w-full border border-collapse">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Course</td>
                <td className="border border-gray-300 px-4 py-2">{studentData.course}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Registration ID</td>
                <td className="border border-gray-300 px-4 py-2">{studentData.registrationId}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Class</td>
                <td className="border border-gray-300 px-4 py-2">{studentData.class}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Semester</td>
                <td className="border border-gray-300 px-4 py-2">{studentData.semester}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">CGPA</td>
                <td className="border border-gray-300 px-4 py-2">{studentData.cgpa}</td>
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
                <td className="border border-gray-300 px-4 py-2">{studentData.name}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Father's Name</td>
                <td className="border border-gray-300 px-4 py-2">{studentData.fatherName}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">CNIC</td>
                <td className="border border-gray-300 px-4 py-2">{studentData.cnic}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Email</td>
                <td className="border border-gray-300 px-4 py-2">{studentData.email}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Mobile No</td>
                <td className="border border-gray-300 px-4 py-2">{studentData.mobileNo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileTable;
