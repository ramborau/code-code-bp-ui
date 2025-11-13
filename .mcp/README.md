# MCP Configuration

This directory contains Model Context Protocol (MCP) configuration for branding and modification rules.

## Configuration Files

### config.json
Comprehensive JSON configuration defining:

- **Modification Policy**: Strict rules against unauthorized changes
- **Branding Standards**: Font (San Francisco) and color (#00c307) specifications
- **Core Rules**: Demo folder protection, component sourcing requirements
- **Workflow Steps**: 6-step process for UI development
- **Conventions**: Branching, PR formats, and tagging standards
- **Checklist**: Pre-change verification items
- **Golden Rules**: Three fundamental principles for all work

## Enforcement

The configuration is set to:
- **Level**: Strict
- **Auto Check**: Enabled
- **Fail on Violation**: Enabled

Any violation of these rules should result in rejection of the change.

## Golden Rules

1. **ASK before changing anything** - Never add, edit, or remove without explicit request
2. **San Francisco font ONLY** - No exceptions, no alternatives
3. **Primary color #00c307 ONLY** - Use the exact vibrant green specified

## See Also

- `/UIGOD-RULES.MD` - Master branding document
- `/.claude/skills/branding-rules.md` - Claude Skills version
- `/UI.MD` - Comprehensive UI documentation
