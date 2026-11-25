# How to use this skill library

For a human, or for a coding agent that has been pointed at this repository.
Read this file first. It takes two minutes.

## 1. This is text, not a program

Every skill is one Markdown file: `skills/ghost-game-engine/<folder>/SKILL.md`.
Nothing here runs. There is no package to install, no engine, no build step.
The skills tell an agent *when* a library fits, *how* to wire it, what goes
wrong, and what licence applies; the agent then installs the library in the
user's own project.

## 2. Find the right skill — and only those

1. Open `skills/INDEX.md`. It lists every skill with a one-line "when to use it".
2. Match the task against those lines. Usually **two or three** match, not ten.
   A Phaser game with sound and a title screen matches `phaser-2d`,
   `zzfx-sound-effects`, `animejs-motion` and `web-game-testing` — nothing else.
3. Follow **all** the skills that match. Do not pick one and drop the rest.
4. When two skills could do the same job (Motion vs Anime.js, ZzFX vs Tone.js vs
   Howler), the index's rules say which one wins. Pick one per job and say why.

## 3. Read a skill in this order

Each `SKILL.md` has the same sections, so you can skim in this order:

| Order | Section | Why |
| --- | --- | --- |
| 1 | What it does / When to use it | confirms you opened the right file |
| 2 | When **not** to use it | the fastest way to avoid a wrong choice |
| 3 | Required setup and supported version | tells you whether the project can take it |
| 4 | Common mistakes | read before coding, not after the bug |
| 5 | Implementation steps and examples | the actual work |
| 6 | Verification checklist | what you must prove before saying it works |
| 7 | Licence, links, date checked | what to credit, and whether the claim is current |

Stop at step 2 if the skill says it does not fit.

## 4. Apply it

- The skill's rules are instructions for the task in front of you, not a
  rewrite of the project's own conventions. The **target repository's** own
  `AGENTS.md`, `README` and checks win; if they conflict, report the conflict.
- Copy the *patterns*, not the sample text. Sample values (colours, thresholds,
  timeouts) are examples to adapt to the real brief.
- Pin the version the skill names. If the project already uses another major
  version, check the skill's note on API differences before copying code.
- Never let a skill add a paid service, a key or a large asset pack. If a skill
  seems to require one, stop and ask.

## 5. A GitHub copy does NOT enable anything

Be explicit about this, in the answer and in any hand-off note:

- Storing these files on GitHub **does not** register them as Ghost Chat Skills.
  A normal chat or Ghost Code session will not see them.
- It **does not** load them into any other repository, project or agent. A link
  gives a reader access to text; it does not add a capability.
- An agent sees these files **only** when this repository (or a Ghost Chat
  Project that holds a copy of them) is selected for that session.
- To make them travel, copy the folders into the target repository and record
  the source, commit SHA, paths and notices in the target's own `AGENTS.md` —
  see `docs/adoption.md`.
- Ghost Chat Skills (the switchable ones in the app) are a separate feature with
  their own text. Nothing here promotes itself into that list.

## 6. Change a skill safely

- Improve the existing file; do not create a near-duplicate folder.
- Keep the section order above, so the next reader can skim it.
- Re-check the version, the licence and the links when you touch the file, and
  update the **sources checked** date. An old date is honest; a new date on old
  claims is not.
- Add the folder to all three lists or none: `skills/INDEX.md`, the table in
  `skills/ghost-game-engine/README.md`, and
  `skills/ghost-game-engine/manifest.json`.
- Never write a version, licence or test result you did not read from the
  source. `docs/repositories.md` is where those claims live; a skill points at
  it or repeats only what that file records.
