# Skill: Godot

Name: Godot

## When to use it

The task needs a full game engine with an editor: 2D or 3D, desktop or mobile,
and the user wants `.tscn` scenes and `.gd` scripts. Choose it when the game is
bigger than one file.

## Rules

1. Say the engine version you are writing for, and keep it the same in every
   file. Read the current version from `docs/repositories.md`; never from memory.
2. One scene per thing that exists: player, enemy, bullet, level. The level
   builds itself from the smaller scenes. Do not put everything in one scene.
3. Use signals for what happens, and call down for what must happen now. Do not
   reach across the tree by a hard-coded path like
   `get_node("../../Player")`: use `@export` or a group.
4. Movement goes in `_physics_process(delta)`, and every speed is multiplied by
   `delta` so a slow frame does not fling the player.
5. Text, input maps and paths live in the project settings, not scattered in
   code. Name an input action the same everywhere.
6. Tell the user exactly which folder the project goes in and which button opens
   it (`Project > Run`, or F5). A project that will not open is not delivered.
7. Keep `.import/` and `.godot/` out of the repository. Commit
   `project.godot`, scenes, scripts and assets.

## Source

`godotengine/godot` — MIT licence, not archived, default branch `master`. The
recorded fields are in `docs/repositories.md`.

## Do not

Do not invent node names, signals or property names. If you have not seen the
name in the docs or in the user's project, look it up or say you are unsure.
