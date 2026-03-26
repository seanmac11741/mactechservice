# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static business website for Mac's Technology Service (macstechservice.com), a computer repair and IT services business in Brush, CO. Hosted on Firebase Hosting.

## Build & Development

- **Runtime/Bundler:** Bun
- **Dev:** `bun build src/app.js --outdir ./public --watch` then open `public/index.html` with a live server (e.g. VS Code LiveServer)
- **Build:** `bun build src/app.js --outdir ./public` (or `bun run build`)
- **Deploy:** `firebase deploy` (after building)
- **Preview deploy:** `firebase hosting:channel:deploy preview_1`
- **Lint:** `npx eslint src/`

## Architecture

Single-page static site. No framework, no router, no backend.

- `src/app.js` — Source entry point. Initializes Firebase Analytics and sets up IntersectionObserver for scroll-reveal animations (`.hidden` -> `.show`).
- `public/` — Deploy root (served by Firebase Hosting). Contains the built `app.js` bundle, `index.html`, `styles.css`, and `images/`.
- `public/app.js` — **Built output** (bundled from `src/app.js`). Do not edit directly; edit `src/app.js` and rebuild.

## ESLint Rules

4-space indentation, single quotes, semicolons required, unix line endings.

## Firebase

Project ID: `mactechservice-2c9a1`. All routes rewrite to `/index.html`.
