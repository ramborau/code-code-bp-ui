# Claude Memory System

This directory contains the memory and context persistence configuration for Claude Code agents.

## Features

### 1. Persistent Context
- Maintains conversation history across sessions
- Auto-summarizes long contexts to stay within token limits
- Retains important information and decisions

### 2. Knowledge Graph
- Automatically extracts entities (files, functions, classes, etc.)
- Maps relationships between code components
- Enables intelligent code navigation and understanding
- Supports queries like "what uses this function?" or "how are these modules related?"

### 3. Semantic Search
- Embeds code and conversation content for similarity search
- Find relevant context based on meaning, not just keywords
- Improves agent responses with relevant historical context

### 4. Learned Patterns
- Recognizes coding patterns and team preferences
- Learns from past refactorings and code reviews
- Adapts to project-specific conventions over time

## Configuration

Edit `config.json` to customize:

- **retention_policy**: "session" | "persistent" | "temporary"
- **max_tokens**: Maximum context window size
- **knowledge_graph.enabled**: Enable/disable knowledge graph extraction
- **semantic_search.enabled**: Enable/disable semantic search
- **privacy settings**: Automatically redact secrets and PII

## Storage

Memory is stored in `.claude/memory/store/`:
- `conversations/`: Chat history and summaries
- `knowledge_graph/`: Entities and relations
- `embeddings/`: Vector embeddings for semantic search
- `patterns/`: Learned patterns and preferences

## Privacy

The system automatically redacts:
- API keys and tokens
- Passwords and secrets
- Personal identifiable information (PII)
- Custom patterns defined in config

## Usage

Memory is automatically used by agents when configured. Access via MCP:

```javascript
// Query knowledge graph
mcp://memory/query-entities?type=function&name=calculateTotal

// Semantic search
mcp://memory/search?query=authentication logic&limit=5

// Get conversation context
mcp://memory/context?window=10

// Add learned pattern
mcp://memory/learn-pattern?category=code_style&pattern={...}
```

## Integration with Agents

Agents with `"memory.enabled": true` in their configuration automatically:
1. Store important information to memory
2. Retrieve relevant context for tasks
3. Build and query the knowledge graph
4. Learn from past interactions

## Maintenance

- Memory is automatically pruned based on retention policy
- Embeddings are incrementally updated
- Knowledge graph is kept up-to-date with code changes
- Summaries are generated when context grows large

## Example Queries

```bash
# Find all functions that call 'authenticate'
/memory query-relations --source authenticate --type calls

# Search for similar code patterns
/memory semantic-search --query "error handling pattern"

# Get context about a specific file
/memory get-context --file src/auth/login.ts

# Review learned patterns
/memory list-patterns --category code_style
```
