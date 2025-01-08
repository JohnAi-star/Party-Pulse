export type PopularActivity = {
  id: string;
  title: string;
  location: string;
  bookings: number;
  revenue: number;
};

export type AdminBooking = {
  id: string;
  activity: {
    title: string;
  };
  date: string;
  totalPrice: number;
  participants: number;
};