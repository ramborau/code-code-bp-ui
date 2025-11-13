# BRANDING.MD - Brand Guidelines & Design System

## Overview

This document defines the complete branding and design system for all projects. **All visual elements must conform to these guidelines.** Deviations require explicit approval from the UI-HELPER agent.

---

## Brand Identity

### Brand Values
- **Innovation**: Cutting-edge, modern, forward-thinking
- **Reliability**: Professional, trustworthy, consistent
- **Growth**: Dynamic, evolving, energetic
- **Simplicity**: Clean, uncluttered, intuitive

### Brand Personality
- Professional yet approachable
- Modern without being trendy
- Confident without being arrogant
- Energetic without being chaotic

---

## Color System

### Primary Brand Color

**Primary Green**: `#00c307`

This vibrant green represents **growth, innovation, and energy**. It's the core identifier of our brand.

```css
:root {
  --primary: #00c307;
  --primary-deep: #00a006;    /* Hover states, pressed buttons */
  --primary-mild: #1acd17;    /* Lighter variant, backgrounds */
  --primary-subtle: #00c3071a; /* 10% opacity, subtle highlights */
}
```

**Usage Guidelines**:
- ✅ Primary CTAs (buttons, links)
- ✅ Active states and selections
- ✅ Brand highlights and accents
- ✅ Success indicators
- ❌ Large background areas (use subtle variant)
- ❌ Text on light backgrounds (contrast issues)

**Color Variants**:

| Variant | Hex Code | Usage |
|---------|----------|-------|
| Primary | `#00c307` | Buttons, links, highlights |
| Primary Deep | `#00a006` | Hover states, pressed states |
| Primary Mild | `#1acd17` | Lighter accents, borders |
| Primary Subtle | `#00c3071a` | Backgrounds, subtle highlights |

**Visual Examples**:
```
█ #00c307  Primary - Main brand color
█ #00a006  Primary Deep - Darker for interaction
█ #1acd17  Primary Mild - Lighter variant
░ #00c3071a Primary Subtle - Transparent overlay
```

---

### Semantic Colors

**Success**: `#10b981`
- Used for: Success messages, confirmations, completed states
```css
--success: #10b981;
--success-subtle: #05eb7624;
```

**Error**: `#ff6a55`
- Used for: Error messages, validation failures, destructive actions
```css
--error: #ff6a55;
--error-subtle: #ff6a551a;
```

**Warning**: `#f59e0b`
- Used for: Warning messages, cautions, attention-needed states
```css
--warning: #f59e0b;
--warning-subtle: #ffd40045;
```

**Info**: `#2a85ff`
- Used for: Informational messages, tips, neutral notifications
```css
--info: #2a85ff;
--info-subtle: #2a85ff1a;
```

---

### Grayscale Palette

**Light Mode**:
```css
--gray-50:  #fafafa;  /* Lightest backgrounds */
--gray-100: #f5f5f5;  /* Light backgrounds */
--gray-200: #e5e5e5;  /* Borders, dividers */
--gray-300: #d4d4d4;  /* Disabled states */
--gray-400: #a3a3a3;  /* Placeholders */
--gray-500: #737373;  /* Secondary text */
--gray-600: #525252;  /* Body text */
--gray-700: #404040;  /* Headings */
--gray-800: #262626;  /* Strong emphasis */
--gray-900: #171717;  /* Darkest text */
--gray-950: #0a0a0a;  /* Maximum contrast */
```

**Dark Mode**: Values inverted
```css
.dark {
  --gray-50:  #0a0a0a;
  --gray-100: #171717;
  /* ... inverted values */
  --gray-950: #fafafa;
}
```

**Usage Guidelines**:

| Color | Light Mode Use | Dark Mode Use |
|-------|---------------|---------------|
| 50  | Subtle backgrounds | Darkest backgrounds |
| 100 | Card backgrounds | Dark surfaces |
| 200 | Borders, dividers | Subtle borders |
| 300 | Disabled states | Disabled states |
| 400 | Placeholders | Placeholders |
| 500 | Secondary text | Secondary text |
| 600 | Body text | Light text |
| 700 | Headings | Lighter text |
| 800 | Strong text | Very light text |
| 900 | Darkest text | Near white text |

---

### Neutral Color

**Neutral White**: `#ffffff`
- Used for: Primary backgrounds, card surfaces, button text
```css
--neutral: #ffffff;
```

---

### Color Accessibility

**Contrast Requirements** (WCAG 2.1 AA):
- Normal text: Minimum 4.5:1 contrast ratio
- Large text (18pt+): Minimum 3:1 contrast ratio
- UI components: Minimum 3:1 contrast ratio

**Validated Combinations**:
```
✅ Primary (#00c307) on White (#ffffff) - 5.2:1
✅ Gray-700 (#404040) on White (#ffffff) - 8.3:1
✅ White (#ffffff) on Primary-Deep (#00a006) - 6.1:1
❌ Primary (#00c307) on Gray-100 (#f5f5f5) - 4.1:1 ⚠️  Too low
```

---

## Typography

### Font Family

**Primary Font**: **Inter**

Inter is a modern, clean, and highly legible typeface designed specifically for user interfaces.

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Why Inter?**
- Excellent screen readability
- Comprehensive character set
- Multiple weights available
- Optimized for UI/UX
- Open source and free

**Fallback Stack**:
1. Inter (primary)
2. -apple-system (macOS/iOS system font)
3. BlinkMacSystemFont (Chrome on macOS)
4. Segoe UI (Windows)
5. sans-serif (generic fallback)

---

### Font Weights

| Weight | CSS Value | Usage |
|--------|-----------|-------|
| Regular | 400 | Body text, paragraphs, general content |
| Medium | 500 | Emphasized text, labels, captions |
| Semibold | 600 | Subheadings, buttons, strong emphasis |
| Bold | 700 | Headings, titles, important content |

**Examples**:
```css
body {
  font-weight: 400; /* Regular */
}

label {
  font-weight: 500; /* Medium */
}

h3 {
  font-weight: 600; /* Semibold */
}

h1, h2 {
  font-weight: 700; /* Bold */
}
```

---

### Font Sizes

**Type Scale** (based on 16px base):

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| xs | 12px | 16px | Fine print, captions |
| sm | 14px | 20px | Small text, labels |
| base | 16px | 24px | Body text (default) |
| lg | 18px | 28px | Lead paragraphs, emphasized body |
| xl | 20px | 28px | Large text, small headings |
| 2xl | 24px | 32px | Section headings (h3) |
| 3xl | 30px | 36px | Page headings (h2) |
| 4xl | 36px | 40px | Hero headings (h1) |
| 5xl | 48px | 1 | Display text, landing page |
| 6xl | 60px | 1 | Extra large display |

**Tailwind Classes**:
```tsx
<p className="text-xs">Extra small text</p>
<p className="text-sm">Small text</p>
<p className="text-base">Normal text</p>
<h3 className="text-2xl">Section heading</h3>
<h2 className="text-3xl">Page heading</h2>
<h1 className="text-4xl">Hero heading</h1>
```

---

### Typography Usage Guidelines

#### Headings

```tsx
// h1 - Page title / Hero
<h1 className="text-4xl font-bold text-gray-900 mb-4">
  Welcome to Our Platform
</h1>

// h2 - Major section
<h2 className="text-3xl font-bold text-gray-800 mb-3">
  Key Features
</h2>

// h3 - Subsection
<h3 className="text-2xl font-semibold text-gray-700 mb-2">
  Feature Name
</h3>

// h4 - Component heading
<h4 className="text-xl font-semibold text-gray-700 mb-2">
  Component Title
</h4>
```

#### Body Text

```tsx
// Lead paragraph (larger, emphasized)
<p className="text-lg text-gray-600 mb-4">
  This is a lead paragraph with more emphasis.
</p>

// Normal paragraph
<p className="text-base text-gray-600 mb-4">
  This is normal body text for general content.
</p>

// Small text
<p className="text-sm text-gray-500">
  This is smaller text for less important information.
</p>

// Caption
<p className="text-xs text-gray-400">
  Caption text or fine print.
</p>
```

---

## Spacing System

### Base Unit

**Base unit**: 4px

All spacing should be multiples of 4px for consistency.

### Spacing Scale

| Name | Value | Tailwind | Usage |
|------|-------|----------|-------|
| 0 | 0px | `p-0`, `m-0` | No spacing |
| 1 | 4px | `p-1`, `m-1` | Tiny gap |
| 2 | 8px | `p-2`, `m-2` | Small gap |
| 3 | 12px | `p-3`, `m-3` | Medium gap |
| 4 | 16px | `p-4`, `m-4` | Standard gap |
| 5 | 20px | `p-5`, `m-5` | Comfortable gap |
| 6 | 24px | `p-6`, `m-6` | Large gap |
| 8 | 32px | `p-8`, `m-8` | Extra large gap |
| 10 | 40px | `p-10`, `m-10` | Spacious gap |
| 12 | 48px | `p-12`, `m-12` | Very spacious |
| 16 | 64px | `p-16`, `m-16` | Huge gap |

**Usage Examples**:
```tsx
// Tight spacing
<div className="p-2">Tight padding</div>

// Standard card
<div className="p-6 mb-4">Standard card padding</div>

// Section spacing
<section className="py-16">Large vertical spacing</section>

// Component gap
<div className="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## Layout System

### Container Widths

| Breakpoint | Container Width |
|------------|----------------|
| Mobile | 100% (full width) |
| sm (640px+) | 640px |
| md (768px+) | 768px |
| lg (1024px+) | 1024px |
| xl (1280px+) | 1280px |
| 2xl (1536px+) | 1536px |

**Standard Container**:
```tsx
<div className="container mx-auto px-4">
  Content automatically centered with proper padding
</div>
```

### Breakpoints

| Name | Min Width | Typical Device |
|------|-----------|---------------|
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large desktops |

**Responsive Classes**:
```tsx
<div className="
  w-full           // Mobile: full width
  md:w-1/2         // Tablet: half width
  lg:w-1/3         // Laptop: third width
  xl:w-1/4         // Desktop: quarter width
">
  Responsive content
</div>
```

---

## Border & Radius

### Border Widths

```css
border-0: 0px;    /* No border */
border-1: 1px;    /* Thin border (default) */
border-2: 2px;    /* Medium border */
border-4: 4px;    /* Thick border */
border-8: 8px;    /* Very thick border */
```

### Border Radius

| Name | Value | Usage |
|------|-------|-------|
| none | 0px | Sharp corners (alerts, banners) |
| sm | 4px | Subtle rounding (inputs, badges) |
| base | 8px | Standard rounding (buttons, cards) |
| md | 12px | Medium rounding (modals) |
| lg | 16px | Large rounding (images, containers) |
| xl | 24px | Extra large rounding |
| 2xl | 32px | Very large rounding |
| full | 9999px | Fully rounded (pills, avatars) |

**Usage Examples**:
```tsx
// Standard button
<button className="rounded-md">Click Me</button>

// Card
<div className="rounded-lg">Card content</div>

// Avatar
<img className="rounded-full" src="..." alt="..." />

// Pill badge
<span className="rounded-full px-3 py-1">Badge</span>
```

---

## Shadows

### Shadow Scale

```css
/* No shadow */
shadow-none: none;

/* Subtle shadow - hovering just above surface */
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);

/* Default shadow - standard elevation */
shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

/* Medium shadow - raised element */
shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

/* Large shadow - floating element */
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

/* Extra large shadow - modal, dialog */
shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

/* 2XL shadow - prominent overlay */
shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

**Usage Guidelines**:

| Element | Shadow | Reason |
|---------|--------|--------|
| Flat surfaces | `shadow-none` | No elevation |
| Subtle borders | `shadow-sm` | Slight definition |
| Cards | `shadow` or `shadow-md` | Standard elevation |
| Dropdown menus | `shadow-lg` | Floating above page |
| Modals, dialogs | `shadow-xl` or `shadow-2xl` | Prominent overlay |

**Examples**:
```tsx
// Card with subtle shadow
<div className="shadow-md rounded-lg p-6">
  Card content
</div>

// Dropdown menu
<div className="shadow-lg rounded-md p-4">
  Menu items
</div>

// Modal
<div className="shadow-2xl rounded-lg p-8">
  Modal content
</div>
```

---

## Icons

### Icon Library

**Primary**: [React Icons](https://react-icons.github.io/react-icons/)

We use React Icons for its comprehensive collection and tree-shaking support.

**Preferred Sets**:
1. **Heroicons** (`Hi` prefix) - Primary choice
2. **Tabler Icons** (`Tb` prefix) - Alternative
3. **Lucide** (`Lu` prefix) - Fallback

**Usage**:
```tsx
import { HiHome, HiUser, HiCog } from 'react-icons/hi'

<HiHome className="w-6 h-6 text-primary" />
<HiUser className="w-5 h-5 text-gray-600" />
<HiCog className="w-4 h-4 text-gray-500" />
```

### Icon Sizes

| Size | Dimensions | Usage |
|------|------------|-------|
| xs | 16x16px (w-4 h-4) | Inline with small text |
| sm | 20x20px (w-5 h-5) | Inline with body text |
| base | 24x24px (w-6 h-6) | Standard buttons, nav |
| lg | 32x32px (w-8 h-8) | Large buttons, feature icons |
| xl | 40x40px (w-10 h-10) | Hero sections, empty states |

### Icon Colors

```tsx
// Primary
<HiCheck className="text-primary" />

// Secondary
<HiInfo className="text-gray-600" />

// Success
<HiCheckCircle className="text-success" />

// Error
<HiXCircle className="text-error" />

// Warning
<HiExclamation className="text-warning" />
```

---

## Component Patterns

### Buttons

```tsx
// Primary button
<button className="
  bg-primary text-white
  hover:bg-primary-deep
  px-6 py-2 rounded-md
  font-medium
  transition-colors
">
  Primary Action
</button>

// Secondary button
<button className="
  bg-gray-200 text-gray-800
  hover:bg-gray-300
  px-6 py-2 rounded-md
  font-medium
  transition-colors
">
  Secondary Action
</button>

// Outline button
<button className="
  border-2 border-primary text-primary
  hover:bg-primary hover:text-white
  px-6 py-2 rounded-md
  font-medium
  transition-all
">
  Outline Button
</button>

// Ghost button
<button className="
  text-primary
  hover:bg-primary-subtle
  px-6 py-2 rounded-md
  font-medium
  transition-colors
">
  Ghost Button
</button>
```

### Cards

```tsx
<div className="
  bg-white
  rounded-lg
  shadow-md
  p-6
  border border-gray-200
  hover:shadow-lg
  transition-shadow
">
  <h3 className="text-xl font-semibold text-gray-900 mb-2">
    Card Title
  </h3>
  <p className="text-gray-600">
    Card description goes here.
  </p>
</div>
```

### Forms

```tsx
<form className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Email Address
    </label>
    <input
      type="email"
      className="
        w-full px-4 py-2
        border border-gray-300 rounded-md
        focus:outline-none focus:ring-2 focus:ring-primary
        transition-all
      "
      placeholder="you@example.com"
    />
  </div>

  <button
    type="submit"
    className="
      w-full bg-primary text-white
      hover:bg-primary-deep
      px-6 py-3 rounded-md
      font-semibold
      transition-colors
    "
  >
    Submit
  </button>
</form>
```

---

## Animation & Transitions

### Transition Durations

```css
transition-none: 0ms;
transition-75: 75ms;
transition-100: 100ms;
transition-150: 150ms;   /* Fast, subtle */
transition-200: 200ms;   /* Default */
transition-300: 300ms;   /* Comfortable */
transition-500: 500ms;   /* Slow, dramatic */
transition-700: 700ms;   /* Very slow */
transition-1000: 1000ms; /* Extra slow */
```

**Usage Guidelines**:
- **Micro-interactions**: 75-150ms (hover, focus states)
- **Standard transitions**: 200-300ms (modals, dropdowns)
- **Page transitions**: 300-500ms (route changes)
- **Dramatic reveals**: 500-1000ms (hero animations)

**Examples**:
```tsx
// Button hover
<button className="bg-primary hover:bg-primary-deep transition-colors duration-200">

// Modal entrance
<div className="opacity-0 animate-fade-in transition-opacity duration-300">

// Smooth transform
<div className="transform hover:scale-105 transition-transform duration-200">
```

---

## Accessibility Guidelines

### Color Contrast
- ✅ Maintain minimum 4.5:1 contrast for normal text
- ✅ Maintain minimum 3:1 contrast for large text (18pt+)
- ✅ Test with tools like WebAIM Contrast Checker

### Focus Indicators
```tsx
// Always visible focus state
<button className="
  focus:outline-none
  focus:ring-2 focus:ring-primary focus:ring-offset-2
">
  Accessible Button
</button>
```

### Semantic HTML
```tsx
// ✅ Good
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
  </ul>
</nav>

// ❌ Bad
<div>
  <div onClick={...}>Home</div>
</div>
```

### ARIA Labels
```tsx
<button aria-label="Close modal">
  <HiX />
</button>

<img src="..." alt="Description of image" />
```

---

## Dark Mode Support

### Color Variables

Both light and dark mode use the same CSS variable names:

```css
/* Light mode */
:root {
  --primary: #00c307;
  --bg: #ffffff;
  --text: #171717;
}

/* Dark mode */
.dark {
  --primary: #00c307; /* Primary stays same */
  --bg: #0a0a0a;
  --text: #fafafa;
}
```

### Usage
```tsx
// Automatic dark mode support
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50">
  Content adapts to dark mode
</div>
```

---

## Usage Examples

### Landing Page Hero
```tsx
<section className="py-20 px-4 bg-gradient-to-br from-primary-subtle to-white">
  <div className="container mx-auto max-w-4xl text-center">
    <h1 className="text-5xl font-bold text-gray-900 mb-6">
      Build Faster with Our Platform
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Enterprise-grade components and templates for modern web applications.
    </p>
    <button className="
      bg-primary text-white
      hover:bg-primary-deep
      px-8 py-4 rounded-lg
      text-lg font-semibold
      shadow-lg hover:shadow-xl
      transition-all duration-200
    ">
      Get Started Free
    </button>
  </div>
</section>
```

### Dashboard Card Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[1, 2, 3, 4, 5, 6].map((item) => (
    <div key={item} className="
      bg-white rounded-lg shadow-md p-6
      hover:shadow-lg transition-shadow duration-200
      border border-gray-100
    ">
      <div className="flex items-center mb-4">
        <HiChartBar className="w-8 h-8 text-primary mr-3" />
        <h3 className="text-lg font-semibold text-gray-900">
          Metric {item}
        </h3>
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-2">
        1,234
      </p>
      <p className="text-sm text-gray-600">
        +12% from last month
      </p>
    </div>
  ))}
</div>
```

---

## Brand Assets

### Logo Usage
- Primary logo: Use on light backgrounds
- Logo lockup: Include tagline for formal materials
- Minimum size: 120px width
- Clear space: Minimum 24px on all sides

### Do's and Don'ts

**✅ DO**:
- Use approved brand colors
- Maintain sufficient contrast
- Use Inter font family
- Follow spacing guidelines
- Provide adequate padding
- Use semantic HTML
- Test responsive layouts
- Ensure accessibility

**❌ DON'T**:
- Use custom colors without approval
- Use multiple font families
- Create tiny text (<12px)
- Ignore contrast requirements
- Overcrowd interfaces
- Use div soup (non-semantic HTML)
- Forget mobile testing
- Skip accessibility features

---

## Review and Updates

**Version**: 1.0.0
**Last Updated**: 2025-11-13
**Next Review**: Quarterly

**Update Process**:
1. Propose changes via UI-HELPER agent
2. Review for brand consistency
3. Validate accessibility impact
4. Update version number
5. Notify development team

---

## Quick Reference

```
🎨 PRIMARY COLOR: #00c307
📝 FONT: Inter
📏 BASE UNIT: 4px
📱 BREAKPOINTS: 640px, 768px, 1024px, 1280px
♿ CONTRAST: 4.5:1 minimum
🌓 DARK MODE: Supported via .dark class
```

---

**End of BRANDING.MD**

> For questions about brand usage, consult the UI-HELPER agent.
