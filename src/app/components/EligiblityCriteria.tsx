import React from 'react';

const EligibilityCriteria: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-20 bg-[#b6c0c5]">
      <div className="p-6 bg-[#b6c0c5] rounded-md  max-w-4xl w-full">
        <h2 className="text-xl font-bold mb-4 text-[#112d60]">Eligibility Criteria</h2>
        <ul className="list-disc list-inside space-y-2 text-[#112d60]">
          <li>
            <strong>BS Program Students:</strong> Eligible to enroll in the internship program after the completion of the following semesters:
            <ul className="list-disc list-inside ml-6">
              <li>4th Semester</li>
              <li>6th Semester</li>
            </ul>
          </li>
          <li>
            <strong>AD Program Students:</strong> Eligible to enroll in the internship program after the completion of the Second Semester.
          </li>
          <li>
            <strong>Note:</strong> Warning and serious-warning case students must get prior approval from the Chair Department before applying for the internship.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EligibilityCriteria;
