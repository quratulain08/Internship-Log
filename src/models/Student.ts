import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  universityId: { type: String, required: true, unique: true }, // University-provided ID
  name: { type: String, required: true },
  department: { type: String, required: true },
});

export default mongoose.models.Student || mongoose.model('Student', StudentSchema);
