/**
 * Common Type Definitions
 */

export type Status = 'active' | 'inactive' | 'pending'

export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface PaginationParams {
  page: number
  pageSize: number
  total?: number
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
  error?: string
}

export interface SelectOption {
  value: string | number
  label: string
}
