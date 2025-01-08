'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { activities } from '@/lib/data/activities';

type PopularActivity = {
  id: string;
  title: string;
  location: string;
  bookings: number;
  revenue: number;
};

export function usePopularActivities() {
  const [popularActivities, setPopularActivities] = useState<PopularActivity[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPopularActivities = async () => {
      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('activity_id, total_price');

        if (error) throw error;

        // Group and aggregate booking data
        const activityStats = data.reduce((acc, booking) => {
          const { activity_id, total_price } = booking;
          if (!acc[activity_id]) {
            acc[activity_id] = { bookings: 0, revenue: 0 };
          }
          acc[activity_id].bookings += 1;
          acc[activity_id].revenue += total_price;
          return acc;
        }, {} as Record<string, { bookings: number; revenue: number }>);

        // Combine with activity details and sort by bookings
        const popular = activities
          .map((activity) => ({
            id: activity.id,
            title: activity.title,
            location: activity.location,
            bookings: activityStats[activity.id]?.bookings ?? 0,
            revenue: activityStats[activity.id]?.revenue ?? 0,
          }))
          .sort((a, b) => b.bookings - a.bookings)
          .slice(0, 5);

        setPopularActivities(popular);
      } catch (error) {
        console.error('Error fetching popular activities:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularActivities();
  }, []);

  return { activities: popularActivities, isLoading };
}