# Theme Configuration Skill

This skill helps you customize the theme, colors, layouts, and visual appearance of the Ecme application.

## Purpose

Guide theme customization including:
- Brand color configuration
- Layout type selection
- Dark/Light mode setup
- Custom theme schemas
- CSS variable management
- Tailwind configuration

## Theme Configuration Files

### Primary Files

1. **Theme Config**: `src/configs/theme.config.ts`
2. **CSS Variables**: `src/assets/styles/tailwind/index.css`
3. **Tailwind Config**: `tailwind.config.ts`
4. **Preset Themes**: `src/configs/preset-theme-schema.config.ts`

## Brand Colors

### Primary Brand Color

**Color**: `#00c307` (Vibrant Green)

Used for:
- Primary buttons and CTAs
- Active states and selections
- Links and interactive elements
- Brand highlights and accents

### Color Variants

```css
--primary: #00c307;         /* Main brand color */
--primary-deep: #00a006;    /* Darker shade for hover states */
--primary-mild: #1acd17;    /* Lighter shade for backgrounds */
--primary-subtle: #00c3071a; /* 10% opacity for subtle backgrounds */
```

## Theme Configuration (`theme.config.ts`)

### Default Configuration

```typescript
import { THEME_ENUM } from '@/constants/theme.constant'
import type { ThemeConfig } from '@/@types/theme'

export const themeConfig: ThemeConfig = {
    themeSchema: '',                               // Color scheme name
    direction: THEME_ENUM.DIR_LTR,                 // 'ltr' | 'rtl'
    mode: THEME_ENUM.MODE_LIGHT,                   // 'light' | 'dark'
    panelExpand: false,                            // Side panel expanded
    controlSize: 'md',                             // 'xs' | 'sm' | 'md' | 'lg'
    layout: {
        type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,  // Layout type
        sideNavCollapse: false                     // Sidebar collapsed
    }
}
```

### Configuration Properties

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `themeSchema` | Color scheme identifier | `string` | `''` |
| `direction` | Text direction | `'ltr' \| 'rtl'` | `'ltr'` |
| `mode` | Color mode | `'light' \| 'dark'` | `'light'` |
| `panelExpand` | Side panel expansion state | `boolean` | `false` |
| `controlSize` | Default input control size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| `layout.type` | Application layout | `LayoutType` | `'collapsibleSide'` |
| `layout.sideNavCollapse` | Sidebar collapse state | `boolean` | `false` |

### Layout Types

```typescript
type LayoutType =
    | 'blank'              // No header, sidebar, or footer
    | 'collapsibleSide'    // Collapsible sidebar
    | 'stackedSide'        // Stacked sidebar layout
    | 'topBarClassic'      // Top navigation bar
    | 'framelessSide'      // Frameless sidebar
    | 'contentOverlay'     // Content overlay style
```

## CSS Variables (`index.css`)

### Customizing Brand Colors

Edit `src/assets/styles/tailwind/index.css`:

```css
:root {
    --neutral: #ffffff;

    /* Primary Brand Color - Change these */
    --primary: #00c307;
    --primary-deep: #00a006;
    --primary-mild: #1acd17;
    --primary-subtle: #00c3071a;

    /* Status Colors */
    --error: #ff6a55;
    --error-subtle: #ff6a551a;
    --success: #10b981;
    --success-subtle: #05eb7624;
    --info: #2a85ff;
    --info-subtle: #2a85ff1a;
    --warning: #f59e0b;
    --warning-subtle: #ffd40045;

    /* Grayscale */
    --gray-50: #fafafa;
    --gray-100: #f5f5f5;
    --gray-200: #e5e5e5;
    --gray-300: #d4d4d4;
    --gray-400: #a3a3a3;
    --gray-500: #737373;
    --gray-600: #525252;
    --gray-700: #404040;
    --gray-800: #262626;
    --gray-900: #171717;
    --gray-950: #0a0a0a;
}

.dark {
    /* Same structure for dark mode */
    --primary: #00c307;
    --primary-deep: #00a006;
    --primary-mild: #1acd17;
    --primary-subtle: #00c3071a;

    /* Dark mode grayscale (inverted) */
    --gray-50: #0a0a0a;
    --gray-100: #171717;
    --gray-200: #262626;
    /* ... etc */
}
```

### Example: Changing to Blue Theme

```css
:root {
    --primary: #2a85ff;
    --primary-deep: #0069f6;
    --primary-mild: #4996ff;
    --primary-subtle: #2a85ff1a;
}

.dark {
    --primary: #2a85ff;
    --primary-deep: #0069f6;
    --primary-mild: #4996ff;
    --primary-subtle: #2a85ff1a;
}
```

## Dynamic Theme Switching

### Preset Theme Schema Configuration

Edit `src/configs/preset-theme-schema.config.ts`:

```typescript
export type Variables =
    | "primary"
    | "primaryDeep"
    | "primaryMild"
    | "primarySubtle"
    | "neutral"

export type ThemeVariables = Record<'light' | 'dark', Record<Variables, string>>

// Default Green Theme
const defaultTheme: ThemeVariables = {
    light: {
        primary: "#00c307",
        primaryDeep: "#00a006",
        primaryMild: "#1acd17",
        primarySubtle: "#00c3071a",
        neutral: "#ffffff"
    },
    dark: {
        primary: "#00c307",
        primaryDeep: "#00a006",
        primaryMild: "#1acd17",
        primarySubtle: "#00c3071a",
        neutral: "#ffffff"
    }
}

// Blue Theme
const blueTheme: ThemeVariables = {
    light: {
        primary: "#2a85ff",
        primaryDeep: "#0069f6",
        primaryMild: "#4996ff",
        primarySubtle: "#2a85ff1a",
        neutral: "#ffffff"
    },
    dark: {
        primary: "#2a85ff",
        primaryDeep: "#0069f6",
        primaryMild: "#4996ff",
        primarySubtle: "#2a85ff1a",
        neutral: "#ffffff"
    }
}

// Purple Theme
const purpleTheme: ThemeVariables = {
    light: {
        primary: "#7c3aed",
        primaryDeep: "#5b21b6",
        primaryMild: "#9333ea",
        primarySubtle: "#7c3aed1a",
        neutral: "#ffffff"
    },
    dark: {
        primary: "#7c3aed",
        primaryDeep: "#5b21b6",
        primaryMild: "#9333ea",
        primarySubtle: "#7c3aed1a",
        neutral: "#ffffff"
    }
}

const presetThemeSchemaConfig: Record<string, ThemeVariables> = {
    default: defaultTheme,
    blue: blueTheme,
    purple: purpleTheme
}

export default presetThemeSchemaConfig
```

### Using Theme Hook

```typescript
'use client'

import useTheme from '@/utils/hooks/useTheme'
import Button from '@/components/ui/Button'

const ThemeControls = () => {
    const mode = useTheme((state) => state.mode)
    const setMode = useTheme((state) => state.setMode)
    const schema = useTheme((state) => state.themeSchema)
    const setSchema = useTheme((state) => state.setSchema)
    const direction = useTheme((state) => state.direction)
    const setDirection = useTheme((state) => state.setDirection)

    return (
        <div className="space-y-4">
            {/* Dark/Light Mode Toggle */}
            <Button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                Toggle {mode === 'dark' ? 'Light' : 'Dark'} Mode
            </Button>

            {/* Theme Switcher */}
            <div className="flex gap-2">
                <Button onClick={() => setSchema('default')}>Green</Button>
                <Button onClick={() => setSchema('blue')}>Blue</Button>
                <Button onClick={() => setSchema('purple')}>Purple</Button>
            </div>

            {/* Direction Toggle */}
            <Button onClick={() => setDirection(direction === 'ltr' ? 'rtl' : 'ltr')}>
                Direction: {direction.toUpperCase()}
            </Button>
        </div>
    )
}
```

## Tailwind Configuration

### Extending Theme Colors

Edit `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                neutral: 'var(--neutral)',
                primary: {
                    DEFAULT: 'var(--primary)',
                    deep: 'var(--primary-deep)',
                    mild: 'var(--primary-mild)',
                    subtle: 'var(--primary-subtle)'
                },
                error: {
                    DEFAULT: 'var(--error)',
                    subtle: 'var(--error-subtle)'
                },
                success: {
                    DEFAULT: 'var(--success)',
                    subtle: 'var(--success-subtle)'
                },
                info: {
                    DEFAULT: 'var(--info)',
                    subtle: 'var(--info-subtle)'
                },
                warning: {
                    DEFAULT: 'var(--warning)',
                    subtle: 'var(--warning-subtle)'
                },
                gray: {
                    50: 'var(--gray-50)',
                    100: 'var(--gray-100)',
                    200: 'var(--gray-200)',
                    300: 'var(--gray-300)',
                    400: 'var(--gray-400)',
                    500: 'var(--gray-500)',
                    600: 'var(--gray-600)',
                    700: 'var(--gray-700)',
                    800: 'var(--gray-800)',
                    900: 'var(--gray-900)',
                    950: 'var(--gray-950)'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: []
}

export default config
```

### Adding Custom Colors

```typescript
theme: {
    extend: {
        colors: {
            // ... existing colors
            accent: {
                DEFAULT: '#ff6b6b',
                dark: '#ee5a6f',
                light: '#ff8787'
            },
            brand: {
                primary: '#00c307',
                secondary: '#0077ff',
                tertiary: '#ff6b6b'
            }
        }
    }
}
```

## Using Theme Colors

### In Components

```typescript
// Using Tailwind classes
<button className="bg-primary text-white hover:bg-primary-deep">
    Primary Button
</button>

<div className="bg-primary-subtle border border-primary">
    Success Message
</div>

<p className="text-gray-600 dark:text-gray-400">
    Text adapts to theme
</p>
```

### In Custom CSS

```css
.custom-class {
    background-color: var(--primary);
    color: var(--neutral);
}

.custom-class:hover {
    background-color: var(--primary-deep);
}
```

### Inline Styles

```typescript
<div style={{
    backgroundColor: 'var(--primary)',
    color: 'var(--neutral)'
}}>
    Custom styled element
</div>
```

## Layout Customization

### Changing Layout Type

**Method 1: Global Config**

```typescript
// src/configs/theme.config.ts
export const themeConfig: ThemeConfig = {
    // ... other config
    layout: {
        type: 'topBarClassic',  // Change layout
        sideNavCollapse: false
    }
}
```

**Method 2: Per-Route Override**

```typescript
// src/configs/routes.config/index.ts
export const protectedRoutes: Record<string, RouteConfig> = {
    '/dashboard': {
        key: 'dashboard',
        authority: [ADMIN, USER],
        meta: {
            layout: 'stackedSide'  // Override layout for this route
        }
    }
}
```

### Layout Options

```typescript
// Blank - No chrome, full screen
layout: { type: 'blank' }

// Collapsible Side - Sidebar that can collapse
layout: {
    type: 'collapsibleSide',
    sideNavCollapse: false  // Start expanded
}

// Stacked Side - Vertical stacked sidebar
layout: { type: 'stackedSide' }

// Top Bar Classic - Horizontal top navigation
layout: { type: 'topBarClassic' }

// Frameless Side - Frameless sidebar
layout: {
    type: 'framelessSide',
    sideNavCollapse: true  // Start collapsed
}

// Content Overlay - Overlay style
layout: { type: 'contentOverlay' }
```

## RTL (Right-to-Left) Support

### Enable RTL

```typescript
// src/configs/theme.config.ts
export const themeConfig: ThemeConfig = {
    // ... other config
    direction: 'rtl'
}
```

### RTL-Specific Styling

```typescript
// Automatic RTL support with Tailwind
<div className="ml-4">  {/* Becomes mr-4 in RTL */}
    Content
</div>

// Use logical properties
<div className="ms-4">  {/* margin-inline-start */}
    Content
</div>

// Conditional styling
<div className={classNames(
    'text-left rtl:text-right',
    'border-l rtl:border-r'
)}>
    Content
</div>
```

## Font Customization

### Changing Primary Font

**Step 1: Import Font**

```typescript
// src/app/layout.tsx
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap'
})
```

**Step 2: Apply Font**

```typescript
<html lang="en" className={poppins.className}>
    <body>{children}</body>
</html>
```

**Step 3: Update Tailwind**

```typescript
// tailwind.config.ts
theme: {
    extend: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif']
        }
    }
}
```

## Component Size Control

### Global Control Size

```typescript
// src/configs/theme.config.ts
export const themeConfig: ThemeConfig = {
    // ... other config
    controlSize: 'lg'  // 'xs' | 'sm' | 'md' | 'lg'
}
```

This affects all form controls (inputs, buttons, selects, etc.).

## Best Practices

1. **CSS Variables First**
   - Always use CSS variables for theme colors
   - Easier to maintain and update

2. **Tailwind Integration**
   - Map CSS variables to Tailwind colors
   - Use Tailwind classes in components

3. **Dark Mode Support**
   - Test all colors in both modes
   - Ensure sufficient contrast

4. **Consistency**
   - Use primary color consistently
   - Follow established patterns

5. **Performance**
   - CSS variables are performant
   - Avoid inline styles when possible

6. **Accessibility**
   - Maintain WCAG contrast ratios
   - Test with screen readers

## Common Customizations

### 1. Corporate Branding

```css
:root {
    --primary: #004085;      /* Corporate blue */
    --primary-deep: #003366;
    --primary-mild: #1a5fa0;
    --primary-subtle: #0040851a;
}
```

### 2. E-commerce Theme

```css
:root {
    --primary: #ff6b35;      /* Vibrant orange */
    --primary-deep: #e55a2b;
    --primary-mild: #ff8555;
    --primary-subtle: #ff6b351a;
}
```

### 3. Healthcare Theme

```css
:root {
    --primary: #0077be;      /* Medical blue */
    --primary-deep: #005f96;
    --primary-mild: #3399cc;
    --primary-subtle: #0077be1a;
}
```

## Troubleshooting

### Colors Not Updating

1. Clear browser cache
2. Clear cookies (theme is stored in cookies)
3. Restart development server
4. Check CSS variable syntax

### Dark Mode Issues

1. Verify `darkMode: 'class'` in Tailwind config
2. Check if `dark` class is applied to `<html>`
3. Ensure both light and dark variables are defined

### Layout Not Applying

1. Check theme.config.ts syntax
2. Verify layout type is valid
3. Clear theme cookie

## Migration Checklist

When customizing theme:

- [ ] Update CSS variables in index.css
- [ ] Update Tailwind config if adding new colors
- [ ] Test in light mode
- [ ] Test in dark mode
- [ ] Test all layouts
- [ ] Verify contrast ratios
- [ ] Check responsive design
- [ ] Test RTL if applicable
- [ ] Clear cookies and test

## When to Invoke This Skill

- Customizing brand colors
- Changing layout type
- Setting up dark mode
- Adding new theme variants
- Troubleshooting theme issues
- Implementing RTL support
- Customizing fonts
