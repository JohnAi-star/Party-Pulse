import { supabase } from '@/lib/supabase/client';
import { stripe } from '@/lib/stripe/config';
import { CreateBookingDTO, BookingError, BookingResponse } from './types';
import { handleDatabaseError } from '@/lib/utils/error-handlers';

export async function createBooking(booking: CreateBookingDTO): Promise<BookingResponse> {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'gbp',
          product_data: {
            name: 'Activity Booking',
            description: `${booking.participants} participants - ${booking.date.toLocaleDateString()}`,
          },
          unit_amount: Math.round(booking.totalPrice * 100),
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/activities/${booking.activityId}`,
    });

    const { data, error } = await supabase
      .from('bookings')
      .insert({
        activity_id: booking.activityId,
        date: booking.date.toISOString(),
        participants: booking.participants,
        total_price: booking.totalPrice,
        stripe_session_id: session.id,
      })
      .select()
      .single();

    if (error) throw handleDatabaseError(error);

    return {
      id: data.id,
      status: data.status,
      sessionId: session.id,
    };
  } catch (error) {
    if (error instanceof BookingError) throw error;
    throw new BookingError('Failed to create booking', 'CREATE_ERROR');
  }
}