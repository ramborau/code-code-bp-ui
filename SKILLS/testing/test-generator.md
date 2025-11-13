# Test Generator Skill

**Category**: Testing
**Version**: 1.0.0

## Description

Automatically generates comprehensive test suites for functions, components, and APIs.

## Capabilities

- Unit test generation
- Integration test scaffolding
- E2E test creation
- Test data generation
- Mock/stub generation
- Coverage analysis
- Supports multiple frameworks: Jest, Mocha, Pytest, JUnit, etc.

## Usage

```bash
# Via MCP
mcp://testing/test-generator

# Via slash command
/generate-tests [target] [framework]
```

## Parameters

- `target`: file path or function name
- `framework`: "jest" | "mocha" | "pytest" | "junit" | "vitest"
- `test_type`: "unit" | "integration" | "e2e"
- `coverage_goal`: percentage (default: 80)
- `include_edge_cases`: boolean (default: true)
- `mock_external_deps`: boolean (default: true)

## Example

For a function:
```javascript
// src/utils/calculator.js
export function calculateDiscount(price, discountPercent) {
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    throw new Error('Invalid input');
  }
  return price * (1 - discountPercent / 100);
}
```

Generates:
```javascript
// src/utils/calculator.test.js
import { calculateDiscount } from './calculator';

describe('calculateDiscount', () => {
  it('should calculate discount correctly', () => {
    expect(calculateDiscount(100, 20)).toBe(80);
  });

  it('should handle zero discount', () => {
    expect(calculateDiscount(100, 0)).toBe(100);
  });

  it('should handle 100% discount', () => {
    expect(calculateDiscount(100, 100)).toBe(0);
  });

  it('should throw error for negative price', () => {
    expect(() => calculateDiscount(-100, 20)).toThrow('Invalid input');
  });

  it('should throw error for invalid discount percentage', () => {
    expect(() => calculateDiscount(100, -10)).toThrow('Invalid input');
    expect(() => calculateDiscount(100, 150)).toThrow('Invalid input');
  });

  it('should handle decimal values', () => {
    expect(calculateDiscount(99.99, 15)).toBeCloseTo(84.99, 2);
  });
});
```

## Features

- ✓ Edge case detection
- ✓ Boundary value analysis
- ✓ Error condition testing
- ✓ Mock generation for dependencies
- ✓ Test data factories
- ✓ Assertion suggestions
