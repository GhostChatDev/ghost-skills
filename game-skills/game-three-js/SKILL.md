# Skill: Three.js

Name: Three.js

## When to use it

A 3D game or 3D scene in the browser, with no game engine around it: plain HTML,
one canvas and JavaScript modules. Choose it when the user wants full control and
a small page.

## Rules

1. Import from `three` and addons from `three/addons/...`, and pin one exact
   version. Read the current version from `docs/repositories.md`; never write it
   from memory.
2. Build the renderer once: antialias on, pixel ratio capped at 2, colour space
   set to sRGB, tone mapping on. Resize with the window.
3. One loop: `renderer.setAnimationLoop(frame)`. Multiply every movement by the
   frame delta, capped so a slow frame cannot teleport the player.
4. Many copies of one thing are one `InstancedMesh`. Static scenery is merged.
   Aim under 300 draw calls and read `renderer.info.render.calls` to check.
5. Dispose geometries, materials and textures you remove. A leaked texture keeps
   memory forever.
6. Picking is done with a raycast, not by looping over every mesh by hand.
7. If WebGL cannot start, draw a clear message on the page. Never leave a white
   screen.
8. Say which quality setting exists (low turns off shadows) and save it in
   `localStorage`.

## Source

`mrdoob/three.js` answered the GitHub API in this session. Its licence, branch
and version fields are not recorded in `docs/repositories.md` yet: read them
before you quote them.

## Do not

Do not claim a frame rate, a device test or a look you did not see. Say what the
browser check reported.
