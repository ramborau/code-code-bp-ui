# Create UI Component Skill

This skill helps you create new UI components following the Ecme project's structure and conventions.

## Purpose

Guide the creation of reusable UI components with:
- Proper TypeScript typing
- Tailwind CSS styling
- Component variants and sizes
- Accessibility features
- Comprehensive documentation

## Component Structure

Components in this project follow this structure:

```
src/components/
├── ui/                          # Base UI components
│   └── ComponentName/
│       ├── index.tsx            # Main component export
│       ├── ComponentName.tsx    # Component implementation
│       └── types.ts             # TypeScript types (optional)
├── shared/                      # Higher-level shared components
├── template/                    # Template components (Header, Footer, etc.)
└── view/                        # Page-specific view components
```

## Instructions

When creating a new UI component:

1. **Determine Component Location**
   - `ui/` - For base, reusable UI components (Button, Input, Card, etc.)
   - `shared/` - For higher-level components built on top of ui components
   - `template/` - For template-specific components (Header, Navigation, etc.)
   - `view/` - For page-specific view components

2. **Create Component Structure**
   ```typescript
   // src/components/ui/YourComponent/YourComponent.tsx
   import { forwardRef } from 'react'
   import classNames from '@/utils/classNames'
   import type { ComponentProps } from './types'

   const YourComponent = forwardRef<HTMLDivElement, ComponentProps>((props, ref) => {
       const {
           children,
           className,
           variant = 'default',
           size = 'md',
           ...rest
       } = props

       return (
           <div
               ref={ref}
               className={classNames(
                   'base-classes',
                   variant === 'primary' && 'variant-classes',
                   size === 'sm' && 'size-classes',
                   className
               )}
               {...rest}
           >
               {children}
           </div>
       )
   })

   YourComponent.displayName = 'YourComponent'

   export default YourComponent
   ```

3. **Define TypeScript Types**
   ```typescript
   // src/components/ui/YourComponent/types.ts
   import type { HTMLAttributes, ReactNode } from 'react'

   export type Variant = 'default' | 'primary' | 'secondary'
   export type Size = 'sm' | 'md' | 'lg'

   export interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
       children?: ReactNode
       variant?: Variant
       size?: Size
       disabled?: boolean
   }
   ```

4. **Create Index Export**
   ```typescript
   // src/components/ui/YourComponent/index.tsx
   import YourComponent from './YourComponent'

   export default YourComponent
   export type { ComponentProps } from './types'
   ```

5. **Styling Guidelines**
   - Use Tailwind CSS utility classes
   - Use the `classNames` utility for conditional classes
   - Support dark mode with `dark:` variant
   - Use CSS variables for theme colors: `bg-primary`, `text-primary`, etc.
   - Ensure responsive design with `sm:`, `md:`, `lg:` breakpoints

6. **Accessibility**
   - Add proper ARIA attributes
   - Support keyboard navigation
   - Ensure proper focus states
   - Use semantic HTML elements

## Example: Creating a Card Component

```typescript
// src/components/ui/Card/Card.tsx
import { forwardRef } from 'react'
import classNames from '@/utils/classNames'
import type { CardProps } from './types'

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
    const {
        children,
        className,
        variant = 'default',
        padding = 'md',
        hoverable = false,
        ...rest
    } = props

    const baseClasses = 'rounded-lg border bg-white dark:bg-gray-800'

    const variantClasses = {
        default: 'border-gray-200 dark:border-gray-700',
        primary: 'border-primary bg-primary-subtle',
        outlined: 'border-gray-300 dark:border-gray-600'
    }

    const paddingClasses = {
        none: '',
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6'
    }

    return (
        <div
            ref={ref}
            className={classNames(
                baseClasses,
                variantClasses[variant],
                paddingClasses[padding],
                hoverable && 'transition-shadow hover:shadow-lg cursor-pointer',
                className
            )}
            {...rest}
        >
            {children}
        </div>
    )
})

Card.displayName = 'Card'

export default Card
```

```typescript
// src/components/ui/Card/types.ts
import type { HTMLAttributes, ReactNode } from 'react'

export type CardVariant = 'default' | 'primary' | 'outlined'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode
    variant?: CardVariant
    padding?: CardPadding
    hoverable?: boolean
}
```

```typescript
// src/components/ui/Card/index.tsx
import Card from './Card'

export default Card
export type { CardProps, CardVariant, CardPadding } from './types'
```

## Best Practices

1. **Always use TypeScript** - Provide proper types for all props
2. **Use forwardRef** - For components that need ref access
3. **Provide sensible defaults** - Make components easy to use
4. **Support className override** - Always allow custom className
5. **Use semantic HTML** - Choose appropriate HTML elements
6. **Test in both themes** - Ensure components work in light and dark mode
7. **Make it responsive** - Components should work on all screen sizes
8. **Follow naming conventions** - PascalCase for components, camelCase for props

## Color Palette Reference

Primary brand color: `#00c307` (Vibrant Green)

Available Tailwind classes:
- `bg-primary`, `text-primary`, `border-primary`
- `bg-primary-deep`, `hover:bg-primary-deep`
- `bg-primary-mild`, `bg-primary-subtle`
- `bg-success`, `bg-error`, `bg-warning`, `bg-info`

## When to Invoke This Skill

- Creating a new reusable UI component
- Building a base component for the component library
- Need guidance on component structure and patterns
- Want to ensure consistency with existing components
