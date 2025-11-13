# MONITORING.MD - Continuous Monitoring System

## Overview

This document describes the continuous monitoring system that ensures Claude Code and all developers follow the strict rules and guidelines defined in RULES.MD, TASKS.MD, and CLAUDE.MD.

---

## Monitoring Architecture

```
┌────────────────────────────────────────────────────────────┐
│              CONTINUOUS MONITORING SYSTEM                   │
├────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  REAL-TIME MONITORS                                  │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │  • File Length Monitor (checks every save)           │  │
│  │  • Code Change Monitor (detects modifications)       │  │
│  │  • Rule Compliance Scanner (validates patterns)      │  │
│  │  • Task Reference Checker (enforces task links)      │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  PRE-COMMIT HOOKS                                    │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │  • TypeScript compilation check                      │  │
│  │  • ESLint validation                                 │  │
│  │  • Prettier formatting check                         │  │
│  │  • Test execution                                    │  │
│  │  • File length validation                            │  │
│  │  • Task reference validation                         │  │
│  │  • Secret scanning                                   │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  SCHEDULED CHECKS                                    │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │  • Daily: Full compliance scan                       │  │
│  │  • Daily: Code quality metrics                       │  │
│  │  • Weekly: Comprehensive audit                       │  │
│  │  • Weekly: Improvement recommendations               │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  REPORTING & ALERTS                                  │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │  • Violation logs                                    │  │
│  │  • Compliance reports                                │  │
│  │  • Team notifications                                │  │
│  │  • Dashboard updates                                 │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

---

## Real-Time Monitoring

### 1. File Length Monitor

**Frequency**: On every file save
**Purpose**: Ensure no file exceeds 500 lines

**Implementation**:
```javascript
// .vscode/settings.json (VS Code extension)
{
  "files.watcherExclude": {},
  "files.onSave": {
    "checkFileLength": true
  }
}

// File length checker
function checkFileLength(filePath) {
  const lineCount = countLines(filePath)

  if (lineCount > 500) {
    showError(`⚠️  File exceeds 500 lines (${lineCount} lines)`)
    logViolation({
      rule: 'RULE-FM-001',
      file: filePath,
      lineCount: lineCount,
      severity: 'CRITICAL'
    })
  } else if (lineCount > 450) {
    showWarning(`⚡ File approaching limit (${lineCount}/500 lines)`)
  }
}
```

---

### 2. Code Change Monitor

**Frequency**: Continuous during development
**Purpose**: Detect code changes and verify task assignment

**Implementation**:
```javascript
// Git hooks or IDE plugin
function onFileChange(filePath, changeType) {
  // Check if change is in demo/ folder (prohibited)
  if (filePath.startsWith('demo/')) {
    blockChange()
    showError('❌ CRITICAL VIOLATION: Cannot edit demo/ folder')
    logViolation({
      rule: 'RULE-UI-003',
      file: filePath,
      action: 'BLOCKED',
      severity: 'CRITICAL'
    })
    return false
  }

  // Check if current work has task assignment
  const currentTask = getCurrentTask()
  if (!currentTask) {
    showWarning('⚠️  No task assigned. Assign task before coding.')
  }

  return true
}
```

---

### 3. Rule Compliance Scanner

**Frequency**: On file save, pre-commit
**Purpose**: Validate code against all rules

**Checks**:
```javascript
const complianceChecks = [
  // Color usage check
  {
    rule: 'RULE-UI-001',
    scan: (content) => {
      const unapprovedColors = findColors(content)
        .filter(color => !APPROVED_COLORS.includes(color))
      return unapprovedColors.length === 0
    }
  },

  // Font usage check
  {
    rule: 'RULE-UI-002',
    scan: (content) => {
      const unapprovedFonts = findFonts(content)
        .filter(font => !APPROVED_FONTS.includes(font))
      return unapprovedFonts.length === 0
    }
  },

  // Secret detection
  {
    rule: 'RULE-SEC-001',
    scan: (content) => {
      const secrets = detectSecrets(content)
      return secrets.length === 0
    }
  },

  // TypeScript any types
  {
    rule: 'RULE-CD-003',
    scan: (content) => {
      const anyUsages = content.match(/:\s*any\b/g)
      return !anyUsages || anyUsages.length === 0
    }
  }
]

function runComplianceScan(filePath) {
  const content = readFile(filePath)
  const violations = []

  complianceChecks.forEach(check => {
    if (!check.scan(content)) {
      violations.push({
        rule: check.rule,
        file: filePath,
        timestamp: new Date().toISOString()
      })
    }
  })

  if (violations.length > 0) {
    logViolations(violations)
    notifyDeveloper(violations)
  }

  return violations.length === 0
}
```

---

## Pre-Commit Hooks

### Installation

```bash
# .git/hooks/pre-commit
#!/bin/bash

echo "🔍 Running pre-commit checks..."

# 1. Check file lengths
echo "📏 Checking file lengths..."
for file in $(git diff --cached --name-only); do
  if [ -f "$file" ]; then
    lines=$(wc -l < "$file")
    if [ $lines -gt 500 ]; then
      echo "❌ FAIL: $file has $lines lines (max 500)"
      echo "   Please split this file before committing"
      exit 1
    fi
  fi
done
echo "✅ File lengths OK"

# 2. Check task reference in commit message
echo "📋 Checking task reference..."
commit_msg_file=".git/COMMIT_EDITMSG"
if [ -f "$commit_msg_file" ]; then
  commit_msg=$(cat "$commit_msg_file")
  if ! echo "$commit_msg" | grep -qE '\[TASK-[A-Z]+-[0-9]+\]'; then
    echo "❌ FAIL: Commit message missing task reference"
    echo "   Format: <type>(<scope>): <message> [TASK-XXX-###]"
    exit 1
  fi
fi
echo "✅ Task reference OK"

# 3. TypeScript compilation
echo "🔷 Checking TypeScript..."
if ! npm run type-check --silent; then
  echo "❌ FAIL: TypeScript compilation errors"
  exit 1
fi
echo "✅ TypeScript OK"

# 4. ESLint
echo "🔍 Running ESLint..."
if ! npm run lint --silent; then
  echo "❌ FAIL: ESLint errors detected"
  exit 1
fi
echo "✅ ESLint OK"

# 5. Prettier formatting
echo "💅 Checking formatting..."
if ! npm run format:check --silent; then
  echo "❌ FAIL: Code not formatted properly"
  echo "   Run: npm run format"
  exit 1
fi
echo "✅ Formatting OK"

# 6. Tests
echo "🧪 Running tests..."
if ! npm test --silent; then
  echo "❌ FAIL: Tests failing"
  exit 1
fi
echo "✅ Tests OK"

# 7. Secret scanning
echo "🔐 Scanning for secrets..."
if grep -rE '(API_KEY|SECRET|PASSWORD|TOKEN).*=.*["\'].*["\']' $(git diff --cached --name-only); then
  echo "❌ FAIL: Potential secrets detected"
  echo "   Use environment variables instead"
  exit 1
fi
echo "✅ No secrets detected"

echo ""
echo "✅ All pre-commit checks passed!"
echo ""
```

### Making Pre-Commit Hook Executable

```bash
chmod +x .git/hooks/pre-commit
```

---

## Scheduled Checks

### Daily Compliance Scan

**Time**: 9:00 AM daily
**Duration**: ~10 minutes

```bash
#!/bin/bash
# scripts/daily-compliance-scan.sh

echo "🔍 Running daily compliance scan..."

# Create report directory
REPORT_DIR="logs/compliance"
REPORT_FILE="$REPORT_DIR/compliance-report-$(date +%Y-%m-%d).json"
mkdir -p "$REPORT_DIR"

# Initialize report
echo "{" > "$REPORT_FILE"
echo "  \"date\": \"$(date -I)\"," >> "$REPORT_FILE"
echo "  \"timestamp\": \"$(date -Iseconds)\"," >> "$REPORT_FILE"
echo "  \"checks\": [" >> "$REPORT_FILE"

# Check 1: File lengths
echo "    {" >> "$REPORT_FILE"
echo "      \"check\": \"File Length Check\"," >> "$REPORT_FILE"
OVER_LIMIT=$(find src -type f \( -name "*.ts" -o -name "*.tsx" \) -exec wc -l {} + | awk '$1 > 500 {print $2}' | wc -l)
echo "      \"filesOverLimit\": $OVER_LIMIT," >> "$REPORT_FILE"
if [ $OVER_LIMIT -eq 0 ]; then
  echo "      \"status\": \"PASS\"" >> "$REPORT_FILE"
else
  echo "      \"status\": \"FAIL\"," >> "$REPORT_FILE"
  echo "      \"violatingFiles\": [" >> "$REPORT_FILE"
  find src -type f \( -name "*.ts" -o -name "*.tsx" \) -exec wc -l {} + | awk '$1 > 500 {print "        \"" $2 " (" $1 " lines)\""}' | paste -sd ',' >> "$REPORT_FILE"
  echo "      ]" >> "$REPORT_FILE"
fi
echo "    }," >> "$REPORT_FILE"

# Check 2: Test coverage
echo "    {" >> "$REPORT_FILE"
echo "      \"check\": \"Test Coverage\"," >> "$REPORT_FILE"
COVERAGE=$(npm run test:coverage --silent | grep "All files" | awk '{print $10}' | tr -d '%')
echo "      \"coverage\": \"$COVERAGE%\"," >> "$REPORT_FILE"
if [ "$COVERAGE" -ge 80 ]; then
  echo "      \"status\": \"PASS\"" >> "$REPORT_FILE"
else
  echo "      \"status\": \"FAIL\"," >> "$REPORT_FILE"
  echo "      \"target\": \"80%\"" >> "$REPORT_FILE"
fi
echo "    }," >> "$REPORT_FILE"

# Check 3: TypeScript errors
echo "    {" >> "$REPORT_FILE"
echo "      \"check\": \"TypeScript Compilation\"," >> "$REPORT_FILE"
if npm run type-check --silent 2>&1 | grep -q "error TS"; then
  ERROR_COUNT=$(npm run type-check --silent 2>&1 | grep "error TS" | wc -l)
  echo "      \"errors\": $ERROR_COUNT," >> "$REPORT_FILE"
  echo "      \"status\": \"FAIL\"" >> "$REPORT_FILE"
else
  echo "      \"errors\": 0," >> "$REPORT_FILE"
  echo "      \"status\": \"PASS\"" >> "$REPORT_FILE"
fi
echo "    }" >> "$REPORT_FILE"

# Close report
echo "  ]," >> "$REPORT_FILE"

# Calculate overall compliance score
PASS_COUNT=$(grep '"status": "PASS"' "$REPORT_FILE" | wc -l)
TOTAL_CHECKS=3
COMPLIANCE_SCORE=$((PASS_COUNT * 100 / TOTAL_CHECKS))

echo "  \"complianceScore\": $COMPLIANCE_SCORE" >> "$REPORT_FILE"
echo "}" >> "$REPORT_FILE"

echo "✅ Compliance scan complete"
echo "📊 Compliance Score: $COMPLIANCE_SCORE%"
echo "📄 Report: $REPORT_FILE"

# Send notification if score < 95%
if [ $COMPLIANCE_SCORE -lt 95 ]; then
  echo "⚠️  Compliance score below target (95%)"
  # Send email/Slack notification here
fi
```

---

### Weekly Comprehensive Audit

**Time**: Sunday 2:00 AM
**Duration**: ~30 minutes

**Audit Checklist**:
- [ ] All files under 500 lines
- [ ] All commits have task references
- [ ] No unapproved colors in codebase
- [ ] No unapproved fonts in codebase
- [ ] No secrets in code
- [ ] Test coverage >80%
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Documentation up to date
- [ ] All PRs reviewed
- [ ] No unassigned tasks in progress

---

## Violation Logging

### Log Format

```json
{
  "timestamp": "2025-11-13T10:30:00Z",
  "ruleId": "RULE-FM-001",
  "severity": "CRITICAL",
  "description": "File exceeds 500 lines",
  "violator": "developer@example.com",
  "file": "src/services/USER-SERVICE.ts",
  "details": {
    "lineCount": 650,
    "threshold": 500
  },
  "action": "BLOCKED",
  "status": "UNRESOLVED",
  "notified": true,
  "resolution": null
}
```

### Log Files

```
logs/
├── violations.log              # All violations
├── compliance/
│   ├── compliance-report-2025-11-13.json
│   └── compliance-report-2025-11-12.json
├── agents/
│   ├── ui-helper.log
│   ├── technical.log
│   └── monitor.log
└── agent-comm.json            # Inter-agent communication
```

---

## Dashboard

### Real-Time Dashboard

```
┌─────────────────────────────────────────────────────────────┐
│                  COMPLIANCE DASHBOARD                        │
│                  Last Updated: 2025-11-13 10:30:00          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  COMPLIANCE SCORE: 96% ████████████████████░░  [Target: 95%]│
│                                                              │
│  📊 TODAY'S METRICS                                          │
│  ├─ Commits: 12                                             │
│  ├─ Rule Violations: 2 (both resolved)                      │
│  ├─ Files Checked: 156                                      │
│  └─ Tests Passing: 342/342 (100%)                           │
│                                                              │
│  🔴 CRITICAL VIOLATIONS: 0                                   │
│  🟡 MANDATORY VIOLATIONS: 2                                  │
│  🟢 RECOMMENDED VIOLATIONS: 5                                │
│                                                              │
│  📁 FILE HEALTH                                              │
│  ├─ Total Files: 156                                        │
│  ├─ Files Over 400 Lines: 3 ⚠️                              │
│  ├─ Files Over 500 Lines: 0 ✅                              │
│  └─ Average File Length: 187 lines                          │
│                                                              │
│  🧪 TEST COVERAGE                                            │
│  ├─ Overall: 85% ████████████████████░░░░  [Target: 80%]   │
│  ├─ Utilities: 100% ████████████████████████                │
│  ├─ Services: 92% ██████████████████████░░░                 │
│  └─ Components: 78% ███████████████████░░░░░                │
│                                                              │
│  ⚡ RECENT ACTIVITY                                          │
│  ├─ 10:25: File length violation detected & resolved        │
│  ├─ 10:18: PR#42 approved and merged                        │
│  ├─ 10:05: Daily compliance scan completed (96%)            │
│  └─ 09:30: 5 tasks completed                                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Notifications

### Notification Levels

| Severity | Channel | Recipients | Timing |
|----------|---------|----------|--------|
| CRITICAL | Slack + Email + Block | Developer + Team Lead | Immediate |
| MANDATORY | Slack + Email | Developer | Within 5 min |
| RECOMMENDED | Slack | Developer | Daily digest |

### Notification Templates

**Critical Violation**:
```
🚨 CRITICAL VIOLATION DETECTED

Rule: RULE-FM-001
Description: File exceeds 500 lines
File: src/services/USER-SERVICE.ts
Line Count: 650

Action Taken: Commit BLOCKED

Required Action: Split file into multiple files before committing
Deadline: Immediate

View Details: https://dashboard/violations/12345
```

**Daily Summary**:
```
📊 Daily Compliance Summary - 2025-11-13

Compliance Score: 96% (Target: 95%) ✅

Today's Activity:
• 12 commits
• 2 violations (both resolved)
• 5 tasks completed
• 342 tests passing

Action Required:
• 3 files approaching 500 line limit

Full Report: https://dashboard/compliance/2025-11-13
```

---

## Continuous Improvement

### Metrics Tracked

1. **Rule Violation Trends**
   - Track which rules are violated most
   - Identify patterns
   - Update training/documentation

2. **Developer Compliance Scores**
   - Individual compliance rates
   - Identify training needs
   - Recognize high performers

3. **Automation Effectiveness**
   - False positive rate
   - Time saved by automation
   - Developer satisfaction with tools

4. **Process Efficiency**
   - Time from violation to resolution
   - Repeat violations
   - Process bottlenecks

### Monthly Review

Review and adjust:
- Rule effectiveness
- Monitoring frequency
- Notification settings
- Dashboard metrics
- Automation scripts

---

## Emergency Procedures

### Critical Violation Protocol

1. **Immediate Actions**:
   - Block commit/deployment
   - Log violation
   - Notify developer
   - Alert team lead

2. **Investigation**:
   - Review violation details
   - Assess impact
   - Determine root cause

3. **Resolution**:
   - Developer fixes issue
   - Re-validation
   - Unblock if compliant
   - Document resolution

4. **Post-Mortem**:
   - Why did it happen?
   - How to prevent?
   - Update rules if needed
   - Update training

---

## Maintenance

### Weekly Maintenance Tasks
- [ ] Review violation logs
- [ ] Update rule patterns
- [ ] Refine automation scripts
- [ ] Clean old log files

### Monthly Maintenance Tasks
- [ ] Audit entire system
- [ ] Review effectiveness metrics
- [ ] Update documentation
- [ ] Train team on new rules

---

**Version**: 1.0.0
**Last Updated**: 2025-11-13
**Maintained By**: MONITOR Agent

**End of MONITORING.MD**
