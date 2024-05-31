// models/Application.ts

import { Schema, model, Document, Types } from 'mongoose';

interface IApplication extends Document {
  applicant: Types.ObjectId; // Reference to User
  course: Types.ObjectId; // Reference to Course
  documents: string[]; // Array of document URLs or file paths
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

const ApplicationSchema = new Schema<IApplication>({
  applicant: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  documents: { type: [String], required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ApplicationSchema.pre<IApplication>('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default model<IApplication>('Application', ApplicationSchema);
