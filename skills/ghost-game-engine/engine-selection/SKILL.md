# Skill: Engine Selection

## Purpose

Choose the smallest engine that fits the game and the person's machine, after
looking at the target repository as it really is.

## When to use it

- A game is requested and no engine is chosen yet.
- Someone asks "which engine should I use?" or "what about Unity?".
- The existing project has no engine files and one must be added.

## When not to use it

- The repository already uses an engine: follow that one, do not re-platform.
- The task is a bug fix, a level or an asset: the engine is already decided.

## Required inputs and prerequisites

- The target: a browser page, an iOS or Android app, or a desktop program.
- The 2D or 3D answer, and the camera (side view, top down, first person).
- Whether the person will open an editor, or only wants a build.
- What the target repository already contains.

## Steps

1. Inspect the target repository before choosing. Look for `package.json`, an
   existing engine folder, `ProjectSettings/` (Unity), `project.godot`,
   `*.csproj` (MonoGame), `conf.lua` (LÖVE), `index.html` with a canvas, and any
   `AGENTS.md`, `README.md` or `CONTRIBUTING.md` at the top.
2. Follow the target repository's own instructions before these skills. If they
   disagree with a skill here, follow the repository and report the conflict in
   one line in your answer.
3. Never replace a working engine to match this library.
4. Match engine to platform, not to fashion: browser 2D with scenes -> Phaser;
   tiny browser game or one file -> LittleJS; browser 3D -> Three.js; large
   native 3D with an editor -> Godot or Unity; C desktop -> raylib; Lua 2D ->
   LÖVE; one Java codebase for desktop and Android -> libGDX; C# -> MonoGame.
5. Name the version you install and where it came from. Read the licence from
   `docs/repositories.md`; if the row has no value, say it was
   not recorded and check the repository's own licence file.
6. Say why the runner-up lost in one line.
7. These are not auto-registered Ghost Chat Skills. They are files an agent
   reads from this repository or from a Project. The Skills toggle is not
   involved and still allows only 5 skills on at a time.

## Upstream references

Every engine named above is listed with its source URL in
`docs/repositories.md`. Citation list:
phaserjs/phaser, mrdoob/three.js, pixijs/pixijs, KilledByAPixel/LittleJS,
melonjs/melonJS, godotengine/godot, Unity-Technologies/unity-agent-plugin,
raysan5/raylib, libgdx/libgdx, MonoGame/MonoGame, love2d/love,
excaliburjs/Excalibur, kaplayjs/kaplay. Read the row before repeating a fact.

## Compatibility and licence cautions

Each engine's licence and default branch: `docs/repositories.md`.
A licence is a fact from that file, never from memory. A copyleft licence
(GPL) in an engine affects what the person may do with their build: say so
plainly and let them decide.

## Acceptance criteria and verification

Acceptance criteria:

- The chosen engine appears in the decision with its version and source.
- The target repository was read: the answer quotes at least one real file from
  it (for example `package.json` or `README.md`).
- If a repository instruction conflicts with a skill, the conflict is stated.

Steps: list the files you read, name the engine, name the runner-up, then hand
over to that engine's skill.

## Known limitations

- Engine versions move; a version written here can age.
- The decision covers one first build, not a studio pipeline.
- Console platforms are out of reach and are never promised.

## Source

Own rules. Engine facts: `docs/repositories.md`.

## Do not

- Do not choose an engine without reading the target repository.
- Do not install two engines in one project.
- Do not quote a licence or a version you did not read.
