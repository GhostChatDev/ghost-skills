# Upstream sources

What this file is: the repositories the game-development skills point at, with
what was actually read from the GitHub API on 2026-11-25.

**How to read the table.** A field is only filled in when a tool returned it.
`recorded earlier` means the repository answered 200 in an earlier round of this
session but its license, stars and branch were not copied into this file, so
they are left blank rather than guessed. Re-run the check for a source before
you rely on those fields.

Nothing is vendored here. No engine code, no package manager file, no engine
dependency belongs in this repository. The skills tell an agent *when* a source
fits and *which* licence applies; the agent installs it in the user's own
project.

## Verified in full this round

| Repository | Licence (SPDX) | Archived | Default branch | Last push | Stars | What it is for |
| --- | --- | --- | --- | --- | --- | --- |
| godotengine/godot | MIT | no | master | 2026-11-24 | 120749 | Full 2D and 3D engine, multi-platform |
| BabylonJS/Babylon.js | Apache-2.0 | no | master | 2026-11-24 | 26441 | JavaScript 3D engine for the web (WebGL/WebGPU) |
| playcanvas/engine | MIT | no | main | 2026-11-25 | 17368 | Web graphics engine on WebGPU and WebGL2 |
| pmndrs/react-three-fiber | MIT | no | master | 2026-10-21 | 33925 | React renderer for Three.js |
| dimforge/rapier | Apache-2.0 | no | master | 2026-11-01 | 6116 | 2D and 3D physics engine (Rust, WASM build) |
| excaliburjs/Excalibur | BSD-2-Clause | no | main | 2026-11-23 | 2384 | TypeScript 2D engine for the web |
| kaplayjs/kaplay | MIT | no | master | 2026-11-21 | 1847 | Small JavaScript/TypeScript 2D game library |
| raysan5/raylib | Zlib | no | master | 2026-11-24 | 35780 | Simple C library for game programming |
| libgdx/libgdx | Apache-2.0 | no | master | 2026-11-19 | 25559 | Java framework: desktop, Android, HTML5, iOS |
| MonoGame/MonoGame | NOASSERTION (see its own LICENSE.txt) | no | develop | 2026-11-21 | 14670 | C# cross-platform framework |
| love2d/love | NOASSERTION (see its own licence file) | no | main | 2026-11-05 | 9006 | 2D framework for Lua |
| mapeditor/tiled | NOASSERTION (see its own licence files) | no | master | 2026-11-23 | 13089 | Level and tile map editor |

## Reachable, fields not recorded in this file

These answered `200` from the GitHub API in an earlier round of this session.
Their licence, branch and star count were not copied here: read them again
before quoting them.

| Repository | What it is for |
| --- | --- |
| phaserjs/phaser | 2D game framework for the web |
| mrdoob/three.js | 3D library for the web |
| pixijs/pixijs | 2D WebGL renderer for the web |
| KilledByAPixel/LittleJS | Very small 2D engine, single file |
| chr15m/jsfxr | Sound effect generator |
| goldfire/howler.js | Audio library for the web |
| melonjs/melonJS | 2D engine for the web |
| colyseus/colyseus | Multiplayer server framework |
| boardgameio/boardgame.io | Turn-based board game engine |
| Unity-Technologies/unity-agent-plugin | Unity editor integration for agents |
| IvanMurzak/Unity-MCP | Unity MCP bridge |

## Not verified

| Repository | Result |
| --- | --- |
| jonnyreeves/yarn-bound | The API returned **404** in an earlier round of this session. No skill may claim this source exists. The dialogue-system skill must stand on its own rules until a working source is found. |

## Rules for anyone editing this file

1. Read the value from the API, or leave the cell blank. Never fill a cell from
   memory.
2. `NOASSERTION` means GitHub could not name the licence. Open the repository's
   own licence file before telling a user what they may do with the code.
3. Archived means do not suggest it for new work; say why it is still listed.
4. A 404 is a fact worth recording. It stays in "Not verified" until it answers.
5. This file is the only place a version number or a licence claim may be
   copied from. A skill file points here instead of repeating the claim.
