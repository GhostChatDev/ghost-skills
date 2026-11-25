# Skill: Phaser 2D

## Purpose

Build a 2D browser game with Phaser: scenes, sprites, arcade physics, input and
scale, in a project that builds and runs.

## When to use it

- A 2D browser game with levels, sprites and collisions.
- The person wants a scene structure (menu, play, game over).
- A repository that already uses Phaser.

## When not to use it

- The game is one idea in one file: LittleJS is smaller.
- The game is 3D: Three.js.
- No bundler and no npm are available and the person wants a single HTML file:
  check first, Phaser needs a build step for a tidy project.

## Required inputs and prerequisites

- Node 22 and npm if the project is built; otherwise a Phaser build file from a
  source you name.
- The resolution and orientation, keyboard, mouse or touch.
- The art: made pictures or code-drawn shapes.
- Read the licence row for Phaser in `docs/ghost-game-engine/repositories.md`
  before you state one. The GitHub API answers `mit` for `phaserjs/phaser` with
default branch `master` (read 2026-11-25); confirm the version in
  `package.json` after install.

## Steps

## Upstream references

1. One scene per concern: `Boot`, `Preload`, `Menu`, `Play`, `GameOver`.
2. Pin the Phaser version in `package.json` and say which one you installed.
3. Arcade physics for platformers and simple collisions; matter only for
   physics puzzles.
4. Load every asset in `preload` and show a real loading bar, not a frozen page.
5. Movement in `update(time, delta)` using delta, never a fixed step per frame.
6. Kill, don't hide: destroy off-world sprites and groups so memory stays flat.
7. Scale with `Phaser.Scale.FIT` and one aspect ratio; test at phone width.
8. Keyboard, mouse and touch: on-screen buttons at least 44 px on phones.
9. Save progress in `localStorage` with a versioned key.

## Compatibility and licence cautions

See the licence row above and `docs/ghost-game-engine/repositories.md` for the
recorded values and the date they were read. Never state a licence that file
does not hold.

## Acceptance criteria and verification

Acceptance criteria:

- `npm run build` (or the project's build) finishes with no error.
- The page opens with no uncaught error in the console.
- The player moves with the keys and with touch.
- The score changes and survives a refresh when saving is on.
- Nothing scrolls sideways at 390 px wide.

Steps: build, open, press every control, refresh, read the console.

## Known limitations

- Large tilemaps need care: one big image will stutter.
- Arcade physics is box-only; no slopes out of the box.
- Sound needs a first user click in most browsers.

## Source

`phaserjs/phaser`. Facts and licence: `docs/ghost-game-engine/repositories.md`.

## Do not

- Do not copy engine source into the repository.
- Do not claim a version or licence you did not read.
- Do not build a second game loop beside Phaser's `update`.
