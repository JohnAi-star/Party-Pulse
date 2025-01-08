'use client';

import { useState } from 'react';
import { Activity } from '@/lib/types/activity';

export function useBooking(activity: Activity) {
  const [participants, setParticipants] = useState(2);
  const [date, setDate] = useState<Date>();
  
  const isValid = Boolean(date && participants >= 2);
  const total = activity.price * participants;

  return {
    participants,
    setParticipants,
    date,
    setDate,
    isValid,
    total
  };
}