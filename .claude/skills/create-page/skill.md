# Create Page Skill

This skill guides you through creating new pages in the Ecme Next.js application with proper routing and configuration.

## Purpose

Help create new pages with:
- Proper Next.js App Router file structure
- Route configuration
- Navigation setup
- Metadata configuration
- Layout integration
- Authentication requirements

## Page Structure

Pages in this project are organized using Next.js App Router conventions:

```
src/app/
├── (auth-pages)/              # Authentication pages (login, signup)
│   ├── sign-in/
│   │   └── page.tsx
│   ├── sign-up/
│   │   └── page.tsx
│   └── layout.tsx
├── (protected-pages)/         # Pages requiring authentication
│   ├── dashboard/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   └── layout.tsx
└── (public-pages)/            # Public pages
    ├── about/
    │   └── page.tsx
    └── home/
        └── page.tsx
```

## Instructions

### Step 1: Determine Page Type

Choose the appropriate route group:

1. **Auth Pages** (`(auth-pages)/`)
   - Login, registration, password reset
   - Uses auth-specific layouts
   - Redirects authenticated users

2. **Protected Pages** (`(protected-pages)/`)
   - Dashboard, profile, settings
   - Requires authentication
   - Uses post-login layouts

3. **Public Pages** (`(public-pages)/`)
   - Landing pages, about, contact
   - Accessible to all users
   - May have different layout

### Step 2: Create Page File

#### Static Page Example

```typescript
// src/app/(protected-pages)/dashboard/page.tsx
import type { Metadata } from 'next'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
    title: 'Dashboard | Ecme',
    description: 'Dashboard overview and analytics'
}

const DashboardPage = async () => {
    // Server-side authentication check
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        redirect('/sign-in')
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Welcome back, {session.user.name}!
                </p>
            </div>

            {/* Page content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Dashboard widgets */}
            </div>
        </div>
    )
}

export default DashboardPage
```

#### Dynamic Page Example

```typescript
// src/app/(protected-pages)/articles/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type PageProps = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    // Fetch data for metadata
    const article = await getArticle(params.slug)

    if (!article) {
        return {
            title: 'Article Not Found'
        }
    }

    return {
        title: `${article.title} | Ecme`,
        description: article.excerpt
    }
}

const ArticlePage = async ({ params }: PageProps) => {
    const article = await getArticle(params.slug)

    if (!article) {
        notFound()
    }

    return (
        <article className="prose dark:prose-invert max-w-none">
            <h1>{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
    )
}

export default ArticlePage
```

### Step 3: Add Route Configuration

Update `src/configs/routes.config/index.ts`:

```typescript
import { ADMIN, USER } from '@/constants/roles'
import type { RouteConfig } from '@/@types/routes'

export const protectedRoutes: Record<string, RouteConfig> = {
    // ... existing routes

    '/dashboard': {
        key: 'dashboard',
        authority: [ADMIN, USER], // Roles that can access
        meta: {
            pageContainerType: 'contained', // 'default' | 'gutterless' | 'contained'
            header: {
                title: 'Dashboard',
                description: 'Overview and analytics',
                contained: true
            },
            footer: true
        }
    },

    // Dynamic route
    '/articles/[slug]': {
        key: 'articles.details',
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained'
        },
        dynamicRoute: true
    }
}
```

#### Route Meta Options

```typescript
meta: {
    // Container type
    pageContainerType: 'default' | 'gutterless' | 'contained',

    // Background type
    pageBackgroundType: 'default' | 'plain',

    // Header configuration
    header: {
        title: string | ReactNode,
        description: string | ReactNode,
        contained: boolean,
        extraHeader: ReactNode | LazyExoticComponent
    },

    // Footer visibility
    footer: boolean,

    // Layout override
    layout: 'blank' | 'collapsibleSide' | 'stackedSide' | 'topBarClassic' | 'framelessSide' | 'contentOverlay'
}
```

### Step 4: Add to Navigation (Optional)

If the page should appear in the navigation menu, update `src/configs/navigation.config/index.ts`:

```typescript
import { NAV_ITEM_TYPE_ITEM } from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    // ... existing items

    {
        key: 'dashboard',
        path: '/dashboard',
        title: 'Dashboard',
        translateKey: 'nav.dashboard',
        icon: 'dashboard',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: []
    }
]
```

Don't forget to add the icon to `src/configs/navigation-icon.config.tsx`:

```typescript
import { HiChartBar } from 'react-icons/hi'

const navigationIcon: Record<string, ReactNode> = {
    // ... existing icons
    dashboard: <HiChartBar />
}
```

### Step 5: Create Client Components (If Needed)

For interactive features, create client components in a `_components` folder:

```typescript
// src/app/(protected-pages)/dashboard/_components/StatCard.tsx
'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'

type StatCardProps = {
    title: string
    value: string | number
    trend?: number
}

const StatCard = ({ title, value, trend }: StatCardProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Card
            hoverable
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {title}
            </h3>
            <p className="text-2xl font-bold mt-2">{value}</p>
            {trend !== undefined && (
                <p className={`text-sm mt-1 ${trend >= 0 ? 'text-success' : 'text-error'}`}>
                    {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
                </p>
            )}
        </Card>
    )
}

export default StatCard
```

## Page Patterns

### 1. Server Component (Default)

```typescript
// Fetch data on server, render on server
const Page = async () => {
    const data = await fetchData()
    return <div>{/* Render data */}</div>
}
```

### 2. Server Component with Client Children

```typescript
// src/app/(protected-pages)/profile/page.tsx
import ClientComponent from './_components/ClientComponent'

const ProfilePage = async () => {
    const userData = await fetchUserData()

    return (
        <div>
            {/* Server-rendered content */}
            <h1>Profile</h1>

            {/* Client component for interactivity */}
            <ClientComponent initialData={userData} />
        </div>
    )
}
```

### 3. Loading States

```typescript
// src/app/(protected-pages)/dashboard/loading.tsx
import Skeleton from '@/components/ui/Skeleton'

export default function Loading() {
    return (
        <div className="space-y-6">
            <Skeleton className="h-8 w-48" />
            <div className="grid grid-cols-3 gap-6">
                <Skeleton className="h-32" />
                <Skeleton className="h-32" />
                <Skeleton className="h-32" />
            </div>
        </div>
    )
}
```

### 4. Error Handling

```typescript
// src/app/(protected-pages)/dashboard/error.tsx
'use client'

import { useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <Button onClick={reset}>Try again</Button>
        </div>
    )
}
```

## Best Practices

1. **Separate Concerns**
   - Keep pages as server components
   - Use client components only for interactivity
   - Extract reusable logic to utils/hooks

2. **Metadata**
   - Always provide meaningful title and description
   - Use dynamic metadata for dynamic routes
   - Include Open Graph tags for social sharing

3. **Authentication**
   - Server-side auth checks for protected pages
   - Redirect unauthorized users appropriately
   - Show loading states during auth checks

4. **Data Fetching**
   - Fetch data on the server when possible
   - Use React Server Components for better performance
   - Implement proper error handling

5. **Layouts**
   - Use route groups for shared layouts
   - Override layouts in route config when needed
   - Keep layouts minimal and reusable

6. **File Organization**
   - Keep page components simple
   - Move complex logic to `_components`
   - Use `_lib` for page-specific utilities

## Quick Checklist

- [ ] Create page file in appropriate route group
- [ ] Add metadata (title, description)
- [ ] Implement authentication check (if protected)
- [ ] Add route configuration
- [ ] Add to navigation (if applicable)
- [ ] Create client components (if needed)
- [ ] Add loading state
- [ ] Add error boundary
- [ ] Test in both light and dark mode
- [ ] Verify responsive design
- [ ] Check accessibility

## When to Invoke This Skill

- Creating a new page in the application
- Setting up routing for a new feature
- Need guidance on page structure and patterns
- Configuring authentication and authorization for pages
- Adding navigation menu items
