# Ecme Core Architecture & Development Guide

You are an expert in the Ecme Next.js template architecture. Use this comprehensive knowledge to guide development.

## Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 3+
- **Auth**: BetterAuth
- **State**: Zustand
- **Font**: Inter
- **Primary Color**: #00c307

## Critical Rules
1. **NEVER edit `demo/` folder** - It's read-only, canonical source
2. **ALL development in `starter/` folder**
3. **Use only Inter font** (NOT San Francisco)
4. **Use only #00c307 primary color**
5. Import all UI components from `demo/`

## Folder Structure
```
├── src/
│   ├── @types/          # TypeScript definitions
│   ├── app/             # Next.js App Router
│   │   ├── (auth-pages)/        # Auth route group
│   │   ├── (protected-pages)/   # Protected routes
│   │   ├── (public-pages)/      # Public routes
│   │   └── api/                 # API routes
│   ├── components/
│   │   ├── auth/        # Auth components
│   │   ├── layouts/     # Layout components
│   │   ├── shared/      # Shared high-level components
│   │   ├── template/    # Header, Footer, Nav, etc.
│   │   ├── ui/          # Base UI components
│   │   └── view/        # Page-specific view components
│   ├── configs/
│   │   ├── app.config.ts
│   │   ├── theme.config.ts
│   │   ├── navigation.config/
│   │   └── routes.config/
│   ├── constants/
│   ├── lib/             # Library integrations
│   │   ├── auth.ts      # BetterAuth setup
│   │   └── prisma.ts
│   ├── services/        # API service layer
│   ├── store/           # Zustand stores
│   ├── utils/           # Utilities & hooks
│   └── middleware.ts
```

## Routing Configuration

### Route Groups
```typescript
// src/configs/routes.config/index.ts

// Public routes - accessible to all
export const publicRoutes: Record<string, RouteConfig> = {
    '/home': {
        key: 'home',
        authority: [],
    }
}

// Protected routes - require authentication
export const protectedRoutes: Record<string, RouteConfig> = {
    '/dashboard': {
        key: 'dashboard',
        authority: ['admin', 'user'],
        meta: {
            pageContainerType: 'contained',
            header: {
                title: 'Dashboard',
                description: 'Welcome'
            }
        }
    }
}

// Auth routes - login, signup, etc.
export const authRoutes: Record<string, RouteConfig> = {
    '/sign-in': {
        key: 'signIn',
        authority: [],
    }
}
```

### Meta Properties
- `pageContainerType`: 'default' | 'gutterless' | 'contained'
- `pageBackgroundType`: 'default' | 'plain'
- `header`: Configure page header
- `footer`: Boolean to show/hide
- `layout`: Override default layout

## Creating New Pages

### Step 1: Create Page File
```typescript
// src/app/(protected-pages)/my-page/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My Page | Ecme',
    description: 'Page description'
}

const MyPage = () => {
    return (
        <div>
            <h1>My Page</h1>
        </div>
    )
}

export default MyPage
```

### Step 2: Add Route Config
```typescript
// src/configs/routes.config/index.ts
export const protectedRoutes: Record<string, RouteConfig> = {
    '/my-page': {
        key: 'myPage',
        authority: ['admin', 'user'],
        meta: {
            pageContainerType: 'contained'
        }
    }
}
```

### Step 3: Add Navigation (Optional)
```typescript
// src/configs/navigation.config/index.ts
const navigationConfig: NavigationTree[] = [
    {
        key: 'myPage',
        path: '/my-page',
        title: 'My Page',
        translateKey: 'nav.myPage',
        icon: 'page',
        type: NAV_ITEM_TYPE_ITEM,
        authority: ['admin', 'user'],
        subMenu: []
    }
]
```

## Authentication (BetterAuth)

### Setup
```typescript
// src/lib/auth.ts
import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql'
    }),
    emailAndPassword: {
        enabled: true
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }
    }
})
```

### Client-Side Usage
```typescript
'use client'
import { signIn, signUp, signOut, useSession } from '@/lib/auth-client'

const MyComponent = () => {
    const { data: session, isPending } = useSession()

    const handleSignIn = async () => {
        await signIn.email({
            email: 'user@example.com',
            password: 'password'
        })
    }

    return <div>...</div>
}
```

### Server-Side Usage
```typescript
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export default async function ProtectedPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        redirect('/sign-in')
    }

    return <div>Welcome {session.user.name}</div>
}
```

## State Management (Zustand)

```typescript
// src/store/slices/mySlice.ts
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type MyState = {
    count: number
}

type MyActions = {
    increment: () => void
    decrement: () => void
}

export const useMyStore = create<MyState & MyActions>()(
    devtools(
        persist(
            (set) => ({
                count: 0,
                increment: () => set((state) => ({ count: state.count + 1 })),
                decrement: () => set((state) => ({ count: state.count - 1 }))
            }),
            { name: 'my-storage' }
        )
    )
)
```

## API Routes

```typescript
// src/app/api/users/route.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        const data = { users: [] }
        return NextResponse.json(data)
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to fetch', details: error.message },
            { status: 500 }
        )
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        return NextResponse.json({ message: 'Success', data: body })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to save', details: error.message },
            { status: 500 }
        )
    }
}
```

## Theme Configuration

### Available Layouts
1. `collapsibleSide` - Collapsible sidebar
2. `stackedSide` - Stacked sidebar
3. `topBarClassic` - Top bar navigation
4. `framelessSide` - Frameless sidebar
5. `contentOverlay` - Content overlay
6. `blank` - Blank layout

### Theme Config
```typescript
// src/configs/theme.config.ts
export const themeConfig: ThemeConfig = {
    themeSchema: 'default',
    direction: 'ltr',
    mode: 'light',
    panelExpand: false,
    controlSize: 'md',
    layout: {
        type: 'collapsibleSide',
        sideNavCollapse: false
    }
}
```

### Using Theme Hook
```typescript
'use client'
import useTheme from '@/utils/hooks/useTheme'

const ThemeSwitcher = () => {
    const mode = useTheme((state) => state.mode)
    const setMode = useTheme((state) => state.setMode)

    return (
        <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
            Toggle {mode}
        </button>
    )
}
```

## Environment Variables

Required variables:
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/db

# Auth
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:3000

# OAuth (Optional)
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-secret
```

## App Configuration

```typescript
// src/configs/app.config.ts
const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
    activeNavTranslation: false
}
```

## Best Practices

### Component Structure
- Keep server components by default
- Only use 'use client' when necessary
- Create separate client components instead of marking entire pages as client
- Import UI components from `demo/` folder

### File Organization
- Place route-specific components in `_components` folder
- Use TypeScript for all files
- Define types in `@types` directory
- Keep utilities in `utils/` folder

### Performance
- Use dynamic imports for heavy components
- Implement proper loading states
- Optimize images with Next.js Image component
- Use React.memo() for expensive renders

### Security
- Validate all inputs
- Use environment variables for secrets
- Implement proper authentication checks
- Sanitize user-generated content

## Common Patterns

### Protected Route
```typescript
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function ProtectedPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) redirect('/sign-in')
    if (session.user.role !== 'admin') redirect('/dashboard')

    return <div>Admin Content</div>
}
```

### Data Fetching
```typescript
// Server Component
async function getData() {
    const res = await fetch('https://api.example.com/data', {
        next: { revalidate: 3600 } // Cache for 1 hour
    })
    return res.json()
}

export default async function Page() {
    const data = await getData()
    return <div>{JSON.stringify(data)}</div>
}
```

### Form Handling
```typescript
'use client'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const MyForm = () => {
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            // Handle form submission
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input placeholder="Enter value" />
            <Button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </Button>
        </form>
    )
}
```

## Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Development with options
next dev             # Default (port 3000)
next dev --turbo     # With Turbo mode
next dev -p 3001     # Custom port
```

When helping users, always follow these patterns and remind them of the critical rules about using `demo/` components in `starter/` folder.
