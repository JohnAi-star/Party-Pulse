'use client';

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/activities?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Group activities"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-8">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          Discover & Book Unforgettable Group Activities
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-200 sm:mt-6 sm:text-xl">
          From team building to celebrations, find the perfect activity for your group.
        </p>

        {/* Search Bar */}
        <div className="mt-8 w-full max-w-lg">
          <div className="relative flex items-center bg-white rounded-full shadow-lg">
            <Search className="absolute left-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search activities..."
              className="w-full rounded-full px-12 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button
              size="lg"
              className="absolute right-2 shrink-0 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
