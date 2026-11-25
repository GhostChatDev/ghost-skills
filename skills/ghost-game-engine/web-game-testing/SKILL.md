# Skill: Web game testing

## Purpose

Prove a browser game works: it builds, the page loads with no uncaught error,
every control does something, and saved data survives a refresh.

## When to use it

- Before every commit to a web game.
- When a change touches input, saving, scaling or the game loop.
- Before a release build.

## When not to use it

- The game is desktop or engine-editor only: test it in the engine, and say so.

## Required inputs and prerequisites

- A build command and a run command for the project.
- The list of controls and the list of screens.
- The repository's own check (a workflow, or Ghost Code's browser check). Do not
  add a second check file that tests the same thing.

## Steps

1. Read the project's own test and check setup first; use it, do not replace it.
2. Build, then load the page and watch the console for uncaught errors.
3. Check the first screen renders in a few seconds on slow software WebGL.
4. Press every control: keys, mouse, and on-screen buttons at phone width.
5. Check the game loop keeps running: frames advance, the score changes.
6. Add or change data, then refresh and check it is still there.
7. Check 390, 820 and 1280 px wide: no sideways scrolling, targets at least 44
   px.
8. Test the failure paths: a missing asset, audio blocked, a save with a bad
   version.
9. Record what was run and what was not. A check that never ran is not a pass.

## Upstream references

Engine docs for building (Phaser, PixiJS, Three.js, LittleJS). Ghost Code's own
browser check is the test in this workspace; its rules are in the task
instructions, not here.

## Compatibility and licence cautions

Do not add browser test frameworks, Playwright or jsdom when the repository
already has a check. A new test dependency needs a stated reason and its licence
recorded.

## Acceptance criteria and verification

- Build passes, page loads, no uncaught error.
- Every control changes something visible.
- Added data survives a refresh (or the game has nothing to add).
- No sideways scroll at 390 px wide.

## Known limitations

- A headless browser cannot judge feel, fun or difficulty.
- Software rendering is slower than a real graphics card; a slow first frame in
  the check may not happen for players.
