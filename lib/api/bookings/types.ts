import { BookingStatus } from '@/lib/types/booking';

export class BookingError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'BookingError';
  }
}

export type CreateBookingDTO = {
  activityId: string;
  date: Date;
  participants: number;
  totalPrice: number;
};

export type BookingResponse = {
  id: string;
  status: BookingStatus;
  sessionId?: string;
};