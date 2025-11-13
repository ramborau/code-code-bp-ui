# RULES.MD - Strict Development Rules & Guidelines

## 🚨 CRITICAL: These rules MUST be followed at all times

---

## Table of Contents
1. [File Management Rules](#file-management-rules)
2. [Code Development Rules](#code-development-rules)
3. [UI & Design Rules](#ui--design-rules)
4. [Documentation Rules](#documentation-rules)
5. [Git & Version Control Rules](#git--version-control-rules)
6. [Agent Behavior Rules](#agent-behavior-rules)
7. [Task Loop Rules](#task-loop-rules)
8. [Validation & Testing Rules](#validation--testing-rules)
9. [Security Rules](#security-rules)
10. [Violation Consequences](#violation-consequences)

---

## File Management Rules

### RULE-FM-001: Maximum File Length
**Status**: 🔴 CRITICAL
**Description**: No single file shall exceed 500 lines
**Rationale**: Maintainability, readability, modularity
**Enforcement**: Automated pre-commit check
**Violation Action**: Commit blocked

```bash
# Automated check
if [ $(wc -l < $file) -gt 500 ]; then
  echo "❌ VIOLATION: File exceeds 500 lines"
  exit 1
fi
```

**Exception Process**:
1. Document reason in `docs/exceptions.md`
2. Get approval from TECHNICAL agent
3. Add comment in file explaining exception
4. Review exception quarterly

---

### RULE-FM-002: File Naming Convention
**Status**: 🟡 MANDATORY
**Description**: Use consistent naming patterns
**Format**: `[MODULE]-[TYPE]-[PART].ext`
**Examples**:
- `AUTH-COMPONENT-SIGNIN.tsx`
- `PRD-FUNCTIONAL-PART1.md`
- `API-USERS-ENDPOINTS.ts`

**Invalid Examples**:
- ❌ `myfile.tsx`
- ❌ `component1.tsx`
- ❌ `test_file.md`

---

### RULE-FM-003: File Organization
**Status**: 🟡 MANDATORY
**Description**: Files must be organized in correct directories

**Directory Structure**:
```
src/
├── components/       # React components only
├── services/         # API services only
├── utils/            # Utility functions only
├── store/            # State management only
├── @types/           # TypeScript types only
└── configs/          # Configuration files only

docs/
├── project-setup/    # Setup documentation
├── api/              # API documentation
├── components/       # Component documentation
└── guides/           # Developer guides
```

**Violation**: Placing files in incorrect directories

---

### RULE-FM-004: Mandatory File Headers
**Status**: 🟡 MANDATORY
**Description**: All files must have proper headers

**Template**:
```typescript
/**
 * @file AUTH-COMPONENT-SIGNIN.tsx
 * @description Sign-in form component with validation
 * @module Authentication
 * @author UI-HELPER & TECHNICAL agents
 * @created 2025-11-13
 * @modified 2025-11-13
 * @dependencies react, better-auth, ui-components
 * @relatedFiles AUTH-SERVICE.ts, USER-TYPES.ts
 */
```

---

## Code Development Rules

### RULE-CD-001: No Autonomous Development
**Status**: 🔴 CRITICAL
**Description**: Claude Code MUST NOT implement features without explicit task assignment
**Rationale**: Maintain control, prevent scope creep
**Enforcement**: MONITOR agent continuous tracking

**What is Prohibited**:
- ❌ Adding features not in TASKS.MD
- ❌ Refactoring without task
- ❌ Creating new components without approval
- ❌ Modifying architecture without documentation

**What is Allowed**:
- ✅ Bug fixes with task ticket
- ✅ Implementing assigned tasks
- ✅ Code suggested by TECHNICAL agent
- ✅ Following CLAUDE.MD instructions

---

### RULE-CD-002: Task-Driven Development Only
**Status**: 🔴 CRITICAL
**Description**: Every code change MUST link to a task in TASKS.MD

**Required in Commit**:
```bash
git commit -m "feat: implement user authentication [TASK-AUTH-001]"
```

**Task Reference Format**: `[TASK-{CATEGORY}-{NUMBER}]`

**Validation**:
```bash
# Pre-commit hook checks for task reference
if ! grep -q "\[TASK-[A-Z]+-[0-9]+\]" commit_message; then
  echo "❌ VIOLATION: No task reference in commit message"
  exit 1
fi
```

---

### RULE-CD-003: TypeScript Strict Mode
**Status**: 🟡 MANDATORY
**Description**: All TypeScript must use strict mode

**Configuration**:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

**No `any` Types**: Use `unknown` or proper types

---

### RULE-CD-004: Code Review Required
**Status**: 🟡 MANDATORY
**Description**: All code changes require review before merge

**Review Checklist**:
- [ ] Task reference present
- [ ] Follows RULES.MD
- [ ] Type-safe (no `any`)
- [ ] Tests included
- [ ] Documentation updated
- [ ] No files > 500 lines
- [ ] Follows naming conventions

---

### RULE-CD-005: No Dead Code
**Status**: 🟢 RECOMMENDED
**Description**: Remove commented code and unused imports

**Automated Check**:
```bash
# Lint check for unused code
eslint --rule "no-unused-vars: error"
```

---

## UI & Design Rules

### RULE-UI-001: Brand Color Usage
**Status**: 🔴 CRITICAL
**Description**: ONLY use approved brand colors

**Approved Colors**:
- Primary: `#00c307`
- Primary Deep: `#00a006`
- Primary Mild: `#1acd17`
- Primary Subtle: `#00c3071a`
- Gray scale: As defined in `tailwind.config.ts`

**Prohibited**:
- ❌ Custom colors without approval
- ❌ Hardcoded hex values (use CSS variables)
- ❌ Inline styles with colors

**Correct Usage**:
```tsx
// ✅ Correct
<button className="bg-primary hover:bg-primary-deep">Click</button>

// ❌ Wrong
<button style={{ backgroundColor: '#ff0000' }}>Click</button>
```

---

### RULE-UI-002: Font Family Usage
**Status**: 🔴 CRITICAL
**Description**: ONLY use approved font families

**Approved Fonts**:
- Primary: `Inter`
- Fallback: `sans-serif`

**Prohibited**:
- ❌ Custom web fonts without approval
- ❌ Multiple font families
- ❌ System fonts as primary

---

### RULE-UI-003: Component Source
**Status**: 🔴 CRITICAL (from UIGOD-RULES.MD)
**Description**: ALL components MUST come from `demo/` folder

**Rules**:
1. ❌ NEVER edit files in `demo/` folder
2. ✅ ONLY use components from `demo/`
3. ✅ Create wrappers in `starter/` if customization needed
4. ❌ DO NOT create duplicate components

**Example**:
```tsx
// ✅ Correct: Use from demo
import Button from '@/demo/components/ui/Button'

// ✅ Correct: Wrap if customization needed
// In starter/components/CustomButton.tsx
import Button from '@/demo/components/ui/Button'
export const CustomButton = (props) => (
  <Button {...props} className={`custom ${props.className}`} />
)

// ❌ Wrong: Creating duplicate
// In starter/components/Button.tsx
export const Button = () => { /* ... */ }
```

---

### RULE-UI-004: Responsive Design Mandatory
**Status**: 🟡 MANDATORY
**Description**: All UI must be mobile-responsive

**Breakpoints** (from Tailwind):
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

**Required Classes**:
```tsx
<div className="flex flex-col md:flex-row lg:grid lg:grid-cols-3">
```

---

### RULE-UI-005: Accessibility Compliance
**Status**: 🟡 MANDATORY
**Description**: All UI must meet WCAG 2.1 AA standards

**Requirements**:
- ✅ Proper semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Color contrast ratio ≥ 4.5:1
- ✅ Focus indicators visible
- ✅ Alt text for images

---

## Documentation Rules

### RULE-DOC-001: Code Comments Required
**Status**: 🟡 MANDATORY
**Description**: Complex logic MUST have explanatory comments

**When to Comment**:
- ✅ Complex algorithms
- ✅ Business logic
- ✅ Workarounds
- ✅ Non-obvious code
- ❌ Self-explanatory code

**Format**:
```typescript
/**
 * Calculate user discount based on loyalty tier
 *
 * @param user - User object with tier property
 * @param basePrice - Original price before discount
 * @returns Final price after tier-based discount
 *
 * Business Rule: Gold tier = 20%, Silver = 10%, Bronze = 5%
 */
function calculateDiscount(user: User, basePrice: number): number {
  // Implementation
}
```

---

### RULE-DOC-002: README Updates
**Status**: 🟡 MANDATORY
**Description**: Update README when adding features

**Must Include**:
- Feature description
- Usage examples
- Configuration options
- Dependencies
- Breaking changes

---

### RULE-DOC-003: API Documentation
**Status**: 🟡 MANDATORY
**Description**: All API endpoints must be documented

**Template**:
```markdown
## POST /api/users

Create a new user account

**Request Body**:
\`\`\`json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
\`\`\`

**Response**: 201 Created
\`\`\`json
{
  "user": { "id": "string", "name": "string", "email": "string" }
}
\`\`\`

**Errors**: 400, 409, 500
```

---

### RULE-DOC-004: Inline Documentation
**Status**: 🟢 RECOMMENDED
**Description**: Use TSDoc for functions and types

**Example**:
```typescript
/**
 * User authentication service
 * @public
 */
export class AuthService {
  /**
   * Sign in user with credentials
   * @param email - User email address
   * @param password - User password
   * @returns Promise resolving to user session
   * @throws {AuthError} When credentials are invalid
   */
  async signIn(email: string, password: string): Promise<Session> {
    // Implementation
  }
}
```

---

## Git & Version Control Rules

### RULE-GIT-001: Commit Message Format
**Status**: 🟡 MANDATORY
**Description**: Follow conventional commits specification

**Format**: `<type>(<scope>): <description> [TASK-XXX-###]`

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructure
- `test`: Tests
- `chore`: Maintenance

**Examples**:
```bash
✅ feat(auth): add password reset flow [TASK-AUTH-005]
✅ fix(ui): correct button alignment on mobile [TASK-UI-012]
✅ docs(api): update endpoint documentation [TASK-DOC-003]
❌ updated stuff
❌ fix bug
```

---

### RULE-GIT-002: Branch Naming
**Status**: 🟡 MANDATORY
**Description**: Use descriptive branch names

**Format**: `<type>/<task-id>-<short-description>`

**Examples**:
```bash
✅ feature/TASK-AUTH-005-password-reset
✅ bugfix/TASK-UI-012-button-alignment
✅ docs/TASK-DOC-003-api-endpoints
❌ my-branch
❌ test
```

---

### RULE-GIT-003: No Direct Commits to Main
**Status**: 🔴 CRITICAL
**Description**: Main branch is protected - use PRs

**Workflow**:
1. Create feature branch
2. Implement changes
3. Create Pull Request
4. Pass all checks
5. Get approval
6. Merge to main

---

### RULE-GIT-004: Atomic Commits
**Status**: 🟢 RECOMMENDED
**Description**: One logical change per commit

**Good**:
```bash
✅ commit 1: Add user model
✅ commit 2: Add user service
✅ commit 3: Add user API endpoints
```

**Bad**:
```bash
❌ commit 1: Add entire auth system (500 files changed)
```

---

## Agent Behavior Rules

### RULE-AB-001: Agent Scope Limits
**Status**: 🔴 CRITICAL
**Description**: Agents MUST stay within defined scope

**UI-HELPER Scope**:
- ✅ Gather requirements
- ✅ Ask questions
- ✅ Validate completeness
- ❌ Write code
- ❌ Modify rules

**TECHNICAL Scope**:
- ✅ Generate documentation
- ✅ Create configs
- ✅ Split files
- ⚠️  Write code (with approval)
- ❌ Change requirements

**MONITOR Scope**:
- ✅ Validate compliance
- ✅ Block violations
- ✅ Generate reports
- ❌ Write code
- ❌ Override rules

---

### RULE-AB-002: Inter-Agent Communication
**Status**: 🟡 MANDATORY
**Description**: Agents communicate via defined protocols

**Format**: JSON messages in `logs/agent-comm.json`

**Example**:
```json
{
  "from": "UI-HELPER",
  "to": "TECHNICAL",
  "timestamp": "2025-11-13T10:30:00Z",
  "messageType": "REQUIREMENTS_VALIDATED",
  "payload": {}
}
```

---

### RULE-AB-003: Agent Logging
**Status**: 🟡 MANDATORY
**Description**: All agent actions MUST be logged

**Log Location**: `logs/agents/`
- `ui-helper.log`
- `technical.log`
- `monitor.log`

**Log Format**:
```
[2025-11-13T10:30:00Z] [INFO] UI-HELPER: Started requirement gathering
[2025-11-13T10:30:05Z] [ACTION] UI-HELPER: Asked 5 clarifying questions
[2025-11-13T10:35:00Z] [SUCCESS] UI-HELPER: Requirements validated
```

---

## Task Loop Rules

### RULE-TL-001: Task Definition Required
**Status**: 🔴 CRITICAL
**Description**: All tasks MUST be defined in TASKS.MD before execution

**Task Definition Includes**:
- Unique ID
- Description
- Assigned agent
- Dependencies
- Acceptance criteria
- Estimated effort

---

### RULE-TL-002: Sequential Task Execution
**Status**: 🟡 MANDATORY
**Description**: Tasks with dependencies execute in order

**Example**:
```
TASK-001: Gather requirements (no dependencies)
  ↓
TASK-002: Generate PRD (depends on TASK-001)
  ↓
TASK-003: Create CLAUDE.MD (depends on TASK-002)
  ↓
TASK-004: Implement features (depends on TASK-003)
```

---

### RULE-TL-003: Task Status Tracking
**Status**: 🟡 MANDATORY
**Description**: Task status MUST be updated in real-time

**Valid Statuses**:
- `NOT_STARTED`
- `IN_PROGRESS`
- `BLOCKED`
- `UNDER_REVIEW`
- `COMPLETED`
- `CANCELLED`

**Update Frequency**: Immediately upon status change

---

### RULE-TL-004: Continuous Task Loop
**Status**: 🟢 RECOMMENDED
**Description**: Tasks execute in continuous improvement loop

**Loop Cycle**:
```
1. Plan → 2. Execute → 3. Review → 4. Improve → [back to 1]
```

---

## Validation & Testing Rules

### RULE-VT-001: Pre-Commit Validation
**Status**: 🟡 MANDATORY
**Description**: All commits MUST pass validation checks

**Checks**:
- ✅ TypeScript compilation
- ✅ ESLint (no errors)
- ✅ Prettier formatting
- ✅ File length check
- ✅ Task reference check
- ✅ Tests passing

**Implementation**: Git pre-commit hook

---

### RULE-VT-002: Test Coverage Minimum
**Status**: 🟢 RECOMMENDED
**Description**: Maintain >80% test coverage

**Required Tests**:
- Unit tests for utilities
- Integration tests for services
- Component tests for UI
- E2E tests for critical flows

---

### RULE-VT-003: No Skipped Tests
**Status**: 🟡 MANDATORY
**Description**: Do not commit skipped tests

**Prohibited**:
```typescript
❌ it.skip('should work', () => { /* ... */ })
❌ describe.skip('feature', () => { /* ... */ })
```

**Allowed Temporarily**: Create task to fix, link in comment

---

## Security Rules

### RULE-SEC-001: No Secrets in Code
**Status**: 🔴 CRITICAL
**Description**: NEVER commit secrets, API keys, passwords

**Use Environment Variables**:
```typescript
// ✅ Correct
const apiKey = process.env.API_KEY

// ❌ Wrong
const apiKey = "sk-1234567890abcdef"
```

**Validation**: Automated secret scanning

---

### RULE-SEC-002: Dependency Scanning
**Status**: 🟡 MANDATORY
**Description**: Check dependencies for vulnerabilities

**Frequency**: Weekly + on new dependency

**Tools**: `npm audit`, `snyk`

---

### RULE-SEC-003: Input Validation
**Status**: 🟡 MANDATORY
**Description**: Validate all user input

**Required**:
- ✅ Type checking
- ✅ Length limits
- ✅ Format validation
- ✅ Sanitization
- ✅ SQL injection prevention
- ✅ XSS prevention

---

## Violation Consequences

### Severity Levels

#### 🔴 CRITICAL Violations
**Examples**: No task reference, secrets in code, >500 line files, direct main commits

**Consequences**:
1. Immediate commit block
2. Alert to MONITOR agent
3. Notification to team lead
4. Correction required before proceeding
5. Incident logged

**Resolution Time**: Immediate (< 1 hour)

---

#### 🟡 MANDATORY Violations
**Examples**: Missing comments, incorrect naming, no tests

**Consequences**:
1. Warning issued
2. Task created to fix
3. Tracked in violation log
4. Required fix before next release

**Resolution Time**: < 24 hours

---

#### 🟢 RECOMMENDED Violations
**Examples**: Low test coverage, no TSDoc comments

**Consequences**:
1. Suggestion provided
2. Optional improvement task created
3. Tracked for improvement

**Resolution Time**: Next sprint

---

### Violation Tracking

**Log Location**: `logs/violations.log`

**Format**:
```json
{
  "timestamp": "2025-11-13T10:30:00Z",
  "ruleId": "RULE-CD-001",
  "severity": "CRITICAL",
  "description": "Code changed without task reference",
  "violator": "developer@example.com",
  "file": "src/components/NewFeature.tsx",
  "status": "BLOCKED",
  "resolution": null
}
```

---

## Rule Updates

**Version**: 1.0.0
**Last Updated**: 2025-11-13
**Next Review**: 2025-12-13

**Update Process**:
1. Propose rule change (with justification)
2. Review by TECHNICAL agent
3. Validate by MONITOR agent
4. Team approval required
5. Update version number
6. Notify all team members
7. Update CLAUDE.MD if needed

---

## Quick Reference Card

```
🔴 CRITICAL RULES (Auto-Block):
- No files > 500 lines
- No task reference = no commit
- No secrets in code
- No direct main commits
- Use ONLY demo/ components
- Use ONLY approved colors (#00c307)
- No autonomous development

🟡 MANDATORY RULES (Required Fix):
- Proper file naming
- TypeScript strict mode
- Commit message format
- API documentation
- Pre-commit validation pass

🟢 RECOMMENDED RULES (Best Practice):
- >80% test coverage
- TSDoc comments
- Atomic commits
- No dead code
```

---

**Remember**: These rules exist to maintain quality, consistency, and control. When in doubt, ask before acting.

**End of RULES.MD**
