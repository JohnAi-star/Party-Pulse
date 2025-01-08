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