export function calculateBookingPrice(basePrice: number, participants: number) {
  const subtotal = basePrice * participants;
  const serviceFee = subtotal * 0.1; // 10% service fee
  const total = subtotal + serviceFee;
  
  return {
    subtotal,
    serviceFee,
    total
  };
}