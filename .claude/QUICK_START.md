# Quick Start Guide - Claude Code Skills

This guide helps you get started with the Claude Code skills for the Ecme UI Component Library.

## Available Skills

### 1. 📦 Create Component
**Use when**: Creating a new UI component

```
I need to create a new Card component in the ui folder
```

This skill will guide you through:
- Component structure
- TypeScript types
- Styling with Tailwind
- Accessibility features

### 2. 📄 Create Page
**Use when**: Adding a new page to the application

```
I want to create a new dashboard page
```

This skill will help you:
- Choose the right route group
- Set up page metadata
- Configure authentication
- Add to navigation

### 3. 🛣️ Setup Routes
**Use when**: Configuring route access and settings

```
Help me set up routes for my new admin panel
```

This skill covers:
- Route configuration
- Access control (RBAC)
- Meta settings
- Layout overrides

### 4. 🧭 Setup Navigation
**Use when**: Adding menu items

```
I need to add a new menu item for settings
```

This skill guides:
- Navigation structure
- Icon configuration
- Role-based visibility
- Multi-level menus

### 5. 🎨 Theme Config
**Use when**: Customizing theme and colors

```
I want to change the primary brand color
```

This skill helps with:
- Color customization
- Layout selection
- Dark/Light mode
- Custom theme schemas

## Quick Examples

### Creating a New Feature

**Scenario**: Adding a "Products" section

1. **Create the page**:
   ```
   Help me create a products listing page
   ```

2. **Set up routing**:
   ```
   Configure routes for /products with admin access
   ```

3. **Add to navigation**:
   ```
   Add a Products menu item with a shopping cart icon
   ```

4. **Create components** (if needed):
   ```
   Create a ProductCard component in the ui folder
   ```

### Customizing the Theme

**Scenario**: Changing to a blue theme

```
Help me change the primary brand color from green to blue (#2a85ff)
```

The theme-config skill will guide you through:
- Updating CSS variables
- Updating theme schema
- Testing in both modes

## Project Structure Reference

```
src/
├── app/                    # Next.js pages
│   ├── (auth-pages)/       # Login, signup
│   ├── (protected-pages)/  # Dashboard, profile
│   └── (public-pages)/     # Landing, about
├── components/
│   ├── ui/                 # Base components
│   ├── shared/             # Shared components
│   ├── template/           # Header, Footer, Nav
│   └── view/               # Page-specific components
├── configs/
│   ├── app.config.ts       # App settings
│   ├── theme.config.ts     # Theme settings
│   ├── navigation.config/  # Menu structure
│   └── routes.config/      # Route definitions
└── assets/
    └── styles/             # Global CSS
```

## Key Concepts

### Route Groups

- **Auth Pages**: Login, registration
- **Protected Pages**: Require authentication
- **Public Pages**: Accessible to all

### Component Categories

- **ui/**: Reusable base components
- **shared/**: Higher-level components
- **template/**: Layout components
- **view/**: Page-specific components

### Theme System

- CSS variables for colors
- Tailwind for styling
- Support for light/dark modes
- Dynamic theme switching

## Common Workflows

### Adding a New Dashboard Page

1. Create page: `src/app/(protected-pages)/analytics/page.tsx`
2. Configure route in `routes.config/index.ts`
3. Add to navigation in `navigation.config/index.ts`
4. Add icon to `navigation-icon.config.tsx`

### Creating a Reusable Component

1. Create folder: `src/components/ui/Badge/`
2. Create files: `Badge.tsx`, `types.ts`, `index.tsx`
3. Use TypeScript for type safety
4. Style with Tailwind classes
5. Test in light and dark modes

### Customizing Colors

1. Update CSS variables in `src/assets/styles/tailwind/index.css`
2. Update both `:root` and `.dark` selectors
3. Optionally create a theme schema in `preset-theme-schema.config.ts`
4. Test across all components

## Tips

1. **Always use skills** - The skills contain best practices and patterns
2. **Match keys** - Route keys should match navigation keys
3. **Type safety** - Always use TypeScript types
4. **Test both themes** - Check light and dark modes
5. **Responsive design** - Test on different screen sizes

## Getting Help

If you're unsure which skill to use:

```
I want to [describe what you want to do]
```

Claude will suggest the appropriate skill and guide you through the process.

## Resources

- Skills folder: `.claude/skills/`
- Project docs: `CORE.MD` and `UI.MD`
- Tailwind docs: https://tailwindcss.com
- Next.js docs: https://nextjs.org
