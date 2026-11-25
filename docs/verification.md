# What was checked, and what was not

Plain record. If it is not listed here as run, it was not run.

## Read by hand

- Every upstream repository in `docs/repositories.md`: name, licence, archived
  state and description read from the GitHub API at the time recorded there.
- `README.md`, `AGENTS.md`, `PROJECT-INSTRUCTIONS.md`, `MISSING.md`,
  `skills/INDEX.md`, `skills/ghost-game-engine/README.md`: read after writing.
- The 20 skills under `skills/ghost-game-engine/`: each has a purpose, when to
  use it, prerequisites, steps, references, licence cautions, acceptance
  criteria and known limitations. Checked by `grep` for the section headings on
  the committed files.
- The 5 full skills and the 8 stubs under `skills/`:
  - `explain-like-im-new`, `social-media`, `planner`, `marketing-copy`,
    `clear-writer` hold the text from the request, word for word.
  - `skill-06` to `skill-13` hold only the MISSING line. See `MISSING.md`.
- `manifest.json` and both indexes: each `ready` row names a folder that
  exists, and each folder has a `SKILL.md`.
## Not checked

- **No human reviewed the skill text.** The rules are the person's own words.
- **No agent was run against this library.** Nothing proves an agent obeys
  `AGENTS.md` yet.
- **No automated check runs on this repository.** See below.

## This library has no code, so no code check runs

The person asked for Markdown only: no app, no website, no `package.json`.
`docs/checks.md` is the manual checklist for that reason.

This repository has `.github/workflows/ghost-screenshots.yml`, which Ghost Code
writes and keeps for web apps. Its first step sorts a commit into three kinds:

- asks for a real browser (an app or page): `package.json`, or database changes
- a page to serve: `index.html`, or any `.html` / `.js` / `.mjs` / `.css` file
- documents only: nothing above, so nothing to photograph and the check passes

A `.mjs` file here (a validation script) made this repository look like a
website. The check then served it, found no `index.html`, and failed with
`FAIL: no index.html found`. The script and its tests are gone; the checks they
made are the manual list in `docs/checks.md`. Anything that runs in the browser
would bring the same failure back, so keep this repository Markdown only.
