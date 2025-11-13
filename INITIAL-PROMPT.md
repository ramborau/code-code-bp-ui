# 🚀 Ecme UI-GOD System - Initial User Prompt Guide

## What is UI-GOD?

UI-GOD is an AI-powered UI generation system that helps you build beautiful, production-ready user interfaces rapidly using the Ecme component library. It consists of three specialized AI skills that work together:

1. **UI-HELPER** - Gathers requirements and ensures project clarity
2. **TECH** - Provides component recommendations and technical guidance
3. **UI-GOD** - Generates production-ready code and project structure

## 📋 How It Works

The system follows a structured workflow:

```
User Request → UI-HELPER (Requirements) → TECH (Components) → UI-GOD (Code) → Production-Ready Project
```

## 🎯 Initial Prompt Template

When starting a new project with Claude Code, use this template:

```
Hi Claude! I want to build a [PROJECT TYPE] using the Ecme UI library.

Project Name: [YOUR PROJECT NAME]

Project Description:
[Describe what you want to build in 2-3 sentences]

Core Features:
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]
...

User Roles (if applicable):
- [Role 1]: [What they can do]
- [Role 2]: [What they can do]

Please use the UI-HELPER skill to gather complete requirements, then work with TECH to recommend components, and finally have UI-GOD create the project structure and code in the Projects folder.
```

## 📝 Example Prompts

### Example 1: Task Management App

```
Hi Claude! I want to build a task management application using the Ecme UI library.

Project Name: TaskMaster

Project Description:
A collaborative task management app where teams can create, assign, and track tasks. Users should be able to organize tasks in boards (Kanban style), set priorities, add due dates, and comment on tasks.

Core Features:
1. User authentication (sign in, sign up, forgot password)
2. Dashboard with task statistics and overview
3. Kanban board for task management (drag & drop)
4. Task list view with filters and search
5. Task detail view with comments and activity log
6. User profile and settings
7. Team management (for admins)

User Roles:
- Admin: Full access, can manage teams and users
- Manager: Can create and assign tasks, view all team tasks
- Member: Can view and update assigned tasks
- Guest: Read-only access to public boards

Please use the UI-HELPER skill to gather complete requirements, then work with TECH to recommend components, and finally have UI-GOD create the project structure and code in the Projects folder.
```

### Example 2: E-commerce Dashboard

```
Hi Claude! I want to build an e-commerce admin dashboard using the Ecme UI library.

Project Name: ShopAdmin

Project Description:
An admin dashboard for managing an e-commerce store. Admins should be able to view sales analytics, manage products, process orders, and handle customer inquiries.

Core Features:
1. Sales dashboard with charts and metrics
2. Product management (list, create, edit, delete products)
3. Order management (view, update order status)
4. Customer management (view customer details, order history)
5. Inventory tracking
6. Revenue analytics with charts

User Roles:
- Admin: Full access to all features
- Manager: Can manage products and orders
- Support: Can view and respond to customer inquiries

Please use the UI-HELPER skill to gather complete requirements, then work with TECH to recommend components, and finally have UI-GOD create the project structure and code in the Projects folder.
```

### Example 3: Simple Landing Page

```
Hi Claude! I want to build a landing page using the Ecme UI library.

Project Name: ProductLanding

Project Description:
A modern landing page for a SaaS product with sections for features, pricing, testimonials, and a contact form.

Core Features:
1. Hero section with CTA button
2. Features section (grid layout with icons)
3. Pricing table (3 tiers)
4. Testimonials carousel
5. Contact form
6. Footer with links

No authentication needed - this is a public landing page.

Please use the UI-HELPER skill to gather complete requirements, then work with TECH to recommend components, and finally have UI-GOD create the project structure and code in the Projects folder.
```

## 💡 Tips for Better Results

### 1. Be Specific About Features
Instead of: "I need user management"
Better: "I need a user list with search, filtering by role, pagination, and CRUD operations (create, view, edit, delete)"

### 2. Describe User Flows
Instead of: "Users should be able to create tasks"
Better: "Users click 'Create Task' button → modal opens with form (title, description, due date, assignee, priority) → submit → task appears in list"

### 3. Mention Design Preferences
```
Design Preferences:
- Theme: Blue color scheme (use default Ecme theme)
- Mode: Support both light and dark mode
- Layout: Collapsible side navigation
- Style: Modern, clean, minimalist
```

### 4. Specify Data Structure
```
Data Models:
- Task: id, title, description, status, priority, assignee, dueDate, createdAt
- User: id, name, email, role, avatar
- Comment: id, taskId, userId, content, createdAt
```

### 5. Clarify Integrations
```
Technical Requirements:
- Authentication: Email/password with NextAuth
- Database: PostgreSQL with Prisma ORM
- Real-time: WebSocket for live updates
- File Upload: AWS S3 for attachments
```

## 🔄 The Workflow in Action

### Step 1: UI-HELPER Asks Questions
After your initial prompt, UI-HELPER will ask clarifying questions:
- What should the dashboard show?
- How should users create tasks?
- What filters are needed?
- What actions can each role perform?

**Be patient and answer thoroughly!** This ensures you get exactly what you need.

### Step 2: TECH Recommends Components
TECH will suggest the best components for your needs:
```
For your task list, I recommend:
- DataTable for the main list view
- Kanban board for drag & drop
- Dialog for task creation modal
- DatePicker for due dates
- Select for assignee selection
```

### Step 3: UI-GOD Creates Your Project
UI-GOD will generate:
- Complete project structure in `/Projects/[your-project-name]/`
- TypeScript types and interfaces
- React components with proper imports
- Mock data for testing
- README with integration guide
- Production-ready code

## 📂 What You Get

After UI-GOD completes, you'll have:

```
Projects/[your-project-name]/
├── README.md              # Complete documentation
├── app/                   # Next.js pages
│   ├── (auth-pages)/
│   ├── (protected-pages)/
│   └── (public-pages)/
├── components/            # React components
│   ├── views/            # Page-specific
│   └── shared/           # Reusable
├── types/                 # TypeScript types
├── services/              # API services
├── utils/                 # Utilities
├── hooks/                 # Custom hooks
├── constants/             # Constants
└── mock/                  # Mock data
```

## 🎨 Customization Options

You can specify:

### Layout Preferences
```
Layout: collapsibleSide (side navigation that can collapse)
Alternative layouts:
- stackedSide: Stacked side navigation
- topBarClassic: Top bar navigation
- framelessSide: Frameless side navigation
- contentOverlay: Content overlay navigation
- blank: No navigation (for landing pages)
```

### Theme Preferences
```
Theme: Default blue theme
Color Scheme: Light and dark mode support
Direction: LTR (or RTL for right-to-left languages)
Control Size: md (or xs, sm, lg for different input sizes)
```

### Component Preferences
```
Data Display: Use DataTable with pagination and sorting
Forms: Use FormControl with validation
Charts: Line charts for trends, bar charts for comparisons
Navigation: Tabs for content sections
```

## 🚦 Quick Start Commands

### For a Full Application
```
Hi Claude! I want to build a [TYPE] application with [FEATURES] using the Ecme UI library. Please use UI-HELPER to gather requirements, TECH for component recommendations, and UI-GOD to create the project.
```

### For a Single Page/Feature
```
Hi Claude! I need to add a [FEATURE] page to my application. It should [DESCRIPTION]. Please use UI-HELPER to clarify requirements and UI-GOD to create the component.
```

### For Component Recommendations Only
```
Hi Claude! I need to implement [FEATURE]. What Ecme components would you recommend? Please use the TECH skill to provide recommendations.
```

## 📚 Resources

After your project is created, refer to:
1. **COMPONENT-API-REFERENCE.ts** - Complete API documentation
2. **UI-ELEMENTS.MD** - List of all available components
3. **CORE.MD** - Project structure and configuration
4. **.claude/skills/*** - Skill documentation
5. **Projects/TEST/** - Example project for reference

## ⚠️ Important Notes

1. **Be Patient with UI-HELPER** - Answer all questions thoroughly for best results
2. **Review Recommendations** - Check TECH's component suggestions before proceeding
3. **Test Before Integration** - Use the Projects folder to test before copying to your main app
4. **Customize as Needed** - Generated code is a starting point, feel free to modify
5. **Follow Integration Guide** - Each project includes detailed integration instructions

## 🎯 Success Checklist

Before starting, make sure you have:
- [ ] A clear project name
- [ ] A good description of what you want to build
- [ ] A list of core features
- [ ] User roles defined (if applicable)
- [ ] Any specific design preferences
- [ ] An idea of the data you'll be working with

## 🚀 Ready to Start?

Copy one of the example prompts above, customize it for your needs, and paste it into Claude Code!

The AI skills will guide you through the rest of the process.

---

**Happy Building! 🎉**

Generated with ❤️ by the Ecme UI-GOD System
