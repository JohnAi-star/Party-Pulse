import { Metadata } from 'next';
import { activities } from '@/lib/data/activities';
import ActivityHeader from '@/components/activities/activity-header';
import ActivityDetails from '@/components/activities/activity-details';
import BookingForm from '@/components/activities/booking-form';
import { notFound } from 'next/navigation';

// Define Props explicitly
interface Props {
  params: {
    id: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
}

// Generate static parameters for dynamic routes
export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  return activities.map((activity) => ({
    id: activity.id,
  }));
}

// Generate metadata dynamically based on the activity
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const activity = activities.find((a) => a.id === params.id);

  if (!activity) {
    return {}; // Return empty metadata if activity is not found
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
    return notFound(); // If activity is not found, show 404
  }

  const handleBookingSubmit = (formData: {
    name: string;
    email: string;
    date: string;
    time: string;
    guests: number;
  }) => {
    // Handle booking logic here, e.g., send data to API or log it
    console.log('Booking submitted:', formData);
  };

  return (
    <div>
      <ActivityHeader
        title={activity.title}
        date={activity.date} // Ensure `date` exists in the `Activity` type
        description={activity.description}
      />
      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ActivityDetails activity={activity} />
          </div>
          <div>
            <div className="sticky top-24">
              <BookingForm onSubmit={handleBookingSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
