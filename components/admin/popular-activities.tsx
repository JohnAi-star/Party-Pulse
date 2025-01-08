import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { usePopularActivities } from '@/hooks/use-activities';

export default function PopularActivities() {
  const { activities, isLoading } = usePopularActivities();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : activities?.length === 0 ? (
            <p className="text-muted-foreground">No data available</p>
          ) : (
            activities?.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between border-b pb-4 last:border-0"
              >
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{activity.bookings} bookings</p>
                  <p className="text-sm text-muted-foreground">
                    £{activity.revenue} revenue
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}