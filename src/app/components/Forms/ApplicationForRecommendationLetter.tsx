"use client";
import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const RecommendationLetterApplicationForm: React.FC = () => {
  const [studentName, setStudentName] = useState<string>('');
  const [fatherName, setFatherName] = useState<string>('');
  const [cnic, setCnic] = useState<string>('');
  const [registrationNo, setRegistrationNo] = useState<string>('');
  const [cgpa, setCgpa] = useState<string>('');
  const [degree, setDegree] = useState<string>('');
  const [semester, setSemester] = useState<string>('');
  const [cellNo, setCellNo] = useState<string>('');
  const [whatsAppNo, setWhatsAppNo] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [hrManagerName, setHrManagerName] = useState<string>('');
  const [hrPhoneNo, setHrPhoneNo] = useState<string>('');
  const [hrEmail, setHrEmail] = useState<string>('');
  const [postalAddress, setPostalAddress] = useState<string>('');
  const [studentIdFile, setStudentIdFile] = useState<File | null>(null);
  const [transcriptFile, setTranscriptFile] = useState<File | null>(null);
  const [agreementAccepted, setAgreementAccepted] = useState(false);
  const router = useRouter();

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Mock submission logic
    const applicationData = {
      studentName,
      fatherName,
      cnic,
      registrationNo,
      cgpa,
      degree,
      semester,
      cellNo,
      whatsAppNo,
      email,
      hrManagerName,
      hrPhoneNo,
      hrEmail,
      postalAddress,
      studentIdFile,
      transcriptFile,
    };
    console.log('Application data:', applicationData);
    router.push('/GetData/GetRecommendationLetter');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7f7f7] p-6">
      <div className="p-6 bg-[#b6c0c5] text-[#112d60] rounded-lg shadow-none max-w-full sm:max-w-4xl w-full">
        <h2 className="mb-8 text-2xl sm:text-3xl font-bold text-center">
          Application for Internship Recommendation Letter
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Student Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="studentName" className="block mb-2 text-base sm:text-lg font-medium">
                Student Name
              </label>
              <input
                id="studentName"
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter Student Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="fatherName" className="block mb-2 text-base sm:text-lg font-medium">
                Father's Name
              </label>
              <input
                id="fatherName"
                type="text"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                placeholder="Enter Father's Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="cnic" className="block mb-2 text-base sm:text-lg font-medium">
                CNIC#
              </label>
              <input
                id="cnic"
                type="text"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                placeholder="Enter CNIC#"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="registrationNo" className="block mb-2 text-base sm:text-lg font-medium">
                Registration No.
              </label>
              <input
                id="registrationNo"
                type="text"
                value={registrationNo}
                onChange={(e) => setRegistrationNo(e.target.value)}
                placeholder="Enter Registration No."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="cgpa" className="block mb-2 text-base sm:text-lg font-medium">
                CGPA
              </label>
              <input
                id="cgpa"
                type="text"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                placeholder="Enter CGPA"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="degree" className="block mb-2 text-base sm:text-lg font-medium">
                Degree
              </label>
              <input
                id="degree"
                type="text"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                placeholder="Enter Degree"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="semester" className="block mb-2 text-base sm:text-lg font-medium">
                Semester
              </label>
              <input
                id="semester"
                type="text"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                placeholder="Enter Semester"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="cellNo" className="block mb-2 text-base sm:text-lg font-medium">
                Cell#
              </label>
              <input
                id="cellNo"
                type="text"
                value={cellNo}
                onChange={(e) => setCellNo(e.target.value)}
                placeholder="Enter Cell No."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="whatsAppNo" className="block mb-2 text-base sm:text-lg font-medium">
                WhatsApp#
              </label>
              <input
                id="whatsAppNo"
                type="text"
                value={whatsAppNo}
                onChange={(e) => setWhatsAppNo(e.target.value)}
                placeholder="Enter WhatsApp No."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-base sm:text-lg font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* HR Manager Information */}
          <h3 className="text-lg font-semibold mb-4 text-[#112d60]">HR Manager / Organization Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="hrManagerName" className="block mb-2 text-base sm:text-lg font-medium">
                HR Manager Name
              </label>
              <input
                id="hrManagerName"
                type="text"
                value={hrManagerName}
                onChange={(e) => setHrManagerName(e.target.value)}
                placeholder="Enter HR Manager Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="hrPhoneNo" className="block mb-2 text-base sm:text-lg font-medium">
                HR Manager Phone#
              </label>
              <input
                id="hrPhoneNo"
                type="text"
                value={hrPhoneNo}
                onChange={(e) => setHrPhoneNo(e.target.value)}
                placeholder="Enter HR Manager Phone No."
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="hrEmail" className="block mb-2 text-base sm:text-lg font-medium">
                HR Manager Email Address
              </label>
              <input
                id="hrEmail"
                type="email"
                value={hrEmail}
                onChange={(e) => setHrEmail(e.target.value)}
                placeholder="Enter HR Manager Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="postalAddress" className="block mb-2 text-base sm:text-lg font-medium">
                Postal Address
              </label>
              <textarea
                id="postalAddress"
                value={postalAddress}
                onChange={(e) => setPostalAddress(e.target.value)}
                placeholder="Enter Postal Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows={3}
                required
              />
            </div>
          </div>
               {/* Compliance Agreement */}
               <h3 className="text-lg font-semibold mb-4 text-[#112d60]">Internship Code of Conduct Agreement</h3>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700">
            <p>I clearly understand / accept that I shall comply with the following during my entire internship period:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>I will uphold high standards of academic integrity through honesty, fairness & responsibility.</li>
              <li>I will follow all the rules & regulations of the employer organization.</li>
              <li>I will comply with all instructions given to me by the Supervisor.</li>
              <li>All kinds of work assignments done by myself will be the property of the organization.</li>
              <li>I will keep the confidentiality of the information and will not transfer any information to unauthorized individuals in or outside the organization.</li>
              <li>I will neither take part in discrimination nor commit acts of violence/harassment.</li>
              <li>I will not indulge in politics nor affiliate myself with any groups of students, political parties, or union bodies during my internship period.</li>
              <li>After completing my internship, I will return the Office Entry Pass or any other organization property.</li>
              <li>I will submit the Internship Training Report to the Placement Office within 15 days of completing my internship.</li>
            </ol>
            <p className="mt-4 font-medium">I agree that my internship could be terminated if I violate the code of conduct.</p>
          </div>

          <div className="flex items-center mt-4">
            <input
              id="agreementAccepted"
              type="checkbox"
              checked={agreementAccepted}
              onChange={(e) => setAgreementAccepted(e.target.checked)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required
            />
            <label htmlFor="agreementAccepted" className="ml-2 block text-sm font-medium text-gray-700">
              I accept the terms and conditions of the internship.
            </label>
          </div>

          {/* File Uploads */}
          <h3 className="text-lg font-semibold mb-4 text-[#112d60]">Upload Required Documents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="studentIdFile" className="block mb-2 text-base sm:text-lg font-medium">
                Upload Student ID
              </label>
              <input
                id="studentIdFile"
                type="file"
                onChange={(e) => setStudentIdFile(e.target.files?.[0] || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="transcriptFile" className="block mb-2 text-base sm:text-lg font-medium">
                Upload Transcript
              </label>
              <input
                id="transcriptFile"
                type="file"
                onChange={(e) => setTranscriptFile(e.target.files?.[0] || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#112d60] hover:bg-[#0d1f40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-lg font-medium"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecommendationLetterApplicationForm;