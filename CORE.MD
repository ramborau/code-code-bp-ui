# Ecme - Complete Documentation

> **Technology Stack**: TypeScript • Next.js • React • Tailwind CSS
> **Font**: Inter (San Francisco for branding)
> **Primary Color**: #00c307

---

## Table of Contents

1. [Introduction](#introduction)
2. [Branding & Design System](#branding--design-system)
3. [Core Libraries](#core-libraries)
4. [Installation](#installation)
5. [TailwindCSS](#tailwindcss)
6. [CSS Architecture](#css-architecture)
7. [Starter Version](#starter-version)
8. [Updating](#updating)
9. [Development Server](#development-server)
10. [Environment Variables](#environment-variables)
11. [Folder Structure](#folder-structure)
12. [Routing](#routing)
13. [Creating New Pages](#creating-new-pages)
14. [API Integration](#api-integration)
15. [Authentication (BetterAuth)](#authentication-betterauth)
16. [State Management](#state-management)
17. [App Configuration](#app-configuration)
18. [Layouts](#layouts)
19. [Navigation Configuration](#navigation-configuration)
20. [Theming](#theming)
21. [Internationalization](#internationalization)
22. [Dark/Light Mode](#darklight-mode)
23. [Direction (LTR/RTL)](#direction-ltrrtl)
24. [Overall Theme Configuration](#overall-theme-configuration)
25. [Build & Production](#build--production)
26. [Credits & Sources](#credits--sources)
27. [Support & Resources](#support--resources)

---

## Introduction

Ecme is not just another web template—it's a meticulously crafted masterpiece that stands out in a market flooded with generic, poorly designed options. Every aspect of Ecme, from its elegant UI to its robust code architecture, has been thoughtfully designed to ensure unparalleled flexibility and scalability for your projects.

### Key Features

- **Custom-Built UI Components**: Unlike other templates that rely on common open-source libraries, Ecme features a comprehensive suite of custom-built UI components with rich functionality
- **Advanced Features**:
  - Multi-language support
  - Dark and light mode
  - Right-to-left layout
  - Theme color customization
  - Six pre-designed layouts
- **Real-World Application Examples**: Grounded in practical, ready-to-use solutions
- **Greater Control**: Tailor every detail to meet your specific needs
- **TypeScript First**: Built entirely with TypeScript for type safety and better developer experience

---

## Branding & Design System

Our project follows a consistent design system to ensure brand coherence across all components and pages.

### Typography

**Primary Font**: **Inter**

Inter is a modern, clean, and highly legible typeface designed specifically for user interfaces. It provides excellent readability at all sizes and is optimized for screen display.

```css
/* Global font family configuration in Tailwind */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

To ensure Inter is properly loaded, add it to your project:

**Option 1: Using Google Fonts (Next.js)**

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

**Option 2: Using Tailwind Config**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};

export default config;
```

### Alternative: San Francisco Font

For Apple-style branding, you can use San Francisco font:

```css
/** Font: San Francisco (weights included) */
/** http://applemusic.tumblr.com/ */

/** Ultra Light */
@font-face {
  font-family: 'San Francisco';
  font-weight: 100;
  src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff');
}

/** Thin */
@font-face {
  font-family: 'San Francisco';
  font-weight: 200;
  src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-thin-webfont.woff');
}

/** Regular */
@font-face {
  font-family: 'San Francisco';
  font-weight: 400;
  src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff');
}

/** Medium */
@font-face {
  font-family: 'San Francisco';
  font-weight: 500;
  src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff');
}

/** Semi Bold */
@font-face {
  font-family: 'San Francisco';
  font-weight: 600;
  src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.woff');
}

/** Bold */
@font-face {
  font-family: 'San Francisco';
  font-weight: 700;
  src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff');
}

* {
  font-family: 'San Francisco';
}

h1 { font-weight: 700; }
h2 { font-weight: 600; }
h3 { font-weight: 500; }
p { font-weight: 400; }
p.thin { font-weight: 200; }
p.ultralight { font-weight: 100; }
```

### Color Palette

**Primary Brand Color**: `#00c307` (Vibrant Green)

This vibrant green represents growth, innovation, and energy. It's used for:

- Primary buttons and CTAs
- Active states and selections
- Links and interactive elements
- Brand highlights and accents

```css
/* Primary color variables */
--primary: #00c307;
--primary-deep: #00a006; /* Darker shade for hover states */
--primary-mild: #1acd17; /* Lighter shade for backgrounds */
--primary-subtle: #00c3071a; /* 10% opacity for subtle backgrounds */
```

### Design Principles

- **Consistency**: Uniform spacing, sizing, and styling across all components
- **Accessibility**: WCAG 2.1 AA compliant color contrast ratios
- **Responsiveness**: Mobile-first design approach
- **Modern & Clean**: Minimalist aesthetic with purposeful whitespace
- **Performance**: Optimized for fast load times and smooth interactions

---

## Core Libraries

Ecme is built on top of industry-standard modern technologies:

| Library          | Description                                | Version |
| ---------------- | ------------------------------------------ | ------- |
| **React**        | UI library for building user interfaces    | 18+     |
| **Next.js**      | React framework with server-side rendering | 14+     |
| **TypeScript**   | Typed superset of JavaScript               | 5+      |
| **Tailwind CSS** | Utility-first CSS framework                | 3+      |
| **BetterAuth**   | Modern authentication solution             | Latest  |
| **Zustand**      | Lightweight state management               | 4+      |

---

## Installation

### Prerequisites

Before getting started with Ecme, ensure your development environment has the following tools installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**

### Package Structure

After extracting the downloaded `.zip` file, you'll find the **TypeScript** folder containing:

#### 1. **demo/**

Contains the full demo of the project, including everything you see in the live preview. This is meant for reference only and **NOT recommended** for development.

#### 2. **starter/**

The starter pack provides the basic setup for the template. This is where you should begin your development, creating pages and adding your code. **We highly recommend copying this folder into your workspace.**

#### 3. **documentation/**

Contains an `index.html` file that redirects to the online documentation.

### Installation Steps

1. Navigate to the project's root directory (where `package.json` is located)
2. Run the following command in your console:

```bash
npm install
```

This will install all necessary dependencies in the `node_modules` directory, allowing you to start development.

---

## TailwindCSS

Tailwind CSS is a utility-first CSS framework that provides predefined classes for building and designing UI directly within JSX. Ecme utilizes Tailwind as its core CSS framework, with most UI elements built entirely using its features.

### Configuration

You can easily update the theme and base styles by modifying the `tailwind.config.ts` file located in the root directory.

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#00c307',
          deep: '#00a006',
          mild: '#1acd17',
          subtle: '#00c3071a',
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### Tooling

If you use VS Code as your IDE, we recommend installing the **Tailwind CSS IntelliSense** plugin. This plugin provides:

- Autocomplete
- Syntax highlighting
- Linting based on your Tailwind configuration

### Important Note

Some of our UI components use semantic classes with the Tailwind `@apply` directive. In certain cases, applying Tailwind classes directly to these components may not work as expected. You might need to use the `!important` modifier to override the default high specificity selectors.

To make any utility class important, simply add an `!` character at the beginning:

```tsx
<Dropdown className="bg-red-500!" />
```

---

## CSS Architecture

While we primarily use Tailwind CSS, we also have additional custom styles written in standard CSS, located in the `src/assets/styles/*` directory. Because Tailwind depends on certain CSS processing features, we're using **PostCSS** as our preprocessor.

### Folder Structure

```
├── styles
|   ├── components       # styles for base UI components
|   ├── docs            # styles for documentation components
|   ├── tailwind        # Tailwind entry & base styles
|   ├── template        # styles for template components
|   ├── vendors         # styles for third-party libraries
|   └── index.css       # main entry CSS
```

Each folder inside the styles directory contains an `index.css` file that imports all other CSS files within the same folder. Eventually, all these `index.css` files are imported into the main entry CSS.

### Custom CSS

If Tailwind doesn't cover all your styling needs, you can add custom CSS in this folder. We recommend using Tailwind's functions and directives when adding custom styles:

- `@apply` - Apply Tailwind utility classes
- `@layer` - Organize CSS into layers
- `theme()` - Access Tailwind theme values

**Example:**

```css
@layer components {
  .btn-primary {
    @apply bg-primary text-white px-4 py-2 rounded-md;
    @apply hover:bg-primary-deep transition-colors;
  }

  .custom-input {
    border-color: theme('colors.primary.DEFAULT');
  }
}
```

---

## Starter Version

As mentioned in the Installation section, we've provided a starter version with the essential core components and basic functionality setup. **We highly recommend that developers use this version as the foundation for building their apps.**

### Default Login Credentials

When you open the starter pack in your local environment, you'll be directed to the login page. You can sign in using:

- **User**: `admin`
- **Password**: `123Qwe`

### Default Configurations

#### AppConfig

**Location**: `src/configs/app.config.ts`

```typescript
type AppConfig = {
  apiPrefix: string;
  authenticatedEntryPath: string;
  unAuthenticatedEntryPath: string;
  locale: string;
  activeNavTranslation: boolean;
};

const appConfig: AppConfig = {
  apiPrefix: '/api',
  authenticatedEntryPath: '/home',
  unAuthenticatedEntryPath: '/sign-in',
  locale: 'en',
  activeNavTranslation: false,
};

export default appConfig;
```

---

## Updating

Since the platform doesn't include a built-in version control system, updating your templates can be challenging. However, here are some tips to help you keep your templates up to date more easily:

1. Before starting a new project, consider hosting the original template in your own repository
2. Create a branch from the repository to use as your workspace
3. When a new update is released, push the latest version's content to your repository
4. Merge your workspace branch with the original branch to incorporate the latest changes

**Recommended Workflow:**

```bash
# Initial setup
git init
git add .
git commit -m "Initial Ecme template"
git branch development
git checkout development

# When updates are released
git checkout main
# Copy new template files here
git add .
git commit -m "Update to Ecme v2.x"
git checkout development
git merge main
```

---

## Development Server

Once you've installed all the dependencies, you can start the development server by running the following command in your terminal:

```bash
npm run dev
```

Or if you're using yarn:

```bash
yarn dev
```

Or if you're using pnpm:

```bash
pnpm dev
```

Open your browser and go to `http://localhost:3000/`. The app will automatically reload whenever you make changes to the source files.

### Development Server Options

You can customize the development server by modifying `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "dev:turbo": "next dev --turbo",
    "dev:port": "next dev -p 3001"
  }
}
```

---

## Environment Variables

Environment variables are a secure way to store and manage configuration data or sensitive information, such as API keys, database connection strings, or environment-specific settings.

### Setting Up Environment Variables

The template already comes with a `.env` file located in the root directory. Feel free to modify these variables according to your project requirements.

#### Example Configuration:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE_URL=https://api.example.com

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/ecme_db

# Authentication (BetterAuth)
BETTER_AUTH_SECRET=your-secret-key-here
BETTER_AUTH_URL=http://localhost:3000

# OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-secret

# Email Service (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### Variable Types

- **Public Variables**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. These should not include sensitive data.
- **Private Variables**: Variables without the `NEXT_PUBLIC_` prefix are only available on the server side and are never exposed to the client.

---

## Folder Structure

Our template's folder structure closely follows the official Next.js app router structure conventions. Both the demo and starter versions have the same structure, except that the starter version will have fewer files & folders.

### Directory Structure

```
├── messages                      # Locale messages
|   ├── en.json                   # English locale
|   ├── es.json                   # Spanish locale
|   └── ...                       # Other locale JSON files
├── public                        # Static resources
|   ├── img                       # Images
|   ├── data                      # Static data
|   └── ...                       # Other static files
├── src
│   ├── @types                    # TypeScript type definitions
│   │   ├── auth.ts               # Auth types
│   │   ├── navigation.ts         # Navigation types
│   │   ├── routes.ts             # Routes types
│   │   ├── theme.ts              # Theme types
│   │   └── ...                   # Other type files
│   ├── app                       # Main application directory (Next.js App Router)
│   │   ├── (auth-pages)          # Route group for auth pages
│   │   │   ├── sign-in
│   │   │   │   └── page.tsx
│   │   │   ├── sign-up
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx        # Auth pages layout
│   │   ├── (protected-pages)     # Route group for authenticated pages
│   │   │   ├── dashboard
│   │   │   │   └── page.tsx
│   │   │   ├── ...               # Other protected pages
│   │   │   └── layout.tsx        # Protected pages layout
│   │   ├── (public-pages)        # Route group for public pages
│   │   │   ├── about
│   │   │   │   └── page.tsx
│   │   │   └── ...               # Other public pages
│   │   ├── api                   # API routes
│   │   │   ├── auth
│   │   │   │   └── [...all]
│   │   │   │       └── route.ts  # BetterAuth handler
│   │   │   └── ...               # Other API routes
│   │   ├── favicon.ico           # Favicon
│   │   ├── layout.tsx            # Root layout
│   │   ├── not-found.tsx         # 404 page
│   │   └── page.tsx              # Entry page
│   ├── assets                    # Static assets
│   │   ├── maps                  # Map metadata
│   │   ├── markdown              # Markdown files
│   │   ├── styles                # Global CSS files
│   │   │   ├── components        # Component styles
│   │   │   ├── tailwind          # Tailwind base styles
│   │   │   ├── template          # Template styles
│   │   │   └── index.css         # Main CSS entry
│   │   └── svg                   # SVG files
│   ├── components                # React components
│   │   ├── auth                  # Auth-related components
│   │   │   ├── SignInForm.tsx
│   │   │   ├── SignUpForm.tsx
│   │   │   └── ...
│   │   ├── docs                  # Documentation components
│   │   ├── layouts               # Layout components
│   │   │   ├── AuthLayout
│   │   │   ├── PostLoginLayout
│   │   │   └── ...
│   │   ├── shared                # Shared higher-level components
│   │   ├── template              # Template components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── SideNav.tsx
│   │   │   └── ...
│   │   ├── ui                    # Base UI components
│   │   │   ├── Button
│   │   │   ├── Input
│   │   │   ├── Dropdown
│   │   │   └── ...
│   │   └── view                  # Page-specific view components
│   ├── configs                   # Configuration files
│   │   ├── app.config.ts         # App configuration
│   │   ├── theme.config.ts       # Theme configuration
│   │   ├── navigation.config     # Navigation configuration
│   │   │   └── index.ts
│   │   ├── routes.config         # Routes configuration
│   │   │   └── index.ts
│   │   └── ...                   # Other config files
│   ├── constants                 # Constant values
│   │   ├── roles.constant.ts
│   │   ├── theme.constant.ts
│   │   ├── navigation.constant.ts
│   │   └── ...
│   ├── i18n                      # Internationalization
│   │   ├── index.ts
│   │   └── ...
│   ├── lib                       # Library integrations
│   │   ├── auth.ts               # BetterAuth setup
│   │   ├── auth-client.ts        # BetterAuth client
│   │   ├── prisma.ts             # Prisma client
│   │   └── ...
│   ├── mock                      # Mock data
│   │   └── data
│   │       ├── users.ts
│   │       ├── products.ts
│   │       └── ...
│   ├── server                    # Server-side code
│   │   └── actions               # Server actions
│   │       ├── user
│   │       │   └── ...
│   │       └── ...
│   ├── services                  # API service layer
│   │   ├── ApiService.ts         # API request handler
│   │   ├── axios                 # Axios configuration
│   │   │   ├── index.ts
│   │   │   └── interceptors.ts
│   │   └── ...                   # Feature-specific services
│   ├── store                     # Zustand stores
│   │   ├── slices                # Store slices
│   │   │   ├── authSlice.ts
│   │   │   ├── themeSlice.ts
│   │   │   └── ...
│   │   └── index.ts              # Combined store
│   ├── utils                     # Utility functions & hooks
│   │   ├── hooks                 # Custom React hooks
│   │   │   ├── useAuth.ts
│   │   │   ├── useTheme.ts
│   │   │   └── ...
│   │   ├── classNames.ts         # ClassName utility
│   │   ├── formatters.ts         # Data formatters
│   │   └── ...                   # Other utilities
│   └── middleware.ts             # Next.js middleware
├── .env                          # Environment variables
├── .env.example                  # Environment variables template
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore rules
├── .prettierrc                   # Prettier configuration
├── next.config.mjs               # Next.js configuration
├── package.json                  # Project dependencies
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # Project readme
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

This folder structure provides a clear organization of resources, components, configuration, and assets, making it easier to manage and scale your project.

---

## Routing

Ecme routing follows the Next.js App Router conventions. It uses a file-based routing system where each file in the `/app` directory corresponds to a route in your application.

### Route Configuration

Although Next.js provides a robust routing system out of the box, our template introduces an additional layer of routing configuration for extended functionality.

The router configuration can be found in `src/configs/routes.config/index.ts`. There are 3 main groups:

```typescript
// Public routes - accessible to all users
export const publicRoutes: Record<string, RouteConfig> = {
  // Route definitions
};

// Protected routes - require authentication
export const protectedRoutes: Record<string, RouteConfig> = {
  // Route definitions
};

// Auth routes - login, registration, etc.
export const authRoutes: Record<string, RouteConfig> = {
  // Route definitions
};
```

### Configuration Structure

```typescript
export const protectedRoutes: Record<string, RouteConfig> = {
  '/articles': {
    key: 'articles',
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: 'contained',
    },
  },
  '/articles/[slug]': {
    key: 'articles.articleDetails',
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: 'contained',
    },
    dynamicRoute: true,
  },
};
```

### Authority (Role-Based Access Control)

Ecme routes support simple role-based access control. You can specify the roles that have access to a route by using the authority field. For example, the following route is only accessible to users with the 'admin' or 'user' roles. If the authority field is left as an empty array, the route will be open to all roles.

```typescript
export const protectedRoutes: Record<string, RouteConfig> = {
  '/admin-panel': {
    key: 'adminPanel',
    authority: ['admin'], // Only admins can access
    meta: {
      pageContainerType: 'contained',
    },
  },
  '/dashboard': {
    key: 'dashboard',
    authority: ['admin', 'user'], // Admins and users can access
    meta: {
      pageContainerType: 'contained',
    },
  },
  '/home': {
    key: 'home',
    authority: [], // Empty array = accessible to all authenticated users
    meta: {
      pageContainerType: 'default',
    },
  },
};
```

### Meta Configuration

The `meta` field allows passing additional information to the PageContainer:

```typescript
export const protectedRoutes: Record<string, RouteConfig> = {
  '/my-page': {
    key: 'myPage',
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: 'contained',
      pageBackgroundType: 'plain',
      header: {
        title: 'My Page Title',
        description: 'Page description here',
        contained: true,
        extraHeader: lazy(() => import('@/components/MyHeaderComponent')),
      },
      footer: false,
      layout: 'blank',
    },
  },
};
```

#### Meta Properties

| Property             | Description                 | Type                                                          | Default     |
| -------------------- | --------------------------- | ------------------------------------------------------------- | ----------- |
| `pageContainerType`  | View container type         | `'default'` \| `'gutterless'` \| `'contained'`                | `'default'` |
| `pageBackgroundType` | Page background type        | `'default'` \| `'plain'`                                      | -           |
| `header`             | Page header configuration   | `object`                                                      | -           |
| `header.title`       | Page title                  | `string` \| `ReactNode` \| `LazyExoticComponent`              | -           |
| `header.description` | Page description            | `string` \| `ReactNode`                                       | -           |
| `header.contained`   | Whether header is contained | `boolean`                                                     | -           |
| `header.extraHeader` | Additional header component | `ReactNode` \| `LazyExoticComponent`                          | -           |
| `footer`             | Show/hide footer            | `boolean`                                                     | `true`      |
| `layout`             | Override current layout     | `'blank'` \| `'collapsibleSide'` \| `'stackedSide'` \| `...` | -           |

---

## Creating New Pages

This guide walks you through creating a new page in the template.

### Step 1: Create the Page Component

#### Navigate to the Appropriate Directory

- **Protected pages** (require authentication): `src/app/(protected-pages)`
- **Public pages**: `src/app/(public-pages)`
- **Auth pages**: `src/app/(auth-pages)`

#### Create the Page File

**Static route**: `src/app/(protected-pages)/new-page/page.tsx`

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Page | Ecme',
  description: 'This is a new page',
};

const NewPage = () => {
  return (
    <div>
      <h1>Welcome to the New Page</h1>
      <p>This is a custom page.</p>
    </div>
  );
};

export default NewPage;
```

**Dynamic route**: `src/app/(protected-pages)/articles/[id]/page.tsx`

```typescript
import type { Metadata } from 'next';

type PageProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Article ${params.id} | Ecme`,
  };
}

const ArticlePage = ({ params }: PageProps) => {
  return (
    <div>
      <h1>Article ID: {params.id}</h1>
    </div>
  );
};

export default ArticlePage;
```

### Best Practices

#### Separate Client Components

Instead of using `'use client'` on the page file, create separate client components:

```typescript
// src/app/(protected-pages)/new-page/page.tsx (Server Component)
import ClientComponent from './_components/ClientComponent';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const NewPage = async () => {
  // Server-side data fetching
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      <h1>New Page</h1>
      <ClientComponent user={session?.user} />
    </div>
  );
};

export default NewPage;
```

```typescript
// src/app/(protected-pages)/new-page/_components/ClientComponent.tsx
'use client';

import { useState } from 'react';
import type { User } from '@/lib/auth';

type ClientComponentProps = {
  user?: User;
};

const ClientComponent = ({ user }: ClientComponentProps) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Welcome, {user?.name}!</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};

export default ClientComponent;
```

This approach optimizes SSR while maintaining client-side interactivity.

---

## API Integration

_[Content continues with API Integration, Authentication, State Management, etc. as in UI.MD]_

---

## Dark/Light Mode

Toggle between dark and light modes easily.

### Initial Configuration

Set the initial mode in `src/configs/theme.config.ts`:

```typescript
export const themeConfig: ThemeConfig = {
  // ... other config
  mode: THEME_ENUM.MODE_LIGHT, // or THEME_ENUM.MODE_DARK
};
```

### Mode Switcher Component

```typescript
'use client';

import useTheme from '@/utils/hooks/useTheme';
import Switcher from '@/components/ui/Switcher';
import { HiMoon, HiSun } from 'react-icons/hi';

const ModeSwitcher = () => {
  const mode = useTheme((state) => state.mode);
  const setMode = useTheme((state) => state.setMode);

  const onSwitchChange = (checked: boolean) => {
    setMode(checked ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center gap-2">
      <HiSun className="text-lg" />
      <Switcher defaultChecked={mode === 'dark'} onChange={onSwitchChange} />
      <HiMoon className="text-lg" />
    </div>
  );
};

export default ModeSwitcher;
```

---

## Direction (LTR/RTL)

Support for both left-to-right and right-to-left layouts.

### Initial Configuration

Set the initial direction in `src/configs/theme.config.ts`:

```typescript
export const themeConfig: ThemeConfig = {
  // ... other config
  direction: THEME_ENUM.DIR_LTR, // or THEME_ENUM.DIR_RTL
};
```

### Direction Switcher

```typescript
'use client';

import Button from '@/components/ui/Button';
import InputGroup from '@/components/ui/InputGroup';
import useTheme from '@/utils/hooks/useTheme';
import { THEME_ENUM } from '@/constants/theme.constant';
import type { Direction } from '@/@types/theme';

const dirList: Array<{ value: Direction; label: string }> = [
  { value: THEME_ENUM.DIR_LTR, label: 'LTR' },
  { value: THEME_ENUM.DIR_RTL, label: 'RTL' },
];

const DirectionSwitcher = () => {
  const setDirection = useTheme((state) => state.setDirection);
  const direction = useTheme((state) => state.direction);

  const onDirChange = (val: Direction) => {
    setDirection(val);
  };

  return (
    <div>
      <label className="text-sm font-medium mb-2 block">Direction:</label>
      <InputGroup size="sm">
        {dirList.map((dir) => (
          <Button key={dir.value} active={direction === dir.value} onClick={() => onDirChange(dir.value)}>
            {dir.label}
          </Button>
        ))}
      </InputGroup>
    </div>
  );
};

export default DirectionSwitcher;
```

---

## Overall Theme Configuration

Complete theme configuration reference.

### Theme Config File

`src/configs/theme.config.ts`:

```typescript
import { THEME_ENUM } from '@/constants/theme.constant';
import type { Direction, Mode, ControlSize, LayoutType } from '@/@types/theme';

export type ThemeConfig = {
  themeSchema: string;
  direction: Direction;
  mode: Mode;
  panelExpand: boolean;
  controlSize: ControlSize;
  layout: {
    type: LayoutType;
    sideNavCollapse: boolean;
  };
};

export const themeConfig: ThemeConfig = {
  themeSchema: 'default', // or 'blue', 'purple', etc.
  direction: THEME_ENUM.DIR_LTR,
  mode: THEME_ENUM.MODE_LIGHT,
  panelExpand: false,
  controlSize: 'md',
  layout: {
    type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
    sideNavCollapse: false,
  },
};
```

### Configuration Properties

| Property                 | Description                                        | Type                                                          | Default             |
| ------------------------ | -------------------------------------------------- | ------------------------------------------------------------- | ------------------- |
| `themeSchema`            | Color scheme preset                                | `string`                                                      | `'default'`         |
| `direction`              | Text direction                                     | `'ltr'` \| `'rtl'`                                            | `'ltr'`             |
| `mode`                   | Color mode                                         | `'light'` \| `'dark'`                                         | `'light'`           |
| `panelExpand`            | Side panel expanded by default                     | `boolean`                                                     | `false`             |
| `controlSize`            | Default size of form controls                      | `'xs'` \| `'sm'` \| `'md'` \| `'lg'`                          | `'md'`              |
| `layout.type`            | Application layout style                           | `'blank'` \| `'collapsibleSide'` \| `'stackedSide'` \| `...` | `'collapsibleSide'` |
| `layout.sideNavCollapse` | Side navigation collapsed (for applicable layouts) | `boolean`                                                     | `false`             |

### State Persistence

Theme configuration is stored in cookies when changed using the `useTheme` hook. Initial values load from `theme.config.ts`.

### Clearing Theme Cache

If theme doesn't update after configuration changes:

```typescript
// Clear theme cookie
document.cookie = 'theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
// Then reload the page
window.location.reload();
```

---

## Build & Production

Deploy your application to production.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This creates an optimized build in the `.next` directory.

### Start Production Server

Test the production build locally:

```bash
npm run start
```

### Environment Variables

Ensure production environment variables are set:

```env
# Production .env
NEXT_PUBLIC_APP_URL=https://yourdomain.com
DATABASE_URL=your-production-database-url
BETTER_AUTH_SECRET=your-production-secret
# ... other production variables
```

### Deploying to Vercel

1. **Connect Repository**: Sign in to Vercel and import your Git repository

2. **Configure Build Settings**:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Add Environment Variables**: Add all required environment variables in Vercel dashboard

4. **Deploy**: Click Deploy and Vercel handles the rest

### Custom Hosting (VPS/Server)

#### Using Node.js

```bash
# Install dependencies
npm install

# Build
npm run build

# Start
npm run start
```

#### Using PM2

```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "ecme-app" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

#### Using Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:

```bash
docker build -t ecme-app .
docker run -p 3000:3000 ecme-app
```

### Performance Optimization

- Enable Next.js Image Optimization
- Use dynamic imports for code splitting
- Implement caching strategies
- Optimize fonts and assets
- Enable compression
- Use CDN for static assets

---

## Credits & Sources

### Core Dependencies

| Package      | License    | URL                                         |
| ------------ | ---------- | ------------------------------------------- |
| React        | MIT        | https://github.com/facebook/react           |
| Next.js      | MIT        | https://github.com/vercel/next.js           |
| TypeScript   | Apache-2.0 | https://github.com/microsoft/TypeScript     |
| Tailwind CSS | MIT        | https://github.com/tailwindlabs/tailwindcss |
| Better Auth  | MIT        | https://github.com/better-auth/better-auth  |
| Zustand      | MIT        | https://github.com/pmndrs/zustand           |

### UI & Components

| Package               | License    | URL                                        |
| --------------------- | ---------- | ------------------------------------------ |
| @floating-ui/react    | MIT        | https://github.com/floating-ui/floating-ui |
| @hello-pangea/dnd     | Apache-2.0 | https://github.com/hello-pangea/dnd        |
| @tanstack/react-table | MIT        | https://github.com/tanstack/table          |
| framer-motion         | MIT        | https://github.com/framer/motion           |
| react-icons           | MIT        | https://github.com/react-icons/react-icons |
| simplebar-react       | MIT        | https://github.com/grsmto/simplebar        |

### Forms & Validation

| Package             | License | URL                                                |
| ------------------- | ------- | -------------------------------------------------- |
| react-hook-form     | MIT     | https://github.com/react-hook-form/react-hook-form |
| @hookform/resolvers | MIT     | https://github.com/react-hook-form/resolvers       |
| zod                 | MIT     | https://github.com/colinhacks/zod                  |

### Data Fetching & API

| Package | License | URL                            |
| ------- | ------- | ------------------------------ |
| axios   | MIT     | https://github.com/axios/axios |
| swr     | MIT     | https://github.com/vercel/swr  |

### Internationalization

| Package   | License | URL                                 |
| --------- | ------- | ----------------------------------- |
| next-intl | MIT     | https://github.com/amannn/next-intl |

### Utilities

| Package        | License | URL                                       |
| -------------- | ------- | ----------------------------------------- |
| classnames     | MIT     | https://github.com/JedWatson/classnames   |
| dayjs          | MIT     | https://github.com/iamkun/dayjs           |
| lodash         | MIT     | https://github.com/lodash/lodash          |
| tailwind-merge | MIT     | https://github.com/dcastil/tailwind-merge |

### Charts & Visualization

| Package          | License | URL                                            |
| ---------------- | ------- | ---------------------------------------------- |
| react-apexcharts | MIT     | https://github.com/apexcharts/react-apexcharts |
| @visx/pattern    | MIT     | https://github.com/airbnb/visx                 |
| d3-scale         | ISC     | https://github.com/d3/d3-scale                 |

### Rich Text & Markdown

| Package        | License | URL                                        |
| -------------- | ------- | ------------------------------------------ |
| @tiptap/react  | MIT     | https://github.com/ueberdosis/tiptap       |
| react-markdown | MIT     | https://github.com/remarkjs/react-markdown |
| marked         | MIT     | https://github.com/markedjs/marked         |

### Development Tools

| Package      | License | URL                                     |
| ------------ | ------- | --------------------------------------- |
| autoprefixer | MIT     | https://github.com/postcss/autoprefixer |
| postcss      | MIT     | https://github.com/postcss/postcss      |
| prettier     | MIT     | https://github.com/prettier/prettier    |
| eslint       | MIT     | https://github.com/eslint/eslint        |

---

## Support & Resources

### Documentation

- Next.js: https://nextjs.org/docs
- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- BetterAuth: https://better-auth.com
- TypeScript: https://www.typescriptlang.org/docs

### Community

- GitHub Issues: Report bugs and request features
- Stack Overflow: Community Q&A

---

**Built with ❤️ using TypeScript, Next.js, and modern web technologies**

_Version 1.0.0 | Last Updated: 2025_
