import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

type StatCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  isLoading?: boolean;
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  isLoading = false,
}: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{isLoading ? '-' : value}</p>
        </div>
      </div>
    </Card>
  );
}
