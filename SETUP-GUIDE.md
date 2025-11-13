# Claude Code Setup Guide

Complete setup with MCP, Skills, Agents, and Memory for enhanced development workflows.

## What's Included

### 1. MCP Configuration (`mcp-config.json`)
Model Context Protocol server configuration with:
- **Filesystem Server**: Project file access
- **Memory Server**: Persistent context and knowledge graphs
- **GitHub Server**: Repository operations
- **Brave Search**: Web search capabilities
- **PostgreSQL**: Database operations (optional)
- **Puppeteer**: Browser automation (optional)

### 2. SKILLS Directory
Reusable skill library with examples:
- **Code Analysis**: Dependency audit, architecture review
- **Data Processing**: JSON transformation, data mapping
- **Testing**: Test generation, coverage analysis
- **Deployment**: Docker configuration, CI/CD automation

### 3. .claude Configuration
Complete Claude Code setup:
- **Agents**: 4 specialized autonomous agents
- **Skills**: 3 core agent skills
- **Commands**: 5 slash commands
- **Memory**: Persistent context system

### 4. Memory System
Intelligent context persistence:
- Conversation history across sessions
- Knowledge graph of code relationships
- Semantic search capabilities
- Pattern learning and adaptation

## Quick Start

### 1. Environment Setup

```bash
# Install MCP servers (if using npm-based servers)
npm install -g @modelcontextprotocol/server-filesystem
npm install -g @modelcontextprotocol/server-memory
npm install -g @modelcontextprotocol/server-github

# Set environment variables
export GITHUB_TOKEN="your-github-token"
export BRAVE_API_KEY="your-brave-api-key"  # optional
```

### 2. Claude Code Configuration

If using Claude Desktop, add to your config:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/your/project"]
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

### 3. Verify Setup

```bash
# Check directory structure
ls -la .claude/
ls -la SKILLS/

# Verify MCP config
cat mcp-config.json

# Test memory system
cat .claude/memory/config.json
```

## Available Agents

### Research Agent
**Purpose**: Deep investigation and analysis
**Triggers**: "research", "investigate", "explore"
**Use Cases**:
- Understanding codebase architecture
- Finding implementation patterns
- Technology research

**Example**:
```
"Research how error handling is implemented across the codebase"
```

### Implementation Agent
**Purpose**: Feature development and coding
**Triggers**: "implement", "build", "create"
**Use Cases**:
- Building new features
- Code generation
- Refactoring

**Example**:
```
"Implement user authentication with JWT tokens"
```

### Testing Agent
**Purpose**: Test creation and execution
**Triggers**: "test", "coverage", "generate tests"
**Use Cases**:
- Generating test suites
- Improving coverage
- Creating test data

**Example**:
```
"Generate comprehensive tests for the authentication module"
```

### Security Agent
**Purpose**: Security analysis and hardening
**Triggers**: "security", "audit", "vulnerability"
**Use Cases**:
- Security audits
- Vulnerability detection
- Compliance checking

**Example**:
```
"Perform a security audit of the API endpoints"
```

## Available Commands

### `/review [target]`
Comprehensive code review
```bash
/review src/auth/login.ts
/review --focus=security
```

### `/refactor [target]`
Intelligent refactoring assistance
```bash
/refactor src/services/UserService.ts
/refactor --type=extract-class
```

### `/test [target]`
Test generation
```bash
/test src/utils/calculator.ts
/test --coverage=90 --type=unit
```

### `/debug [issue]`
Systematic debugging
```bash
/debug "Login fails for OAuth users"
/debug src/auth/oauth.ts
```

### `/security-scan [scope]`
Security analysis
```bash
/security-scan
/security-scan dependencies
/security-scan --severity=critical
```

## Memory System Usage

### Automatic Features
- Conversation history maintained automatically
- Knowledge graph built from code analysis
- Patterns learned from interactions
- Semantic search enabled

### Manual Queries
```bash
# Query knowledge graph
/memory query-entities --type=function --name=authenticate

# Semantic search
/memory semantic-search --query="error handling patterns"

# Get context
/memory get-context --file=src/auth/login.ts

# Review learned patterns
/memory list-patterns --category=code_style
```

## Example Workflows

### Complete Feature Development

```bash
# 1. Research existing implementation
"Research the current authentication system"

# 2. Plan and implement
"Implement OAuth2 authentication with Google and GitHub providers"

# 3. Generate tests
/test src/auth/oauth.ts --coverage=90

# 4. Review code
/review src/auth/

# 5. Security check
/security-scan src/auth/ --focus=authentication

# 6. Refactor if needed
/refactor src/auth/ --type=auto
```

### Bug Investigation and Fix

```bash
# 1. Debug the issue
/debug "Users getting 500 error when logging in with OAuth"

# 2. The agent will:
#    - Reproduce the bug
#    - Find root cause
#    - Propose fix
#    - Create regression test

# 3. Review the fix
/review

# 4. Run tests
npm test

# 5. Commit
git add .
git commit -m "Fix OAuth login 500 error"
```

### Security Audit

```bash
# 1. Full security scan
/security-scan

# 2. Check dependencies
/security-scan dependencies

# 3. Find secrets
/security-scan secrets

# 4. Review findings and fix issues

# 5. Re-scan to verify
/security-scan --severity=high
```

### Code Quality Improvement

```bash
# 1. Review current code
/review src/

# 2. Find refactoring opportunities
/refactor src/ --type=auto

# 3. Improve test coverage
/test src/ --coverage=85

# 4. Final review
/review src/
```

## Customization

### Adding Custom Skills

1. Create file in `SKILLS/[category]/[skill-name].md`
2. Define capabilities and usage
3. Reference in `.claude/skills/` if needed for agents
4. Create slash command in `.claude/commands/` for easy access

### Adding Custom Agents

1. Create JSON file in `.claude/agents/[agent-name].json`
2. Define capabilities, tools, and workflow
3. Configure memory settings
4. Set trigger keywords

### Configuring Memory

Edit `.claude/memory/config.json`:
- Adjust retention policies
- Configure knowledge graph
- Set privacy settings
- Tune semantic search

## Best Practices

1. **Use Agents for Complex Tasks**: Let specialized agents handle their domains
2. **Enable Memory for Long Projects**: Helps maintain context over time
3. **Regular Security Scans**: Run before commits and deployments
4. **Test-Driven Development**: Generate tests early and often
5. **Incremental Refactoring**: Use refactoring agent to improve code gradually
6. **Knowledge Capture**: Let memory system learn your patterns and preferences

## Troubleshooting

### MCP Servers Not Working
```bash
# Check if servers are accessible
npx @modelcontextprotocol/server-filesystem --help
npx @modelcontextprotocol/server-memory --help

# Verify environment variables
echo $GITHUB_TOKEN
```

### Memory Not Persisting
```bash
# Check memory config
cat .claude/memory/config.json

# Verify storage directory
ls -la .claude/memory/store/

# Check permissions
chmod -R 755 .claude/memory/
```

### Commands Not Found
```bash
# Verify .claude/commands/ exists
ls -la .claude/commands/

# Check command files
cat .claude/commands/review.md
```

### Agents Not Triggering
- Use explicit trigger keywords
- Check agent configuration files
- Verify agent dependencies are available

## Advanced Features

### Knowledge Graph Queries

The memory system builds a knowledge graph automatically. Query it:

```bash
# Find all functions that call a specific function
/memory query --from=calculateTotal --relation=calls

# Find all files that import a module
/memory query --to=auth/utils --relation=imports

# Find related components
/memory query --entity=LoginForm --relation=related_to
```

### Pattern Learning

The system learns from your interactions:

```bash
# View learned code style patterns
/memory patterns --category=code_style

# View architecture patterns
/memory patterns --category=architecture

# View common bug patterns
/memory patterns --category=common_bugs
```

### Semantic Code Search

Find code by meaning, not just keywords:

```bash
# Find error handling code
/memory search "code that handles errors and logs them"

# Find authentication logic
/memory search "user authentication and session management"

# Find optimization candidates
/memory search "performance critical code paths"
```

## Resources

- **Claude Code Docs**: [docs.claude.com/claude-code](https://docs.claude.com/claude-code)
- **MCP Documentation**: [modelcontextprotocol.io](https://modelcontextprotocol.io)
- **Skills Library**: See `SKILLS/README.md`
- **Agent Configuration**: See `.claude/README.md`
- **Memory System**: See `.claude/memory/README.md`

## Next Steps

1. Configure MCP servers for your environment
2. Try example commands to familiarize yourself
3. Let agents handle complex tasks
4. Review learned patterns periodically
5. Customize skills and agents for your project
6. Enable memory for long-term context

## Support

For issues or questions:
- Check troubleshooting section above
- Review documentation in `.claude/README.md`
- Consult Claude Code documentation
- Check MCP server logs for connectivity issues
