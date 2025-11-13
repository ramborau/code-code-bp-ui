
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
