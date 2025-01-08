
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import DatePicker from '../date-picker';

type BookingFormFieldsProps = {
  participants: number;
  date: Date;
  onParticipantsChange: (value: number) => void;
  onDateChange: (date: Date) => void;
  errors: Record<string, string>;
};

export function BookingFormFields({
  participants,
  date,
  onParticipantsChange,
  onDateChange,
  errors,
}: BookingFormFieldsProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="participants">Number of Participants</Label>
        <Input
          id="participants"
          type="number"
          min={2}
          max={50}
          value={participants}
          onChange={(e) => onParticipantsChange(parseInt(e.target.value))}
        />
        {errors.participants && (
          <p className="mt-1 text-sm text-destructive">{errors.participants}</p>
        )}
      </div>
      
      <div>
        <Label>Date</Label>
        <DatePicker date={date}
        //@ts-ignore
        onDateChange={onDateChange} />
        {errors.date && (
          <p className="mt-1 text-sm text-destructive">{errors.date}</p>
        )}
      </div>
    </div>
  );
}