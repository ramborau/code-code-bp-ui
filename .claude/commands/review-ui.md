---
description: Review UI code for compliance with UIGOD rules and best practices
---

Review the current UI implementation and check for:

1. **UIGOD Rules Compliance**:
   - Are we editing demo/ folder? (should never happen)
   - Are we using components only from demo/?
   - Are we using only approved fonts (Inter or San Francisco)?
   - Are we using only the primary color #00c307 and existing color tokens?

2. **Next.js App Router Best Practices**:
   - Are server components the default?
   - Is 'use client' used only where necessary?
   - Are we following the file structure conventions?
   - Is TypeScript used strictly with proper types?

3. **Ecme Template Conventions**:
   - Are new pages registered in routes.config?
   - Are navigation items added to navigation.config?
   - Is authentication properly configured?
   - Are meta configurations used appropriately?

4. **Code Quality**:
   - TypeScript errors or warnings?
   - Accessibility issues?
   - Performance concerns?
   - Unused imports or code?

Provide a detailed report with:
- ✅ What's correct
- ⚠️ What needs attention
- ❌ What violates rules
- 💡 Suggestions for improvement

Include file paths and specific line numbers where relevant.
