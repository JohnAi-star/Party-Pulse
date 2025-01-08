import { Activity } from '@/lib/types/activity';
import { ActivityError, ActivityFilters } from './types';
import { buildActivityQuery } from './queries';

export async function getActivities(filters?: ActivityFilters): Promise<Activity[]> {
  try {
    const query = buildActivityQuery(filters);
    const { data, error } = await query;

    if (error) {
      throw new ActivityError(error.message, 'QUERY_ERROR');
    }

    return data as Activity[] || [];
  } catch (error) {
    if (error instanceof ActivityError) {
      throw error;
    }
    throw new ActivityError('Failed to fetch activities', 'UNKNOWN_ERROR');
  }
}

export async function getActivityById(id: string): Promise<Activity> {
  try {
    //@ts-ignore
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