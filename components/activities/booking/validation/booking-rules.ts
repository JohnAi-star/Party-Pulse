import { ValidationRule } from '@/lib/hooks/use-form-validation';

export const bookingValidationRules: Record<string, ValidationRule[]> = {
  participants: [
    {
      type: 'required',
      fieldName: 'Number of participants',
    },
    {
      type: 'minMax',
      fieldName: 'Number of participants',
      min: 2,
      max: 50,
    },
  ],
  date: [
    {
      type: 'required',
      fieldName: 'Booking date',
    },
    {
      type: 'futureDate',
      fieldName: 'Booking date',
    },
  ],
};