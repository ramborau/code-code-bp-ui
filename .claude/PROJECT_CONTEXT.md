# Project Context - Ecme UI Component Library

## Overview

Ecme is a premium Next.js UI component library and template built with TypeScript, Tailwind CSS, and modern React patterns.

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Authentication**: BetterAuth
- **Internationalization**: next-intl
- **Font**: Inter

## Brand Identity

### Primary Color
- **Color**: `#00c307` (Vibrant Green)
- **Represents**: Growth, innovation, and energy
- **Usage**: Primary buttons, CTAs, active states, links

### Typography
- **Font**: Inter
- **Characteristics**: Modern, clean, highly legible

### Design Principles
- Consistency
- Accessibility (WCAG 2.1 AA)
- Responsiveness (mobile-first)
- Modern & clean aesthetic
- Performance-optimized

## Project Structure

### Core Directories

```
src/
├── app/                       # Next.js App Router pages
│   ├── (auth-pages)/          # Authentication pages
│   ├── (protected-pages)/     # Pages requiring authentication
│   └── (public-pages)/        # Public pages
├── components/
│   ├── ui/                    # Base UI components
│   ├── shared/                # Higher-level shared components
│   ├── template/              # Template components
│   └── view/                  # Page-specific view components
├── configs/
│   ├── app.config.ts          # Application configuration
│   ├── theme.config.ts        # Theme configuration
│   ├── navigation.config/     # Navigation structure
│   └── routes.config/         # Route definitions
├── assets/
│   └── styles/                # Global CSS and Tailwind
├── utils/                     # Utility functions and hooks
├── lib/                       # Library integrations
├── services/                  # API service layer
└── store/                     # Zustand state management
```

## Key Features

### 1. Custom UI Components
- Built from scratch (not based on common libraries)
- Fully customizable
- TypeScript-first
- Accessible
- Theme-aware (light/dark mode)

### 2. Multiple Layouts
Six post-login layouts:
- Collapsible Side
- Stacked Side
- Top Bar Classic
- Frameless Side
- Content Overlay
- Blank

Three auth layouts:
- Side
- Simple
- Split

### 3. Routing System
Extended Next.js App Router with:
- Role-based access control
- Route metadata
- Layout overrides
- Dynamic route support

### 4. Theme System
- CSS variables for colors
- Dynamic theme switching
- Dark/Light mode
- RTL support
- Customizable layouts

### 5. Authentication
BetterAuth integration:
- Email/Password
- OAuth (Google, GitHub)
- Session management
- Role-based access

## Configuration Files

### App Config (`app.config.ts`)
```typescript
{
  apiPrefix: '/api',
  authenticatedEntryPath: '/home',
  unAuthenticatedEntryPath: '/sign-in',
  locale: 'en',
  activeNavTranslation: false
}
```

### Theme Config (`theme.config.ts`)
```typescript
{
  themeSchema: '',
  direction: 'ltr',
  mode: 'light',
  controlSize: 'md',
  layout: {
    type: 'collapsibleSide',
    sideNavCollapse: false
  }
}
```

## Component Architecture

### Component Hierarchy
1. **ui/** - Base components (Button, Input, Card)
2. **shared/** - Composed components built on ui components
3. **template/** - Layout-specific components (Header, Footer)
4. **view/** - Page-specific components

### Component Pattern
```typescript
// Forwarded ref
// TypeScript types
// Variants and sizes
// Tailwind CSS styling
// Dark mode support
// Accessibility
```

## Routing Architecture

### Route Groups
1. **Public Routes** - Accessible to all
2. **Protected Routes** - Require authentication
3. **Auth Routes** - Login, registration

### Route Configuration
- Authority (RBAC)
- Metadata (page container, header, footer)
- Layout overrides
- Dynamic routes

## Navigation Architecture

### Navigation Types
1. **Item** - Direct link
2. **Collapse** - Expandable menu
3. **Title** - Section header

### Navigation Features
- Icon configuration
- Role-based visibility
- Internationalization support
- Multi-level nesting

## Styling Approach

### Primary Method: Tailwind CSS
- Utility-first classes
- Custom theme integration
- Dark mode support
- Responsive design

### CSS Variables
- Theme colors
- Consistent across components
- Easy to customize

### classNames Utility
```typescript
import classNames from '@/utils/classNames'

classNames(
  'base-classes',
  variant === 'primary' && 'variant-classes',
  className
)
```

## State Management

### Zustand Stores
- Lightweight and fast
- TypeScript support
- Middleware support (devtools, persist)
- Simple API

### Common Stores
- Theme store
- Auth store
- UI state
- Feature-specific stores

## API Integration

### Service Layer Pattern
```typescript
// services/UserService.ts
export async function getUser(id: string) {
  return ApiService.fetchData({
    url: `/api/users/${id}`,
    method: 'get'
  })
}
```

### API Routes
- Next.js API routes
- Server-side authentication
- Type-safe responses

## Best Practices

### TypeScript
- Always use types
- Avoid `any`
- Export types from components

### Components
- Use forwardRef for ref support
- Support className override
- Provide sensible defaults
- Document props

### Styling
- Use Tailwind classes
- Support dark mode
- Responsive design
- Accessibility

### File Organization
- One component per file
- Types in separate file (if complex)
- Index file for exports

## Common Patterns

### Server Component
```typescript
const Page = async () => {
  const data = await fetchData()
  return <div>{/* render */}</div>
}
```

### Client Component
```typescript
'use client'
const Component = () => {
  const [state, setState] = useState()
  return <div>{/* render */}</div>
}
```

### Protected Page
```typescript
const Page = async () => {
  const session = await auth.api.getSession()
  if (!session) redirect('/sign-in')
  return <div>{/* render */}</div>
}
```

## Development Workflow

1. **Create component** - Use create-component skill
2. **Create page** - Use create-page skill
3. **Configure route** - Use setup-routes skill
4. **Add navigation** - Use setup-navigation skill
5. **Customize theme** - Use theme-config skill

## Testing Checklist

When creating new features:
- [ ] TypeScript types defined
- [ ] Light mode tested
- [ ] Dark mode tested
- [ ] Responsive design verified
- [ ] Accessibility checked
- [ ] Documentation added

## Resources

- **Project Docs**: `CORE.MD`, `UI.MD`, `UI2.MD`
- **Skills**: `.claude/skills/`
- **Quick Start**: `.claude/QUICK_START.md`

## Version

- Demo Version: Full featured
- Starter Version: Basic setup for development
