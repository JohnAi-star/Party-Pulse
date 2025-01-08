'use client';

import { useState, useEffect } from 'react';
import { Users, Calendar, MapPin, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const stats = [
  { name: 'Happy Customers', value: '10,000+', icon: Users },
  { name: 'Activities Completed', value: '5,000+', icon: Calendar },
  { name: 'Locations', value: '50+', icon: MapPin },
  { name: 'Average Rating', value: '4.8/5', icon: Star },
];

export default function AboutStats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.name}
              className={`p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center rounded-full bg-black p-4 shadow-md">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.name}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
