// src/app/api/users/login/route.ts
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcrypt'; // For password validation
import jwt from 'jsonwebtoken'; // For generating JWT tokens

const SECRET_KEY = process.env.JWT_SECRET || 'yourSecretKey';

// POST: Login a user
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    await connectToDatabase();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 400 });
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
    }

    // Check if the user's account is approved
    if (!user.isApproved) {
      return NextResponse.json({ error: 'Account not approved. Please contact the admin.' }, { status: 403 });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role }, // Payload
      SECRET_KEY, // Secret key
      { expiresIn: '1h' } // Token expiration time
    );

    return NextResponse.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ error: 'Failed to login' }, { status: 500 });
  }
}
