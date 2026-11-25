# Skill: Retro sound effects

## Purpose

Make short, characterful sound effects for a game without a recording studio:
generate them, keep them small, play them without stutter.

## When to use it

- A game needs jump, hit, coin and menu sounds.
- The style is retro, chiptune or arcade.
- There is no sound designer available.

## When not to use it

- The game needs a licensed soundtrack: music-and-audio-playback skill.
- The game is silent by design.

## Required inputs and prerequisites

- The list of events that need a sound, and how often each fires.
- The style: square, saw, noise, bit depth, pitch range.
- A licence check on every generated or downloaded sound.

## Steps

1. List the events first, with how often each can fire per second.
2. Generate the sounds with a small tool (jsfxr-style generators are the common
   choice; read the row for `chr15m/jsfxr` in
   `docs/ghost-game-engine/repositories.md` before naming its licence).
3. Keep files small and short: effects under about a quarter of a second, in a
   format every browser plays.
4. Normalise loudness across effects so one does not blast the mix.
5. Preload before play, and unlock audio on the first click or tap (browsers
   require it).
6. Limit voices: the same effect fired many times per frame plays once, with a
   small random pitch to avoid machine-gun sameness.
7. Give every sound a volume control, and the game a mute that survives a
   refresh.
8. Record the source of each sound in the repository, with its licence.

## Upstream references

`chr15m/jsfxr` and the generator it is built on. Licence and verification state:
`docs/ghost-game-engine/repositories.md`.

## Compatibility and licence cautions

Generated sounds are yours, but the generator's licence still applies to the
code you use. Downloaded sound packs almost always need attribution: keep the
notice and the link in the repository.

## Acceptance criteria and verification

- Every listed event has a sound, and it plays on the event.
- No stutter when the sound first plays.
- Mute and volume work and survive a refresh.
- Total audio size is stated and reasonable for the platform.

## Known limitations

- Generated effects sound retro: they will not fit a realistic game.
- Browsers need a user gesture before any sound plays.
