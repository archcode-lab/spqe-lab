# SPQE Lab Site

A static React site for SPQE Lab, built with React and Vite. The project uses a
restrained light visual system: white and soft-gray surfaces, deep navy text,
blue accents, subtle borders and shadows, generous spacing, readable
typography, and rounded cards.

## Scope

This repository contains the frontend lifecycle only:

- **UI library:** React
- **Development, build, and preview toolchain:** Vite
- **Testing:** Vitest
- **Runtime:** static browser application

Django is outside this lifecycle. This project does not require a Django server,
Django models, or backend persistence to develop, test, build, or preview the
site.

## Requirements

Install a supported current Node.js LTS release and npm. Verify the tools before
continuing:

node --version
npm --version

## Setup

From the project root, install the declared dependencies:

npm install

Start the Vite development server:

npm run dev

Vite prints the local address after startup. Open that address in a browser to
work on the site with hot module replacement.

## Available Commands

### Run tests

npm test

Use the test command to run the Vitest suite. Keep tests passing when changing
routing, locale behavior, content catalog data, or the contact submission
adapter.

### Build for production

npm run build

The production build is written to Vite's configured output directory, normally
`dist/`. Build output is generated material and should be recreated rather than
edited by hand.

### Preview the production build

npm run preview

Run this after `npm run build` to serve the built static files locally. Preview
is the appropriate final check for route loading, responsive layouts, asset
paths, and production-only rendering differences.

## Central Editing Locations

Keep content changes in their intended source modules rather than duplicating
copy across page components.

- `src/content` or the project's content catalog modules hold shared editorial
  text, portfolio data, and localized content.
- `src/components` contains reusable interface components and primitives.
- `src/pages` contains route-level page composition.
- `src/styles` and the CSS modules in the source tree define the visual system,
  responsive layout, focus states, and component presentation.
- `public` contains static public assets such as the favicon and visual files.

Before adding a new page-specific string, check the existing content and locale
modules for an established central entry point. Preserve semantic HTML
landmarks, logical heading order, accessible names, visible keyboard focus,
sufficient contrast, descriptive alternative text, and practical touch target
sizes when editing the interface.

Do not turn unavailable demos, downloads, repositories, or project destinations
into active links. Use plain text until a real destination is available.

## Contact Form Configuration

The contact form is a browser-side interaction. Submission data is kept in
component memory only for the current session.

Do not persist project descriptions, names, email addresses, or submission
payloads in localStorage, sessionStorage, IndexedDB, cookies, analytics logs,
or application logs. If a production delivery service is later introduced, add
its configuration through an explicitly reviewed integration rather than
embedding credentials or persistence behavior in the frontend.

## Release Readiness

Before publishing a release:

1. Install dependencies from the lockfile or declared package manifest.
2. Run `npm test` and resolve failures.
3. Run `npm run build` and resolve build warnings or errors.
4. Run `npm run preview` and inspect the built site at desktop and mobile widths.
5. Check navigation, locale behavior, page headings, keyboard focus, form labels,
   alternative text, and contrast.
6. Confirm that no placeholder or unavailable URL is exposed as an active link.
7. Confirm that contact form values remain in memory and are not written to
   browser storage, cookies, or logs.
8. Review public assets and generated output for only intended release content.

The deployable artifact is the static Vite build output. Hosting, backend
services, contact delivery infrastructure, and Django integration are separate
operational concerns.
