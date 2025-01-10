import { Metadata } from 'next';
import { activities } from '@/lib/data/activities';
import ActivityHeader from '@/components/activities/activity-header';
import ActivityDetails from '@/components/activities/activity-details';
import BookingForm from '@/components/activities/booking-form';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Generate static params for all activities
export async function generateStaticParams() {
  return activities.map((activity) => ({
    id: activity.id,
  }));
}

// Generate metadata dynamically based on the activity
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const activity = activities.find((a) => a.id === params.id);

  if (!activity) {
    return {}; // Return an empty object if activity is not found
  }

  return {
    title: activity.title,
    description: activity.description,
    openGraph: {
      title: activity.title,
      description: activity.description,
      images: [activity.image],
    },
  };
}

// Dynamic route page component
export default function ActivityPage({ params }: Props) {
  const activity = activities.find((a) => a.id === params.id);

  if (!activity) {
    notFound(); // If activity is not found, show a "not found" page
  }

  return (
    <div>
      <ActivityHeader activity={activity} /> {/* TypeScript should infer the correct type */}
      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ActivityDetails activity={activity} />
          </div>
          <div>
            <div className="sticky top-24">
              <BookingForm activity={activity} /> {/* TypeScript should infer the correct type */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
