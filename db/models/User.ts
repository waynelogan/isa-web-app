// models/User.ts

import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  role: 'applicant' | 'administrator';
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['applicant', 'administrator'], required: true },
  createdAt: { type: Date, default: Date.now }
});

export default model<IUser>('User', UserSchema);
