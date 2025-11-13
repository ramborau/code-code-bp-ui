/**
 * Users Page
 *
 * User management page with list and actions
 */

'use client'

import { useState } from 'react'
import UserList from '../../../components/views/users/UserList'
import Button from '@/demo/src/components/ui/Button'
import { mockUsers } from '../../../mock/users'
import { FiPlus, FiSearch } from 'react-icons/fi'
import Input from '@/demo/src/components/ui/Input'
import type { User } from '../../../types'

const UsersPage = () => {
  const [users] = useState<User[]>(mockUsers)
  const [searchTerm, setSearchTerm] = useState('')

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleView = (user: User) => {
    console.log('View user:', user)
    // Navigate to user detail page or open modal
  }

  const handleEdit = (user: User) => {
    console.log('Edit user:', user)
    // Open edit form dialog or navigate to edit page
  }

  const handleDelete = (user: User) => {
    console.log('Delete user:', user)
    // Show confirmation dialog and delete user
  }

  const handleCreate = () => {
    console.log('Create new user')
    // Open create form dialog or navigate to create page
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Users
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your application users
          </p>
        </div>
        <Button
          variant="solid"
          icon={<FiPlus />}
          onClick={handleCreate}
        >
          Create User
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              prefix={<FiSearch />}
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Add more filters here */}
        </div>
      </div>

      {/* User List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <UserList
          data={filteredUsers}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default UsersPage
