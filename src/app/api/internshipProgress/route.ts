import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/mongodb';
import InternshipProgress from '@/models/InternshipProgress';
import Student from '@/models/Student';
import Supervisor from '@/models/Supervisor';

// POST: Create a new internship progress report
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectToDatabase();

    const {
      studentId, // University-provided student ID
      facultySupervisorId, // University-provided supervisor ID
      siteSupervisor,
      hostInstitution,
      reportingPeriod,
      progressReportNumber,
      tasksAssigned,
      learningExperience,
      limitationsChallenges,
    } = req.body;

    // Find student by university ID
    const student = await Student.findOne({ universityId: studentId });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Find supervisor by university ID, if provided
    let facultySupervisor = null;
    if (facultySupervisorId) {
      facultySupervisor = await Supervisor.findOne({ universityId: facultySupervisorId });
      if (!facultySupervisor) {
        return res.status(404).json({ error: 'Faculty supervisor not found' });
      }
    }

    // Create internship progress entry
    const internshipProgress = new InternshipProgress({
      studentId: student._id,
      facultySupervisorId: facultySupervisor ? facultySupervisor._id : null,
      siteSupervisor,
      hostInstitution,
      reportingPeriod,
      progressReportNumber,
      tasksAssigned,
      learningExperience,
      limitationsChallenges,
    });

    await internshipProgress.save();

    return res.status(200).json({ message: 'Internship progress submitted successfully!' });
  } catch (error) {
    console.error('Error creating internship progress:', error);
    return res.status(500).json({ error: 'Failed to create internship progress' });
  }
}
