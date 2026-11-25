# Skill: Web game audio

Name: Web game audio

## When to use it

A browser game needs sound effects or music, made in code or loaded from a file.

## Rules

1. Nothing plays before the first tap, click or key press. Browsers block sound
   until then. Say it in the first screen ("tap to start").
2. One `AudioContext`, created after that first input, and resumed if it is
   suspended. Never make a new context per sound.
3. Short effects are generated or decoded once and kept. Reuse one buffer; do not
   re-download per shot.
4. Volume is a setting the person can change, saved in `localStorage`, with music
   and effects controlled separately.
5. Every sound has a mute path. A game that plays sound with no way to stop it is
   not done.
6. Say which library you used. `goldfire/howler.js` answered the API in this
   session; its licence and version are not recorded in `docs/repositories.md`
   yet, so check there first or use the plain Web Audio API.
7. A missing or broken sound file must not break the game: catch the error and
   carry on silently.

## Source

`goldfire/howler.js` and `chr15m/jsfxr` answered the GitHub API in this session.
Their licence, branch and version fields are not recorded in
`docs/repositories.md` yet: read them before you quote them.

## Do not

Do not copy a commercial game's music or sound effects. Generated effects are
yours; a borrowed track is not.
