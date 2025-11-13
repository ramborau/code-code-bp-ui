# Claude.ai Skills System - Requirements Generator

## Overview

This skills system transforms **claude.ai** into a powerful requirements generation engine for Claude Code. By using specialized skills, users can create comprehensive, production-ready project documentation that Claude Code can execute flawlessly.

**Workflow**: `claude.ai (planning) → Claude Code (execution)`

---

## Available Skills

### 1. UI-HELPER Skill

**Purpose**: Generate complete UI/UX requirements and project documentation from user prompts.

**What it generates**:
- `PRD.MD` - Comprehensive Product Requirements Document
- `CLAUDE.MD` - Detailed instructions for Claude Code with component specifications
- `.claude/skills/*.md` - Project-specific skill files for Claude Code
- Complete component mapping and design system requirements

**When to use**:
- Starting a new UI/frontend project
- Need to define UI/UX requirements
- Planning component architecture
- Defining design systems and accessibility requirements

**How to invoke on claude.ai**:
```
Use the UI-HELPER skill to create project requirements for [your project description]
```

**Example**:
```
Use the UI-HELPER skill to create project requirements for a modern e-commerce dashboard
with dark mode, real-time analytics, and a sophisticated product management system.
```

---

### 2. TECH Skill

**Purpose**: Generate complete technical architecture and backend requirements from user prompts.

**What it generates**:
- Technical architecture documentation
- Backend API specifications
- Database schema and data models
- Infrastructure and DevOps requirements
- Security and performance requirements
- Integration specifications

**When to use**:
- Starting a new full-stack project
- Need to define backend architecture
- Planning API design and database structure
- Defining technical stack and infrastructure

**How to invoke on claude.ai**:
```
Use the TECH skill to create technical requirements for [your project description]
```

**Example**:
```
Use the TECH skill to create technical requirements for a multi-tenant SaaS platform
with real-time collaboration, user authentication, and webhook integrations.
```

---

## How It Works

### Phase 1: Requirements Generation (claude.ai)

1. User describes their project to claude.ai
2. Claude.ai uses UI-HELPER or TECH skill (or both)
3. Skills generate comprehensive documentation:
   - PRD.MD with business requirements
   - CLAUDE.MD with implementation instructions
   - .claude/skills files with specialized knowledge

### Phase 2: Implementation (Claude Code)

1. User provides generated documentation to Claude Code
2. Claude Code reads:
   - PRD.MD for what to build
   - CLAUDE.MD for how to build it
   - .claude/skills for domain-specific knowledge
3. Claude Code implements with precision

---

## File Structure Generated

```
project/
├── PRD.MD                          # Product Requirements Document
├── CLAUDE.MD                       # Claude Code instructions
├── .claude/
│   ├── skills/
│   │   ├── ui-components.md        # UI component specifications
│   │   ├── design-system.md        # Design system rules
│   │   ├── api-integration.md      # API integration patterns
│   │   └── [custom-skills].md      # Project-specific skills
│   └── mcp/
│       └── servers.json            # MCP server configuration (if needed)
└── [implementation files...]
```

---

## Best Practices

### For UI-HELPER Skill

1. **Be Specific About Design**:
   - Mention design system (Material, Tailwind, custom)
   - Specify color schemes and typography
   - Include accessibility requirements

2. **Define Components Clearly**:
   - List main UI components needed
   - Describe interactions and states
   - Specify responsive behavior

3. **Include References**:
   - Link to design mockups if available
   - Reference similar products
   - Specify inspiration sources

### For TECH Skill

1. **Be Clear About Scale**:
   - Expected user load
   - Data volume estimates
   - Performance requirements

2. **Define Integrations**:
   - Third-party services needed
   - Authentication methods
   - Payment gateways, etc.

3. **Specify Constraints**:
   - Budget limitations
   - Technology preferences
   - Timeline considerations

---

## Combining Skills

For full-stack projects, use **both skills** together:

```
1. First, use TECH skill to define architecture
2. Then, use UI-HELPER skill to define frontend
3. Claude.ai will create unified documentation
4. Claude Code will implement both layers cohesively
```

---

## Example Workflow

### Step 1: User describes project on claude.ai

**User**:
```
Use UI-HELPER skill to create requirements for a task management app
with kanban boards, real-time collaboration, drag-and-drop, dark mode,
and accessibility features. Should use Next.js, TypeScript, and Tailwind CSS.
```

### Step 2: claude.ai generates documentation

The skill creates:
- `PRD.MD` with feature requirements
- `CLAUDE.MD` with Next.js/TypeScript/Tailwind implementation instructions
- `.claude/skills/kanban-components.md` with drag-and-drop specifications
- `.claude/skills/realtime-collaboration.md` with WebSocket patterns
- `.claude/skills/accessibility.md` with WCAG compliance rules

### Step 3: User provides to Claude Code

**User** (to Claude Code):
```
Please implement this task management app following the requirements in PRD.MD
and CLAUDE.MD. Use the skills in .claude/skills for specific implementations.
```

### Step 4: Claude Code implements

Claude Code:
1. Reads all documentation
2. Understands exact requirements
3. Knows which components to use
4. Implements with precision
5. Follows all specified patterns

---

## Skill Versioning

Track skill improvements:

```markdown
## Changelog

### v1.0.0 - Initial Release
- UI-HELPER: Basic UI requirements generation
- TECH: Basic technical architecture generation

### v1.1.0 - Enhanced Component Mapping
- UI-HELPER: Added component relationship diagrams
- UI-HELPER: Enhanced accessibility requirements

### v1.2.0 - API Specifications
- TECH: Added OpenAPI schema generation
- TECH: Enhanced security requirements
```

---

## Contributing New Skills

To add a new skill:

1. Create `[skill-name].md` in `.claude/skills/`
2. Define clear purpose and scope
3. Specify what documentation it generates
4. Include examples and templates
5. Update this SKILLS.MD file

---

## Tips for Maximum Effectiveness

### When Using UI-HELPER:

✅ **DO**:
- Specify exact design system (Tailwind, MUI, custom)
- List all main features and interactions
- Include accessibility requirements
- Mention responsive breakpoints
- Specify animation/transition preferences

❌ **DON'T**:
- Be vague about styling ("make it look nice")
- Forget to mention existing component libraries
- Skip accessibility considerations
- Ignore responsive design

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

## Support

For issues or improvements:
1. Review generated documentation
2. Refine your prompt with more details
3. Re-run the skill with enhanced description
4. Iterate until documentation is comprehensive

---

**Last Updated**: 2024
**Version**: 1.0.0
