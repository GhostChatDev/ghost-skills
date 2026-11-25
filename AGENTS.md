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

## Game work: `ghost-game-engine`

When the task is a game, also read `skills/ghost-game-engine/manifest.json` and
open only the skills it lists that match the task.

7. Inspect the target game repository before choosing an engine. Look at what is
   already there; never pick from memory or from a list alone.
8. Follow the target repository's own instructions, and report a conflict between
   them and a skill instead of silently choosing one.
9. Pick one primary engine per game. Do not combine competing engines by default.
10. These are repository instructions. They are **not** automatically registered
    Ghost Chat Skills, and they are not globally loaded agent capabilities. An
    agent sees them only when it reads this repository or a Project that holds
    these files.

## Status marks

`skills/INDEX.md` marks each skill `ready` or `missing`. `ready` means the rules
are written in full. `missing` means the folder is an empty stub.
