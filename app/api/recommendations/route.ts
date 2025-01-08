import { NextResponse } from 'next/server';
import { getPersonalizedRecommendations } from '@/lib/api/recommendations';

export async function POST(req: Request) {
  try {
    const { preferences, previousBookings } = await req.json();
    const recommendations = await getPersonalizedRecommendations(
      preferences,
      previousBookings
    );

    return NextResponse.json({ recommendations });
  } catch (error) {
    console.error('Recommendations error:', error);
    return NextResponse.json(
      { error: 'Failed to get recommendations' },
      { status: 500 }
    );
  }
}
