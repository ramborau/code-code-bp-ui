---
description: Create a new page following Ecme template conventions
---

I'll help you create a new page in the Ecme template. I need the following information:

1. **Page Name**: What should the page be called?
2. **Route Path**: What URL path? (e.g., `/dashboard`, `/profile`)
3. **Page Type**:
   - Protected (requires authentication)
   - Public (accessible to all)
   - Auth (login, signup, etc.)
4. **Required Roles**: Which roles can access? (e.g., admin, user, or empty for all)
5. **Layout**: Which layout to use? (collapsibleSide, stackedSide, topBarClassic, framelessSide, contentOverlay, blank)
6. **Add to Navigation?**: Should this page appear in the navigation menu?

Once you provide these details, I will:
1. Create the `page.tsx` file in the correct location
2. Add route configuration to `src/configs/routes.config/index.ts`
3. (Optional) Add navigation item to `src/configs/navigation.config/index.ts`
4. Create a basic page structure with proper TypeScript types
5. Include metadata for SEO
6. Follow Ecme template best practices

The page will be created in the `starter/` folder following all UIGOD rules.
