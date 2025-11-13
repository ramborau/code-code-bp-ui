# Create UI Component Command

Create a new UI component with proper structure and TypeScript types.

## Usage

This command will:
1. Ask for component name
2. Ask for component type (ui/shared/template/view)
3. Create component folder structure
4. Generate component files with proper TypeScript types
5. Set up exports

## What gets created

For a component named "Card" in the "ui" category:

```
src/components/ui/Card/
├── Card.tsx           # Main component
├── types.ts           # TypeScript types
└── index.tsx          # Export file
```

## Component Template

The generated component will include:
- Proper TypeScript typing
- forwardRef for ref support
- className merging support
- Variant and size support
- Accessibility attributes
- Dark mode support

## Follow-up

After creating the component:
- Import it where needed
- Add to component documentation if applicable
- Test in both light and dark modes
