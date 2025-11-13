# Enterprise Skill-Based Development System

## 🎯 Overview

This repository implements an **enterprise-grade skill-based development system** where specialized agents (UI-HELPER, TECHNICAL, and MONITOR) work together with Claude Code to create high-quality applications with **strict adherence to requirements and development standards**.

---

## 🚀 Quick Start

### For New Projects

1. **Start with UI-HELPER**: Gather requirements
   ```
   Read: PRD-TEMPLATE.MD
   Fill in requirements based on stakeholder input
   ```

2. **TECHNICAL Agent**: Generate documentation
   ```
   Create: PRD.MD, CLAUDE.MD, task breakdown
   Output: Complete project documentation
   ```

3. **Claude Code**: Implement features
   ```
   Follow: CLAUDE.MD instructions strictly
   Reference: Task from TASKS.MD
   Comply with: RULES.MD
   ```

4. **MONITOR Agent**: Ensure compliance
   ```
   Validate: Pre-commit checks
   Report: Compliance status
   Block: Rule violations
   ```

---

## 📁 Key Documentation Files

| File | Purpose | Primary Agent |
|------|---------|---------------|
| **AGENTS.MD** | Agent definitions, roles, responsibilities | All |
| **RULES.MD** | Strict development rules (500-line limit, colors, etc.) | MONITOR |
| **TASKS.MD** | Task loops, assignments, workflow | TECHNICAL |
| **CLAUDE.MD** | Instructions for Claude Code | Claude Code |
| **BRANDING.MD** | Brand guidelines, design system | UI-HELPER |
| **PRD-TEMPLATE.MD** | Product requirements template | UI-HELPER |
| **MONITORING.MD** | Continuous monitoring system | MONITOR |

---

## 🤖 The Agents

### 1. UI-HELPER Agent
**Role**: Requirements Analyst & UI Specialist

**Responsibilities**:
- ✅ Gather comprehensive requirements
- ✅ Ask clarifying questions
- ✅ Validate requirement completeness
- ✅ Ensure branding consistency

**When to Use**:
- Starting new project
- Requirements unclear
- Stakeholder input needed
- UI/UX decisions required

---

### 2. TECHNICAL Agent
**Role**: Technical Architect & Documentation Specialist

**Responsibilities**:
- ✅ Generate PRD from requirements
- ✅ Create CLAUDE.MD instructions
- ✅ Split files over 500 lines
- ✅ Produce JSON configs
- ✅ Write technical documentation

**When to Use**:
- Documentation needed
- File splitting required
- Architecture design
- Configuration creation

---

### 3. MONITOR Agent
**Role**: Compliance & Quality Assurance

**Responsibilities**:
- ✅ Validate rule compliance
- ✅ Block rule violations
- ✅ Generate compliance reports
- ✅ Track metrics
- ✅ Enforce quality gates

**When to Use**:
- Pre-commit validation
- Daily compliance checks
- Quality assurance
- Violation detection

---

## 🔴 Critical Rules

### 1. Maximum File Length: 500 Lines
**NEVER** create files longer than 500 lines. Split into multiple files.

```bash
# Automatic check on commit
❌ BLOCKED: FILE-NAME.ts has 650 lines (max 500)
```

### 2. Task Reference Required
Every commit MUST reference a task.

```bash
# Correct format
git commit -m "feat(auth): add password reset [TASK-AUTH-005]"

# ❌ Will be blocked
git commit -m "added some stuff"
```

### 3. ONLY Use Approved Colors
**Primary**: `#00c307` (Green)

```tsx
// ✅ Correct
<button className="bg-primary hover:bg-primary-deep">

// ❌ Wrong - Will be flagged
<button style={{ backgroundColor: '#ff0000' }}>
```

### 4. ONLY Use Components from demo/
**NEVER** edit `demo/` folder. Import components from it.

```tsx
// ✅ Correct
import Button from '@/demo/components/ui/Button'

// ❌ Wrong
// Creating own button in starter/
```

### 5. No Autonomous Development
Claude Code MUST NOT add features without task assignment.

```
❌ Adding features not in TASKS.MD
✅ Implementing assigned tasks only
```

---

## 📋 Workflow

### Complete Development Cycle

```
1. INTAKE (UI-HELPER)
   └─> Gather requirements
   └─> Ask questions
   └─> Validate completeness
        ↓
2. PLANNING (TECHNICAL)
   └─> Generate PRD.MD
   └─> Create CLAUDE.MD
   └─> Break down tasks
   └─> Generate configs
        ↓
3. EXECUTION (Claude Code)
   └─> Implement assigned tasks
   └─> Write tests
   └─> Update docs
        ↓
4. VALIDATION (MONITOR)
   └─> Pre-commit checks
   └─> Rule compliance
   └─> Quality assurance
        ↓
5. REVIEW (Team)
   └─> Code review
   └─> Approval
   └─> Merge
        ↓
6. DEPLOYMENT (System)
   └─> Build & deploy
   └─> Health checks
        ↓
7. FEEDBACK (All)
   └─> Collect metrics
   └─> Identify improvements
   └─> Loop back to step 1
```

---

## 🎨 Branding Guidelines

### Colors
- **Primary**: `#00c307` (Brand green)
- **Primary Deep**: `#00a006` (Hover states)
- **Primary Mild**: `#1acd17` (Lighter variant)
- **Primary Subtle**: `#00c3071a` (10% opacity)

### Typography
- **Font**: Inter
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
- **Base unit**: 4px
- **Common values**: 4px, 8px, 12px, 16px, 24px, 32px, 48px

See **BRANDING.MD** for complete guidelines.

---

## 🛠 Configuration Files

### Located in: `docs/config/`

1. **project-config.json**
   - Project metadata
   - Technology stack
   - Branding values
   - Agent configuration

2. **tasks-config.json**
   - Task definitions
   - Categories and statuses
   - Priority levels
   - Task loop configuration

3. **rules-validation.json**
   - All rules with validation logic
   - Severity levels
   - Automated checks
   - Violation responses

4. **agents-config.json**
   - Agent definitions
   - Permissions
   - Responsibilities
   - Success metrics

---

## 📊 Monitoring

### Real-Time Checks
- ✅ File length on every save
- ✅ Code changes monitored
- ✅ Rule compliance scanned
- ✅ Task reference verified

### Pre-Commit Hooks
- ✅ TypeScript compilation
- ✅ ESLint validation
- ✅ Prettier formatting
- ✅ Tests execution
- ✅ File length check
- ✅ Task reference check
- ✅ Secret scanning

### Scheduled Scans
- 🔄 Daily: Full compliance scan
- 🔄 Weekly: Comprehensive audit
- 🔄 Monthly: Process review

See **MONITORING.MD** for complete system details.

---

## 🎓 For Developers

### Getting Started with Claude Code

1. **Read CLAUDE.MD first** - Your instructions manual
2. **Never start coding without a task** - Check TASKS.MD
3. **Follow RULES.MD strictly** - No exceptions
4. **Use pre-commit hooks** - They'll save you time
5. **When in doubt, ask** - Don't assume or guess

### Common Pitfalls to Avoid

❌ **Don't**: Write files over 500 lines
✅ **Do**: Split proactively

❌ **Don't**: Commit without task reference
✅ **Do**: Always include [TASK-XXX-###]

❌ **Don't**: Use custom colors
✅ **Do**: Use CSS variables only

❌ **Don't**: Edit demo/ folder
✅ **Do**: Import from demo/

❌ **Don't**: Add features autonomously
✅ **Do**: Wait for task assignment

---

## 📈 Success Metrics

### Agent Performance

**UI-HELPER**:
- Requirements completeness: >95%
- Stakeholder satisfaction: >90%
- Change rate after validation: <10%

**TECHNICAL**:
- Documentation coverage: 100%
- File length compliance: 100%
- JSON validation errors: 0

**MONITOR**:
- Compliance rate: >98%
- False positive rate: <5%
- Response time: <1 minute

---

## 🚦 Status Dashboard Example

```
┌───────────────────────────────────────────────────┐
│           PROJECT STATUS DASHBOARD                 │
├───────────────────────────────────────────────────┤
│                                                    │
│  COMPLIANCE SCORE: 96% ████████████████████░░     │
│                                                    │
│  TASKS:                                            │
│  ├─ In Progress:  5                                │
│  ├─ Completed:    22                               │
│  ├─ Blocked:      2                                │
│  └─ Total:        45                               │
│                                                    │
│  VIOLATIONS:                                       │
│  ├─ Critical:     0 ✅                             │
│  ├─ Mandatory:    2 ⚠️                             │
│  └─ Recommended:  5 ℹ️                             │
│                                                    │
│  TEST COVERAGE: 85% ████████████████████░░░░       │
│                                                    │
└───────────────────────────────────────────────────┘
```

---

## 🔄 Continuous Loop

This system operates in a **continuous improvement loop**:

1. **Gather** requirements (UI-HELPER)
2. **Document** specifications (TECHNICAL)
3. **Implement** features (Claude Code)
4. **Validate** compliance (MONITOR)
5. **Review** and approve (Team)
6. **Deploy** to production (System)
7. **Collect** feedback and metrics (All)
8. **Improve** and loop back to step 1

---

## 📞 Need Help?

### Documentation to Read

| Question | Read This |
|----------|-----------|
| How do agents work? | AGENTS.MD |
| What are the rules? | RULES.MD |
| What tasks to do? | TASKS.MD |
| How should I code? | CLAUDE.MD |
| What colors/fonts? | BRANDING.MD |
| How to write PRD? | PRD-TEMPLATE.MD |
| How is compliance checked? | MONITORING.MD |

### Quick Command Reference

```bash
# Check file lengths
find src -type f -exec wc -l {} + | awk '$1 > 500 {print $2 " (" $1 " lines)"}'

# Run compliance scan
npm run compliance:check

# Generate compliance report
npm run compliance:report

# Create new task
npm run task:create

# View task status
npm run task:status
```

---

## 🎯 Goals of This System

1. **Maintain Quality**: 500-line limit, strict types, tests required
2. **Ensure Consistency**: Branding rules, component source control
3. **Enable Tracking**: Task references, continuous monitoring
4. **Facilitate Collaboration**: Clear agent roles, defined workflows
5. **Prevent Issues**: Pre-commit hooks, automated validation
6. **Drive Improvement**: Metrics tracking, feedback loops

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-11-13 | Initial enterprise skill system created |

---

## 🎉 Benefits

✅ **Faster Development**: Clear guidelines and reusable components
✅ **Higher Quality**: Automated validation and strict rules
✅ **Better Collaboration**: Defined agent roles and responsibilities
✅ **Reduced Errors**: Pre-commit hooks catch issues early
✅ **Consistent Output**: Branding and code style enforced
✅ **Easy Onboarding**: Comprehensive documentation
✅ **Continuous Improvement**: Metrics and feedback loops

---

**Remember**: This system exists to help create **enterprise-grade solutions** with **strict quality standards**. When in doubt, consult the documentation or ask questions. Never assume or guess!

---

**End of README-SKILLS.MD**

For more details, explore individual documentation files:
- [AGENTS.MD](AGENTS.MD) - Agent definitions
- [RULES.MD](RULES.MD) - Development rules
- [TASKS.MD](TASKS.MD) - Task management
- [CLAUDE.MD](CLAUDE.MD) - Claude instructions
- [BRANDING.MD](BRANDING.MD) - Brand guidelines
- [MONITORING.MD](MONITORING.MD) - Monitoring system
