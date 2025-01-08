'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Booking } from '@/lib/types/booking';
import { activities } from '@/lib/data/activities';

export function useRecentBookings() {
  const [bookings, setBookings] = useState<
    (Booking & { activity: { title: string } })[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(5);

        if (error) throw error;

        const enrichedBookings = data.map((booking) => ({
          ...booking,
          activity: {
            title:
              activities.find((a) => a.id === booking.activity_id)?.title ??
              'Unknown Activity',
          },
        }));

        setBookings(enrichedBookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return { bookings, isLoading };
}