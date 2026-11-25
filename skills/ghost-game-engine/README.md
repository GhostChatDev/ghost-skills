# ghost-game-engine

A shared game-development skill library for Ghost Code agents. Instructions and
verified references, nothing installed.

## Read this first

1. `manifest.json` in this folder: the schema, then one entry per skill with its
   id, path, description, tags, engines, required tools and external references.
2. Open only the `SKILL.md` files whose tags or engines match the task.
3. Pick one primary engine per game. Do not combine competing engines by default.

## What this library is

- Plain Markdown instructions an agent can read: planning, engine selection, the
  individual engines, level design, AI, dialogue, generation, feel, audio,
  multiplayer, assets, testing, performance, release, and the boundary between
  what an agent can do with Unity and desktop art tools and what a person must do.
- A catalog of upstream sources with the fields that were actually read, in
  `docs/ghost-game-engine/repositories.md`.

## What this library is not

- It is **not** automatically registered Ghost Chat Skills. The Skills toggle
  still allows only 5 on at a time and knows nothing about this folder.
- It is **not** globally loaded into every agent. An agent sees these files only
  when it reads this repository, or a Project that holds these files.
- It is **not** a claim that any engine, package or integration is installed or
  working. Each skill says what environment it needs. Nothing here was run.
- It is **not** a copy of upstream code. No upstream repository is cloned or
  vendored here. Any future source import must keep its licence and notices.

## Every skill has the same nine sections

Name and purpose; when to use it and when not to use it; required inputs and
prerequisites; step-by-step instructions; upstream references; compatibility and
licence cautions; acceptance criteria and verification; known limitations.

## Layout

| Path | What it is |
| --- | --- |
| `manifest.json` | Schema plus all 20 skills. |
| `<skill-name>/SKILL.md` | One canonical copy of each skill. Never duplicated elsewhere. |

## Checking it

`tests/validate_skills.py` (Python 3, standard library only) checks the manifest
syntax, that every listed path exists, that every `SKILL.md` on disk is listed,
that each skill has all nine sections, and that internal Markdown links resolve.
Run it from the repository root:

```
python3 tests/validate_skills.py
```

It prints `OK: ...` and exits 0, or one `FAIL: ...` line per problem.
