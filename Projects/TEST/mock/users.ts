/**
 * Mock User Data for Testing
 */

import type { User } from '../types'

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    status: 'active',
    avatar: '/img/avatars/thumb-1.jpg',
    phone: '+1 234 567 8900',
    bio: 'System administrator with 5 years of experience',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'user',
    status: 'active',
    avatar: '/img/avatars/thumb-2.jpg',
    phone: '+1 234 567 8901',
    bio: 'Product manager focused on user experience',
    createdAt: new Date('2024-01-16'),
    updatedAt: new Date('2024-01-16'),
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    role: 'user',
    status: 'active',
    avatar: '/img/avatars/thumb-3.jpg',
    phone: '+1 234 567 8902',
    bio: 'Frontend developer passionate about React',
    createdAt: new Date('2024-01-17'),
    updatedAt: new Date('2024-01-17'),
  },
  {
    id: '4',
    name: 'Sarah Williams',
    email: 'sarah.williams@example.com',
    role: 'user',
    status: 'inactive',
    avatar: '/img/avatars/thumb-4.jpg',
    phone: '+1 234 567 8903',
    bio: 'UX designer with a keen eye for detail',
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18'),
  },
  {
    id: '5',
    name: 'David Brown',
    email: 'david.brown@example.com',
    role: 'guest',
    status: 'pending',
    avatar: '/img/avatars/thumb-5.jpg',
    phone: '+1 234 567 8904',
    createdAt: new Date('2024-01-19'),
    updatedAt: new Date('2024-01-19'),
  },
]

export const mockDashboardStats = {
  totalUsers: 1234,
  activeUsers: 856,
  totalRevenue: 45678,
  pendingTasks: 42,
  userGrowth: 12,
  revenueGrowth: 23,
}
