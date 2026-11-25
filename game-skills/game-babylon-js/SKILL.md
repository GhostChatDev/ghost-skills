# Skill: Babylon.js

Name: Babylon.js

## When to use it

A browser 3D game that needs more built in than a renderer: its own physics,
GUI, animations, inspector and WebGPU. Choose it when the user should not have to
glue five libraries together.

## Rules

1. Pin one exact version and import only what you use (`@babylonjs/core`), so the
   page does not download the whole engine.
2. One `Engine` (or `WebGPUEngine`) and one `Scene`. Start the loop with
   `engine.runRenderLoop(() => scene.render())`, and call `engine.resize()` on a
   window resize.
3. Movement uses the per-frame delta. Do not move by a fixed amount per frame.
4. Use the built-in `PhysicsAggregate` and the physics plugin instead of writing
   your own gravity.
5. Assets go through `AssetsManager`, and you wait for it to finish before the
   game starts. Do not assume a mesh exists.
6. Catch a failed engine start and show a plain message on the page.
7. Dispose meshes, materials and textures you remove, and stop the render loop
   before you leave the scene.

## Source

`BabylonJS/Babylon.js` — Apache-2.0 licence, not archived, default branch
`master`. Recorded fields are in `docs/repositories.md`.

## Do not

Do not mix the legacy `babylonjs` bundle with `@babylonjs/core` in one project.
Pick one and say which.
