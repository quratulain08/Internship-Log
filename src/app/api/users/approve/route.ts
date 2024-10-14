import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Users from '@/models/User';

// POST: Approve user by email and assign role (Superadmin action).
export async function POST(req: Request) {
  try {
    const { email, role } = await req.json(); // Extract email and role from request body

    // Validate email presence
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Valid roles list
    const validRoles = [
      'student',
      'faculty',
      'site-supervisor',
      'au-placement',
      'dic',
    ];

    // Validate role (if provided)
    if (role && !validRoles.includes(role)) {
      return NextResponse.json(
        { error: `Invalid role. Allowed roles are: ${validRoles.join(', ')}` },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Find user by email
    const user = await Users.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if user is already approved
    if (user.isApproved) {
      return NextResponse.json({ error: 'User is already approved' }, { status: 400 });
    }

    // Approve user and assign role if provided
    user.isApproved = true;
    if (role) {
      user.role = role;
    }
    await user.save();

    // Respond with success message and updated user data
    return NextResponse.json({
      message: 'User approved successfully',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        isApproved: user.isApproved,
      },
    });
  } catch (error) {
    console.error('Error approving user:', error);
    return NextResponse.json(
      { error: 'Failed to approve user. Please try again later.' },
      { status: 500 }
    );
  }
}
