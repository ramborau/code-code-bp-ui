# UI-SKILL Framework
## Ecme UI Components Skill System for AI Agents

This skill system enables AI agents to efficiently create, modify, and work with the Ecme UI component library.

## Directory Structure

```
UI-SKILL/
├── README.md                 # This file
├── examples/                 # Example implementations
│   ├── dashboard-example.tsx
│   ├── form-example.tsx
│   ├── table-example.tsx
│   └── auth-example.tsx
├── templates/                # Reusable templates
│   ├── page-templates/
│   ├── component-templates/
│   └── pattern-templates/
├── prompts/                  # AI agent prompts
│   ├── component-creation.md
│   ├── page-generation.md
│   └── feature-implementation.md
└── agents/                   # Agent configurations
    ├── ui-agent-config.json
    └── component-agent-config.json
```

## Features

### 1. Component Examples
Pre-built examples demonstrating proper usage of all components

### 2. Templates
Reusable templates for common UI patterns:
- Dashboard layouts
- Form patterns
- Table implementations
- Authentication flows
- CRUD operations

### 3. AI Prompts
Structured prompts for AI agents to:
- Create components
- Generate pages
- Implement features
- Debug issues
- Optimize performance

### 4. Agent Configurations
Pre-configured agents for specific tasks:
- UI Component Agent
- Page Generation Agent
- Theme Customization Agent
- Form Builder Agent
- Dashboard Creator Agent

## Usage

### For Developers

```typescript
import { ComponentTemplate } from './UI-SKILL/templates';

// Use a template
const MyPage = () => {
  return <ComponentTemplate.DashboardLayout />;
};
```

### For AI Agents

Agents can reference this skill system using the MCP server:

```json
{
  "skill": "ui-components",
  "action": "create-page",
  "template": "dashboard",
  "features": ["charts", "stats", "tables"]
}
```

## Getting Started

1. **Explore Examples**: Check the `examples/` directory for implementation patterns
2. **Use Templates**: Copy templates from `templates/` as starting points
3. **Reference Prompts**: Use prompts in `prompts/` to guide AI agents
4. **Configure Agents**: Load agent configs from `agents/` for specialized tasks

## Component Categories

### Shared Components (32)
High-level, feature-rich components for complex UI needs

### UI Components (45+)
Base components for building interfaces

### Hooks (15)
Custom React hooks for common functionality

### Utilities (12)
Helper functions for data manipulation and formatting

## Best Practices

1. **Always use TypeScript** - Full type safety for all components
2. **Follow Tailwind conventions** - Use utility classes for styling
3. **Server components first** - Only add 'use client' when needed
4. **Proper error handling** - Handle loading and error states
5. **Accessibility** - Ensure components are keyboard and screen reader accessible
6. **Performance** - Use lazy loading and code splitting
7. **Responsive design** - Test on all breakpoints
8. **Theme aware** - Respect theme configuration

## Quick Reference

### Create a Dashboard
```typescript
// See: examples/dashboard-example.tsx
import { AdaptiveCard, Chart, DataTable } from '@/components/shared';
```

### Create a Form
```typescript
// See: examples/form-example.tsx
import { Form, Input, Button } from '@/components/ui';
import { useDebounce, useTimeOutMessage } from '@/utils/hooks';
```

### Create a Data Table
```typescript
// See: examples/table-example.tsx
import { DataTable } from '@/components/shared';
```

### Apply Theme
```typescript
import { useTheme } from '@/utils/hooks';
const { mode, setMode } = useTheme();
```

## Support

- Documentation: `/demo/COMPONENTS-LIBRARY.ts`
- MCP Config: `/demo/mcp-server-config.json`
- Examples: `/demo/UI-SKILL/examples/`
- UI Docs: `/UI.MD` and `/UI2.MD`

## Version

1.0.0
