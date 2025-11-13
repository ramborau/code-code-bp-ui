# JSON Transformer Skill

**Category**: Data Processing
**Version**: 1.0.0

## Description

Transforms, validates, and manipulates JSON data structures with advanced querying and mapping capabilities.

## Capabilities

- JSON Schema validation
- JSONPath queries
- JQ-style transformations
- Data mapping and reshaping
- Batch processing
- Format conversion (JSON ↔ YAML ↔ XML ↔ CSV)

## Usage

```bash
# Via MCP
mcp://data-processing/json-transformer

# Via slash command
/transform-json [operation] [source]
```

## Parameters

- `operation`: "validate" | "query" | "transform" | "convert"
- `source`: file path or JSON string
- `schema`: JSON Schema for validation
- `query`: JSONPath or JQ expression
- `mapping`: transformation mapping rules
- `target_format`: "json" | "yaml" | "xml" | "csv"

## Examples

### Validation
```json
{
  "operation": "validate",
  "schema": "schemas/user.schema.json",
  "source": "data/users.json"
}
```

### Query
```json
{
  "operation": "query",
  "query": "$.users[?(@.age > 18)].name",
  "source": "data/users.json"
}
```

### Transform
```json
{
  "operation": "transform",
  "mapping": {
    "fullName": "concat(firstName, ' ', lastName)",
    "email": "toLower(email)",
    "metadata.created": "toISO8601(timestamp)"
  }
}
```

## Output

Returns transformed data in requested format with validation results and any errors encountered.
