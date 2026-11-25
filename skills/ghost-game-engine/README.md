# ghost-game-engine — the skill index

Instruction library for game work. It is **not** a game, not an installed
engine, and not a package. Every entry is a written instruction file at
`skills/ghost-game-engine/<skill-name>/SKILL.md`.

## Read this first, then load only what matches

1. Read this index. If you are unsure how to pick from it, read
   [../HOW-TO-USE.md](../HOW-TO-USE.md) first: it explains how to find, read and
   apply only the skills that match the task.
2. Open **only** the `SKILL.md` files whose "when to use it" line matches the
   task in front of you. Do not load all 20.
3. Read the target game repository's own instructions (`AGENTS.md`, `README`,
   its checks) before choosing an engine. If they conflict with these skills,
   say so and follow the target repository; report the conflict.
4. Read `docs/repositories.md` before naming a licence or a version. A row that
   says `not read` means nobody has confirmed it yet: open the project's own
   `LICENSE` first and never guess.

These are repository instructions. They are **not** registered Ghost Chat
Skills and **not** globally loaded agent capabilities. An agent sees them only
when this repository (or a Project holding it) is chosen for the session.

## The 25 skills

| # | Skill | File | Use it when |
| --- | --- | --- | --- |
| 1 | Game planning and scope | [game-planning-and-scope/SKILL.md](game-planning-and-scope/SKILL.md) | starting any game: one screen, one loop, three mechanics, the done check |
| 2 | Engine selection | [engine-selection/SKILL.md](engine-selection/SKILL.md) | before writing code: pick one primary engine, and say why |
| 3 | Phaser 2D | [phaser-2d/SKILL.md](phaser-2d/SKILL.md) | a fuller 2D browser game with scenes, physics and input |
| 4 | LittleJS small games | [littlejs-small-games/SKILL.md](littlejs-small-games/SKILL.md) | one small idea, one file, fast to load |
| 5 | Three.js 3D | [threejs-3d/SKILL.md](threejs-3d/SKILL.md) | a 3D world; its game systems must be planned separately |
| 6 | PixiJS rendering | [pixijs-rendering/SKILL.md](pixijs-rendering/SKILL.md) | custom 2D rendering only; it is not a gameplay engine |
| 7 | Tilemaps and level design | [tilemaps-and-level-design/SKILL.md](tilemaps-and-level-design/SKILL.md) | laying out levels, tilesets, collision layers |
| 8 | Enemy AI and behaviour trees | [enemy-ai-and-behavior-trees/SKILL.md](enemy-ai-and-behavior-trees/SKILL.md) | enemies that decide, not just walk |
| 9 | Dialogue and narrative | [dialogue-and-narrative/SKILL.md](dialogue-and-narrative/SKILL.md) | branching dialogue, quests, text the player chooses |
| 10 | Procedural world generation | [procedural-world-generation/SKILL.md](procedural-world-generation/SKILL.md) | worlds or levels built from a seed |
| 11 | Animation and game feel | [animation-and-game-feel/SKILL.md](animation-and-game-feel/SKILL.md) | tweening, juice, hit stop, screenshake |
| 12 | Retro sound effects | [retro-sound-effects/SKILL.md](retro-sound-effects/SKILL.md) | generated beeps, blips and chiptune sounds |
| 13 | Music and audio playback | [music-and-audio-playback/SKILL.md](music-and-audio-playback/SKILL.md) | music, mixing, unlock-on-tap, volume |
| 14 | Multiplayer with Colyseus | [multiplayer-with-colyseus/SKILL.md](multiplayer-with-colyseus/SKILL.md) | real online play; needs a server you run |
| 15 | Turn-based with boardgame.io | [turn-based-with-boardgameio/SKILL.md](turn-based-with-boardgameio/SKILL.md) | turns, moves, hidden state, a rules object |
| 16 | Asset pipeline and licensing | [asset-pipeline-and-licensing/SKILL.md](asset-pipeline-and-licensing/SKILL.md) | bringing in art, sound or code from anywhere else |
| 17 | Web game testing | [web-game-testing/SKILL.md](web-game-testing/SKILL.md) | before saying a browser game works |
| 18 | Performance and accessibility | [performance-and-accessibility/SKILL.md](performance-and-accessibility/SKILL.md) | frame budget, draw calls, keyboard and touch, contrast |
| 19 | Release and documentation | [release-and-documentation/SKILL.md](release-and-documentation/SKILL.md) | a build someone else can run and read |
| 20 | Unity and desktop tool boundaries | [unity-and-desktop-tool-boundaries/SKILL.md](unity-and-desktop-tool-boundaries/SKILL.md) | Unity, Godot, art tools and build machines: what an agent can and cannot do |
| 21 | ZzFX sound effects | [zzfx-sound-effects/SKILL.md](zzfx-sound-effects/SKILL.md) | sound effects generated in code from one array: presets, mute, volume |
| 22 | Tone.js music | [tonejs-music/SKILL.md](tonejs-music/SKILL.md) | generated music, loops, transport timing, synths — no audio files |
| 23 | Motion interface animation | [motion-ui/SKILL.md](motion-ui/SKILL.md) | menus, screens and HUD motion in a React/Vue app, with reduced motion |
| 24 | Anime.js timelines and titles | [animejs-motion/SKILL.md](animejs-motion/SKILL.md) | title screens, staggered entrances, SVG line drawing, sequenced intros |
| 25 | tsParticles backgrounds and confetti | [tsparticles/SKILL.md](tsparticles/SKILL.md) | ambient particles, snow or embers, a confetti burst on a win |

The machine-readable list is [manifest.json](manifest.json): stable id, path,
description, tags, engines, required environment, external references.

## Engine-selection rules

- Choose **one primary engine per game.** Do not stack two game engines.
- Phaser: a fuller 2D browser game.
- LittleJS: a compact browser game, small and fast.
- Three.js: 3D rendering; you plan its game systems yourself.
- PixiJS: custom 2D rendering, not a full gameplay engine.
- melonJS: an alternative engine to evaluate, not a default dependency.
- Add jsfxr, Howler, a dialogue library or a multiplayer library only when the
  game needs it, and say why.
- Audio: **ZzFX** for single generated sound effects, **Howler** for playing
  files (music, voice) with reliable mobile behaviour, **Tone.js** for music
  played from code with a transport. Pick per job; they can coexist, but say
  why each is there.
- Interface and title motion: **Motion** in a React/Vue app, **Anime.js** for a
  plain page or an SVG title sequence. Do not add both to one page for the same
  job, and do not animate in-game sprites with either — the game loop owns those.
- Party, ambient and celebration effects: **tsParticles** for non-gameplay
  particles; particles that must collide or be counted belong in the game loop.
- Every one of them needs a reduced-motion path and a cleanup path. A skill that
  animates or plays sound without both is not applied.
- Unity packages and desktop art tools are separate workflows with their own
  prerequisites. An agent cannot drive a desktop application's UI; it can write
  files and project settings, and the human runs the editor.
- Never add a paid service or external dependency without saying why.

## Adoption elsewhere

See `docs/adoption.md`. Short version: pick the skills you need, pin this
repository at a commit SHA, copy those folders into the target repository,
record the source, the SHA, the paths and the notices in the target's own
`AGENTS.md`, and never replace that file. A link alone gives no access.
