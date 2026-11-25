# Skill: Turn-based with boardgame.io

## Purpose

Build a turn-based game with rules that run the same on client and server, and
with moves that are validated rather than trusted.

## When to use it

- The game is turn-based: cards, boards, drafting, puzzles, tactics.
- Rules must be testable without a UI.
- Two players on two machines need a shared, trustworthy game state.

## When not to use it

- The game is real time: Colyseus skill.
- It is a solo game with no turns: a plain state machine in the engine is enough.

## Required inputs and prerequisites

- The rules, written as steps a player takes.
- The state shape and the win condition.
- Whether play is local, online, or both (the library's multiplayer transport may
  be hosted or your own).
- Read the row for `boardgameio/boardgame.io` in
  `docs/ghost-game-engine/repositories.md` before naming its licence; it is
  listed as reachable with fields not yet recorded.

## Steps

1. Write the rules as a list of moves with preconditions.
2. Define the state in one plain object; no hidden state in the UI.
3. Implement each move as a pure function that checks its own preconditions and
   refuses an illegal move.
4. Define the turn order and the end condition explicitly.
5. Test the rules with unit tests: legal move changes state, illegal move does
   not, win condition fires.
6. Build the UI on top of the state only; the UI never mutates state directly.
7. Add online play only after local play works, and check the transport's
   requirements.
8. Handle a dropped connection mid-turn and a reload: the state must be
   recoverable.

## Upstream references

`boardgameio/boardgame.io`. Licence and verification state:
`docs/ghost-game-engine/repositories.md`.

## Compatibility and licence cautions

Online play needs a server or a hosted transport, which is a running cost. Check
the library's licence and any hosting terms before you promise online play.

## Acceptance criteria and verification

- Rules have unit tests that pass without a browser.
- An illegal move is refused and the state is unchanged.
- Local play works end to end, including the win condition.
- Online play recovers from a reload or a dropped connection.

## Known limitations

- The library handles turns, not art, animation or matchmaking quality.
- Online play still needs somewhere to run the server.
