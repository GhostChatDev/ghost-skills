# ghost-game-engine

A shared game-development skill library for Ghost Code agents.

These are **repository instructions**. They are not registered Ghost Chat Skills
and not globally loaded agent capabilities. An agent reads them only when this
repository, or a Project holding these files, is chosen for the session.

## Read this first

1. Read this index.
2. Load **only** the skills that match the task. Do not load all 20.
3. Inspect the target game repository before choosing an engine: its
   instructions, its code, its package files, its checks.
4. Follow the target repository's instructions. If they conflict with a skill
   here, say so and report the conflict. Do not silently override either one.

## The rules that apply to every skill

- One primary engine per game. Do not combine competing engines by default.
- A skill here is guidance. No dependency is installed because a skill names it.
  Never add a paid service or a dependency without saying why it is needed.
- Never invent a version, a benchmark, a licence or a capability. If a source
  was not read, mark it unverified.
- No upstream source code is vendored in this repository. If code is ever
  imported, keep its licence and notices.
- Check the licence of every asset and library before shipping.

## Engine-selection rules (short form)

- **Phaser**: a fuller 2D browser game (scenes, physics, input, tilemaps).
- **LittleJS**: a compact browser game in a few files.
- **three.js**: 3D rendering. It is a renderer, not a game engine; plan the game
  systems (collision, state, input, sound) explicitly.
- **PixiJS**: a fast 2D renderer for a game whose rules you write yourself. Not a
  full gameplay engine.
- **melonJS**: evaluate it as an alternative engine when it fits. Do not add it
  automatically.
- **jsfxr, Howler.js, a dialogue library, Colyseus, boardgame.io**: add only when
  the game needs them, each with a stated reason.
- **Unity and desktop art tools** (Blockbench, Krita, Unity MCP bridges, Unity
  build actions): a separate workflow with prerequisites a person must set up
  first. See the last skill in the list below.

## Index

Status is `ready`: the skill is written in full. Every skill below is `ready`.

| Skill | When to use it |
| --- | --- |
| [`game-planning-and-scope`](game-planning-and-scope/SKILL.md) | Before writing code for a new game: turn the idea into a one-build brief. |
| [`engine-selection`](engine-selection/SKILL.md) | When the engine is not decided yet, or the target repo already uses one. |
| [`phaser-2d`](phaser-2d/SKILL.md) | A fuller 2D browser game with scenes, sprites, arcade physics and input. |
| [`littlejs-small-games`](littlejs-small-games/SKILL.md) | A small browser game that should stay in a few files. |
| [`threejs-3d`](threejs-3d/SKILL.md) | A 3D browser game built on three.js. |
| [`pixijs-rendering`](pixijs-rendering/SKILL.md) | Custom 2D rendering where you write the game rules yourself. |
| [`tilemaps-and-level-design`](tilemaps-and-level-design/SKILL.md) | Tile-based levels, Tiled maps, level layout and pacing. |
| [`enemy-ai-and-behavior-trees`](enemy-ai-and-behavior-trees/SKILL.md) | Enemy behaviour that must be readable and testable. |
| [`dialogue-and-narrative`](dialogue-and-narrative/SKILL.md) | Branching dialogue and story that is data, not code in the game loop. |
| [`procedural-world-generation`](procedural-world-generation/SKILL.md) | Levels generated from a seed, and still playable. |
| [`animation-and-game-feel`](animation-and-game-feel/SKILL.md) | Making movement and feedback feel good: easing, hit pause, screenshake. |
| [`retro-sound-effects`](retro-sound-effects/SKILL.md) | Small retro sound effects that stay legal and light. |
| [`music-and-audio-playback`](music-and-audio-playback/SKILL.md) | Music and sound playback, including browser autoplay rules. |
| [`multiplayer-with-colyseus`](multiplayer-with-colyseus/SKILL.md) | A real-time multiplayer room with a server that owns the state. |
| [`turn-based-with-boardgameio`](turn-based-with-boardgameio/SKILL.md) | A turn-based board game with explicit moves and game state. |
| [`asset-pipeline-and-licensing`](asset-pipeline-and-licensing/SKILL.md) | Bringing art in at the right size, with the licence recorded. |
| [`web-game-testing`](web-game-testing/SKILL.md) | Proving the game builds, loads, reacts to controls and keeps saved data. |
| [`performance-and-accessibility`](performance-and-accessibility/SKILL.md) | Frame time inside budget, and a game usable without colour or sound. |
| [`release-and-documentation`](release-and-documentation/SKILL.md) | Shipping with a README, credits and no unchecked claims. |
| [`unity-and-desktop-tool-boundaries`](unity-and-desktop-tool-boundaries/SKILL.md) | Any Unity or desktop art-tool work: what an agent can do and what a person must do. |

## Files in this folder

| File | What it is |
| --- | --- |
| `manifest.json` | Every skill: id, path, description, tags, engines, requirements, references. |
| `<skill-name>/SKILL.md` | One skill, with the 9 required sections. |

Upstream sources, what was read and when, licence and archived state:
[`docs/repositories.md`](../../docs/repositories.md).
Adopting a skill in another repository:
[`docs/adoption.md`](../../docs/adoption.md).
What was verified and what was not:
[`docs/verification.md`](../../docs/verification.md).

The skill files also link to `docs/ghost-game-engine/...`. Those three files are
one-line redirects to the docs above, so no page holds a second copy.
