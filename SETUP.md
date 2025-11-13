# Ecme Setup Guide - Fresh Directory Installation

## Overview
This repository contains the Ecme Next.js & TypeScript Admin Dashboard Template with:
- **demo/** - Full-featured demo with all components and examples
- **starter/** - Minimal starter template for new projects
- **documentation/** - Additional documentation

---

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.17 or higher recommended)
- **npm** (v9+ or higher) or **yarn** / **pnpm**
- **Git** (for version control)

---

## Setup Steps

### 1. Clone the Repository

```bash
# If you haven't cloned yet
git clone <repository-url>
cd code-code-bp-ui
```

### 2. Choose Your Project

You have two options:

#### Option A: Demo Project (Full Features)
The demo includes all components, examples, and documentation.

```bash
cd demo
```

#### Option B: Starter Project (Clean Template)
The starter is a minimal template for building from scratch.

```bash
cd starter
```

---

### 3. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- Next.js 15.x
- React 19
- TypeScript 5
- Tailwind CSS 4
- And many UI components (FullCalendar, ApexCharts, TipTap, etc.)

---

### 4. Run Development Server

```bash
npm run dev
```

The application will start on:
- **Local**: http://localhost:3000
- **Turbopack** mode is enabled for faster development

---

### 5. Build for Production

```bash
npm run build
```

To start the production server:
```bash
npm start
```

---

## Available Scripts

### In both `demo` and `starter` directories:

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Check code formatting with Prettier
npm run prettier

# Fix code formatting with Prettier
npm run prettier:fix
```

---

## Project Structure

```
code-code-bp-ui/
├── demo/                   # Full-featured demo application
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   ├── package.json       # Dependencies and scripts
│   └── README.md          # Demo documentation
├── starter/               # Minimal starter template
│   ├── src/              # Source code
│   ├── public/           # Static assets
│   ├── package.json      # Dependencies and scripts
│   └── README.md         # Starter documentation
├── documentation/         # Additional docs
├── CORE.MD               # Core documentation
├── UI.MD                 # UI documentation
├── UI2.MD                # Additional UI docs
├── UI-ELEMENTS.MD        # UI elements reference
└── UIGOD-RULES.MD        # UI development rules
```

---

## Key Features

- ✅ **Next.js 15** with App Router
- ✅ **React 19** with latest features
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS 4** for styling
- ✅ **Dark/Light Mode** theme switching
- ✅ **Multi-Locale Support** (next-intl)
- ✅ **RTL Support** for Arabic/Hebrew
- ✅ **Form Management** (react-hook-form + zod)
- ✅ **Authentication** (next-auth)
- ✅ **State Management** (zustand)
- ✅ **Charts** (ApexCharts)
- ✅ **Rich Text Editor** (TipTap)
- ✅ **Calendar** (FullCalendar)
- ✅ **Data Tables** (TanStack Table)

---

## Environment Setup (Optional)

If your project requires environment variables:

1. Create a `.env.local` file in your project directory (demo or starter)
2. Add your environment variables:

```env
# Example environment variables
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here
# Add other variables as needed
```

---

## Troubleshooting

### Node version issues
Ensure you're using Node.js 18.17 or higher:
```bash
node --version
```

### Dependency conflicts
If you encounter dependency issues, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port already in use
If port 3000 is occupied, you can specify a different port:
```bash
npm run dev -- -p 3001
```

---

## Next Steps

1. **Explore the demo**: Visit http://localhost:3000 after running `npm run dev` in the demo directory
2. **Read documentation**: Check the markdown files in the root directory
3. **Customize**: Start building your application in the starter directory
4. **Online docs**: Visit https://ecme-react.themenate.net/guide/documentation/introduction

---

## Quick Start Summary

```bash
# For Demo (Full Features)
cd demo
npm install
npm run dev

# OR

# For Starter (Clean Template)
cd starter
npm install
npm run dev
```

---

## Support

- **Live Demo**: https://ecme-react.themenate.net/
- **Documentation**: https://ecme-react.themenate.net/guide/documentation/introduction
- Check the documentation files in this repository for detailed guides

---

Happy coding! 🚀
