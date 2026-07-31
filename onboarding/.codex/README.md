# Codex Notes

## Repo Shape

This is a static HTML/CSS/JS app. There is no package manager, build step, or framework.

Open `index.html` directly in a browser for normal manual review. If browser restrictions or local testing require a server, use a simple local server from the repo root.

## Current Architecture

- `app.js` owns most behavior and content.
- `getWalkthroughSlides()` builds the slideshow deck.
- `renderSlide()` renders the active slide.
- `updateRevealState()` toggles staged reveal classes in place.
- `advanceDeck()` and `retreatDeck()` control reveal-first navigation.
- `renderResources()` builds the Resources & Guides view.
- `officialLinks` and `labTermGroups` live inside `renderResources()`.

There are older data arrays still in `app.js`; do not assume every array is currently rendered. Trace from the render functions before editing.

## Verification

Run this after changing JavaScript:

```powershell
node --check app.js
```

For layout or behavior changes, also verify in the browser:

- Home has exactly two primary full-screen choices.
- Slideshow fills the available screen and does not require vertical scrolling on common desktop sizes.
- Staged reveals show one component at a time without rerendering the whole slide.
- Keyboard navigation still works.
- Resources & Guides keeps approved sources and lab terms in separate rows.

## Brand and Content Guardrails

- Keep the ExxonMobil identity recognizable through the official logo, EMprint fonts, red/black/white palette, and direct operational tone.
- Do not replace the official logo or EMprint font assets with generated substitutes.
- Keep the disclaimer visible in the topbar.
- If official ExxonMobil URLs are edited, verify them live because product and corporate pages move.
- Do not claim this guide is official training or a procedure.

## Editing Habits

- Prefer small, focused changes in `app.js` and `styles.css`.
- Use local assets already in `assets/` before adding new images.
- Keep generated or external wording concise and source-backed.
- Preserve user-requested behavior unless they explicitly reverse it, especially:
  - No left-hand navigation column.
  - Slideshow over dense scrolling pages.
  - More digestible slides instead of clustered content.
  - Less interactivity than a decision app, but enough guided navigation to be useful.
