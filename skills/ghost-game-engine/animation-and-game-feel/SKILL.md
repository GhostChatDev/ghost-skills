# Skill: Animation and game feel

## Purpose

Make movement and feedback feel good: timing, easing, squash, screenshake,
particles and sound cues that all answer the player's input quickly.

## When to use it

- The game works but feels flat, stiff or unclear.
- Jumping, hitting, dying and picking up items need weight.
- Frame-by-frame or tweened animation is being added.

## When not to use it

- Nothing moves yet: build the loop first, then come back.
- The game is a turn-based board game where instant clarity beats juice.

## Required inputs and prerequisites

- A playable build with one clear input to improve.
- The frame timing: what happens on the frame of input, and on the frames after.
- Sprites or shapes to animate, and the animation frame count.

## Steps

1. Answer one question first: on the frame the player presses a key, what changes?
   Movement and a sound should start within one or two frames.
2. Fix the loop timing: everything driven by delta, clamped, so feel is the same
   on 30, 60 and 120 Hz screens.
3. Add anticipation and settle: a few frames before and after an action.
4. Add easing to anything that moves without physics (menus, camera, pickups).
   Use named curves, not magic numbers scattered in code.
5. Add feedback layers, one at a time, testing each: sprite squash or tilt, a
   particle burst, a short screen shake, a sound.
6. Keep shake, flashes and particles switchable off for accessibility.
7. Never block input: animation must not lock controls beyond the planned short
   window, and a queued input must not be swallowed.
8. Profile: particles and shake are cheap; hundreds of sprites and blur are not.
9. Record the tuning values in one file so they can be changed in one place.

## Upstream references

Engine docs for tweens, timers and particles (Phaser, Godot, PixiJS, Three.js).
For Unity, a tween library may be used; read its row in
`docs/repositories.md` before naming its licence.

## Compatibility and licence cautions

Tween and animation libraries carry their own licences. Use the engine's built-in
tweens first; a new dependency needs a stated reason.

## Acceptance criteria and verification

- The action responds on the input frame, checked by eye and by a timing log.
- Feel is the same at 30 and 60 frames per second.
- Each effect can be switched off.
- Frame time stays inside budget with effects on.

## Known limitations

- Feel is judgement: no test proves a jump feels right; a person must play it.
- Screen shake causes motion sickness for some players; it must be optional.
