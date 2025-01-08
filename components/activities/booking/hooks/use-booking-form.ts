'use client';

import { useState } from 'react';
import { useFormValidation } from '@/lib/hooks/use-form-validation';
import { bookingValidationRules } from '../validation/booking-rules';
import { Activity } from '@/lib/types/activity';

export function useBookingForm(activity: Activity) {
  const [formData, setFormData] = useState({
    participants: 2,
    date: new Date(),
  });
  
  const { errors, validateForm } = useFormValidation();

  const handleSubmit = async () => {
    const isValid = validateForm(formData, bookingValidationRules);
    if (!isValid) return null;

    // Booking submission logic here
    return {
      activityId: activity.id,
      ...formData,
      totalPrice: activity.price * formData.participants,
    };
  };

  return {
    formData,
    setFormData,
    errors,
    handleSubmit,
  };
}