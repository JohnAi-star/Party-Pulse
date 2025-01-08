import { supabase } from '@/lib/supabase/client';
import { Activity } from '@/lib/types/activity';

export class ActivityError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'ActivityError';
  }
}

export async function getActivities(filters?: {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  groupSize?: number;
}): Promise<Activity[]> {
  try {
    let query = supabase.from('activities').select('*');

    if (filters?.location) {
      query = query.ilike('location', `%${filters.location}%`);
    }

    if (filters?.minPrice) {
      query = query.gte('price', filters.minPrice);
    }

    if (filters?.maxPrice) {
      query = query.lte('price', filters.maxPrice);
    }

    if (filters?.groupSize) {
      query = query.filter('group_size', 'cs', `${filters.groupSize}`);
    }

    const { data, error } = await query;

    if (error) {
      throw new ActivityError(error.message, 'QUERY_ERROR');
    }

    if (!data) {
      return [];
    }

    return data as Activity[];
  } catch (error) {
    if (error instanceof ActivityError) {
      throw error;
    }
    throw new ActivityError('Failed to fetch activities', 'UNKNOWN_ERROR');
  }
}

export async function getActivityById(id: string): Promise<Activity> {
  try {
    const { data, error } = await supabase
      .from('activities')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new ActivityError(error.message, 'QUERY_ERROR');
    }

    if (!data) {
      throw new ActivityError('Activity not found', 'NOT_FOUND');
    }

    return data as Activity;
  } catch (error) {
    if (error instanceof ActivityError) {
      throw error;
    }
    throw new ActivityError('Failed to fetch activity', 'UNKNOWN_ERROR');
  }
}