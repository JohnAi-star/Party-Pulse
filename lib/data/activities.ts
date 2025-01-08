import { Activity } from '../types/activity';

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Escape Room Challenge',
    description:
      'Work together to solve puzzles and escape within 60 minutes. Perfect for team building and group bonding.',
    image:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 25,
    location: 'London',
    duration: '1 hour',
    groupSize: '2-8 people',
    highlights: [
      'Immersive themed rooms',
      'Perfect for team building',
      'Multiple difficulty levels',
      'Professional game masters',
    ],
    included: [
      'Game master assistance',
      'Safety briefing',
      'All necessary equipment',
      'Team photo',
    ],
    requirements: [
      'Minimum 2 players',
      'Suitable for ages 12+',
      'No physical requirements',
    ],
    cancellationPolicy: 'Free cancellation up to 24 hours before the activity',
  },
  {
    id: '2',
    title: 'Cocktail Making Class',
    description:
      'Learn to mix and create your own signature cocktails with professional mixologists.',
    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 45,
    location: 'Manchester',
    duration: '2 hours',
    groupSize: '4-12 people',
    highlights: [
      'Professional mixologist guidance',
      'Create 3 signature cocktails',
      'Take home recipe cards',
      'Complimentary welcome drink',
    ],
    included: [
      'All ingredients and equipment',
      'Welcome drink',
      'Recipe cards',
      'Certificate of completion',
    ],
    requirements: ['Must be 18 or older', 'Minimum 4 participants'],
    cancellationPolicy: 'Free cancellation up to 48 hours before the activity',
  },
];
