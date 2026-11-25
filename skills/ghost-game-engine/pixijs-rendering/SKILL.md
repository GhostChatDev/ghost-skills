# Skill: PixiJS rendering

## Purpose

Draw a 2D game with PixiJS when the rendering is custom and the gameplay is
written by hand.

## When to use it

- A 2D game with unusual visuals: shaders, particles, many sprites, custom
  drawing.
- The project already uses PixiJS.
- A rendering layer under code the team controls.

## When not to use it

- The game needs scenes, physics, tweens and input out of the box: that is
  Phaser, which is a full 2D engine.
- The game is 3D: Three.js.
- The game is one small idea: LittleJS or KAPLAY is less setup.

## Required inputs and prerequisites

- Node 22 and npm.
- A clear statement of what you implement yourself: the loop, input, collisions
  and collision shapes.
- The resolution and whether the game uses WebGL or WebGPU.
- Read the licence row for `pixijs/pixijs` in
  `docs/ghost-game-engine/repositories.md` first. It is listed as reachable with
  fields not yet recorded.

## Steps

1. Say plainly that PixiJS renders only: every game rule is your code.
2. Pin the PixiJS version and note which renderer it uses in this version.
3. Create one application, one ticker, one stage. Do not create a second loop.
4. Group the display list: world container, UI container, and a camera transform
   on the world container.
5. Implement input once: keyboard state map plus pointer or touch, normalised to
   the same actions.
6. Implement collisions yourself with simple shapes (boxes, circles) unless a
   physics library is added on purpose and named.
7. Move with the ticker's delta. Never assume 60 frames.
8. Destroy sprites that leave the world; reuse from a pool for bullets and
   particles.
9. Test the drawing at phone width and with a slow frame rate.

## Upstream references

`pixijs/pixijs`. Licence and verification state:
`docs/ghost-game-engine/repositories.md`. Use its own guide and examples for the
API of the version you pinned.

## Compatibility and licence cautions

See `docs/ghost-game-engine/repositories.md`. PixiJS is not a game engine: do not
describe it as one, and do not imply physics, audio or scenes come with it. Add
each extra library deliberately and record its licence.

## Acceptance criteria and verification

- The build finishes with no error; the canvas draws frames.
- No uncaught console error.
- Input works with keyboard and touch.
- Sprite count stays flat over a minute of play.
- Nothing scrolls sideways at 390 px wide.

## Known limitations

- No physics, no scene manager, no audio: all of that is additions.
- A custom renderer means more code to test than with a full engine.
