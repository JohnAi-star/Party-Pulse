'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Activity = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  duration: string;
  groupSize: string;
};

const mockActivities: Activity[] = [
  {
    id: '1',
    title: 'Escape Room Challenge',
    description: 'Work together to solve puzzles and escape within 60 minutes',
    image:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 25,
    location: 'London',
    duration: '1 hour',
    groupSize: '2-8 people',
  },
  {
    id: '2',
    title: 'Cocktail Making Class',
    description: 'Learn to mix and create your own signature cocktails',
    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 45,
    location: 'Manchester',
    duration: '2 hours',
    groupSize: '4-12 people',
  },
];

export default function ActivitiesPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [activities] = useState(mockActivities);

  const filteredActivities = activities.filter((activity) =>
    activity.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Activities</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredActivities.map((activity) => (
          <Card key={activity.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{activity.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {activity.description}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {activity.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {activity.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {activity.groupSize}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">
                  £{activity.price}/person
                </span>
                <Button asChild>
                  <Link href={`/activities/${activity.id}`}>View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
