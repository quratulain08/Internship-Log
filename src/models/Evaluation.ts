// models/Evaluation.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IEvaluation extends Document {
  studentName: string;
  studentId: string;
  tasksPerformed: number;
  learningExperience: number;
  overcomingChallenges: number;
  comments: string;
}

const evaluationSchema: Schema = new Schema(
  {
    studentName: { type: String, required: true },
    studentId: { type: String, required: true },
    tasksPerformed: { type: Number, required: true },
    learningExperience: { type: Number, required: true },
    overcomingChallenges: { type: Number, required: true },
    comments: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Evaluation = mongoose.model<IEvaluation>('Evaluation', evaluationSchema);

export default Evaluation;
