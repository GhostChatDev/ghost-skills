# Skill: LittleJS

Name: LittleJS

## When to use it

A tiny browser game that should be one HTML file plus one script: the engine is
small, single-file and has no build step.

## Rules

1. Pin one exact version in the script tag or the import. Read it from
   `docs/repositories.md`; never from memory.
2. Use its engine functions (`engineInit`, `engineUpdate`, `engineDraw`) and its
   own object list. Do not build a second update loop beside it.
3. Movement uses the frame delta the engine provides. Do not move a fixed number
   of pixels per frame.
4. Sound effects come from its built-in sound functions. Start audio only after
   the first input.
5. Keep the game in one file only while it fits. Past about 300 lines, split the
   code into modules and say where each file goes.
6. Set a canvas size that fits a phone, and test at phone size before you call it
   done.

## Source

`KilledByAPixel/LittleJS` answered the GitHub API in this session. Its licence,
branch and version fields are not recorded in `docs/repositories.md` yet: read
them before you quote them.

## Do not

Do not add a bundler or a framework to a LittleJS game. The point is that there is
nothing to install.
