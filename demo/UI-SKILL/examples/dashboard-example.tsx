/**
 * Dashboard Example
 * Demonstrates how to build a complete dashboard using Ecme components
 */

'use client';

import { useState, useEffect } from 'react';
import { AdaptiveCard } from '@/components/shared/AdaptiveCard';
import { Chart } from '@/components/shared/Chart';
import { DataTable } from '@/components/shared/DataTable';
import { GrowShrinkValue } from '@/components/shared/GrowShrinkValue';
import { AbbreviateNumber } from '@/components/shared/AbbreviateNumber';
import { IconText } from '@/components/shared/IconText';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { useResponsive, useDebounce } from '@/utils/hooks';
import { HiUsers, HiCurrencyDollar, HiShoppingCart, HiTrendingUp } from 'react-icons/hi';
import type { DataTableColumn } from '@/components/shared/DataTable';

// ============================================
// TYPES & INTERFACES
// ============================================

interface DashboardStats {
  users: {
    total: number;
    previous: number;
  };
  revenue: {
    total: number;
    previous: number;
  };
  orders: {
    total: number;
    previous: number;
  };
  conversion: {
    total: number;
    previous: number;
  };
}

interface Order {
  id: string;
  customer: string;
  email: string;
  amount: number;
  status: 'completed' | 'pending' | 'cancelled';
  date: string;
}

// ============================================
// DASHBOARD COMPONENT
// ============================================

export const DashboardExample = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('7d');
  const { isMobile, isTablet } = useResponsive();
  const debouncedDateRange = useDebounce(dateRange, 300);

  // ============================================
  // DATA FETCHING
  // ============================================

  useEffect(() => {
    fetchDashboardData();
  }, [debouncedDateRange]);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStats({
        users: { total: 12458, previous: 11250 },
        revenue: { total: 98450, previous: 87200 },
        orders: { total: 3842, previous: 3520 },
        conversion: { total: 3.8, previous: 3.2 }
      });

      setOrders([
        {
          id: '1',
          customer: 'John Doe',
          email: 'john@example.com',
          amount: 1250.00,
          status: 'completed',
          date: '2024-01-15'
        },
        {
          id: '2',
          customer: 'Jane Smith',
          email: 'jane@example.com',
          amount: 850.50,
          status: 'pending',
          date: '2024-01-16'
        },
        {
          id: '3',
          customer: 'Bob Johnson',
          email: 'bob@example.com',
          amount: 2100.00,
          status: 'completed',
          date: '2024-01-16'
        }
      ]);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // TABLE CONFIGURATION
  // ============================================

  const orderColumns: DataTableColumn<Order>[] = [
    {
      id: 'customer',
      header: 'Customer',
      accessorKey: 'customer',
      enableSorting: true,
      cell: (info) => (
        <div className="flex items-center gap-3">
          <Avatar size="sm">
            {info.row.original.customer.charAt(0)}
          </Avatar>
          <div>
            <div className="font-medium">{info.getValue() as string}</div>
            <div className="text-sm text-gray-500">{info.row.original.email}</div>
          </div>
        </div>
      )
    },
    {
      id: 'amount',
      header: 'Amount',
      accessorKey: 'amount',
      enableSorting: true,
      cell: (info) => (
        <span className="font-semibold text-primary">
          ${(info.getValue() as number).toFixed(2)}
        </span>
      )
    },
    {
      id: 'status',
      header: 'Status',
      accessorKey: 'status',
      cell: (info) => {
        const status = info.getValue() as string;
        const colorMap = {
          completed: 'success',
          pending: 'warning',
          cancelled: 'error'
        };
        return (
          <Badge color={colorMap[status as keyof typeof colorMap] as any}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        );
      }
    },
    {
      id: 'date',
      header: 'Date',
      accessorKey: 'date',
      enableSorting: true
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: (info) => (
        <div className="flex gap-2">
          <Button size="sm" variant="outline">View</Button>
          <Button size="sm" variant="outline">Invoice</Button>
        </div>
      )
    }
  ];

  // ============================================
  // CHART CONFIGURATION
  // ============================================

  const revenueChartData = {
    series: [
      {
        name: 'Revenue',
        data: [30000, 40000, 35000, 50000, 49000, 60000, 70000]
      },
      {
        name: 'Expenses',
        data: [20000, 25000, 22000, 32000, 30000, 38000, 42000]
      }
    ],
    options: {
      chart: {
        type: 'area' as const,
        toolbar: { show: false }
      },
      colors: ['#00c307', '#f59e0b'],
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' as const, width: 2 },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yaxis: {
        labels: {
          formatter: (value: number) => `$${(value / 1000).toFixed(0)}K`
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.2
        }
      }
    }
  };

  // ============================================
  // STATS CARD COMPONENT
  // ============================================

  const StatCard = ({
    icon,
    title,
    value,
    previousValue,
    prefix = '',
    suffix = ''
  }: {
    icon: React.ReactNode;
    title: string;
    value: number;
    previousValue: number;
    prefix?: string;
    suffix?: string;
  }) => (
    <AdaptiveCard shadow bordered padding="lg">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            {icon}
            <span className="text-sm font-medium">{title}</span>
          </div>
          <div className="text-2xl font-bold">
            {prefix}
            <AbbreviateNumber value={value} />
            {suffix}
          </div>
          <div className="mt-2">
            <GrowShrinkValue
              value={value}
              previousValue={previousValue}
              showPercentage
            />
          </div>
        </div>
      </div>
    </AdaptiveCard>
  );

  // ============================================
  // RENDER
  // ============================================

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your business overview.</p>
        </div>
        <div className="flex gap-3">
          <Select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="w-32"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </Select>
          <Button>
            <IconText icon={<HiTrendingUp />}>Export Report</IconText>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={`grid gap-6 ${
        isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-4'
      }`}>
        {stats && (
          <>
            <StatCard
              icon={<HiUsers className="text-xl text-primary" />}
              title="Total Users"
              value={stats.users.total}
              previousValue={stats.users.previous}
            />
            <StatCard
              icon={<HiCurrencyDollar className="text-xl text-primary" />}
              title="Revenue"
              value={stats.revenue.total}
              previousValue={stats.revenue.previous}
              prefix="$"
            />
            <StatCard
              icon={<HiShoppingCart className="text-xl text-primary" />}
              title="Orders"
              value={stats.orders.total}
              previousValue={stats.orders.previous}
            />
            <StatCard
              icon={<HiTrendingUp className="text-xl text-primary" />}
              title="Conversion"
              value={stats.conversion.total}
              previousValue={stats.conversion.previous}
              suffix="%"
            />
          </>
        )}
      </div>

      {/* Revenue Chart */}
      <AdaptiveCard
        header={<h2 className="text-xl font-semibold">Revenue Overview</h2>}
        shadow
        bordered
        padding="lg"
      >
        <Chart
          type="area"
          series={revenueChartData.series}
          options={revenueChartData.options}
          height={350}
        />
      </AdaptiveCard>

      {/* Recent Orders Table */}
      <AdaptiveCard
        header={
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
        }
        shadow
        bordered
        padding="lg"
      >
        <DataTable
          columns={orderColumns}
          data={orders}
          pagination
          pageSize={5}
          sortable
        />
      </AdaptiveCard>
    </div>
  );
};

export default DashboardExample;

/**
 * KEY CONCEPTS DEMONSTRATED:
 *
 * 1. Responsive Design
 *    - useResponsive hook for breakpoint detection
 *    - Dynamic grid columns based on screen size
 *
 * 2. Data Visualization
 *    - Chart component with ApexCharts
 *    - Custom stat cards with trends
 *
 * 3. Advanced Table
 *    - Custom cell renderers
 *    - Sorting and pagination
 *    - Status badges and avatars
 *
 * 4. Performance Optimization
 *    - Debounced date range changes
 *    - Lazy loading considerations
 *
 * 5. State Management
 *    - Local state for UI
 *    - Async data fetching
 *
 * 6. Composition
 *    - Reusable StatCard component
 *    - Modular chart configuration
 *
 * 7. TypeScript
 *    - Full type safety
 *    - Interface definitions
 *
 * 8. Styling
 *    - Tailwind utility classes
 *    - Theme-aware colors
 *    - Consistent spacing
 */
