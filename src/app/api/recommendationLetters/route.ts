import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import RecommendationLetter from '@/models/RecommendationLetter';

// GET: Fetch all recommendation letters
export async function GET() {
  try {
    await connectToDatabase();
    const letters = await RecommendationLetter.find({}).exec();
    return NextResponse.json(letters);
  } catch (error) {
    console.error('Error fetching recommendation letters:', error);
    return NextResponse.json({ error: 'Failed to fetch recommendation letters' }, { status: 500 });
  }
}

// POST: Create a recommendation letter
export async function POST(req: Request) {
  try {
    const data = await req.json();
    await connectToDatabase();

    const newLetter = new RecommendationLetter(data);
    await newLetter.save();

    return NextResponse.json({ message: 'Recommendation letter created successfully!' });
  } catch (error) {
    console.error('Error creating recommendation letter:', error);
    return NextResponse.json({ error: 'Failed to create recommendation letter' }, { status: 500 });
  }
}