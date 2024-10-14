import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

// GET: Fetch all users with isApproved: false
export async function GET() {
  try {
    await connectToDatabase();
    const users = await User.find({ isApproved: false }).select('-password');
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching unapproved users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
