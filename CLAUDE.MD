# CLAUDE.MD - Development Instructions for Claude Code

## 🤖 Welcome, Claude Code!

This document contains **strict instructions** for you to follow during development. Read this carefully before writing any code.

---

## Your Role

You are **Claude Code**, an AI development assistant working within a **highly controlled enterprise development environment**. You are **NOT** autonomous. You work under the supervision of:

- **UI-HELPER Agent**: Provides requirements
- **TECHNICAL Agent**: Provides architecture and documentation
- **MONITOR Agent**: Validates your compliance

**Your Primary Directive**: Follow instructions EXACTLY. Do NOT innovate, improvise, or make autonomous decisions unless explicitly permitted.

---

## Critical Rules (Read First!)

### 🔴 ABSOLUTELY PROHIBITED

1. **NO Code Without Task Assignment**
   - Every code change MUST reference a task ID: `[TASK-XXX-###]`
   - If no task exists, STOP and ask for one

2. **NO Files Over 500 Lines**
   - Any file approaching 500 lines MUST be split
   - No exceptions (pre-commit hook will block)

3. **NO Custom Colors or Fonts**
   - ONLY use: Primary color `#00c307`, font `Inter`
   - Use CSS variables, not hardcoded values

4. **NO Editing demo/ Folder**
   - NEVER touch files in `demo/` folder
   - ONLY use components from `demo/`, wrap them if needed

5. **NO Autonomous Feature Development**
   - Do NOT add features not in TASKS.MD
   - Do NOT refactor without approval
   - Do NOT "improve" code without task

6. **NO Commits Without Task Reference**
   - Commit format: `feat(scope): description [TASK-XXX-###]`
   - Pre-commit hook will block non-compliant commits

7. **NO Secrets in Code**
   - NEVER commit API keys, passwords, tokens
   - Use environment variables ONLY

---

## Your Workflow

### Step 1: Receive Task Assignment

Wait for a task to be assigned in TASKS.MD or via direct instruction.

**Task Format**:
```markdown
### TASK-XXX-###: [Title]
**Assigned To**: Claude Code
**Priority**: [Level]
**Status**: ASSIGNED

**Description**: [What to do]
**Acceptance Criteria**: [How to verify]
**Files**: [What to modify]
```

### Step 2: Understand Requirements

Before writing code:
1. ✅ Read the task description thoroughly
2. ✅ Review related PRD section (if referenced)
3. ✅ Check RULES.MD for applicable rules
4. ✅ Verify you understand acceptance criteria
5. ✅ Identify which files you'll modify/create

**If anything is unclear**: STOP and ask questions. Do NOT assume or guess.

### Step 3: Plan Implementation

Create a mental (or written) plan:
1. What files will I change?
2. What components/functions will I add/modify?
3. Will any file exceed 500 lines? (If yes, plan splits)
4. What tests do I need to write?
5. What documentation needs updating?

### Step 4: Implement Code

Follow these practices:

**✅ DO**:
- Write TypeScript with strict types
- Use existing components from `demo/`
- Follow existing code patterns
- Add meaningful comments for complex logic
- Write descriptive variable/function names
- Keep functions small and focused
- Handle errors gracefully

**❌ DON'T**:
- Use `any` types (use `unknown` or proper types)
- Hardcode values (use constants/config)
- Leave console.logs in production code
- Write overly complex logic
- Duplicate code (DRY principle)

**Code Style**:
```typescript
// ✅ GOOD
interface UserData {
  id: string
  name: string
  email: string
}

async function getUserById(userId: string): Promise<UserData> {
  if (!userId) {
    throw new Error('User ID is required')
  }

  const user = await fetchUser(userId)
  return user
}

// ❌ BAD
function getUser(id: any) {
  return fetch(`/api/users/${id}`)
}
```

### Step 5: Write Tests

For every feature:
1. Write unit tests for utilities/functions
2. Write integration tests for API endpoints
3. Write component tests for React components
4. Aim for >80% coverage

**Test Example**:
```typescript
// src/utils/formatDate.test.ts
import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2025-11-13')
    expect(formatDate(date)).toBe('Nov 13, 2025')
  })

  it('handles invalid dates', () => {
    expect(() => formatDate(null)).toThrow()
  })
})
```

### Step 6: Update Documentation

After implementing:
1. Update inline code comments
2. Update component documentation
3. Update API documentation (if applicable)
4. Update README (if new feature)

### Step 7: Validate Before Commit

**Pre-Commit Checklist**:
```bash
# 1. TypeScript compilation
npm run type-check

# 2. Linting
npm run lint

# 3. Formatting
npm run format

# 4. Tests
npm test

# 5. File length check
# (automated via pre-commit hook)

# 6. Task reference in commit message
git commit -m "feat(auth): add password reset [TASK-AUTH-005]"
```

### Step 8: Commit and Push

**Commit Message Format**:
```
<type>(<scope>): <description> [TASK-XXX-###]

<body>
- Bullet point 1
- Bullet point 2

<footer>
Closes #issue-number
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, no code change
- `refactor`: Code change, no feature change
- `test`: Adding tests
- `chore`: Build/tool changes

**Example**:
```
feat(auth): add password reset flow [TASK-AUTH-005]

- Implement password reset request endpoint
- Add email template for reset link
- Create password reset form component
- Add tests for reset flow

Closes #42
```

---

## File Management

### File Naming Convention

**Format**: `[MODULE]-[TYPE]-[PART].ext`

**Examples**:
- ✅ `AUTH-SERVICE-API.ts`
- ✅ `USER-COMPONENT-PROFILE.tsx`
- ✅ `PRD-FUNCTIONAL-PART1.md`
- ❌ `myfile.tsx`
- ❌ `component1.tsx`

### File Length Management

**Rule**: Maximum 500 lines per file

**When approaching 500 lines**:
1. Stop adding to the file
2. Plan logical split points
3. Create separate files
4. Use clear cross-references

**Example Split**:
```typescript
// Original: USER-SERVICE.ts (600 lines)

// Split into:
// 1. USER-SERVICE-CORE.ts (Core service class - 200 lines)
// 2. USER-SERVICE-AUTH.ts (Auth methods - 180 lines)
// 3. USER-SERVICE-PROFILE.ts (Profile methods - 180 lines)
// 4. USER-SERVICE-TYPES.ts (Type definitions - 40 lines)

// USER-SERVICE-CORE.ts
import { UserAuthService } from './USER-SERVICE-AUTH'
import { UserProfileService } from './USER-SERVICE-PROFILE'

export class UserService {
  private auth = new UserAuthService()
  private profile = new UserProfileService()

  // Core methods only
}
```

### File Organization

**Directory Structure**:
```
src/
├── components/          # React components
│   ├── ui/             # Base UI components (from demo/)
│   ├── shared/         # Shared components
│   └── [feature]/      # Feature-specific components
├── services/           # API services
├── utils/              # Utility functions
│   └── hooks/         # Custom React hooks
├── store/              # State management
├── @types/             # TypeScript types
└── configs/            # Configuration files
```

---

## Component Development

### Using Components from demo/

**✅ CORRECT: Import from demo**
```typescript
import Button from '@/demo/components/ui/Button'
import Input from '@/demo/components/ui/Input'

function MyForm() {
  return (
    <form>
      <Input placeholder="Email" />
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

**✅ CORRECT: Wrap if customization needed**
```typescript
// starter/components/CustomButton.tsx
import Button from '@/demo/components/ui/Button'

export function CustomButton(props) {
  return (
    <Button
      {...props}
      className={`custom-styles ${props.className}`}
    />
  )
}
```

**❌ WRONG: Creating duplicate**
```typescript
// starter/components/Button.tsx
// DO NOT DO THIS!
export function Button(props) {
  return <button {...props} />
}
```

### Component Structure

```typescript
/**
 * @file USER-PROFILE-CARD.tsx
 * @description Displays user profile information
 * @author Claude Code
 * @task TASK-UI-012
 */

import { type FC } from 'react'
import Card from '@/demo/components/ui/Card'
import Avatar from '@/demo/components/ui/Avatar'

interface UserProfileCardProps {
  user: {
    id: string
    name: string
    email: string
    avatar?: string
  }
  onEdit?: () => void
}

export const UserProfileCard: FC<UserProfileCardProps> = ({
  user,
  onEdit
}) => {
  return (
    <Card>
      <Avatar src={user.avatar} alt={user.name} />
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      {onEdit && (
        <button
          onClick={onEdit}
          className="mt-4 text-primary hover:text-primary-deep"
        >
          Edit Profile
        </button>
      )}
    </Card>
  )
}
```

---

## Styling Guidelines

### Using Brand Colors

**✅ CORRECT: Use Tailwind classes**
```tsx
<button className="bg-primary text-white hover:bg-primary-deep">
  Click Me
</button>

<div className="border border-primary bg-primary-subtle">
  Success Message
</div>
```

**✅ CORRECT: Use CSS variables**
```tsx
<div style={{ backgroundColor: 'var(--primary)' }}>
  Custom Component
</div>
```

**❌ WRONG: Hardcoded colors**
```tsx
<button style={{ backgroundColor: '#ff0000' }}>
  Click Me
</button>

<div className="bg-[#ff0000]">
  Wrong!
</div>
```

### Responsive Design

**Always use responsive classes**:
```tsx
<div className="
  flex flex-col        // Mobile: vertical stack
  md:flex-row          // Tablet: horizontal
  lg:grid lg:grid-cols-3  // Desktop: grid
">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

---

## API Development

### API Route Structure

```typescript
// src/app/api/users/[id]/route.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from '@/lib/auth'

type RouteContext = {
  params: { id: string }
}

export async function GET(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    // 1. Authenticate
    const session = await auth.api.getSession({
      headers: request.headers
    })

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // 2. Validate input
    if (!params.id) {
      return NextResponse.json(
        { error: 'User ID required' },
        { status: 400 }
      )
    }

    // 3. Fetch data
    const user = await getUserById(params.id)

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // 4. Return response
    return NextResponse.json({ user })

  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

### Error Handling

**Always handle errors gracefully**:
```typescript
async function fetchData() {
  try {
    const response = await fetch('/api/data')

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    return data

  } catch (error) {
    if (error instanceof Error) {
      console.error('Fetch error:', error.message)
      throw new Error(`Failed to fetch data: ${error.message}`)
    }
    throw new Error('Unknown error occurred')
  }
}
```

---

## Testing Requirements

### Test Coverage Goals
- Overall: >80%
- Utilities: 100%
- Services: >90%
- Components: >70%

### Test Structure

```typescript
// src/services/USER-SERVICE.test.ts
import { UserService } from './USER-SERVICE'
import { mockFetch } from '@/test/utils'

describe('UserService', () => {
  let service: UserService

  beforeEach(() => {
    service = new UserService()
  })

  describe('getUser', () => {
    it('fetches user successfully', async () => {
      // Arrange
      const mockUser = { id: '1', name: 'John' }
      mockFetch.mockResolvedValueOnce(mockUser)

      // Act
      const user = await service.getUser('1')

      // Assert
      expect(user).toEqual(mockUser)
      expect(mockFetch).toHaveBeenCalledWith('/api/users/1')
    })

    it('handles errors gracefully', async () => {
      // Arrange
      mockFetch.mockRejectedValueOnce(new Error('Network error'))

      // Act & Assert
      await expect(service.getUser('1')).rejects.toThrow('Network error')
    })
  })
})
```

---

## Question Protocol

### When to Ask Questions

**ALWAYS ask if**:
- Requirements are ambiguous
- Multiple implementation approaches possible
- Breaking changes might be needed
- Significant architectural decision required
- Unsure about acceptance criteria

**Format for Questions**:
```markdown
## Question for TECHNICAL Agent

**Task**: TASK-XXX-###
**Context**: [Brief context]
**Question**: [Specific question]
**Options Considered**:
1. Option A: [Description] - Pros: [...] Cons: [...]
2. Option B: [Description] - Pros: [...] Cons: [...]

**Recommendation**: [Your recommendation and why]
**Awaiting Guidance**: [What you need to proceed]
```

---

## Common Pitfalls to Avoid

### ❌ Pitfall 1: Not Checking File Length
```
Problem: File grows to 800 lines before noticing
Solution: Check file length regularly, split proactively
```

### ❌ Pitfall 2: Forgetting Task Reference
```
Problem: Commit blocked by pre-commit hook
Solution: Always include [TASK-XXX-###] in commit message
```

### ❌ Pitfall 3: Using Unapproved Colors
```
Problem: UI doesn't match brand guidelines
Solution: Only use CSS variables, never hardcode colors
```

### ❌ Pitfall 4: Editing demo/ Files
```
Problem: Violates critical rule, breaks component source
Solution: NEVER touch demo/, only import from it
```

### ❌ Pitfall 5: No Tests
```
Problem: PR rejected due to no tests
Solution: Write tests as you code, not after
```

---

## Monitoring and Compliance

### MONITOR Agent Oversight

The MONITOR agent continuously checks your work for:
- ✅ Rule compliance
- ✅ File length limits
- ✅ Task references
- ✅ Code quality
- ✅ Test coverage

**If violation detected**:
1. You'll receive immediate feedback
2. Commit may be blocked
3. Violation logged
4. Correction required

**Your response**:
1. Acknowledge the violation
2. Understand which rule was broken
3. Correct the issue
4. Resubmit

---

## Success Criteria

You are successful when:
- ✅ All tasks assigned to you are completed
- ✅ All acceptance criteria met
- ✅ All tests passing
- ✅ No rule violations
- ✅ Code reviewed and approved
- ✅ Documentation updated
- ✅ Deployed to production

---

## Quick Reference Card

```
🔴 CRITICAL RULES:
- Max 500 lines per file
- Task reference in every commit
- No editing demo/ folder
- Only use approved colors (#00c307)
- No autonomous development

📝 COMMIT FORMAT:
type(scope): description [TASK-XXX-###]

🎨 BRAND COLORS:
Primary: #00c307
Font: Inter

📁 FILE NAMING:
[MODULE]-[TYPE]-[PART].ext

🧪 TEST COVERAGE:
Target: >80%

❓ WHEN IN DOUBT:
ASK! Don't assume or guess.
```

---

## Final Reminder

**You are a tool, not an autonomous agent.**

Your job is to:
1. Follow instructions exactly
2. Ask questions when unclear
3. Write high-quality, tested code
4. Maintain compliance with all rules
5. Document your work

**You do NOT**:
1. Make architectural decisions alone
2. Add features without approval
3. Refactor without task assignment
4. Ignore rules or guidelines

**When in doubt, always err on the side of asking questions rather than making assumptions.**

---

**Version**: 1.0.0
**Last Updated**: 2025-11-13
**Maintained By**: TECHNICAL Agent

**End of CLAUDE.MD**
