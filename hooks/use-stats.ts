'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';

type Stats = {
  totalBookings: number;
  totalRevenue: number;
  activeUsers: number;
  conversionRate: number;
};

export function useStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('*');

        if (error) throw error;

        // Calculate stats from the data
        const totalBookings = data.length;
        const totalRevenue = data.reduce(
          (sum, booking) => sum + booking.total_price,
          0
        );

        // Get unique users who made bookings
        const uniqueUsers = new Set(data.map((booking) => booking.user_id));
        const activeUsers = uniqueUsers.size;

        // Simple conversion rate calculation
        const conversionRate = (totalBookings / activeUsers) * 100;

        setStats({
          totalBookings,
          totalRevenue,
          activeUsers,
          conversionRate,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, isLoading };
}