# Claude Code Setup Complete

This document outlines the Claude Code configuration for the Ecme UI project.

## What Was Created

### 1. Project-Specific Skills (.claude/skills/)

Located in `.claude/skills/`, these skills provide Claude Code with deep knowledge about this specific project:

#### ui-components.md (3.4 KB)
- Complete catalog of all UI components (100+ components)
- Component locations and import patterns
- Utilities, hooks, and helper functions
- Font (Inter) and color (#00c307) guidelines
- Critical rules about demo/ vs starter/ folders

#### core-architecture.md (11.5 KB)
- Technology stack (Next.js, TypeScript, Tailwind, BetterAuth, Zustand)
- Complete folder structure
- Routing configuration patterns
- Authentication setup and usage
- State management patterns
- API route creation
- Theme configuration
- Best practices and common patterns

### 2. MCP Configuration (.claude/mcp.json)

Configures Model Context Protocol servers for enhanced capabilities:

- **filesystem**: Project directory access
- **git**: Version control operations
- **github**: GitHub API integration (requires GITHUB_TOKEN)
- **postgres**: Database access (uses DATABASE_URL)
- **brave-search**: Web search (requires BRAVE_API_KEY)
- **fetch**: HTTP request capabilities

### 3. Global Skills (~/. claude-skills/)

Located in `/home/user/.claude-skills/`, these are reusable skills across all projects:

#### nextjs-typescript-expert.md (14 KB)
- Next.js 14+ App Router fundamentals
- Server vs Client Components
- Data fetching patterns
- Route Handlers (API routes)
- Metadata & SEO
- Server Actions
- Middleware
- TypeScript best practices
- Performance optimization
- Common patterns and examples

#### react-modern-patterns.md (22 KB)
- React Hooks mastery (useState, useEffect, useCallback, useMemo, etc.)
- Custom hooks (useLocalStorage, useDebounce, useFetch, useMediaQuery)
- Component patterns (Compound Components, Render Props, HOC)
- Performance optimization (React.memo, lazy loading)
- Form handling and validation
- Error boundaries
- Testing patterns

## How to Use

### Activating Skills

Skills are automatically loaded by Claude Code when you:
1. Open the project in Claude Code
2. Start a conversation

### Asking Claude About the Project

You can now ask Claude questions like:

**UI Components:**
- "What UI components are available?"
- "Show me how to use the Button component"
- "List all form components"
- "What hooks are available?"

**Architecture:**
- "How do I create a new page?"
- "Show me the authentication pattern"
- "How is routing configured?"
- "What's the folder structure?"

**Next.js & React:**
- "Show me how to create a Server Component"
- "How do I use Server Actions?"
- "Create a custom hook for me"
- "What's the best way to handle forms?"

### Using MCP Servers

MCP servers provide Claude with capabilities like:

```bash
# Claude can now:
# - Read/write project files
# - Execute git commands
# - Query your database
# - Search the web for solutions
# - Make HTTP requests
```

## Environment Setup

### Required Environment Variables

```env
# Already in your .env (for PostgreSQL MCP)
DATABASE_URL=postgresql://user:password@localhost:5432/db

# Optional - for GitHub MCP
GITHUB_TOKEN=your_github_personal_access_token

# Optional - for Brave Search MCP
BRAVE_API_KEY=your_brave_api_key
```

### Obtaining API Keys

**GitHub Token:**
1. Go to https://github.com/settings/tokens
2. Generate new token (classic)
3. Select scopes: `repo`, `workflow`
4. Add to `.env`: `GITHUB_TOKEN=ghp_...`

**Brave Search API:**
1. Go to https://brave.com/search/api/
2. Sign up for API access
3. Get your API key
4. Add to `.env`: `BRAVE_API_KEY=...`

## Project Rules (CRITICAL)

Based on UIGOD-RULES.MD and documentation:

### 1. **NEVER edit `demo/` folder**
- `demo/` is read-only
- Contains canonical source of components
- Use as reference only

### 2. **ALL development in `starter/` folder**
- Build pages and features in `starter/`
- Import components from `demo/`
- Create wrappers if you need to modify components

### 3. **Use Inter font (NOT San Francisco)**
- Primary font: Inter
- Import via Next.js or Tailwind config

### 4. **Use #00c307 primary color**
- Brand color: #00c307 (vibrant green)
- Predefined color variants available

### 5. **Import UI components from demo/**
```typescript
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
```

## File Locations

```
code-code-bp-ui/
├── .claude/
│   ├── skills/
│   │   ├── ui-components.md          # UI components knowledge
│   │   └── core-architecture.md      # Architecture patterns
│   ├── mcp.json                      # MCP server config
│   └── README.md                     # .claude documentation
│
/home/user/.claude-skills/            # Global skills
├── nextjs-typescript-expert.md       # Next.js expertise
└── react-modern-patterns.md          # React patterns
```

## Development Workflow

### Creating a New Page

1. Ask Claude: "How do I create a new page called 'dashboard'?"
2. Claude will guide you through:
   - Creating the page file
   - Adding route configuration
   - Adding navigation (if needed)
   - Using appropriate components

### Working with Components

1. Ask: "What components can I use for a data table?"
2. Claude will show available options from UI-ELEMENTS.MD
3. Claude will provide import statements and usage examples

### Debugging Issues

1. Claude can now:
   - Search the web for solutions
   - Check Git history
   - Query database
   - Read error logs

## Benefits

### For You
- **Faster Development**: Claude knows your entire component library
- **Better Guidance**: Architecture patterns and best practices built-in
- **Context-Aware**: Claude understands your project structure
- **Consistent Code**: Follows project conventions automatically

### For Your Team
- **Onboarding**: New developers can ask Claude about the project
- **Documentation**: Living, queryable documentation
- **Standards**: Enforces project rules and conventions
- **Knowledge Sharing**: Project knowledge is codified

## Maintenance

### Updating Skills

When you add new components or change architecture:

1. Update `.claude/skills/ui-components.md` with new components
2. Update `.claude/skills/core-architecture.md` with new patterns
3. Commit changes to git

### Adding New Skills

Create new `.md` files in `.claude/skills/` for:
- Testing strategies
- Deployment procedures
- API documentation
- Design system updates

## Troubleshooting

### Skills Not Loading

```bash
# Check file exists
ls -la .claude/skills/

# Verify format (should be .md)
file .claude/skills/*.md

# Check for syntax errors in markdown
```

### MCP Servers Not Working

```bash
# Verify environment variables
echo $DATABASE_URL
echo $GITHUB_TOKEN

# Check MCP config syntax
cat .claude/mcp.json | jq .

# Check Claude Code logs
# (Look in Claude Code output panel)
```

### Claude Doesn't Know About Components

1. Verify skill file exists: `.claude/skills/ui-components.md`
2. Restart Claude Code session
3. Explicitly mention: "According to the ui-components skill..."

## Next Steps

1. **Try It Out**: Ask Claude to help build a feature
2. **Customize**: Add project-specific knowledge to skills
3. **Share**: Team members can use the same setup
4. **Iterate**: Keep skills updated as project evolves

## Examples

### Example 1: Create a Login Page
```
You: "Create a login page using available components"

Claude will:
- Use components from demo/
- Follow authentication patterns from core-architecture.md
- Apply correct routing configuration
- Use Inter font and #00c307 color
- Create in starter/ folder (not demo/)
```

### Example 2: Add New Feature
```
You: "Add a user profile page with editing capabilities"

Claude will:
- Show available form components
- Demonstrate API route creation
- Set up authentication checks
- Apply proper TypeScript types
- Follow project structure
```

### Example 3: Debug Issue
```
You: "The authentication is not working"

Claude can:
- Check BetterAuth configuration
- Review middleware setup
- Search for similar issues
- Check database connection
- Suggest fixes based on project patterns
```

## Summary

You now have a fully configured Claude Code environment with:

✅ Project-specific UI component knowledge
✅ Architecture and pattern documentation
✅ Next.js and React expertise
✅ MCP servers for enhanced capabilities
✅ Global skills for cross-project use

Claude Code is now an expert in your project and can provide contextual, accurate assistance for all development tasks.

---

**Created**: November 13, 2025
**Last Updated**: November 13, 2025
**Version**: 1.0.0
