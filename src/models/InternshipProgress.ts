import mongoose from 'mongoose';

const InternshipProgressSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  facultySupervisorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supervisor' },
  siteSupervisor: { type: String },
  hostInstitution: { type: String, required: true },
  reportingPeriod: { type: String },
  progressReportNumber: { type: String },
  tasksAssigned: { type: String },
  learningExperience: { type: String },
  limitationsChallenges: { type: String },
}, { timestamps: true });

export default mongoose.models.InternshipProgress || mongoose.model('InternshipProgress', InternshipProgressSchema);
