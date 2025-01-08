export type BookingDetails = {
  activityId: string;
  date: Date;
  participants: number;
  totalPrice: number;
};

export type TimeSlot = {
  id: string;
  time: string;
  available: boolean;
  maxParticipants: number;
};

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

export type Booking = {
  id: string;
  activityId: string;
  userId: string;
  date: Date;
  participants: number;
  totalPrice: number;
  status: BookingStatus;
  createdAt: Date;
  updatedAt: Date;
};
