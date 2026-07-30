# Agent Project Brief

## Product

This repo is a static training-style web guide for a new ExxonMobil Mont Belvieu Plastics Plant lab intern. It should feel like a clean internal walkthrough, not a marketing page or generic generated site.

The guide has two primary routes:

- `Start Slideshow`: a full-screen walkthrough with staged content reveals.
- `Resources & Guides`: approved sources and plain-language lab terms.

## Design Direction

- Use an ExxonMobil-like visual language: official logo asset, EMprint fonts, strong red, black, and white.
- Keep the interface crisp, flat, and procedural. Red should be present and intentional.
- Avoid generic AI design habits: purple gradients, random emojis, soft floating card grids, Inter as a fallback style, decorative vector illustrations, and vague motivational copy.
- Keep cards and panels purposeful. This is closer to a lab training aid than a landing page.
- Slideshow screens should fit the viewport without requiring scrolling whenever possible.

## Content Rules

- Treat this as an unofficial learning aid. Official ExxonMobil training, site procedures, and supervisor direction always override this guide.
- Do not invent plant-specific procedures, limits, specs, roles, or method requirements.
- When updating official links or current company wording, verify against official ExxonMobil sources.
- Explain lab terms in plain language a high schooler could understand, but keep the tone professional.
- For MBPP/lab content, prefer source-backed summaries over exact copied language.

## Interaction Rules

- The home screen should stay simple: one full-screen button for the slideshow and one for resources.
- The slideshow should support keyboard navigation:
  - Right, Down, Space, PageDown: reveal the next item or advance.
  - Left, Up, PageUp: hide the previous reveal or go back.
  - Home / End: first / last slide.
  - Escape: return home.
- Revealing one staged component should not replay the entire slide animation.
- Test selection should feel like a guided path, not a quiz or decision checkpoint.

## Important Files

- `index.html`: app shell, topbar, home buttons, slideshow container, resources container.
- `app.js`: slide data, reveal logic, keyboard navigation, resources content, lab terms.
- `styles.css`: full-screen layout, ExxonMobil-like visual styling, reveal animations, responsive rules.
- `assets/`: logo, EMprint fonts, MBPP fact sheet, and local training imagery.
