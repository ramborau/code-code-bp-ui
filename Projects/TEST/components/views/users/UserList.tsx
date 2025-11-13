/**
 * UserList Component
 *
 * Display and manage users in a data table
 */

'use client'

import { useState, useMemo } from 'react'
import DataTable from '@/demo/src/components/shared/DataTable'
import Button from '@/demo/src/components/ui/Button'
import Badge from '@/demo/src/components/ui/Badge'
import Avatar from '@/demo/src/components/ui/Avatar'
import type { ColumnDef } from '@tanstack/react-table'
import type { User } from '../../../types'

interface UserListProps {
  /** User data array */
  data: User[]
  /** View user details handler */
  onView?: (user: User) => void
  /** Edit user handler */
  onEdit?: (user: User) => void
  /** Delete user handler */
  onDelete?: (user: User) => void
  /** Loading state */
  loading?: boolean
}

/**
 * UserList displays users in an advanced data table with actions
 */
const UserList = ({ data, onView, onEdit, onDelete, loading = false }: UserListProps) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        header: 'User',
        accessorKey: 'name',
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <Avatar
              src={row.original.avatar}
              alt={row.original.name}
              size="sm"
            />
            <div>
              <div className="font-medium text-gray-900 dark:text-gray-100">
                {row.original.name}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {row.original.email}
              </div>
            </div>
          </div>
        ),
      },
      {
        header: 'Role',
        accessorKey: 'role',
        cell: ({ getValue }) => {
          const role = getValue() as string
          const roleColors: Record<string, string> = {
            admin: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
            user: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
            guest: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
          }
          return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${roleColors[role]}`}>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </span>
          )
        },
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: ({ getValue }) => {
          const status = getValue() as string
          const statusColors: Record<string, string> = {
            active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
            inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
            pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
          }
          return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          )
        },
      },
      {
        header: 'Created',
        accessorKey: 'createdAt',
        cell: ({ getValue }) => {
          const date = getValue() as Date
          return (
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {new Date(date).toLocaleDateString()}
            </span>
          )
        },
      },
      {
        header: 'Actions',
        id: 'actions',
        cell: ({ row }) => (
          <div className="flex gap-2">
            {onView && (
              <Button size="xs" variant="default" onClick={() => onView(row.original)}>
                View
              </Button>
            )}
            {onEdit && (
              <Button size="xs" variant="solid" onClick={() => onEdit(row.original)}>
                Edit
              </Button>
            )}
            {onDelete && (
              <Button size="xs" variant="plain" onClick={() => onDelete(row.original)}>
                Delete
              </Button>
            )}
          </div>
        ),
      },
    ],
    [onView, onEdit, onDelete]
  )

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400 text-lg">No users found</p>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
          Start by creating your first user
        </p>
      </div>
    )
  }

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination={pagination}
      onPaginationChange={setPagination}
    />
  )
}

export default UserList
