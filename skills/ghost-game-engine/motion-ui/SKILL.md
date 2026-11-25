# Skill: Motion interface animation

## Purpose

Motion (formerly Framer Motion) is the animation library for interface work in
React and in plain JavaScript. It animates what the player sees around the game:
menus sliding in, panels that grow from a click, screen transitions, buttons that
respond to hover and press, numbers that count, and elements that move between
two layouts without jumping.

It is built for accessibility and interruption: an animation can be cut short and
reversed from wherever it is, which CSS keyframes cannot do easily.

## When to use it

- Menu, pause, settings and game-over screens that slide, fade or expand.
- A React or Next.js game shell, or any React interface around a canvas game.
- Shared-element transitions (a card growing into a panel).
- Animated presence: something appears and disappears instead of popping.
- Anything that must honour `prefers-reduced-motion`.

## When not to use it

- The game world itself (sprites, bullets, camera): animate in the game loop with
  the engine (`phaser-2d/SKILL.md`, `threejs-3d/SKILL.md`) or the canvas. An
  animation library outside the loop runs at a different clock and desyncs.
- A single CSS transition is enough (a colour on hover): use CSS, it is free.
- Complex choreographed sequences and SVG morphs or drawing:
  `animejs-motion/SKILL.md`
  has the timeline and SVG tooling.

## Setup and supported version

- **motion 14.14.0** (`latest` on npm when checked). The package has separate
  entry points, each verified from `motion@14.14.0`'s own `exports` map:
  - **React:** `npm install motion`, then `import { motion } from "motion/react"`.
  - **Plain DOM / canvas / Phaser overlays:** `import { animate } from "motion"`
    (the package root, the DOM build — no React needed).
  - **Vue:** Motion has no first-party Vue entry; the Vue port is the separate
    package `motion-v` (`npm install motion-v`, `import { motion } from "motion-v"`).
- No build step is strictly required for the DOM build, but a bundler is the
  normal path.
- Keep one version across the project; mixing a motion 11 API with 14 silently
  drops options.

## Steps

1. Write down the three places animation is worth it (for example: menu
   entrance, panel open, screen change) and skip the rest.
2. Decide the duration and easing once (120–200 ms for UI, 250–350 ms for a
   screen change) and reuse those numbers as constants.
3. Animate transform and opacity only (`x`, `y`, `scale`, `opacity`,
   `rotate`). Animating `width`, `height`, `top` or `left` forces layout every
   frame and stutters on a phone.
4. For overlapping screens, mark the leaving one with presence support so it can
   finish its exit animation instead of vanishing.
5. Add the reduced-motion path: either remove the animation or replace movement
   with a fade, never a slower movement.
6. Test at phone size and with the CPU throttled: an interface animation that
   holds 60 fps on a laptop can drop frames on a mid-range phone.
7. Check the tab-hidden case: an animation should pause or complete, not build a
   queue of callbacks that all fire on return.

## Code examples

React (motion's main target):

```jsx
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const DURATION = 0.18;               // one shared number for UI motion

export function Panel({ open, children }) {
  const reduced = useReducedMotion();
  return (
    <AnimatePresence>
      {open && (
        <motion.section
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduced ? 0 : 12 }}
          transition={{ duration: reduced ? 0 : DURATION, ease: "easeOut" }}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
}
```

`useReducedMotion()` returns `true` when the system asks for less motion, so the
same component satisfies the preference without a second CSS file. The import
paths above are from the upstream README and the published `exports` map.

Plain JavaScript, no framework (a DOM overlay, a Phaser HUD, a canvas page):

```js
import { animate } from "motion";        // package root = the DOM build

const DURATION = 0.18;
const reduce = matchMedia("(prefers-reduced-motion: reduce)");

// A screen change: fade the old panel out, then the new one in.
export async function showPanel(fromEl, toEl) {
  if (fromEl) {
    await animate(fromEl, { opacity: 0 }, {
      duration: reduce.matches ? 0 : DURATION,
      easing: "ease-out",
    }).finished;
    fromEl.hidden = true;
  }
  toEl.hidden = false;
  animate(toEl, { opacity: [0, 1], y: reduce.matches ? [0, 0] : [12, 0] }, {
    duration: reduce.matches ? 0 : DURATION,
    easing: "ease-out",
  });
}
```

`animate()` returns controls with `.finished` (a promise), `.pause()`,
`.play()`, `.stop()` and `.cancel()` — keep the returned object if a screen can
change again before the animation ends, and `stop()` the old one.

A press/hover response that also works with a keyboard:

```jsx
<motion.button
  type="button"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  transition={{ duration: 0.12 }}
  style={{ minHeight: 44, minWidth: 44 }}   // touch target stays legal
>
  Start
</motion.button>
```

Motion's hover/tap gestures only fire on pointer events; keyboard focus needs its
own visible style (`:focus-visible`), so keep a CSS focus ring.

## Reduced motion and accessibility

- `prefers-reduced-motion` is a medical accessibility setting. Honour it in every
  animated screen.
- Never hide content behind an animation only: with reduced motion, the content
  is simply there.
- No flashing faster than three times a second, and no large full-screen flashes.
- Motion never carries meaning alone (a shake that says "wrong password" needs a
  text message too).
- Focus order must not depend on where an element has animated to. Move focus
  after the transition, not during it.
- Every animated control keeps a visible `:focus-visible` ring and a 44 px target.

## Mobile performance

- Transform and opacity only; avoid filters and blurs on large areas.
- Limit to a handful of simultaneous animations; each is a separate compositor
  layer.
- Do not animate `box-shadow`: it repaints a large area. Animate a separate
  element's opacity instead.
- Pause or complete animations when `document.hidden`.

## Common mistakes and how to avoid them

- **Importing React helpers from the wrong entry point**: use `motion/react` for
  React; plain DOM has its own documented import.
- **Animating layout properties**: `width`/`height`/`top` stutter. Use
  `transform`.
- **No `AnimatePresence` (or the DOM equivalent)**: the exit animation never runs
  and screens flash.
- **Driving gameplay state from `onAnimationComplete`**: a skipped or interrupted
  animation breaks the game. Change game state first, animate afterwards.
- **A new `transition` object created inside render on every frame**: it restarts
  animations. Hoist it or memoise it.
- **Ignoring reduced motion**: some players cannot use the game at all.

## Verification checklist

- [ ] Every animated screen appears and disappears without flashing.
- [ ] With reduced motion on (OS or dev tools), there is no movement, and all
      content is still visible.
- [ ] A keyboard user reaches every control, and the focus ring is visible.
- [ ] No animation drives game logic; the game state changes first.
- [ ] Runs smoothly at phone size with no layout jump (elements keep their space).
- [ ] Nothing animates while the tab is hidden.
- [ ] The library version is the same everywhere in the build.

## Upstream references

- Repository: <https://github.com/motiondivision/motion>
- Documentation: <https://motion.dev/docs>
- npm: <https://www.npmjs.com/package/motion>

## Licence and attribution

MIT (npm metadata for `motion`; the repository licence file is the authority —
re-read it before redistributing a modified copy). Keep the copyright and
permission notice with any redistributed source.

## Sources checked

2026-11-25: npm registry document for `motion` (`latest` 14.14.0, MIT) and a read
of the repository README (install line, React and DOM entry points). Not verified:
the exact current import path for the plain-DOM build and the full component list,
because the docs site was not read this session; check the installed package's
README before copying an import.
