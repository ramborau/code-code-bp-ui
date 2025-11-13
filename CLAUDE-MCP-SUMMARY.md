# Claude MCP & Skill Summary

## Overview

This repository now includes **Model Context Protocol (MCP)** server and **Claude Skill** configurations specifically designed for working with this UI component library.

## What Was Created

### 1. MCP Server Configuration
**Location**: `.claude/mcp.json` and `mcp-server.js`

A fully functional MCP server that provides programmatic access to:
- All UI components in the `demo/` folder
- Component source code and documentation
- Usage examples and patterns
- UI GOD rules and conventions

**Tools Available:**
- `list_components` - Browse all available components
- `get_component_info` - Get detailed component information
- `get_component_example` - Access usage examples
- `get_uigod_rules` - Retrieve project rules

### 2. Claude Skill
**Location**: `.claude/skills/ui-component-helper.md`

A comprehensive skill that helps Claude assistants:
- Follow UI GOD rules automatically
- Work correctly with demo/ and starter/ folders
- Use proper fonts and colors
- Create pages and wrappers correctly
- Avoid common mistakes

### 3. Documentation
**Location**: `MCP-SETUP.md`

Complete setup and usage guide covering:
- Installation steps
- Tool descriptions and examples
- Component library structure
- Workflow guidelines
- Troubleshooting tips

### 4. Package Configuration
**Location**: `package.json` (root)

Added MCP SDK dependency and helper scripts:
```bash
npm run mcp              # Start MCP server
npm run demo:dev         # Run demo
npm run starter:dev      # Run starter
npm run install:all      # Install all dependencies
```

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start MCP Server (Optional)
```bash
npm run mcp
```

### 3. Use Claude Skill
The skill is automatically available in `.claude/skills/ui-component-helper.md` and will help Claude Code follow all the UI GOD rules automatically.

## Key Features

### MCP Server Capabilities
✅ Lists all available UI components from demo/
✅ Retrieves component source code
✅ Provides usage examples
✅ Enforces UI GOD rules
✅ Supports filtering by category

### Claude Skill Benefits
✅ Automatic rule enforcement
✅ Prevents editing demo/ files
✅ Ensures correct font/color usage
✅ Provides component quick reference
✅ Includes common patterns

## Project Structure

```
code-code-bp-ui/
├── .claude/
│   ├── mcp.json                    # ← MCP configuration
│   └── skills/
│       └── ui-component-helper.md  # ← Claude Skill
│
├── demo/                            # Components library (READ-ONLY)
│   ├── src/components/ui/          # All UI components
│   └── src/assets/markdown/        # Component examples
│
├── starter/                         # Your workspace (WORK HERE)
│   ├── src/app/                    # Create pages here
│   └── src/components/             # Custom wrappers here
│
├── mcp-server.js                   # ← MCP server implementation
├── package.json                    # ← MCP dependencies
├── MCP-SETUP.md                    # ← Setup guide
├── UIGOD-RULES.MD                  # UI rules
└── CORE.MD                         # Project docs
```

## Usage Examples

### Using MCP Tools

```typescript
// List all form components
await mcp.list_components({ category: "form" })

// Get Button component info
await mcp.get_component_info({ componentName: "Button" })

// Get basic usage example
await mcp.get_component_example({
  componentName: "Input",
  exampleType: "Basic"
})
```

### Following UI GOD Rules with Skill

The Claude Skill automatically helps you:

```typescript
// ✅ Correct: Work in starter/
// starter/src/app/my-page/page.tsx
import Button from '@/components/ui/Button'

export default function MyPage() {
  return <Button>Click me</Button>
}

// ❌ Wrong: Edit demo/ (Skill prevents this)
// demo/src/components/ui/Button/Button.tsx
// NEVER EDIT THIS
```

## UI GOD Rules Enforcement

The skill enforces these critical rules:

| Rule | Enforced By |
|------|-------------|
| Don't edit demo/ | Claude Skill |
| Work only in starter/ | Claude Skill |
| Use only approved fonts | Claude Skill |
| Use only #00c307 color | Claude Skill |
| Create wrappers for customization | Claude Skill |
| Get approval before demo/ changes | Claude Skill |

## Available Components

The MCP server provides access to components in these categories:

**Common**
- Button, Typography, Icon, Badge, Avatar, etc.

**Form**
- Input, Select, Checkbox, Radio, DatePicker, TimeInput, Upload, Switcher

**Data Display**
- Table, Card, Tag, Timeline, Skeleton, Tooltip

**Feedback**
- Toast, Alert, Modal, Dialog, Drawer, Spinner

**Navigation**
- Tabs, Segment, Steps

**Layout**
- Container, Grid

Use `mcp.list_components()` to see the complete list.

## Integration Points

### 1. Claude Code Integration
The skill is automatically detected by Claude Code when working in this repository.

### 2. MCP Client Integration
Any MCP-compatible client can connect using the configuration in `.claude/mcp.json`.

### 3. IDE Integration
The skill provides context and rules that any Claude-powered IDE extension can use.

## Workflow with MCP & Skill

1. **Explore** → Use `list_components` to find what you need
2. **Learn** → Use `get_component_info` to understand the component
3. **Example** → Use `get_component_example` to see usage patterns
4. **Build** → Create pages in `starter/` (skill guides you)
5. **Verify** → Skill ensures you followed all rules

## Benefits

### For Developers
- Quick component discovery through MCP tools
- Automatic rule enforcement via skill
- Reduced errors and rework
- Consistent code patterns

### For Teams
- Enforced conventions
- Shared understanding via MCP
- Documented workflows in skill
- Version-controlled rules

### For AI Assistants
- Structured component access via MCP
- Clear rules and guidelines in skill
- Programmatic rule checking
- Context-aware assistance

## Commands Reference

```bash
# MCP Server
npm run mcp                    # Start MCP server

# Development
npm run demo:dev               # Run component library demo
npm run starter:dev            # Run starter workspace

# Build
npm run demo:build            # Build demo
npm run starter:build         # Build starter

# Setup
npm run install:all           # Install all dependencies
```

## MCP Tools Quick Reference

| Tool | Purpose | Parameters |
|------|---------|------------|
| `list_components` | List all components | `category?` (optional filter) |
| `get_component_info` | Get component details | `componentName` (required) |
| `get_component_example` | Get usage example | `componentName`, `exampleType?` |
| `get_uigod_rules` | Get all UI rules | None |

## Skill Features Quick Reference

| Feature | Description |
|---------|-------------|
| Rules Enforcement | Prevents editing demo/ files |
| Font Validation | Ensures San Francisco font usage |
| Color Validation | Enforces #00c307 primary color |
| Workflow Guidance | Step-by-step component usage |
| Quick Reference | Component examples and patterns |
| Error Prevention | Common mistakes checklist |

## Next Steps

1. ✅ **Install dependencies**: `npm install`
2. ✅ **Explore components**: `npm run demo:dev`
3. ✅ **Start building**: Create pages in `starter/`
4. ✅ **Use MCP tools**: `npm run mcp` to start server
5. ✅ **Let skill guide you**: Claude will automatically follow rules

## Documentation

- **MCP Setup**: See `MCP-SETUP.md`
- **UI Rules**: See `UIGOD-RULES.MD`
- **Project Info**: See `CORE.MD`
- **Skill Details**: See `.claude/skills/ui-component-helper.md`

## Support & Troubleshooting

### MCP Server Not Starting
```bash
# Check Node.js version
node --version  # Should be >=18

# Install dependencies
npm install @modelcontextprotocol/sdk

# Try running directly
node mcp-server.js
```

### Skill Not Working
- Ensure `.claude/skills/ui-component-helper.md` exists
- Check file permissions
- Restart Claude Code if needed

### Component Not Found
- Use `list_components` to verify it exists
- Check spelling and capitalization
- Ensure importing from `demo/` not `starter/`

## Contributing

When contributing:
1. Follow UI GOD rules (skill will help)
2. Test with MCP tools
3. Update skill if adding new patterns
4. Document new components

## License

Same as parent project.

---

**Summary**: This repository now includes a complete MCP server and Claude Skill setup that makes working with the UI component library much easier, safer, and more consistent. The MCP server provides programmatic access to all components, while the Claude Skill ensures all work follows the UI GOD rules automatically.
