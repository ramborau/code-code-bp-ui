# Code Review Command

Perform a comprehensive code review using the code-reviewer skill.

## Usage

```bash
/review [target]
```

## Arguments

- `target` (optional): Specific file, directory, or git diff to review
  - If omitted, reviews uncommitted changes
  - Can be a file path: `/review src/auth/login.ts`
  - Can be a commit range: `/review HEAD~3..HEAD`
  - Can be a PR number: `/review #123`

## What It Does

1. Analyzes code quality and architecture
2. Identifies security vulnerabilities
3. Checks performance implications
4. Validates best practices
5. Reviews test coverage
6. Provides actionable feedback

## Examples

```bash
# Review uncommitted changes
/review

# Review specific file
/review src/components/UserDashboard.tsx

# Review last 3 commits
/review HEAD~3..HEAD

# Review entire directory
/review src/auth/

# Review with focus on security
/review --focus=security src/
```

## Output

Provides detailed review with:
- Summary and overall assessment
- Critical issues (blocking)
- Suggestions for improvement
- Security analysis
- Performance notes
- Test coverage assessment
- Approval status
