"use client";

import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import { useRouter } from 'next/navigation';

const RecommendationLetterPage = () => {
  const [applicationData, setApplicationData] = useState<any>({
    studentName: "John Doe",
    registrationNo: "AU123456",
    degree: "BS Computer Science",
    semester: "6th",
    hrManagerName: "Mr. Smith",
    hrEmail: "hr@company.com",
    hrPhoneNo: "+123456789",
    postalAddress: "1234 Company St, City, Country"
  });
  const router = useRouter();

  const generatePDF = () => {
    if (!applicationData) return;

    const doc = new jsPDF();

    // Define the content of the PDF
    doc.setFontSize(12);
    doc.text(`Air University`, 10, 10);
    doc.text(`IBD/AU/853/24/PLAC/05/766`, 10, 20);
    doc.text(`27 August, 2024`, 10, 30);
    doc.text(applicationData.hrManagerName, 10, 40);
    doc.text(applicationData.postalAddress, 10, 50);
    doc.text(`Dear Sir,`, 10, 70);

    doc.text(
      `${applicationData.studentName}, Registration No. ${applicationData.registrationNo} is a student at Air University, a federally chartered public sector university, recognized by HEC. They are enrolled in the ${applicationData.semester} of ${applicationData.degree}.`,
      10,
      80,
      { maxWidth: 180 }
    );

    doc.text(
      `It is requested that the student may please be provided an internship opportunity at your esteemed organization. The student will benefit a great deal by working at an organization of good repute, which would go a long way in professional development.`,
      10,
      120,
      { maxWidth: 180 }
    );

    doc.text(
      `If you have any internship/job opportunity in future, please share with us.`,
      10,
      160,
      { maxWidth: 180 }
    );

    doc.text(`Assistant Director`, 10, 190);
    doc.text(`Placement & Alumni Affairs`, 10, 200);
    doc.text(
      `The Office of Placement & Alumni Affairs, Air University, PAF Complex, E-9, Islamabad.`,
      10,
      210
    );
    doc.text(`Ph #: 051-9153381-2`, 10, 220);
    doc.text(`Email: placement@au.edu.pk`, 10, 230);

    // Save the PDF
    doc.save("RecommendationLetter.pdf");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-[#112d60] mb-6">
          Internship Recommendation Letter
        </h2>

        <div className="space-y-4">
          <p>
            <strong>Student Name:</strong> {applicationData.studentName}
          </p>
          <p>
            <strong>Registration No:</strong> {applicationData.registrationNo}
          </p>
          <p>
            <strong>Degree:</strong> {applicationData.degree}
          </p>
          <p>
            <strong>Semester:</strong> {applicationData.semester}
          </p>
          <p>
            <strong>HR Manager Name:</strong> {applicationData.hrManagerName}
          </p>
          <p>
            <strong>HR Email:</strong> {applicationData.hrEmail}
          </p>
          <p>
            <strong>HR Phone No:</strong> {applicationData.hrPhoneNo}
          </p>
          <p>
            <strong>Postal Address:</strong> {applicationData.postalAddress}
          </p>
        </div>

        <button
          onClick={generatePDF}
          className="w-full bg-[#112d60] text-white py-2 px-4 rounded-md font-medium shadow-sm hover:bg-[#0e2453] mt-6"
        >
          Download Recommendation Letter as PDF
        </button>
      </div>
    </div>
  );
};

export default RecommendationLetterPage;