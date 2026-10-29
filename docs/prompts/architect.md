/architect
The framework is already installed in this repo. Read package.json and use only what is installed. If package.json is missing, stop.
The stack is final. Do not ask about it and do not change it.
- Client: Next.js App Router, TypeScript, Tailwind CSS
- Server: Next.js route handlers on the Node.js runtime
- Database, only if this idea stores data: one local SQLite file, data/app.sqlite, accessed with better-sqlite3. If it stores nothing, no database.
- No Postgres, no auth, no accounts, no deploy, no third-party services
- Dev command: npm run dev
- Test command: npm test
One shot for the schema only. Pick the tables this idea needs. Record those choices under Assumptions. Do not ask. Leave Open decisions empty.
Idea:
