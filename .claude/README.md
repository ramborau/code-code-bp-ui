# Claude Code Configuration

This directory contains skills and MCP (Model Context Protocol) configurations for Claude Code.

## Directory Structure

```
.claude/
├── skills/               # Claude Code skills
│   ├── ui-components.md      # UI component library knowledge
│   └── core-architecture.md  # Core architecture & patterns
├── mcp.json             # MCP server configurations
└── README.md            # This file
```

## Skills

### ui-components.md
Expert knowledge about the Ecme UI component library including:
- All available components (100+ components)
- Utilities and hooks
- Helper functions
- Component location and import patterns
- Font (Inter) and color (#00c307) guidelines

### core-architecture.md
Comprehensive architecture documentation including:
- Technology stack (Next.js, TypeScript, Tailwind, BetterAuth, Zustand)
- Folder structure
- Routing configuration
- Authentication patterns
- State management
- API routes
- Theme configuration
- Best practices

## MCP Servers

The `mcp.json` file configures the following Model Context Protocol servers:

### 1. Filesystem
- **Purpose**: Provides filesystem access to the project directory
- **Command**: `@modelcontextprotocol/server-filesystem`
- **Usage**: Read/write project files

### 2. Git
- **Purpose**: Git version control operations
- **Command**: `@modelcontextprotocol/server-git`
- **Usage**: Commit, branch, merge, and other Git operations

### 3. GitHub
- **Purpose**: GitHub API access
- **Command**: `@modelcontextprotocol/server-github`
- **Environment**: Requires `GITHUB_TOKEN`
- **Usage**: Create issues, PRs, manage repositories

### 4. PostgreSQL
- **Purpose**: Database access
- **Command**: `@modelcontextprotocol/server-postgres`
- **Environment**: Uses `DATABASE_URL` from .env
- **Usage**: Query and manage database

### 5. Brave Search
- **Purpose**: Web search capabilities
- **Command**: `@modelcontextprotocol/server-brave-search`
- **Environment**: Requires `BRAVE_API_KEY`
- **Usage**: Search the web for documentation and solutions

### 6. Fetch
- **Purpose**: HTTP requests to web APIs
- **Command**: `@modelcontextprotocol/server-fetch`
- **Usage**: Fetch data from external APIs

## Environment Variables

To use all MCP servers, add these to your environment:

```env
# Optional - for GitHub MCP
GITHUB_TOKEN=your_github_personal_access_token

# Optional - for Brave Search MCP
BRAVE_API_KEY=your_brave_api_key

# Required for PostgreSQL MCP (should already exist)
DATABASE_URL=postgresql://user:password@localhost:5432/db
```

## Usage

Claude Code automatically loads:
1. Skills from `.claude/skills/` directory
2. MCP servers from `.claude/mcp.json`

### Activating Skills

Skills are automatically available to Claude Code. You can reference them by asking Claude about:
- "What UI components are available?"
- "How do I create a new page?"
- "Show me the authentication pattern"
- "What's the project structure?"

### Using MCP Servers

MCP servers run automatically when Claude Code needs them. They provide:
- File operations within the project
- Git version control
- Database queries
- Web searches
- HTTP requests

## Customization

### Adding New Skills

Create a new `.md` file in `.claude/skills/`:

```markdown
# My Custom Skill

Description of the skill and what it helps with.

## Knowledge Area 1
Content...

## Knowledge Area 2
Content...
```

### Adding MCP Servers

Edit `.claude/mcp.json` and add a new server:

```json
{
  "mcpServers": {
    "your-server-name": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-name"],
      "description": "What this server does"
    }
  }
}
```

## Best Practices

1. **Keep skills focused**: Each skill should cover a specific domain
2. **Update regularly**: Keep skills in sync with project changes
3. **Use clear headings**: Make skills easy to navigate
4. **Include examples**: Show practical usage patterns
5. **Document patterns**: Capture common solutions and best practices

## Troubleshooting

### Skills not loading
- Ensure files are in `.claude/skills/` directory
- Check file extension is `.md`
- Verify markdown syntax is valid

### MCP servers not working
- Check MCP server package names are correct
- Verify environment variables are set
- Ensure required dependencies are installed
- Check MCP server logs in Claude Code output

## Additional Resources

- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code)
- [MCP Documentation](https://modelcontextprotocol.io/)
- [Ecme Documentation](./UIGOD-RULES.MD)
