import mongoose, { Schema, model, models, Document } from 'mongoose';

// Define the Internship interface
interface IInternship extends Document {
  hostInstitution: string;
  siteSupervisor: string;
  description: string; // Updated to match form field
  availableInternships: number; // Changed to number for consistency
  internshipType: 'Onsite' | 'Oncampus'; // Updated to match form field
  joiningDate: Date; // Kept as Date for consistency
  email: string; // Updated to match form field
}

// Define the Internship schema
const InternshipSchema = new Schema<IInternship>({
  hostInstitution: { type: String, required: [true, 'Host institution is required'] },
  siteSupervisor: { type: String, required: [true, 'Site supervisor is required'] },
  description: { type: String, required: [true, 'Project description is required'] },
  availableInternships: { type: Number, required: [true, 'Available internships are required'] }, // Changed to Number
  internshipType: { type: String, enum: ['Onsite', 'Oncampus'], required: [true, 'Internship type is required'] },
  joiningDate: { type: Date, required: [true, 'Joining date is required'] }, // Changed to Date
  email: { type: String, required: [true, 'Email of host institution is required'] } // Changed to match form field
});

// Check if the model exists to avoid overwrite issues during development
const Internship = models.Internship || model<IInternship>('Internship', InternshipSchema);

export default Internship;
