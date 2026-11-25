# Checklist for this library

Manual checks, done by reading. This repository has no code and no build step
on purpose, so nothing runs by itself. Tick every line before you merge a
change.

## Every skill folder

- [ ] One skill = one folder, and the folder has a `SKILL.md` file.
- [ ] The first line is the skill's name, and it matches the row in the index.
- [ ] The rules are written in full. No "TODO", no "...", no placeholder text.
- [ ] Short sentences, plain words, the person's meaning kept.
- [ ] No empty or placeholder folders: a skill with no text is not listed.

## Indexes

- [ ] `skills/INDEX.md` has a row for every folder in `skills/`.
- [ ] `skills/ghost-game-engine/README.md` lists every folder in
      `skills/ghost-game-engine/`, and `manifest.json` names every skill's path.
- [ ] Each row gives: skill name, folder, when to use it, status.
- [ ] Status says `ready` when the rules are written.
- [ ] Every folder named in an index exists, and every folder is in an index.
- [ ] No rules were invented for a skill whose text has not arrived.

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

Checked on 2026-11-25 by a Node script. That script must live **outside** this
repository. One was once committed at `tmp/verify-library.mjs`; the Screenshots
check read the `.mjs`, served the repo as a website and failed with `FAIL: no
index.html found`, so it was deleted in commit `edeb00f` and the check passed.
The final run was made in the sandbox and never committed. Result:
`OK all manifest skills exist with all 9 sections`.

- `manifest.json` parses as JSON; all 20 entries carry `id`, `path`,
  `description`, `tags`, `engines`, `requires`, `references`.
- All 20 `path` values exist on disk. No duplicate ids.
- Every skill folder is in the manifest and every manifest folder exists (20
  both ways).
- All 20 `SKILL.md` files carry the eight fixed sections (Purpose, When to use
  it, When not to use it, Required inputs and prerequisites, Upstream
  references, Compatibility and licence cautions, Acceptance criteria and
  verification, Known limitations) plus a steps section.
  `phaser-2d` and `littlejs-small-games` used the short headings `Rules`,
  `Compatibility and licence`, `Verification` and `Source`; they were renamed
  in commit `be971bf` and now match the rest.
- `skills/ghost-game-engine/README.md` is the library index: it lists all 20
  skills with one relative link each, in the form
  `<id>/SKILL.md` (relative to that folder). It was rebuilt in commit `10d6b68`;
  before that it was a copy of the root `README.md` and linked nothing. The link
  targets were **not** opened one by one; the 20 folder names came from
  `manifest.json`, whose paths were checked against the disk.
- `skills/` holds one library, `skills/ghost-game-engine/`, with 20 skill
  folders plus `README.md` and `manifest.json`. The 5 writing skills, the eight
  placeholder folders (`skill-06` to `skill-13`), `MISSING.md`,
  `ghost-skills-project/` and `project/PROJECT-BUNDLE.md` were deleted on the
  user's request on 2026-11-25 (commits `7c4c4c9`, `ba2d631`).

**Not checked:** no upstream repository was contacted after the API rate limit
stopped the last read, so the licence and branch cells still marked partial in
`docs/repositories.md` stay unconfirmed. No check of the skill text against the
person's original wording was done beyond reading `skills/` and the five named
skills in full. `check_ci` on the final commit is separate from this list.
