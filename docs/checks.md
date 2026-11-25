# Checklist for this library

Manual checks, done by reading. This repository has no code and no build step
on purpose, so nothing runs by itself. Tick every line before you merge a
change.

## Every skill folder

- [ ] One skill = one folder, and the folder has a `SKILL.md` file.
- [ ] The first line is the skill's name, and it matches the row in the index.
- [ ] The rules are written in full. No "TODO", no "...", no placeholder text.
- [ ] Short sentences, plain words, the person's meaning kept.
- [ ] A stub only, and only when the real text is missing: one MISSING line.

## Indexes

- [ ] `skills/INDEX.md` has a row for every folder in `skills/`.
- [ ] `skills/ghost-game-engine/README.md` lists every folder in
      `skills/ghost-game-engine/`, and `manifest.json` names every skill's path.
- [ ] Each row gives: skill name, folder, when to use it, status.
- [ ] Status says `ready` when the rules are written, `missing` for a stub.
- [ ] Every folder named in an index exists, and every folder is in an index.

## Missing skills

- [ ] Every stub is listed in `MISSING.md`.
- [ ] No rules were invented to fill a stub.

## The rest of the repository

- [ ] `AGENTS.md` still says: read `skills/INDEX.md` first, follow every
      matching skill, never invent a skill.
- [ ] `PROJECT-INSTRUCTIONS.md` still asks for every `SKILL.md` to be read.
- [ ] `README.md` still says a repo is not auto-loaded, a Project is shared, and
      the Skills toggle allows only 5 skills on.
- [ ] `skills/ghost-game-engine/manifest.json` lists only sources recorded in
      `docs/repositories.md`, and every `path` in it exists on disk.
- [ ] No secrets, keys, tokens or real personal details anywhere.
- [ ] Markdown and JSON only: no `package.json`, no `.html`, no `.js`, `.mjs`,
      `.cjs`, `.ts`, `.jsx`, `.tsx`, `.css`, `.py`, `.rb`, `.go`, no website.
      The Ghost Screenshots check reads every commit: if it finds any file with
      one of those extensions (looked for up to 5 folders deep, `.github`
      skipped), it serves the folder as a website and fails with `FAIL: no
      index.html found`. So a validator script cannot live in this repository,
      whatever language it is written in. That is why the checks here are a
      checklist instead of a script.
