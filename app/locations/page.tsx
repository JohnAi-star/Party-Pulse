import { activities } from '@/lib/data/activities';
import LocationCard from '@/components/locations/location-card';
import LocationSearch from '@/components/locations/location-search';
import { getUniqueLocations } from '@/lib/utils/location';

export const metadata = {
  title: 'Locations | ActivityHub',
  description: 'Discover amazing group activities across different locations',
};

export default function LocationsPage() {
  const locations = getUniqueLocations(activities);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header Section */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Explore Our Locations
        </h1>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl">
          Find exciting group activities in your preferred destination. Discover new adventures and create lasting memories.
        </p>
      </div>

      {/* Search Section */}
      <div className="mt-8 flex justify-center">
        <LocationSearch />
      </div>

      {/* Locations Grid */}
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((location) => (
          <LocationCard
            key={location.name}
            location={location}
          />
        ))}
      </div>

      {/* Call to Action Section */}
      {locations.length === 0 && (
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-500">
            No locations found. Try searching for a different area or explore our featured activities.
          </p>
        </div>
      )}
    </div>
  );
}
