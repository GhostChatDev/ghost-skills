# Skill: Music and audio playback

## Purpose

Play music and manage a mix: looping tracks, fades, volume channels, and the
browser rules that stop audio until the player interacts.

## When to use it

- The game has background music, ambient loops or several audio channels.
- Sound must duck, fade or cross-fade between scenes.
- Audio is added with a library such as Howler, or the engine's own system.

## When not to use it

- Only short effects are needed: retro sound effects skill.
- The game is silent by design.

## Required inputs and prerequisites

- The music files and their licences (music is almost always licensed, and often
  needs attribution in the game).
- The channels: music, effects, voice, and the target volumes.
- The target platforms, because mobile browsers unload audio aggressively.

## Steps

1. Pick the playback path: the engine's own audio system first; a library only
   if the engine's is missing something you can name.
2. Read the row for `goldfire/howler.js` in
   `docs/repositories.md` before naming its licence; the same
   for the engine's audio module.
3. Unlock audio on the first user gesture, and show that sound is on.
4. Load music before the scene that needs it, with a real loading state.
5. Keep one music track running across scenes; cross-fade instead of restarting.
6. Build a mixer: separate volume for music and effects, saved in localStorage,
   plus a mute that survives a refresh and pauses music when the tab is hidden.
7. Handle failure: if a file cannot load, play without it and say so in the
   console. Never block the game on audio.
8. Keep file sizes reasonable and use a compressed format the target browsers
   play.
9. Record every track's source, licence and required attribution in the
   repository.

## Upstream references

`goldfire/howler.js` for the library path; engine docs for built-in audio.
Licence and verification state: `docs/repositories.md`.

## Compatibility and licence cautions

Music licensing is separate from code licensing. Do not ship a track whose
licence you have not read, and keep attribution text in the game or the credits
as the licence requires.

## Acceptance criteria and verification

- Music starts after the first gesture and not before.
- Volume and mute work, and survive a refresh.
- Changing scene does not restart or double the music.
- A missing audio file does not crash or freeze the game.

## Known limitations

- Mobile browsers pause or unload audio in the background; state must be
  re-checked on return.
- Gapless looping is unreliable across browsers; short loops may click.
