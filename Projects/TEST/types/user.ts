/**
 * User Type Definitions
 */

import { BaseEntity, Status } from './common'

export interface User extends BaseEntity {
  name: string
  email: string
  role: UserRole
  status: Status
  avatar?: string
  phone?: string
  bio?: string
}

export type UserRole = 'admin' | 'user' | 'guest'

export interface UserFormData {
  name: string
  email: string
  role: UserRole
  password?: string
  phone?: string
  bio?: string
}

export interface DashboardStats {
  totalUsers: number
  activeUsers: number
  totalRevenue: number
  pendingTasks: number
  userGrowth: number
  revenueGrowth: number
}
