# Skill: Tiled tilemaps

Name: Tiled tilemaps

## When to use it

Level design with tile maps: a grid of tiles, object layers for spawn points and
triggers, and a JSON or TMX file the game loads.

## Rules

1. Say which export format the engine will read (JSON is easiest to load in a
   browser) and keep the tile size the same in the map and in the code.
2. Layers by job: one for the ground, one for collision, one for decoration, one
   object layer for spawns. Do not mix them.
3. Collision comes from a layer named in the code as a constant, not from the
   picture. Draw the invisible collision in the editor so it can be seen.
4. Keep the tileset image and the map file in the repository, at paths the code
   uses. A map that points at an absolute path on the user's disk is broken.
5. Say which skill covers the engine that loads the map (melonJS, Phaser, Godot,
   LÖVE) and read that one too.
6. The map is data: the game loads it at start, and a missing map shows a plain
   error, not a blank screen.
7. Cite the version you used from `docs/repositories.md`; never from memory.

## Source

`mapeditor/tiled` — GitHub reports the licence as NOASSERTION, so open its own
licence files before telling the user what they may do with it. Not archived,
default branch `master`. Recorded fields are in `docs/repositories.md`.

## Do not

Do not write a map file by hand when the editor can save it. Hand-written maps
break in the editor.
