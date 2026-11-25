# Skill: Performance and accessibility

## Purpose

Keep a game fast enough to play on a modest phone, and usable by people who
cannot see, hear or use a mouse the way the design assumes.

## When to use it

- Before a release, and whenever the frame rate drops.
- When the game is meant to run on phones.
- When adding colour, sound or motion based feedback.

## When not to use it

- Never skipped entirely: even a small jam game gets the checks below.

## Required inputs and prerequisites

- The target devices and the target frame rate.
- A way to measure: the engine's frame stats, or `renderer.info` for Three.js.
- The list of player actions and how each is signalled (text, sound, colour,
  motion).

## Steps

1. Measure first: frame time, draw calls, sprite count and memory on the target
   device. Write the numbers down before changing anything.
2. Fix the biggest cost: usually draw calls, then overdraw, then physics, then
   scripts. Instancing, merging, texture atlases and culling come before
   micro-optimisation.
3. Cap the pixel ratio, and give a Low quality setting that turns off shadows and
   post-processing.
4. Load in stages with a real loading screen; never a blank freeze.
5. Never let effects change what the game shows: motion can be reduced, shake and
   flashes turned off, and text still readable.
6. Contrast: text at least 4.5:1 against its background; never colour alone for a
   game-critical signal.
7. Sound: every sound has a visual twin (captions or icons), a volume control and
   a mute that persists.
8. Input: every mouse or touch action has a keyboard path; focus is visible; the
   game pauses when the window loses focus if it can kill the player.
9. Text: scalable, no text baked into images for anything that matters.
10. Test on a real phone, or at phone width with throttled CPU, and record the
    frame time after the fix.

## Upstream references

Engine performance guides (Three.js renderer info, Phaser and PixiJS scale and
cache docs), and the Web Content Accessibility Guidelines for contrast and
motion.

## Compatibility and licence cautions

Accessibility overlays and analytics cost size; each addition needs a reason.
Fonts must be licensed for embedding.

## Acceptance criteria and verification

- Frame time on the target device is inside the stated budget, with numbers
  before and after.
- Low quality setting measurably lowers cost.
- Every critical signal has a non-colour signal and every sound has a visual
  twin.
- The game is playable with the keyboard only, and with reduced motion on.

## Known limitations

- No headless check proves playability for a screen reader user; a person must
  try it.
- A low-end phone cannot be emulated exactly in a sandbox.
