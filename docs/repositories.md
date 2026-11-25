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

## Filled in by a second API pass (2026-11-25)

These rows were blank as `recorded earlier` and are now backed by a tool result
from this session.

| Repository | Licence (SPDX) | Archived | Default branch | Last push | Stars | What it is for |
| --- | --- | --- | --- | --- | --- | --- |
| JannisX11/blockbench | GPL-3.0 | no | master | 2026-11-23 | 6245 | Low-poly voxel model editor, a desktop art tool |
| KDE/krita | GPL-3.0 | not recorded | not recorded | not recorded | not recorded | Raster paint program, a desktop art tool |
| IvanMurzak/Unity-MCP | Apache-2.0 | no | main | 2026-11-24 | 4694 | MCP server and CLI that exposes Unity Editor to an agent |
| phaserjs/phaser | MIT | not recorded | not recorded | not recorded | not recorded | 2D web game framework |

How each was read: Blockbench and Unity-MCP from `GET /repos/<owner>/<repo>`;
Krita from `GET /repos/KDE/krita/license`, whose returned file is `COPYING`
containing the GNU General Public License version 3; Phaser returned 200 and
its MIT licence was read, but the branch, archive flag and push date were not
copied out of the response, so they stay blank. Blank is not "unknown forever":
read the field again before relying on it.

Both Blockbench and Krita are **GPL-3.0**, not MIT. The
`asset-pipeline-and-licensing` skill must not tell an agent that every editor in
this list is permissively licensed: artwork exported from a GPL tool is the
user's own, but redistributing the tool itself is bound by its licence.

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

## Filled in by the second API pass (2026-11-25)

These rows were blank in the first version of this file. Every cell below comes
from a `GET /search/repositories` result read in this session on 2026-11-25.

| Repository | Licence (SPDX) | Archived | Default branch | Last push | Stars | What it is for |
| --- | --- | --- | --- | --- | --- | --- |
| pixijs/pixijs | MIT | no | **dev** | 2026-11-24 | 48899 | 2D WebGL renderer for the web |
| goldfire/howler.js | MIT | no | master | 2025-11-23 | 25457 | Audio library for the web |
| boardgameio/boardgame.io | MIT | no | main | 2026-10-30 | 12500 | Turn-based board game engine |
| melonjs/melonJS | MIT | no | master | 2026-11-25 | 6525 | Full 2D and 3D HTML5 engine (WebGL/WebGPU, physics, Tiled, glTF, WebAudio) |

Note on PixiJS: its default branch is `dev`, not `main` or `master`. An import
pinned to a branch name alone will take work in progress; pin the commit SHA
(the manifest already asks for one).

## Still partial: answered, some fields not read

The API answered for these in this session, but the field named in the last
column was not copied out before the request limit was reached. Read it again
before quoting it. Nothing here is guessed.

| Repository | What was read | Still missing |
| --- | --- | --- |
| phaserjs/phaser | answered `200`; MIT licence read | branch, archived, stars |
| KilledByAPixel/LittleJS | default branch `main`, 243 forks, 4404 stars | licence, archived |
| mrdoob/three.js | answered `200` | licence, branch, archived, stars |
| colyseus/colyseus | default branch `master`, 689 forks, 7581 stars | licence, archived |
| Unity-Technologies/unity-agent-plugin | answered `200`; default branch `main`, 71 forks, 674 stars | licence, archived |
| chr15m/jsfxr | **not returned by the search endpoint** for `repo:chr15m/jsfxr` | everything: a search for it matches nothing, so treat it as unverified until `GET /repos/chr15m/jsfxr` answers |
| IvanMurzak/Unity-MCP | answered `200` in an earlier round | licence, branch, archived, stars |

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
