import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongoose';
import User from '@/db/models/User';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const user = await User.findById(params.id);
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const data = await request.json();
  const user = await User.findByIdAndUpdate(params.id, data, { new: true });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const user = await User.findByIdAndDelete(params.id);
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  return NextResponse.json({ message: 'User deleted successfully' });
}
