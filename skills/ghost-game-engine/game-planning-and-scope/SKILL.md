# Skill: Game Planning and Scope

## Purpose

Turn a game idea into a buildable scope: one clear loop, a short list of
mechanics, an asset budget and a definition of done. Stop the agent from
building a game nobody can finish.

## When to use it

- The person asks for a game, a prototype or "something like X".
- The idea names more than one mode, genre or platform.
- Someone asks "can this be done?" or "how long will it take?".

## When not to use it

- The scope is already fixed and signed off: go straight to the engine skill.
- The task is a single bug fix inside a finished game.

## Required inputs and prerequisites

- The platform: browser, iOS, Android, desktop.
- The core loop in one sentence: what the player does again and again.
- The time budget the person has.
- Any fixed decision already made (engine, art style, online play).

If a field is missing, ask once, then assume the smallest option and say so.

## Steps

1. Write the one-build brief before any code: platform, the one screen, the one
   loop, up to three mechanics, the done check, the assets, what is left later.
2. One loop first. Cut everything that is not the loop, including menus, saves
   and online play, unless the loop needs them.
3. Three mechanics maximum in a first build. Name each one.
4. Write the done check as a test a person can run: "the game opens, the player
   moves with the arrow keys, the score goes up, the page does not scroll
   sideways on a phone".
5. List the assets before building: how many sprites, tiles, sounds, fonts. Say
   which are drawn in code and which come from a made picture.
6. Keep a "later" list. Nothing from it enters the first build.
7. If the idea cannot fit the time budget, say which feature you dropped and why.

## Upstream references

None. This skill is engine-neutral and cites no upstream project.

## Compatibility and licence cautions

No engine, no package and no dependency of its own. Licence values live in
`docs/ghost-game-engine/repositories.md`; never quote one from memory.

## Acceptance criteria and verification

Acceptance criteria, all checkable:

- The brief exists and names one loop and at most three mechanics.
- The done check lists at least three things a person can see happen.
- Every asset in the list has an owner: code-drawn or made with an image tool.
- The "later" list is written down, not in the agent's head.

Steps: read the brief back to the person in six lines, then start the engine
skill.

## Known limitations

- Scope set here is a first build, not a finished commercial game.
- Time estimates are rough; they assume an agent that can build and check.
- Online play, saves and settings screens are out of scope unless named.

## Source

Own rules. Nothing copied from an outside repository.

## Do not

- Do not promise a look, polish or replay value you cannot check.
- Do not add a second loop "to make it interesting".
- Do not start coding before the brief is written.
