import { stripe } from './config';
import { Activity } from '@/lib/types/activity';

export async function createCheckoutSession(
  activity: Activity,
  participants: number,
  date: Date
) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: activity.title,
            description: `${participants} participants - ${date.toLocaleDateString()}`,
            images: [activity.image],
          },
          unit_amount: activity.price * 100, // Convert to pence
        },
        quantity: participants,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/activities/${activity.id}`,
    metadata: {
      activityId: activity.id,
      date: date.toISOString(),
      participants: participants.toString(),
    },
  });

  return session;
}