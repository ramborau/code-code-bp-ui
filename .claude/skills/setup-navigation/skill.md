# Setup Navigation Skill

This skill helps you configure navigation menu items with proper icons, structure, and internationalization support.

## Purpose

Guide the configuration of application navigation with:
- Menu structure and hierarchy
- Icon configuration
- Role-based menu visibility
- Internationalization (i18n) support
- Horizontal and vertical menu layouts

## Navigation Configuration File

Navigation is configured in `src/configs/navigation.config/index.ts`.

## Navigation Structure

```typescript
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    // Navigation items
]

export default navigationConfig
```

## Navigation Item Types

### 1. Item (Single Menu Item)

Direct link to a page.

```typescript
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
```

### 2. Collapse (Expandable Menu)

Menu item that expands to show sub-items.

```typescript
{
    key: 'apps',
    path: '',
    title: 'Apps',
    translateKey: 'nav.apps',
    icon: 'apps',
    type: NAV_ITEM_TYPE_COLLAPSE,
    authority: [ADMIN, USER],
    subMenu: [
        {
            key: 'apps.crm',
            path: '/apps/crm',
            title: 'CRM',
            translateKey: 'nav.appsCrm',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: []
        },
        {
            key: 'apps.mail',
            path: '/apps/mail',
            title: 'Mail',
            translateKey: 'nav.appsMail',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: []
        }
    ]
}
```

### 3. Title (Section Header)

Groups related menu items with a title.

```typescript
{
    key: 'uiComponents',
    path: '',
    title: 'UI Components',
    translateKey: 'nav.uiComponents',
    icon: 'uiComponents',
    type: NAV_ITEM_TYPE_TITLE,
    authority: [ADMIN, USER],
    subMenu: [
        {
            key: 'uiComponents.button',
            path: '/components/button',
            title: 'Button',
            translateKey: 'nav.button',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: []
        },
        {
            key: 'uiComponents.input',
            path: '/components/input',
            title: 'Input',
            translateKey: 'nav.input',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: []
        }
    ]
}
```

## NavigationTree Properties

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| `key` | Unique identifier matching route config | `string` | Yes |
| `path` | URL path for the menu item | `string` | Yes |
| `title` | Display text for menu item | `string` | Yes |
| `translateKey` | i18n translation key | `string` | Yes |
| `icon` | Icon identifier | `string` | Yes |
| `type` | Menu item type | `'title' \| 'collapse' \| 'item'` | Yes |
| `authority` | Roles that can see this menu | `string[]` | Yes |
| `subMenu` | Child menu items | `NavigationTree[]` | Yes |
| `isExternalLink` | Opens in new tab | `boolean` | No |
| `description` | Menu item description | `string` | No |
| `meta` | Additional configuration | `object` | No |

## Complete Examples

### Example 1: Simple Navigation

```typescript
const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: []
    },
    {
        key: 'dashboard',
        path: '/dashboard',
        title: 'Dashboard',
        translateKey: 'nav.dashboard',
        icon: 'dashboard',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: []
    },
    {
        key: 'settings',
        path: '/settings',
        title: 'Settings',
        translateKey: 'nav.settings',
        icon: 'settings',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN],
        subMenu: []
    }
]
```

### Example 2: Multi-Level Navigation

```typescript
const navigationConfig: NavigationTree[] = [
    {
        key: 'apps',
        path: '',
        title: 'Apps',
        translateKey: 'nav.apps',
        icon: 'apps',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'apps.crm',
                path: '',
                title: 'CRM',
                translateKey: 'nav.appsCrm',
                icon: 'crm',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [
                    {
                        key: 'apps.crm.dashboard',
                        path: '/apps/crm/dashboard',
                        title: 'Dashboard',
                        translateKey: 'nav.appsCrmDashboard',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: []
                    },
                    {
                        key: 'apps.crm.contacts',
                        path: '/apps/crm/contacts',
                        title: 'Contacts',
                        translateKey: 'nav.appsCrmContacts',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN, USER],
                        subMenu: []
                    },
                    {
                        key: 'apps.crm.leads',
                        path: '/apps/crm/leads',
                        title: 'Leads',
                        translateKey: 'nav.appsCrmLeads',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [ADMIN],
                        subMenu: []
                    }
                ]
            }
        ]
    }
]
```

### Example 3: External Links

```typescript
{
    key: 'documentation',
    path: 'https://docs.example.com',
    title: 'Documentation',
    translateKey: 'nav.documentation',
    icon: 'docs',
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: [],
    isExternalLink: true
}
```

### Example 4: With Horizontal Menu Meta

```typescript
{
    key: 'components',
    path: '',
    title: 'Components',
    translateKey: 'nav.components',
    icon: 'components',
    type: NAV_ITEM_TYPE_TITLE,
    authority: [ADMIN, USER],
    meta: {
        horizontalMenu: {
            layout: 'columns',
            showColumnTitle: true,
            columns: 4
        }
    },
    subMenu: [
        // Sub items in 4 columns
    ]
}
```

## Icon Configuration

Icons are configured separately in `src/configs/navigation-icon.config.tsx`.

### Step 1: Import Icon

```typescript
import {
    HiHome,
    HiChartBar,
    HiCog,
    HiUsers,
    HiShoppingCart,
    HiMail
} from 'react-icons/hi'
import type { ReactNode } from 'react'
```

### Step 2: Add to Configuration

```typescript
const navigationIcon: Record<string, ReactNode> = {
    home: <HiHome />,
    dashboard: <HiChartBar />,
    settings: <HiCog />,
    users: <HiUsers />,
    crm: <HiShoppingCart />,
    mail: <HiMail />
}

export default navigationIcon
```

### Step 3: Use in Navigation Config

```typescript
{
    key: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
    translateKey: 'nav.dashboard',
    icon: 'dashboard', // Matches key in navigationIcon
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN, USER],
    subMenu: []
}
```

### Popular Icon Libraries

- **react-icons/hi** - Heroicons
- **react-icons/fi** - Feather Icons
- **react-icons/ai** - Ant Design Icons
- **react-icons/md** - Material Design Icons
- **react-icons/fa** - Font Awesome

**Example using different libraries:**

```typescript
import { HiHome } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'

const navigationIcon: Record<string, ReactNode> = {
    home: <HiHome />,
    settings: <FiSettings />,
    users: <AiOutlineUser />
}
```

## Internationalization (i18n)

### Translation Keys

Add translations to your locale files (`messages/en.json`, etc.):

```json
{
    "nav": {
        "home": "Home",
        "dashboard": "Dashboard",
        "apps": "Apps",
        "appsCrm": "CRM",
        "appsCrmDashboard": "Dashboard",
        "appsCrmContacts": "Contacts",
        "settings": "Settings"
    }
}
```

**Spanish (`messages/es.json`):**

```json
{
    "nav": {
        "home": "Inicio",
        "dashboard": "Tablero",
        "apps": "Aplicaciones",
        "appsCrm": "CRM",
        "appsCrmDashboard": "Tablero",
        "appsCrmContacts": "Contactos",
        "settings": "Configuración"
    }
}
```

### Enable Navigation Translation

In `src/configs/app.config.ts`:

```typescript
export const appConfig: AppConfig = {
    // ... other config
    activeNavTranslation: true
}
```

## Role-Based Visibility

### Authority Configuration

```typescript
// Visible to all users
authority: []

// Only admins can see
authority: [ADMIN]

// Admins and users can see
authority: [ADMIN, USER]

// Multiple specific roles
authority: [ADMIN, MODERATOR, USER]
```

### Dynamic Menu Filtering

The navigation system automatically filters menu items based on the user's role.

```typescript
// This item only appears for admins
{
    key: 'admin.panel',
    path: '/admin',
    title: 'Admin Panel',
    translateKey: 'nav.adminPanel',
    icon: 'admin',
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN],
    subMenu: []
}
```

## Key Matching for Route Highlighting

The `key` field should match the route configuration for proper menu highlighting.

**Route Config:**

```typescript
export const protectedRoutes: Record<string, RouteConfig> = {
    '/dashboard': {
        key: 'dashboard', // Matches navigation key
        authority: [ADMIN, USER]
    }
}
```

**Navigation Config:**

```typescript
{
    key: 'dashboard', // Matches route key
    path: '/dashboard',
    // ... other properties
}
```

## Best Practices

1. **Consistent Naming**
   - Use dot notation for nested keys: `'apps.crm.dashboard'`
   - Keep keys descriptive and logical

2. **Translation Keys**
   - Always provide translateKey even if not using i18n
   - Use hierarchical structure matching menu structure

3. **Icons**
   - Choose icons that represent the function
   - Keep icon style consistent across navigation
   - Use empty string `''` for sub-items if parent has icon

4. **Authority**
   - Be specific about role requirements
   - Empty array = visible to all authenticated users
   - Consider UX when hiding items

5. **Hierarchy**
   - Don't nest more than 3 levels deep
   - Group related items under titles or collapse menus
   - Keep top-level items to essential features

6. **External Links**
   - Always set `isExternalLink: true` for external URLs
   - Use full URL including protocol

## Common Patterns

### Dashboard Navigation

```typescript
{
    key: 'dashboards',
    path: '',
    title: 'Dashboards',
    translateKey: 'nav.dashboards',
    icon: 'dashboard',
    type: NAV_ITEM_TYPE_TITLE,
    authority: [ADMIN, USER],
    subMenu: [
        {
            key: 'dashboards.ecommerce',
            path: '/dashboards/ecommerce',
            title: 'E-commerce',
            translateKey: 'nav.dashboardsEcommerce',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: []
        },
        {
            key: 'dashboards.analytics',
            path: '/dashboards/analytics',
            title: 'Analytics',
            translateKey: 'nav.dashboardsAnalytics',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: []
        }
    ]
}
```

### Settings Navigation

```typescript
{
    key: 'settings',
    path: '',
    title: 'Settings',
    translateKey: 'nav.settings',
    icon: 'settings',
    type: NAV_ITEM_TYPE_COLLAPSE,
    authority: [ADMIN, USER],
    subMenu: [
        {
            key: 'settings.profile',
            path: '/settings/profile',
            title: 'Profile',
            translateKey: 'nav.settingsProfile',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: []
        },
        {
            key: 'settings.security',
            path: '/settings/security',
            title: 'Security',
            translateKey: 'nav.settingsSecurity',
            icon: '',
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: []
        }
    ]
}
```

## Troubleshooting

### Icon Not Showing

1. Check if icon key exists in `navigation-icon.config.tsx`
2. Verify icon import is correct
3. Check for typos in icon key

### Menu Item Not Visible

1. Check user's role matches authority
2. Verify path is correct
3. Check if item is properly nested in subMenu

### Active State Not Highlighting

1. Ensure `key` matches route config key
2. Check if path is correct
3. Verify route exists in route config

## Migration Checklist

When adding a new menu item:

- [ ] Add navigation item to config
- [ ] Set unique key matching route config
- [ ] Choose appropriate type (item/collapse/title)
- [ ] Import and configure icon
- [ ] Add translation keys to all locale files
- [ ] Set appropriate authority
- [ ] Test visibility with different roles
- [ ] Verify active state highlighting

## When to Invoke This Skill

- Adding new menu items to navigation
- Configuring icons for menu items
- Setting up multi-level navigation
- Configuring role-based menu visibility
- Adding translations for navigation
- Troubleshooting navigation issues
