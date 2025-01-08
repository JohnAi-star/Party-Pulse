import GroupTypeCard from '@/components/group-types/group-type';
import GroupTypeFeatures from '@/components/group-types/group-types-features';
import { groupTypes } from '@/lib/data/group-types';

export const metadata = {
  title: 'Group Types | ActivityHub',
  description: 'Find the perfect activities for your group type',
};

export default function GroupTypesPage() {
  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-primary">
          Group Types
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Discover activities tailored to your specific group needs.
        </p>
      </div>

      {/* Grid Section */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groupTypes.map((groupType) => (
          <GroupTypeCard
            key={groupType.id}
            groupType={groupType}
            //@ts-ignore
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
          />
        ))}
      </div>

      {/* Feature Section */}
      <div className="mt-16">
        <GroupTypeFeatures />
      </div>
    </div>
  );
}
