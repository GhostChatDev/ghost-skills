# Skill: Tone.js generated music and audio

## Purpose

Tone.js is a Web Audio framework for music in the browser. It gives you a
timekeeper (the Transport) that can be started, stopped, looped and re-tempoed
while it plays, plus ready-made synths, effects and sample players. Notes are
scheduled in musical time (`"4n"` a quarter note, `"8t"` an eighth-note triplet,
`"1m"` a measure) instead of raw seconds, so the music stays in time even when a
frame is slow.

Use it for a looping game soundtrack, menu music, rhythm-accurate cues, or any
sound that must repeat on a beat.

## When to use it

- Music or repeating rhythms generated in code (no audio files to license).
- Beat-locked gameplay: a cue that must land exactly on the next beat.
- Layered music that changes with game state (more layers as danger rises).
- Playing back your own samples with loops, pitch and effects.

## When not to use it

- One-off blips and hit sounds: `zzfx-sound-effects/SKILL.md` is far smaller.
- Simple file playback (one background track, a pause toggle): see
  `music-and-audio-playback/SKILL.md`; Tone.js is more machinery than that needs.
- The build must stay a few kilobytes. Tone.js is a full audio framework.
- Audio that must work with no user interaction: browsers forbid it.

## Setup and supported version

- **tone 15.1.22** (`latest` on npm when checked). Install
  `npm install tone`, then import `import * as Tone from "tone";` (official
  README). A bundler is expected; for a no-build page use a pinned CDN copy of
  the same version, never `latest`.
- Tone.js creates its `AudioContext` on load; `Tone.start()` resumes it.
- Nothing plays before `Tone.start()` resolves from inside a click/tap/key
  handler (official README: browsers will not play any audio before that).

## Steps

1. Decide the structure: one loop of N bars, how many instruments, which layers
   change.
2. Put the musical data in plain objects (chord names, note arrays, a pattern),
   not inside the scheduling callbacks. It stays readable and testable.
3. Create instruments once, at start: `new Tone.PolySynth(Tone.Synth)` for chords,
   `new Tone.MembraneSynth()` for a kick, routed through `Tone.Gain` into
   `.toDestination()`.
4. Build `Tone.Loop` callbacks on the Transport, one per part. Always schedule
   with the `time` argument the callback receives; JavaScript timers are not
   sample-accurate.
5. Start everything from one place after `await Tone.start()`, then
   `Tone.getTransport().start()`.
6. Route volume through your own `Tone.Gain` and a mute flag, and save the
   player's setting in `localStorage`.
7. Stop the music when the tab is hidden (`document.visibilitychange`): a
   suspended context saves battery, and a phone that keeps playing is a bug.
8. On leaving the game, `dispose()` the instruments and the gain nodes, and stop
   the loops, or a restart stacks a second band on top of the first.

## Code examples

A loop, a kick and a mute path:

```js
import * as Tone from "tone";

const master = new Tone.Gain(0.5).toDestination();  // one place for volume
const pad = new Tone.PolySynth(Tone.Synth).connect(master);
const kick = new Tone.MembraneSynth().connect(master);

const loops = [];
let started = false;

export async function startMusic() {
  if (started) return;                 // never start twice
  await Tone.start();                  // must be inside a user gesture

  loops.push(
    new Tone.Loop((time) => {
      pad.triggerAttackRelease(["C3", "E3", "G3"], "2n", time);
    }, "2m").start(0),
    new Tone.Loop((time) => {
      kick.triggerAttackRelease("C1", "8n", time);
    }, "4n").start(0)
  );

  const transport = Tone.getTransport();
  transport.bpm.value = 96;
  transport.start();
  started = true;
}

export function setVolume(level) {        // 0..1
  master.gain.rampTo(Math.max(0, Math.min(1, level)), 0.1);
}

export function stopMusic() {
  Tone.getTransport().stop();
  loops.forEach((loop) => loop.dispose());
  loops.length = 0;
  started = false;                        // lets startMusic run again cleanly
}

export function disposeMusic() {
  stopMusic();
  pad.dispose();
  kick.dispose();
  master.dispose();
}
```

Starting from a button, and pausing when the tab hides:

```js
document.querySelector("#play").addEventListener("click", async () => {
  await startMusic();                     // the gesture unlocks audio
  document.querySelector("#play").hidden = true;
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) Tone.getTransport().pause();
  else if (started) Tone.getTransport().start();
});
```

Layer change on game state (danger level), still on the beat:

```js
const dangerLayer = new Tone.Loop((time) => {
  pad.triggerAttackRelease(["B3", "D4"], "8n", time);
}, "2n");
// add it while the Transport is already running: it joins on the next bar
dangerLayer.start("+1m");
```

## Browser audio restrictions

- `Tone.start()` must be called from a real user gesture and awaited. Before it
  resolves, scheduled notes are silent or wrongly timed (the README says so
  plainly).
- On iOS the context can be interrupted by a call or a lock; handle
  `Tone.getContext().state` and offer a tap-to-resume.
- If the context is unavailable, the game must still run. Wrap music in
  `try/catch` and log once.

## Accessibility and reduced motion

- Ship a visible mute and a volume control; store both.
- Sound never carries gameplay information alone: mirror every cue visually.
- Offer "no music, effects only" as a separate setting, because a repeating loop
  is the first thing some players turn off.
- Music is not animation, so it is not covered by `prefers-reduced-motion`, but
  an animated title screen with music is: see `motion-ui/SKILL.md`.

## Mobile performance

- Every synth and effect is a live audio node. On a phone, cap the polyphony
  (`PolySynth({ maxPolyphony: 6 })`) instead of adding layers.
- Avoid long reverb impulse responses on low-end devices; prefer a short
  `Tone.FeedbackDelay`.
- Do not create instruments per note. Create once, dispose on exit.
- Pause the Transport when the tab is hidden and when the game is paused.

## Common mistakes and how to avoid them

- **Starting audio on page load**: blocked. Always start from a gesture.
- **Ignoring the `time` argument** and calling `triggerAttackRelease` without
  it: the notes drift and stutter. Pass `time`.
- **`Tone.Transport` used statically**: in current versions reach it with
  `Tone.getTransport()`.
- **Starting the Transport before the loops are created**: the first bar is
  empty. Create the loops, then start.
- **Never disposing** on restart: two Transports' worth of loops play at once and
  the CPU climbs. Stop and dispose, then rebuild.
- **`bpm` changed per frame**: ramp it (`bpm.rampTo(...)`) or the music tears.
- **Very different loudness** than the effects: set one `Tone.Gain` master and
  balance both through it.

## Verification checklist

- [ ] No audio before a gesture; after the first click the music plays.
- [ ] Music starts once, and Start/Restart never stacks a second band.
- [ ] Mute, volume and "music off" apply immediately and survive a refresh.
- [ ] Hiding the tab pauses; returning resumes (or stays paused, deliberately).
- [ ] Restarting the level leaves no leftover loop or instrument (CPU flat).
- [ ] The game runs with audio blocked, no uncaught error.
- [ ] Leaving the screen disposes every instrument it created.

## Upstream references

- Repository: <https://github.com/Tonejs/Tone.js>
- API docs: <https://tonejs.github.io/docs/>
- Examples: <https://tonejs.github.io/examples/>
- Time notation: <https://github.com/Tonejs/Tone.js/wiki/Time>
- npm: <https://www.npmjs.com/package/tone>

## Licence and attribution

MIT (the repository `LICENSE` file; the npm package metadata for `tone` also
reports MIT). Keep the copyright and permission notice with any copy of the
source you redistribute. Samples you load from elsewhere keep their own licences:
the Salamander piano and Berklee samples used in the official examples are
hosted for the examples, not offered as a free asset pack, so record a licence for
every sample you ship.

## Sources checked

2026-11-25: the official README at
<https://raw.githubusercontent.com/Tonejs/Tone.js/dev/README.md> (install, import,
`Tone.start()`, Transport, Loop, `getTransport`, `triggerAttackRelease`,
`Tone.loaded`, signals) and the npm registry document for `tone` (`latest`
15.1.22, MIT). Not verified: the versioned API page
<https://tonejs.github.io/docs/latest/classes/Transport.html> returned **404**
when fetched, so the Transport method list here comes from the README only.
