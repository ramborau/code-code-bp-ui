# Dependency Audit Skill

**Category**: Code Analysis
**Version**: 1.0.0

## Description

Analyzes project dependencies for security vulnerabilities, outdated packages, and licensing issues.

## Capabilities

- Scans package.json, requirements.txt, Cargo.toml, go.mod, etc.
- Checks for known vulnerabilities (CVEs)
- Identifies outdated dependencies
- Analyzes license compatibility
- Suggests safe upgrade paths

## Usage

```bash
# Via MCP
mcp://code-analysis/dependency-audit

# Via slash command
/audit-deps
```

## Parameters

- `scan_type`: "security" | "updates" | "licenses" | "all" (default: "all")
- `severity_threshold`: "low" | "medium" | "high" | "critical" (default: "medium")
- `output_format`: "markdown" | "json" | "html" (default: "markdown")

## Example Output

```markdown
## Security Vulnerabilities
- express@4.16.0 (HIGH): CVE-2024-XXXX - Prototype pollution
- lodash@4.17.15 (CRITICAL): CVE-2024-YYYY - Command injection

## Outdated Packages
- react: 17.0.2 → 18.2.0
- typescript: 4.5.0 → 5.3.3

## License Issues
- package-xyz: GPL-3.0 (incompatible with MIT project)
```

## Dependencies

- npm audit / yarn audit
- OWASP Dependency-Check
- License checker tools
