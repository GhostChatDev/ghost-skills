# Skill: Three.js 3D

## Purpose

Build a 3D game in the browser with Three.js: a scene, a camera, a render loop,
lighting and simple gameplay systems written by hand.

## When to use it

- The game is 3D on the web and no full engine is wanted.
- A first-person or third-person view of a small world.
- A voxel or low-poly look built from simple shapes.

## When not to use it

- The game is 2D: Phaser or PixiJS.
- The game needs built-in physics, GUI and an inspector on day one: Babylon.js
  is the closer fit.
- The project is already a React app: React Three Fiber renders the same scene
  inside it.

## Required inputs and prerequisites

- Node 22 and npm, or an import map pointing at an exact version.
- The camera and control scheme (keyboard, mouse, touch).
- The style decision: low-poly, voxel or realistic, said out loud.
- Read the licence row for `mrdoob/three.js` in
  `docs/ghost-game-engine/repositories.md` before stating one. It is listed as
  reachable there with fields not yet recorded; read the value again first.

## Steps

1. Say which style you chose and why. A studio look is out of reach in one task;
   good lighting, fog and simple shapes are not.
2. Pin the exact `three` version in `package.json`; import addons from
   `three/addons/...`.
3. Create the renderer with antialias, pixel ratio capped at 2, sRGB output and
   ACES tone mapping. Handle window resize.
4. If WebGL cannot start, show a message on the page. Never a blank screen.
5. One loop with `renderer.setAnimationLoop`. Multiply movement by delta, capped
   at 0.05, so a slow frame does not throw the player across the map.
6. Build the world from shapes. Many copies of one thing are one InstancedMesh;
   static scenery is merged. Read `renderer.info.render.calls` and keep it low.
7. Light it: one directional light with shadows, one soft ambient or hemisphere
   light, fog to hide the far edge.
8. Add a Low/High quality setting saved in localStorage. Low turns off shadows
   and lowers the pixel ratio.
9. Draw the title and the controls in HTML on top of the canvas, so the first
   screen is readable before the first frame renders.
10. Dispose geometries, materials and textures of anything you remove.
11. Plan the gameplay systems (collisions, enemies, score) explicitly. Three.js
    is a renderer; the game is your code or a physics library.

## Upstream references

`mrdoob/three.js`. Facts and licence: `docs/ghost-game-engine/repositories.md`.
Read the official manual and examples pages for the API you use.

## Compatibility and licence cautions

See the licence row in `docs/ghost-game-engine/repositories.md`. Do not copy the
library's source into the game repository; install it as a dependency. Check the
licence of every model and texture you add, separately from the library.

## Acceptance criteria and verification

- The build finishes with no error.
- The page draws a visible scene within a few seconds, even on slow software
  WebGL.
- No uncaught console error.
- The player moves with keyboard and with touch or on-screen buttons.
- The quality setting survives a refresh.
- Nothing scrolls sideways at 390 px wide.

## Known limitations

- No gameplay engine: collisions, AI and save systems are your own work.
- Shadows and post-processing are slow without a graphics card; the browser
  check runs on software rendering.
- Large scenes need instancing, merging or level-of-detail or they stutter.
