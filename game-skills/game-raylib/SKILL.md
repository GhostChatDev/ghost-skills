# Skill: raylib

Name: raylib

## When to use it

A desktop game in C that should stay small and start fast, with no editor and no
scene files. Good for learning and for tiny games.

## Rules

1. Say which raylib version and which C standard the code needs. Read the version
   from `docs/repositories.md`; never from memory.
2. One `InitWindow` and one game loop: `while (!WindowShouldClose())`, then
   `BeginDrawing`, draw, `EndDrawing`, then `CloseWindow`.
3. Movement uses `GetFrameTime()`, never a fixed step per frame.
4. Collision uses `CheckCollisionRecs` and its siblings. Do not write a manual box
   test beside them.
5. Load each texture or sound once, keep it in a struct, and `UnloadTexture` /
   `UnloadSound` before `CloseWindow`.
6. Tell the user the exact build command (`gcc main.c -o game -lraylib -lm`) and
   the folder it runs from.
7. A game that does not compile is not delivered. Compile it before you answer,
   or say you could not.

## Source

`raysan5/raylib` — Zlib licence, not archived, default branch `master`. Recorded
fields are in `docs/repositories.md`.

## Do not

Do not add a game framework on top of raylib unless the user asked for it. raylib
is the whole point.
