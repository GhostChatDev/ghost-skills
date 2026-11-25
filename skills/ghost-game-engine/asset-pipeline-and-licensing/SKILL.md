# Skill: Asset pipeline and licensing

## Purpose

Bring art, audio and fonts into the project with a repeatable path, and keep a
record of where each file came from and what its licence allows.

## When to use it

- Any time an asset is added, replaced or generated.
- Before a release or a store build.
- When someone asks whether a file may be shipped.

## When not to use it

- Nothing but code is in the repository.

## Required inputs and prerequisites

- The source of the asset: made in the task, bought, found, or generated.
- The licence text or terms page, read, not remembered.
- The target formats and sizes for the engines in use.

## Steps

1. Create `CREDITS.md` (or extend it) with one row per asset: file, what it is,
   source URL, author, licence, attribution required yes or no.
2. Read the licence before the file lands in the repository. If it is unclear,
   do not use it and say why.
3. Keep originals and only add the processed files the game loads.
4. Name files by role, in lower case, with the size when it matters
   (`hero-walk-64.png`).
5. Keep assets small: scale to the size the game draws, compress, and state the
   total size.
6. Record the tools used to make or convert assets, and their versions, so the
   process can be repeated.
7. Separate engine code licensing from asset licensing in the report; they are
   different and both matter.
8. Before release, walk `CREDITS.md` against the shipped files: no uncredited
   file, no missing notice.

## Upstream references

Art and modelling tools are separate programs with their own licences; for
example Blockbench and Krita are listed with their own entries in
`docs/ghost-game-engine/repositories.md`. Read the row before naming a licence.

## Compatibility and licence cautions

A permissive engine licence does not license its logo, its example art, or
anything you download separately. Fonts need their own licence check. Never
assume a file is MIT or free for commercial use.

## Acceptance criteria and verification

- Every asset in the build appears in `CREDITS.md` with a source and a licence.
- No asset in the build is missing from `CREDITS.md`, checked by listing files and
  comparing.
- Attribution text the licences require appears in the game where it must.
- Total asset size is stated.

## Known limitations

- Licence reading is judgement; an ambiguous licence is a stop, not a guess.
- Generated art may still carry the generator's terms.
