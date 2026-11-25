# Skill: Tilemaps and level design

## Purpose

Build levels from tiles and objects with a map editor, load them in the game, and
keep collision, camera and spawn data in the map instead of in the code.

## When to use it

- Levels are grid based, or many hand-made levels are coming.
- Designers need to edit levels without touching code.
- An engine already loads TileD maps (Phaser, melonJS, Excalibur, Godot import).

## When not to use it

- The world is generated at runtime: procedural generation skill.
- The level is a few hand-placed objects: plain data in code is faster.

## Required inputs and prerequisites

- A tile editor. Tiled is the usual choice; read its row in
  `docs/repositories.md` before naming a licence (it is listed
  as `NOASSERTION` there: open its own licence files).
- The tile size, the map size and the layers planned: ground, decoration,
  collision, objects, spawns.
- Art that tiles seamlessly.

## Steps

1. Decide the tile size once (for example 16 or 32 pixels) and keep it for the
   whole game.
2. Split layers by job: ground, decoration, collision, object/spawn.
3. Put collision in the map, not in a list of manual boxes in the code.
4. Mark spawns, exits and triggers as objects with names the code reads.
5. Load the map through the engine's own loader; do not write a parser by hand.
6. Draw only what the camera sees when maps are large; never one giant texture.
7. Keep the map file in the repository and say which editor version made it.
8. Add one small map first, play it, then grow it.

## Upstream references

`mapeditor/tiled` for editing. Engine-specific loading is in that engine's skill
(Phaser, melonJS, Excalibur, Godot). Licence state for each:
`docs/repositories.md`.

## Compatibility and licence cautions

Tiled is a separate program published under its own licence; the map format is
not the editor. Check the licence of any tile art separately; a tileset bought or
found online is not covered by the engine's licence.

## Acceptance criteria and verification

- The map loads with no console error.
- The player cannot walk through walls marked as collision.
- Spawn and exit work.
- The game keeps a steady frame rate on the biggest map you ship.

## Known limitations

- Object layers do not enforce anything; the code must read them correctly.
- Very large maps need chunking or culling, which is extra work.
