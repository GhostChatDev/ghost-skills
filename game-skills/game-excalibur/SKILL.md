# Skill: Excalibur

Name: Excalibur

## When to use it

A browser 2D game written in TypeScript with the framework doing the common work:
scenes, collisions, physics, camera, sound, resources.

## Rules

1. Pin one exact version. Read it from `docs/repositories.md`; never from memory.
2. One `Scene` class per screen. Add actors in `onInitialize`, run logic in
   `onPreUpdate` / `onPostUpdate`.
3. Use `ex.Engine` and its built-in resource loading; do not start the game before
   the loader finishes.
4. Movement uses the `delta` Excalibur passes in (`engine.clock`). Arcade physics
   bodies get `vel` and `acc`, not pixels per frame.
5. Collision handling goes through the scene's collider: do not write a manual
   bounding-box check beside it.
6. Keep a fixed logical resolution and let the engine scale, so a phone and a
   desktop see the same game.
7. Registers clean-up when a scene stops, so timers and listeners do not pile up.

## Source

`excaliburjs/Excalibur` — BSD-2-Clause licence, not archived, default branch
`main`. Recorded fields are in `docs/repositories.md`.

## Do not

Do not claim the game runs on a device you did not open it on.
