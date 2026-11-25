# Ghost Game Engine — the game-development skill index

Entry point for every game task. Read this file, then open the `SKILL.md` of
**only** the skills that match the task. Do not load all 20.

This is a folder of reference instructions, not a skill itself. Each skill lives
in its own folder with a `SKILL.md` file. One canonical copy of each skill: this
library is the only place the rules are written. See `../../README.md` for what
the whole repository is.

## The 20 skills

| # | Skill | Open this | Use it for |
| --- | --- | --- | --- |
| 1 | Game planning and scope | [`game-planning-and-scope/SKILL.md`](game-planning-and-scope/SKILL.md) | Turning an idea into a one-build brief before any code |
| 2 | Engine selection | [`engine-selection/SKILL.md`](engine-selection/SKILL.md) | Choosing one primary engine for the game |
| 3 | Phaser 2D | [`phaser-2d/SKILL.md`](phaser-2d/SKILL.md) | Fuller 2D browser games |
| 4 | LittleJS small games | [`littlejs-small-games/SKILL.md`](littlejs-small-games/SKILL.md) | Compact, fast browser games |
| 5 | Three.js 3D | [`threejs-3d/SKILL.md`](threejs-3d/SKILL.md) | 3D rendering in the browser |
| 6 | PixiJS rendering | [`pixijs-rendering/SKILL.md`](pixijs-rendering/SKILL.md) | Custom 2D rendering, not full gameplay |
| 7 | Tilemaps and level design | [`tilemaps-and-level-design/SKILL.md`](tilemaps-and-level-design/SKILL.md) | Tile maps, Tiled export, level layout |
| 8 | Enemy AI and behaviour trees | [`enemy-ai-and-behavior-trees/SKILL.md`](enemy-ai-and-behavior-trees/SKILL.md) | Enemies that decide and act |
| 9 | Dialogue and narrative | [`dialogue-and-narrative/SKILL.md`](dialogue-and-narrative/SKILL.md) | Dialogue scripts and story runtime |
| 10 | Procedural world generation | [`procedural-world-generation/SKILL.md`](procedural-world-generation/SKILL.md) | Generated levels, seeds, repeatability |
| 11 | Animation and game feel | [`animation-and-game-feel/SKILL.md`](animation-and-game-feel/SKILL.md) | Movement that feels good: easing, shake, hit-stop |
| 12 | Retro sound effects | [`retro-sound-effects/SKILL.md`](retro-sound-effects/SKILL.md) | Short 8-bit style effects |
| 13 | Music and audio playback | [`music-and-audio-playback/SKILL.md`](music-and-audio-playback/SKILL.md) | Background music, mixing, browser audio rules |
| 14 | Multiplayer with Colyseus | [`multiplayer-with-colyseus/SKILL.md`](multiplayer-with-colyseus/SKILL.md) | Server-authoritative rooms |
| 15 | Turn-based with boardgame.io | [`turn-based-with-boardgameio/SKILL.md`](turn-based-with-boardgameio/SKILL.md) | Rules-driven turn-based play |
| 16 | Asset pipeline and licensing | [`asset-pipeline-and-licensing/SKILL.md`](asset-pipeline-and-licensing/SKILL.md) | Where art and sound come from, what you may ship |
| 17 | Web game testing | [`web-game-testing/SKILL.md`](web-game-testing/SKILL.md) | Proving the game works in a real browser |
| 18 | Performance and accessibility | [`performance-and-accessibility/SKILL.md`](performance-and-accessibility/SKILL.md) | Frame rate, memory, readable and reachable controls |
| 19 | Release and documentation | [`release-and-documentation/SKILL.md`](release-and-documentation/SKILL.md) | Publishing, README, controls, credits, licence |
| 20 | Unity and desktop tool boundaries | [`unity-and-desktop-tool-boundaries/SKILL.md`](unity-and-desktop-tool-boundaries/SKILL.md) | Unity packages and desktop art tools as separate workflows |

## Engine-selection rules in short

Full rules: [`engine-selection/SKILL.md`](engine-selection/SKILL.md).

- **One primary engine per game.** Do not combine competing engines by default.
- **Phaser** — candidate for fuller 2D games.
- **LittleJS** — candidate for compact browser games.
- **Three.js** — candidate for 3D rendering, with the game systems planned
  explicitly on top.
- **PixiJS** — candidate for custom 2D rendering; it is a renderer, not a full
  gameplay engine.
- **melonJS** — evaluate as an alternative engine, never an automatic
  dependency.
- **jsfxr, Howler, dialogue libraries, multiplayer** — add only when the game
  needs them.
- **Unity packages and desktop art tools** — separate workflows with explicit
  prerequisites.
- **Never add a paid service, dependency or external integration** without
  explaining why it is needed.

## Inspect the target repository before choosing

Before an engine is picked for a real project:

1. Read the target repository's own instructions (`AGENTS.md`, `README.md`).
2. Read its existing code and its checks.
3. Follow the target repository's instructions. If they conflict with a skill
   here, **report the conflict** instead of silently overriding one side.

## Upstream references

The verified catalogue of upstream repositories — licence, archived state,
default branch, last push — is [`../../docs/repositories.md`](../../docs/repositories.md).
Read the row for a source **before** naming its licence. The skills point there
and never repeat a licence claim of their own.

Related reading, from this folder:

- [`../../AGENTS.md`](../../AGENTS.md) — the repository rules every agent reads first
- [`../INDEX.md`](../INDEX.md) — every skill in the whole repository
- [`manifest.json`](manifest.json) — machine-readable list: id, path, tags, engines, references
- [`../../docs/adoption.md`](../../docs/adoption.md) — importing these skills into another repository
- [`../../docs/verification.md`](../../docs/verification.md) — what has and has not been checked

## These are repository instructions, not Ghost Chat Skills

Files in a repository are **not** automatically registered Ghost Chat Skills and
are **not** globally loaded agent capabilities. An agent sees them only when
this repository, or a Project holding these files, is chosen for the session.
The Skills toggle still allows only 5 skills on at a time.
