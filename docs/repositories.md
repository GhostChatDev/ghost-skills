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

## Every source the skills name, and what was actually read

A blank cell means the tool did not return that field to me, so it stays blank.
`earlier read this session` means the value came from a GitHub API call made
earlier in this same session. Nothing below is filled from memory.

| Repository | Licence (SPDX) | Default branch | Last push | Stars | What it is | How it was read |
| --- | --- | --- | --- | --- | --- | --- |
| phaserjs/phaser | MIT | master | 2026-08-21 | not read | 2D web game framework | earlier read this session |
| mrdoob/three.js | not read | dev | not read | not read | 3D renderer for the web, no game rules of its own | earlier read this session |
| KilledByAPixel/LittleJS | not read | main | not read | 4404 | Tiny 2D browser game engine | earlier read this session |
| colyseus/colyseus | not read | master | not read | 7581 | Server-authoritative multiplayer rooms | earlier read this session |
| Unity-Technologies/unity-agent-plugin | not read | main | not read | 674 | Integration that lets an agent drive the Unity Editor | earlier read this session |
| chr15m/jsfxr | not read | not read | not read | not read | Retro sound-effect generator | the search endpoint matched nothing for it |
These six sources were **never contacted** in this session, so they have no row
above and nothing is claimed about them. They are listed in "Not verified"
below, with the URL to open. No skill may state a licence, branch or version
for them.

**What this means for a skill.** A skill may say a source exists and when it
fits. A skill must **not** repeat a licence, branch or version claim: it points
here. Where a cell says `not read`, the agent opens
`https://github.com/<owner>/<repo>` and its `LICENSE` file before telling anyone
what they may do with the code.

## Not verified

| Repository | Result |
| --- | --- |
| ashblue/fluid-behavior-tree | **Not contacted.** Open `https://github.com/ashblue/fluid-behavior-tree` and its `LICENSE` before relying on it. |
| YarnSpinnerTool/YarnSpinner | **Not contacted.** Open `https://github.com/YarnSpinnerTool/YarnSpinner` and its `LICENSE` before relying on it. |
| Syomus/ProceduralToolkit | **Not contacted.** Open `https://github.com/Syomus/ProceduralToolkit` and its `LICENSE` before relying on it. |
| annulusgames/LitMotion | **Not contacted.** Open `https://github.com/annulusgames/LitMotion` and its `LICENSE` before relying on it. |
| CoderGamester/mcp-unity | **Not contacted.** Open `https://github.com/CoderGamester/mcp-unity` and its `LICENSE` before relying on it. |
| game-ci/unity-builder | **Not contacted.** Open `https://github.com/game-ci/unity-builder` and its `LICENSE` before relying on it. |
| chr15m/jsfxr | The `/search/repositories` endpoint matched nothing for it. Not a claim that it does not exist: open `https://github.com/chr15m/jsfxr` directly. |
| jonnyreeves/yarn-bound | The API returned **404** earlier in this session. No skill may claim this source exists or is the dialogue library to use. The dialogue skill stands on its own rules and names Yarn Spinner instead, whose licence is **not read** here. |

## Rules for anyone editing this file

1. Read the value from the API, or leave the cell blank. Never fill a cell from
   memory.
2. `NOASSERTION` means GitHub could not name the licence. Open the repository's
   own licence file before telling a user what they may do with the code.
3. Archived means do not suggest it for new work; say why it is still listed.
4. A 404 is a fact worth recording. It stays in "Not verified" until it answers.
5. This file is the only place a version number or a licence claim may be
   copied from. A skill file points here instead of repeating the claim.
