# Docker Builder Skill

**Category**: Deployment
**Version**: 1.0.0

## Description

Generates optimized Dockerfiles and docker-compose configurations for various application types.

## Capabilities

- Multi-stage Dockerfile generation
- Framework-specific optimizations (Node.js, Python, Go, Java, etc.)
- Security best practices
- Layer caching optimization
- docker-compose.yml generation
- Health check configuration
- Volume and network setup

## Usage

```bash
# Via MCP
mcp://deployment/docker-builder

# Via slash command
/dockerize [framework]
```

## Parameters

- `framework`: "node" | "python" | "go" | "java" | "rust" | "php"
- `app_type`: "web" | "api" | "worker" | "cli"
- `optimization_level`: "development" | "production"
- `include_compose`: boolean (default: true)
- `base_image`: custom base image (optional)

## Example Output

For a Node.js application:

```dockerfile
# Production-optimized multi-stage Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && \
    npm cache clean --force

# Copy application files
COPY . .

# Build application (if needed)
RUN npm run build

# Production stage
FROM node:18-alpine

# Security: Run as non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

WORKDIR /app

# Copy from builder
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
COPY --from=builder --chown=nodejs:nodejs /app/package.json ./

USER nodejs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node healthcheck.js

CMD ["node", "dist/index.js"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
    volumes:
      - ./logs:/app/logs
    restart: unless-stopped
    networks:
      - app-network
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_PASSWORD=${DB_PASSWORD}
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - app-network

networks:
  app-network:
    driver: bridge

volumes:
  postgres-data:
```

## Best Practices Applied

- ✓ Multi-stage builds for smaller images
- ✓ Non-root user execution
- ✓ Layer caching optimization
- ✓ Security scanning
- ✓ Health checks
- ✓ Proper signal handling
- ✓ Minimal base images (Alpine)
