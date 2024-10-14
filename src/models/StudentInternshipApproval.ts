import mongoose, { Schema, model, models, Document } from 'mongoose';
import Internship from './Internship'; // Adjust the path as necessary

// Define the StudentInternshipApproval interface
interface IStudentInternshipApproval extends Document {
  projectId: string;
  studentName: string;
  internshipType: 'Onsite' | 'Oncampus';
  studentId: string;
  department: string;
  projectTitle: string;
  facultySupervisor: string;
  hostInstitution: string;
  siteSupervisor: string;
  cv: string; // Store CV filename or path
  email: string; // Email of the student or faculty
  internship: mongoose.Schema.Types.ObjectId; // Reference to Internship
}

// Define the StudentInternshipApproval schema
const StudentInternshipApprovalSchema = new Schema<IStudentInternshipApproval>({
  projectId: { type: String, required: true },
  studentName: { type: String, required: true },
  internshipType: { type: String, enum: ['Onsite', 'Oncampus'], required: true },
  studentId: { type: String, required: true },
  department: { type: String, required: true },
  projectTitle: { type: String, required: true },
  facultySupervisor: { type: String, required: true },
  hostInstitution: { type: String, required: true },
  siteSupervisor: { type: String, required: true },
  cv: { type: String, required: true }, // Save the CV path or filename
  email: { type: String, required: true },
  internship: { type: mongoose.Schema.Types.ObjectId, ref: 'Internship', required: true } // Foreign key reference
});

// Check if the model exists to avoid overwrite issues during development
const StudentInternshipApproval = models.StudentInternshipApproval || model<IStudentInternshipApproval>('StudentInternshipApproval', StudentInternshipApprovalSchema);

export default StudentInternshipApproval;
