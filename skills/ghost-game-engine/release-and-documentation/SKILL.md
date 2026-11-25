# Skill: Release and documentation

## Purpose

Ship a game build with a README a stranger can follow, a record of licences, and
no claims that were never checked.

## When to use it

- A build is going to other people.
- The repository gets a store page, a jam entry or a demo link.
- Someone else has to run the project after you.

## When not to use it

- Never: even a prototype needs a README that says how to run it.

## Required inputs and prerequisites

- A working build and its measured size.
- `CREDITS.md`: every asset with source and licence.
- The list of what was tested and on which devices.

## Steps

1. Write the README in this order: what the game is, how to run it, the controls,
   the quality settings, what is not finished, credits and licences.
2. Give the exact commands and the versions they need (Node, the engine version
   pinned).
3. Create the release build the way the project's own build does, and record its
   size and the date.
4. List every third-party licence that ships with the build, and where the notice
   lives.
5. Write the known limitations plainly. Do not claim a feature that is planned but
   missing.
6. Check the build on the target host or device, once, and say what was checked.
7. Tag or note the version the build came from.
8. Do not publish secrets, keys or private URLs in the README or the build.

## Upstream references

The publishing engine's own export or build documentation, and the store's
submission rules for the platform being shipped to.

## Compatibility and licence cautions

A store may require its own licence text, age rating and attribution placement.
Keep every notice the third-party licences require, including in minified builds.

## Acceptance criteria and verification

- A person who has never seen the repo can run the game from the README alone.
- Every shipped asset appears in `CREDITS.md`.
- Known limitations are listed and true.
- The build runs where it will be hosted.

## Known limitations

- Store submission is a separate process with its own account requirements.
- No documentation proves the game is fun or finished.
