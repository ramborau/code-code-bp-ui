/**
 * StatsCard Component
 *
 * Display key metrics with trend indicators
 */

'use client'

import Card from '@/demo/src/components/ui/Card'
import GrowShrinkValue from '@/demo/src/components/shared/GrowShrinkValue'

interface StatsCardProps {
  /** Card title */
  title: string
  /** Metric value */
  value: string | number
  /** Trend percentage (e.g., "+12%", "-5%") */
  trend?: string
  /** Optional icon */
  icon?: React.ReactNode
  /** Loading state */
  loading?: boolean
}

/**
 * StatsCard displays a key metric with optional trend indicator
 */
const StatsCard = ({ title, value, trend, icon, loading = false }: StatsCardProps) => {
  const trendValue = trend ? parseFloat(trend.replace('%', '')) : 0

  if (loading) {
    return (
      <Card>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {title}
        </h4>
        {icon && (
          <div className="text-gray-400 text-xl">
            {icon}
          </div>
        )}
      </div>

      <div className="flex items-end justify-between">
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {value}
        </div>
        {trend && (
          <GrowShrinkValue
            value={trendValue}
            positiveLabel={trend}
            negativeLabel={trend}
          />
        )}
      </div>
    </Card>
  )
}

export default StatsCard
