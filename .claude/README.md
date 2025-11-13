# .claude Folder - Requirements Generation System

This folder contains a powerful **requirements generation system** that transforms claude.ai into a project architect and Claude Code into a precision implementation engine.

---

## 📁 Folder Structure

```
.claude/
├── skills/                    # Specialized skills for claude.ai
│   ├── SKILLS.MD              # Master documentation (READ THIS FIRST)
│   ├── ui-helper.md           # UI/UX requirements generation skill
│   └── tech.md                # Technical architecture generation skill
├── templates/                 # Document templates
│   ├── PRD-TEMPLATE.MD        # Product Requirements Document template
│   └── CLAUDE-TEMPLATE.MD     # Claude Code implementation guide template
├── mcp/                       # Model Context Protocol configuration
│   └── servers.json.example   # MCP servers configuration example
└── README.md                  # This file
```

---

## 🎯 Purpose

This system enables a **two-phase workflow**:

### Phase 1: Requirements Generation (claude.ai)
Use specialized skills on claude.ai to generate comprehensive project documentation from simple user prompts.

### Phase 2: Implementation (Claude Code)
Provide generated documentation to Claude Code for precise, production-ready implementation.

**Workflow**: `claude.ai (planning) → Claude Code (execution)`

---

## 🚀 Quick Start

### Step 1: On claude.ai

Use one or both skills to generate documentation:

**For UI/Frontend Projects:**
```
Use the UI-HELPER skill to create project requirements for [your project description]
```

**Example:**
```
Use the UI-HELPER skill to create project requirements for a modern task management
app with kanban boards, dark mode, drag-and-drop, and real-time collaboration.
Using Next.js, TypeScript, and Tailwind CSS.
```

**For Backend/Technical Projects:**
```
Use the TECH skill to create technical requirements for [your project description]
```

**Example:**
```
Use the TECH skill to create technical requirements for a multi-tenant SaaS platform
with user authentication, real-time updates, webhook integrations, and PostgreSQL database.
```

### Step 2: Review Generated Documentation

claude.ai will generate:
- `PRD.MD` - Product Requirements Document
- `CLAUDE.MD` - Claude Code implementation guide
- `.claude/skills/*.md` - Project-specific skills
- Additional specifications as needed

### Step 3: Save to Your Project

Create these files in your project:
```bash
# In your project root
touch PRD.MD
touch CLAUDE.MD
mkdir -p .claude/skills
```

Copy the generated content into respective files.

### Step 4: Provide to Claude Code

In Claude Code, use this prompt:
```
Please implement this [project type] following the requirements in PRD.MD
and CLAUDE.MD. Use the skills in .claude/skills/ for specific implementations.
```

### Step 5: Claude Code Implements

Claude Code will:
- Read all documentation
- Understand exact requirements
- Know which components to use
- Implement with precision
- Follow all specified patterns

---

## 📚 Available Skills

### 1. UI-HELPER Skill

**File**: `.claude/skills/ui-helper.md`

**Purpose**: Generate complete UI/UX requirements and documentation

**Generates**:
- Product Requirements Document (PRD.MD)
- Claude Code Implementation Guide (CLAUDE.MD)
- Design system specifications
- Component inventory and specifications
- Accessibility requirements (WCAG AA/AAA)
- Responsive design guidelines
- Dark mode implementation
- Animation and interaction patterns

**Best For**:
- Frontend applications
- Design system creation
- UI component libraries
- Landing pages
- Admin dashboards
- SaaS interfaces

**Usage**:
```
Use the UI-HELPER skill to create requirements for [describe your UI project]
```

---

### 2. TECH Skill

**File**: `.claude/skills/tech.md`

**Purpose**: Generate complete technical architecture and backend documentation

**Generates**:
- Technical Architecture Document (TECH-ARCHITECTURE.MD)
- API Specifications (API-SPEC.MD)
- Database Schema (DATABASE.MD)
- Claude Code Technical Guide (CLAUDE-TECH.MD)
- Security requirements
- Performance targets
- Deployment strategy
- Infrastructure specifications

**Best For**:
- Backend APIs
- Full-stack applications
- Microservices architecture
- Database design
- Authentication systems
- Third-party integrations

**Usage**:
```
Use the TECH skill to create requirements for [describe your backend project]
```

---

## 🔧 Using Both Skills Together

For **full-stack projects**, use both skills:

1. **First**, use TECH skill for backend architecture:
```
Use the TECH skill to create backend requirements for [project]
```

2. **Then**, use UI-HELPER skill for frontend:
```
Use the UI-HELPER skill to create frontend requirements for [project]
```

3. claude.ai will create **unified documentation** covering both layers

4. Claude Code will implement **cohesively**

---

## 📋 Templates

### PRD-TEMPLATE.MD

Comprehensive Product Requirements Document template with sections for:
- Executive Summary
- Core Features
- UI/UX Requirements
- Design System
- Component Inventory
- Accessibility
- User Flows
- Success Metrics

### CLAUDE-TEMPLATE.MD

Detailed Claude Code implementation guide template with:
- Technology stack setup
- Project structure
- Design system implementation
- Component specifications
- Page implementations
- State management patterns
- Testing strategy
- Deployment instructions

---

## 🔌 MCP Configuration

### What is MCP?

Model Context Protocol (MCP) enables Claude to access external tools and services.

### Available MCP Servers

See `.claude/mcp/servers.json.example` for configuration examples:

- **filesystem**: Project file access
- **github**: GitHub API integration
- **postgres**: Database access
- **brave-search**: Web search
- **puppeteer**: Browser automation

### Setup MCP

1. Copy example configuration:
```bash
cp .claude/mcp/servers.json.example .claude/mcp/servers.json
```

2. Update with your credentials and paths

3. Configure in your Claude Code settings

---

## 💡 Best Practices

### When Using UI-HELPER:

✅ **DO**:
- Specify design system (Tailwind, MUI, custom)
- List all main features and interactions
- Include accessibility requirements
- Mention responsive breakpoints
- Reference existing component libraries

❌ **DON'T**:
- Be vague about styling
- Skip accessibility considerations
- Forget to mention existing libraries
- Ignore responsive design needs

### When Using TECH:

✅ **DO**:
- Define data models clearly
- Specify authentication methods
- Include API endpoint requirements
- Mention third-party integrations
- Define error handling strategy

❌ **DON'T**:
- Be vague about data relationships
- Forget security requirements
- Skip performance considerations
- Ignore scalability needs

---

## 🎓 Example Workflows

### Example 1: E-commerce Dashboard

**User** (on claude.ai):
```
Use UI-HELPER skill to create requirements for an e-commerce admin dashboard
with product management, order tracking, analytics charts, inventory management,
dark mode, using Next.js and Tailwind CSS.
```

**claude.ai generates**:
- PRD.MD with all features specified
- CLAUDE.MD with Next.js/Tailwind implementation details
- .claude/skills/ecommerce-components.md
- .claude/skills/analytics-charts.md
- .claude/skills/inventory-management.md

**User** (to Claude Code):
```
Please implement this e-commerce dashboard following PRD.MD and CLAUDE.MD
```

**Claude Code**:
- Reads all documentation
- Implements product management
- Creates order tracking system
- Builds analytics charts
- Implements inventory management
- Adds dark mode
- Ensures responsive design

---

### Example 2: SaaS Authentication System

**User** (on claude.ai):
```
Use TECH skill to create requirements for a multi-tenant SaaS authentication
system with email/password, OAuth (Google, GitHub), magic links, role-based
access control, session management, and audit logging. Using PostgreSQL and BetterAuth.
```

**claude.ai generates**:
- TECH-ARCHITECTURE.MD with auth architecture
- API-SPEC.MD with all auth endpoints
- DATABASE.MD with users, sessions, roles tables
- CLAUDE-TECH.MD with implementation guide
- .claude/skills/oauth-integration.md
- .claude/skills/rbac-patterns.md

**User** (to Claude Code):
```
Please implement this authentication system following the generated documentation
```

**Claude Code**:
- Sets up database schema
- Implements all auth methods
- Creates OAuth integrations
- Builds RBAC system
- Adds session management
- Implements audit logging

---

## 🔄 Iterating on Requirements

If generated documentation needs refinement:

**On claude.ai**, request updates:
```
Update the requirements to:
- Change database from PostgreSQL to MongoDB
- Add real-time features with WebSockets
- Include payment gateway integration (Stripe)
- Make it more detailed for [specific area]
```

claude.ai will regenerate the updated documentation.

---

## 📊 Success Criteria

Skills are successful when:

✅ Claude Code can implement **without clarification questions**
✅ All components are **clearly specified**
✅ Design system is **comprehensive and consistent**
✅ Architecture is **well-defined and scalable**
✅ Accessibility requirements are **actionable**
✅ Implementation path is **clear and logical**
✅ Documentation is **production-ready**

---

## 🤝 Contributing

To add a new skill to this system:

1. Create `[skill-name].md` in `.claude/skills/`
2. Define clear purpose and scope
3. Specify what documentation it generates
4. Include examples and templates
5. Update `.claude/skills/SKILLS.MD`
6. Update this README

---

## 📚 Resources

### Official Documentation
- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Prisma**: https://www.prisma.io/docs
- **BetterAuth**: https://better-auth.com

### Skill Documentation
- Read `.claude/skills/SKILLS.MD` for comprehensive skill system guide
- Read individual skill files for specific capabilities

---

## ❓ FAQ

### Q: Can I use both skills for one project?
**A**: Yes! For full-stack projects, use TECH skill for backend and UI-HELPER skill for frontend.

### Q: What if the generated documentation is missing something?
**A**: Just ask claude.ai to add it: "Add [feature] to the requirements"

### Q: Can I customize the skills?
**A**: Yes! Edit the skill files to match your team's specific patterns and preferences.

### Q: Do I need MCP servers?
**A**: No, MCP is optional. Skills work without MCP, but MCP can enhance capabilities.

### Q: What if I'm not using Next.js?
**A**: Specify your framework in the prompt: "using React with Vite" or "using Vue 3"

---

## 🎯 Goals of This System

1. **Eliminate Ambiguity**: Generate crystal-clear requirements
2. **Accelerate Development**: Claude Code implements without back-and-forth
3. **Ensure Quality**: Comprehensive specs lead to better implementations
4. **Maintain Consistency**: Design systems and patterns are well-defined
5. **Enable Collaboration**: Team members understand exactly what's being built

---

## 📝 Version History

### v1.0.0 - Initial Release
- UI-HELPER skill for UI/UX requirements
- TECH skill for technical architecture
- PRD and CLAUDE templates
- MCP configuration examples
- Comprehensive documentation

---

## 🚀 Next Steps

1. **Read** `.claude/skills/SKILLS.MD` for full skill capabilities
2. **Try** generating requirements for a sample project on claude.ai
3. **Review** the generated documentation
4. **Provide** to Claude Code for implementation
5. **Iterate** and refine as needed

---

**Happy Building! 🎉**

Transform your ideas into production-ready code with the power of structured requirements generation.
