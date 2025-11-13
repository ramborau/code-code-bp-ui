# Ecme - UI Documentation

> **Technology Stack**: TypeScript • Next.js • React • Tailwind CSS
> **Font**: Inter
> **Primary Color**: #00c307

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

---

## Introduction

Ecme is not just another web template—it's a meticulously crafted masterpiece that stands out in a market flooded with generic, poorly designed options. Every aspect of Ecme, from its elegant UI to its robust code architecture, has been thoughtfully designed to ensure unparalleled flexibility and scalability for your projects.

### Key Features

-   **Custom-Built UI Components**: Unlike other templates that rely on common open-source libraries, Ecme features a comprehensive suite of custom-built UI components with rich functionality
-   **Advanced Features**:
    -   Multi-language support
    -   Dark and light mode
    -   Right-to-left layout
    -   Theme color customization
    -   Six pre-designed layouts
-   **Real-World Application Examples**: Grounded in practical, ready-to-use solutions
-   **Greater Control**: Tailor every detail to meet your specific needs
-   **TypeScript First**: Built entirely with TypeScript for type safety and better developer experience

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

### Color Palette

**Primary Brand Color**: `#00c307` (Vibrant Green)

This vibrant green represents growth, innovation, and energy. It's used for:

-   Primary buttons and CTAs
-   Active states and selections
-   Links and interactive elements
-   Brand highlights and accents

```css
/* Primary color variables */
--primary: #00c307;
--primary-deep: #00a006; /* Darker shade for hover states */
--primary-mild: #1acd17; /* Lighter shade for backgrounds */
--primary-subtle: #00c3071a; /* 10% opacity for subtle backgrounds */
```

### Design Principles

-   **Consistency**: Uniform spacing, sizing, and styling across all components
-   **Accessibility**: WCAG 2.1 AA compliant color contrast ratios
-   **Responsiveness**: Mobile-first design approach
-   **Modern & Clean**: Minimalist aesthetic with purposeful whitespace
-   **Performance**: Optimized for fast load times and smooth interactions

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

-   **Node.js** (v18 or higher)
-   **npm** or **yarn** or **pnpm**

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

-   Autocomplete
-   Syntax highlighting
-   Linting based on your Tailwind configuration

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

-   `@apply` - Apply Tailwind utility classes
-   `@layer` - Organize CSS into layers
-   `theme()` - Access Tailwind theme values

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

-   **User**: `admin`
-   **Password**: `123Qwe`

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

#### ThemeConfig

**Location**: `src/configs/theme.config.ts`

```typescript
import { THEME_ENUM } from '@/constants/theme.constant';
import type { ThemeConfig } from '@/@types/theme';

export const themeConfig: ThemeConfig = {
	schema: 'default',
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

#### RoutesConfig

**Location**: `src/configs/routes.config/index.ts`

```typescript
import { ADMIN, USER } from '@/constants/roles';
import type { RouteConfig } from '@/@types/routes';

export const publicRoutes: Record<string, RouteConfig> = {
	'/home': {
		key: 'home',
		authority: [],
	},
};

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

export const authRoutes: Record<string, RouteConfig> = {
	'/sign-in': {
		key: 'signIn',
		authority: [],
	},
	'/sign-up': {
		key: 'signUp',
		authority: [],
	},
};
```

#### NavConfig

**Location**: `src/configs/navigation.config/index.ts`

```typescript
import { NAV_ITEM_TYPE_ITEM } from '@/constants/navigation.constant';
import type { NavigationTree } from '@/@types/navigation';

const navigationConfig: NavigationTree[] = [
	{
		key: 'home',
		path: '/home',
		title: 'Home',
		translateKey: 'nav.home',
		icon: 'home',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: [],
	},
];

export default navigationConfig;
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

-   **Public Variables**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. These should not include sensitive data.
-   **Private Variables**: Variables without the `NEXT_PUBLIC_` prefix are only available on the server side and are never exposed to the client.

### Accessing Environment Variables

#### Server-Side Access

Access private variables in server-side functions like API routes or Server Components:

```typescript
// app/api/users/route.ts
export async function GET() {
	const databaseUrl = process.env.DATABASE_URL;
	const apiKey = process.env.INTERNAL_API_KEY;

	// These variables are only available on the server
	return Response.json({ message: 'Connected to database' });
}
```

#### Client-Side Access

Access public variables in your React components:

```typescript
'use client';

import { useEffect } from 'react';

const MyComponent = () => {
	const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

	useEffect(() => {
		console.log('API Base URL:', apiBaseUrl);
	}, []);

	return <div>Check console for API URL</div>;
};

export default MyComponent;
```

### Environment-Specific Files

Create different environment files for different stages:

```
.env                # Default (used by all environments)
.env.local          # Local overrides (gitignored)
.env.development    # Development environment
.env.production     # Production environment
.env.test           # Test environment
```

**Load Priority**: `.env.local` > `.env.[environment]` > `.env`

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

### Key Components

#### Route Keys (Matchers)

Each key in the routes object serves as a route matcher:

-   `'/articles'` - matches a static route
-   `'/articles/[slug]'` - matches a dynamic route where `[slug]` is replaced with the actual value

#### Configuration Object Properties

| Property       | Description                                                | Type       |
| -------------- | ---------------------------------------------------------- | ---------- |
| `key`          | Identifier for the route that pairs with navigation config | `string`   |
| `authority`    | Array of roles allowed to access the route                 | `string[]` |
| `meta`         | Metadata for additional customization                      | `object`   |
| `dynamicRoute` | Flag indicating if the route is dynamic                    | `boolean`  |

### Authority (Role-Based Access Control)

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

| Property             | Description                 | Type                                                                                                                | Default     |
| -------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| `pageContainerType`  | View container type         | `'default'` \| `'gutterless'` \| `'contained'`                                                                      | `'default'` |
| `pageBackgroundType` | Page background type        | `'default'` \| `'plain'`                                                                                            | -           |
| `header`             | Page header configuration   | `object`                                                                                                            | -           |
| `header.title`       | Page title                  | `string` \| `ReactNode` \| `LazyExoticComponent`                                                                    | -           |
| `header.description` | Page description            | `string` \| `ReactNode`                                                                                             | -           |
| `header.contained`   | Whether header is contained | `boolean`                                                                                                           | -           |
| `header.extraHeader` | Additional header component | `ReactNode` \| `LazyExoticComponent`                                                                                | -           |
| `footer`             | Show/hide footer            | `boolean`                                                                                                           | `true`      |
| `layout`             | Override current layout     | `'blank'` \| `'collapsibleSide'` \| `'stackedSide'` \| `'topBarClassic'` \| `'framelessSide'` \| `'contentOverlay'` | -           |

---

## Creating New Pages

This guide walks you through creating a new page in the template.

### Step 1: Create the Page Component

#### Navigate to the Appropriate Directory

-   **Protected pages** (require authentication): `src/app/(protected-pages)`
-   **Public pages**: `src/app/(public-pages)`
-   **Auth pages**: `src/app/(auth-pages)`

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

### Step 2: Add Routing Configuration

Update `src/configs/routes.config/index.ts`:

```typescript
import { ADMIN, USER } from '@/constants/roles';

export const protectedRoutes: Record<string, RouteConfig> = {
	// ... existing routes
	'/new-page': {
		key: 'newPage',
		authority: [ADMIN, USER],
		meta: {
			pageContainerType: 'contained',
			header: {
				title: 'New Page',
				description: 'Welcome to the new page',
			},
		},
	},
};
```

### Step 3: Add to Navigation (Optional)

If you want the page to appear in the navigation menu, update `src/configs/navigation.config/index.ts`:

```typescript
const navigationConfig: NavigationTree[] = [
	// ... existing nav items
	{
		key: 'newPage',
		path: '/new-page',
		title: 'New Page',
		translateKey: 'nav.newPage',
		icon: 'newPage',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [ADMIN, USER],
		subMenu: [],
	},
];
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

Next.js provides a built-in API routing system for defining backend functionality directly within your application.

### Creating API Routes

Create a file at `src/app/api/hello/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const data = { message: 'Hello from API' };
		return NextResponse.json(data);
	} catch (error: any) {
		return NextResponse.json({ error: 'Failed to fetch data', details: error.message }, { status: 500 });
	}
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Process the data
		console.log('Received data:', body);

		return NextResponse.json({
			message: 'Data saved successfully',
			data: body,
		});
	} catch (error: any) {
		return NextResponse.json({ error: 'Failed to save data', details: error.message }, { status: 500 });
	}
}
```

### API Service Layer

To simplify client-side API calls, use the `ApiService` utility.

#### Create a Service File

`src/services/UserService.ts`:

```typescript
import ApiService from './ApiService';

export type User = {
	id: string;
	name: string;
	email: string;
};

export type CreateUserRequest = {
	name: string;
	email: string;
	password: string;
};

export type CreateUserResponse = {
	user: User;
	message: string;
};

export async function createUser(data: CreateUserRequest) {
	return ApiService.fetchData<CreateUserResponse, CreateUserRequest>({
		url: '/api/users',
		method: 'post',
		data,
	});
}

export async function getUser(userId: string) {
	return ApiService.fetchData<{ user: User }>({
		url: `/api/users/${userId}`,
		method: 'get',
	});
}

export async function updateUser(userId: string, data: Partial<User>) {
	return ApiService.fetchData<{ user: User }, Partial<User>>({
		url: `/api/users/${userId}`,
		method: 'put',
		data,
	});
}
```

#### Use in Component

```typescript
'use client';

import { useState, useEffect } from 'react';
import { createUser, getUser } from '@/services/UserService';
import type { CreateUserRequest } from '@/services/UserService';

const UserManagement = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleCreateUser = async () => {
		setLoading(true);
		setError(null);

		const newUser: CreateUserRequest = {
			name: 'John Doe',
			email: 'john@example.com',
			password: 'secure123',
		};

		try {
			const response = await createUser(newUser);
			if (response.data) {
				console.log('User created:', response.data.user);
			}
		} catch (err: any) {
			setError(err.message || 'Failed to create user');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<button onClick={handleCreateUser} disabled={loading}>
				{loading ? 'Creating...' : 'Create User'}
			</button>
			{error && <p className="text-red-500">{error}</p>}
		</div>
	);
};

export default UserManagement;
```

### Advanced API Patterns

#### With Query Parameters

```typescript
export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const page = searchParams.get('page') || '1';
	const limit = searchParams.get('limit') || '10';
	const filter = searchParams.get('filter');

	// Use query parameters in your logic
	const results = await fetchDataWithPagination(parseInt(page), parseInt(limit), filter);

	return NextResponse.json(results);
}
```

#### With Dynamic Routes

```typescript
// app/api/users/[id]/route.ts
type RouteContext = {
	params: { id: string };
};

export async function GET(request: NextRequest, { params }: RouteContext) {
	const userId = params.id;

	// Fetch user by ID
	const user = await getUserById(userId);

	if (!user) {
		return NextResponse.json({ error: 'User not found' }, { status: 404 });
	}

	return NextResponse.json({ user });
}

export async function DELETE(request: NextRequest, { params }: RouteContext) {
	const userId = params.id;

	await deleteUser(userId);

	return NextResponse.json({ message: 'User deleted successfully' });
}
```

#### Protected API Routes

```typescript
import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	// Check authentication
	const session = await auth.api.getSession({
		headers: request.headers,
	});

	if (!session) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}

	// Check authorization
	if (!session.user.role || session.user.role !== 'admin') {
		return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
	}

	// Protected logic here
	const data = await getProtectedData();

	return NextResponse.json(data);
}
```

### Using TanStack Query (React Query)

For advanced data fetching, consider using TanStack Query:

```typescript
'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUser, createUser } from '@/services/UserService';

const UserProfile = ({ userId }: { userId: string }) => {
	const queryClient = useQueryClient();

	// Fetch user data
	const { data, isLoading, error } = useQuery({
		queryKey: ['user', userId],
		queryFn: () => getUser(userId),
	});

	// Create user mutation
	const createMutation = useMutation({
		mutationFn: createUser,
		onSuccess: () => {
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: ['users'] });
		},
	});

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div>
			<h1>{data?.data.user.name}</h1>
			<p>{data?.data.user.email}</p>
		</div>
	);
};

export default UserProfile;
```

---

## Authentication (BetterAuth)

Ecme uses **BetterAuth** as the authentication solution, offering a modern, type-safe, and flexible way to handle user authentication.

### Why BetterAuth?

-   **Type-Safe**: Built with TypeScript from the ground up
-   **Modern Architecture**: Clean API design with minimal boilerplate
-   **Flexible**: Easy to extend and customize
-   **Performance**: Lightweight and fast
-   **Developer Experience**: Excellent DX with autocomplete and type inference

### Installation

```bash
npm install better-auth
```

### Environment Variables

Add the following to your `.env` file:

```env
# Database URL
DATABASE_URL=postgresql://user:password@localhost:5432/ecme_db

# Authentication Secret (generate with: openssl rand -base64 32)
BETTER_AUTH_SECRET=your-secret-key-here

# App URL
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000

# OAuth Provider (Google)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-secret

# OAuth Provider (Github)
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-secret
```

### Configuration

#### Initialize BetterAuth

Create `src/lib/auth.ts`:

```typescript
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from '@/lib/prisma';

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: 'postgresql', // or "mysql", "sqlite"
	}),
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: false,
	},
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
	},
	session: {
		expiresIn: 60 * 60 * 24 * 7, // 7 days
		updateAge: 60 * 60 * 24, // 1 day
	},
	user: {
		additionalFields: {
			role: {
				type: 'string',
				required: false,
				defaultValue: 'user',
			},
		},
	},
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.User;
```

#### API Route Handler

Create `src/app/api/auth/[...all]/route.ts`:

```typescript
import { auth } from '@/lib/auth';
import { toNextJsHandler } from 'better-auth/next-js';

export const { GET, POST } = toNextJsHandler(auth);
```

### Client-Side Setup

Create `src/lib/auth-client.ts`:

```typescript
import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
	baseURL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
});

export const { signIn, signUp, signOut, useSession } = authClient;
```

### Authentication Implementation

#### Sign Up Form

```typescript
'use client';

import { useState } from 'react';
import { signUp } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const SignUpForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setLoading(true);

		try {
			await signUp.email({
				email: formData.email,
				password: formData.password,
				name: formData.name,
			});
			router.push('/dashboard');
		} catch (err: any) {
			setError(err.message || 'Failed to sign up');
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<Input
				type="text"
				value={formData.name}
				onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				placeholder="Full Name"
				required
			/>
			<Input
				type="email"
				value={formData.email}
				onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				placeholder="Email"
				required
			/>
			<Input
				type="password"
				value={formData.password}
				onChange={(e) => setFormData({ ...formData, password: e.target.value })}
				placeholder="Password"
				required
				minLength={8}
			/>
			{error && <p className="text-red-500 text-sm">{error}</p>}
			<Button type="submit" disabled={loading} className="w-full">
				{loading ? 'Creating Account...' : 'Sign Up'}
			</Button>
		</form>
	);
};

export default SignUpForm;
```

#### Sign In Form

```typescript
'use client';

import { useState } from 'react';
import { signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const SignInForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setLoading(true);

		try {
			await signIn.email({
				email: formData.email,
				password: formData.password,
			});
			router.push('/dashboard');
		} catch (err: any) {
			setError(err.message || 'Invalid credentials');
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<Input
				type="email"
				value={formData.email}
				onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				placeholder="Email"
				required
			/>
			<Input
				type="password"
				value={formData.password}
				onChange={(e) => setFormData({ ...formData, password: e.target.value })}
				placeholder="Password"
				required
			/>
			{error && <p className="text-red-500 text-sm">{error}</p>}
			<Button type="submit" disabled={loading} className="w-full">
				{loading ? 'Signing In...' : 'Sign In'}
			</Button>
		</form>
	);
};

export default SignInForm;
```

#### OAuth Sign In

```typescript
'use client';

import { signIn } from '@/lib/auth-client';
import Button from '@/components/ui/Button';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const OAuthButtons = () => {
	const handleGoogleSignIn = async () => {
		await signIn.social({
			provider: 'google',
			callbackURL: '/dashboard',
		});
	};

	const handleGithubSignIn = async () => {
		await signIn.social({
			provider: 'github',
			callbackURL: '/dashboard',
		});
	};

	return (
		<div className="flex flex-col gap-3">
			<Button
				onClick={handleGoogleSignIn}
				variant="outline"
				className="w-full flex items-center justify-center gap-2"
			>
				<FaGoogle />
				Sign in with Google
			</Button>
			<Button
				onClick={handleGithubSignIn}
				variant="outline"
				className="w-full flex items-center justify-center gap-2"
			>
				<FaGithub />
				Sign in with GitHub
			</Button>
		</div>
	);
};

export default OAuthButtons;
```

#### Sign Out

```typescript
'use client';

import { signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

const SignOutButton = () => {
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut();
		router.push('/sign-in');
	};

	return (
		<Button onClick={handleSignOut} variant="outline">
			Sign Out
		</Button>
	);
};

export default SignOutButton;
```

### Accessing Sessions

#### Client Side

```typescript
'use client';

import { useSession } from '@/lib/auth-client';
import { Skeleton } from '@/components/ui/Skeleton';

const ProfileComponent = () => {
	const { data: session, isPending, error } = useSession();

	if (isPending) {
		return (
			<div className="space-y-2">
				<Skeleton className="h-8 w-48" />
				<Skeleton className="h-4 w-64" />
			</div>
		);
	}

	if (error) {
		return <div className="text-red-500">Error loading session</div>;
	}

	if (!session) {
		return <div>Not authenticated</div>;
	}

	return (
		<div>
			<h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
			<p className="text-gray-600">{session.user.email}</p>
			<p className="text-sm text-gray-500">Role: {session.user.role}</p>
		</div>
	);
};

export default ProfileComponent;
```

#### Server Side

```typescript
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		redirect('/sign-in');
	}

	return (
		<div>
			<h1>Protected Page</h1>
			<p>Welcome, {session.user.name}!</p>
			<p>Your email: {session.user.email}</p>
			<p>Your role: {session.user.role}</p>
		</div>
	);
}
```

### Middleware Protection

Protect routes using Next.js middleware at `src/middleware.ts`:

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/auth';

export async function middleware(request: NextRequest) {
	const session = await auth.api.getSession({
		headers: request.headers,
	});

	const { pathname } = request.nextUrl;

	// Protected routes
	if (pathname.startsWith('/dashboard') || pathname.startsWith('/admin')) {
		if (!session) {
			return NextResponse.redirect(new URL('/sign-in', request.url));
		}

		// Admin-only routes
		if (pathname.startsWith('/admin') && session.user.role !== 'admin') {
			return NextResponse.redirect(new URL('/dashboard', request.url));
		}
	}

	// Redirect authenticated users away from auth pages
	if (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up')) {
		if (session) {
			return NextResponse.redirect(new URL('/dashboard', request.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/dashboard/:path*', '/admin/:path*', '/sign-in', '/sign-up'],
};
```

### Role-Based Access Control

```typescript
// Define user roles
export type UserRole = 'admin' | 'user' | 'moderator';

// Check roles in components
('use client');

import { useSession } from '@/lib/auth-client';

const AdminOnlyComponent = () => {
	const { data: session } = useSession();

	if (session?.user.role !== 'admin') {
		return <div className="text-red-500">Access Denied: Admin Only</div>;
	}

	return (
		<div>
			<h2>Admin Panel</h2>
			{/* Admin content */}
		</div>
	);
};

export default AdminOnlyComponent;
```

### Password Reset

```typescript
'use client';

import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const ForgotPasswordForm = () => {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		try {
			await authClient.forgetPassword({
				email,
				redirectTo: '/reset-password',
			});
			setSuccess(true);
		} catch (err: any) {
			setError(err.message || 'Failed to send reset email');
		} finally {
			setLoading(false);
		}
	};

	if (success) {
		return (
			<div className="text-center">
				<p className="text-green-600">Check your email for password reset instructions</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<Input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Enter your email"
				required
			/>
			{error && <p className="text-red-500 text-sm">{error}</p>}
			<Button type="submit" disabled={loading} className="w-full">
				{loading ? 'Sending...' : 'Reset Password'}
			</Button>
		</form>
	);
};

export default ForgotPasswordForm;
```

### Email Verification

Enable email verification in your configuration:

```typescript
// src/lib/auth.ts
export const auth = betterAuth({
	// ... other config
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
		sendVerificationEmail: async ({ user, url }) => {
			// Send email with verification link
			await sendEmail({
				to: user.email,
				subject: 'Verify your email',
				html: `
                    <h1>Welcome to Ecme!</h1>
                    <p>Click the link below to verify your email:</p>
                    <a href="${url}">Verify Email</a>
                `,
			});
		},
	},
});
```

### Advanced Configuration

#### Custom Session Duration

```typescript
export const auth = betterAuth({
	session: {
		expiresIn: 60 * 60 * 24 * 30, // 30 days
		updateAge: 60 * 60 * 24 * 7, // Update session every 7 days
		cookieCache: {
			enabled: true,
			maxAge: 60 * 5, // 5 minutes
		},
	},
});
```

#### Two-Factor Authentication

```typescript
import { twoFactor } from 'better-auth/plugins';

export const auth = betterAuth({
	// ... other config
	plugins: [
		twoFactor({
			issuer: 'Ecme App',
		}),
	],
});
```

---

## State Management

Ecme integrates **Zustand** for client-side state management. Zustand is a small, fast, and scalable state management solution with excellent TypeScript support.

### Creating a Zustand Store

```typescript
// src/store/slices/counterSlice.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type CounterState = {
	count: number;
};

type CounterActions = {
	increment: () => void;
	decrement: () => void;
	reset: () => void;
	setCount: (count: number) => void;
};

type CounterStore = CounterState & CounterActions;

export const useCounterStore = create<CounterStore>()(
	devtools(
		persist(
			(set) => ({
				// Initial state
				count: 0,

				// Actions
				increment: () => set((state) => ({ count: state.count + 1 })),
				decrement: () => set((state) => ({ count: state.count - 1 })),
				reset: () => set({ count: 0 }),
				setCount: (count) => set({ count }),
			}),
			{
				name: 'counter-storage', // persist to localStorage
			}
		)
	)
);
```

### Using the Store

```typescript
'use client';

import { useCounterStore } from '@/store/slices/counterSlice';
import Button from '@/components/ui/Button';

const CounterComponent = () => {
	const { count, increment, decrement, reset } = useCounterStore();

	return (
		<div className="flex flex-col items-center gap-4">
			<h2 className="text-2xl font-bold">Counter: {count}</h2>
			<div className="flex gap-2">
				<Button onClick={decrement}>Decrease</Button>
				<Button onClick={reset} variant="outline">
					Reset
				</Button>
				<Button onClick={increment}>Increase</Button>
			</div>
		</div>
	);
};

export default CounterComponent;
```

### Complex Store Example

```typescript
// src/store/slices/userSlice.ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type User = {
	id: string;
	name: string;
	email: string;
	role: 'admin' | 'user';
};

type UserState = {
	users: User[];
	selectedUser: User | null;
	loading: boolean;
	error: string | null;
};

type UserActions = {
	setUsers: (users: User[]) => void;
	addUser: (user: User) => void;
	removeUser: (userId: string) => void;
	selectUser: (userId: string) => void;
	clearSelectedUser: () => void;
	setLoading: (loading: boolean) => void;
	setError: (error: string | null) => void;
};

type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>()(
	devtools((set, get) => ({
		// State
		users: [],
		selectedUser: null,
		loading: false,
		error: null,

		// Actions
		setUsers: (users) => set({ users }),

		addUser: (user) =>
			set((state) => ({
				users: [...state.users, user],
			})),

		removeUser: (userId) =>
			set((state) => ({
				users: state.users.filter((u) => u.id !== userId),
			})),

		selectUser: (userId) => {
			const user = get().users.find((u) => u.id === userId);
			set({ selectedUser: user || null });
		},

		clearSelectedUser: () => set({ selectedUser: null }),

		setLoading: (loading) => set({ loading }),

		setError: (error) => set({ error }),
	}))
);
```

### Selectors for Performance

```typescript
'use client';

import { useUserStore } from '@/store/slices/userSlice';

const UserList = () => {
	// Only re-render when users change
	const users = useUserStore((state) => state.users);
	const addUser = useUserStore((state) => state.addUser);

	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
	);
};

export default UserList;
```

### Combined Store

```typescript
// src/store/index.ts
import { create } from 'zustand';
import { useCounterStore } from './slices/counterSlice';
import { useUserStore } from './slices/userSlice';
import { useThemeStore } from './slices/themeSlice';

// Re-export individual stores
export { useCounterStore, useUserStore, useThemeStore };

// Or create a combined store
type RootStore = ReturnType<typeof useCounterStore.getState> &
	ReturnType<typeof useUserStore.getState> &
	ReturnType<typeof useThemeStore.getState>;

export const useRootStore = create<RootStore>()((set, get) => ({
	...useCounterStore.getState(),
	...useUserStore.getState(),
	...useThemeStore.getState(),
}));
```

---

## App Configuration

Configure various static app settings in `src/configs/app.config.ts`.

### Demo Configuration

```typescript
import type { AppConfig } from '@/@types/config';

const appConfig: AppConfig = {
	apiPrefix: '/api',
	authenticatedEntryPath: '/dashboards/ecommerce',
	unAuthenticatedEntryPath: '/sign-in',
	locale: 'en',
	activeNavTranslation: true,
};

export default appConfig;
```

### Starter Configuration

```typescript
import type { AppConfig } from '@/@types/config';

const appConfig: AppConfig = {
	apiPrefix: '/api',
	authenticatedEntryPath: '/home',
	unAuthenticatedEntryPath: '/sign-in',
	locale: 'en',
	activeNavTranslation: false,
};

export default appConfig;
```

### Configuration Properties

| Property                   | Description                                   | Type      | Default (Demo)            | Default (Starter) |
| -------------------------- | --------------------------------------------- | --------- | ------------------------- | ----------------- |
| `apiPrefix`                | The base path for all API requests            | `string`  | `'/api'`                  | `'/api'`          |
| `authenticatedEntryPath`   | Redirect path after successful authentication | `string`  | `'/dashboards/ecommerce'` | `'/home'`         |
| `unAuthenticatedEntryPath` | Redirect path for unauthenticated users       | `string`  | `'/sign-in'`              | `'/sign-in'`      |
| `locale`                   | Default language/locale                       | `string`  | `'en'`                    | `'en'`            |
| `activeNavTranslation`     | Enable/disable navigation translation         | `boolean` | `true`                    | `false`           |

### Type Definition

```typescript
// src/@types/config.ts
export type AppConfig = {
	apiPrefix: string;
	authenticatedEntryPath: string;
	unAuthenticatedEntryPath: string;
	locale: string;
	activeNavTranslation: boolean;
};
```

---

## Layouts

Ecme provides **6 post-login layouts** and **3 auth layouts**.

### Post-Login Layouts

1. **Collapsible Side** - `'collapsibleSide'`
2. **Stacked Side** - `'stackedSide'`
3. **Top Bar Classic** - `'topBarClassic'`
4. **Frameless Side** - `'framelessSide'`
5. **Content Overlay** - `'contentOverlay'`
6. **Blank** - `'blank'`

### Configuring Layout

Configure the layout in `src/configs/theme.config.ts`:

```typescript
import { THEME_ENUM } from '@/constants/theme.constant';
import type { ThemeConfig } from '@/@types/theme';

export const themeConfig: ThemeConfig = {
	// ... other config
	layout: {
		type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE, // or 'collapsibleSide'
		sideNavCollapse: false,
	},
};
```

#### Available Layout Properties

| Property          | Description                                                                                    | Type                                                                                                                | Default             |
| ----------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `type`            | Type of application layout                                                                     | `'blank'` \| `'collapsibleSide'` \| `'stackedSide'` \| `'topBarClassic'` \| `'framelessSide'` \| `'contentOverlay'` | `'collapsibleSide'` |
| `sideNavCollapse` | Whether side navigation is collapsed (applicable to `'collapsibleSide'` and `'framelessSide'`) | `boolean`                                                                                                           | `false`             |

### Overriding Layout Per Route

Override the layout for specific routes in the route configuration:

```typescript
// src/configs/routes.config/index.ts
export const protectedRoutes: Record<string, RouteConfig> = {
	'/full-screen-page': {
		key: 'fullScreenPage',
		authority: [ADMIN, USER],
		meta: {
			layout: 'blank', // Override with blank layout
		},
	},
	'/dashboard': {
		key: 'dashboard',
		authority: [ADMIN, USER],
		meta: {
			layout: 'topBarClassic', // Override with top bar layout
		},
	},
};
```

### Auth Layouts

Configure auth layout in `src/app/(auth-pages)/layout.tsx`:

```typescript
import { ReactNode } from 'react';
import Side from '@/components/layouts/AuthLayout/Side';
import Simple from '@/components/layouts/AuthLayout/Simple';
import Split from '@/components/layouts/AuthLayout/Split';

type LayoutProps = {
	children: ReactNode;
};

const AuthLayout = ({ children }: LayoutProps) => {
	return (
		<div className="flex flex-auto flex-col h-[100vh]">
			{/* Choose your auth layout */}
			<Simple>{children}</Simple>

			{/* Or use Side layout */}
			{/* <Side>{children}</Side> */}

			{/* Or use Split layout */}
			{/* <Split>{children}</Split> */}
		</div>
	);
};

export default AuthLayout;
```

---

## Navigation Configuration

Navigation structure is defined as an array of objects in `src/configs/navigation.config/index.ts`.

### Type Definition

```typescript
export type HorizontalMenuMeta =
	| { layout: 'default' }
	| {
			layout: 'columns';
			showColumnTitle?: boolean;
			columns: 1 | 2 | 3 | 4 | 5;
	  }
	| {
			layout: 'tabs';
			columns: 1 | 2 | 3 | 4 | 5;
	  };

export type NavigationTree = {
	key: string;
	path: string;
	isExternalLink?: boolean;
	title: string;
	translateKey: string;
	icon: string;
	type: 'title' | 'collapse' | 'item';
	authority: string[];
	subMenu: NavigationTree[];
	description?: string;
	meta?: {
		horizontalMenu?: HorizontalMenuMeta;
		description?: {
			translateKey: string;
			label: string;
		};
	};
};
```

### Navigation Properties

| Property         | Description                                            | Type                                  |
| ---------------- | ------------------------------------------------------ | ------------------------------------- |
| `key`            | Identifier matching route for highlighting             | `string`                              |
| `path`           | URL path                                               | `string`                              |
| `isExternalLink` | Open in new tab                                        | `boolean`                             |
| `title`          | Rendered text                                          | `string`                              |
| `translateKey`   | i18n translation key                                   | `string`                              |
| `icon`           | Icon identifier (matches `navigation-icon.config.tsx`) | `string`                              |
| `type`           | Menu item type                                         | `'title'` \| `'collapse'` \| `'item'` |
| `authority`      | Authorized user roles                                  | `string[]`                            |
| `subMenu`        | Child menu items                                       | `NavigationTree[]`                    |
| `meta`           | Additional configuration                               | `object`                              |

### Example Configuration

```typescript
// src/configs/navigation.config/index.ts
import { NAV_ITEM_TYPE_TITLE, NAV_ITEM_TYPE_COLLAPSE, NAV_ITEM_TYPE_ITEM } from '@/constants/navigation.constant';
import type { NavigationTree } from '@/@types/navigation';

const navigationConfig: NavigationTree[] = [
	{
		key: 'home',
		path: '/home',
		title: 'Home',
		translateKey: 'nav.home',
		icon: 'home',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
		subMenu: [],
	},
	{
		key: 'apps',
		path: '',
		title: 'Apps',
		translateKey: 'nav.apps',
		icon: 'apps',
		type: NAV_ITEM_TYPE_TITLE,
		authority: ['admin', 'user'],
		subMenu: [
			{
				key: 'apps.crm',
				path: '/apps/crm',
				title: 'CRM',
				translateKey: 'nav.appsCrm',
				icon: 'crm',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: ['admin', 'user'],
				subMenu: [
					{
						key: 'apps.crm.dashboard',
						path: '/apps/crm/dashboard',
						title: 'Dashboard',
						translateKey: 'nav.appsCrmDashboard',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: ['admin', 'user'],
						subMenu: [],
					},
					{
						key: 'apps.crm.customers',
						path: '/apps/crm/customers',
						title: 'Customers',
						translateKey: 'nav.appsCrmCustomers',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: ['admin', 'user'],
						subMenu: [],
					},
				],
			},
		],
	},
	{
		key: 'settings',
		path: '/settings',
		title: 'Settings',
		translateKey: 'nav.settings',
		icon: 'settings',
		type: NAV_ITEM_TYPE_ITEM,
		authority: ['admin'],
		subMenu: [],
	},
];

export default navigationConfig;
```

### Configuring Navigation Icons

Configure icons in `src/configs/navigation-icon.config.tsx`:

```typescript
import { HiHome, HiCog, HiUsers, HiChartBar, HiShoppingCart } from 'react-icons/hi';
import type { ReactNode } from 'react';

const navigationIcon: Record<string, ReactNode> = {
	home: <HiHome />,
	settings: <HiCog />,
	users: <HiUsers />,
	dashboard: <HiChartBar />,
	crm: <HiShoppingCart />,
	apps: <HiChartBar />,
};

export default navigationIcon;
```

To add a new icon:

1. Import the icon from react-icons
2. Add it to the navigationIcon object with a key
3. Use that key in the navigation config

```typescript
// 1. Import
import { HiMail } from 'react-icons/hi'

// 2. Add to config
const navigationIcon: Record<string, ReactNode> = {
    // ... existing icons
    messages: <HiMail />,
}

// 3. Use in navigation
{
    key: 'messages',
    path: '/messages',
    title: 'Messages',
    translateKey: 'nav.messages',
    icon: 'messages', // Match the key
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
    subMenu: []
}
```

---

## Theming

We manage the theme color scheme using CSS variables, making it easy to customize with our brand colors.

### Default Theme Setup

Located at `src/assets/styles/tailwind/index.css`:

```css
:root {
	--neutral: #ffffff;

	/* Primary Color - Brand Green #00c307 */
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

	/* Gray Scale */
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
	--neutral: #ffffff;

	/* Primary Color stays the same in dark mode */
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

	/* Dark mode gray scale */
	--gray-50: #0a0a0a;
	--gray-100: #171717;
	--gray-200: #262626;
	--gray-300: #404040;
	--gray-400: #525252;
	--gray-500: #737373;
	--gray-600: #a3a3a3;
	--gray-700: #d4d4d4;
	--gray-800: #e5e5e5;
	--gray-900: #f5f5f5;
	--gray-950: #fafafa;
}
```

### Tailwind Configuration

Extend Tailwind to use CSS variables in `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

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
					subtle: 'var(--primary-subtle)',
				},
				error: {
					DEFAULT: 'var(--error)',
					subtle: 'var(--error-subtle)',
				},
				success: {
					DEFAULT: 'var(--success)',
					subtle: 'var(--success-subtle)',
				},
				info: {
					DEFAULT: 'var(--info)',
					subtle: 'var(--info-subtle)',
				},
				warning: {
					DEFAULT: 'var(--warning)',
					subtle: 'var(--warning-subtle)',
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
					950: 'var(--gray-950)',
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

export default config;
```

### Using Colors in Components

```typescript
// Using Tailwind classes
<button className="bg-primary text-white hover:bg-primary-deep">
    Click Me
</button>

<div className="bg-primary-subtle border border-primary">
    Success Message
</div>

// Using CSS variables directly
<div style={{ backgroundColor: 'var(--primary)' }}>
    Custom Styled Element
</div>
```

### Dynamic Theme Switching

#### Theme Configuration

`src/configs/preset-theme-schema.config.ts`:

```typescript
export type Variables = 'primary' | 'primaryDeep' | 'primaryMild' | 'primarySubtle' | 'neutral';

export type ThemeVariables = Record<'light' | 'dark', Record<Variables, string>>;

/** Default theme - Brand Green */
const defaultTheme: ThemeVariables = {
	light: {
		primary: '#00c307',
		primaryDeep: '#00a006',
		primaryMild: '#1acd17',
		primarySubtle: '#00c3071a',
		neutral: '#ffffff',
	},
	dark: {
		primary: '#00c307',
		primaryDeep: '#00a006',
		primaryMild: '#1acd17',
		primarySubtle: '#00c3071a',
		neutral: '#ffffff',
	},
};

/** Alternative Blue theme */
const blueTheme: ThemeVariables = {
	light: {
		primary: '#2a85ff',
		primaryDeep: '#0069f6',
		primaryMild: '#4996ff',
		primarySubtle: '#2a85ff1a',
		neutral: '#ffffff',
	},
	dark: {
		primary: '#2a85ff',
		primaryDeep: '#0069f6',
		primaryMild: '#4996ff',
		primarySubtle: '#2a85ff1a',
		neutral: '#ffffff',
	},
};

/** Alternative Purple theme */
const purpleTheme: ThemeVariables = {
	light: {
		primary: '#7c3aed',
		primaryDeep: '#5b21b6',
		primaryMild: '#9333ea',
		primarySubtle: '#7c3aed1a',
		neutral: '#ffffff',
	},
	dark: {
		primary: '#7c3aed',
		primaryDeep: '#5b21b6',
		primaryMild: '#9333ea',
		primarySubtle: '#7c3aed1a',
		neutral: '#ffffff',
	},
};

const presetThemeSchemaConfig: Record<string, ThemeVariables> = {
	default: defaultTheme,
	blue: blueTheme,
	purple: purpleTheme,
};

export default presetThemeSchemaConfig;
```

#### Theme Switcher Component

```typescript
'use client';

import classNames from '@/utils/classNames';
import { TbCheck } from 'react-icons/tb';
import presetThemeSchemaConfig from '@/configs/preset-theme-schema.config';
import useTheme from '@/utils/hooks/useTheme';

const ThemeSwitcher = () => {
	const schema = useTheme((state) => state.themeSchema);
	const setSchema = useTheme((state) => state.setSchema);
	const mode = useTheme((state) => state.mode);

	return (
		<div className="flex items-center gap-2">
			<span className="text-sm font-medium">Theme:</span>
			<div className="inline-flex items-center gap-2">
				{Object.entries(presetThemeSchemaConfig).map(([key, value]) => (
					<button
						key={key}
						className={classNames(
							'h-8 w-8 rounded-full flex items-center justify-center',
							'border-2 border-white shadow-sm',
							'transition-all duration-200',
							schema === key && 'ring-2 ring-primary ring-offset-2'
						)}
						style={{ backgroundColor: value[mode].primary || '' }}
						onClick={() => setSchema(key)}
						title={`${key.charAt(0).toUpperCase() + key.slice(1)} theme`}
					>
						{schema === key && <TbCheck className="text-neutral text-lg" />}
					</button>
				))}
			</div>
		</div>
	);
};

export default ThemeSwitcher;
```

---

## Internationalization

Our template uses **next-intl** for i18n support. The starter does not include i18n by default, but you can easily add it.

### Setup Without i18n Routing

This simpler setup doesn't affect URL structure.

#### 1. Add Translation Files

Create translation files in the `messages/` folder:

```json
// messages/en.json
{
	"nav": {
		"home": "Home",
		"dashboard": "Dashboard",
		"settings": "Settings"
	},
	"common": {
		"welcome": "Welcome",
		"signIn": "Sign In",
		"signOut": "Sign Out"
	}
}
```

```json
// messages/es.json
{
	"nav": {
		"home": "Inicio",
		"dashboard": "Tablero",
		"settings": "Configuración"
	},
	"common": {
		"welcome": "Bienvenido",
		"signIn": "Iniciar Sesión",
		"signOut": "Cerrar Sesión"
	}
}
```

#### 2. Wrap App with LocaleProvider

```typescript
// src/app/layout.tsx
import LocaleProvider from '@/components/template/LocaleProvider';
import { getLocale, getMessages } from 'next-intl/server';
import type { ReactNode } from 'react';

export default async function RootLayout({ children }: { children: ReactNode }) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body suppressHydrationWarning>
				<LocaleProvider locale={locale} messages={messages}>
					{children}
				</LocaleProvider>
			</body>
		</html>
	);
}
```

#### 3. Use Translations

```typescript
'use client';

import { useTranslations } from 'next-intl';

const HomePage = () => {
	const t = useTranslations('common');

	return (
		<div>
			<h1>{t('welcome')}</h1>
			<button>{t('signIn')}</button>
		</div>
	);
};

export default HomePage;
```

### Changing Language

```typescript
'use client';

import { setLocale } from '@/server/actions/locale';
import Button from '@/components/ui/Button';

const LanguageSwitcher = () => {
	const handleUpdateLocale = async (locale: string) => {
		await setLocale(locale);
	};

	return (
		<div className="flex gap-2">
			<Button onClick={() => handleUpdateLocale('en')}>English</Button>
			<Button onClick={() => handleUpdateLocale('es')}>Español</Button>
			<Button onClick={() => handleUpdateLocale('fr')}>Français</Button>
		</div>
	);
};

export default LanguageSwitcher;
```

### Server Action for Locale

```typescript
// src/server/actions/locale.ts
'use server';

import { cookies } from 'next/headers';

export async function setLocale(locale: string) {
	const cookieStore = await cookies();
	cookieStore.set('NEXT_LOCALE', locale);
}
```

### Setting Default Language

Update `src/configs/app.config.ts`:

```typescript
export const appConfig: AppConfig = {
	// ... other config
	locale: 'en', // Change to 'es', 'fr', etc.
};
```

### Enable Navigation Translation

To have translations in navigation, toggle the `activeNavTranslation` field:

```typescript
// src/configs/app.config.ts
export const appConfig: AppConfig = {
	// ... other config
	activeNavTranslation: true,
};
```

### Adding New Locale

1. Create translation file: `messages/fr.json`
2. Register in date locales: `src/i18n/dateLocales.ts`

```typescript
export const dateLocales: {
	[key: string]: () => Promise<ILocale>;
} = {
	en: () => import('dayjs/locale/en'),
	es: () => import('dayjs/locale/es'),
	fr: () => import('dayjs/locale/fr'),
};
```

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

### Alternative: Button Toggle

```typescript
'use client';

import useTheme from '@/utils/hooks/useTheme';
import Button from '@/components/ui/Button';
import { HiMoon, HiSun } from 'react-icons/hi';

const ModeToggleButton = () => {
	const mode = useTheme((state) => state.mode);
	const setMode = useTheme((state) => state.setMode);

	const toggleMode = () => {
		setMode(mode === 'light' ? 'dark' : 'light');
	};

	return (
		<Button variant="outline" size="sm" onClick={toggleMode} icon={mode === 'light' ? <HiMoon /> : <HiSun />}>
			{mode === 'light' ? 'Dark' : 'Light'}
		</Button>
	);
};

export default ModeToggleButton;
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

| Property                 | Description                                        | Type                                                                                                                | Default             |
| ------------------------ | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `themeSchema`            | Color scheme preset                                | `string`                                                                                                            | `'default'`         |
| `direction`              | Text direction                                     | `'ltr'` \| `'rtl'`                                                                                                  | `'ltr'`             |
| `mode`                   | Color mode                                         | `'light'` \| `'dark'`                                                                                               | `'light'`           |
| `panelExpand`            | Side panel expanded by default                     | `boolean`                                                                                                           | `false`             |
| `controlSize`            | Default size of form controls                      | `'xs'` \| `'sm'` \| `'md'` \| `'lg'`                                                                                | `'md'`              |
| `layout.type`            | Application layout style                           | `'blank'` \| `'collapsibleSide'` \| `'stackedSide'` \| `'topBarClassic'` \| `'framelessSide'` \| `'contentOverlay'` | `'collapsibleSide'` |
| `layout.sideNavCollapse` | Side navigation collapsed (for applicable layouts) | `boolean`                                                                                                           | `false`             |

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

-   Enable Next.js Image Optimization
-   Use dynamic imports for code splitting
-   Implement caching strategies
-   Optimize fonts and assets
-   Enable compression
-   Use CDN for static assets

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

-   Next.js: https://nextjs.org/docs
-   React: https://react.dev
-   Tailwind CSS: https://tailwindcss.com/docs
-   BetterAuth: https://better-auth.com
-   TypeScript: https://www.typescriptlang.org/docs

### Community

-   GitHub Issues: Report bugs and request features
-   Stack Overflow: Community Q&A

---

**Built with ❤️ using TypeScript, Next.js, and modern web technologies**

_Version 1.0.0 | Last Updated: 2024_
