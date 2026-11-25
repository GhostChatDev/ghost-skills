# Skill: KAPLAY

Name: KAPLAY

## When to use it

A very small browser 2D game: a jam entry, a prototype, one idea in one file.
Choose it when speed matters more than structure.

## Rules

1. Pin one exact version. Read it from `docs/repositories.md`; never from memory.
2. Everything is `kaplay({ ... })`, then one `scene()` per screen. Keep each scene
   short and give it a clear name.
3. Assets are loaded with `loadSprite`, `loadSound` and friends, and the game
   starts after they load. Do not draw a sprite that is still loading.
4. Movement uses `dt()` in `onUpdate`. Speeds are in pixels per second.
5. Collision is `area()` plus `onCollide`. Do not write your own hit test.
6. Size the canvas to the window and give it a fixed logical size, so the same game
   fits a phone.
7. Keep it one screen wide of code. If the file passes about 400 lines, say so and
   split it into modules.

## Source

`kaplayjs/kaplay` — MIT licence, not archived, default branch `master`. Recorded
fields are in `docs/repositories.md`.

## Do not

Do not use KAPLAY for a long game with many systems. Say when the game has
outgrown it and name the engine that fits instead.
