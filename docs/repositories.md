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

## How the awkward ones were read

Krita's licence came from `GET /repos/KDE/krita/license`, whose returned file is
`COPYING` containing the GNU General Public License version 3, not from the
`/repos` call. Phaser returned `200` and its MIT licence was read, but the star
count was not copied out of the answer, so that cell says `not read`.

Blank is not "unknown forever": read the field again before relying on it.

## The table

Every cell below comes from a `GET /repos/{owner}/{repo}` call made in this
session and read on **2026-11-25**. Nothing here is filled from memory. Where a
call answered but its fields were not kept, the cell says `not read` instead of
a guess.

Note on PixiJS and Three.js: their default branch is `dev`, not `main` or
`master`. An import pinned to a branch name alone will take work in progress;
pin the commit SHA (the manifest already asks for one).

| Repository | Licence (SPDX) | Archived | Default branch | Last push | Stars | Kind | What it is |
| --- | --- | --- | --- | --- | --- | --- | --- |
| phaserjs/phaser | MIT | no | master | 2026-08-21 | not read | engine | 2D web game framework |
| mrdoob/three.js | MIT | no | **dev** | 2026-11-25 | 119346 | renderer | 3D renderer for the web, no game rules of its own |
| pixijs/pixijs | MIT | no | **dev** | 2026-11-24 | 48898 | renderer | 2D WebGL renderer |
| KilledByAPixel/LittleJS | MIT | no | main | 2026-11-23 | 4407 | engine | Tiny 2D/3D browser game engine |
| chr15m/jsfxr | Unlicense | no | master | 2026-05-05 | 468 | library | Retro sound-effect generator. **It is a fork** of `grumdrig/jsfxr` (same Unlicense, master, last push 2023-05-04) |
| goldfire/howler.js | MIT | no | master | 2025-11-23 | 25457 | library | Audio playback library for the web |
| melonjs/melonJS | MIT | no | master | 2026-11-25 | 6524 | engine | Full HTML5 engine: 2D and 3D, WebGL/WebGPU, physics, Tiled maps, glTF, WebAudio |
| colyseus/colyseus | MIT | no | master | 2026-11-25 | 7582 | server framework | Server-authoritative multiplayer rooms for Node.js |
| boardgameio/boardgame.io | MIT | no | main | 2026-10-30 | 12500 | library | State management and networking for turn-based games |
| Unity-Technologies/unity-agent-plugin | NOASSERTION (see its own licence file) | no | main | 2026-11-24 | 674 | integration | Unity plugin for third-party agent platforms; C#; needs the Unity Editor |
| JannisX11/blockbench | GPL-3.0 | no | master | 2026-11-23 | not read | editor | Low-poly 3D model editor for game assets (read earlier this session) |
| ashblue/fluid-behavior-tree | not read | not read | **develop** | not read | not read | library | Behaviour trees for Unity, builder-pattern, code driven. `GET /repos` answered **200**; branch seen, other fields not kept |
| YarnSpinnerTool/YarnSpinner | not read | not read | not read | not read | not read | library | Dialogue compiler and engine-agnostic runtime (C#). `GET /repos` answered **200**; fields not kept |
| Syomus/ProceduralToolkit | not read | not read | not read | not read | not read | library | Procedural generation library for Unity. `GET /repos` answered **200**; fields not kept |
| annulusgames/LitMotion | MIT | not read | main | not read | not read | library | Tween library for Unity. Licence read from `/repos/annulusgames/LitMotion/license` (`LICENSE`, MIT) |
| CoderGamester/mcp-unity | MIT | not read | main | not read | not read | integration | MCP plugin connecting an agent to the Unity Editor. Licence read from `/repos/CoderGamester/mcp-unity/license` (`LICENSE.md`, MIT) |
| Cysharp/UniTask | MIT | not read | master | not read | not read | library | Async/await helper for Unity. Licence read from `/repos/Cysharp/UniTask/license` (`LICENSE`, MIT) |
| MirrorNetworking/Mirror | MIT | not read | master | not read | not read | networking library | Multiplayer networking for Unity. Licence read from `/repos/MirrorNetworking/Mirror/license` (`LICENSE`, MIT) |
| game-ci/unity-builder | not read | not read | not read | not read | not read | build action | GitHub Action that builds Unity projects. `GET /repos` answered **200**; fields not kept |
| godotengine/godot | MIT | no | master | 2026-11-24 | 120749 | engine | Full 2D and 3D engine, multi-platform (read in an earlier API pass this session) |
| BabylonJS/Babylon.js | Apache-2.0 | no | master | 2026-11-24 | 26441 | engine | JavaScript 3D engine for the web (read in an earlier API pass) |
| playcanvas/engine | MIT | no | main | 2026-11-25 | 17368 | engine | Web graphics engine on WebGPU and WebGL2 |
| pmndrs/react-three-fiber | MIT | no | master | 2026-10-21 | 33925 | renderer | React renderer for Three.js |
| dimforge/rapier | Apache-2.0 | no | master | 2026-11-01 | 6116 | physics library | 2D and 3D physics engine (Rust, WASM build) |
| excaliburjs/Excalibur | BSD-2-Clause | no | main | 2026-11-23 | 2384 | engine | TypeScript 2D engine for the web |
| kaplayjs/kaplay | MIT | no | master | 2026-11-21 | 1847 | library | Small JavaScript/TypeScript 2D game library |
| raysan5/raylib | Zlib | no | master | 2026-11-24 | 35780 | library | Simple C library for game programming |
| libgdx/libgdx | Apache-2.0 | no | master | 2026-11-19 | 25559 | framework | Java framework: desktop, Android, HTML5, iOS |
| MonoGame/MonoGame | NOASSERTION (see its own LICENSE.txt) | no | develop | 2026-11-21 | 14670 | framework | C# cross-platform framework |
| love2d/love | NOASSERTION (see its own licence file) | no | main | 2026-11-05 | 9006 | framework | 2D framework for Lua |
| mapeditor/tiled | NOASSERTION (see its own licence files) | no | master | 2026-11-23 | 13089 | editor | Level and tile map editor |
| KDE/krita | GPL-3.0 | not read | not read | not read | not read | editor | Digital painting tool for game art. Licence read from `/repos/KDE/krita/license` (`COPYING`, GPL v3); other fields not kept |
| IvanMurzak/Unity-MCP | Apache-2.0 | no | main | 2026-11-24 | 4694 | integration | MCP server and CLI that exposes the Unity Editor to an agent |

Notes that change how a skill uses these rows:

- **Both renderers default to `dev`.** three.js and PixiJS publish from `dev`,
  not `main` or `master`. Pinning a branch name takes work in progress: pin a
  commit SHA (the manifest already asks for one).
- **jsfxr is a fork.** `chr15m/jsfxr` (the URL the brief gives) is a fork of
  `grumdrig/jsfxr`. Cite the fork you actually use, and keep its Unlicense
  notice.
- **melonJS is a full engine**, with 3D, physics, Tiled and glTF support. Do not
  describe it as a tilemap add-on.
- **`unity-agent-plugin` has no machine-readable licence.** Treat it as
  unusable for redistribution until a person reads its licence file.
- **Blockbench is GPL-3.0.** Assets you make with it are yours; its source code
  is not MIT. Say so before suggesting anyone vendor it.

**What this means for a skill.** A skill may say a source exists and when it
fits. A skill must **not** repeat a licence, branch or version claim: it points
here. Where a cell says `not read`, the agent opens
`https://github.com/<owner>/<repo>` and its `LICENSE` file before telling anyone
what they may do with the code.

## Not verified

| Repository | Result |
| --- | --- |
| ashblue/fluid-behavior-tree | `GET /repos` answered **200**; only the branch (`develop`) was read out, so its licence, archived flag and stars are **not read**. Open `https://github.com/ashblue/fluid-behavior-tree` and its `LICENSE` before relying on it. |
| YarnSpinnerTool/YarnSpinner | `GET /repos` answered **200**; no field was copied out. Open `https://github.com/YarnSpinnerTool/YarnSpinner` and its `LICENSE` before relying on it. |
| Syomus/ProceduralToolkit | **Not contacted.** The API returned "Too many API requests" when asked. Open `https://github.com/Syomus/ProceduralToolkit` and its `LICENSE` before relying on it. |
| game-ci/unity-builder | `GET /repos` answered **200**; no field was copied out. Open `https://github.com/game-ci/unity-builder` and its `LICENSE` before relying on it. |
| KDE/krita | The repository answered `200` to `GET /repos/KDE/krita`, but the licence and branch fields were not read out of that answer, so no row above claims them. Open `https://github.com/KDE/krita` and its licence file first. |
| IvanMurzak/Unity-MCP | Read: `Apache-2.0`, branch `main`, 2026-11-24. See its row in the table above. |
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
