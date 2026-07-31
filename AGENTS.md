# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Static personal site for Dilip Venkatesh, published via GitHub Pages from `main` (serves `index.html` directly — no build step, no framework). Edit `index.html` / `styles.css` / `script.js` in place.
- Design system: "audit-log" theme — CSS custom properties for the palette live at the top of `styles.css`. `--verified` (green) is reserved for checkmarks/status only; `--highlight` (amber) is reserved for the real metric badges in the Event Log section only. Don't reuse them decoratively elsewhere.
- Résumé PDF lives at `assets/Dilip-Venkatesh-Resume.pdf`; keep the "Download résumé" link in `index.html` pointing at it if the file is renamed.
- Verify changes by serving locally (e.g. `python3 -m http.server`) and checking with `chrome-devtools-axi` at both desktop and mobile widths — there is no test suite.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
