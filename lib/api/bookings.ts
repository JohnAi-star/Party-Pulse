import { supabase } from '@/lib/supabase/client';
import { BookingDetails, Booking } from '@/lib/types/booking';

export async function createBooking(booking: BookingDetails): Promise<Booking> {
  const user = await supabase.auth.getUser();

  if (!user.data.user) {
    throw new Error('User must be authenticated to create a booking');
  }

  const { data, error } = await supabase
    .from('bookings')
    .insert({
      activity_id: booking.activityId,
      user_id: user.data.user.id,
      date: booking.date.toISOString(),
      participants: booking.participants,
      total_price: booking.totalPrice,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return {
    id: data.id,
    activityId: data.activity_id,
    userId: data.user_id,
    date: new Date(data.date),
    participants: data.participants,
    totalPrice: data.total_price,
    status: data.status,
    createdAt: new Date(data.created_at),
    updatedAt: new Date(data.updated_at),
  };
}

export async function getUserBookings(): Promise<Booking[]> {
  const { data, error } = await supabase
    .from('bookings')
    .select('*, activities(*)')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data.map((booking) => ({
    id: booking.id,
    activityId: booking.activity_id,
    userId: booking.user_id,
    date: new Date(booking.date),
    participants: booking.participants,
    totalPrice: booking.total_price,
    status: booking.status,
    createdAt: new Date(booking.created_at),
    updatedAt: new Date(booking.updated_at),
    activity: booking.activities,
  }));
}