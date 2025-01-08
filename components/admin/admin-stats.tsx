import { Card } from '@/components/ui/card';
import { useStats } from '@/hooks/use-stats';
import { Users, Calendar, TrendingUp, PoundSterling } from 'lucide-react';

export default function AdminStats() {
  const { stats, isLoading } = useStats();

  const items = [
    {
      name: 'Total Bookings',
      value: stats?.totalBookings ?? 0,
      icon: Calendar,
    },
    {
      name: 'Total Revenue',
      value: stats?.totalRevenue
        ? `£${stats.totalRevenue.toLocaleString()}`
        : '£0',
      icon: PoundSterling,
    },
    {
      name: 'Active Users',
      value: stats?.activeUsers ?? 0,
      icon: Users,
    },
    {
      name: 'Conversion Rate',
      value: stats?.conversionRate
        ? `${stats.conversionRate.toFixed(1)}%`
        : '0%',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Card key={item.name} className="p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary/10 p-3">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{item.name}</p>
              <p className="text-2xl font-bold">
                {isLoading ? '-' : item.value}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
