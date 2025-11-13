# Claude Code Implementation Guide

> **Project**: [Project Name]
> **Created**: [Date]
> **Technology Stack**: [Next.js / React / Vue / etc.]
> **Version**: 1.0.0

---

## Quick Start

### Prerequisites
- Node.js 18+ installed
- npm / yarn / pnpm / bun
- [Database] installed (if applicable)
- [Other prerequisites]

### Initial Setup

```bash
# Clone repository
git clone [repo-url]
cd [project-name]

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Setup database (if applicable)
npx prisma migrate dev

# Start development server
npm run dev
```

**Development URL**: `http://localhost:3000`

---

## Technology Stack

### Frontend
- **Framework**: [Next.js 14+ / React 18+ / Vue 3+]
- **Language**: TypeScript
- **Styling**: [Tailwind CSS / CSS Modules / Styled Components]
- **UI Components**: [shadcn/ui / Radix UI / Headless UI / MUI]
- **State Management**: [Zustand / Redux / Context / TanStack Query]
- **Forms**: [react-hook-form + zod / Formik]
- **Routing**: [Next.js App Router / React Router / Vue Router]

### Backend (if applicable)
- **Runtime**: [Node.js / Bun / Deno]
- **Framework**: [Next.js API Routes / Express / Fastify]
- **Database**: [PostgreSQL / MongoDB / MySQL]
- **ORM**: [Prisma / Drizzle / TypeORM]
- **Authentication**: [BetterAuth / NextAuth / Clerk]

### Development Tools
- **Package Manager**: [npm / yarn / pnpm / bun]
- **Testing**: [Vitest / Jest / Playwright]
- **Linting**: ESLint + Prettier
- **Type Checking**: TypeScript strict mode
- **Git Hooks**: Husky (if applicable)

---

## Project Structure

```
project-root/
├── .claude/                      # Claude Code skills and configuration
│   ├── skills/
│   │   ├── ui-components.md      # UI component specifications
│   │   ├── design-system.md      # Design system rules
│   │   └── [custom-skills].md
│   └── templates/
├── public/                       # Static assets
│   ├── images/
│   ├── fonts/
│   └── icons/
├── src/
│   ├── app/                      # Next.js App Router (or pages/)
│   │   ├── (auth)/              # Route groups
│   │   ├── (protected)/
│   │   ├── api/                 # API routes
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/              # React components
│   │   ├── ui/                  # Base UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── [other-components]/
│   │   ├── layouts/             # Layout components
│   │   ├── features/            # Feature-specific components
│   │   └── shared/              # Shared/composite components
│   ├── lib/                     # Utilities and configurations
│   │   ├── utils.ts             # Utility functions
│   │   ├── cn.ts                # Class name utilities
│   │   └── [libraries].ts       # Library configurations
│   ├── hooks/                   # Custom React hooks
│   │   ├── use-[feature].ts
│   │   └── [other-hooks].ts
│   ├── types/                   # TypeScript types
│   │   ├── api.ts
│   │   ├── components.ts
│   │   └── [domain-types].ts
│   ├── styles/                  # Global styles
│   │   └── globals.css
│   └── constants/               # Constants and enums
├── .env                         # Environment variables
├── .env.example                 # Environment template
├── .gitignore
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json
```

---

## Design System Implementation

### Color System

#### Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}

export default config
```

#### CSS Variables

```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: [value];
    --foreground: [value];

    --primary: [value];
    --primary-foreground: [value];

    --secondary: [value];
    --secondary-foreground: [value];

    --muted: [value];
    --muted-foreground: [value];

    --accent: [value];
    --accent-foreground: [value];

    --destructive: [value];
    --destructive-foreground: [value];

    --border: [value];
    --input: [value];
    --ring: [value];

    --radius: [value]rem;
  }

  .dark {
    --background: [dark-value];
    --foreground: [dark-value];
    /* ... dark mode values ... */
  }
}
```

### Typography

```typescript
// tailwind.config.ts (extended)
{
  theme: {
    extend: {
      fontFamily: {
        sans: ['[Font Name]', 'sans-serif'],
        mono: ['[Mono Font]', 'monospace'],
      },
      fontSize: {
        'display': ['[size]rem', { lineHeight: '[height]', letterSpacing: '[spacing]' }],
        // ... other sizes
      },
    },
  },
}
```

---

## Component Specifications

### Base Components

All components should be created in `src/components/ui/` following these patterns:

#### Button Component

**File**: `src/components/ui/Button.tsx`

```typescript
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'default',
            'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
            'border border-input bg-background hover:bg-accent': variant === 'outline',
            'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
            'bg-destructive text-destructive-foreground hover:bg-destructive/90': variant === 'destructive',
          },
          {
            'h-10 px-4 py-2': size === 'default',
            'h-9 px-3': size === 'sm',
            'h-11 px-8': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
```

**Usage Examples**:

```typescript
// Primary button
<Button>Click me</Button>

// Secondary button
<Button variant="secondary">Secondary</Button>

// Outline button
<Button variant="outline">Outline</Button>

// Destructive action
<Button variant="destructive">Delete</Button>

// Small size
<Button size="sm">Small</Button>

// With icon
<Button>
  <Icon className="mr-2 h-4 w-4" />
  With Icon
</Button>
```

#### Input Component

**File**: `src/components/ui/Input.tsx`

```typescript
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2',
            'text-sm ring-offset-background',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'placeholder:text-muted-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-destructive focus-visible:ring-destructive',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
```

#### [Additional Components]

For each component specified in the PRD, create following the same pattern:
- TypeScript with proper types
- Forward refs for accessibility
- Tailwind CSS for styling
- Variants using `cn()` utility
- Proper ARIA attributes
- Focus states
- Error states (where applicable)

---

## Page Implementation

### Page Template

```typescript
// src/app/[route]/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[Page Title]',
  description: '[Page Description]',
}

export default function PageName() {
  return (
    <div className="container mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">[Page Title]</h1>
        <p className="text-muted-foreground">[Page Description]</p>
      </header>

      <main>
        {/* Page content */}
      </main>
    </div>
  )
}
```

### Client Component Pattern

```typescript
// src/app/[route]/_components/ClientComponent.tsx
'use client'

import { useState } from 'react'

export function ClientComponent() {
  const [state, setState] = useState(initialValue)

  return (
    <div>
      {/* Client-side interactive content */}
    </div>
  )
}
```

---

## State Management

### Zustand Store Example

```typescript
// src/store/[feature]-store.ts
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface FeatureState {
  // State properties
  items: Item[]
  selectedItem: Item | null
  isLoading: boolean
}

interface FeatureActions {
  // Actions
  setItems: (items: Item[]) => void
  selectItem: (id: string) => void
  clearSelection: () => void
}

type FeatureStore = FeatureState & FeatureActions

export const useFeatureStore = create<FeatureStore>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        items: [],
        selectedItem: null,
        isLoading: false,

        // Actions
        setItems: (items) => set({ items }),
        selectItem: (id) => {
          const item = get().items.find((i) => i.id === id)
          set({ selectedItem: item ?? null })
        },
        clearSelection: () => set({ selectedItem: null }),
      }),
      {
        name: 'feature-storage',
      }
    )
  )
)
```

---

## Accessibility Implementation

### Guidelines

1. **Semantic HTML**: Use proper HTML elements
2. **Keyboard Navigation**: All interactive elements accessible via keyboard
3. **ARIA Labels**: Provide context for screen readers
4. **Focus Management**: Visible focus indicators
5. **Color Contrast**: Minimum 4.5:1 for text, 3:1 for UI components

### Examples

```typescript
// Accessible button with icon only
<button
  aria-label="Close dialog"
  onClick={onClose}
>
  <X className="h-4 w-4" />
  <span className="sr-only">Close</span>
</button>

// Accessible form
<form aria-labelledby="form-title">
  <h2 id="form-title">Contact Form</h2>

  <div>
    <label htmlFor="email">Email</label>
    <input
      id="email"
      type="email"
      aria-describedby="email-error"
      aria-invalid={hasError}
    />
    {hasError && (
      <span id="email-error" role="alert">
        Please enter a valid email
      </span>
    )}
  </div>
</form>
```

---

## Performance Optimization

### Image Optimization

```typescript
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority={isAboveFold}
  placeholder="blur"
/>
```

### Code Splitting

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false, // Client-side only if needed
})
```

### Lazy Loading

```typescript
import { lazy, Suspense } from 'react'

const LazyComponent = lazy(() => import('./Component'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  )
}
```

---

## Testing Strategy

### Component Testing

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    await userEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

---

## Environment Variables

### Required Variables

```env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database (if applicable)
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# Authentication (if applicable)
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:3000

# Third-party services
[SERVICE]_API_KEY=your-api-key
```

---

## Deployment

### Build Command
```bash
npm run build
```

### Start Production
```bash
npm run start
```

### Environment Variables
Set all required environment variables in your hosting platform dashboard.

---

## Quality Checklist

Before considering implementation complete:

### Functionality
- [ ] All features from PRD implemented
- [ ] All user flows working correctly
- [ ] Error handling implemented
- [ ] Loading states implemented
- [ ] Empty states implemented

### Design
- [ ] Matches design specifications
- [ ] Responsive on all breakpoints
- [ ] Dark mode working (if applicable)
- [ ] All components styled correctly
- [ ] Typography and spacing consistent

### Accessibility
- [ ] WCAG AA compliance
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Focus indicators visible
- [ ] Color contrast ratios met

### Performance
- [ ] Lighthouse score > 90
- [ ] Images optimized
- [ ] Code split appropriately
- [ ] No console errors or warnings
- [ ] Bundle size acceptable

### Code Quality
- [ ] TypeScript strict mode enabled
- [ ] No `any` types
- [ ] ESLint passing
- [ ] Prettier formatted
- [ ] Components properly documented

---

## Notes for Implementation

1. **Read PRD.MD first** - Understand WHAT to build
2. **Follow this guide for HOW** to build it
3. **Check .claude/skills/** for specialized patterns
4. **Use existing components** from demo/ if available (never edit them)
5. **Maintain consistency** with design system
6. **Prioritize accessibility** and performance
7. **Write semantic HTML** and proper TypeScript
8. **Test on multiple devices** and screen sizes

---

**Last Updated**: [Date]
**Version**: 1.0.0
