'use client';

import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Spinner } from '../ui/spinner';

declare global {
  interface Window {
    google: any;
  }
}

type LocationMapProps = {
  locations: Array<{
    name: string;
    coordinates: { lat: number; lng: number };
  }>;
};

export default function LocationMap({ locations }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    if (typeof window.google === 'undefined') {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        setLoading(false); // Once the script is loaded, we can initialize the map
        initMap();
      };
    } else {
      setLoading(false);
      initMap();
    }
  }, [locations]);

  const initMap = () => {
    if (!mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 6,
      center: { lat: 54.5, lng: -2 }, // Center of the UK
      mapTypeControl: false, // Hide map controls
      streetViewControl: false, // Hide street view
      zoomControl: true, // Enable zoom controls
      scaleControl: true, // Enable scale control
      styles: [ // Custom map styles for a clean look
        {
          elementType: "geometry",
          stylers: [{ color: "#212121" }]
        },
        {
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }]
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#757575" }]
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9e9e9e" }]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9e9e9e" }]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }]
        },
      ],
    });

    locations.forEach((location) => {
      const marker = new window.google.maps.Marker({
        position: location.coordinates,
        map,
        title: location.name,
        animation: window.google.maps.Animation.DROP,
      });

      marker.addListener('mouseover', () => {
        marker.setIcon('https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png');
      });

      marker.addListener('mouseout', () => {
        marker.setIcon('https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png');
      });
    });
  };

  return (
    <Card className="overflow-hidden rounded-lg shadow-lg p-4 bg-white border border-gray-200">
      <div className="relative">
        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-10">
            <Spinner size="lg" />
          </div>
        )}

        {/* Map Container */}
        <div ref={mapRef} className="h-[400px] w-full rounded-lg shadow-md" />
      </div>
    </Card>
  );
}
