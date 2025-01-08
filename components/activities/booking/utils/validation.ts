export function validateBooking(participants: number, date?: Date): string | null {
  if (!date) {
    return 'Please select a date';
  }
  
  if (participants < 2) {
    return 'Minimum 2 participants required';
  }
  
  if (date < new Date()) {
    return 'Please select a future date';
  }
  
  return null;
}