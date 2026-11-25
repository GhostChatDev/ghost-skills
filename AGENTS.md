# AGENTS.md

Rules for any Ghost Code agent working in this repo, or in a session or Project
that points at it.

1. **Before any task, read `skills/INDEX.md`.**
2. **Follow every skill that matches the task.** If the user names a skill,
   follow that one first, then the others that match.
3. **If several skills match, follow all of them.** Do not pick one and drop the
   rest.
4. **Do not ignore a skill to be shorter.** A shorter answer that breaks a skill
   is a wrong answer.
5. **Do not invent a skill that is not in `skills/`.** If a skill is missing or
   empty, say so and point the user to `MISSING.md`.
6. A skill folder with only the MISSING line has no rules yet. Do not fill it in
   yourself. Ask the user for the real text.

## Game development

- Read `skills/ghost-game-engine/README.md` (the index) and
  `skills/ghost-game-engine/manifest.json` before planning a game.
- Load **only** the skills that match the task.
- Inspect the target game repository before choosing an engine: read its
  instructions, its existing code and its checks.
- Follow the target repository's own instructions. If they conflict with these,
  say so and report the conflict instead of silently overriding one.
- These are repository instructions. They are **not** automatically registered
  Ghost Chat Skills and **not** globally loaded agent capabilities. An agent
  sees them only when this repository, or a Project holding these files, is
  chosen for the session.
- No upstream source code is vendored here. A future import must keep its
  licence and notices; see `docs/repositories.md` and `docs/adoption.md`.

## Status marks

`skills/INDEX.md` marks each skill `ready` or `missing`. `ready` means the rules
are written in full. `missing` means the folder is an empty stub.
