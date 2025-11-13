# TEST Project

## Overview
This is a TEST project created to demonstrate the Ecme UI-GOD system. It showcases the folder structure, component usage, and integration patterns.

## Purpose
- **Demonstrate** the complete project structure
- **Test** the skill system (TECH, UI-HELPER, UI-GOD)
- **Provide** examples for developers
- **Validate** integration with the demo folder

## Features
- Dashboard with statistics cards
- User management (list, create, edit, delete)
- Authentication pages (sign-in, sign-up)
- Responsive design
- Dark/Light mode support
- Role-based access control

## Project Structure

```
TEST/
├── README.md                    # This file
├── app/                         # Next.js app router pages
│   ├── auth-pages/             # Authentication pages
│   │   └── sign-in/
│   │       └── page.tsx
│   ├── protected-pages/        # Protected routes
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   └── users/
│   │       ├── page.tsx
│   │       └── [id]/
│   │           └── page.tsx
│   └── public-pages/           # Public routes
│       └── about/
│           └── page.tsx
├── components/                  # React components
│   ├── views/                  # Page-specific components
│   │   ├── dashboard/
│   │   │   ├── StatsCard.tsx
│   │   │   ├── RecentActivity.tsx
│   │   │   └── QuickActions.tsx
│   │   └── users/
│   │       ├── UserList.tsx
│   │       ├── UserForm.tsx
│   │       └── UserDetails.tsx
│   └── shared/                 # Reusable components
│       └── CustomCard.tsx
├── types/                       # TypeScript types
│   ├── index.ts
│   ├── user.ts
│   └── common.ts
├── services/                    # API services
│   ├── apiService.ts
│   └── userService.ts
├── utils/                       # Utility functions
│   └── helpers.ts
├── constants/                   # Constants
│   └── routes.ts
├── hooks/                       # Custom hooks
│   └── useUsers.ts
└── mock/                        # Mock data
    └── users.ts
```

## Pages

### Dashboard (`/dashboard`)
- **Purpose**: Display overview statistics and quick actions
- **Access**: Admin, User
- **Components**:
  - StatsCard - Display key metrics
  - RecentActivity - Show recent user activities
  - QuickActions - Quick action buttons
- **Data**: Mock dashboard statistics

### Users List (`/users`)
- **Purpose**: Display and manage users
- **Access**: Admin
- **Components**:
  - UserList - DataTable with user list
  - UserForm - Create/Edit user form
  - UserDetails - User detail view
- **Features**: Search, filter, pagination, CRUD operations

### Sign In (`/sign-in`)
- **Purpose**: User authentication
- **Access**: Public
- **Layout**: Simple auth layout
- **Features**: Email/password login, remember me, forgot password link

## Components

### StatsCard
Display key metrics with trend indicators
```typescript
<StatsCard title="Total Users" value="1,234" trend="+12%" />
```

### UserList
Advanced data table with user management
```typescript
<UserList
  data={users}
  onView={handleView}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>
```

### UserForm
Create or edit user information
```typescript
<UserForm
  initialData={user}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
/>
```

## Data Models

### User
```typescript
interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'guest'
  status: 'active' | 'inactive'
  avatar?: string
  createdAt: Date
  updatedAt: Date
}
```

### DashboardStats
```typescript
interface DashboardStats {
  totalUsers: number
  activeUsers: number
  totalRevenue: number
  pendingTasks: number
}
```

## API Endpoints

- `GET /api/users` - List all users
- `GET /api/users/:id` - Get user details
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `GET /api/dashboard/stats` - Get dashboard statistics

## Getting Started

### 1. Explore the Code
Navigate through the folder structure to understand the organization.

### 2. Review Components
Check `components/views/` for page-specific implementations.

### 3. Check Types
See `types/` for TypeScript definitions.

### 4. Test Integration
Follow the integration guide below to add this to your app.

## Integration with Main App

### Step 1: Copy Files
Copy the project folder to your Next.js app:
```bash
# From the root of your Next.js project
cp -r Projects/TEST/app/* src/app/
cp -r Projects/TEST/components/* src/components/
cp -r Projects/TEST/types/* src/@types/
cp -r Projects/TEST/services/* src/services/
```

### Step 2: Update Routes Configuration
Add routes to `src/configs/routes.config.ts`:
```typescript
export const protectedRoutes = {
  '/dashboard': {
    key: 'dashboard',
    authority: ['admin', 'user'],
    meta: {
      pageContainerType: 'default',
    },
  },
  '/users': {
    key: 'users',
    authority: ['admin'],
    meta: {
      pageContainerType: 'default',
    },
  },
  '/users/[id]': {
    key: 'users.detail',
    authority: ['admin'],
    meta: {
      pageContainerType: 'contained',
    },
    dynamicRoute: true,
  },
}

export const authRoutes = {
  '/sign-in': {
    key: 'signIn',
  },
}

export const publicRoutes = {
  '/about': {
    key: 'about',
  },
}
```

### Step 3: Add Navigation Items
Update `src/configs/navigation.config.ts`:
```typescript
const navigationConfig = [
  {
    key: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
    translateKey: 'nav.dashboard',
    icon: 'dashboard',
    type: 'item',
    authority: ['admin', 'user'],
    subMenu: [],
  },
  {
    key: 'users',
    path: '/users',
    title: 'Users',
    translateKey: 'nav.users',
    icon: 'users',
    type: 'item',
    authority: ['admin'],
    subMenu: [],
  },
]
```

### Step 4: Add Navigation Icons
Update `src/configs/navigation-icon.config.tsx`:
```typescript
import { FiHome, FiUsers } from 'react-icons/fi'

const navigationIcon = {
  dashboard: <FiHome />,
  users: <FiUsers />,
}
```

### Step 5: Test the Application
```bash
npm run dev
# Visit http://localhost:3000/dashboard
```

## Technical Details

### State Management
- Local component state with `useState`
- Server state with React Query (optional)
- Global state with Zustand (if needed)

### Styling
- TailwindCSS utility classes
- Dark mode support with `dark:` prefix
- Responsive design with breakpoint classes

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Semantic HTML structure
- Screen reader friendly

### Performance
- React.memo for expensive components
- Lazy loading for heavy components
- Optimized images with next/image
- Proper loading states

## Best Practices Demonstrated

1. **Component Structure**: Organized by feature and reusability
2. **Type Safety**: Comprehensive TypeScript types
3. **Code Splitting**: Logical separation of concerns
4. **Error Handling**: Proper error states and messaging
5. **Loading States**: User feedback during async operations
6. **Empty States**: Graceful handling of no data
7. **Responsive Design**: Mobile-first approach
8. **Dark Mode**: Full theme support
9. **Accessibility**: WCAG 2.1 compliance
10. **Documentation**: Clear code comments and docs

## Notes

- This is a demonstration project showing best practices
- Components import from `@/demo/src/components/...`
- All types are strictly defined
- Mock data is used for demonstration
- Ready for production with real API integration

## Skills Used

This project was created using the following skills:
- **UI-HELPER**: Gathered requirements and clarified features
- **TECH**: Recommended components and architecture
- **UI-GOD**: Generated production-ready code and structure

## Next Steps

1. Replace mock data with real API calls
2. Add form validation with Zod or Yup
3. Implement authentication with NextAuth
4. Add unit tests with Jest/Vitest
5. Add E2E tests with Playwright
6. Deploy to Vercel or your preferred platform

## Support

For questions or issues:
1. Review the COMPONENT-API-REFERENCE.ts file
2. Check the .claude/skills/ documentation
3. Consult UI-ELEMENTS.MD and CORE.MD
4. Ask UI-HELPER for clarification

---

**Happy Coding! 🚀**

Built with ❤️ using Ecme UI Library
