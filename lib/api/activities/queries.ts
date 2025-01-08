import { supabase } from '@/lib/supabase/client';
import { ActivityFilters } from './types';

export function buildActivityQuery(filters?: ActivityFilters) {
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

  return query;
}