// models/Communication.ts

import { Schema, model, Document, Types } from 'mongoose';

interface ICommunication extends Document {
  sender: Types.ObjectId; // Reference to User
  receiver: Types.ObjectId; // Reference to User
  message: string;
  timestamp: Date;
}

const CommunicationSchema = new Schema<ICommunication>({
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default model<ICommunication>('Communication', CommunicationSchema);
