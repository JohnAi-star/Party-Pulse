// Inside '@/components/activities/activity-details.tsx'
import { Activity } from '@/lib/types/activity';

export type BookingFormProps = {
  activity: Activity;
};

export type BookingSummaryProps = {
  activity: Activity;
  participants: number;
  date?: Date;
};

export type ParticipantSelectProps = {
  participants: number;
  minParticipants: number;
  maxParticipants: number;
  onParticipantsChange: (participants: number) => void;
};

export type PaymentButtonProps = {
  activity: Activity;
  participants: number;
  date?: Date;
  disabled?: boolean;
};

// Your actual ActivityDetails component
const ActivityDetails = ({ activity }: { activity: Activity }) => {
  return (
    <div>
      <h2>{activity.title}</h2>
      <p>{activity.description}</p>
      {/* You can render other details of the activity here */}
    </div>
  );
};

export default ActivityDetails; // Ensure to export it as default
