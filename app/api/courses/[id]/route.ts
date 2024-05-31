import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongoose';
import Course from '@/db/models/Course';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const course = await Course.findById(params.id);
  if (!course) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }
  return NextResponse.json(course);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const data = await request.json();
  const course = await Course.findByIdAndUpdate(params.id, data, { new: true });
  if (!course) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }
  return NextResponse.json(course);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const course = await Course.findByIdAndDelete(params.id);
  if (!course) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }
  return NextResponse.json({ message: 'Course deleted successfully' });
}
