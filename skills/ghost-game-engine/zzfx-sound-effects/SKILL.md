# Skill: ZzFX generated sound effects

## Purpose

Make game sound effects out of one line of numbers: no audio files, no
downloads, no licence hunting for a recording. ZzFX is a tiny synth: give it a
list of parameters (pitch, duration, waveform, envelope) and it synthesises the
sound in the browser's Web Audio API the moment it plays.

Because the "asset" is a line of code, the whole sound set of a small game can be
under a kilobyte, which is why ZzFX and its music companion (ZzFXM) are popular
in size-limited game jams.

## When to use it

- Jump, coin, hit, explosion, power-up, menu blips in a small or retro game.
- The download size matters (a jam, a 13 kB game, a slow mobile connection).
- The game needs placeholder sounds today and real ones later.
- You want the sound under version control as text, with no binary files.

## When not to use it

- The game needs music: `music-and-audio-playback/SKILL.md` for playback, and
  ZzFXM only if the music must also be code-generated.
- The sound must be recorded (voice, real instruments, ambience): use a real
  audio file and record its licence.
- The game needs precise mixing, ducking, reverb buses or scheduled loops:
  Tone.js (`tonejs-music/SKILL.md`) fits better.
- The person wants huge, layered cinematic effects: this is a small synth.

## Setup and supported version

- **ZzFX 1.4.0** is the `latest` npm distribution tag when checked (see *Sources
  checked*). The README's micro build states `v1.4.0` as well.
- Two ways to use it, both from the official README:
  - `npm install zzfx`, then `import { ZZFX, zzfx } from 'zzfx'`.
  - Or copy `ZzFXMicro.min.js` into the project as one file. Keep the licence
    header/notice with it (MIT, see below).
- No build tool is required. It works in any browser with Web Audio.
- It needs a user gesture before sound is allowed (the browser rule; see
  *Browser audio restrictions*).

## The parameter list

ZzFX takes about 20 positional parameters. Order matters more than names, so
keep an array with a comment per line in your own code:

| # | Parameter | What it does | Typical |
| --- | --- | --- | --- |
| 1 | volume | overall loudness (0–1) | 0.5 |
| 2 | randomness | random variation per play (0–1) | 0.05 |
| 3 | frequency | starting pitch in Hz | 220–900 |
| 4 | attack | seconds to rise to full volume | 0–0.02 |
| 5 | sustain | seconds holding before decay | 0–0.3 |
| 6 | release | seconds to fade out | 0.05–0.3 |
| 7 | shape | waveform: 0 sine, 1 triangle, 2 sawtooth, 3 square, 4 tan, 5 noise | 1–5 |
| 8 | shapeCurve | shape curvature | 1 |
| 9 | slide | pitch slide (negative falls) | −5 to 5 |
| 10 | deltaSlide | change of slide over time | small |
| 11 | pitchJump | pitch jump amount | small |
| 12 | pitchJumpTime | when the jump happens | seconds |
| 13 | repeatTime | retrigger time; negative repeats forever | 0 |
| 14 | noise | noise mixed in (0–1) | 0–0.5 |
| 15 | modulation | vibrato/tremolo depth | 0–1 |
| 16 | bitCrush | sample reduction (0–1) | 0–0.2 |
| 17 | delay | start delay in seconds | 0 |
| 18 | sustainVolume | volume during sustain | 0.5–1 |
| 19 | decay | extra decay | 0–0.5 |
| 20 | tremolo | tremolo depth | 0–0.5 |

If a number is left out it takes its default; that is why the official examples
look like `zzfx(...[,,925,.04,.3,.6,1,.3,,6.27,-184,.09,.17])`. Read the numbers
against the table above rather than guessing, and use the official ZzFX sound
designer (<https://killedbyapixel.github.io/ZzFX>) to hear a change before you
write it down.

## Steps

1. List the events first: what needs a sound and how often it can fire per
   second.
2. Design each sound in the official web designer, name it, and copy the
   parameter line into one `sounds.js` file as a named constant.
3. Play through the module's `zzfx(...)` (or the exported `ZZFX.play`-style
   surface; read the import line in the README for the exact named exports of the
   version you installed).
4. Set the global volume (`zzfxV` in the micro build) once, and store the
   player's choice in `localStorage`.
5. Unlock audio on the first click or tap: create the `AudioContext` then and
   resume it, or the first sounds are silently dropped.
6. Before the first gesture, queue the request: show "tap to start" and play the
   menu sound after the tap, never on page load.
7. Throttle: an event that fires 60 times a second must play once per N
   milliseconds. Keep a timestamp per sound name.
8. Vary pitch slightly (`randomness`) so repeated hits do not sound mechanical;
   keep the variation small so the sound still fits.
9. Give every sound a mute toggle plus a separate volume, and make both survive a
   refresh.
10. Offer a "reduced sound" state too: some players mute a game permanently.

## Code examples

A sound table and a safe player, no framework:

```js
// sounds.js — one place for every effect, values copied from the ZzFX designer
export const SOUNDS = {
  jump:  [0.4, 0.02, 480, 0.01, 0.06, 0.1, 1, 1, 6],
  coin:  [0.5, 0, 800, 0.01, 0.05, 0.1, 3, 1, 3, 0.2],
  hit:   [0.6, 0.1, 140, 0.01, 0.1, 0.2, 5, 1, -4, 0.1, 0, 0, 0, 0.6],
  over:  [0.5, 0.05, 300, 0.02, 0.1, 0.4, 2, 1, -6, 0.4]
};
```

```js
// audio.js — volume, mute, unlock and throttle in one small module
import { zzfx, ZZFX } from "zzfx";     // npm install zzfx — ZZFX carries the shared context
import { SOUNDS } from "./sounds.js";

const SETTINGS_KEY = "game.audio.v1";
const state = { muted: false, volume: 0.6 };
try {
  Object.assign(state, JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}"));
} catch { /* first run or bad data: keep the defaults */ }

const lastPlayed = new Map();          // name -> performance.now()
const MIN_GAP_MS = 40;                 // throttle per sound

export function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state));
}

export function isMuted() { return state.muted; }
export function setMuted(muted) { state.muted = muted; saveSettings(); }
export function setVolume(volume) {
  state.volume = Math.min(1, Math.max(0, volume)); saveSettings();
}

export function play(name) {
  if (state.muted || !state.volume) return;
  const params = SOUNDS[name];
  if (!params) return;                 // unknown name is a no-op, never a throw
  const now = performance.now();
  if (now - (lastPlayed.get(name) || 0) < MIN_GAP_MS) return;
  lastPlayed.set(name, now);
  const scaled = params.slice();
  scaled[0] = (params[0] ?? 0.5) * state.volume;   // parameter 1 is volume
  zzfx(...scaled);
}

// Call this from the first real pointer or key event.
// Resume the context ZzFX ALREADY plays through (ZZFX.audioContext), never a
// new AudioContext: a new one is a different context, so ZzFX's own context
// stays suspended and every sound is silent. Calling this repeatedly is cheap
// and safe; creating contexts repeatedly is not (browsers refuse past ~6).
export function unlockAudio() {
  const ctx = ZZFX.audioContext;       // the shared one, created by ZzFX at import
  if (ctx && ctx.state !== "running") {
    ctx.resume().catch(() => { /* blocked: the next gesture tries again */ });
  }
}
```

The imported module must therefore also bring in `ZZFX`, which is where that
shared context lives (`export const ZZFX = { audioContext: new AudioContext, ... }`
in `zzfx@1.4.0`). Change the top of `audio.js` to:

```js
import { zzfx, ZZFX } from "zzfx";
```

ZzFX makes its context once, at import (`ZZFX.audioContext`). Never build your
own for it: resume that one. On Safari and iOS the context starts `suspended`
until a gesture, and it can be suspended again when the tab is hidden — call
`unlockAudio()` from a `visibilitychange` handler as well as the first press.
If `ctx` is missing (an older or different build), fall back to playing the
sound only — never throw.

Mute button markup, accessible and at least 44 px:

```html
<button id="mute" type="button" aria-pressed="false" aria-label="Mute sound">
  Sound on
</button>
<script type="module">
  import { isMuted, setMuted } from "./audio.js";
  const btn = document.getElementById("mute");
  const draw = () => {
    btn.textContent = isMuted() ? "Sound off" : "Sound on";
    btn.setAttribute("aria-pressed", String(isMuted()));
  };
  btn.addEventListener("click", () => { setMuted(!isMuted()); draw(); });
  draw();
</script>
```

## Browser audio restrictions

- Browsers block audio until a user gesture. Any sound fired before a click, tap
  or key press is dropped or plays later at the wrong moment.
- Safari on iOS also needs the gesture to *create or resume* the context, and may
  suspend it when the phone locks or the app goes to the background.
- Handle the failure path: if `AudioContext` is missing or blocked, the game must
  keep running silently. Never throw from a sound call, and never await audio
  before the first frame.

## Accessibility

- Always ship a visible mute control and a volume setting. Do not rely on the
  device volume alone.
- Do not encode gameplay information in sound only: pair each cue with a visual
  change.
- Respect a documented "silent" preference saved in `localStorage`.
- Keep effects short and avoid repeated tones at the same pitch; sudden loud
  sounds can startle or hurt.

## Common mistakes and how to avoid them

- **A parameter typo** silently produces a squeak or silence. Design in the
  official tool, paste the array, and listen to every sound once.
- **No throttle**: a collision sound 30 times a frame sounds like noise and costs
  CPU. Gap it.
- **Creating a new `AudioContext` per play**: browsers limit the number of
  contexts (often around 6) and then refuse. Create one.
- **Playing on page load**: blocked, and the player thinks audio is broken.
- **Volume set at 1** for everything: clipping. Keep the global at ~0.3–0.6 and
  balance per sound.
- **Burying the numbers in game code**: they can never be tuned again. Keep them
  in one table.
- **Relying on ZzFX for music**: it is an effects synth; looping compositions are
  a different job.

## Verification checklist

- [ ] Every event on the list has a named sound and plays on that event.
- [ ] Nothing plays before the first gesture, and it plays after the gesture.
- [ ] Mute and volume change the sound immediately and survive a refresh.
- [ ] A burst of the same event does not stack into noise (throttle works).
- [ ] A missing or unknown sound name does not throw.
- [ ] The page runs fine with audio blocked (no uncaught error).
- [ ] The mute control is reachable by keyboard and has an accessible name.
- [ ] The honour of the source: the MIT notice for ZzFX is in the repository.

## Upstream references

- Repository: <https://github.com/KilledByAPixel/ZzFX>
- Sound designer (make and hear sounds): <https://killedbyapixel.github.io/ZzFX>
- Music companion ZzFXM: <https://keithclark.github.io/ZzFXM/>
- npm: <https://www.npmjs.com/package/zzfx>

## Licence and attribution

The repository's `LICENSE` file was read at
<https://raw.githubusercontent.com/KilledByAPixel/ZzFX/master/LICENSE> and is
the **MIT License, Copyright (c) 2019 Frank Force**. Keep that notice in your
repository when you copy `ZzFXMicro.min.js` or vendor the source, and do not
remove the version comment at the top of the micro build.

Mismatch worth knowing, stated rather than hidden: the npm metadata for earlier
published versions (`1.1.2`, read from the registry document) listed `license:
"ISC"`, while the repository's `LICENSE` file is MIT. The LICENSE file is the
authoritative document; if you redistribute through npm, keep the MIT notice and
mention the discrepancy in your credits rather than assuming ISC.

The sounds you design with the designer are your own parameter lists; the
generator's MIT terms still cover the code you ship.

## Sources checked

2026-11-25: `GET https://raw.githubusercontent.com/KilledByAPixel/ZzFX/master/LICENSE`
(MIT), `GET https://registry.npmjs.org/zzfx` (`latest` 1.4.0), the repository
README (parameter count, import lines, example sounds, `v1.4.0` micro build), and
`GET /repos/KilledByAPixel/ZzFX` for licence and archived state. Not verified:
the exact per-parameter defaults and ranges beyond what the README and published
micro code show, and behaviour of the npm module's named exports in the browser
(only the README import line and the micro build were read).
