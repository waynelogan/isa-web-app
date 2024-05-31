import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongoose';
import User from '@/db/models/User';

export async function GET() {
  await connectToDatabase();
  const users = await User.find({});
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  await connectToDatabase();
  const data = await request.json();
  const newUser = new User(data);
  await newUser.save();
  return NextResponse.json(newUser);
}
