import { Shield, Users, Calendar, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Group Size Flexibility',
    description: 'Activities suitable for groups of all sizes',
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: 'Easy Scheduling',
    description: 'Find available slots that work for your group',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Safety First',
    description: 'All activities follow strict safety guidelines',
  },
  {
    icon: <ThumbsUp className="h-8 w-8" />,
    title: 'Satisfaction Guaranteed',
    description: 'Rated highly by previous groups',
  },
];

export default function GroupTypeFeatures() {
  return (
    <div className="mt-24 py-16 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
      <div className="container mx-auto px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl p-6 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-primary/30 text-primary shadow-md">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-lg font-bold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
