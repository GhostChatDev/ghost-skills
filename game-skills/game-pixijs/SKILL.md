# Skill: PixiJS

Name: PixiJS

## When to use it

Fast 2D drawing in the browser where the user wants to own the game logic. PixiJS
renders; it does not decide anything.

## Rules

1. Say plainly that PixiJS has no game loop of its own beyond the ticker, no
   physics and no scenes. If the user expects those, point them to Phaser or
   Excalibur instead.
2. Pin one exact version. Read it from `docs/repositories.md`; never from memory.
3. One `Application`, with `ticker` driving `update(delta)`. Movement uses
   `delta`; do not assume 60 frames a second.
4. Group related objects in a `Container`, and move the container, not each
   child.
5. Textures are loaded once with `Assets.load` and shared. Never reload the same
   image per sprite.
6. Destroy what you remove (`destroy({ children: true })`), and remove the
   ticker callback you added.
7. Collision, camera and input mapping are your code. Keep them in small functions
   with tests you can run.

## Source

`pixijs/pixijs` answered the GitHub API in this session. Its licence, branch and
version fields are not recorded in `docs/repositories.md` yet: read them before
you quote them.

## Do not

Do not pull in a whole game engine to fill a gap you did not name out loud. Say
the gap first, then choose.
