# Setup Routes Skill

This skill helps you configure routes in the Ecme application with proper authority, metadata, and layout settings.

## Purpose

Guide the configuration of application routes with:
- Role-based access control (RBAC)
- Page metadata and layout settings
- Dynamic route handling
- Route grouping and organization

## Route Configuration File

Routes are configured in `src/configs/routes.config/index.ts`.

## Route Groups

There are three main route groups:

### 1. Public Routes
Accessible to all users (authenticated or not).

```typescript
export const publicRoutes: Record<string, RouteConfig> = {
    '/home': {
        key: 'home',
        authority: [], // Empty = accessible to all
        meta: {
            pageContainerType: 'default'
        }
    },
    '/about': {
        key: 'about',
        authority: [],
        meta: {
            pageContainerType: 'contained',
            header: {
                title: 'About Us',
                description: 'Learn more about our company'
            }
        }
    }
}
```

### 2. Protected Routes
Require authentication to access.

```typescript
export const protectedRoutes: Record<string, RouteConfig> = {
    '/dashboard': {
        key: 'dashboard',
        authority: [ADMIN, USER], // Only these roles can access
        meta: {
            pageContainerType: 'default',
            layout: 'collapsibleSide'
        }
    },
    '/admin-panel': {
        key: 'adminPanel',
        authority: [ADMIN], // Admin only
        meta: {
            pageContainerType: 'contained',
            header: {
                title: 'Admin Panel',
                description: 'System administration'
            }
        }
    }
}
```

### 3. Auth Routes
Login, registration, and related pages.

```typescript
export const authRoutes: Record<string, RouteConfig> = {
    '/sign-in': {
        key: 'signIn',
        authority: []
    },
    '/sign-up': {
        key: 'signUp',
        authority: []
    },
    '/forgot-password': {
        key: 'forgotPassword',
        authority: []
    }
}
```

## Route Configuration Structure

### Basic Route

```typescript
'/route-path': {
    key: 'uniqueKey',           // Identifier for navigation matching
    authority: [ADMIN, USER],   // Roles that can access ([] = all)
    meta: {                     // Optional metadata
        // ... meta configuration
    }
}
```

### Dynamic Route

```typescript
'/articles/[slug]': {
    key: 'articles.details',
    authority: [ADMIN, USER],
    meta: {
        pageContainerType: 'contained'
    },
    dynamicRoute: true  // Mark as dynamic
}
```

### Nested Dynamic Route

```typescript
'/blog/[category]/[slug]': {
    key: 'blog.post',
    authority: [],
    meta: {
        pageContainerType: 'contained'
    },
    dynamicRoute: true
}
```

## Meta Configuration Options

The `meta` object allows you to customize page behavior and appearance:

### Page Container Type

```typescript
meta: {
    pageContainerType: 'default' | 'gutterless' | 'contained'
}
```

- **default**: Standard container with padding
- **gutterless**: Full-width without padding
- **contained**: Centered container with max-width

### Page Background Type

```typescript
meta: {
    pageBackgroundType: 'default' | 'plain'
}
```

### Header Configuration

```typescript
meta: {
    header: {
        title: 'Page Title',                    // String or ReactNode
        description: 'Page description',         // String or ReactNode
        contained: true,                         // Whether header is contained
        extraHeader: lazy(() => import('@/components/PageActions'))
    }
}
```

**Example with dynamic title:**

```typescript
meta: {
    header: {
        title: lazy(() => import('./_components/DynamicTitle')),
        description: 'Custom description'
    }
}
```

### Footer Visibility

```typescript
meta: {
    footer: false  // Hide footer on this page
}
```

### Layout Override

Override the global layout for a specific page:

```typescript
meta: {
    layout: 'blank' | 'collapsibleSide' | 'stackedSide' | 'topBarClassic' | 'framelessSide' | 'contentOverlay'
}
```

**Example: Full-screen page**

```typescript
'/presentation': {
    key: 'presentation',
    authority: [],
    meta: {
        layout: 'blank',  // No header, sidebar, or footer
        footer: false
    }
}
```

## Complete Examples

### Example 1: Simple Protected Page

```typescript
'/profile': {
    key: 'profile',
    authority: [ADMIN, USER],
    meta: {
        pageContainerType: 'contained',
        header: {
            title: 'My Profile',
            description: 'Manage your account settings'
        }
    }
}
```

### Example 2: Admin-Only Page with Custom Layout

```typescript
'/admin/users': {
    key: 'admin.users',
    authority: [ADMIN],
    meta: {
        layout: 'topBarClassic',
        pageContainerType: 'default',
        header: {
            title: 'User Management',
            description: 'Manage system users',
            extraHeader: lazy(() => import('@/components/admin/UserActions'))
        }
    }
}
```

### Example 3: Dynamic Route with Full Configuration

```typescript
'/products/[category]/[id]': {
    key: 'products.details',
    authority: [ADMIN, USER],
    meta: {
        pageContainerType: 'contained',
        pageBackgroundType: 'plain',
        header: {
            title: 'Product Details',
            contained: true
        },
        footer: true
    },
    dynamicRoute: true
}
```

### Example 4: Public Landing Page

```typescript
'/': {
    key: 'home',
    authority: [],
    meta: {
        layout: 'blank',
        pageContainerType: 'gutterless',
        footer: true
    }
}
```

## Role-Based Access Control

### Available Roles

Roles are defined in `src/constants/roles.ts`:

```typescript
export const ADMIN = 'admin'
export const USER = 'user'
export const MODERATOR = 'moderator'
// Add custom roles as needed
```

### Authority Configuration

```typescript
// Accessible to all authenticated users
authority: []

// Only admins
authority: [ADMIN]

// Admins and regular users
authority: [ADMIN, USER]

// Multiple specific roles
authority: [ADMIN, MODERATOR, USER]
```

### Middleware Integration

The route configuration works with `src/middleware.ts` to enforce access control:

```typescript
// middleware.ts checks the route authority
if (pathname in protectedRoutes) {
    const route = protectedRoutes[pathname]
    const userRole = session?.user?.role

    if (route.authority.length > 0 && !route.authority.includes(userRole)) {
        // Redirect to unauthorized page
    }
}
```

## Best Practices

1. **Consistent Naming**
   - Use dot notation for nested keys: `'admin.users.list'`
   - Match keys with navigation config for highlighting

2. **Authority Arrays**
   - Empty array `[]` = all authenticated users can access
   - Be specific about required roles

3. **Meta Organization**
   - Only include meta properties you need
   - Use layout overrides sparingly

4. **Dynamic Routes**
   - Always set `dynamicRoute: true` for routes with `[param]`
   - Ensure route key is unique across all routes

5. **Documentation**
   - Add comments for complex route configurations
   - Document custom authority roles

## Common Patterns

### Dashboard Pages

```typescript
'/dashboards/[type]': {
    key: 'dashboards.dynamic',
    authority: [ADMIN, USER],
    meta: {
        pageContainerType: 'default',
        layout: 'collapsibleSide'
    },
    dynamicRoute: true
}
```

### Settings Pages

```typescript
'/settings': {
    key: 'settings',
    authority: [ADMIN, USER],
    meta: {
        pageContainerType: 'contained',
        header: {
            title: 'Settings',
            description: 'Manage your preferences'
        },
        layout: 'stackedSide'
    }
}
```

### Full-Screen Pages

```typescript
'/viewer/[id]': {
    key: 'viewer',
    authority: [ADMIN, USER],
    meta: {
        layout: 'blank',
        pageContainerType: 'gutterless',
        footer: false
    },
    dynamicRoute: true
}
```

## Troubleshooting

### Route Not Working

1. Check if page file exists at correct path
2. Verify route key is unique
3. Ensure authority includes user's role
4. Check for typos in route path

### Layout Not Applying

1. Verify layout value is valid
2. Check if route meta is properly configured
3. Ensure layout components exist

### Access Denied

1. Check user's role in session
2. Verify authority array includes the role
3. Check middleware configuration

## Migration Checklist

When adding a new route:

- [ ] Add to appropriate route group (public/protected/auth)
- [ ] Set unique key
- [ ] Configure authority (roles)
- [ ] Add meta configuration (optional)
- [ ] Mark dynamicRoute if using [params]
- [ ] Test with different user roles
- [ ] Add to navigation config (if needed)
- [ ] Update middleware if custom logic needed

## When to Invoke This Skill

- Adding new routes to the application
- Configuring access control for pages
- Setting up page metadata and layouts
- Troubleshooting routing issues
- Need guidance on route organization
