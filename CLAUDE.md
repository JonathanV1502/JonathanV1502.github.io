# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a GitHub Pages site repository with a nested Svelte + Vite application in the `my-page/` directory. The actual web application lives in `my-page/`, while the repository root contains deployment configuration.

**Important**: All development commands must be run from within the `my-page/` directory or use the `--prefix my-page` flag with npm commands.

## Common Commands

All commands should be run from the `my-page/` directory:

```bash
# Development
npm run dev              # Start dev server with HMR
npm run build            # Build for production (outputs to my-page/dist)
npm run preview          # Preview production build locally

# Type checking
npm run check            # Run svelte-check and TypeScript compiler
```

From repository root:
```bash
# Install dependencies
npm ci --prefix my-page

# Build (used by GitHub Actions)
npm run build --prefix my-page
```

## Deployment

- The site automatically deploys to GitHub Pages on push to `main` branch
- GitHub Actions workflow (`.github/workflows/deploy.yml`) handles build and deployment
- Build artifacts from `my-page/dist` are deployed to GitHub Pages
- Working directory for CI build commands is `my-page/`

## Technology Stack

- **Frontend Framework**: Svelte 5 with TypeScript
- **Build Tool**: Vite 7
- **Type Checking**: TypeScript ~5.9 with svelte-check
- **Deployment**: GitHub Pages via GitHub Actions

## Architecture Notes

- This is a client-side only Svelte application (not SvelteKit)
- No routing framework included - add as needed
- Uses Vite's HMR but state preservation is disabled by default
- TypeScript configuration split across three files:
  - `tsconfig.json` - References other configs
  - `tsconfig.app.json` - App source code settings
  - `tsconfig.node.json` - Vite config settings
