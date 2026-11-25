# Skill: LittleJS Small Games

## Purpose

Ship a tiny browser game fast: one page, one script, no build step, a few
hundred lines that run anywhere.

## When to use it

- A jam-size game, a prototype or one mechanic in one screen.
- The person wants a single HTML file and no npm install.
- Very small download size matters.

## When not to use it

- Levels, scenes and a long campaign: Phaser.
- 3D with lighting and models: Three.js.
- An engine with an editor is wanted: Godot or Unity.

## Required inputs and prerequisites

- The one mechanic and the win or lose condition.
- The source of the engine file you load, with its version, and the engine's
  licence read from `docs/ghost-game-engine/repositories.md`. The GitHub API
  answers `mit` for `KilledByAPixel/LittleJS`, default branch `main` (read
  2026-11-25).
- A way to open the page: a local server, not `file://`, if you load files.

## Steps and rules

1. One HTML file, one script, no build step unless the person asks.
2. Keep it under about 500 lines. Past that, move to Phaser and say why.
3. Use the engine's update loop; movement times delta, capped so a slow frame
   does not teleport the player.
4. Draw sprites from canvas-made textures or small code-drawn shapes: no asset
   pack for a jam game.
5. One screen, one loop, one score. No menus in the first version.
6. Touch and keyboard both work; the page never scrolls sideways at 390 px.
7. The first screen draws in under a few seconds on a slow machine.
8. Save the best score in `localStorage` if the person asks for it.

## Compatibility and licence cautions

Licence and branch: `docs/ghost-game-engine/repositories.md`. Check it before
repeating a claim. Loading the engine from a CDN pins a version in the URL.

## Acceptance criteria and verification

Acceptance criteria:

- The file opens and the game runs with no uncaught error.
- Every key and tap does what the screen says.
- The score changes and the win or lose state is reachable.
- No sideways scroll at 390 px, 820 px and 1280 px.

Steps: open the page, play once to the end, refresh, read the console.

## Known limitations

- Small engine: fewer docs and examples than Phaser or Three.js.
- No editor, no scene graph to speak of, no built-in level format.
- Not a fit for large projects, teams or long content.

## Upstream references

`KilledByAPixel/LittleJS`. Facts: `docs/ghost-game-engine/repositories.md`.

## Do not

- Do not vendor the engine into the repository.
- Do not grow a jam game into a campaign without switching engine and saying so.
