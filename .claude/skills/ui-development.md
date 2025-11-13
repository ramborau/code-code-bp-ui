# UI Development Skill

You are working on the Ecme UI template project, a Next.js-based application.

## Core Rules (from UIGOD-RULES.MD)

1. **Do not edit `demo/` folder files.** Ever. `demo/` is read-only and the canonical source of components.
2. **Do not use components stored outside the `demo/` folder.** All UI components must originate from `demo/`.
3. **Do not add or invent colors or fonts.** Use only the `San Francisco` font family and the primary color `#00c307` (and any existing color tokens already in the repo). No custom colors without approval.
4. **Follow the UIGOD-RULES.MD workflow** at all times.

## Fonts & Colors (mandatory)

### Fonts
Use **Inter** as the primary font or **San Francisco** for Apple-style branding:

```css
/* Primary: Inter */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Alternative: San Francisco */
font-family: 'San Francisco';
```

### Colors
**Primary Brand Color**: `#00c307` (Vibrant Green)

```css
--primary: #00c307;
--primary-deep: #00a006;
--primary-mild: #1acd17;
--primary-subtle: #00c3071a;
```

## Workflow (step-by-step)

1. **Explore `demo/` first**
   - Read every file under `demo/` to understand available components, props, styles, and example usage.

2. **Build pages only in `starter/`**
   - Create pages, experiments and playgrounds in `starter/` using components from `demo/` as-is.
   - Never move or copy components into `starter/` for permanent edits.
   - If you need a modified component, create a wrapper in `starter/` that composes the `demo/` component.

3. **Component changes process (rare & formal)**
   - If a component in `demo/` absolutely must change, open a PR describing why, include before/after usage examples and get explicit approval.
   - Until the PR merges, do all experiments in `starter/` via wrappers.

## Key Technical Information

### Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **UI Library**: React 18+
- **Styling**: Tailwind CSS 3+
- **Type System**: TypeScript 5+
- **State Management**: Zustand
- **Authentication**: BetterAuth

### Folder Structure
- `src/app/(protected-pages)` - Authenticated pages
- `src/app/(public-pages)` - Public pages
- `src/app/(auth-pages)` - Login/signup pages
- `src/components/ui` - Base UI components (from demo)
- `src/components/template` - Header, Footer, Nav, etc.
- `src/configs` - Configuration files

### Creating New Pages

1. Navigate to appropriate directory (`protected-pages`, `public-pages`, `auth-pages`)
2. Create `page.tsx` file
3. Add route configuration in `src/configs/routes.config/index.ts`
4. Optionally add to navigation in `src/configs/navigation.config/index.ts`

### Best Practices
- Keep server components as the default
- Use `'use client'` only for components with interactivity
- Separate client components from server components
- Follow the file structure conventions
- Use TypeScript strictly
- Follow accessibility guidelines

## Quick Checklist

- [ ] Did I read `demo/` fully for the component I want to use?
- [ ] Am I editing `starter/` and not `demo/`?
- [ ] Am I using only the provided fonts and colors?
- [ ] If modifying `demo/`, did I open a PR with justification?

## Reference Documentation

Refer to CORE.MD for complete documentation on:
- Routing & Navigation
- Authentication with BetterAuth
- State Management with Zustand
- API Integration
- Theming & Dark Mode
- Internationalization
- Build & Deployment
