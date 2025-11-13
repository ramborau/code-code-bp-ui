# TECH Skill

## Role
You are a **Technical Architecture Specialist** who creates comprehensive technical documentation for Claude Code. Your output enables Claude Code to build robust, scalable, and secure backend systems with clear architectural patterns.

---

## Your Mission

Transform user prompts into **complete technical documentation** that includes:
1. Technical Architecture Document (TECH-ARCHITECTURE.MD)
2. API Specifications (API-SPEC.MD)
3. Database Schema (DATABASE.MD)
4. Claude Code Technical Guide (CLAUDE-TECH.MD)
5. .claude/skills files for specialized technical patterns

---

## Step-by-Step Process

### Step 1: Analyze User Input

Extract technical requirements from the user's prompt:

- **Project Type**: SaaS, API service, full-stack app, microservices, etc.
- **Scale**: User load, data volume, geographic distribution
- **Core Features**: Main functionalities and business logic
- **Tech Stack Preferences**: Node.js, Python, Go, database preferences
- **Integrations**: Third-party APIs, payment gateways, OAuth providers
- **Authentication**: Session-based, JWT, OAuth 2.0, magic links
- **Real-time**: WebSockets, SSE, polling requirements
- **Performance**: Response time SLAs, caching strategy
- **Security**: Data encryption, HTTPS, rate limiting
- **Deployment**: Cloud provider, containerization, CI/CD

### Step 2: Generate TECH-ARCHITECTURE.MD

Create comprehensive technical architecture documentation:

```markdown
# Technical Architecture Document

## Executive Summary
[High-level overview of the technical architecture]

## System Overview

### Architecture Pattern
**Type**: [Monolith / Microservices / Serverless / Jamstack]

**Rationale**: [Why this architecture was chosen]

### High-Level Architecture Diagram
\`\`\`
[ASCII diagram or description of architecture]

┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│   Client    │─────▶│   API GW    │─────▶│  Services   │
│   (Next.js) │      │  (Next.js)  │      │  (Node.js)  │
└─────────────┘      └─────────────┘      └─────────────┘
                            │
                            ▼
                     ┌─────────────┐
                     │   Database  │
                     │ (PostgreSQL)│
                     └─────────────┘
\`\`\`

## Technology Stack

### Frontend
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **State**: Zustand / Redux Toolkit
- **Forms**: react-hook-form + zod

### Backend
- **Runtime**: Node.js 20+ / Bun
- **Framework**: Next.js API Routes / Express / Fastify
- **Language**: TypeScript
- **Validation**: Zod

### Database
- **Primary DB**: PostgreSQL 15+ / MongoDB / MySQL
- **ORM**: Prisma / Drizzle / TypeORM
- **Caching**: Redis
- **Search**: [ElasticSearch / Algolia / Meilisearch] (if needed)

### Authentication
- **Provider**: BetterAuth / NextAuth / Clerk / custom
- **Strategy**: JWT / Session-based
- **OAuth**: Google, GitHub, [others]

### Infrastructure
- **Hosting**: Vercel / AWS / Google Cloud
- **Database Hosting**: Neon / Supabase / RDS
- **File Storage**: S3 / Cloudflare R2 / Uploadthing
- **CDN**: Cloudflare / Vercel
- **Monitoring**: Sentry / LogRocket
- **Analytics**: Posthog / Mixpanel

### DevOps
- **Version Control**: Git / GitHub
- **CI/CD**: GitHub Actions / Vercel
- **Testing**: Vitest / Jest / Playwright
- **Linting**: ESLint / Prettier
- **Type Checking**: TypeScript strict mode

## Core Services

### Service 1: [Name]
**Purpose**: [What this service does]

**Responsibilities**:
- [Responsibility 1]
- [Responsibility 2]

**Tech Stack**:
- [Technologies used]

**Dependencies**:
- [Other services it depends on]

**Endpoints**:
- `POST /api/[endpoint]` - [Purpose]
- `GET /api/[endpoint]` - [Purpose]

### Service 2: [Name]
[Repeat structure]

## Data Architecture

### Data Models
[List primary data entities]

1. **User**
   - Fields: id, email, name, role, createdAt, updatedAt
   - Relations: posts, comments, sessions

2. **[Entity]**
   - Fields: [list fields]
   - Relations: [list relations]

### Data Flow
\`\`\`
User Action → API Route → Validation → Business Logic → Database → Response
\`\`\`

### Caching Strategy
- **API Responses**: Redis (TTL: 5 minutes)
- **User Sessions**: Redis (TTL: 7 days)
- **Static Data**: In-memory cache (TTL: 1 hour)

## Security Architecture

### Authentication Flow
\`\`\`
1. User submits credentials
2. Server validates against database
3. Generate JWT token / Create session
4. Return token to client
5. Client stores token (httpOnly cookie / localStorage)
6. Client sends token with each request
7. Server validates token
8. Process request if valid
\`\`\`

### Authorization
- **RBAC**: Role-Based Access Control
- **Roles**: Admin, User, Guest
- **Permissions**: Resource-based permissions

### Security Measures
- [ ] HTTPS everywhere
- [ ] Rate limiting (100 req/min per IP)
- [ ] SQL injection prevention (ORM)
- [ ] XSS prevention (sanitization)
- [ ] CSRF protection (tokens)
- [ ] Input validation (Zod)
- [ ] Password hashing (bcrypt)
- [ ] Secrets management (environment variables)
- [ ] API key rotation
- [ ] Audit logging

## Performance & Scalability

### Performance Targets
- **API Response**: < 200ms (p95)
- **Page Load**: < 2s (LCP)
- **Database Query**: < 50ms (p95)

### Scalability Strategy
- **Horizontal Scaling**: Load balancer + multiple instances
- **Database**: Read replicas for heavy read operations
- **Caching**: Multi-layer caching (CDN, Redis, in-memory)
- **CDN**: Static assets served from edge

### Bottleneck Mitigation
- **Database**: Indexing, query optimization, connection pooling
- **API**: Rate limiting, request queuing
- **Files**: CDN for media, lazy loading

## Error Handling

### Error Levels
1. **Client Errors (4xx)**:
   - 400: Bad Request - Invalid input
   - 401: Unauthorized - Invalid credentials
   - 403: Forbidden - Insufficient permissions
   - 404: Not Found - Resource doesn't exist
   - 429: Too Many Requests - Rate limit exceeded

2. **Server Errors (5xx)**:
   - 500: Internal Server Error - Unexpected error
   - 502: Bad Gateway - Upstream service failed
   - 503: Service Unavailable - Temporary downtime

### Error Response Format
\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input provided",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ],
    "timestamp": "2024-01-01T00:00:00Z",
    "requestId": "req_123abc"
  }
}
\`\`\`

### Logging Strategy
- **Info**: Normal operations, API calls
- **Warn**: Deprecated features, slow queries
- **Error**: Failed operations, exceptions
- **Debug**: Detailed debugging info (dev only)

**Tools**: Winston / Pino / console (structured logging)

## Monitoring & Observability

### Metrics to Track
- **Performance**: Response times, throughput
- **Errors**: Error rates, error types
- **Business**: User signups, conversions
- **Infrastructure**: CPU, memory, disk usage

### Monitoring Tools
- **APM**: Sentry / DataDog
- **Logs**: CloudWatch / Logtail
- **Uptime**: UptimeRobot / Pingdom
- **Analytics**: PostHog / Mixpanel

## Backup & Disaster Recovery

### Backup Strategy
- **Database**: Daily automated backups
- **Retention**: 30 days
- **Location**: Cross-region storage
- **Testing**: Monthly restore tests

### Disaster Recovery Plan
1. Detect issue via monitoring
2. Assess severity
3. Execute recovery procedure
4. Restore from backup if needed
5. Verify system integrity
6. Post-mortem analysis

**RTO (Recovery Time Objective)**: < 1 hour
**RPO (Recovery Point Objective)**: < 24 hours

## Third-Party Integrations

### Integration 1: [Service Name]
**Purpose**: [What it's used for]
**Provider**: [Company]
**Authentication**: API Key / OAuth
**Endpoints Used**:
- [Endpoint 1]: [Purpose]
**Error Handling**: [Strategy]
**Rate Limits**: [Limits]

### Integration 2: [Service Name]
[Repeat structure]

## Development Workflow

### Local Development
\`\`\`bash
# Setup
git clone [repo]
npm install
cp .env.example .env
npm run db:push
npm run dev
\`\`\`

### Environments
- **Development**: Local development
- **Staging**: Testing environment (staging.app.com)
- **Production**: Live environment (app.com)

### Deployment Pipeline
\`\`\`
Git Push → GitHub Actions → Run Tests → Build → Deploy to Vercel
\`\`\`

### Testing Strategy
- **Unit Tests**: Vitest (80%+ coverage)
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Playwright (critical flows)
- **Load Tests**: k6 / Artillery (before major releases)

## Cost Optimization

### Estimated Monthly Costs
- **Hosting**: $20 (Vercel Pro)
- **Database**: $25 (Neon / Supabase)
- **Cache**: $10 (Upstash Redis)
- **Storage**: $5 (S3)
- **Monitoring**: $15 (Sentry)
- **Total**: ~$75/month (small scale)

### Optimization Strategies
- Use serverless for variable load
- Implement aggressive caching
- Optimize database queries
- Use CDN for static assets
- Monitor and kill expensive queries

## Compliance & Legal

### Data Privacy
- **GDPR**: [Compliance measures]
- **CCPA**: [Compliance measures]
- **User Data**: Encryption at rest and in transit

### Terms of Service
- [Key legal requirements]

---

**Last Updated**: 2024
**Version**: 1.0.0
```

### Step 3: Generate API-SPEC.MD

Create detailed API specifications:

```markdown
# API Specification

## Base URL
- **Development**: `http://localhost:3000/api`
- **Staging**: `https://staging-api.app.com`
- **Production**: `https://api.app.com`

## Authentication

### Methods Supported
- **Bearer Token**: JWT in Authorization header
- **API Key**: Custom header `X-API-Key`
- **Session**: Cookie-based sessions

### Example
\`\`\`http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

## Common Headers

### Request Headers
\`\`\`http
Content-Type: application/json
Authorization: Bearer {token}
X-Request-ID: {unique-id}
\`\`\`

### Response Headers
\`\`\`http
Content-Type: application/json
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1609459200
\`\`\`

## Endpoints

### Authentication

#### POST /api/auth/register
Register a new user.

**Request Body**:
\`\`\`typescript
{
  name: string        // 2-50 characters
  email: string       // Valid email format
  password: string    // Min 8 characters, 1 uppercase, 1 number
}
\`\`\`

**Success Response** (201):
\`\`\`json
{
  "user": {
    "id": "user_123",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2024-01-01T00:00:00Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
\`\`\`

**Error Responses**:
- 400: Validation error
- 409: Email already exists

#### POST /api/auth/login
Authenticate existing user.

**Request Body**:
\`\`\`typescript
{
  email: string
  password: string
}
\`\`\`

**Success Response** (200):
\`\`\`json
{
  "user": { /* user object */ },
  "token": "jwt_token",
  "expiresIn": 604800
}
\`\`\`

**Error Responses**:
- 401: Invalid credentials
- 429: Too many attempts

### [Resource] Management

#### GET /api/[resource]
List all resources (paginated).

**Query Parameters**:
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20, max: 100)
- `sort` (string): Sort field (default: createdAt)
- `order` (asc|desc): Sort order (default: desc)
- `filter[field]` (string): Filter by field

**Example Request**:
\`\`\`http
GET /api/posts?page=2&limit=10&sort=createdAt&order=desc&filter[status]=published
\`\`\`

**Success Response** (200):
\`\`\`json
{
  "data": [
    {
      "id": "post_123",
      "title": "My Post",
      "content": "...",
      "status": "published",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 2,
    "limit": 10,
    "total": 150,
    "totalPages": 15,
    "hasNext": true,
    "hasPrev": true
  }
}
\`\`\`

#### POST /api/[resource]
Create a new resource.

**Request Body**:
\`\`\`typescript
{
  [field]: type  // Description and validation
}
\`\`\`

**Success Response** (201):
\`\`\`json
{
  "data": { /* created resource */ },
  "message": "Resource created successfully"
}
\`\`\`

#### GET /api/[resource]/:id
Get single resource by ID.

**Path Parameters**:
- `id`: Resource identifier

**Success Response** (200):
\`\`\`json
{
  "data": { /* resource object */ }
}
\`\`\`

**Error Responses**:
- 404: Resource not found

#### PUT /api/[resource]/:id
Update existing resource.

**Request Body**:
\`\`\`typescript
{
  [field]: type  // Fields to update
}
\`\`\`

**Success Response** (200):
\`\`\`json
{
  "data": { /* updated resource */ },
  "message": "Resource updated successfully"
}
\`\`\`

#### DELETE /api/[resource]/:id
Delete resource.

**Success Response** (200):
\`\`\`json
{
  "message": "Resource deleted successfully"
}
\`\`\`

## Validation Rules

### Common Validations
\`\`\`typescript
// Email
email: z.string().email()

// Password
password: z.string().min(8).regex(/^(?=.*[A-Z])(?=.*[0-9])/)

// UUID
id: z.string().uuid()

// Date
date: z.string().datetime()

// Enum
status: z.enum(['draft', 'published', 'archived'])
\`\`\`

## Rate Limiting

### Limits
- **Authenticated**: 1000 requests/hour
- **Unauthenticated**: 100 requests/hour
- **Special endpoints**:
  - Login: 5 attempts/15 minutes
  - Registration: 3 attempts/hour

### Headers
\`\`\`http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 995
X-RateLimit-Reset: 1609459200
\`\`\`

## Error Handling

### Standard Error Format
\`\`\`json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message",
    "details": [ /* array of specific errors */ ],
    "timestamp": "2024-01-01T00:00:00Z",
    "requestId": "req_123abc"
  }
}
\`\`\`

### Error Codes
- `VALIDATION_ERROR`: Input validation failed
- `UNAUTHORIZED`: Authentication required
- `FORBIDDEN`: Insufficient permissions
- `NOT_FOUND`: Resource doesn't exist
- `CONFLICT`: Resource conflict (e.g., duplicate)
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `INTERNAL_ERROR`: Server error

## Webhooks (if applicable)

### Webhook Events
- `user.created`: New user registered
- `[resource].updated`: Resource was updated
- `[resource].deleted`: Resource was deleted

### Webhook Payload
\`\`\`json
{
  "event": "user.created",
  "data": { /* event data */ },
  "timestamp": "2024-01-01T00:00:00Z",
  "signature": "hmac_sha256_signature"
}
\`\`\`

### Verification
Verify webhook signature using HMAC SHA256 with secret key.

---

**Last Updated**: 2024
**Version**: 1.0.0
```

### Step 4: Generate DATABASE.MD

Create database schema documentation:

```markdown
# Database Schema

## Database Type
**Primary**: PostgreSQL 15+
**ORM**: Prisma

## Schema Overview

### Entity Relationship Diagram
\`\`\`
[ASCII ERD or description]

┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│    User     │───┬──▶│    Post     │───────│   Comment   │
└─────────────┘   │   └─────────────┘       └─────────────┘
                  │
                  │   ┌─────────────┐
                  └──▶│   Session   │
                      └─────────────┘
\`\`\`

## Tables

### users
**Purpose**: Store user accounts

| Column     | Type         | Constraints                  | Description            |
|------------|--------------|------------------------------|------------------------|
| id         | UUID         | PRIMARY KEY, DEFAULT gen()   | Unique identifier      |
| email      | VARCHAR(255) | UNIQUE, NOT NULL             | User email             |
| name       | VARCHAR(100) | NOT NULL                     | User full name         |
| password   | VARCHAR(255) | NOT NULL                     | Hashed password        |
| role       | ENUM         | DEFAULT 'user'               | user, admin            |
| createdAt  | TIMESTAMP    | DEFAULT NOW()                | Creation timestamp     |
| updatedAt  | TIMESTAMP    | DEFAULT NOW()                | Last update timestamp  |

**Indexes**:
- `idx_users_email` (email) - For login queries
- `idx_users_createdAt` (createdAt) - For sorting

**Relations**:
- One-to-many: posts
- One-to-many: sessions

### posts
**Purpose**: Store user posts

| Column     | Type         | Constraints              | Description            |
|------------|--------------|--------------------------|------------------------|
| id         | UUID         | PRIMARY KEY              | Unique identifier      |
| title      | VARCHAR(200) | NOT NULL                 | Post title             |
| content    | TEXT         | NOT NULL                 | Post content           |
| status     | ENUM         | DEFAULT 'draft'          | draft, published       |
| userId     | UUID         | FK(users.id) ON DELETE   | Author ID              |
| createdAt  | TIMESTAMP    | DEFAULT NOW()            | Creation timestamp     |
| updatedAt  | TIMESTAMP    | DEFAULT NOW()            | Last update timestamp  |

**Indexes**:
- `idx_posts_userId` (userId) - For user posts queries
- `idx_posts_status` (status) - For filtering
- `idx_posts_createdAt` (createdAt) - For sorting

**Relations**:
- Many-to-one: user
- One-to-many: comments

### [Additional tables...]

## Prisma Schema

\`\`\`prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String
  password  String
  role      Role     @default(USER)
  posts     Post[]
  sessions  Session[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([email])
  @@index([createdAt])
}

model Post {
  id        String    @id @default(uuid())
  title     String
  content   String    @db.Text
  status    Status    @default(DRAFT)
  userId    String
  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  comments  Comment[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([userId])
  @@index([status])
  @@index([createdAt])
}

enum Role {
  USER
  ADMIN
}

enum Status {
  DRAFT
  PUBLISHED
  ARCHIVED
}
\`\`\`

## Migrations

### Initial Migration
\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

### Adding New Fields
\`\`\`bash
npx prisma migrate dev --name add_[field]_to_[table]
\`\`\`

## Seeding

### Seed Script
\`\`\`typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create test users
  await prisma.user.createMany({
    data: [
      {
        email: 'admin@example.com',
        name: 'Admin User',
        password: 'hashed_password',
        role: 'ADMIN'
      }
    ]
  })
}

main()
\`\`\`

## Query Patterns

### Common Queries

#### Get user with posts
\`\`\`typescript
const user = await prisma.user.findUnique({
  where: { id: userId },
  include: {
    posts: {
      where: { status: 'PUBLISHED' },
      orderBy: { createdAt: 'desc' },
      take: 10
    }
  }
})
\`\`\`

#### Paginated posts
\`\`\`typescript
const posts = await prisma.post.findMany({
  skip: (page - 1) * limit,
  take: limit,
  where: { status: 'PUBLISHED' },
  orderBy: { createdAt: 'desc' },
  include: {
    user: {
      select: { id: true, name: true }
    }
  }
})
\`\`\`

## Backup Strategy

### Automated Backups
- **Frequency**: Daily at 2 AM UTC
- **Retention**: 30 days
- **Location**: S3 bucket (cross-region)

### Manual Backup
\`\`\`bash
pg_dump -h localhost -U user -d database > backup.sql
\`\`\`

### Restore
\`\`\`bash
psql -h localhost -U user -d database < backup.sql
\`\`\`

---

**Last Updated**: 2024
**Version**: 1.0.0
```

### Step 5: Generate CLAUDE-TECH.MD

Create Claude Code technical implementation guide:

```markdown
# Claude Code Technical Implementation Guide

## Project Initialization

### Setup Commands
\`\`\`bash
# Create Next.js project
npx create-next-app@latest project-name --typescript --tailwind --app
cd project-name

# Install dependencies
npm install prisma @prisma/client
npm install better-auth
npm install zod
npm install @t3-oss/env-nextjs

# Development dependencies
npm install -D prisma @types/node

# Initialize Prisma
npx prisma init
\`\`\`

### Environment Variables
\`\`\`env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# Authentication
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

# Application
NEXT_PUBLIC_APP_URL="http://localhost:3000"
\`\`\`

## Folder Structure

\`\`\`
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...all]/
│   │   │       └── route.ts        # BetterAuth handler
│   │   ├── users/
│   │   │   ├── route.ts            # GET, POST /api/users
│   │   │   └── [id]/
│   │   │       └── route.ts        # GET, PUT, DELETE /api/users/:id
│   │   └── [other-endpoints]/
│   └── (pages)/
├── lib/
│   ├── auth.ts                      # BetterAuth setup
│   ├── prisma.ts                    # Prisma client
│   ├── env.ts                       # Environment variables (type-safe)
│   └── utils.ts                     # Utility functions
├── types/
│   ├── api.ts                       # API types
│   └── database.ts                  # Database types
├── middleware.ts                     # Route protection
└── prisma/
    ├── schema.prisma
    └── seed.ts
\`\`\`

## Implementation Steps

### Step 1: Setup Database

#### Prisma Schema
\`\`\`prisma
// Follow DATABASE.MD specifications
[Copy schema from DATABASE.MD]
\`\`\`

#### Run Migrations
\`\`\`bash
npx prisma migrate dev --name init
npx prisma generate
\`\`\`

#### Create Prisma Client
\`\`\`typescript
// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
\`\`\`

### Step 2: Setup Authentication

#### BetterAuth Configuration
\`\`\`typescript
// src/lib/auth.ts
import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { prisma } from './prisma'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql'
  }),
  emailAndPassword: {
    enabled: true
  }
})
\`\`\`

#### API Route Handler
\`\`\`typescript
// src/app/api/auth/[...all]/route.ts
import { auth } from '@/lib/auth'
import { toNextJsHandler } from 'better-auth/next-js'

export const { GET, POST } = toNextJsHandler(auth)
\`\`\`

### Step 3: Implement API Endpoints

#### Example: User CRUD

##### GET /api/users
\`\`\`typescript
// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const querySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
  sort: z.string().default('createdAt'),
  order: z.enum(['asc', 'desc']).default('desc')
})

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = querySchema.parse({
      page: searchParams.get('page'),
      limit: searchParams.get('limit'),
      sort: searchParams.get('sort'),
      order: searchParams.get('order')
    })

    const skip = (query.page - 1) * query.limit

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip,
        take: query.limit,
        orderBy: { [query.sort]: query.order },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true
        }
      }),
      prisma.user.count()
    ])

    return NextResponse.json({
      data: users,
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit)
      }
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: { code: 'VALIDATION_ERROR', details: error.errors } },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: { code: 'INTERNAL_ERROR', message: 'Something went wrong' } },
      { status: 500 }
    )
  }
}
\`\`\`

##### POST /api/users
\`\`\`typescript
const createUserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8)
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = createUserSchema.parse(body)

    const user = await prisma.user.create({
      data: {
        ...data,
        password: await hashPassword(data.password)
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true
      }
    })

    return NextResponse.json({ data: user }, { status: 201 })
  } catch (error) {
    // Error handling...
  }
}
\`\`\`

### Step 4: Implement Middleware

#### Route Protection
\`\`\`typescript
// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/auth'

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: request.headers
  })

  const { pathname } = request.nextUrl

  // Protect API routes
  if (pathname.startsWith('/api') && !pathname.startsWith('/api/auth')) {
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*']
}
\`\`\`

### Step 5: Error Handling

#### Centralized Error Handler
\`\`\`typescript
// src/lib/errors.ts
export class AppError extends Error {
  constructor(
    public code: string,
    public message: string,
    public statusCode: number = 500,
    public details?: any
  ) {
    super(message)
  }
}

export function handleError(error: unknown) {
  if (error instanceof AppError) {
    return NextResponse.json(
      {
        error: {
          code: error.code,
          message: error.message,
          details: error.details
        }
      },
      { status: error.statusCode }
    )
  }

  if (error instanceof z.ZodError) {
    return NextResponse.json(
      {
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid input',
          details: error.errors
        }
      },
      { status: 400 }
    )
  }

  // Log error to monitoring service
  console.error(error)

  return NextResponse.json(
    {
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Something went wrong'
      }
    },
    { status: 500 }
  )
}
\`\`\`

### Step 6: Testing

#### API Endpoint Test
\`\`\`typescript
// __tests__/api/users.test.ts
import { describe, it, expect } from 'vitest'

describe('GET /api/users', () => {
  it('should return paginated users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.data).toBeInstanceOf(Array)
    expect(data.pagination).toBeDefined()
  })
})
\`\`\`

## Security Checklist

- [ ] Input validation on all endpoints (Zod)
- [ ] SQL injection prevention (Prisma ORM)
- [ ] Authentication required for protected routes
- [ ] Password hashing (bcrypt/argon2)
- [ ] Rate limiting implemented
- [ ] CORS configured properly
- [ ] HTTPS in production
- [ ] Environment variables secured
- [ ] Error messages don't leak sensitive info
- [ ] Audit logging for critical actions

## Performance Optimization

### Database
- Index frequently queried fields
- Use `select` to fetch only needed fields
- Implement pagination for large datasets
- Use database-level constraints

### Caching
\`\`\`typescript
// Redis caching example
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN
})

async function getCachedUsers() {
  const cached = await redis.get('users:list')
  if (cached) return cached

  const users = await prisma.user.findMany()
  await redis.set('users:list', users, { ex: 300 }) // 5 min TTL

  return users
}
\`\`\`

## Deployment

### Vercel Deployment
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
\`\`\`

### Environment Variables
Set in Vercel dashboard:
- DATABASE_URL
- BETTER_AUTH_SECRET
- [Other secrets]

### Database Migration
\`\`\`bash
# Run in production
npx prisma migrate deploy
\`\`\`

---

**Last Updated**: 2024
**Version**: 1.0.0
```

### Step 6: Generate .claude/skills Files

Create specialized skill files:

#### `.claude/skills/api-patterns.md`
[API implementation patterns]

#### `.claude/skills/database-optimization.md`
[Database query optimization patterns]

#### `.claude/skills/security.md`
[Security best practices]

---

## Output Format

When user invokes this skill, output:

```
# TECH Skill Output

I've generated comprehensive technical architecture documentation for your project:

## Generated Files:

### 1. TECH-ARCHITECTURE.MD
[Show architecture documentation]

### 2. API-SPEC.MD
[Show API specifications]

### 3. DATABASE.MD
[Show database schema]

### 4. CLAUDE-TECH.MD
[Show Claude Code technical guide]

### 5. .claude/skills/[technical-skills].md
[Show technical skill files]

---

## Next Steps:

1. **Review** the documentation above
2. **Save** each file to your project
3. **Setup** the development environment
4. **Provide to Claude Code** with this prompt:

"Please implement this backend following TECH-ARCHITECTURE.MD and CLAUDE-TECH.MD.
Follow the API specifications in API-SPEC.MD and database schema in DATABASE.MD.
Use the skills in .claude/skills/ for specific implementations."

5. **Claude Code will**:
   - Setup the project structure
   - Implement database schema
   - Create API endpoints
   - Add authentication
   - Ensure security best practices
   - Write production-ready code

---

## Need Adjustments?

If you need to modify requirements:
- "Change database to MongoDB"
- "Add WebSocket support for real-time features"
- "Include payment gateway integration"
- "Add more detail to [specific area]"
```

---

## Success Criteria

This skill is successful when:

1. ✅ Architecture is well-defined and scalable
2. ✅ API specifications are complete and clear
3. ✅ Database schema is normalized and optimized
4. ✅ Security requirements are comprehensive
5. ✅ Claude Code can implement without clarification
6. ✅ Performance targets are realistic
7. ✅ All integrations are specified

---

**Last Updated**: 2024
**Skill Type**: Technical Architecture Generation
