/**
 * Dashboard Page
 *
 * Main dashboard with statistics and overview
 */

import StatsCard from '../../../components/views/dashboard/StatsCard'
import { mockDashboardStats } from '../../../mock/users'
import { FiUsers, FiDollarSign, FiCheckCircle, FiTrendingUp } from 'react-icons/fi'

export const metadata = {
  title: 'Dashboard - TEST Project',
  description: 'Overview dashboard with key metrics and statistics',
}

const DashboardPage = () => {
  const stats = mockDashboardStats

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Welcome back! Here's what's happening with your application.
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value={stats.totalUsers.toLocaleString()}
          trend={`+${stats.userGrowth}%`}
          icon={<FiUsers />}
        />
        <StatsCard
          title="Active Users"
          value={stats.activeUsers.toLocaleString()}
          trend="+8%"
          icon={<FiCheckCircle />}
        />
        <StatsCard
          title="Total Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          trend={`+${stats.revenueGrowth}%`}
          icon={<FiDollarSign />}
        />
        <StatsCard
          title="Pending Tasks"
          value={stats.pendingTasks}
          trend="-5%"
          icon={<FiTrendingUp />}
        />
      </div>

      {/* Additional Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Recent Activity
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Activity feed component would go here...
            </p>
          </div>
        </div>

        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Actions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Quick action buttons would go here...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
