# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Static personal site for Dilip Venkatesh, published via GitHub Pages from `main` (serves `index.html` directly — no build step, no framework). Edit `index.html` / `styles.css` / `script.js` in place.
- Design system: clean editorial light theme. Warm paper background (`--bg: #FCFBF8`), ink text (`--ink`), single confident blue accent (`--accent: #1D4ED8`, deep variant `--accent-deep`) used sparingly for eyebrows, stat numerals, links, and buttons. Type: Fraunces (display), Inter (body), JetBrains Mono (eyebrow labels and dates only). Cards are white surfaces with hairline borders and soft shadow (`--shadow`). Sticky blurred header with anchor nav. Subtle fade-up `[data-reveal]` on scroll; honor `prefers-reduced-motion`. The `@media print` rules provide the clean recruiter/PDF variant (hides header and hero actions).
- Résumé PDF lives at `assets/Dilip-Venkatesh-Resume.pdf`; keep the "Download résumé" link in `index.html` pointing at it if the file is renamed.
- Verify changes by serving locally (e.g. `python3 -m http.server`) and checking with `chrome-devtools-axi` at both desktop and mobile widths — there is no test suite.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
