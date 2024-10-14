import mongoose from 'mongoose';

const SupervisorSchema = new mongoose.Schema({
  universityId: { type: String, required: true, unique: true }, // University-provided ID
  name: { type: String, required: true },
  department: { type: String },
});

export default mongoose.models.Supervisor || mongoose.model('Supervisor', SupervisorSchema);
