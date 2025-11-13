# Debug Command

Systematically debug issues using the bug-hunter skill.

## Usage

```bash
/debug [issue-description]
```

## Arguments

- `issue-description`: Description of the bug or error
- Can also accept error logs, stack traces, or file paths

## Examples

```bash
# Debug with description
/debug "Login fails with 500 error for some users"

# Debug with error log
/debug "TypeError: Cannot read property 'name' of undefined at UserService.ts:42"

# Debug specific file
/debug src/auth/login.ts

# Debug with reproduction steps
/debug "1. Navigate to /profile 2. Click edit 3. App crashes"
```

## Process

1. Reproduces the issue
2. Isolates the cause
3. Performs root cause analysis
4. Proposes fix
5. Adds regression test
6. Verifies fix

## Output

- Detailed bug report
- Root cause explanation
- Proposed fix with code
- Regression test
- Prevention recommendations
