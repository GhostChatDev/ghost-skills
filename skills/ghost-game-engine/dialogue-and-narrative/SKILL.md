# Skill: Dialogue and narrative

## Purpose

Put dialogue, choices and story text into a game in a way that stays editable by
a writer and testable by an agent.

## When to use it

- Characters talk, choices branch, or the story matters.
- A writer needs to edit dialogue without touching code.
- Text must be localised later.

## When not to use it

- One screen of flavour text: write it in the code and move on.
- The game has no characters or story.

## Required inputs and prerequisites

- A script format choice. Yarn Spinner is the common one for Unity and other
  engines; a small JSON file of nodes is enough for a short game.
- The rules: who speaks, what variables the story reads (flags, items).
- Font and text size decided, and that the text fits the screen.
- `jonnyreeves/yarn-bound` returned **404** in this session (see
  `docs/ghost-game-engine/repositories.md`): do not cite it. Read the row for
  Yarn Spinner in the same file before naming its licence.

## Steps

1. Keep the script in its own files, one file per scene or chapter.
2. Name every node and every choice id. Never rename a node without updating the
   code that jumps to it.
3. Keep the script free of engine calls: the runtime reports "line shown", "choice
   picked", "node done" and the game reacts.
4. Store story variables in one place, with defaults, so a save can hold them.
5. Build the UI once: speaker name, text, choices, a next hint, a typewriter speed
   setting that can be turned off.
6. Test every node: a script that walks all paths and fails on a missing node or
   an unreachable one.
7. Handle text length: long lines wrap, the box scrolls or pages.
8. Make the text skippable and the speed adjustable for accessibility.
9. Localisation-ready: no text built by gluing words together in code.

## Upstream references

`YarnSpinnerTool/YarnSpinner` for Unity and its Unity integration; the runtime is
also usable from other engines. Licence and verification state:
`docs/ghost-game-engine/repositories.md`.

## Compatibility and licence cautions

A dialogue runtime is a dependency with its own licence and version. Check the
licence before shipping, and do not copy its source into the repository.

## Acceptance criteria and verification

- Every node in every script resolves; the walk-every-path test passes.
- Choices change the variables they claim to change.
- The text box never overflows or covers gameplay controls.
- Story state survives a save and load.

## Known limitations

- Dialogue runtimes do not gate the game for you; the game must read the flags.
- Localisation needs a column-based export from the start, which is easy to skip.
