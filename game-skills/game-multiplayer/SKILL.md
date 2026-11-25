# Skill: Multiplayer

Name: Multiplayer

## When to use it

Two or more people play together: real time (same level, live positions) or
turn-based (a board game, chess, cards).

## Rules

1. Decide first: real time or turn-based. They are different designs and the
   answer changes the architecture. Say which you built.
2. The server is the truth. The client sends input, the server decides the result,
   and the client shows it. Never trust a client for a score, a hit or a turn.
3. **Real time:** a dedicated server with a fixed tick rate, and the client
   interpolates between the last two server states. Read the Rapier skill if the
   game needs physics, and step physics on the server only.
4. **Turn-based:** one authoritative state document and an accepted-move rule.
   Every move is validated on the server before it is stored.
5. One person's private state is never sent to another player. Send each client
   only what it may see; hide hands, secret roles and the enemy's position.
6. A dropped connection is normal: reconnect and resync, and say on screen that it
   is reconnecting.
7. Say where the server runs and who pays for it. A game with no server choice
   named is not multiplayer yet.

## Source

`colyseus/colyseus` (real-time rooms) and `boardgameio/boardgame.io` (turn-based)
answered the GitHub API in this session. Their licence, branch and version fields
are not recorded in `docs/repositories.md` yet: read them before you quote them.

## Do not

Do not build multiplayer out of a shared document the clients write to freely.
That lets one player rewrite another player's game.
