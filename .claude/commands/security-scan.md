# Security Scan Command

Perform comprehensive security analysis using the security-agent.

## Usage

```bash
/security-scan [scope] [options]
```

## Arguments

- `scope`: What to scan (default: entire project)
  - `all`: Full security audit
  - `dependencies`: Check for vulnerable dependencies
  - `secrets`: Scan for hardcoded secrets
  - `code`: Static code analysis for vulnerabilities
  - `config`: Check security configurations

## Examples

```bash
# Full security scan
/security-scan

# Scan dependencies only
/security-scan dependencies

# Scan for secrets
/security-scan secrets

# Scan specific directory
/security-scan src/auth/ --focus=authentication

# Quick scan (critical issues only)
/security-scan --severity=critical
```

## Checks

### OWASP Top 10
- Injection vulnerabilities
- Broken authentication
- Sensitive data exposure
- XML external entities (XXE)
- Broken access control
- Security misconfiguration
- Cross-site scripting (XSS)
- Insecure deserialization
- Known vulnerable components
- Insufficient logging

### Additional Checks
- Hardcoded secrets and credentials
- Weak cryptography
- Insecure dependencies
- SQL injection vectors
- Command injection
- Path traversal
- CSRF vulnerabilities
- Insecure direct object references

## Output

Security report with:
- Executive summary
- Critical vulnerabilities
- Risk assessment
- Remediation steps
- Compliance status
- Detailed findings

## Severity Levels

- **Critical**: Immediate action required
- **High**: Fix before deployment
- **Medium**: Address in current sprint
- **Low**: Schedule for future sprint
- **Info**: Awareness only
