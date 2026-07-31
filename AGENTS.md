# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Static personal site for Dilip Venkatesh, published via GitHub Pages from `main` (serves `index.html` directly — no build step, no framework). Edit `index.html` / `styles.css` / `script.js` in place.
- Design system: three selectable themes — "Event Log" (default, audit-log terminal look), "Blueprint" (engineering-drawing look), "Spec Sheet" (industrial parts-catalog look). Default palette/custom properties (`--bg`, `--surface`, `--hairline`, `--text`, `--text-muted`, `--verified`, `--highlight`) live under `:root` in `styles.css`; each other theme redeclares the same property names under `html[data-theme="..."]` so existing rules restyle automatically — add theme-specific structural/motion rules (fonts, brackets, badge decoration) under that same selector rather than introducing new property names. `--verified`/`--highlight` are reserved for checkmark/metric-badge use, not decoration, in every theme. The theme switch (small dots in the terminal header bar) sets `data-theme` on `<html>` and persists to `localStorage['theme']`; `script.js` reads it on load and wires the buttons.
- Résumé PDF lives at `assets/Dilip-Venkatesh-Resume.pdf`; keep the "Download résumé" link in `index.html` pointing at it if the file is renamed.
- Verify changes by serving locally (e.g. `python3 -m http.server`) and checking with `chrome-devtools-axi` at both desktop and mobile widths — there is no test suite.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
