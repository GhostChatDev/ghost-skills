# Bringing a skill in from outside

This file is about copying rules from another repository into this library.
It is not about running that repository's code.

## Steps

1. **Pick the source.** Use `docs/repositories.md`. It lists the upstream
   repository, the licence, whether it is archived, and when it was read.
2. **Read the source's own rules file.** Usually `AGENTS.md`, `SKILL.md`,
   `CLAUDE.md` or a `skills/` folder. Read it at the commit recorded in
   `docs/repositories.md`, not at `main`, so you can say what you copied.
3. **Write the skill in your own words.** One folder under `skills/`, one
   `SKILL.md`. Short sentences. Plain words. Keep the
   meaning; do not paste a wall of text.
4. **Name the source in the skill.** Put the source URL and the licence in the
   skill file. If the licence needs it, copy the licence text into
   `THIRD-PARTY-NOTICES.md` (create that file only when you first need it).
5. **Add the row to `skills/INDEX.md` or `skills/ghost-game-engine/README.md`.**
   Name, folder, when to use it, status (`ready` or `missing`).
6. **Add it to `skills/ghost-game-engine/manifest.json`** (the only manifest) if
   it comes from a verified source.
7. **Run the checklist in `docs/checks.md`.** Every item must hold.

## Rules

- **Never copy code or commands that run on their own.** Rules and guidance
  only. This library has no build step and no dependencies.
- **No secrets, no keys, no tokens.** Not in a skill, not in an example, not in
  a placeholder that looks real. Use `YOUR_API_KEY` if an example needs one.
- **No private details.** No real names, emails, addresses or account details
  in skills, examples or tests. Use made-up ones (Alex, alex@example.com).
- **Do not overwrite the person's own text.** If a skill folder already has
  rules the user wrote, leave them and ask before changing them.
- **A licence you cannot follow means you do not copy.** Say so, give the link,
  and let the person decide.
- **Do not invent rules to fill a gap.** A skill with no text is not listed
  until the person sends the real text.
- **Never replace `AGENTS.md`.** It is the entry point for every agent.
