import { Card } from '@/components/ui/card';
import AdminStats from '@/components/admin/admin-stats';
import RecentBookings from '@/components/admin/recent-bookings';
import PopularActivities from '@/components/admin/popular-activities';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-6 py-8">
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200 mb-6">
        Admin Dashboard
      </h1>

      <Card className="mb-8 shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800 border dark:border-gray-700">
        <AdminStats />
      </Card>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800 border dark:border-gray-700">
          <RecentBookings />
        </Card>
        <Card className="shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800 border dark:border-gray-700">
          <PopularActivities />
        </Card>
      </div>
    </div>
  );
}
