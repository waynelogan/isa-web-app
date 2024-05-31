// models/Analytics.ts

import { Schema, model, Document } from 'mongoose';

interface IAnalytics extends Document {
  date: Date;
  applicationsCount: number;
  approvedCount: number;
  rejectedCount: number;
}

const AnalyticsSchema = new Schema<IAnalytics>({
  date: { type: Date, required: true },
  applicationsCount: { type: Number, required: true },
  approvedCount: { type: Number, required: true },
  rejectedCount: { type: Number, required: true }
});

export default model<IAnalytics>('Analytics', AnalyticsSchema);
