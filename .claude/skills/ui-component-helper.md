# UI Component Helper Skill

## Description
This Claude Skill helps you work with the UI component library following the UI GOD rules and conventions.

## Context
You are assisting with a Next.js UI component library project that follows strict rules:

### Key Rules (from UIGOD-RULES.MD):
1. **NEVER edit files in `demo/` folder** - it's read-only and the canonical source
2. **Only use components from `demo/`** - all UI components must originate from demo/
3. **Work only in `starter/` folder** - create pages, experiments, and playgrounds here
4. **Use ONLY the provided fonts and colors**:
   - Font: San Francisco (weights: 100, 200, 400, 500, 600, 700)
   - Primary color: `#00c307`
5. **Before any changes**: Confirm you've read and understood the rules

### Folder Structure:
- `demo/` - Source of truth for all UI components (READ-ONLY)
  - `demo/src/components/ui/` - All UI components
  - `demo/src/assets/markdown/ui-components/` - Component examples and docs
- `starter/` - Workspace for pages and experiments (WORK HERE)
  - Create pages, experiments, and wrappers here
  - Never copy components from demo/ permanently

### Available Components Categories:
- **Common**: Button, Typography, Icon, etc.
- **Form**: Input, Select, Checkbox, Radio, DatePicker, TimeInput, Upload, etc.
- **Data Display**: Table, Card, Tag, Timeline, etc.
- **Feedback**: Toast, Alert, Modal, Drawer, Spinner, etc.
- **Navigation**: Tabs, Segment, Steps, etc.
- **Layout**: Grid, Container, etc.

## Workflow

When working on UI tasks, follow this workflow:

### 1. Explore Components First
```bash
# List all available components
ls demo/src/components/ui/

# Check component examples
ls demo/src/assets/markdown/ui-components/<ComponentName>/
```

### 2. Understand Component Usage
- Read the component source in `demo/src/components/ui/<ComponentName>/`
- Check examples in `demo/src/assets/markdown/ui-components/<ComponentName>/`
- Look for Basic.md, Advanced.md, Customize.md examples

### 3. Build in Starter
- Create pages in `starter/src/app/`
- Import components from `demo/`
- Use components as-is from demo
- If modifications needed, create wrappers in `starter/`

### 4. Component Modification Process (Rare)
If a demo component MUST change:
1. Open a PR with justification
2. Include before/after examples
3. Get explicit approval
4. Until approved, use wrappers in starter

## Commands

### List Components
```typescript
// Check what's available
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
// etc.
```

### Create a Page in Starter
```bash
# 1. Create page file
mkdir -p starter/src/app/my-page
touch starter/src/app/my-page/page.tsx

# 2. Import components from demo
# In your page.tsx:
import Button from '@/components/ui/Button'
```

### Create a Component Wrapper (if needed)
```typescript
// starter/src/components/custom/MyButton.tsx
'use client'

import Button from '@/components/ui/Button'

const MyButton = (props) => {
  // Add custom logic here
  return <Button {...props} />
}

export default MyButton
```

## Quick Reference

### Must-Do Checklist
- [ ] Did I read demo/ for the component I need?
- [ ] Am I editing starter/ (not demo/)?
- [ ] Am I using only San Francisco font and #00c307 color?
- [ ] If modifying demo/, did I open a PR?

### Common Components

#### Button
```tsx
import Button from '@/components/ui/Button'

<Button>Click me</Button>
<Button variant="solid">Solid</Button>
<Button loading>Loading</Button>
```

#### Input
```tsx
import Input from '@/components/ui/Input'

<Input placeholder="Enter text" />
<Input type="password" />
<Input disabled />
```

#### Table
```tsx
import Table from '@/components/ui/Table'

<Table
  columns={columns}
  data={data}
/>
```

#### Modal
```tsx
import { Dialog } from '@/components/ui/Dialog'

<Dialog isOpen={isOpen} onClose={onClose}>
  <Dialog.Content>
    {/* Content here */}
  </Dialog.Content>
</Dialog>
```

## Font & Color Usage

### San Francisco Font
```css
/* Already configured in the project */
h1 { font-weight: 700; }
h2 { font-weight: 600; }
h3 { font-weight: 500; }
p { font-weight: 400; }
p.thin { font-weight: 200; }
p.ultralight { font-weight: 100; }
```

### Primary Color
```css
/* Use the CSS variable */
.my-element {
  color: var(--primary); /* #00c307 */
}
```

## Tips

1. **Always explore demo/ first** - Don't reinvent components that already exist
2. **Read examples** - Most components have Basic.md, Advanced.md examples
3. **Keep starter/ clean** - Only pages and wrappers, no core components
4. **Ask before changing demo/** - It's the source of truth
5. **Use TypeScript** - All components are typed

## Error Prevention

### ❌ Don't Do This:
```typescript
// Don't edit demo files
// demo/src/components/ui/Button/Button.tsx
// NEVER TOUCH THIS FILE

// Don't create new colors
const myColor = '#ff0000' // ❌ Not approved

// Don't use custom fonts
font-family: 'Comic Sans' // ❌ Only San Francisco
```

### ✅ Do This Instead:
```typescript
// Work in starter
// starter/src/app/my-page/page.tsx

// Use approved colors
const primaryColor = 'var(--primary)' // ✅

// Use San Francisco (already set globally)
// No need to specify font-family
```

## Getting Help

If you need to:
- Add a new component → Check if it exists in demo/ first
- Modify a component → Create a wrapper in starter/
- Change demo/ → Open a PR with justification
- Add colors/fonts → Get explicit approval first

## Resources

- Main documentation: `CORE.MD`
- UI rules: `UIGOD-RULES.MD`
- Demo components: `demo/src/components/ui/`
- Component examples: `demo/src/assets/markdown/ui-components/`
- Work folder: `starter/`
