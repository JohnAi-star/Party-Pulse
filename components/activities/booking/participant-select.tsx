import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type ParticipantSelectProps = {
  participants: number;
  minParticipants: number;
  maxParticipants: number;
  onParticipantsChange: (participants: number) => void;
};

export default function ParticipantSelect({
  participants,
  minParticipants,
  maxParticipants,
  onParticipantsChange,
}: ParticipantSelectProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="participants">Number of Participants</Label>
      <Input
        id="participants"
        type="number"
        min={minParticipants}
        max={maxParticipants}
        value={participants}
        onChange={(e) => onParticipantsChange(parseInt(e.target.value))}
      />
      <p className="text-xs text-muted-foreground">
        This activity requires {minParticipants}-{maxParticipants} participants
      </p>
    </div>
  );
}
