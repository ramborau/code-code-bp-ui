Finish the remaining 5% and then Go through Convert to proper MD file ## Folder Structure
Our template's folder structure closely follows the official Next.js app router structure conventions. In this section you will find the basic folder structure and everything you need to get the template up and running. Both the demo and starter versions have the same structure, except that the starter version will have fewer files & folders than the demo version as they are not required in the starter.

Below is a schematic diagram of directory structure:
├── messages                      # Locale messages
|   ├── en.json                   # locale JSON file
|   └── ...                       # Other locale JSON files
├── public                        # Static resource
|   ├── img                       # Images
|   ├── data                      # Static data
|   └── ...                       # Other static files
├── src
│   ├── @types                    # Type files that share across the temeplate
│   │   └── ...                   
│   ├── app                       # Main application directory for Next.js App Router
│   │   ├── (auth-pages)          # Group routes for auth pages
│   │   ├── └── ...               # Auth pages
│   │   ├── └── layout.tsx        # Base layout for auth pages
│   │   ├── (protected-pages)     # Group routes for pages theat require authentication
│   │   ├── ├── ...               # Protected pages
│   │   ├── └── layout.tsx        # Root layout for protected pages
│   │   ├── (public-pages)        # Group routes for public pages
│   │   ├── └── ...               # Public pages
│   │   ├── api                   # API endpoint
│   │   |   └── ...               # API route & files
│   │   favicon.ico               # Favicon
│   │   layout.tsx                # Root layout
│   │   not-found.tsx             # Empty page for 404
│   │   page.tsx                  # Entry page
|   ├── assets                    # App static resource
│   │   ├── maps                  # Map meta data 
│   │   ├── markdown              # Markdown files
│   │   ├── styles                # Global CSS files
│   │   └── svg	                  # SVG files
│   ├── components                # General components
│   │   ├── auth                  # Auth related components
│   │   ├── docs                  # Documentations related components
│   │   ├── layouts               # Layout components
│   │   ├── shared                # Upper level components built on top of ui components
│   │   ├── template              # Template components, such as Header, Footer, Nav, etc...
│   │   ├── ui                    # Bottom level components, such as Button, Dropdown, etc...
│   │   └── view                  # Sharable High level components that used for pages 
│   ├── configs                   # Configuration files        
│   │   └── ...          
│   ├── constants                 # Constant files
│   │   └── ...      
│   ├── i18n                      # Localization setup
│   │   └── ...                   
│   ├── mock                      # Mock data for fake API Calls
│   │   └── data                  # Mock data
│   │   |   └── ...               # Mock data TS files
│   ├── server                    # Server side files
│   │   └── actions               # Server action files
│   │   |   └── ...      				
│   ├── services                  # Service files for managing client API integrations
│   │   ├── ApiService.ts         # Api request & response handler
│   │   ├── axios                 # Axios configs & interceptors
|   |   |   └── ...
│   │   └── ...                   # Other service files
│   ├── utils                     # All reusable function & hooks
│   │   ├── hooks                 # Hooks
│   │   |   └── ...      					
│   │   └── ...                   # Reusable functions 
│   |   auth.ts                   # Next auth setup entry file
│   └── middleware.ts             # Nextjs middleware
├── .env                          # File to stores environment configuration and secrets
├── .eslintignore                 # Ignore file for eslint  
├── .gitignore                    # Ignore file for git
├── .prettierignore               # Ignore file for prettier
├── .prettierrc                   # Prettier config
├── next-env.d.ts                 # Nextjs environment declaration
├── next.config.mjs               # Nextjs configuration file
├── package.json                  
├── package.lock.json            
├── postcss.config.mjs            # PostCss configuration file
├── README.md 
├── tailwind.config.ts            # TailwindCSS configuration file
└── tsconfig.json                 # Project Typescript configuration file
This folder structure provides a clear organization of resources, components, configuration, and assets, making it easier to manage and scale your project. Each folder and file is purposefully placed to ensure a clean and maintainable codebase.


## Routing
Ecme routing follows the Next.js App Router conventions, it uses a file-based routing system where each file in the /app directory corresponds to a route in your application. Subfolders represent nested routes, making it easy to structure complex navigation.

For detailed information & concepts about the Next.js App Router, please refer to the documentation

Route configuration
Although Next.js provides a robust and powerful routing system out of the box, our template introduces an additional layer of routing configuration. This approach allows us to extend and customize the behavior of each page while maintaining flexibility and scalability

The router configuration for the template can be found in src/configs/routes.config/index.ts. There are 3 main groups of routes:

export const publicRoutes = [
    ...
]

export const protectedRoutes = [
    ...
]

export const authRoutes = [
    ...
]
publicRoutes:
This group includes all routes that are accessible to all users.

protectedRoutes:
This group contains routes that require authentication to access.

authRoutes:
This group configuration handles routes related to login, registration, and authentication processes.

Configuration Structure
Our custom routing configuration introduces a structured way to define and extend the behavior of each route in the application. Here's a breakdown of the configuration structure:

export const protectedRoutes = {
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
        dynamicRoute: true
    },
}
Key Components of the Configuration:
Route Keys (Matchers):
Each key in theroutes object (e.g., '/articles','/articles/[slug]') serves as a route matcher for the current URL. When a user visits a page, the application matches the URL against the route keys in the configuration. Once a match is found, it retrieves the corresponding route data from the configuration object and applies the defined settings.

For example:

'/articles' matches a static route.
'/articles/[slug]' matches a dynamic route, where[slug] is a placeholder for replaced with the actual dynamic value from the URL.
Configuration Object:
Each route key maps to a configuration object containing the following properties:

key:
An identifier for the route that pair with navigation config.
authority:
An array of roles (e.g., [ADMIN, USER]) that specifies which user roles are allowed to access the route. This implements Role-Based Access Control (RBAC).
meta:
Metadata for the route, providing additional customization options:
dynamicRoute:
A boolean flag indicating whether the route is dynamic (i.e., contains a parameter placeholder [slug]).
Authority
Ecme routes support simple role-based access control. You can specify the roles that have access to a route by using the authority field. For example, the following route is only accessible to users with the 'admin' or 'user' roles. If the authority field is left as an empty array, the route will be open to all roles.

export const protectedRoutes = [
    {
        ...
        authority: ['admin', 'user'],
    },			
]
Of course, the authority model is flexible and can be changes to meet your projects specific requirements. You can configure it to intercept user access either at the middleware level on the server or directly at the client level for enhanced control.

Meta
The meta field allows you to pass additional information to the PageContainer or the view component associated with the route.

export const protectedRoutes = [
    {
        ...
        meta: {
            pageContainerType: 'gutter',
            header: {
                title: 'My tittle',
                description: 'Some description'
                contained: false,
                extraHeader: lazy(() => import('@/components/SomeComponent')),
            },
            footer: false,
            layout: 'blank',
        }
    },			
]
The layout will be able to access all the meta data specified.

properties	Description	Type	Default
pageContainerType	Defines the type of the view container	'default' | 'gutterless' | 'contained'	'default'
pageBackgroundType	Define the type of the page background	'default' | 'plain'	-
header	Specifies the page header & further configuration	{ title?: string | ReactNode | LazyExoticComponent<() => JSX.Element> description?: string | ReactNode contained?: boolean extraHeader?: string | ReactNode | LazyExoticComponent<() => JSX.Element> }	-
footer	Determines whether to display the footer	boolean	true
layout	Overrides the current layout for this page	'blank' | 'collapsibleSide' | 'stackedSide' | 'topBarClassic' | 'framelessSide' | 'contentOverlay'	-

## Create New Page
This guide walks you through the steps to create a new page in the template. By leveraging Next.js file-system routing and the extended routing configuration, you can easily add new pages with tailored settings.

Create the Page Component
Navigate to the app directory
In the src/app folder, decide where your new page should go. For example, if the page requires authentication, place it in thesrc/app/(protected-pages) directory. If it doesn't require authentication, use thesrc/app/(public-pages) directory instead.

Create a New File
Create a file named after the new route. For example:

For a static route, createsrc/app/new-page/page.tsx.
For a dynamic route, use brackets to define parameters, e.g.,src/app/new-page/[id]/page.tsx.
Add Your Page Code
Define the React component for your page. Example:

const Page = () => {
    return (
        <div>
            <h1>Welcome to the New Page</h1>
            <p>This is a custom page.</p>
        </div>
    );
};

export default Page;
Add Routing Configuration
Extend the routing setup, update the src/configs/route.config/routes.config.ts protectedRoutes or publicRoutes configuration to include your new page. For example:

import { ADMIN, USER } from '@/constants/roles';

export const protectedRoutes = {
    ...protectedRoutes,
    '/new-page': {
        key: 'newPage',
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
};
In Next.js, creating a new page is as simple as adding a folder and a page.tsx file

Additional Notes
Instead of applying 'use client' directly to the page file, it is recommended to create a separate client component and import it into the page. This approach allows the page itself to remain server-rendered, optimizing server-side rendering (SSR) and letting only the client-side logic be handled in the client component. For example:

// src/app/(protected-pages)/new-page/page.tsx
import ClientComponent from './ClientComponent';

const NewPage = () => {
    return (
        <div>
            <h1>New Page</h1>
            <ClientComponent />
        </div>
    );
};

export default NewPage;
// src/app/(protected-pages)/new-page/_components/ClientComponent.tsx
'use client';

const ClientComponent = () => {
    return <p>This component runs on the client.</p>;
};

export default ClientComponent;
This way, the page can process SSR tasks before rendering client-side components.


## State management
In this template, we've integrated Zustand for client side state management. Zustand is a small, fast, and scalable state management solution that allows you to manage state for your client-side components in a simple and efficient way.

We use Zustand to manage some of the core states in the demo, but it's entirely optional for you to continue using it in your projects. If you prefer a different state management library or even the built-in React state, you can easily switch to what best suits your needs.

Creating a Zustand State
Creating a Zustand store is straightforward. Below is an example of how you can create a global state to manage a simple counter:

Typescript
Javascript
import create from 'zustand'

type CouterState = {
    count: number
}

type CouterAction = {
    increaseCount: () => void
    decreaseCount: () => void
}

// Define the store
const useCounterStore = create<CouterState & CouterAction>((set) => ({
    count: 0,
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}))

export default useCounterStore
In this example, we've created a store with a count state and two actions: increaseCount and decreaseCount. These actions update the state by increasing or decreasing the count.

Using Zustand State in a Component
Once you've created the store, using it in a component is simple. Here's how you can integrate the useCounterStore into a React component:

import useCounterStore from './path/to/store'

const Counter = () => {
    const { count, increaseCount, decreaseCount } = useCounterStore()

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    )
}

export default Counter
In this component, we use the useCounterStore hook to access the count state and the two actions. The UI updates automatically whenever the state changes, and the buttons allow the user to interact with the state.

This is just a basic example to get you started. Zustand is flexible and can be used for more complex state management scenarios as your application grows. If you want to explore more advanced usage, we recommend checking out the official Zustand documentation.

## App Config
You can configure various static app settings in src/configs/app.config.ts. Below are the default configurations for both the demo and starter versions.

Demo Configuration
Typescript
Javascript
const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/dashboards/ecommerce',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
    activeNavTranslation: true
}
Starter Configuration
Typescript
Javascript
const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
    locale: 'en',
    activeNavTranslation: false
}
Configuration Metadata
Property	Description	Type	Default (Demo)	Default (Starter)
apiPrefix	The base path for all API requests.	string	'/api'	'/api'
authenticatedEntryPath	The path users are redirected to after successful authentication.	string	'/app/sales/dashboard'	'/home'
unAuthenticatedEntryPath	The path users are redirected to if they are not authenticated.	string	'/sign-in'	'/sign-in'
locale	The default language/locale for the app.	string	'en'	'en'
activeNavTranslation	Enables or disables the tranlation fucntionality that implmented in navigation.	boolean	true	false


## Layouts
Ecme provide 6 types of post login layouts & 3 types of auth layouts, all layouts component can be found under directory src/components/layouts/PostLoginLayout/components*and all the components used within layouts can be found under src/components/template/*

The following was the post login layouts that we had:

Collapsible side - 'collapsibleSide'
Stacked side - 'stackedSide'
Top bar classic - 'topBarClassic'
Frameless side - 'framelessSide'
Content overlay - 'contentOverlay'
Blank - 'blank'
Configuring Layout
You can config the initial layout in src/configs/theme.config.ts with the string value above

export const themeConfig = {
    ...
    layout: {
        type: 'framelessSide',
        ...
    },
}
Here's available values & key for configuring the layout field

properties	Description	Type	Default
type	Type of the application layout	'blank' | 'collapsibleSide' | 'stackedSide' | 'topBarClassic' | 'framelessSide' | 'contentOverlay'	'modern'
sideNavCollapse	Whether to collapse the side navigation (only only applicable when type is 'classic' or 'modern')	boolean	false
Overriding layouts
In general, all route views will follow the settings of the layout in theme.config.ts. However, if there are some cases where you want to show a different layout in a certiain route view, you can the layout value you wish under the route meta to overide the current layout as we mentioned in Routing guide.

export const protectedRoutes = {
    '/your-page-path': {
        key: 'keyForYourPage',
        authority: [ADMIN, USER],
        meta: {
            ...
            layout: 'blank',
        },
    },
}
Auth layouts
Configuring auth layout is slightly different from the above, just need to visit src/app/(auth-pages)/layout.tsx and replace the wrapper component. For example, switching side to simple

import { ReactNode } from 'react'
import Side from '@/components/layouts/AuthLayout/Side'
import Simple from '@/components/layouts/AuthLayout/Simple'
// import Split from '@/components/layouts/AuthLayout/Split'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-auto flex-col h-[100vh]">
            <Simple>
            <Side>
                {children}
            </Simple>
            <Side/>
        </div>
    )
}

export default Layout

## Navigation Config
We form our navigation structure as array of objects & render it into UI eventually. You can change or customize the app navigation very easily by accessing src/configs/navigation.config/index.ts

Here is the type for a single menu item

export type HorizontalMenuMeta = {
    layout: 'default'
} | {
    layout: 'columns'
    showColumnTitle?: boolean
    columns: 1 | 2 | 3 | 4 | 5
} | {
    layout: 'tabs'
    columns: 1 | 2 | 3 | 4 | 5
}

export interface NavigationTree {
    key: string
    path: string
    isExternalLink?: boolean
    title: string
    translateKey: string
    icon: string
    type: 'title' | 'collapse' | 'item'
    authority: string[]
    subMenu: NavigationTree[]
    description?: string
    meta?: {
        horizontalMenu?: HorizontalMenuMeta
        description?: {
            translateKey: string
            label: string
        }
    }
}

properties	Description	Type	Default
key	An key that match with the route for highlighting purpose	string	-
path	An URL that this menu item link to	string	-
isExternalLink	Whether to open link in new tab upon click	boolean	-
title	Rendered text of this menu item	string	-
translateKey	Translate key to translate the rendered text in menu item, fallback to title if empty or invalid	string	-
icon	Render icon in menu item, string value must tally with object key in navigation-icon.config.tsx	string	-
type	To define the type of current menu item	'title' | 'collapse' | 'item'	-
authority	Display menu items to users who have the roles given, there will be no access block if the this field is undefine or empty array	string[]	-
subMenu	Whether have child in this menu item, it will render a menu group under this menu item, if the type is 'title' or 'collapse', this field accept properties within this table	navigationConfig[]	-
meta	This is an optional configuration field for navigation. It can include additional information that's only needed in specific use cases	{ horizontalMenu?: HorizontalMenuMeta description?: { translateKey: string label: string } }	-
meta.horizontalMenu	Further configuration for horizontal menu, e.g layout, columns & etc.	{ layout: 'default' } | { layout: 'columns' showColumnTitle?: boolean columns: 1 | 2 | 3 | 4 | 5 } | { layout: 'tabs' columns: 1 | 2 | 3 | 4 | 5 }	-
meta.description	Description of the page, description only available when themeConfig.layout.type is 'contentOverlay'	navigationConfig[]	-
An example of structured navigation config

const navigationConfig = [
    {
        key: 'uiComponent',
        path: '',
        title: 'Ui Component',
        translateKey: 'nav.uiComponents',
        icon: 'uiComponents',
        type: 'title',
        authority: ['admin', 'user'],
        /** We can define mnu config here, if we are using horizontal menu */
        meta: {
            horizontalMenu: {
                layout: 'columns',
                columns: 4
            }
        },
        subMenu: [
            {
                key: 'uiComponent.common',
                path: '',
                title: 'Common',
                translateKey: 'nav.uiComponentsCommon.common',
                icon: 'common',
                type: 'collapse',
                authority: ['admin', 'user'],
                subMenu: [
                    {
                        key: 'uiComponent.common.button',
                        path: '/button',
                        title: 'Button',
                        translateKey: 'nav.uiComponentsCommon.button',
                        icon: '',
                        type: 'item',
                        authority: ['admin', 'user'],
                        subMenu: []
                    },
                    {
                        key: 'uiComponent.common.typography',
                        path: '/typography',
                        title: 'Typography',
                        translateKey: 'nav.uiComponentsCommon.typography',
                        icon: '',
                        type: 'item',
                        authority: ['admin', 'user'],
                        subMenu: []
                    }
                ]
            }
        ]
    }
]
Configuring navigation icon
Navigation icon configuration placed on seperate file in src/configs/navigation-icon.config.tsx

In the above example, we use string value uiComponents in the icon field, we must then use this value in navigation-icon.config.ts to define the icon for the callout.

First, import the icon you want from react-icons

import { FaBeer } from 'react-icons/fa'

const navigationIcon = {}
Set the value used in icon field as & the imported icon component as value

import { FaBeer } from 'react-icons/fa'

const navigationIcon = {
    uiComponents: <FaBeer />
}
Now the corresponding menu item will render FaBeer as the menu icon.

## Theming
We manage the theme color scheme using CSS variables, making it easy to customize and extend the theme. You can modify the theme colors by editing the CSS variables in the file located at:assets/styles/tailwind/index.css

Here is the default setup for the light and dark modes:

:root {
    --neutral: #ffffff;
    --primary: #2a85ff;
    --primary-deep: #0069f6;
    --primary-mild: #4996ff;
    --primary-subtle: #2a85ff1a;
    --error: #ff6a55;
    --error-subtle: #ff6a551a;
    --success: #10b981;
    --success-subtle: #05eb7624;
    --info: #2a85ff;
    --info-subtle: #2a85ff1a;
    --warning: #f59e0b;
    --warning-subtle: #ffd40045;
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
    --primary: #2a85ff;
    --primary-deep: #0069f6;
    --primary-mild: #4996ff;
    --primary-subtle: #2a85ff1a;
    --error: #ff6a55;
    --error-subtle: #ff6a551a; 
    --success: #10b981;
    --success-subtle: #05eb7624;
    --info: #2a85ff;
    --info-subtle: #2a85ff1a;
    --warning: #f59e0b;
    --warning-subtle: #ffd40045;
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
Setting Up a Dynamic Theme
If you want to enable dynamic theme switching in your application, you'll need to take a few extra steps. First, configure your theme schema in the configs/theme.config.ts file:

Typescript
Javascript
export type Variables = 
  | "primary"
  | "primaryDeep"
  | "primaryMild"
  | "primarySubtle"
  | "neutral";

export type ThemeVariables = Record<
  "light" | "dark", 
  Record<Variables, string>
>

/** Default theme schema should corresponding to the CSS variables */
const defaultTheme: ThemeVariables = {
    light: {
        primary: "#2a85ff",
        primaryDeep: "#0069f6",
        primaryMild: "#4996ff",
        primarySubtle: "#2a85ff1a",
        neutral: "#ffffff",
    },
    dark: {
        primary: "#2a85ff",
        primaryDeep: "#0069f6",
        primaryMild: "#4996ff",
        primarySubtle: "#2a85ff1a",
        neutral: "#ffffff",
    },
}

/** Example of a custom green theme schema */
const greenTheme: ThemeVariables = {
    light: {
        primary: "#0CAF60",
        primaryDeep: "#088d50",
        primaryMild: "#34c779",
        primarySubtle: "#0CAF601a",
        neutral: "#ffffff",
    },
    dark: {
        primary: "#0CAF60",
        primaryDeep: "#088d50",
        primaryMild: "#34c779",
        primarySubtle: "#0CAF601a",
        neutral: "#ffffff",
    },
}

const presetThemeSchemaConfig: Record<string, ThemeVariables> = {
    default: defaultTheme,
    green: greenTheme,
}

export default presetThemeSchemaConfig
Now that your theme schemas are set up, you can use the useTheme hook to switch between different theme colors. Here's an example of how you might implement a theme switcher:

import classNames from '@/utils/classNames'
import { TbCheck } from 'react-icons/tb'
import presetThemeSchemaConfig from '@/configs/preset-theme-schema.config'
import useTheme from '@/utils/hooks/useTheme'

const ThemeSwitcher = () => {
    const schema = useTheme((state) => state.themeSchema)
    const setSchema = useTheme((state) => state.setSchema)
    const mode = useTheme((state) => state.mode)

    return (
        <div className="inline-flex items-center gap-2">
            {Object.entries(presetThemeSchemaConfig).map(([key, value]) => (
                <button
                    key={key}
                    className={classNames(
                        'h-8 w-8 rounded-full flex items-center justify-center border-2 border-white',
                        schema === key && 'ring-2 ring-primary',
                    )}
                    style={{ backgroundColor: value[mode].primary || '' }}
                    onClick={() => setSchema(key)}
                >
                    {schema === key ? (
                        <TbCheck className="text-neutral text-lg" />
                    ) : (
                        <></>
                    )}
                </button>
            ))}
        </div>
    )
}

export default ThemeSwitcher
This guide should help you effectively manage and switch themes within your application. You can extend the theme schemas as needed to fit your design requirements.

## Internationalization
Our template uses next-intl to handle internationalization (i18n). By default, the starter does not include i18n setup, as not every project requires this feature. However, we offer two distinct setups to cater to both scenarios: Without i18n Routing (default) and With i18n Routing.

We integrates i18n into the navigation module by default. If you need to having i18n in your app, you might need to toggle the activeNavTranslation field in src/configs/app.config.ts to true.


// src/configs/app.config.ts
export const appConfig: AppConfig = {
    ...
    activeNavTranslation: true
}
Without i18n Routing
This setup is designed for simplicity, allowing you to manage translations without involving URL structures, which we implemented in our demo.

Add your translation files to the messages folder in the root directory:

messages/
├── en.json
├── es.json
└── fr.json
This is a simplest example to add your translation key to a JSON files

// messages/en.json
{
    "title": "Home",
}
// messages/es.json
{
    "title": "Inicio",
}
Wrap the application with LocaleProvider in src/app/layout.tsx and inject necessary props

Typescript
Javascript
// src/app/layout.tsx
...
import LocaleProvider from "@/components/template/LocaleProvider";
import { getLocale, getMessages } from "next-intl/server";

export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {

    const locale = await getLocale();

    const messages = await getMessages();

    ...                          

    return (
        <html suppressHydrationWarning>
            <body suppressHydrationWarning>
                <LocaleProvider locale={locale} messages={messages}>
                    <ThemeProvider locale={locale} theme={theme}>
                        ...other components
                        {children}
                    </ThemeProvider>
                </LocaleProvider>  
            </body>
        </html>
    );
}
Now you can use translations in your page components or anywhere else with useTranslation hook

import {useTranslations} from 'next-intl';
 
export default function HomePage() {
    const t = useTranslations();
    return <h1>{t('title')}</h1>;
}
With i18n Routing
Next Intl provide i18n Routing setup, it use unique pathnames for every language that your app supports, this setup can be useful if you need a Prefix-based routing (e.g. /en/about) or Domain-based routing (e.g. en.example.com)

Setting up i18n routing in a Next.js app requires more effort compared with the above one. This setup involves changes to the project structure and additional configurations.

If you're considering implementing i18n routing, refer to the official next-intl documentation for a comprehensive guide: App Router setup with i18n routing

Changing language
If you need to switch languages dynamically(Without i18n Routing), you can use the i18n object provided by the useTranslation hook to change the current language.

Typescript
Javascript
'use client'
                
import { setLocale } from '@/server/actions/locale'

const Component = () => {

    const handleUpdateLocale = async (locale: string) => {
        await setLocale(locale)
    }

    return (
        <button onClick={() => handleUpdateLocale('fr')}>Change language</button>
    )
}

export default Component
Setting the Default Language
To set the default language, you might need to visit src/configs/app.config.ts and change the locale field value

export const appConfig: AppConfig = {
    ...
    locale: 'fr'
}
Adding new locale
To support a new language in your app, create a new JSON file for the locale inside the messages folder. For example, to add French translations, create a file named messages/fr.json:

// messages/fr.json
{
    "HomePage": {
        "title": "Bonjour le monde!",
        "about": "Aller à la page à propos"
    }
}
Register the new locale value in src/i18n/dateLocales.ts

Typescript
Javascript
export const dateLocales: {
    [key: string]: () => Promise<ILocale>
} = {
    ...
    fr: () => import('dayjs/locale/fr'),
}
For i18n Routing, you might need to include the new locale value to routing configuration & middleware

## Dark/Light Mode
To initialize dark or light mode to the app, simply set mode field as'light' or 'dark' in src/configs/theme.config.ts. For example:

export const themeConfig = {
    ...
    mode: 'dark'
}
Hook
You can access or update the mode in a component via our prepared hook.

Typescript
Javascript
'use client'

import useTheme from '@/utils/hooks/useTheme'
import Switcher from '@/components/ui/Switcher'

const ModeSwitcher = () => {

    const mode = useTheme((state) => state.mode)
    const setMode = useTheme((state) => state.setMode)

    const onSwitchChange = (checked: boolean) => {
        setMode(checked ? 'dark' : 'light')
    }
    
    return (
        <div>
            <Switcher
                defaultChecked={mode === 'dark'}
                onChange={onSwitchChange}
            />
        </div>
    )
}

export default ModeSwitcher

## Direction
To initialize the app direction, simply set direction field as'ltr' or 'rtl' in src/configs/theme.config.ts. For example:

export const themeConfig = {
	...
	direction: 'rtl'
}
Hook
You can access or update the direction in a component via our prepared hook.

Typescript
Javascript
'use client'

import Button from '@/components/ui/Button'
import InputGroup from '@/components/ui/InputGroup'
import useTheme from '@/utils/hooks/useTheme'
import { THEME_ENUM } from '@/constants/theme.constant'
import type { Direction } from '@/@types/theme'

const dirList = [
    { value: THEME_ENUM.DIR_LTR, label: 'LTR' },
    { value: THEME_ENUM.DIR_RTL, label: 'RTL' },
]

const DirectionSwitcher = (props: {
    callBackClose?: () => void
}) => {

    const setDirection = useTheme((state) => state.setDirection)
    const direction = useTheme((state) => state.direction)

    const onDirChange = (val: Direction) => {
        setDirection(val)
    }

    return (
        <InputGroup size="sm">
            {dirList.map((dir) => (
                <Button
                    key={dir.value}
                    active={direction === dir.value}
                    onClick={() => onDirChange(dir.value)}
                >
                    {dir.label}
                </Button>
            ))}
        </InputGroup>
    )
}

export default DirectionSwitcher

## Overall Theme Config
The file src/configs/theme.config.ts contains the default theme settings for the template. These configurations are predefined but can be customized to suit your needs. Below is the default configuration:

If you realize that the theme did not change after setting a new value to the configuration, you could consider to clear the theme key from cookies

Typescript
Javascript
import { THEME_ENUM } from '@/constants/theme.constant'
import {
    Direction,
    Mode,
    ControlSize,
    LayoutType,
} from '@/@types/theme'

export type ThemeConfig = {
    themeSchema: string
    direction: Direction
    mode: Mode
    panelExpand: boolean
    controlSize: ControlSize
    layout: {
        type: LayoutType
        sideNavCollapse: boolean
    }
}

export const themeConfig: ThemeConfig = {
    themeSchema: '',
    direction: THEME_ENUM.DIR_LTR,
    mode: THEME_ENUM.MODE_LIGHT,
    panelExpand: false,
    controlSize: 'md',
    layout: {
        type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
        sideNavCollapse: false,
    },
}
Configuration Properties
Prop	Description	Type	Default
themeSchema	Sets the color scheme of the template. you can leave this field empty if you are having dynamic theme in your app	string	''
direction	Defines the text direction for the template.	'ltr' | 'rtl'	'ltr'
mode	Toggles between Light and Dark mode.	'light' | 'dark'	'light'
panelExpand	Determines whether the side panel is expanded by default.	boolean	false
controlSize	Sets the initial size of control inputs.	'xs' | 'sm' | 'md' | 'lg'	'md'
layout.type	Defines the overall layout style of the application.	'blank' | 'collapsibleSide' | 'stackedSide' | 'topBarClassic' | 'framelessSide' | 'contentOverlay'	'modern'
layout.sideNavCollapse	Specifies whether the side navigation is collapsed. This option is only applicable when type is set to 'collapsibleSide' or 'framelessSide'.	boolean	false
State Persistence
We store the theme configuration in cookies, but it's only saved there when the theme is changed using the useTheme hook. By default, the theme configuration is loaded from theme.config.tsx.



