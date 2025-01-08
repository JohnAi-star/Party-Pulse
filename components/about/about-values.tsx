import { Heart, Users, Shield, Sparkles } from 'lucide-react';

const values = [
  {
    icon: <Users className="h-6 w-6" />,
    name: 'Community First',
    description: 'Building stronger connections through shared experiences.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    name: 'Trust & Safety',
    description: 'Ensuring every activity meets our high safety standards.',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    name: 'Excellence',
    description: 'Delivering exceptional experiences every time.',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    name: 'Passion',
    description: 'Loving what we do and sharing that enthusiasm.',
  },
];

export default function AboutValues() {
  return (
    <section className="bg-gradient-to-b from-background-start-rgb to-background-end-rgb py-16">
      <div className="container px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Our Values
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The principles that guide everything we do.
          </p>
        </div>

        <div className="grid gap-12 mt-16 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {values.map((value) => (
            <div
              key={value.name}
              className="relative p-6 bg-white shadow-md rounded-lg transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                {value.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-800">{value.name}</h3>
              <p className="mt-4 text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
