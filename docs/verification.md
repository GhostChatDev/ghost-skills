# What was checked, and what was not

Plain record. If it is not listed here as run, it was not run.

## Run in the sandbox

Commands run on a Linux copy of this branch (Node 22.23.4):

| Command | Result |
| --- | --- |
| `node scripts/validate-skills.mjs` | `OK: 25 ready skills, indexes, stubs and manifest agree.` |
| `node --test tests/*.test.mjs` | 9 tests, 9 pass, 0 fail |

Note: `node --test tests/` (folder, no glob) fails on this Node version with
`Cannot find module '.../tests'`. Always use `node --test tests/*.test.mjs`.

## Read by hand

- Every upstream repository in `docs/repositories.md`: name, licence, archived
  state and description read from the GitHub API at the time recorded there.
- `README.md`, `AGENTS.md`, `PROJECT-INSTRUCTIONS.md`, `MISSING.md`,
  `skills/INDEX.md`, `game-skills/INDEX.md`: read after writing.
- The 5 full skills and the 8 stubs under `skills/`: text matches the request
  word for word, stubs contain only the MISSING line.

## Not checked

- **No human reviewed the skill text.** The rules are the person's own words.
- **No agent was run against this library.** Nothing proves an agent obeys
  `AGENTS.md` yet.
- **No GitHub Actions check passes on this repository.** See below.

## The Ghost Screenshots check fails, on purpose

This repository has `.github/workflows/ghost-screenshots.yml`, which Ghost Code
writes and keeps for web apps. It runs here and ends with:

```
FAIL: no index.html found (looked in dist, build, out, the repository root, docs and public)
```

The cause is the repository itself: this library is Markdown only (the request
says no website, no packages). There is no page to photograph, so the check
cannot pass. It is not a fault in the skills and not something to fix by adding
an `index.html`. Nothing here weakens or hides that check; it is left as it is.
