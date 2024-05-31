import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongoose';
import Course from '@/db/models/Course';

export async function GET() {
  await connectToDatabase();
  const courses = await Course.find({});
  return NextResponse.json(courses);
}

export async function POST(request: Request) {
  await connectToDatabase();
  const data = await request.json();
  const newCourse = new Course(data);
  await newCourse.save();
  return NextResponse.json(newCourse);
}
