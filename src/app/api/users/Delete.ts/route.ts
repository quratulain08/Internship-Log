// src/app/api/users/route.ts
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

// DELETE: Remove a user from the database by their ID.
export async function DELETE(req: Request) {
    try {
      const { id } = await req.json();
  
      await connectToDatabase();
  
      await User.findByIdAndDelete(id);
  
      return NextResponse.json({ message: 'User deleted successfully!' });
    } catch (error) {
      console.error('Error deleting user:', error);
      return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
    }
  }
  