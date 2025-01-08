import { Activity } from '../types/activity';
import { LocationInfo } from '../types/location';

const locationImages: Record<string, string> = {
  'London': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  'Manchester': 'https://images.unsplash.com/photo-1611890798517-07b0fcb4a811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  'Birmingham': 'https://images.unsplash.com/photo-1617126578183-d2c6f03fc18f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  'Liverpool': 'https://images.unsplash.com/photo-1628777222379-c7cd80d62f13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
};

export function getUniqueLocations(activities: Activity[]): LocationInfo[] {
  const locationCounts = activities.reduce((acc, activity) => {
    acc[activity.location] = (acc[activity.location] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(locationCounts).map(([name, count]) => ({
    name,
    image: locationImages[name] || 'https://images.unsplash.com/photo-1618983344489-92bec3b4aada?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    activityCount: count,
  }));
}