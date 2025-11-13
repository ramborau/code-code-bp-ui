# Component Generator Skill

## Overview
This skill assists in generating new UI components following the project's established patterns and conventions.

## Purpose
- Generate boilerplate code for new UI components
- Ensure consistency across component structure
- Follow Next.js and TypeScript best practices
- Integrate with the existing component library architecture

## Usage
When you need to create a new UI component:
1. Specify the component name and type (shared/ui/template)
2. The skill will generate the component file with proper TypeScript types
3. Include example documentation if needed
4. Follow the project's naming conventions

## Capabilities
- Generate React component with TypeScript
- Create component documentation files
- Generate example usage markdown
- Set up component props interfaces
- Follow project folder structure conventions

## Context Required
- Component name
- Component type (ui, shared, template, view)
- Required props and functionality
- Whether it needs form integration
- If it requires internationalization

## Output
- Component TSX file
- Type definitions
- Example documentation (optional)
- Test file structure (optional)

## Dependencies
This skill uses:
- `/scripts/generate-component.py` for component scaffolding
- `/references/component-schema.md` for component structure reference
- `/assets/component-template.tsx` for base component template

## Notes
- All generated components should follow the existing patterns in `/src/components`
- Use proper TypeScript typing
- Include JSDoc comments for props
- Follow the project's styling conventions (Tailwind CSS)
