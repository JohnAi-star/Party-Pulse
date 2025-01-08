'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { LocationInfo } from '@/lib/types/location';

type LocationCardProps = {
  location: LocationInfo;
};

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <Card className="group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <Link href={`/activities?location=${encodeURIComponent(location.name)}`}>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={location.image}
            alt={location.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardContent className="p-6 bg-white dark:bg-gray-800 rounded-b-lg shadow-lg">
          <div className="flex items-center gap-3 text-primary">
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{location.name}</h3>
          </div>
          <p className="mt-2 text-base text-muted-foreground">
            {location.activityCount} activities available
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}
