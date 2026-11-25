# Skills index

Read this file first. Then open `skills/ghost-game-engine/README.md`, which is
the index of the 20 game skills, and load **only** the ones that match the task.
If several match, follow all of them.

Every skill lives in `skills/ghost-game-engine/<folder>/SKILL.md`.

| Skill name | Folder | When to use it | Status |
| --- | --- | --- | --- |
| Game Planning and Scope | `game-planning-and-scope/` | Before any game work: define the one loop, the scope and what is left for later. | ready |
| Engine Selection | `engine-selection/` | Choosing one primary engine, or deciding whether a library is even needed. | ready |
| Phaser 2D | `phaser-2d/` | A fuller 2D browser game with scenes, physics and sprites. | ready |
| LittleJS Small Games | `littlejs-small-games/` | A compact, single-file browser game with tiny download size. | ready |
| Three.js 3D | `threejs-3d/` | 3D rendering; game systems still have to be planned and written. | ready |
| PixiJS Rendering | `pixijs-rendering/` | Custom 2D rendering; it is a renderer, not a gameplay engine. | ready |
| Tilemaps and Level Design | `tilemaps-and-level-design/` | Building levels, tilesets and collision layers. | ready |
| Enemy AI and Behavior Trees | `enemy-ai-and-behavior-trees/` | Enemy or NPC behaviour that needs more than a few `if` lines. | ready |
| Dialogue and Narrative | `dialogue-and-narrative/` | Branching dialogue, quest text or narrative scripting. | ready |
| Procedural World Generation | `procedural-world-generation/` | Generated levels, rooms, terrain or loot. | ready |
| Animation and Game Feel | `animation-and-game-feel/` | Making movement, hits and feedback feel right. | ready |
| Retro Sound Effects | `retro-sound-effects/` | Generating small chiptune-style sound effects. | ready |
| Music and Audio Playback | `music-and-audio-playback/` | Playing music and mixing sound in the browser. | ready |
| Multiplayer with Colyseus | `multiplayer-with-colyseus/` | Real-time multiplayer with an authoritative server. | ready |
| Turn-Based with boardgame.io | `turn-based-with-boardgameio/` | Turn-based games with defined moves and phases. | ready |
| Asset Pipeline and Licensing | `asset-pipeline-and-licensing/` | Importing art, fonts or audio, and checking each licence. | ready |
| Web Game Testing | `web-game-testing/` | Pressing every button, checking errors and proving the game runs. | ready |
| Performance and Accessibility | `performance-and-accessibility/` | Frame budget, load size, input alternatives and readable UI. | ready |
| Release and Documentation | `release-and-documentation/` | Writing the README, controls, credits and store facts. | ready |
| Unity and Desktop Tool Boundaries | `unity-and-desktop-tool-boundaries/` | Unity, desktop editors and build actions: what needs what environment. | ready |

`ready` means the rules are written in full. To add a skill, add a folder with a
`SKILL.md`, add its row here and to `skills/ghost-game-engine/manifest.json`, and
set the status to `ready`. Do not invent rules for a skill that has no text.
