# Skill: Phaser

Name: Phaser

## When to use it

A browser 2D game with scenes, sprites, arcade physics, input and tweens. Choose
it when the user wants a finished 2D framework and no 3D.

## Rules

1. Pin one exact version and load it from one place (`npm install`, or a CDN
   script with that version in the URL). Read the version from
   `docs/repositories.md`; never write it from memory.
2. One `Scene` class per screen: Boot, Preload, Menu, Level, GameOver. Load assets
   in `preload()`, create them in `create()`, move them in `update(time, delta)`.
3. Use the arcade physics built into the scene. Do not write your own collision
   loop beside it.
4. Every movement uses `delta` or the physics body's velocity. Do not add a fixed
   number of pixels per frame.
5. Keys come from the scene's keyboard plugin, and you check them in `update`.
   Set up touch and pointer input in the same place, so phones work.
6. Play sound only after the first tap or click. Browsers block sound before a
   user gesture.
7. `scene.start('Level')` replaces the scene; stop timers and tweens when you
   leave a scene, or they keep running.

## Source

`phaserjs/phaser` answered the GitHub API in this session. Its licence, branch and
version fields are not recorded in `docs/repositories.md` yet: read them before
you quote them.

## Do not

Do not say a level, a score or a jump was tested unless the browser check or the
user's own run showed it.
