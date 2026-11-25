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

## What was actually checked, and when

Checked on 2026-11-25 by a throwaway Node script kept **outside** this
repository (never committed, so the Screenshots check still sees a
Markdown-only repo). Final run on the files of commit `115c724`, result:
`OK all manifest skills exist with all 9 sections` and `manifest parses,
skills: 20`.

- `manifest.json` parses as JSON and holds 20 entries; all 20 `path` values
  exist on disk; no duplicate ids.
- Every skill folder is in the manifest and every manifest folder exists (20
  both ways; `ls skills/ghost-game-engine | wc -l` printed 22: the 20 skill
  folders plus `README.md` and `manifest.json`).
- All 20 `SKILL.md` files carry the nine required sections: Purpose, When to use
  it, When not to use it, Required inputs and prerequisites, Steps (`## Steps
  and rules`), Upstream references, Compatibility and licence cautions,
  Acceptance criteria and verification, Known limitations.
- `skills/INDEX.md` carries a row for `skills/ghost-game-engine/`.
- A search for `game-skills` across the branch returns no matches: the old
  duplicate library is gone from every file.

**Not checked:** no upstream repository was contacted after the API rate limit
stopped the last read, so the licence and branch cells still marked partial in
`docs/repositories.md` stay unconfirmed. No check of the skill text against the
person's original wording was done beyond reading `skills/` and the five named
skills in full. `check_ci` on the final commit is separate from this list.
