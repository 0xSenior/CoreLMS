# Step 1: Core Structure, Cyber Design Tokens, and SSR-Safe Motion

This step establishes the monorepo shape and the frontend motion/design-system foundation.

## Target Folder Structure

```text
CoreLMS
|-- apps
|   |-- web
|   |   |-- app
|   |   |   |-- globals.css
|   |   |   |-- layout.tsx
|   |   |   `-- page.tsx
|   |   |-- components
|   |   |   |-- motion
|   |   |   |   `-- cyber-motion-shell.tsx
|   |   |   `-- providers
|   |   |       `-- app-providers.tsx
|   |   |-- features
|   |   |   |-- dashboard
|   |   |   |-- learning
|   |   |   |-- marketing
|   |   |   `-- video
|   |   |-- hooks
|   |   |   `-- use-cyber-gsap.ts
|   |   |-- lib
|   |   |   `-- gsap
|   |   |       `-- initialize-gsap.ts
|   |   |-- next.config.ts
|   |   |-- package.json
|   |   |-- postcss.config.mjs
|   |   |-- tailwind.config.js
|   |   `-- tsconfig.json
|   |-- api
|   |   |-- prisma
|   |   |   `-- schema.prisma
|   |   |-- src
|   |   |   |-- common
|   |   |   |   |-- decorators
|   |   |   |   |-- dto
|   |   |   |   |-- enums
|   |   |   |   |-- filters
|   |   |   |   |-- guards
|   |   |   |   |-- interceptors
|   |   |   |   `-- pipes
|   |   |   |-- config
|   |   |   |-- infra
|   |   |   |   |-- database
|   |   |   |   |-- mail
|   |   |   |   |-- storage
|   |   |   |   `-- video
|   |   |   |-- modules
|   |   |   |   |-- auth
|   |   |   |   |   |-- application
|   |   |   |   |   |-- domain
|   |   |   |   |   |-- dto
|   |   |   |   |   `-- infrastructure
|   |   |   |   |-- courses
|   |   |   |   |-- learning
|   |   |   |   |-- users
|   |   |   |   `-- video
|   |   |   |-- app.module.ts
|   |   |   `-- main.ts
|   |   |-- nest-cli.json
|   |   |-- package.json
|   |   |-- prisma.config.ts
|   |   `-- tsconfig.json
|   `-- shared
|       |-- package.json
|       |-- src
|       |   |-- index.ts
|       |   `-- security
|       |       `-- role.ts
|       `-- tsconfig.json
```

## Architectural Notes

- The frontend keeps animation primitives in `hooks` and `lib/gsap`, while visual components live under `components`.
- The backend uses module boundaries with `domain`, `application`, `dto`, and `infrastructure` folders so business logic does not leak into controllers or database adapters.
- Prisma starts on SQLite through `DATABASE_URL="file:./prisma/dev.db"`. To move to PostgreSQL later, change the Prisma datasource provider to `postgresql` and update the connection string.
- Client-side anti-debugging is only a deterrent. Real video protection must happen in the NestJS streaming layer with short-lived signed URLs, token/session/IP binding, origin checks, and rate limiting.
