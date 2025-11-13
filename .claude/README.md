# Claude Configuration for Ecme Template

This folder contains Claude Code configuration for the Ecme UI template project.

## 📁 Structure

```
.claude/
├── commands/           # Slash commands for common tasks
│   ├── review-ui.md   # Review code for UIGOD rules compliance
│   ├── create-page.md # Create new pages following conventions
│   └── check-docs.md  # Search and explain documentation
├── skills/            # Specialized skills for this project
│   ├── ui-development.md      # UI development with UIGOD rules
│   └── documentation-expert.md # Documentation expertise
├── mcp.json           # Model Context Protocol configuration
└── README.md          # This file
```

## 🎯 Skills

### UI Development Skill
Loaded when working on UI components and pages. Enforces:
- UIGOD rules (no editing demo/, approved fonts/colors only)
- Ecme template conventions
- Next.js App Router best practices
- TypeScript strict mode
- Accessibility standards

**Activate**: Automatically loaded when working on UI code

### Documentation Expert Skill
Provides comprehensive knowledge of:
- Complete CORE.MD documentation
- UIGOD-RULES.MD workflow
- Configuration files and their purposes
- Best practices and patterns

**Activate**: Automatically loaded when asking documentation questions

## ⚡ Slash Commands

### `/review-ui`
Reviews current UI implementation for:
- UIGOD rules compliance
- Next.js best practices
- Ecme template conventions
- Code quality and accessibility

### `/create-page`
Guided wizard to create a new page:
- Asks for page details (name, route, type, roles)
- Creates page.tsx in correct location
- Adds route configuration
- Optionally adds to navigation
- Follows all conventions

### `/check-docs`
Search and explain documentation:
- Searches CORE.MD for relevant information
- Provides code examples
- Includes file paths
- Suggests related topics

## 🔌 MCP Servers

### Filesystem Server
- Provides file system access
- Read/write operations
- Directory traversal

### Git Server
- Git repository operations
- Branch management
- Commit history
- Diff viewing

## 🚀 Getting Started

1. **Read the Documentation**:
   - Start with `CORE.MD` for comprehensive guide
   - Check `UIGOD-RULES.MD` for UI development workflow

2. **Use Slash Commands**:
   ```
   /review-ui          # Review current code
   /create-page        # Create a new page
   /check-docs         # Search documentation
   ```

3. **Follow UIGOD Rules**:
   - Never edit `demo/` folder
   - Use components only from `demo/`
   - Use approved fonts (Inter or San Francisco)
   - Use primary color #00c307 only

4. **Develop in `starter/`**:
   - All development happens in `starter/` folder
   - Create wrappers for modified components
   - Follow Next.js App Router conventions

## 📚 Key Documentation Files

- **CORE.MD**: Complete template documentation (1300+ lines)
- **UIGOD-RULES.MD**: UI development rules and workflow
- **UI.MD**: Additional UI documentation
- **UI2.MD**: Theme, build, and deployment docs

## 🎨 Design System

### Colors
- **Primary**: `#00c307` (Vibrant Green)
- **Primary Deep**: `#00a006`
- **Primary Mild**: `#1acd17`
- **Primary Subtle**: `#00c3071a`

### Fonts
- **Primary**: Inter
- **Alternative**: San Francisco (for Apple-style)

### Layouts
- Collapsible Side
- Stacked Side
- Top Bar Classic
- Frameless Side
- Content Overlay
- Blank

## 🏗️ Project Structure

```
demo/           # Read-only component library
starter/        # Your development workspace
documentation/  # Offline documentation
```

## 💡 Tips

1. Always start by reading `demo/` to understand available components
2. Create pages in `starter/` only
3. Use TypeScript strictly
4. Follow accessibility guidelines (WCAG 2.1 AA)
5. Optimize for SSR (Server Components by default)
6. Test in both light and dark modes
7. Ensure responsive design (mobile-first)

## 🆘 Getting Help

- Use `/check-docs` to search documentation
- Ask specific questions about configurations
- Reference CORE.MD for detailed examples
- Check UIGOD-RULES.MD for workflow guidance

---

**Built for the Ecme UI Template**
*TypeScript • Next.js • React • Tailwind CSS • BetterAuth • Zustand*
