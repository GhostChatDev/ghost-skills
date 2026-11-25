# Skill: LÖVE

Name: LÖVE

## When to use it

A 2D game in Lua. Shortest path from an idea to something playable, for 2D
desktop games.

## Rules

1. Say which LÖVE version the game needs. Read it from `docs/repositories.md`;
   never from memory.
2. `main.lua` defines `love.load`, `love.update(dt)`, `love.draw`. Movement uses
   `dt`. Never a fixed step per frame.
3. Keep one table per thing (player, enemies, bullets) and update them in loops.
   Do not use a global for each object.
4. Load images and sounds in `love.load`, and keep them in a table.
5. Collision is your own simple rectangle check, kept in one small function you
   can test. Say it is a rectangle check, not a physics engine.
6. Tell the user exactly how to run it: drag the folder onto love.exe, or
   `love .` in the folder that holds `main.lua`.
7. Say what the browser build would need (`love.js`) instead of claiming a web
   build works.

## Source

`love2d/love` — GitHub reports the licence as NOASSERTION, so open its own
licence file before telling the user what they may do with it. Not archived,
default branch `main`. Recorded fields are in `docs/repositories.md`.

## Do not

Do not add a level editor or a framework. Keep the game readable in a handful of
`.lua` files.
