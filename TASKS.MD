# TASKS.MD - Task Loops & Agent Assignments

## Overview
This document defines the continuous task loops, agent assignments, and workflow automation that ensures enterprise-grade development with strict adherence to requirements.

---

## Task Loop Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                 CONTINUOUS TASK LOOP                         │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐                                            │
│  │   INTAKE     │  1. Requirement gathering                  │
│  │  (UI-HELPER) │  2. Question asking                        │
│  └──────┬───────┘  3. Validation                             │
│         │                                                     │
│         ↓                                                     │
│  ┌──────────────┐                                            │
│  │   PLANNING   │  4. Documentation generation               │
│  │ (TECHNICAL)  │  5. File splitting                         │
│  └──────┬───────┘  6. Config creation                        │
│         │                                                     │
│         ↓                                                     │
│  ┌──────────────┐                                            │
│  │  EXECUTION   │  7. Code implementation                    │
│  │(CLAUDE CODE) │  8. Testing                                │
│  └──────┬───────┘  9. Documentation sync                     │
│         │                                                     │
│         ↓                                                     │
│  ┌──────────────┐                                            │
│  │  VALIDATION  │  10. Rule compliance check                 │
│  │  (MONITOR)   │  11. Quality assurance                     │
│  └──────┬───────┘  12. Violation detection                   │
│         │                                                     │
│         ↓                                                     │
│  ┌──────────────┐                                            │
│  │    REVIEW    │  13. Code review                           │
│  │   (TEAM)     │  14. Acceptance testing                    │
│  └──────┬───────┘  15. Deployment approval                   │
│         │                                                     │
│         ↓                                                     │
│  ┌──────────────┐                                            │
│  │  DEPLOYMENT  │  16. Build & deploy                        │
│  │   (SYSTEM)   │  17. Monitoring setup                      │
│  └──────┬───────┘  18. Health checks                         │
│         │                                                     │
│         ↓                                                     │
│  ┌──────────────┐                                            │
│  │  FEEDBACK    │  19. Collect metrics                       │
│  │   (ALL)      │  20. Identify improvements                 │
│  └──────┬───────┘  21. Update documentation                  │
│         │                                                     │
│         └────────────────┐                                    │
│                          ↓                                    │
│                    [LOOP BACK TO INTAKE]                      │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Task Categories

### 1. INTAKE Tasks
**Category ID**: `TASK-INTAKE-XXX`
**Primary Agent**: UI-HELPER
**Support Agent**: None
**Monitor**: MONITOR

#### TASK-INTAKE-001: Initial Requirement Gathering
**Status**: Template (repeats for each project)
**Priority**: 🔴 Critical
**Estimated Time**: 2-4 hours

**Description**:
Gather comprehensive requirements from stakeholders through structured questioning.

**Steps**:
1. Schedule requirement session
2. Prepare question framework
3. Conduct interview/survey
4. Document responses
5. Identify gaps and ambiguities
6. Create initial requirement document

**Questions Framework**:
```markdown
## Functional Requirements
- What problem does this solve?
- Who are the users?
- What are the key features?
- What is out of scope?

## UI/UX Requirements
- What is the desired look and feel?
- Are there design references?
- What are the key user flows?
- Mobile responsive required?

## Technical Requirements
- What tech stack?
- Any integrations needed?
- Performance requirements?
- Security requirements?

## Branding Requirements
- Colors, fonts, logos?
- Style guide exists?
- Accessibility standards?

## Success Criteria
- How do we measure success?
- What are the acceptance criteria?
- Timeline and milestones?
```

**Output**:
- `docs/requirements/initial-requirements.md`

**Acceptance Criteria**:
- [ ] All questions answered
- [ ] Stakeholder sign-off obtained
- [ ] No ambiguous requirements
- [ ] Success criteria defined

**Next Task**: TASK-INTAKE-002

---

#### TASK-INTAKE-002: Requirement Validation
**Status**: Template
**Priority**: 🔴 Critical
**Estimated Time**: 1-2 hours

**Description**:
Validate completeness and clarity of gathered requirements.

**Validation Checklist**:
```markdown
- [ ] All functional requirements clear and testable
- [ ] UI/UX requirements have examples or mockups
- [ ] Technical constraints identified
- [ ] Dependencies documented
- [ ] Risks identified
- [ ] Timeline realistic
- [ ] Budget considered
- [ ] All stakeholders agree
```

**Output**:
- `docs/requirements/validated-requirements.md`
- Validation report

**Acceptance Criteria**:
- [ ] Validation checklist 100% complete
- [ ] Zero ambiguous requirements
- [ ] Stakeholder approval documented

**Next Task**: TASK-PLANNING-001

---

### 2. PLANNING Tasks
**Category ID**: `TASK-PLANNING-XXX`
**Primary Agent**: TECHNICAL
**Support Agent**: UI-HELPER
**Monitor**: MONITOR

#### TASK-PLANNING-001: Generate Product Requirements Document (PRD)
**Status**: Template
**Priority**: 🔴 Critical
**Estimated Time**: 3-5 hours

**Description**:
Create comprehensive PRD from validated requirements, split into manageable files.

**PRD Structure**:
```
PRD-CORE.MD (Overview)
├── Executive summary
├── Problem statement
├── Goals and objectives
└── Success metrics

PRD-FUNCTIONAL.MD (Features)
├── Feature list
├── User stories
├── Use cases
└── Feature priorities

PRD-TECHNICAL.MD (Technical Specs)
├── Architecture overview
├── Technology stack
├── API design
├── Database schema
└── Security requirements

PRD-UI-UX.MD (Design)
├── Design principles
├── User flows
├── Wireframes/mockups
├── Responsive design specs
└── Accessibility requirements
```

**File Splitting Rules**:
- Maximum 500 lines per file
- Logical separation by topic
- Cross-reference between files

**Output**:
- `PRD-CORE.MD`
- `PRD-FUNCTIONAL.MD`
- `PRD-TECHNICAL.MD`
- `PRD-UI-UX.MD`

**Acceptance Criteria**:
- [ ] All sections complete
- [ ] No file exceeds 500 lines
- [ ] Cross-references working
- [ ] Technical review passed

**Next Task**: TASK-PLANNING-002

---

#### TASK-PLANNING-002: Create Claude Development Instructions
**Status**: Template
**Priority**: 🔴 Critical
**Estimated Time**: 2-3 hours

**Description**:
Generate CLAUDE.MD with specific instructions for Claude Code to follow during development.

**CLAUDE.MD Structure**:
```markdown
# Development Instructions for Claude Code

## Project Context
[Summary of project]

## Strict Rules
[Link to RULES.MD + key highlights]

## Development Workflow
[Step-by-step process]

## Task Assignment Process
[How tasks are assigned]

## Code Style Guidelines
[Specific to this project]

## Testing Requirements
[What tests to write]

## Documentation Requirements
[What docs to update]

## Prohibited Actions
[What NOT to do]

## Question Protocol
[When and how to ask questions]
```

**Output**:
- `CLAUDE.MD`

**Acceptance Criteria**:
- [ ] Clear, unambiguous instructions
- [ ] All RULES.MD rules referenced
- [ ] Example code provided
- [ ] Q&A protocol defined

**Next Task**: TASK-PLANNING-003

---

#### TASK-PLANNING-003: Create Task Breakdown
**Status**: Template
**Priority**: 🟡 High
**Estimated Time**: 2-4 hours

**Description**:
Break down PRD into specific, assignable tasks with dependencies.

**Task Template**:
```markdown
### TASK-[CATEGORY]-[NUMBER]: [Title]
**Assigned To**: [Agent/Developer]
**Priority**: [Critical/High/Medium/Low]
**Estimated Time**: [Hours/Days]
**Dependencies**: [TASK-XXX-YYY]
**Status**: [NOT_STARTED/IN_PROGRESS/BLOCKED/COMPLETED]

**Description**:
[What needs to be done]

**Acceptance Criteria**:
- [ ] Criterion 1
- [ ] Criterion 2

**Files to Modify/Create**:
- `src/file1.ts`
- `src/file2.tsx`

**Related Documentation**:
- Link to PRD section
- Link to design mockup

**Next Task**: [TASK-XXX-YYY]
```

**Output**:
- `TASKS-BREAKDOWN.MD`
- Task dependency graph

**Acceptance Criteria**:
- [ ] All features have tasks
- [ ] Dependencies identified
- [ ] Effort estimated
- [ ] Assigned to agents

**Next Task**: TASK-PLANNING-004

---

#### TASK-PLANNING-004: Generate Configuration Files
**Status**: Template
**Priority**: 🟡 High
**Estimated Time**: 1-2 hours

**Description**:
Create JSON configuration files for automation and tracking.

**Files to Create**:

**1. project-config.json**:
```json
{
  "projectName": "Project Name",
  "version": "1.0.0",
  "created": "2025-11-13",
  "stack": {
    "frontend": "Next.js 14",
    "backend": "Next.js API Routes",
    "database": "PostgreSQL",
    "auth": "BetterAuth"
  },
  "colors": {
    "primary": "#00c307",
    "primaryDeep": "#00a006"
  },
  "fonts": {
    "primary": "Inter"
  }
}
```

**2. tasks-config.json**:
```json
{
  "tasks": [
    {
      "id": "TASK-INTAKE-001",
      "title": "Initial Requirement Gathering",
      "category": "INTAKE",
      "assignedTo": "UI-HELPER",
      "priority": "CRITICAL",
      "status": "NOT_STARTED",
      "dependencies": [],
      "estimatedHours": 4
    }
  ]
}
```

**3. rules-validation.json**:
```json
{
  "rules": [
    {
      "id": "RULE-FM-001",
      "description": "Maximum file length 500 lines",
      "severity": "CRITICAL",
      "automated": true,
      "checkCommand": "wc -l < $file"
    }
  ]
}
```

**4. agents-config.json**:
```json
{
  "agents": [
    {
      "name": "UI-HELPER",
      "role": "Requirements Analyst",
      "permissions": ["read", "write:docs"],
      "responsibilities": ["requirement gathering", "validation"]
    },
    {
      "name": "TECHNICAL",
      "role": "Technical Architect",
      "permissions": ["read", "write"],
      "responsibilities": ["documentation", "architecture"]
    },
    {
      "name": "MONITOR",
      "role": "Quality Assurance",
      "permissions": ["read", "write:logs", "block"],
      "responsibilities": ["compliance", "validation"]
    }
  ]
}
```

**Output**:
- `project-config.json`
- `tasks-config.json`
- `rules-validation.json`
- `agents-config.json`

**Acceptance Criteria**:
- [ ] All JSON files valid
- [ ] Schema documented
- [ ] Values accurate

**Next Task**: TASK-EXECUTION-001

---

### 3. EXECUTION Tasks
**Category ID**: `TASK-EXECUTION-XXX`
**Primary Agent**: Claude Code
**Support Agent**: TECHNICAL
**Monitor**: MONITOR

#### TASK-EXECUTION-001: Setup Project Structure
**Status**: Template
**Priority**: 🔴 Critical
**Estimated Time**: 1-2 hours

**Description**:
Initialize project with correct directory structure and configuration.

**Steps**:
1. Create directory structure per RULES.MD
2. Initialize git repository
3. Setup package.json
4. Configure TypeScript
5. Setup ESLint & Prettier
6. Create environment files
7. Setup pre-commit hooks

**Directory Structure**:
```
project/
├── src/
│   ├── components/
│   ├── services/
│   ├── utils/
│   ├── store/
│   └── configs/
├── docs/
│   ├── api/
│   ├── components/
│   └── guides/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
└── logs/
    └── agents/
```

**Pre-commit Hook**:
```bash
#!/bin/bash
# .git/hooks/pre-commit

# Check file length
for file in $(git diff --cached --name-only); do
  if [ -f "$file" ] && [ $(wc -l < "$file") -gt 500 ]; then
    echo "❌ VIOLATION: $file exceeds 500 lines"
    exit 1
  fi
done

# Check task reference
if ! git log -1 --pretty=%B | grep -q "\[TASK-[A-Z]+-[0-9]+\]"; then
  echo "❌ VIOLATION: No task reference in commit message"
  exit 1
fi

# Run tests
npm test
```

**Output**:
- Initialized project structure
- Configured tooling
- Pre-commit hooks installed

**Acceptance Criteria**:
- [ ] Directory structure matches spec
- [ ] All configs in place
- [ ] Pre-commit hooks working
- [ ] Git initialized

**Next Task**: TASK-EXECUTION-002

---

#### TASK-EXECUTION-002: Implement Feature [Template]
**Status**: Template (repeated for each feature)
**Priority**: Variable
**Estimated Time**: Variable

**Description**:
Implement a specific feature as defined in PRD.

**Before Starting**:
- [ ] Read related PRD section
- [ ] Review CLAUDE.MD instructions
- [ ] Check RULES.MD compliance
- [ ] Verify task assignment in TASKS.MD
- [ ] Check dependencies completed

**Implementation Steps**:
1. Create feature branch: `feature/TASK-XXX-###-description`
2. Implement code following RULES.MD
3. Write unit tests (>80% coverage)
4. Update documentation
5. Run validation checks
6. Commit with task reference
7. Create pull request

**Commit Message Format**:
```
feat(scope): description [TASK-XXX-###]

- Bullet point of changes
- Another change
- Closes #issue-number
```

**Validation Checklist**:
- [ ] TypeScript compiles with no errors
- [ ] ESLint passes with no errors
- [ ] Prettier formatted
- [ ] All tests pass
- [ ] No files exceed 500 lines
- [ ] Task reference in commit
- [ ] Documentation updated

**Output**:
- Implemented feature code
- Tests
- Updated documentation
- Pull request

**Acceptance Criteria**:
- [ ] All acceptance criteria from task met
- [ ] Code review approved
- [ ] Tests passing
- [ ] Documentation updated

**Next Task**: TASK-VALIDATION-001

---

### 4. VALIDATION Tasks
**Category ID**: `TASK-VALIDATION-XXX`
**Primary Agent**: MONITOR
**Support Agent**: TECHNICAL
**Monitor**: Self

#### TASK-VALIDATION-001: Pre-Commit Validation
**Status**: Automated (runs on every commit)
**Priority**: 🔴 Critical
**Estimated Time**: < 1 minute

**Description**:
Automated validation before allowing commit.

**Checks**:
1. **File Length Check**
   ```bash
   for file in $(git diff --cached --name-only); do
     lines=$(wc -l < "$file")
     if [ $lines -gt 500 ]; then
       echo "❌ FAIL: $file has $lines lines (max 500)"
       exit 1
     fi
   done
   ```

2. **Task Reference Check**
   ```bash
   commit_msg=$(git log -1 --pretty=%B)
   if ! echo "$commit_msg" | grep -q "\[TASK-[A-Z]+-[0-9]+\]"; then
     echo "❌ FAIL: No task reference"
     exit 1
   fi
   ```

3. **TypeScript Compilation**
   ```bash
   npm run type-check
   ```

4. **Linting**
   ```bash
   npm run lint
   ```

5. **Tests**
   ```bash
   npm test
   ```

**Output**:
- Validation report
- Pass/Fail status
- Detailed error messages if failed

**On Failure**:
- Commit blocked
- Developer notified with specific errors
- Logged to `logs/violations.log`

**Acceptance Criteria**:
- [ ] All checks pass

**Next Task**: TASK-VALIDATION-002

---

#### TASK-VALIDATION-002: Rule Compliance Check
**Status**: Automated (runs daily + on-demand)
**Priority**: 🟡 High
**Estimated Time**: 5-10 minutes

**Description**:
Comprehensive check of entire codebase for rule compliance.

**Checks**:
```javascript
// Pseudo-code for compliance checker
const checks = [
  {
    rule: "RULE-FM-001",
    description: "File length check",
    check: () => {
      const files = getAllFiles("src/")
      const violations = []
      files.forEach(file => {
        const lines = countLines(file)
        if (lines > 500) {
          violations.push({ file, lines })
        }
      })
      return violations
    }
  },
  {
    rule: "RULE-UI-001",
    description: "Color usage check",
    check: () => {
      const files = getAllFiles("src/", ".tsx")
      const violations = []
      const unapprovedColors = findColorUsage(files)
      return unapprovedColors
    }
  },
  // ... more checks
]

function runComplianceCheck() {
  const results = checks.map(check => ({
    rule: check.rule,
    violations: check.check()
  }))

  generateReport(results)
  if (hasViolations(results)) {
    notifyTeam(results)
  }
}
```

**Output**:
- `logs/compliance/compliance-report-YYYY-MM-DD.json`
- Summary email/notification

**Report Format**:
```json
{
  "timestamp": "2025-11-13T10:00:00Z",
  "totalRules": 50,
  "rulesChecked": 50,
  "violations": [
    {
      "rule": "RULE-FM-001",
      "severity": "CRITICAL",
      "count": 2,
      "files": ["src/file1.ts", "src/file2.tsx"]
    }
  ],
  "complianceScore": 96
}
```

**Acceptance Criteria**:
- [ ] All rules checked
- [ ] Report generated
- [ ] Violations logged
- [ ] Team notified if violations exist

**Next Task**: TASK-REVIEW-001

---

### 5. REVIEW Tasks
**Category ID**: `TASK-REVIEW-XXX`
**Primary Agent**: Team/Human
**Support Agent**: TECHNICAL
**Monitor**: MONITOR

#### TASK-REVIEW-001: Code Review
**Status**: Manual (per PR)
**Priority**: 🔴 Critical
**Estimated Time**: 30 minutes - 2 hours

**Description**:
Human review of pull request before merge.

**Review Checklist**:
```markdown
## Code Quality
- [ ] Code is readable and maintainable
- [ ] No code smells
- [ ] Follows project patterns
- [ ] No unnecessary complexity

## Functionality
- [ ] Implements requirements correctly
- [ ] Edge cases handled
- [ ] Error handling present
- [ ] No obvious bugs

## Tests
- [ ] Tests cover main functionality
- [ ] Edge cases tested
- [ ] Tests are meaningful
- [ ] All tests pass

## Documentation
- [ ] Code comments where needed
- [ ] README updated if needed
- [ ] API docs updated
- [ ] Type definitions included

## Rules Compliance
- [ ] No files > 500 lines
- [ ] Task reference in commits
- [ ] Follows naming conventions
- [ ] Uses approved colors/fonts

## Security
- [ ] No secrets in code
- [ ] Input validation present
- [ ] No SQL injection risks
- [ ] No XSS vulnerabilities
```

**Approval Process**:
1. Reviewer assigned
2. Review conducted
3. Comments/questions added
4. Changes requested OR approved
5. If changes requested: developer fixes, loop back
6. If approved: ready for merge

**Output**:
- Review comments
- Approval/rejection decision
- Merge to main (if approved)

**Acceptance Criteria**:
- [ ] Review checklist complete
- [ ] All concerns addressed
- [ ] Approval granted

**Next Task**: TASK-DEPLOYMENT-001

---

### 6. DEPLOYMENT Tasks
**Category ID**: `TASK-DEPLOYMENT-XXX`
**Primary Agent**: System/CI-CD
**Support Agent**: TECHNICAL
**Monitor**: MONITOR

#### TASK-DEPLOYMENT-001: Build and Deploy
**Status**: Automated (on merge to main)
**Priority**: 🔴 Critical
**Estimated Time**: 5-15 minutes

**Description**:
Automated build and deployment pipeline.

**Pipeline Steps**:
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npm run type-check

      - name: Lint
        run: npm run lint

      - name: Test
        run: npm test

      - name: Build
        run: npm run build

      - name: Deploy to production
        run: npm run deploy

      - name: Health check
        run: curl -f https://app.example.com/health
```

**Output**:
- Built application
- Deployed to production
- Health check confirmation

**On Failure**:
- Deployment stopped
- Team notified
- Rollback initiated

**Acceptance Criteria**:
- [ ] Build successful
- [ ] All tests pass
- [ ] Deployment successful
- [ ] Health checks pass

**Next Task**: TASK-FEEDBACK-001

---

### 7. FEEDBACK Tasks
**Category ID**: `TASK-FEEDBACK-XXX`
**Primary Agent**: All
**Support Agent**: All
**Monitor**: MONITOR

#### TASK-FEEDBACK-001: Collect Metrics
**Status**: Automated (continuous)
**Priority**: 🟢 Medium
**Estimated Time**: Ongoing

**Description**:
Collect performance metrics, user feedback, and improvement opportunities.

**Metrics to Collect**:
```json
{
  "performance": {
    "buildTime": "2m 30s",
    "deployTime": "5m 15s",
    "pageLoadTime": "1.2s",
    "apiResponseTime": "120ms"
  },
  "quality": {
    "testCoverage": "85%",
    "bugCount": 3,
    "technicalDebt": "12 hours",
    "codeSmells": 8
  },
  "compliance": {
    "ruleViolations": 2,
    "complianceScore": 96,
    "securityIssues": 0
  },
  "productivity": {
    "tasksCompleted": 25,
    "averageTaskTime": "3.5 hours",
    "blockedTime": "2 hours"
  }
}
```

**Analysis**:
- Identify bottlenecks
- Find improvement opportunities
- Track trends over time
- Suggest optimizations

**Output**:
- `logs/metrics/metrics-YYYY-MM-DD.json`
- Weekly summary report
- Improvement suggestions

**Acceptance Criteria**:
- [ ] Metrics collected
- [ ] Analysis performed
- [ ] Report generated
- [ ] Suggestions documented

**Next Task**: TASK-FEEDBACK-002

---

#### TASK-FEEDBACK-002: Continuous Improvement
**Status**: Ongoing (weekly review)
**Priority**: 🟢 Medium
**Estimated Time**: 2-4 hours per week

**Description**:
Review metrics, identify improvements, update processes.

**Review Areas**:
1. **Process Efficiency**
   - Are tasks taking too long?
   - Bottlenecks identified?
   - Automation opportunities?

2. **Quality**
   - Bug trends
   - Test coverage gaps
   - Code quality trends

3. **Compliance**
   - Rule violation patterns
   - Most violated rules
   - Rule effectiveness

4. **Documentation**
   - Outdated docs
   - Missing docs
   - Clarity issues

**Improvement Process**:
1. Identify issue/opportunity
2. Propose solution
3. Document in improvement log
4. Implement if approved
5. Measure impact
6. Iterate

**Output**:
- Improvement proposals
- Updated processes
- Documentation updates
- Metric improvements

**Acceptance Criteria**:
- [ ] Weekly review completed
- [ ] Improvements identified
- [ ] Action items created
- [ ] Progress tracked

**Next Task**: Loop back to TASK-INTAKE-001 for new features

---

## Task Status Tracking

### Status Dashboard (Example)

```
┌───────────────────────────────────────────────────────────────┐
│                    TASK STATUS DASHBOARD                       │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  INTAKE:      ████████████████████░░░░░░  75% (3/4 complete)  │
│  PLANNING:    ████████████░░░░░░░░░░░░░░  50% (2/4 complete)  │
│  EXECUTION:   ████░░░░░░░░░░░░░░░░░░░░░░  20% (2/10 complete) │
│  VALIDATION:  ████████████████████████░░  90% (9/10 complete) │
│  REVIEW:      ████████████████░░░░░░░░░░  60% (3/5 complete)  │
│  DEPLOYMENT:  ░░░░░░░░░░░░░░░░░░░░░░░░░░   0% (0/2 complete)  │
│  FEEDBACK:    ████████████████████████░░  90% (ongoing)       │
│                                                                │
│  OVERALL:     ████████████░░░░░░░░░░░░░░  49% complete        │
│                                                                │
│  BLOCKED:     2 tasks                                          │
│  IN_PROGRESS: 5 tasks                                          │
│  COMPLETED:   22 tasks                                         │
│  TOTAL:       45 tasks                                         │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

---

## Continuous Loop Trigger Conditions

### When to Start New Loop Iteration

1. **New Feature Request**
   - Trigger: TASK-INTAKE-001
   - Agent: UI-HELPER

2. **Bug Report**
   - Trigger: TASK-EXECUTION-002 (fix variant)
   - Agent: Claude Code

3. **Improvement Identified**
   - Trigger: TASK-FEEDBACK-002
   - Agent: TECHNICAL

4. **Compliance Violation**
   - Trigger: TASK-VALIDATION-002
   - Agent: MONITOR

5. **Documentation Update Needed**
   - Trigger: TASK-PLANNING-002
   - Agent: TECHNICAL

---

## Emergency Procedures

### When Critical Rule Violation Detected

```
1. MONITOR agent detects violation
2. Immediately log to logs/violations.log
3. Block commit/deployment
4. Notify team lead
5. Create emergency task: TASK-EMERGENCY-XXX
6. Assign to appropriate agent
7. Priority: CRITICAL
8. Resolve within 1 hour
9. Post-mortem after resolution
10. Update rules if needed
```

---

## Task Automation Scripts

### Generate New Task
```bash
#!/bin/bash
# scripts/create-task.sh

CATEGORY=$1
NUMBER=$2
TITLE=$3

TASK_ID="TASK-${CATEGORY}-${NUMBER}"

cat > "docs/tasks/${TASK_ID}.md" <<EOF
### ${TASK_ID}: ${TITLE}
**Status**: NOT_STARTED
**Priority**: [Set priority]
**Estimated Time**: [Set estimate]
**Assigned To**: [Set agent]
**Dependencies**: [List dependencies]

**Description**:
[Describe task]

**Acceptance Criteria**:
- [ ] Criterion 1
- [ ] Criterion 2

**Next Task**: [Set next task]
EOF

echo "✅ Created ${TASK_ID}"
```

---

**Version**: 1.0.0
**Last Updated**: 2025-11-13
**Next Review**: Weekly

**End of TASKS.MD**
