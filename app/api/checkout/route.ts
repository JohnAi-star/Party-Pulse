import { NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe/checkout';
import { activities } from '@/lib/data/activities';

export async function POST(req: Request) {
  try {
    const { activityId, participants, date } = await req.json();

    const activity = activities.find((a) => a.id === activityId);
    if (!activity) {
      return NextResponse.json(
        { error: 'Activity not found' },
        { status: 404 }
      );
    }

    const session = await createCheckoutSession(
      activity,
      participants,
      new Date(date)
    );

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
