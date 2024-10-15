import React from 'react';

interface ISiteSupervisorProfile {
  name: string;
  cnic: string;
  qualification: string;
  organization: string;
  mobileNo: string;
}

interface GetSiteSupervisorProfileProps {
  profileData: ISiteSupervisorProfile;
}

const GetSiteSupervisorProfile: React.FC<GetSiteSupervisorProfileProps> = ({ profileData }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">Site Supervisor Profile Data</h2>

        {/* Profile Information Section */}
        <table className="min-w-full border border-collapse">
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Name</td>
              <td className="border border-gray-300 px-4 py-2">{profileData.name}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">CNIC</td>
              <td className="border border-gray-300 px-4 py-2">{profileData.cnic}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Qualification</td>
              <td className="border border-gray-300 px-4 py-2">{profileData.qualification}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Organization</td>
              <td className="border border-gray-300 px-4 py-2">{profileData.organization}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Mobile No</td>
              <td className="border border-gray-300 px-4 py-2">{profileData.mobileNo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetSiteSupervisorProfile;
