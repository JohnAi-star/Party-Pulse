'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LocationSearch() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/activities?location=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-4 items-center justify-center p-4 bg-white rounded-lg shadow-lg w-full md:w-[500px] mx-auto">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-transform duration-200 ease-in-out hover:text-gray-600" />
        <Input
          type="text"
          placeholder="Search locations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 ease-in-out"
        />
      </div>
      <Button type="submit" className="shrink-0 rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">
        Search
      </Button>
    </form>
  );
}
