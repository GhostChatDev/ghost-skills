# Skill: Three.js 3D

## Purpose

Build a 3D game in the browser with Three.js: a scene, a camera, a render loop,
lighting and simple gameplay systems written by hand.

Beginner version: Three.js draws a 3D world on a canvas. You place objects in a
scene, point a camera at them, add lights, and then draw that scene again and
again — about 60 times a second — moving things a little each time. Three.js
gives you drawing; movement, collisions and rules are your code.

## When to use it

- The game is 3D on the web and no full engine is wanted.
- A first-person or third-person view of a small world.
- A voxel or low-poly look built from simple shapes.
- A 3D menu scene, a product-style showcase, or a simple driving/flying sandbox.

## When not to use it

- The game is 2D: Phaser or PixiJS.
- The game needs built-in physics, GUI and an inspector on day one: Babylon.js
  is the closer fit.
- The project is already a React app: React Three Fiber renders the same scene
  inside it.
- You need particles only, on a 2D page: tsParticles is smaller (see
  `tsparticles`).

## Required inputs and prerequisites

- Node 22 and npm, or an import map pointing at an exact version.
- The camera and control scheme (keyboard, mouse, touch).
- The style decision: low-poly, voxel or realistic, said out loud.
- Read the licence row for `mrdoob/three.js` in
  `docs/repositories.md` before stating one, and see
  "Compatibility and licence" below for what was verified.

## Supported version

- Verified version: **three 0.187.0** (checked against the npm registry).
- Pin it exactly: `npm install three@0.187.0`. Three.js makes breaking changes
  between minor versions, so `"^0.187.0"` with an old tutorial snippet in the
  same file is a common way to lose an afternoon.
- Import addons from `three/addons/...`, not from a separate package.
- Every `three` import and every addon must be the **same** version. Mixing a
  CDN core with a locally installed addon breaks the classes.

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

## Code examples

### Renderer, camera and resize (the base every project needs)

```js
import * as THREE from "three";

const canvas = document.querySelector("#scene");
let renderer;

try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
} catch (err) {
  document.querySelector("#fallback").hidden = false; // a real message, not a blank page
  throw err;
}

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8ecae6);
scene.fog = new THREE.Fog(0x8ecae6, 30, 120);

const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 400);
camera.position.set(0, 4, 8);
camera.lookAt(0, 0, 0);

function resize() {
  const w = canvas.clientWidth || window.innerWidth;
  const h = canvas.clientHeight || window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener("resize", resize);
resize();
```

### Lights with a shadow that follows the player

```js
const sun = new THREE.DirectionalLight(0xfff3d6, 2.2);
sun.position.set(12, 24, 8);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
// A tight shadow camera is sharp and cheap; a huge one is blurry and slow.
const d = 25;
Object.assign(sun.shadow.camera, { left: -d, right: d, top: d, bottom: -d, near: 1, far: 90 });
scene.add(sun);
scene.add(new THREE.HemisphereLight(0xbfd9ff, 0x4a5b3d, 1.1));

// In the loop, move the light target with the player so shadows stay near them.
function updateSun(player) {
  sun.target.position.copy(player.position);
  sun.position.copy(player.position).add(new THREE.Vector3(12, 24, 8));
  sun.target.updateMatrixWorld();
}
```

### The loop with a capped delta

```js
const clock = new THREE.Clock();
const SPEED = 6; // units per second

renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05); // a slow frame must not fling the player
  player.position.x += input.x * SPEED * dt;
  player.position.z += input.z * SPEED * dt;
  updateSun(player);
  renderer.render(scene, camera);
});
```

### Instancing many copies of one thing

```js
// 200 trees, 200 draw calls -> 1 draw call.
const geo = new THREE.ConeGeometry(0.8, 2.4, 6);
const mat = new THREE.MeshLambertMaterial({ color: 0x2f6b3a });
const trees = new THREE.InstancedMesh(geo, mat, 200);
const m = new THREE.Matrix4();

for (let i = 0; i < 200; i++) {
  m.makeRotationY(Math.random() * Math.PI * 2);
  m.setPosition((Math.random() - 0.5) * 180, 1.2, (Math.random() - 0.5) * 180);
  trees.setMatrixAt(i, m);
}
trees.instanceMatrix.needsUpdate = true;
scene.add(trees);
```

### Quality setting, saved

```js
const KEY = "quality";
let quality = localStorage.getItem(KEY) ?? "low"; // start low: software WebGL is slow

function applyQuality() {
  const high = quality === "high";
  renderer.shadowMap.enabled = high;
  renderer.setPixelRatio(high ? Math.min(window.devicePixelRatio, 2) : 1);
  scene.traverse((o) => { if (o.isMesh) o.castShadow = high; });
  localStorage.setItem(KEY, quality);
}
applyQuality();
```

Start on **low** when the first second runs under ~30 frames: the automated
browser check runs on software WebGL, where shadows are very costly.

### Cleanup when leaving a scene or restarting

```js
function disposeScene(root) {
  root.traverse((obj) => {
    if (obj.isMesh || obj.isPoints || obj.isLine) {
      obj.geometry?.dispose();
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of mats) {
        for (const key of Object.keys(mat)) {
          const v = mat[key];
          if (v && v.isTexture) v.dispose();
        }
        mat.dispose();
      }
    }
  });
  root.removeFromParent();
}

renderer.setAnimationLoop(null);   // stop the loop before teardown
disposeScene(scene);
renderer.dispose();
```

Textures, geometries and materials live on the GPU: removing an object from the
scene does **not** free them. A restart loop that never disposes will run out of
memory on a phone within a few rounds.

## Common mistakes

1. **Not deleting removed objects from arrays.** When the loop iterates enemies
   or shots and something is removed mid-iteration, read a stale index. Walk
   backwards (`for (let i = list.length - 1; i >= 0; i--)`) or build a new array,
   and stop using the index after a removal.
2. **Uncapped delta.** Without `Math.min(delta, 0.05)`, one slow frame (a tab
   regaining focus) moves the player through a wall.
3. **One mesh per block or per tree.** Thousands of draw calls stall the page.
   Instance repeats, merge static scenery, keep `renderer.info.render.calls`
   low (a few hundred at most).
4. **Shadows on everything.** A shadow map per light and per object is the usual
   cause of "it runs at 12 fps on my phone". Tight shadow camera, one shadow
   light, off on Low quality.
5. **No WebGL fallback.** `new WebGLRenderer()` throws when the context is
   missing; the player sees a blank page instead of "your browser can't run
   this".
6. **Mixing three versions.** A core from a CDN and an addon from npm at another
   version throw confusing errors deep inside the library.
7. **Title only inside the canvas.** The first screen must be HTML, readable
   before (or without) the first frame.
8. **Never disposing on restart.** Textures and geometries accumulate; a mobile
   browser kills the tab.
9. **Resizing with `window.innerWidth` only.** The canvas may sit in a smaller
   container; use its client size, or the scene is squashed.
10. **Camera aspect not updated on resize.** Everything looks stretched
    sideways after rotating the phone. Always `camera.updateProjectionMatrix()`.

## Acceptance criteria and verification

- [ ] `three` is pinned to an exact version and every import matches it.
- [ ] The build finishes with no error.
- [ ] The page draws a visible scene within a few seconds, even on slow software
      WebGL; if WebGL is missing, a readable message is shown.
- [ ] No uncaught console error.
- [ ] The player moves with keyboard and with touch or on-screen buttons.
- [ ] The quality setting survives a refresh, and Low visibly reduces work.
- [ ] `renderer.info.render.calls` is in the low hundreds, not thousands.
- [ ] Nothing scrolls sideways at 390 px wide.
- [ ] Leaving or restarting the scene disposes geometries, materials and
      textures; memory does not grow on repeated restarts.

## Accessibility and reduced motion

A 3D canvas is opaque to assistive technology and can make people ill, so these
are requirements, not polish.

```js
// Read once; the loop and the effects consult it.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  if (!reduceMotion) camera.position.y = eyeY + Math.sin(clock.elapsedTime * 6) * 0.03; // no head bob
  renderer.render(scene, camera);
});
```

- **Turn off** head bob, view sway, camera shake, forced camera rotation,
  full-screen flashes, fast strobe lights and continuous screen-filling motion
  when `prefers-reduced-motion: reduce` is set. The world must stay playable and
  the player must still be able to move; reduced motion is not "no game".
- **Ship a "reduce motion" switch inside the game too**, next to the quality
  setting, and save it in `localStorage`: some players cannot change the OS
  setting, and some games are the reason they need it.
- **Never encode gameplay information only in 3D.** Health, ammo, score and
  objective go in HTML text over the canvas, with `aria-live="polite"` on the
  parts that change, so a screen reader announces them.
- **Name the canvas:** `role="img"` and an `aria-label` describing the scene, or
  an adjacent description. A bare `<canvas>` is read as nothing.
- **Every action needs a keyboard path.** Mouse-look with pointer lock is fine
  as an option; it must never be the only way to play, and pointer lock only
  after a deliberate click (never on page load).
- **Photosensitivity:** no more than a few flashes a second; a white flash on
  every hit is a health hazard.
- **Pause the loop when hidden** (`visibilitychange` → `setAnimationLoop(null)`,
  restart on return) so a background tab stops costing battery.

## Mobile performance

- Cap the pixel ratio at 2 (1 on Low); phones have far more pixels than they can
  fill cheaply.
- Prefer `MeshLambertMaterial`/`MeshBasicMaterial` for bulk scenery; use
  `MeshStandardMaterial` only where the look needs it.
- Keep post-processing (bloom, SSAO) on High only, or out entirely; it needs a
  graphics card.
- Fog plus a short draw distance hides the far edge and keeps the scene cheap.
- Pause the loop when the tab is hidden so a backgrounded game stops costing
  battery.

## Upstream references

`mrdoob/three.js`. Facts and licence: `docs/repositories.md`.
Read the official manual and examples pages for the API you use.

## Compatibility and licence cautions

- Licence file in the repository (`LICENSE`) is **MIT, Copyright © 2010-2026
  three.js authors** — verified 2026-11-25.
- Do not copy the library's source into the game repository; install it as a
  dependency (or load it from a CDN with an import map).
- Addons under `three/addons/` carry their own notices where imported from other
  projects: check the file header before shipping a copied addon.
- Check the licence of every model, texture and sound you add, separately from
  the library. GLB/DRACO files from asset sites usually have their own terms.
- The Three.js name and logo must not imply endorsement of your game.

## Sources checked

Checked **2026-11-25**:

- Repository: <https://github.com/mrdoob/three.js>
- `LICENSE` in the repository (MIT, three.js authors).
- Version: `three@0.187.0` from the npm registry.
- The API used above (`WebGLRenderer`, `Scene`, `Fog`, `PerspectiveCamera`,
  `DirectionalLight`, `HemisphereLight`, `InstancedMesh`, `setAnimationLoop`,
  `Clock`, `SRGBColorSpace`, `ACESFilmicToneMapping`, `dispose()` on geometry,
  material, texture and renderer) is documented in the official manual at
  <https://threejs.org/docs/>; read the page for a class before using a member
  this skill does not show.

Not verified in this session: the three.js **migration guide** for 0.187.0 was
not read, so any API renamed in recent releases was not cross-checked — if a
class behaves unexpectedly, check
<https://github.com/mrdoob/three.js/wiki/Migration-Guide>. The addons list and
`GLTFLoader`/`DRACOLoader` setup were not re-read either; use
<https://threejs.org/examples/> as the source for loader paths.

## Known limitations

- No gameplay engine: collisions, AI and save systems are your own work.
- Shadows and post-processing are slow without a graphics card; the browser
  check runs on software rendering.
- Large scenes need instancing, merging or level-of-detail or they stutter.
- A realistic "big studio" look is not achievable in one task; say plainly which
  simpler style you built instead.
