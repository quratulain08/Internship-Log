// src/app/api/users/route.ts
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcrypt';  // For password hashing and validation
import jwt from 'jsonwebtoken';  // For generating tokens

const SECRET_KEY = process.env.JWT_SECRET || 'yourSecretKey';

// GET: Fetch all users from the database (for admins only).
export async function GET() {
  try {
    await connectToDatabase();
    const users = await User.find({}).select('-password');
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// POST: Add a new user to the database (Register).
export async function POST(req: Request) {
  try {
    const { username, email, password, role } = await req.json();

    await connectToDatabase();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User with this email already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);  // Hash the password

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
      isApproved: false,  // Default to false until approved by superadmin
    });

    await newUser.save();

    return NextResponse.json({ message: 'User registered successfully! Awaiting approval.' });
  } catch (error) {
    console.error('Error registering user:', error); // Log the error for detailed debugging
    return NextResponse.json({ error: `Failed to register user: ${error.message}` }, { status: 500 });
  }
}

