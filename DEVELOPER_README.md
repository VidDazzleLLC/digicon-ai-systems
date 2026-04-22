# Developer Guide - Digicon AI Systems

This document explains how to build, test, and modify the application.

## Prerequisites
- Node.js (>=20.0.0)
- npm or yarn

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Copy `.env.example` to `.env` and fill in required API keys (e.g., OpenAI, Supabase).

## Development
To start the development server (Next.js):
```bash
npm run dev
```

To run the app within the Electron shell during development:
```bash
# Ensure next.js is running in one terminal, then in another:
npm run electron
```

## Building the Installer
The application is configured to build as a zero-touch installer that bundles the standalone Next.js server with an Electron shell.

To create the final saleable zip and installers, run:
```bash
npm run dist
```
This command will:
1. Generate the Prisma client.
2. Build the Next.js app to `.next/standalone`.
3. Use `electron-builder` to package the app into `.exe`, `.dmg`, and a `.zip` file found in the `dist/` directory.

## Core Modules Added
- `electron/main.js`: Main process handling Next.js lifecycle. Uses process.execPath for bundled Node.js context. Contains system tray icon and global shortcut features to enhance agent capabilities.
- `lib/agent-core/self-healing.js`: Health monitoring and auto-restarts.
- `lib/agent-core/self-improving.js`: Metrics collection and Bayesian optimization parameters, logging to `app.getPath('userData')`.
- `lib/agent-core/llm-router.js`: Dynamic router for LLM API selection.
- `electron/license.js`: Hardware fingerprinting and JWT license validation.
- `electron/reporting.js`: Data export to CSV/JSON.
