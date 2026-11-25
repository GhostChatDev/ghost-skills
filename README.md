# ghost-skills

Shared skills for Ghost Code and Ghost Chat.

One skill = one folder. Each folder holds a `SKILL.md` file. `skills/INDEX.md`
lists every skill, where it lives, when to use it, and whether it is ready or
still missing.

Markdown only. No app, no game engine, no packages.

## How to use this repo

Two ways. Pick one.

1. **Ghost Code:** in the `+` menu, choose this repo (`GhostChatDev/ghost-skills`)
   before your first message. The agent then reads the skills from the repo.
2. **Ghost Chat Project:** put your chat or session inside the **Ghost Skills**
   Project. Paste the block from `PROJECT-INSTRUCTIONS.md` into the Project's
   instructions.

## What this library can and cannot do

- A repo is **not** auto-loaded into every agent. An agent only sees a repo you
  pick for that session.
- A Project shares its instructions and files with every chat and session
  inside it. That is how one Project can carry this whole library.
- The Skills toggle still allows **only 5 skills on at a time**. That limit does
  not change. This library is how you keep *all* your skills in one place anyway:
  the files are here, and the agent reads them from the repo or the Project.
- Ghost Code never merges. It commits to its own `ghost-code/` branch and opens a
  draft pull request. **You merge the pull request on GitHub.** Main stays
  untouched until you do.

## Files

| File | What it is |
| --- | --- |
| `AGENTS.md` | Rules an agent follows before any task. |
| `PROJECT-INSTRUCTIONS.md` | Short block to paste into a Ghost Chat Project. |
| `skills/INDEX.md` | Table of every skill: name, folder, when to use, status. |
| `skills/<folder>/SKILL.md` | One skill. |
| `skills/ghost-game-engine/README.md` | The game-development library: how to read it and what it is not. |
| `skills/ghost-game-engine/manifest.json` | Every game skill: id, path, description, tags, engines, requirements, references. |
| `skills/ghost-game-engine/<skill>/SKILL.md` | One game skill: purpose, when to use, inputs, steps, references, licence cautions, acceptance criteria, limits. |
| `docs/repositories.md` | The upstream sources: what was read and when, licence, archived state. |
| `docs/adoption.md` | How to bring in a skill from outside, without copying its licence or its secrets. |
| `docs/verification.md` | What was actually read, and what was not. |
| `docs/checks.md` | The manual checklist to tick before merging a change. There is no code here to run. |
| `MISSING.md` | Skills still waiting for your real text. |

---
<img src="https://ghostchat.tech/icons/ghost-code-dev.png" width="20" height="20" alt="" align="top"> Built by [Ghost Code Dev](https://ghostchat.tech)
