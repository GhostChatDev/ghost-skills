# Skill: Anime.js Timelines and Titles

## Purpose

Animate things in the browser with Anime.js: staggered entrances, animated SVG
logos, title screens, and multi-step sequences driven by one timeline.

Beginner version: Anime.js takes an element (or many), and moves, fades or
scales it over time. A timeline is a list of those moves with an order, so you
can build "logo draws in, then the menu slides up, then the hint pulses" without
nesting callbacks.

## When to use it

- A game title screen, menu transitions or an animated logo.
- A sequence of more than two steps that must stay in sync (intro cutscene).
- Animating SVG: stroke drawing with `strokeDashoffset`, morphing paths.
- Any page animation where you want one small file and no framework.

## When not to use it

- The project is a React or Vue app with component state driving the motion:
  use Motion (see `motion-ui`), which is built for that.
- The animation is a simple hover or a one-property transition: CSS
  transitions are cheaper and need no library.
- The motion is physics-driven gameplay (jumping, bouncing, collisions): that
  belongs in the game loop with delta time, not in a tween library.
- You need spring physics on layout: Motion's spring support or a dedicated
  physics library fits better.

## Required setup and version

- Verified version: **animejs 4.5.0** (checked against the npm registry).
- Anime.js **v4 renamed its API**. Code written for v3 (`anime({ ... })`,
  `anime.timeline()`) will not run. Read the v4 docs before copying snippets
  from a blog post.
- Install: `npm install animejs@4.5.0` and `import { animate, createTimeline, stagger, splitText } from "animejs";`
- No build step: use the ESM build from a CDN with an import map pinned to the
  same exact version. Do not mix a v3 script tag with v4 imports.
- The functions used in this skill — `animate`, `createTimeline`, `stagger`,
  `splitText`, `utils` — are the ones confirmed in the official v4 docs.
  Features this skill does not use (scroll triggers, draggables, timers) should
  be read on the docs site first; do not assume their names.

## Steps

1. Decide what one "step" of the animation is: one element or one group
   entering, moving or leaving.
2. Write the CSS so the **end state is the resting state** in the stylesheet,
   and animate only properties you can composite (transform, opacity,
   stroke-dashoffset, color). Never animate `width`, `height`, `top` or `left`
   for anything that runs on a phone: they force layout on every frame.
3. Animate with `animate(targets, { ...params })` to check one step works.
4. Wrap the steps in `createTimeline()` and add them in order when the sequence
   must stay in sync.
5. Wrap everything in a reduced-motion check and provide an instant version.
6. Keep a reference to the returned instance so you can `revert()` (v4 cleans up
   its inline styles and, where used, its event listeners) when the screen
   closes or the component unmounts.
7. Test on a slow phone profile and with the OS "reduce motion" setting on.

## Code examples

### One element, one step

```js
import { animate } from "animejs";

// v4: animate(targets, params)
const fade = animate(".menu-item", {
  opacity: [0, 1],
  translateY: [16, 0],
  duration: 400,
  delay: 120,
  ease: "outQuad",
});

// later, e.g. when the screen closes
fade.revert();
```

### Stagger: many items, one call

```js
import { animate, stagger } from "animejs";

animate(".menu-item", {
  opacity: [0, 1],
  translateY: [24, 0],
  duration: 450,
  // stagger(value): MILLISECONDS between each target's start in Anime.js v4
  // (all time values in v4 are ms — 60 here = 0.06s, not 60s).
  delay: stagger(60),
  ease: "outCubic",
});
```

### Timeline: a title screen in steps

```js
import { createTimeline, stagger } from "animejs";

// 1. Measure the real path first — `pathLength` is not a built-in name, it is
//    whatever getTotalLength() returns for THIS path.
const logoPath = document.querySelector(".logo-path");
let dashLength = 0;
if (logoPath && typeof logoPath.getTotalLength === "function") {
  dashLength = logoPath.getTotalLength();
  logoPath.style.strokeDasharray = String(dashLength);
  logoPath.style.strokeDashoffset = String(dashLength);
}

// 2. Build the timeline in a function, so the reduced-motion branch below can
//    create it too (a listener must never call .play() on something undefined).
// Timeline positions: numbers are absolute ms on the timeline.
// "+=200" means "200ms after the previous step ends".
function buildIntro() {
  return createTimeline({ autoplay: true })
    .add(logoPath, {
      strokeDashoffset: [dashLength, 0],   // the measured length, not a guess
      duration: 900,
      ease: "inOutSine",
    })
    .add(".game-title", {
      opacity: [0, 1],
      scale: [0.94, 1],
      duration: 500,
      ease: "outQuad",
    }, "-=300")            // overlap the previous step by 300ms
    .add(".menu-item", {
      opacity: [0, 1],
      translateY: [18, 0],
      delay: stagger(70),
      duration: 380,
      ease: "outQuad",
    }, "+=150");
}

// Controls exist on the returned instance: play, pause, restart, seek.
// Read the docs for the full set before using a method by name.
let intro = buildIntro();
document.querySelector("#skip").addEventListener("click", () => intro.seek(9999));
```

### SVG line drawing (the clean way)

Make the SVG path length known instead of hard-coding a magic number:

```js
const path = document.querySelector(".logo-path");
const length = path.getTotalLength();
path.style.strokeDasharray = String(length);
path.style.strokeDashoffset = String(length);

import { animate } from "animejs";
animate(path, { strokeDashoffset: 0, duration: 900, ease: "inOutSine" });
```

`getTotalLength()` is a browser API on `SVGGeometryElement`; it is exact for any
path, which is why it beats guessing the dasharray.

### `splitText`: letter-by-letter titles

```js
import { animate, splitText, stagger } from "animejs";

// splitText wraps the text in spans; store the result so you can revert it.
const { chars } = splitText(".game-title");
animate(chars, {
  opacity: [0, 1],
  translateY: [12, 0],
  delay: stagger(35),
  duration: 300,
  ease: "outQuad",
});
```

Splitting text replaces the DOM inside the element, so: split **once** (not on
every frame or every resize), and revert it before the element is re-rendered.
Screen readers can read split spans character by character — for anything
longer than a short title, keep one accessible copy of the text (for example
`<h1 aria-label="ZERO HOUR">` with the split spans `aria-hidden="true"`).

### Reduced motion (do this in every project)

```js
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

function showFinalState() {
  document.querySelectorAll(".menu-item, .game-title")
    .forEach((el) => { el.style.opacity = "1"; el.style.transform = "none"; });
  // The SVG title: dash out means "fully drawn".
  const logoPath = document.querySelector(".logo-path");
  if (logoPath) logoPath.style.strokeDashoffset = "0";
}

// `intro` comes from buildIntro() above. Build it once, here, so the listener
// below always has a real object. null when motion is reduced from the start.
let intro = null;
if (reduce.matches) {
  showFinalState();
} else {
  intro = buildIntro();
}

// Also react if the setting changes while the page is open.
// Optional chaining and a null check: never call a method on nothing.
reduce.addEventListener("change", (e) => {
  if (e.matches) {
    if (intro) { intro.pause(); intro = null; }
    showFinalState();
  } else {
    intro = buildIntro();
  }
});
```

Reduced motion is not only a preference; it is a medical need for some players
(vestibular disorders). Offer an in-game "reduce motion" toggle too, and store
it, so players on shared or console-like setups can turn effects down.

## Common mistakes

1. **Copying v3 snippets.** `anime({})` and `anime.timeline()` do not exist in
   v4. Check the version in `package.json` first.
2. **Animating layout properties.** `width`, `height`, `left`, `top`, `margin`
   re-layout the page every frame and drop frames on a phone. Use `transform`
   and `opacity`.
3. **No reduced-motion path.** Flashing or fast movement can make players ill.
   Always ship the static version.
4. **Forgetting cleanup.** A timeline left running on a screen that was removed
   keeps writing styles into detached nodes. Call `revert()` (or `pause()`) on
   unmount and on screen change.
5. **Splitting text repeatedly.** Calling `splitText` on an already split
   element nests spans and destroys styling and selection.
6. **Animating a game sprite with Anime.js.** In a game, the render loop owns the
   sprite. Use Anime.js for the menus and titles, and your loop for the play
   field.
7. **Huge staggered sequences with no skip.** Players press a button to skip
   intros; make every sequence skippable and let input continue the game.
8. **Importing from the wrong path.** Anime.js v4 is imported as `"animejs"`.
   A path that worked with a v3 CDN build is not a v4 entry point.

## Verification checklist

- [ ] `package.json` pins `animejs` to `4.5.0` (or the version you actually
      tested) and imports come from `"animejs"`.
- [ ] Only compositor-friendly properties are animated.
- [ ] Every timeline/instance is reverted or paused when its screen closes.
- [ ] With `prefers-reduced-motion: reduce` on, the page is fully usable and
      nothing animates.
- [ ] The intro is skippable and keyboard-reachable.
- [ ] Text that was split is reverted, and long text keeps an accessible copy.
- [ ] On a throttled phone profile the animation still looks smooth, or is cut
      down.
- [ ] No console errors during and after the animation.

## Sources checked

Checked **2026-11-25**:

- Repository: <https://github.com/juliangarnier/anime>
- Documentation (Animation): <https://animejs.com/documentation/animation/>
- Documentation (Timeline): <https://animejs.com/documentation/timeline/>
- Version and licence file: `animejs@4.5.0` from the npm registry; `LICENSE.md`
  in the repository is **The MIT License, Copyright (c) 2025 Julian Garnier**.

Not verified in this session: the full v4 method list on a timeline instance
(`play`, `pause`, `seek`, `restart` and others) beyond the documented existence
of the timeline object — read <https://animejs.com/documentation/timeline/>
before relying on a method this skill does not show.

## Licence and attribution

Anime.js is MIT licensed. You may use it commercially and in closed-source work.
Keep the copyright and permission notice with any copy of the library you
redistribute (a bundled build counts). No attribution is required on screen.
Do not use the Anime.js name or logo to imply endorsement of your game.
