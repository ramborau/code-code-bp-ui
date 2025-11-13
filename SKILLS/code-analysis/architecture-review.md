# Architecture Review Skill

**Category**: Code Analysis
**Version**: 1.0.0

## Description

Analyzes codebase architecture, identifies design patterns, anti-patterns, and suggests improvements.

## Capabilities

- Maps component relationships and dependencies
- Identifies architectural patterns (MVC, MVVM, Microservices, etc.)
- Detects anti-patterns and code smells
- Analyzes coupling and cohesion
- Generates architecture diagrams
- Suggests refactoring opportunities

## Usage

```bash
# Via MCP
mcp://code-analysis/architecture-review

# Via slash command
/review-architecture [scope]
```

## Parameters

- `scope`: "full" | "module" | "component" (default: "full")
- `focus`: "patterns" | "dependencies" | "performance" | "security" | "all"
- `output_diagrams`: boolean (default: true)

## Example Output

```markdown
## Architecture Overview
Pattern: Layered Architecture with MVC

### Layers Identified
1. Presentation Layer (UI Components)
2. Business Logic Layer (Services)
3. Data Access Layer (Repositories)

## Design Patterns Detected
- ✓ Singleton: ConfigManager
- ✓ Factory: ComponentFactory
- ✓ Observer: EventEmitter

## Anti-Patterns Found
- ⚠️ God Object: UserManager (handles auth, profile, preferences, notifications)
- ⚠️ Circular Dependency: ModuleA ↔ ModuleB
- ⚠️ Tight Coupling: UI components directly accessing database

## Recommendations
1. Split UserManager into separate concerns
2. Introduce dependency injection to break circular dependencies
3. Add repository pattern between UI and data layer
```

## Tools Used

- Dependency graph analysis
- AST parsing
- Pattern detection algorithms
- Complexity metrics (cyclomatic, cognitive)
