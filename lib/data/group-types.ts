import { GroupType } from '../types/group-type';

export const groupTypes: GroupType[] = [
  {
    id: 'team-building',
    name: 'Team Building',
    description: 'Strengthen team bonds and improve collaboration through engaging activities',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Problem-solving challenges',
      'Communication exercises',
      'Team competitions',
      'Professional facilitation',
    ],
  },
  {
    id: 'stag-parties',
    name: 'Stag Parties',
    description: 'Unforgettable experiences for the groom and his friends',
    image: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Exciting adventures',
      'Group activities',
      'Customizable packages',
      'Multiple locations',
    ],
  },
  {
    id: 'hen-parties',
    name: 'Hen Parties',
    description: 'Celebrate in style with unique and fun activities',
    image: 'https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Creative workshops',
      'Luxury experiences',
      'Group packages',
      'Photography included',
    ],
  },
];