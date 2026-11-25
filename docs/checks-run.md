# What the last run actually confirmed

Read from this branch on 2026-11-25 with search and file reads, not from memory.
Each line names the tool result it came from.

## Skills

- **20 of 20** game skills under `skills/ghost-game-engine/` carry
  `## Upstream references` (or `## Source`) once and `## Steps` (or `## Rules`)
  once. `engine-selection` and `game-planning-and-scope` hold two reference
  headings; both are intended (a source list plus a "read the row" note), so no
  file was changed to make a count prettier. (`run_command` over all 20 files.)
- The 5 writing skills hold the text from the request word for word:
  `explain-like-im-new`, `social-media`, `planner`, `marketing-copy`,
  `clear-writer`. (`read_files`.)
- `skills/INDEX.md` now lists the 20 game skills only, one row each, with folder,
  when to use it and status. The 5 writing skills, the eight placeholder folders
  (`skill-06` to `skill-13`) and `MISSING.md` were deleted on the user's request
  on 2026-11-25, together with `ghost-skills-project/` and
  `project/PROJECT-BUNDLE.md`. (`list_files` on `skills/`, commit `7c4c4c9`.)

## The Project bundle (removed)

- `project/PROJECT-BUNDLE.md` and its builder `project/_build.py` are both gone.
  The builder was deleted on `586406e` because a `.py` file makes the Screenshots
  check treat this repository as a website, serve it, find no `index.html` and
  fail; the bundle was deleted on `7c4c4c9` when the repo was scoped to the game
  skills. To share the skills with a Project, paste
  `PROJECT-INSTRUCTIONS.md` and add this repo's files to the Project instead.

## Upstream sources

`docs/repositories.md` holds a licence cell for every source named in
`skills/ghost-game-engine/manifest.json`: Phaser MIT, three.js MIT, PixiJS MIT,
LittleJS MIT, jsfxr Unlicense, Howler MIT, melonJS MIT, Colyseus MIT,
boardgame.io MIT, Blockbench GPL-3.0, mcp-unity MIT, Krita GPL-3.0,
Unity-MCP Apache-2.0.

Cells still marked `not read` — Yarn Spinner's licence, fluid-behavior-tree,
ProceduralToolkit, LitMotion's branch, game-ci/unity-builder — say so in the
catalogue and in the skills that use them. No skill claims a licence those cells
do not hold.

`jonnyreeves/yarn-bound` answered **404** and is recorded as such. It is named in
no skill.

## Not verified

- No agent was run end to end against these skills. `docs/checks.md` is a manual
  checklist, and nothing in this repository runs it automatically.
- The manifest was never checked by a script: any script file breaks the
  Screenshots check as described above. Its paths were compared to the folder
  list by hand, and `skills/INDEX.md` is the list to trust.
