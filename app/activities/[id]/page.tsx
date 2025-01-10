import { Metadata } from 'next';
import { activities } from '@/lib/data/activities';
import ActivityHeader from '@/components/activities/activity-header';
import ActivityDetails from '@/components/activities/activity-details';
import BookingForm from '@/components/activities/booking-form';
import { notFound } from 'next/navigation';
import { PageProps } from 'next';
type Props = PageProps & {
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
    notFound(); // If activity is not found, show 404
  }

  const { title, date, description } = activity; // Extract required fields

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
      <ActivityHeader title={title} date={date} description={description} />
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
