import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { teamMembers } from '@/lib/data/team';

export default function AboutTeam() {
  return (
    <div className="container py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Our Team
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          Meet the passionate people behind ActivityHub
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.name} className="overflow-hidden rounded-xl shadow-xlg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="relative aspect-square">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover w-full h-full rounded-t-xl"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-lg text-gray-500">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
