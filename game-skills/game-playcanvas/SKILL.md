# Skill: PlayCanvas

Name: PlayCanvas

## When to use it

A browser 3D game that should run well on phones, using WebGL2 or WebGPU, and
where the user wants the PlayCanvas editor and its material system.

## Rules

1. Say whether the work is in the PlayCanvas editor (entities and scripts) or in
   plain engine code. The two are different projects; do not mix instructions.
2. Pin one exact engine version and load it from one place.
3. Scripts are components: `on initialize`, `on update(dt)`, `on destroy`. Every
   movement is multiplied by `dt`.
4. Use `pc.Application`'s own asset loading and wait for assets before the first
   frame. Never assume a material or model is ready.
5. Keep the draw calls down by sharing materials and by using instancing for
   repeated props.
6. Call `destroy()` on entities, materials and textures you remove.
7. Test at phone size first: touch controls and a smaller render resolution.

## Source

`playcanvas/engine` — MIT licence, not archived, default branch `main`. Recorded
fields are in `docs/repositories.md`.

## Do not

Do not publish or share a project on the user's behalf. Do not claim an editor
step you did not see work.
