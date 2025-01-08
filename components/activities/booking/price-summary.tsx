import { Activity } from '@/lib/types/activity';

type PriceSummaryProps = {
  activity: Activity;
  participants: number;
};

export default function PriceSummary({
  activity,
  participants,
}: PriceSummaryProps) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>Price per person</span>
        <span>£{activity.price}</span>
      </div>
      <div className="flex justify-between font-bold">
        <span>Total Price</span>
        <span>£{activity.price * participants}</span>
      </div>
    </div>
  );
}
