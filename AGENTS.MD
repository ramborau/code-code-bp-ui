# AGENTS.MD - Skill Agents & Task Assignments

## Overview
This document defines the specialized skill agents that work together to create enterprise-grade solutions with strict adherence to requirements and development standards.

## Agent Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PROJECT WORKFLOW                          │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  1. UI-HELPER AGENT (Requirements & Planning)                │
│     └─> Gathers requirements                                 │
│     └─> Asks clarifying questions                            │
│     └─> Creates requirement documents                        │
│     └─> Validates completeness                               │
│                                                               │
│  2. TECHNICAL AGENT (Implementation & Documentation)         │
│     └─> Generates PRD.MD                                     │
│     └─> Creates CLAUDE.MD instructions                       │
│     └─> Writes RULES.MD                                      │
│     └─> Produces JSON configs                                │
│     └─> Splits long files                                    │
│                                                               │
│  3. MONITOR AGENT (Continuous Oversight)                     │
│     └─> Tracks task completion                               │
│     └─> Validates adherence to rules                         │
│     └─> Enforces task loops                                  │
│     └─> Reports deviations                                   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Agent Definitions

### 1. UI-HELPER AGENT

**Role**: Requirements Analyst & User Interface Specialist

**Responsibilities**:
- Engage with stakeholders to understand project requirements
- Ask detailed, clarifying questions about functionality, UI/UX, and technical needs
- Create comprehensive requirement documents
- Validate requirement completeness before passing to TECHNICAL agent
- Ensure branding and design consistency

**Communication Style**:
- Professional and friendly
- Asks open-ended questions
- Validates assumptions
- Summarizes understanding for confirmation

**Output Artifacts**:
- Initial requirement notes
- Clarifying questions document
- Validated requirements checklist
- UI/UX specifications
- Branding requirements

**Questions Framework**:
The UI-HELPER agent asks questions in these categories:
1. **Functional Requirements**: What should the system do?
2. **UI/UX Requirements**: How should it look and feel?
3. **Technical Requirements**: What tech stack and integrations?
4. **Branding Requirements**: Colors, fonts, logos, style guides?
5. **User Roles**: Who will use the system?
6. **Success Criteria**: How do we measure success?

**Example Workflow**:
```
User Request → UI-HELPER analyzes → Asks questions →
Gathers responses → Documents requirements →
Validates completeness → Passes to TECHNICAL agent
```

---

### 2. TECHNICAL AGENT

**Role**: Technical Architect & Documentation Specialist

**Responsibilities**:
- Receive validated requirements from UI-HELPER agent
- Generate comprehensive technical documentation
- Create modular, split files (no files > 500 lines)
- Produce JSON configuration files
- Write CLAUDE.MD instructions for AI development
- Create RULES.MD with strict development guidelines
- Generate TASKS.MD with task loops and assignments

**File Generation Rules**:
- **Maximum file length**: 500 lines
- **Split strategy**: Logical separation by feature/module
- **Naming convention**: `[MODULE]-[PART]-[NUMBER].md` or `.json`
- **Cross-references**: Include links between split files

**Output Artifacts**:
1. **PRD.MD** (or split PRD files): Product Requirements Document
2. **CLAUDE.MD**: Claude-specific development instructions
3. **RULES.MD**: Strict development rules and guidelines
4. **AGENTS.MD**: This file (self-documenting)
5. **BRANDING.MD**: Brand guidelines and design system
6. **TASKS.MD**: Task loops and agent assignments
7. **JSON Files**:
   - `project-config.json`: Project metadata
   - `tasks-config.json`: Task definitions and loops
   - `rules-validation.json`: Automated rule checking
   - `agents-config.json`: Agent behaviors and permissions

**File Splitting Example**:
```
Original: LARGE-PRD.MD (1000 lines)

Split into:
├── PRD-CORE.MD (Overview & Summary - 150 lines)
├── PRD-FUNCTIONAL.MD (Functional Requirements - 350 lines)
├── PRD-TECHNICAL.MD (Technical Requirements - 250 lines)
└── PRD-UI-UX.MD (UI/UX Requirements - 250 lines)
```

---

### 3. MONITOR AGENT

**Role**: Compliance & Quality Assurance Specialist

**Responsibilities**:
- Continuously monitor development progress
- Validate adherence to RULES.MD
- Check task completion against TASKS.MD
- Ensure Claude Code follows instructions in CLAUDE.MD
- Report deviations and violations
- Enforce task loops and workflows

**Monitoring Activities**:
1. **Pre-commit Checks**: Validate code before commits
2. **Rule Compliance**: Check against RULES.MD
3. **Task Verification**: Ensure tasks follow TASKS.MD
4. **Documentation Sync**: Keep docs up-to-date
5. **Quality Gates**: Block non-compliant changes

**Monitoring Frequency**:
- **Real-time**: During active development
- **Pre-commit**: Before any git commit
- **Scheduled**: Daily compliance reports
- **On-demand**: When requested by developers

**Violation Response**:
```
1. Detect violation
2. Log to monitoring.log
3. Block commit (if critical)
4. Notify developer with specific rule violated
5. Suggest corrective action
6. Track until resolved
```

---

## Agent Communication Protocol

### Inter-Agent Communication

```json
{
  "from": "UI-HELPER",
  "to": "TECHNICAL",
  "timestamp": "2025-11-13T10:30:00Z",
  "messageType": "REQUIREMENTS_VALIDATED",
  "payload": {
    "requirementsFile": "docs/requirements.md",
    "validationStatus": "COMPLETE",
    "confidence": "HIGH",
    "nextAction": "GENERATE_DOCUMENTATION"
  }
}
```

### Communication Flow

```
UI-HELPER → TECHNICAL: Requirements validated, ready for documentation
TECHNICAL → MONITOR: Documentation generated, ready for validation
MONITOR → TECHNICAL: Validation passed/failed, corrections needed
TECHNICAL → UI-HELPER: Questions about unclear requirements
```

---

## Task Assignment Matrix

| Task Category          | Primary Agent | Support Agent | Monitor Agent |
|------------------------|---------------|---------------|---------------|
| Requirement Gathering  | UI-HELPER     | -             | MONITOR       |
| PRD Generation         | TECHNICAL     | UI-HELPER     | MONITOR       |
| Rule Creation          | TECHNICAL     | -             | MONITOR       |
| Task Definition        | TECHNICAL     | UI-HELPER     | MONITOR       |
| Code Development       | Claude Code   | TECHNICAL     | MONITOR       |
| Quality Assurance      | MONITOR       | TECHNICAL     | -             |
| Documentation Updates  | TECHNICAL     | UI-HELPER     | MONITOR       |
| Compliance Checks      | MONITOR       | -             | -             |

---

## Agent Permissions

### UI-HELPER Permissions
- ✅ Read: All requirement docs, UI files, branding guidelines
- ✅ Write: Requirement documents, questions, notes
- ✅ Execute: Requirement validation scripts
- ❌ Blocked: Direct code changes, rule modifications

### TECHNICAL Permissions
- ✅ Read: All files and directories
- ✅ Write: Documentation files, JSON configs, markdown files
- ✅ Execute: Documentation generators, file splitters
- ⚠️  Limited: Code changes (only with MONITOR approval)

### MONITOR Permissions
- ✅ Read: All files and directories
- ✅ Write: Logs, reports, violation notices
- ✅ Execute: Validation scripts, compliance checkers
- ✅ Block: Non-compliant commits and changes

---

## Escalation Path

```
1. Developer makes change
2. MONITOR detects potential issue
3. MONITOR checks against RULES.MD
4. If violation:
   └─> MINOR: Warning logged, developer notified
   └─> MAJOR: Change blocked, TECHNICAL agent consulted
   └─> CRITICAL: All work stopped, team lead notified
5. TECHNICAL agent reviews
6. If approved: Override applied, documented
7. If rejected: Developer must correct, resubmit
```

---

## Success Metrics

### UI-HELPER Agent Metrics
- Requirements completeness score (target: >95%)
- Questions asked before development (target: 10-20)
- Requirement change rate (target: <10% after validation)
- Stakeholder satisfaction (target: >90%)

### TECHNICAL Agent Metrics
- Documentation coverage (target: 100%)
- File length compliance (target: 100% files <500 lines)
- JSON validation errors (target: 0)
- Cross-reference accuracy (target: 100%)

### MONITOR Agent Metrics
- Rule violations detected (track trend)
- False positive rate (target: <5%)
- Average response time (target: <1 minute)
- Compliance rate (target: >98%)

---

## Agent Updates & Versioning

```
AGENTS.MD Version: 1.0.0
Last Updated: 2025-11-13
Next Review: 2025-12-13

Change Log:
- 1.0.0 (2025-11-13): Initial agent definitions
```

**Update Protocol**:
1. Propose changes via TECHNICAL agent
2. Review by UI-HELPER for clarity
3. Validate by MONITOR for compliance
4. Update version number
5. Notify all team members
6. Archive previous version

---

## Quick Reference

### When to Engage Each Agent

**Use UI-HELPER when**:
- Starting a new project
- Requirements are unclear
- Stakeholder input needed
- UI/UX decisions required
- Branding questions arise

**Use TECHNICAL when**:
- Documentation needed
- File splitting required
- JSON configs to create
- Technical specs to write
- Rules to define

**Use MONITOR when**:
- Pre-commit validation
- Compliance checking
- Quality assurance
- Rule enforcement
- Deviation detection

---

## Contact & Support

For questions about agent behavior or to report issues:
- Review this file (AGENTS.MD)
- Check RULES.MD for specific guidelines
- Consult TASKS.MD for workflows
- See CLAUDE.MD for AI-specific instructions

---

**End of AGENTS.MD**
