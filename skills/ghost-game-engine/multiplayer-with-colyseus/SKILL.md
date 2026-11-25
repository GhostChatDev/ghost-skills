# Skill: Multiplayer with Colyseus

## Purpose

Add real-time multiplayer with a server that owns the true game state and rooms
that players join.

## When to use it

- Two or more players share one live world or match.
- State must stay consistent between players.
- The project can run a Node server next to the web client.

## When not to use it

- The game is single player.
- Turn-based play between two people with no live state: the turn-based skill is
  simpler and cheaper.
- The game must be a static site with no server: multiplayer needs a server.

## Required inputs and prerequisites

- A server to host the room (Node 22 and npm locally; a host that runs Node in
  production).
- The authority decision: the server decides, clients only send intents.
- The state shape and the message list.
- Read the row for `colyseus/colyseus` in
  `docs/ghost-game-engine/repositories.md` before naming its licence; it is
  listed as reachable with fields not yet recorded.

## Steps

1. Write the state schema first: what every player sees, and what is private.
2. Write the message list: input intents up, state patches down. No client-side
   authority over position, score or health.
3. Create one room type, join and leave handled, with a player id per client.
4. Run the server loop at a fixed tick, and send input with timestamps so the
   client can interpolate.
5. Interpolate on the client; never snap remote players on every patch.
6. Handle network loss: reconnect, or end the match cleanly and tell the player.
7. Validate every message on the server. A client must not be able to send a
   score.
8. Test with two clients: one creates, one joins, both see the same state, and a
   disconnect is handled.
9. Load-test the planned player count before shipping.

## Upstream references

`colyseus/colyseus`. Licence and verification state:
`docs/ghost-game-engine/repositories.md`. Use its own docs for the schema and
room API of the pinned version.

## Compatibility and licence cautions

Colyseus is a server framework with its own licence and hosting needs. A server
is a running cost: say so before adding it. Never trust a client message, and
never put secrets in the client.

## Acceptance criteria and verification

- Two browser clients join one room and see each other.
- The server rejects an illegal message with no crash.
- A disconnect is handled without freezing the other player.
- The room survives the planned player count in a load test.

## Known limitations

- Needs a server and a deployment step; it cannot run on a static host.
- Latency cannot be removed, only hidden with prediction and interpolation.
