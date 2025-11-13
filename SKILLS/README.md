# SKILLS Directory

This directory contains reusable skills and capabilities that can be invoked by Claude Code agents.

## Structure

- **code-analysis/**: Skills for analyzing codebases, detecting patterns, and code quality
- **data-processing/**: Skills for data transformation, parsing, and manipulation
- **testing/**: Skills for test generation, execution, and coverage analysis
- **deployment/**: Skills for CI/CD, deployment automation, and infrastructure

## Usage

Skills can be invoked by:
1. Direct reference in `.claude/skills/` configurations
2. MCP server integration
3. Slash commands in `.claude/commands/`

## Creating New Skills

Each skill should include:
- Clear description and purpose
- Input/output specifications
- Usage examples
- Dependencies and prerequisites
