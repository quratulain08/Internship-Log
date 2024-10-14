import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Internship from '@/models/Internship';

// GET: Fetch all internships from the database.
export async function GET() {
  try {
    // Connect to the MongoDB database.
    await connectToDatabase();

    // Fetch all internships.
    const internships = await Internship.find({});
    return NextResponse.json(internships);
  } catch (error) {
    console.error('Error fetching internships:', error);
    return NextResponse.json({ error: 'Failed to fetch internships' }, { status: 500 });
  }
}

// POST: Add a new internship to the database.
export async function POST(req: Request) {
  try {
    const { hostInstitution, siteSupervisor, description, availableInternships, internshipType, joiningDate, email } = await req.json();
    
    await connectToDatabase();

    const newInternship = new Internship({
      hostInstitution,
      siteSupervisor,
      projectDescription: description, // Match with the schema
      availableInternships: Number(availableInternships), // Ensure it's a number
      internshipType,
      joiningDate,
      emailHostInstitution: email // Match with the schema
    });

    await newInternship.save();

    return NextResponse.json({ message: 'Internship added successfully!' });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error adding internship:', error.message);
      return NextResponse.json({ error: 'Failed to add internship', details: error.message }, { status: 500 });
    } else {
      console.error('Error adding internship:', error);
      return NextResponse.json({ error: 'Failed to add internship', details: 'An unknown error occurred' }, { status: 500 });
    }
  }
}


// DELETE: Remove an internship from the database by its ID.
export async function DELETE(req: Request) {
  try {
    // Extract the internship ID from the request body.
    const { id } = await req.json();

    // Connect to the MongoDB database.
    await connectToDatabase();

    // Use the Mongoose `findByIdAndDelete()` method to delete the internship with the given ID.
    await Internship.findByIdAndDelete(id);

    // Return a success message indicating the internship has been deleted.
    return NextResponse.json({ message: 'Internship deleted successfully!' });
  } catch (error) {
    // If an error occurs during the deletion, log it and return a 500 status with an error message.
    console.error('Error deleting internship:', error);
    return NextResponse.json({ error: 'Failed to delete internship' }, { status: 500 });
  }
}


