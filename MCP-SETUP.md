# MCP Server & Claude Skill Setup

This repository includes Model Context Protocol (MCP) server and Claude Skill configurations for working with the UI component library.

## What's Included

### 1. MCP Server (`mcp-server.js`)
An MCP server that exposes UI components through the Model Context Protocol, providing:
- List all available components from `demo/`
- Get component details and source code
- Access component examples and documentation
- Retrieve UI GOD rules and conventions

### 2. Claude Skill (`.claude/skills/ui-component-helper.md`)
A Claude Skill that helps you:
- Follow UI GOD rules and conventions
- Work correctly with demo/ and starter/ folders
- Use components properly
- Maintain font and color standards

## Quick Start

### Using the MCP Server

1. **Install MCP SDK dependencies** (if not already installed):
```bash
npm install @modelcontextprotocol/sdk
```

2. **Configure your MCP client** to use the server:
The configuration is in `.claude/mcp.json`:
```json
{
  "mcpServers": {
    "ui-components": {
      "command": "node",
      "args": ["mcp-server.js"],
      "description": "MCP server for UI component library"
    }
  }
}
```

3. **Use the MCP tools**:
- `list_components` - List all available UI components
- `get_component_info` - Get detailed info about a component
- `get_component_example` - Get usage examples
- `get_uigod_rules` - Get the UI GOD rules

### Using the Claude Skill

The skill is automatically available in `.claude/skills/ui-component-helper.md`.

To use it with Claude Code:
```bash
# The skill provides context about:
# - UI GOD rules and workflow
# - Available components
# - Font and color standards
# - Common patterns and examples
```

## MCP Server Tools

### 1. list_components
Lists all available UI components from the demo folder.

**Parameters:**
- `category` (optional): Filter by category (e.g., "form", "data-display")

**Example:**
```typescript
// List all components
tools.list_components({})

// List form components
tools.list_components({ category: "form" })
```

### 2. get_component_info
Get detailed information about a specific component.

**Parameters:**
- `componentName` (required): Name of the component (e.g., "Button", "Input")

**Example:**
```typescript
tools.get_component_info({ componentName: "Button" })
```

### 3. get_component_example
Get usage examples for a component.

**Parameters:**
- `componentName` (required): Name of the component
- `exampleType` (optional): Type of example (e.g., "Basic", "Advanced", "Customize")

**Example:**
```typescript
tools.get_component_example({
  componentName: "Button",
  exampleType: "Basic"
})
```

### 4. get_uigod_rules
Get the complete UI GOD rules and workflow documentation.

**Example:**
```typescript
tools.get_uigod_rules({})
```

## Component Library Structure

```
code-code-bp-ui/
├── demo/                           # SOURCE OF TRUTH (READ-ONLY)
│   ├── src/
│   │   ├── components/ui/         # All UI components
│   │   └── assets/markdown/       # Component examples
│   └── package.json
│
├── starter/                        # WORKSPACE (WORK HERE)
│   ├── src/
│   │   ├── app/                   # Pages go here
│   │   └── components/            # Wrappers only
│   └── package.json
│
├── .claude/
│   ├── mcp.json                   # MCP configuration
│   └── skills/
│       └── ui-component-helper.md # Claude Skill
│
├── mcp-server.js                  # MCP server implementation
├── UIGOD-RULES.MD                 # UI rules and conventions
└── CORE.MD                        # Project documentation
```

## UI GOD Rules Summary

### Critical Rules:
1. ✅ **DO**: Work in `starter/` folder
2. ✅ **DO**: Import components from `demo/`
3. ✅ **DO**: Use San Francisco font and #00c307 color only
4. ❌ **DON'T**: Edit files in `demo/` folder
5. ❌ **DON'T**: Copy components from demo to starter
6. ❌ **DON'T**: Add custom colors or fonts

### Workflow:
1. Explore `demo/` to find components
2. Import and use components in `starter/`
3. Create wrappers if customization needed
4. Get approval before modifying `demo/`

## Available Components

The demo folder includes components in these categories:

- **Common**: Button, Typography, Icon, Badge, etc.
- **Form**: Input, Select, Checkbox, Radio, DatePicker, TimeInput, Upload, Switcher, etc.
- **Data Display**: Table, Card, Tag, Timeline, Skeleton, etc.
- **Feedback**: Toast, Alert, Modal, Dialog, Drawer, Spinner, etc.
- **Navigation**: Tabs, Segment, Steps, etc.
- **Layout**: Container, Grid, etc.

To see the complete list:
```bash
ls demo/src/components/ui/
```

## Example Usage

### Creating a Page in Starter

```typescript
// starter/src/app/my-page/page.tsx
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'

export default function MyPage() {
  return (
    <div className="p-4">
      <Card>
        <h1>My Page</h1>
        <Input placeholder="Enter something" />
        <Button variant="solid">Submit</Button>
      </Card>
    </div>
  )
}
```

### Creating a Component Wrapper

```typescript
// starter/src/components/custom/PrimaryButton.tsx
'use client'

import Button from '@/components/ui/Button'

export default function PrimaryButton(props) {
  return (
    <Button
      variant="solid"
      style={{ backgroundColor: 'var(--primary)' }}
      {...props}
    />
  )
}
```

## Development

### Running the Demo
```bash
cd demo
npm install
npm run dev
```

### Running the Starter
```bash
cd starter
npm install
npm run dev
```

### Testing the MCP Server
```bash
node mcp-server.js
```

## Troubleshooting

### MCP Server Issues
- Ensure Node.js is installed
- Install dependencies: `npm install @modelcontextprotocol/sdk`
- Check that paths in mcp-server.js are correct

### Component Not Found
- Check if component exists: `ls demo/src/components/ui/`
- Check import path matches folder name
- Ensure you're importing from demo, not starter

### Style Issues
- Verify using San Francisco font (default)
- Check color is `#00c307` or `var(--primary)`
- Review Tailwind config if needed

## Resources

- [Model Context Protocol Documentation](https://modelcontextprotocol.io)
- [Claude Skills Documentation](https://docs.anthropic.com/claude/docs)
- Project documentation: `CORE.MD`
- UI rules: `UIGOD-RULES.MD`

## Support

For issues or questions:
1. Check `UIGOD-RULES.MD` for workflow questions
2. Check `CORE.MD` for project structure questions
3. Use MCP tools to explore components
4. Refer to component examples in `demo/src/assets/markdown/`
