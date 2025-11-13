# Claude Code Configuration

This directory contains configuration, skills, agents, and memory setup for Claude Code.

## Directory Structure

```
.claude/
├── agents/           # Autonomous agent configurations
├── commands/         # Slash commands for common operations
├── memory/          # Memory and context persistence
├── skills/          # Reusable agent skills
└── README.md        # This file
```

## Agents

Pre-configured autonomous agents for specialized tasks:

### research-agent.json
Deep research and investigation capabilities
- Web search and documentation analysis
- Codebase exploration
- Pattern recognition
- Comprehensive findings reports

**Usage**: Triggered by keywords like "research", "investigate", "explore"

### implementation-agent.json
Feature development and coding
- Code generation following best practices
- Test-driven development
- Git operations
- Documentation

**Usage**: Triggered by "implement", "build", "create feature"

### testing-agent.json
Test creation and execution
- Unit, integration, and E2E test generation
- Coverage analysis
- Mock and fixture creation
- Test execution

**Usage**: Triggered by "test", "coverage", "generate tests"

### security-agent.json
Security analysis and vulnerability detection
- OWASP Top 10 scanning
- Dependency auditing
- Secret detection
- Compliance checking

**Usage**: Triggered by "security scan", "audit", "vulnerability check"

## Skills

Reusable capabilities that agents can invoke:

### code-reviewer.md
Comprehensive code review skill
- Quality assessment
- Security analysis
- Performance review
- Best practices validation

### refactoring-assistant.md
Code refactoring specialist
- Anti-pattern detection
- Safe transformations
- Code smell identification
- Automated refactoring

### bug-hunter.md
Systematic debugging
- Bug reproduction
- Root cause analysis
- Fix implementation
- Regression testing

## Commands

Slash commands for quick access to common operations:

- `/review [target]` - Code review
- `/refactor [target]` - Refactoring assistance
- `/test [target]` - Test generation
- `/debug [issue]` - Bug investigation
- `/security-scan [scope]` - Security analysis

## Memory System

Persistent context and knowledge management:

- **Conversation History**: Maintains context across sessions
- **Knowledge Graph**: Maps code relationships and entities
- **Semantic Search**: Find relevant context by meaning
- **Learned Patterns**: Adapts to project conventions

See [memory/README.md](memory/README.md) for details.

## MCP Integration

Agents and skills integrate with MCP servers defined in `/mcp-config.json`:

- **filesystem**: Project file access
- **memory**: Persistent context and knowledge graphs
- **github**: Repository operations
- **brave-search**: Web search capabilities
- **postgres**: Database operations
- **puppeteer**: Browser automation

## Usage

### Using Agents

Agents are triggered automatically by keywords or can be invoked explicitly:

```bash
# Auto-triggered
"Research authentication patterns in the codebase"

# Explicit invocation
/agent research-agent "find all API endpoints"
```

### Using Skills

Skills are invoked by agents or through commands:

```bash
# Via command
/review src/auth/

# Via agent (automatic)
# Agent will use appropriate skills based on task
```

### Using Memory

Memory is automatically maintained. Query manually if needed:

```bash
/memory query-entities --type=function
/memory semantic-search --query="error handling"
```

## Configuration

### Agent Configuration Format

```json
{
  "name": "agent-name",
  "description": "What the agent does",
  "type": "autonomous",
  "model": "claude-sonnet-4",
  "capabilities": ["list", "of", "capabilities"],
  "tools": ["available", "tools"],
  "parameters": {
    "setting": "value"
  },
  "memory": {
    "enabled": true,
    "retention": "session|permanent"
  }
}
```

### Adding New Skills

1. Create skill file in `.claude/skills/`
2. Define capabilities and usage
3. Reference in agent configurations
4. Optionally add slash command

### Adding New Commands

1. Create markdown file in `.claude/commands/`
2. Define usage and examples
3. Link to skills or agents
4. Document parameters

## Best Practices

1. **Agent Selection**: Use specialized agents for their domain
2. **Memory Management**: Enable memory for complex tasks
3. **Skill Composition**: Combine skills for complex workflows
4. **Security**: Always run security scans before deployment
5. **Testing**: Generate and run tests for all code changes

## Examples

### Complete Feature Development Workflow

```bash
# 1. Research existing patterns
"Research how authentication is currently implemented"

# 2. Implement feature
/implement "Add OAuth2 login support"

# 3. Generate tests
/test src/auth/oauth.ts --coverage=90

# 4. Review code
/review src/auth/

# 5. Security scan
/security-scan src/auth/ --focus=authentication

# 6. Refactor if needed
/refactor src/auth/ --type=auto
```

### Bug Fix Workflow

```bash
# 1. Debug issue
/debug "Login fails with 500 error for Google OAuth users"

# 2. Implement fix
# (Agent implements based on debug findings)

# 3. Add regression test
/test src/auth/oauth.ts --type=unit

# 4. Verify fix
npm test

# 5. Review changes
/review
```

## Extending

### Custom Agents

Create new agent configurations for project-specific needs:

```json
{
  "name": "deployment-agent",
  "description": "Handles deployment automation",
  "capabilities": ["docker", "kubernetes", "ci-cd"],
  "workflow": ["build", "test", "deploy", "verify"]
}
```

### Custom Skills

Create specialized skills for your domain:

```markdown
# My Custom Skill

**Category**: Custom
**Version**: 1.0.0

## Description
What this skill does...

## Usage
How to use it...
```

## Troubleshooting

### Memory Issues
- Check `.claude/memory/config.json`
- Verify MCP memory server is running
- Clear memory store if corrupted

### Agent Not Triggering
- Check trigger keywords in agent config
- Verify agent is enabled
- Check agent dependencies

### Skill Not Found
- Verify skill file exists in `.claude/skills/`
- Check skill reference in agent config
- Validate skill format

## Resources

- [Claude Code Documentation](https://docs.claude.com/claude-code)
- [MCP Documentation](https://modelcontextprotocol.io)
- [Skills Reference](../SKILLS/README.md)
- [Agent Development Guide](https://docs.claude.com/agents)
