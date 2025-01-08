import { Calendar, MapPin, Users } from 'lucide-react';

export const features = [
  {
    name: 'Easy Booking',
    description:
      'Book your perfect activity in minutes with our simple booking system',
    icon: <Calendar className="h-6 w-6 text-primary" />,
  },
  {
    name: 'Location Variety',
    description:
      'Activities available across multiple locations to suit your needs',
    icon: <MapPin className="h-6 w-6 text-primary" />,
  },
  {
    name: 'Group Friendly',
    description:
      'Specially curated experiences perfect for groups of all sizes',
    icon: <Users className="h-6 w-6 text-primary" />,
  },
];
