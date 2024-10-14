import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import StudentInternshipApproval from '@/models/StudentInternshipApproval';

// GET: Fetch all student internship approvals from the database.
export async function GET() {
  try {
    // Connect to the MongoDB database.
    await connectToDatabase();

    // Fetch all student internship approvals.
    const approvals = await StudentInternshipApproval.find({}).populate('internship');
    return NextResponse.json(approvals);
  } catch (error) {
    console.error('Error fetching internship approvals:', error);
    return NextResponse.json({ error: 'Failed to fetch internship approvals' }, { status: 500 });
  }
}

// POST: Add a new student internship approval to the database.
export async function POST(req: Request) {
  try {
    const {
      projectId,
      studentName,
      internshipType,
      studentId,
      department,
      projectTitle,
      facultySupervisor,
      hostInstitution,
      siteSupervisor,
      cv,
      email,
      internshipId
    } = await req.json();

    await connectToDatabase();

    const newApproval = new StudentInternshipApproval({
      projectId,
      studentName,
      internshipType,
      studentId,
      department,
      projectTitle,
      facultySupervisor,
      hostInstitution,
      siteSupervisor,
      cv,
      email,
      internship: internshipId // Foreign key reference to Internship
    });

    await newApproval.save();

    return NextResponse.json({ message: 'Internship approval added successfully!' });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error adding internship approval:', error.message);
      return NextResponse.json({ error: 'Failed to add internship approval', details: error.message }, { status: 500 });
    } else {
      console.error('Error adding internship approval:', error);
      return NextResponse.json({ error: 'Failed to add internship approval', details: 'An unknown error occurred' }, { status: 500 });
    }
  }
}

// DELETE: Remove a student internship approval from the database by its ID.
export async function DELETE(req: Request) {
  try {
    // Extract the approval ID from the request body.
    const { id } = await req.json();

    // Connect to the MongoDB database.
    await connectToDatabase();

    // Use the Mongoose `findByIdAndDelete()` method to delete the approval with the given ID.
    await StudentInternshipApproval.findByIdAndDelete(id);

    // Return a success message indicating the approval has been deleted.
    return NextResponse.json({ message: 'Internship approval deleted successfully!' });
  } catch (error) {
    console.error('Error deleting internship approval:', error);
    return NextResponse.json({ error: 'Failed to delete internship approval' }, { status: 500 });
  }
}
