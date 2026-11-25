# ghost-skills

Shared game-development skills for Ghost Code and Ghost Chat.

The library is `skills/ghost-game-engine/`: 20 skills, one folder each, one
`SKILL.md` per folder. `skills/INDEX.md` lists them, where each one lives and
when to use it. `skills/ghost-game-engine/README.md` is the game-side index and
`skills/ghost-game-engine/manifest.json` is the machine-readable list of every
skill, its path, tags, engines and upstream references.

Markdown and JSON only. No app, no game engine code, no packages. No upstream
source code is vendored here: the skills say what to read and when.

## How to use this repo

Two ways. Pick one.

1. **Ghost Code:** in the `+` menu, choose this repo (`GhostChatDev/ghost-skills`)
   before your first message. The agent then reads the skills from the repo.
2. **Ghost Chat Project:** put your chat or session inside a Project that holds
   these files, and paste the block from `PROJECT-INSTRUCTIONS.md` into the
   Project's instructions.

## What this library can and cannot do

- A repo is **not** auto-loaded into every agent. An agent only sees a repo you
  pick for that session.
- A Project shares its instructions and files with every chat and session
  inside it. That is how one Project can carry this whole library.
- The Skills toggle still allows **only 5 skills on at a time**. That limit does
  not change. This library is how you keep *all* your skills in one place anyway:
  the files are here, and the agent reads them from the repo or the Project.
- A link alone does not grant access. A private repository needs authorization.
- Ghost Code never merges. It commits to its own `ghost-code/` branch and opens a
  draft pull request. **You merge the pull request on GitHub.** Main stays
  untouched until you do.

## Files

| File | What it is |
| --- | --- |
| `AGENTS.md` | Rules an agent follows before any task. |
| `PROJECT-INSTRUCTIONS.md` | Short block to paste into a Ghost Chat Project. |
| `skills/INDEX.md` | Table of every skill: name, folder, when to use, status. |
| `skills/ghost-game-engine/README.md` | The game-development library: index, engine-selection rules, upstream references. |
| `skills/ghost-game-engine/manifest.json` | Every skill's id, path, tags, engines and references. |
| `skills/ghost-game-engine/<skill-name>/SKILL.md` | One game skill, with the upstream source to read in `docs/repositories.md`. |
| `docs/repositories.md` | The upstream sources: what was read and when, licence, archived state. |
| `docs/adoption.md` | How to bring in a skill from outside, without copying its licence or its secrets. |
| `docs/verification.md` | What was actually read, and what was not. |
| `docs/checks-run.md` | The record of the checks that were run, and their results. |
| `docs/checks.md` | The manual checklist to tick before merging a change. There is no code here to run. |
| `LICENSE` | The repository licence. |

---
<img src="https://ghostchat.tech/icons/ghost-code-dev.png" width="20" height="20" alt="" align="top"> Built by [Ghost Code Dev](https://ghostchat.tech)
