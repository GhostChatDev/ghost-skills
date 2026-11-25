# Skill: tsParticles Backgrounds and Confetti

## Purpose

Add particles to a web page or game with tsParticles: a drifting starfield
behind a menu, snow or embers, or a confetti burst when a level is cleared.

Beginner version: tsParticles draws many small moving dots, shapes or images on
a canvas. You describe them in a config object — how many, how fast, what they
look like — and the library animates them for you.

## When to use it

- A menu or menu background that needs atmosphere (stars, snow, embers, dust).
- A one-off celebration burst: confetti when a level ends or a goal is reached.
- A slow ambient layer that must not interfere with gameplay.
- You want a config-driven particle system and do not want to write a canvas
  loop yourself.

## When not to use it

- The particles are **gameplay** (bullets, enemies, hit sparks that must collide
  or be counted): write them in the game loop. A config library will not give
  you the control or the hit detection you need.
- The effect is a few dozen particles with physics: a hand-written canvas loop
  is smaller than adding a dependency.
- The page is already struggling on a low-end phone: an ambient full-screen
  particle layer is the first thing to cut (see performance limits below).
- You need 3D particles inside a Three.js scene: use Three.js `Points` and a
  buffer geometry instead; two renderers fighting for the same canvas looks
  wrong and costs twice.

## Required setup and version

- Verified version: **tsParticles 4.6.0** (checked against the npm registry).
- Confirmed packages and API, from the official README:
  - `@tsparticles/engine` — the engine (`tsParticles` object).
  - `@tsparticles/slim` — a bundle of the common features (`loadSlim`).
  - Load the bundle **once**, then call `tsParticles.load({ id, options })`.
- Install: `npm install @tsparticles/engine@4.6.0 @tsparticles/slim@4.6.0`
- No bundler: load the slim bundle script before your own script, pinned to the
  same exact version, then call the same API.
- The options are **camelCase**. The old particles.js-style snake_case keys are
  not valid in v4. If a snippet uses `retina_detect`, it is the wrong API.

## Steps

1. Decide the job: **background** (always on, slow, low count) or **burst**
   (one-off, short-lived, higher count but removed afterwards).
2. Add a container element with a fixed size and an `id`. Give it
   `position: absolute; inset: 0; pointer-events: none;` for a background so it
   never eats clicks, and a `z-index` below the UI.
3. `await loadSlim(tsParticles)` once, at startup, before any `load` call.
4. Start small: `number.value` of 40–60, slow `move.speed`, then raise it after
   checking the frame rate.
5. For a burst, set the particles to die out (`life` / a short `duration`) and
   stop or destroy the container when it is over, so the canvas does not keep
   running behind the next screen.
6. Test at phone size with the CPU throttled, then cut the count until it is
   smooth.
7. Offer reduced motion: fire the burst once, briefly, or skip it entirely.

## Code examples

### First: give the container an element and a size

`id` in the config is the **id of an element on the page**. With
`fullScreen: { enable: false }` the canvas fills that element, so the element
must exist and must have a size. If the element is missing, tsParticles appends
a new div to `<body>` with no width or height and nothing visible is drawn.

```html
<!-- A background layer behind the game, and a layer for bursts on top. -->
<div id="starfield" class="fx-layer fx-layer--behind" aria-hidden="true"></div>
<div id="confetti" class="fx-layer fx-layer--front" aria-hidden="true"></div>
```

```css
.fx-layer {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;   /* never blocks a tap on a game control */
}
.fx-layer--behind { z-index: 0; }
.fx-layer--front  { z-index: 30; }
```

`pointer-events: none` matters: a full-screen canvas over the game would eat
every click and tap. `aria-hidden="true"` keeps decoration out of screen readers.

### A starfield background (the confirmed v4 API)

```js
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

let container = null;

export async function startStarfield() {
  await loadSlim(tsParticles);          // once per page load
  container = await tsParticles.load({
    id: "starfield",                   // matches the element id
    options: {
      fullScreen: { enable: false },   // the container is sized by CSS
      background: { color: "transparent" },
      particles: {
        number: { value: 60, density: { enable: true } },
        color: { value: ["#ffffff", "#9fd0ff", "#ffd9a0"] },
        shape: { type: "circle" },
        opacity: { value: { min: 0.2, max: 0.8 } },
        size: { value: { min: 0.5, max: 2 } },
        move: { enable: true, speed: 0.4, direction: "top" },
      },
    },
  });
}

export function stopStarfield() {
  container?.destroy();                // stop drawing and free the canvas
  container = null;
}
```

### A confetti burst on a win, removed afterwards

```js
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

let loaded = false;
let burst = null;

export async function celebrate() {
  if (!loaded) { await loadSlim(tsParticles); loaded = true; }

  burst?.destroy();                    // never stack two bursts
  burst = await tsParticles.load({
    id: "confetti",
    options: {
      fullScreen: { enable: false },
      particles: {
        number: { value: 90 },
        color: { value: ["#ff4d6d", "#ffd166", "#4cc9f0", "#8ac926"] },
        shape: { type: ["square", "circle"] },
        size: { value: { min: 4, max: 9 } },
        rotate: { value: { min: 0, max: 360 }, animation: { enable: true, speed: 20 } },
        move: { enable: true, speed: 6, direction: "bottom", gravity: { enable: true, acceleration: 9 } },
        opacity: { value: 1 },
        // Particles fade out on their own, so the canvas can be destroyed soon after.
        life: { duration: { sync: false, value: 2.4 }, count: 1 },
      },
    },
  });

  window.setTimeout(() => { burst?.destroy(); burst = null; }, 3200);
}
```

`life.duration.value` is in **seconds**; the `setTimeout` is a safety net so the canvas
is released even if the config is edited later.

### Respecting reduced motion

```js
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduce) {
  startStarfield();
} // otherwise: no ambient layer, and a static background colour instead

export async function win() {
  if (reduce) { showWinText(); return; }  // still show the result, skip the motion
  await celebrate();
  showWinText();
}
```

### Pausing when the tab is hidden

```js
document.addEventListener("visibilitychange", () => {
  if (document.hidden) container?.pause();
  else container?.play();
});
```

## Performance limits

Particles are fill-rate bound: on a large canvas with a high `number.value`, a
phone drops frames before a desktop does. Practical rules:

- Background: **60 particles or fewer** at phone width; measure and cut in half
  if it stutters.
- Burst: **90–150** is enough for a convincing confetti pop; more does not look
  better, it just costs frames.
- Keep `fpsLimit` set when the config allows it (a menu does not need 120 fps).
- A background particle canvas is full-screen; on a game screen it competes with
  the renderer. Cut it during play, or make the play area's canvas the only
  animation surface.
- Do not run two particle containers at once if one will do.
- `destroy()` the container you no longer need; a paused-but-alive canvas still
  holds memory.

## Common mistakes

1. **Calling `tsParticles.load` before `loadSlim`.** The engine has no shapes,
   so you get an empty canvas and a console complaint about missing features.
   Always load the bundle first.
2. **Using particles.js-era options** (`snake_case`, `retina_detect`,
   `particles.js` config files). Convert to v4 camelCase options or regenerate
   the config from the docs.
3. **`fullScreen: { enable: true }` when you meant a container.** Full screen
   injects its own canvas at document level and ignores your element's CSS,
   often putting particles over your UI.
4. **Pointer events stolen by the canvas.** A background layer must be
   `pointer-events: none`, or no button underneath will be clickable.
5. **High counts "because it looks richer".** It costs phone frames, and on a
   small screen most particles are off-screen anyway.
6. **Never destroying a burst.** Each win adds another canvas; after ten wins
   the page crawls.
7. **Ignoring reduced motion.** Confetti and starfields are exactly the kind of
   motion some players need to switch off.
8. **Particles as gameplay.** No collision, no reliable per-particle hit test,
   no game-logic state — do that in your loop.

## Verification checklist

- [ ] `@tsparticles/engine` and `@tsparticles/slim` are pinned to the same
      version, and `loadSlim` runs before any `load` call.
- [ ] The container has the size and stacking you intended; UI buttons under or
      over it are still clickable.
- [ ] A background layer pauses when the tab is hidden.
- [ ] Every burst is `destroy()`ed when it ends, and a rapid repeat win does not
      stack canvases.
- [ ] Particle counts are the small numbers above and the page stays smooth on a
      throttled phone.
- [ ] With reduced motion on, the page is usable and content still appears.
- [ ] No console errors, and no leftover canvas after leaving the screen.

## Sources checked

Checked **2026-11-25**:

- Repository: <https://github.com/tsparticles/tsparticles>
- README (quick start, `loadSlim`/`tsParticles.load` usage, pitfalls): the
  repository's `README.md`, read directly.
- Bundles: `bundles/slim/README.md` and `bundles/slim/src/index.ts` in the
  repository (what `@tsparticles/slim` includes).
- Version: `tsparticles@4.6.0` from the npm registry.
- Licence file: `LICENSE` in the repository is **MIT License, Copyright (c)
  2020 Matteo Bruni**.

Not verified in this session: the full option reference for every field used
above (`life`, `gravity`, `rotate.animation`, `fpsLimit`) was not read from the
options guide. The keys are used as documented in v4 examples, but confirm any
option this skill does not explain at
<https://github.com/tsparticles/tsparticles/blob/main/markdown/Options.md>.
The presets catalogue (<https://github.com/tsparticles/presets>) was not read;
if you use a preset, check its own package name and version.

## Licence and attribution

tsParticles is MIT licensed: free for commercial use, closed source included.
Keep the copyright and permission notice when you redistribute the library. No
on-screen attribution is required, and the tsParticles name must not be used to
imply endorsement of your game.
