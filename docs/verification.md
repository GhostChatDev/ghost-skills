# What was checked, and what was not

Plain record. If it is not listed here as run, it was not run.

## Read by hand

- Every upstream repository in `docs/repositories.md`: name, licence, archived
  state and description read from the GitHub API at the time recorded there.
  Rows the API could not be read for are marked `not read`; on 2026-11-25 a
  later attempt from the sandbox failed with `curl_http:000` / a JSON parse
  error (the sandbox has no network), so those rows stay unconfirmed.
- `skills/ghost-game-engine/README.md` was a copy of the root `README.md` until
  commit `10d6b68`; it was then rebuilt as the 20-skill index and re-read on the
  branch afterwards to confirm the new text had landed.
- `README.md`, `AGENTS.md`, `PROJECT-INSTRUCTIONS.md`, `MISSING.md`,
  `skills/INDEX.md`, `skills/ghost-game-engine/README.md`: read after writing.
- The 20 skills under `skills/ghost-game-engine/`: each has a purpose, when to
  use it, prerequisites, steps, references, licence cautions, acceptance
  criteria and known limitations. Checked on 2026-11-25 by searching the branch
  itself (not a sandbox copy) for each required heading. Every heading was found
  in **20 of 20** files: `## When to use it`, `## Required inputs and
  prerequisites`, `## Steps`, `## Upstream references`, `## Compatibility and
  licence cautions`, `## Acceptance criteria and verification`,
  `## Known limitations`. No validation script is kept in this repository
  because a script file makes the Screenshots check treat the repository as a
  website; see `docs/checks.md`.
- The 5 full skills and the 8 stubs under `skills/`:
  - `explain-like-im-new`, `social-media`, `planner`, `marketing-copy`,
    `clear-writer` hold the text from the request, word for word.
  - `skill-06` to `skill-13` hold only the MISSING line. See `MISSING.md`.
- `manifest.json` and `skills/INDEX.md`: each `ready` row names a folder that
  exists, and each folder has a `SKILL.md`. The Ghost Game Engine row points at
  `skills/ghost-game-engine/README.md`, which links a `SKILL.md` one folder
  down for each of its 20 skills.
- `docs/repositories.md`: on 2026-11-25 the API reads recorded earlier were
  extended with licence answers for `annulusgames/LitMotion` (MIT),
  `CoderGamester/mcp-unity` (MIT), `boardgameio/boardgame.io` (MIT) and
  `colyseus/colyseus` (200, fields not kept). Every row now either carries a
  read value or says `not read`, and `Syomus/ProceduralToolkit` says the API
  answered "Too many API requests" rather than pretending it was checked.
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
