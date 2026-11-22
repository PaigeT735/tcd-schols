# Schols Revision

TCD Foundation Scholarship revision site: past Schols papers for **Business** and **Economics**, with dense essay plans (introduction, three main points, conclusion, all in bullets) and an evidence bank for every question.

- **Sidebar:** Business / Economics (collapsible).
- **Top tabs:** Business Paper 1 · Paper 2, Economics Paper 1 · Paper 4.
- **Second row:** one tab per sitting (e.g. Jan 2023), plus the exam guide, the predicted mock and the 2026 topic bank.

Plain HTML, CSS and JavaScript modules; no build step.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Schols revision v1"
git branch -M main
gh repo create PaigeT735/tcd-schols --public --source=. --remote=origin --push
gh api -X POST repos/PaigeT735/tcd-schols/pages -f "source[branch]=main" -f "source[path]=/"
```

The site goes live at `https://paiget735.github.io/tcd-schols/`.

## Adding a paper

1. Create a file in `src/content/<subject>-<paper>/`, e.g. `src/content/business-p2/jan-2024.js`, copying the shape of `src/content/business-p1/jan-2023.js`:
   - `id`, `label` (the tab text), `kind: 'paper'`, `title`, `summary`, `meta`.
   - `questions`: each with `id`, `n`, `title`, `tags`, `prompt`, `plan` and `evidence` (markdown).
   - Every `plan` uses the headings `## Introduction`, `## Main point 1 — …`, `## Main point 2 — …`, `## Main point 3 — …`, `## Conclusion`.
2. Import it in `src/content/index.js` and add it to that paper's `sittings` array.
3. Run `node scripts/check-content.mjs`.

### Markdown supported

`## heading`, `### subheading`, nested `-` bullets (indent 2 or 4 spaces), numbered lists, `| tables |`, `> callouts`, `**bold**`, `*italic*`, `_(Source: X)_` tags, and stat tiles:

```
!stat 23% | Share of Irish electricity used by data centres (2025)
```

## 2026 topic bank

`src/content/business-p1/topics-data.js` is generated from the topic briefs (kept locally in `raw/`, which is git-ignored) by `python3 scripts/build-topics.py`.
