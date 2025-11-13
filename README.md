# 🎨 Ecme UI Library - AI-Powered Development System

Welcome to the Ecme UI Library repository with an integrated AI-powered development system that helps you build production-ready UIs rapidly!

## 🌟 What's Inside

This repository contains:

1. **Ecme UI Component Library** - A comprehensive Next.js component library with 100+ components
2. **AI Skills System** - Three specialized AI skills for rapid UI development
3. **Complete Documentation** - API references and usage guides
4. **Example Projects** - Production-ready examples in the Projects folder
5. **Demo Application** - Full-featured demo showcasing all components

## 📚 Documentation Files

### Essential Guides
- **[INITIAL-PROMPT.md](./INITIAL-PROMPT.md)** - START HERE! Learn how to use the AI system
- **[UI-ELEMENTS.MD](./UI-ELEMENTS.MD)** - Complete list of all available components
- **[CORE.MD](./CORE.MD)** - Project structure, routing, theming, and configuration
- **[COMPONENT-API-REFERENCE.ts](./COMPONENT-API-REFERENCE.ts)** - TypeScript API reference with examples

### AI Skills (.claude/skills/)
- **[tech.md](./.claude/skills/tech.md)** - Component knowledge and technical guidance
- **[ui-helper.md](./.claude/skills/ui-helper.md)** - Requirement gathering expert
- **[ui-god.md](./.claude/skills/ui-god.md)** - Rapid UI generation expert

## 🚀 Quick Start

### 1. Explore the Demo
```bash
cd demo
npm install
npm run dev
```
Visit `http://localhost:3000` to see all components in action.

### 2. Use the AI System
Read [INITIAL-PROMPT.md](./INITIAL-PROMPT.md) and start building with AI assistance!

Example:
```
Hi Claude! I want to build a task management app using the Ecme UI library.
[Provide details...]
Please use UI-HELPER to gather requirements, TECH for component recommendations,
and UI-GOD to create the project.
```

### 3. Check Example Projects
```bash
cd Projects/TEST
```
Review the TEST project to see a complete implementation example.

## 🎯 AI-Powered Workflow

```
1. YOU provide initial requirements
   ↓
2. UI-HELPER asks clarifying questions
   ↓
3. TECH recommends components
   ↓
4. UI-GOD generates production-ready code
   ↓
5. YOU get a complete project in Projects/[name]/
```

## 📦 Component Categories

### UI Components (60+)
- **Common**: Button, Grid, Typography, Icons
- **Feedback**: Alert, Dialog, Drawer, Toast, Progress, Spinner
- **Data Display**: Avatar, Badge, Calendar, Cards, Table, Tag, Timeline, Tooltip
- **Forms**: Input, Select, Checkbox, Radio, DatePicker, Upload, and more
- **Navigation**: Menu, Tabs, Pagination, Steps, Dropdown

### Shared Components (30+)
- DataTable, RichTextEditor, ImageGallery, Chart, GanttChart
- CalendarView, AuthorityCheck, Loading, Masonry, and more

### Utility Hooks (15+)
- useTheme, useDebounce, useResponsive, useAuthority, useNavigation, and more

### Authentication Pages
- Sign In, Sign Up, Forgot Password, Reset Password, OTP Verification
- Each with 3 variants: Simple, Side, Split

### Pre-built Concepts
- Dashboards (Ecommerce, Project, Marketing, Analytic)
- Management (Projects, Customers, Products, Orders)
- Apps (Chat, Mail, Calendar, File Manager)

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with CSS variables
- **State Management**: Zustand
- **Icons**: React Icons
- **Charts**: Recharts
- **Rich Text**: TipTap
- **i18n**: next-intl
- **Authentication**: NextAuth.js

## 📂 Repository Structure

```
.
├── .claude/                    # AI Skills
│   ├── skills/
│   │   ├── tech.md
│   │   ├── ui-helper.md
│   │   └── ui-god.md
│   └── mcp/                    # MCP servers (future)
├── demo/                       # Demo application
│   └── src/
│       ├── components/         # All UI components
│       ├── app/                # Next.js app router
│       └── utils/              # Utilities and hooks
├── Projects/                   # AI-generated projects
│   └── TEST/                   # Example project
├── INITIAL-PROMPT.md           # AI system guide
├── UI-ELEMENTS.MD              # Component list
├── CORE.MD                     # Architecture docs
├── COMPONENT-API-REFERENCE.ts  # API reference
└── README.md                   # This file
```

## 💡 Use Cases

### 1. Build Complete Applications
Use the AI system to generate entire applications with proper structure, routing, and components.

### 2. Create Individual Features
Generate specific features or pages and integrate them into existing projects.

### 3. Get Component Recommendations
Ask TECH skill for the best components to use for your specific needs.

### 4. Learn Best Practices
Review generated code to learn Next.js, TypeScript, and React best practices.

### 5. Prototype Rapidly
Quickly prototype ideas with production-quality code.

## 🎨 Features

### Design System
- Customizable theming with CSS variables
- Dark/Light mode support
- RTL support
- Responsive breakpoints
- Multiple layout options

### Developer Experience
- Full TypeScript support
- Comprehensive documentation
- AI-assisted development
- Mock data for testing
- Integration guides

### Accessibility
- WCAG 2.1 compliance
- Keyboard navigation
- Screen reader support
- ARIA labels

### Performance
- Server-side rendering (SSR)
- Code splitting
- Lazy loading
- Optimized images

## 📖 Documentation

### For Users
1. Start with [INITIAL-PROMPT.md](./INITIAL-PROMPT.md)
2. Browse [UI-ELEMENTS.MD](./UI-ELEMENTS.MD) for available components
3. Check [Projects/TEST/](./Projects/TEST/) for examples

### For Developers
1. Read [CORE.MD](./CORE.MD) for architecture
2. Study [COMPONENT-API-REFERENCE.ts](./COMPONENT-API-REFERENCE.ts) for APIs
3. Review demo source code in `demo/src/`

### For AI (Claude)
1. `.claude/skills/tech.md` - Component knowledge
2. `.claude/skills/ui-helper.md` - Requirement gathering
3. `.claude/skills/ui-god.md` - Code generation

## 🤝 How to Use with Claude Code

1. **Open this repository** in Claude Code
2. **Use the INITIAL-PROMPT.md** template to start a conversation
3. **Let the AI skills guide you** through the development process
4. **Find your project** in the `Projects/` folder
5. **Integrate** using the provided integration guide

## 🎯 Example Projects

All projects are in `Projects/` folder:
- **TEST** - Complete example with dashboard and user management

## 🔧 Configuration

### Theme Configuration
Edit `demo/src/configs/theme.config.ts`:
```typescript
export const themeConfig = {
  themeSchema: 'default',
  direction: 'ltr',
  mode: 'light',
  layout: {
    type: 'collapsibleSide',
    sideNavCollapse: false,
  },
}
```

### Route Configuration
Edit `demo/src/configs/routes.config.ts` to add/modify routes.

### Navigation Configuration
Edit `demo/src/configs/navigation.config.ts` to customize navigation.

## 🌈 Theming

The library uses CSS variables for easy theming:
```css
:root {
  --primary: #2a85ff;
  --primary-deep: #0069f6;
  --primary-mild: #4996ff;
  /* ... */
}
```

Multiple theme schemas available in `demo/src/configs/preset-theme-schema.config.ts`.

## 📱 Responsive Design

All components are responsive with Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ♿ Accessibility

Components follow WCAG 2.1 guidelines:
- Semantic HTML
- Keyboard navigation
- ARIA attributes
- Screen reader support
- Focus management

## 🚀 Getting Started with AI

**Step 1**: Read [INITIAL-PROMPT.md](./INITIAL-PROMPT.md)

**Step 2**: Copy an example prompt or create your own

**Step 3**: Paste it into Claude Code and start the conversation

**Step 4**: Answer UI-HELPER's questions

**Step 5**: Review TECH's recommendations

**Step 6**: Get your project from UI-GOD

**Step 7**: Find your code in `Projects/[your-project-name]/`

## 📝 License

[Your License Here]

## 🙏 Credits

Built with:
- Next.js
- React
- TypeScript
- TailwindCSS
- And many other amazing open-source projects

---

## 🎉 Ready to Build?

1. ⭐ Star this repository
2. 📖 Read [INITIAL-PROMPT.md](./INITIAL-PROMPT.md)
3. 🚀 Start building with AI assistance!

**Happy Coding!** 💻✨

---

*For questions or issues, create an issue in this repository.*
