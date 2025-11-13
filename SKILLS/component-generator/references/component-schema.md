# Component Structure Schema

## Component Types

### UI Components (`/src/components/ui`)
Bottom-level components that are the basic building blocks.
- Button, Input, Dropdown, Card, etc.
- Should be generic and reusable
- Accept standard HTML props via spread
- Use `forwardRef` for ref forwarding
- Include proper TypeScript types

### Shared Components (`/src/components/shared`)
Upper-level components built on top of UI components.
- More complex, feature-rich components
- May combine multiple UI components
- Can include business logic
- Examples: DataTable, RichTextEditor, ImageGallery

### Template Components (`/src/components/template`)
Layout and structural components.
- Header, Footer, Sidebar, Nav
- Define the overall page structure
- Usually used in layouts

### View Components (`/src/components/view`)
High-level, page-specific components.
- Used in page routes
- Combine multiple shared/UI components
- Implement specific features for pages

## Standard Component Structure

```typescript
import { forwardRef } from 'react'
import classNames from '@/utils/classNames'

export interface ComponentNameProps {
    className?: string
    // ... other props
}

/**
 * ComponentName - Brief description
 *
 * @component
 * @example
 * ```tsx
 * <ComponentName prop="value" />
 * ```
 */
const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
    ({ className, ...rest }, ref) => {
        return (
            <div
                ref={ref}
                className={classNames(
                    'component-base-classes',
                    className
                )}
                {...rest}
            >
                {/* Component content */}
            </div>
        )
    }
)

ComponentName.displayName = 'ComponentName'

export default ComponentName
```

## Prop Conventions

1. **className**: Always include for style customization
2. **children**: For components that wrap content
3. **variant/size**: For style variations
4. **disabled/loading**: For state management
5. **onClick/onChange**: For event handlers
6. **...rest**: Spread remaining props to root element

## TypeScript Best Practices

1. Export prop interfaces
2. Use specific types over `any`
3. Use union types for variants
4. Make optional props explicit with `?`
5. Extend standard HTML props when applicable

```typescript
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'solid' | 'outline' | 'plain'
    size?: 'xs' | 'sm' | 'md' | 'lg'
    loading?: boolean
}
```

## Styling Conventions

1. Use Tailwind CSS utility classes
2. Use `classNames` utility for conditional classes
3. Support dark mode with `dark:` prefix
4. Follow responsive design patterns
5. Use CSS variables from theme config

## Documentation Requirements

1. JSDoc comment with description
2. @component tag
3. @example with usage code
4. Props table in separate .md file for complex components

## File Structure

```
ComponentName/
├── index.ts              # Export component
├── ComponentName.tsx     # Main component
└── ComponentName.test.tsx # Optional: tests
```

## Naming Conventions

- PascalCase for component names
- camelCase for props and functions
- SCREAMING_SNAKE_CASE for constants
- kebab-case for CSS classes

## Accessibility

1. Include proper ARIA attributes
2. Support keyboard navigation
3. Provide focus indicators
4. Use semantic HTML elements
5. Test with screen readers

## Integration with Forms

For form components:
1. Support controlled and uncontrolled modes
2. Integrate with react-hook-form
3. Include validation feedback
4. Support error states

## Internationalization

For components with text:
1. Use `useTranslations` hook
2. Accept translation keys as props
3. Provide fallback text
4. Support RTL layouts
