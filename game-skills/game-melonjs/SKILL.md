# Skill: melonJS

Name: melonJS

## When to use it

A browser 2D game whose levels are built in Tiled. melonJS loads the map and
turns its layers into the playfield.

## Rules

1. Read the Tiled tilemap skill too, and follow both.
2. Pin one exact version of melonJS. Read it from `docs/repositories.md`; never
   from memory.
3. Load the map with the engine's loader and wait for `onload`. Never start the
   play state before the map and its tileset are ready.
4. Collision comes from the map's object layers and from `body.addCollisionType`,
   not from a hand-written check.
5. Movement uses the update `dt`. Speeds are in pixels per second.
6. Cameras follow the player with a limit to the map size, so the world edge is
   real.
7. Keep the map file in the repository. A level that only exists on the user's
   machine is not delivered.

## Source

`melonjs/melonJS` answered the GitHub API in this session. Its licence, branch and
version fields are not recorded in `docs/repositories.md` yet: read them before
you quote them.

## Do not

Do not edit the user's map file in a format the Tiled editor will not open again.
