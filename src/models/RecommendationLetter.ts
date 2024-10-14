import mongoose, { Schema, model, models, Document } from 'mongoose';

// Define the RecommendationLetter interface
interface IRecommendationLetter extends Document {
;'';';;'p;'[[;''[';'p;';///''''''''''''/'//.........;;/;/;/;/..;;/./;.;.;..////////;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////.;;;;;;;;;;;/;.;/;;;;/.;.;.;.;;;;.;//]  studentName: string;
  fatherName: string;
  cnic: string;
  registrationNo: string;
  cgpa: string;
  degree: string;
  semester: string;
  cellNo: string;
  whatsAppNo: string;
  email: string;
  hrManagerName: string;
  hrPhoneNo: string;
  hrEmail: string;
  postalAddress: string;
  studentIdFile: any;
  transcriptFile: any;
  agreementAccepted: boolean;
  date: Date;
}

// Define the RecommendationLetter schema
const RecommendationLetterSchema = new Schema<IRecommendationLetter>({
  studentName: { type: String, required: true },
  fatherName: { type: String, required: true },
  cnic: { type: String, required: true },
  registrationNo: { type: String, required: true },
  cgpa: { type: String, required: true },
  degree: { type: String, required: true },
  semester: { type: String, required: true },
  cellNo: { type: String, required: true },
  whatsAppNo: { type: String, required: true },
  email: { type: String, required: true },
  hrManagerName: { type: String, required: true },
  hrPhoneNo: { type: String, required: true },
  hrEmail: { type: String, required: true },
  postalAddress: { type: String, required: true },
  studentIdFile: { type: Buffer, required: true },
  transcriptFile: { type: Buffer, required: true },
  agreementAccepted: { type: Boolean, required: true },
  date: { type: Date, default: Date.now },
});

// Check if the model exists to avoid overwrite issues during development
const RecommendationLetter = models.RecommendationLetter || model<IRecommendationLetter>('RecommendationLetter', RecommendationLetterSchema);

export default RecommendationLetter;