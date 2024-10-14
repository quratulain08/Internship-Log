import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

// GET: Fetch all approved users
export async function GET() {
  try {
    await connectToDatabase();
    const users = await User.find({ isApproved: true }).select('-password');
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching approved users:', error);
    return NextResponse.json({ error: 'Failed to fetch approved users' }, { status: 500 });
  }
}
