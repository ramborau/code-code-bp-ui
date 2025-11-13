# Test Generation Command

Generate comprehensive tests for functions, components, or modules.

## Usage

```bash
/test [target] [options]
```

## Arguments

- `target`: File or function to generate tests for
- `--type`: Test type (unit, integration, e2e, all)
- `--framework`: Test framework (jest, vitest, pytest, etc.)
- `--coverage`: Target coverage percentage (default: 80)

## Examples

```bash
# Generate unit tests for a file
/test src/utils/calculator.ts

# Generate all test types
/test src/components/LoginForm.tsx --type=all

# Generate with specific framework
/test src/api/users.py --framework=pytest

# Generate with coverage target
/test src/services/ --coverage=90

# Generate integration tests
/test src/api/ --type=integration
```

## What It Generates

- Test cases for happy paths
- Edge case tests
- Error condition tests
- Mock data and fixtures
- Test utilities and helpers
- Coverage reports

## Output

Creates test files following project conventions:
- `*.test.ts` for TypeScript/JavaScript
- `*_test.py` for Python
- `*_test.go` for Go
- etc.
