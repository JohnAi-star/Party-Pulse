import { Activity } from '@/lib/types/activity';
import { formatPrice } from '@/lib/utils/date';

type BookingSummaryProps = {
  activity: Activity;
  participants: number;
};

export function BookingSummary({ activity, participants }: BookingSummaryProps) {
  const subtotal = activity.price * participants;
  const serviceFee = subtotal * 0.1;
  const total = subtotal + serviceFee;

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Service fee</span>
        <span>{formatPrice(serviceFee)}</span>
      </div>
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>
    </div>
  );
}