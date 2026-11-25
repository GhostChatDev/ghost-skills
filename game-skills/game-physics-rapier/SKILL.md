# Skill: Rapier physics

Name: Rapier physics

## When to use it

A game that needs real rigid-body physics: boxes that tip over, ramps, joints,
stacking. In the browser it runs as WebAssembly; it also runs in Rust.

## Rules

1. Pin one exact version of `@dimforge/rapier3d-compat` (or the 2D package) and
   `await RAPIER.init()` before you create a world. Read the version from
   `docs/repositories.md`; never from memory.
2. One `World` with gravity. Step it at a fixed 60 Hz, and carry leftover time
   between frames so the stepping does not drift.
3. Bodies and colliders are separate: a body has position and rotation, a
   collider has shape and friction. Say which is which in the code.
4. Copy each body's translation and rotation into the visual object after every
   step. Do not drive the visuals separately.
5. Sensors detect without blocking: `setSensor(true)` and the intersection
   events. Do not fake a trigger with a tiny collider.
6. Remove bodies and colliders with `world.removeRigidBody` / `removeCollider`
   when the object dies, or they keep costing time.
7. Physics numbers are metres, kilograms and seconds. Building the game in pixels
   and scaling at the end is the usual source of a broken feel.

## Source

`dimforge/rapier` — Apache-2.0 licence, not archived, default branch `master`.
The recorded fields are in `docs/repositories.md`.

## Do not

Do not claim a physics result you did not run. Show the numbers, or say you did
not check.
