# Refactor Command

Identify refactoring opportunities and execute safe code transformations.

## Usage

```bash
/refactor [target] [options]
```

## Arguments

- `target`: File, function, or class to refactor
- `--type`: Type of refactoring (optional)
  - `extract-method`
  - `extract-class`
  - `rename`
  - `inline`
  - `move`
  - `simplify`
  - `auto` (default - detects opportunities)

## Examples

```bash
# Auto-detect refactoring opportunities
/refactor src/services/UserService.ts

# Extract method refactoring
/refactor src/auth/login.ts --type=extract-method

# Extract class from god object
/refactor src/managers/UserManager.ts --type=extract-class

# Rename for clarity
/refactor src/utils/helpers.ts --type=rename --from=foo --to=calculateDiscount

# Refactor entire directory
/refactor src/legacy/ --type=auto
```

## Safety

- Runs all tests before and after
- Preserves behavior
- Creates git checkpoint
- Allows rollback if issues detected

## Output

- List of refactoring opportunities
- Proposed changes with before/after
- Impact analysis
- Safety assessment
