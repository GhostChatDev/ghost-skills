# PROJECT-BUNDLE: Ghost Skills

One file to upload to a Ghost Chat Project. Once it is there, every chat and every
Ghost Code session inside that Project can read it.

It carries everything an agent needs on its own: the rules, the index, all 25 skills
in full, and the upstream licence table the game skills point at. Nothing else has
to be uploaded, and no file path outside this one is needed.

How to use it:

1. Open the Project in Ghost Chat (sidebar, then Projects).
2. Add this one file to the Project files.
3. Paste section 1 into the Project instructions.
4. Paste section 2 into the Project instructions, under it.
5. Start a chat or a Ghost Code session inside the Project.

This file is a copy. The source of truth is `skills/` and `docs/` in the repository.
If the two disagree, the repository wins and this file is rebuilt from it.

Contents: the rules, an index of 25 skills, the 25 skills in full (5 writing, 20 game),
and the upstream source rows.

## 1. Rules to paste into the Project instructions

```text
This Project shares a skill library, carried by PROJECT-BUNDLE.md in this Project.
Before you answer or write any code:
1. Read the index in section 3 of PROJECT-BUNDLE.md. It lists every skill with its
   folder and when to use it.
2. Read the full text of the skills that match the task. Reading is not applying:
   apply the ones that match, and say which ones you used.
3. Follow every skill that matches. If I name a skill, follow that one first, then
   the others that match. Never drop a skill to be shorter.
4. Licence questions: read section 5 of PROJECT-BUNDLE.md. A blank cell means it was
   not read, so say that; never state a licence from memory.
5. Never invent a skill. If a skill is missing, say so and ask me for its real text.
```

## 2. Instruction block

```text
# PROJECT-INSTRUCTIONS.md

Paste everything below the line into your Ghost Chat Project's instructions.

---

This Project shares a skill library. Before you answer or write any code:

1. Read `skills/INDEX.md` first. Then read the full `SKILL.md` of **every**
   skill listed in this Project — all of them, before you answer or write code.
   Reading is not the same as applying: apply only the ones that match the task.
2. Follow every skill that matches the task. If I name a skill, follow that one
   first, then the others that match.
3. If several skills match, follow all of them. Do not ignore a skill to be
   shorter.
4. Never invent a missing skill. A file that only says "MISSING" has no rules
   yet. Tell me which skill is missing and ask me for its text.

The skills live in the `skills/` folder. `skills/INDEX.md` lists them, with the
folder and when to use each one.
```

## 3. Index: every skill, its folder, when to use it, status

| Skill name | Folder | When to use it | Status |
| --- | --- | --- | --- |
| Explain Like I'm New | `skills/explain-like-im-new/` | The user is new, a term needs plain words, or they ask how do I. | ready |
| Social Media | `skills/social-media/` | Writing posts for X, Instagram, LinkedIn, Reddit or TikTok. | ready |
| Planner | `skills/planner/` | Turning a goal into steps, a checklist or a schedule. | ready |
| Marketing Copy | `skills/marketing-copy/` | Ads, landing pages, emails or promo copy that sells without hype. | ready |
| Clear Writer | `skills/clear-writer/` | Rewriting or editing text so it is clear, short and friendly. | ready |
| Animation and game feel | `skills/ghost-game-engine/animation-and-game-feel/` | Tweening, easing, squash and stretch, screen shake, hit pause. | ready |
| Asset pipeline and licensing | `skills/ghost-game-engine/asset-pipeline-and-licensing/` | Before adding an image, font, sound or model: its source and its licence. | ready |
| Dialogue and narrative | `skills/ghost-game-engine/dialogue-and-narrative/` | Dialogue lines, branching conversations, Yarn files or story text. | ready |
| Enemy AI and behavior trees | `skills/ghost-game-engine/enemy-ai-and-behavior-trees/` | Enemies that chase, patrol, flee or act in phases, and the trees behind them. | ready |
| Engine Selection | `skills/ghost-game-engine/engine-selection/` | A game is requested and no engine is chosen, or someone asks which engine to use. | ready |
| Game Planning and Scope | `skills/ghost-game-engine/game-planning-and-scope/` | A game is asked for; scope, milestones or a cut list must be decided before code. | ready |
| LittleJS Small Games | `skills/ghost-game-engine/littlejs-small-games/` | A small, compact browser game that must load fast and stay tiny. | ready |
| Multiplayer with Colyseus | `skills/ghost-game-engine/multiplayer-with-colyseus/` | Two or more players in one session, with rooms and server state. | ready |
| Music and audio playback | `skills/ghost-game-engine/music-and-audio-playback/` | Background music, volume, muting and looping sound in a browser game. | ready |
| Performance and accessibility | `skills/ghost-game-engine/performance-and-accessibility/` | The game stutters, loads slowly, or must work with a keyboard and a screen reader. | ready |
| Phaser 2D | `skills/ghost-game-engine/phaser-2d/` | A fuller 2D browser game with scenes, physics and an asset loader. | ready |
| PixiJS rendering | `skills/ghost-game-engine/pixijs-rendering/` | Custom 2D drawing where rendering is the point and no full engine is wanted. | ready |
| Procedural world generation | `skills/ghost-game-engine/procedural-world-generation/` | Worlds, levels or rooms made by code from a seed. | ready |
| Release and documentation | `skills/ghost-game-engine/release-and-documentation/` | Shipping: README, controls, credits, build steps and a licence note. | ready |
| Retro sound effects | `skills/ghost-game-engine/retro-sound-effects/` | Short chiptune-style effects: jump, hit, pickup, explosion. | ready |
| Three.js 3D | `skills/ghost-game-engine/threejs-3d/` | 3D in the browser: a world, a camera, lighting or 3D models. | ready |
| Tilemaps and level design | `skills/ghost-game-engine/tilemaps-and-level-design/` | Levels on a grid: tiles, Tiled maps, collision layers, spawn points. | ready |
| Turn-based with boardgame.io | `skills/ghost-game-engine/turn-based-with-boardgameio/` | Turn-based or card games with moves, turns and validated state. | ready |
| Unity and desktop tool boundaries | `skills/ghost-game-engine/unity-and-desktop-tool-boundaries/` | Unity, desktop editors or MCP bridges are mentioned and the limits must be explained. | ready |
| Web game testing | `skills/ghost-game-engine/web-game-testing/` | Before calling a browser game done: what to play, click and check. | ready |

Every row says `ready`: the rules are written in full. This library has no empty
placeholder skills.

## 4. The skills, in full

### Skill 1: Explain Like I'm New

Repository file: `skills/explain-like-im-new/SKILL.md`

# Skill: Explain Like I'm New

Name: Explain Like I'm New

The user is new. Explain in plain words with no jargon (or explain any term you
must use). Go step by step, say exactly where to click or type, and show small
examples. End with one short practice idea.

### Skill 2: Social Media

Repository file: `skills/social-media/SKILL.md`

# Skill: Social Media

Name: Social Media

Write social posts that feel human. Hook in the first line, one idea per post,
short lines, a question or call to action at the end. Match the platform's style
and length limits. Suggest hashtags only where they help. Give 3 options.

### Skill 3: Planner

Repository file: `skills/planner/SKILL.md`

# Skill: Planner

Name: Planner

Turn goals into plans. Break the goal into steps with time estimates, order them,
and put them in a checklist or a simple schedule table. Flag deadlines and
dependencies. Keep it realistic; suggest what to drop if it doesn't fit.

### Skill 4: Marketing Copy

Repository file: `skills/marketing-copy/SKILL.md`

# Skill: Marketing Copy

Name: Marketing Copy

Write marketing that sells without hype. Lead with the reader's problem and the
outcome they get. Give headlines, short body copy and a clear call to action.
Adapt length and tone to the channel (X, Instagram, LinkedIn, Reddit, email,
landing page). Offer 3 variations to test.

### Skill 5: Clear Writer

Repository file: `skills/clear-writer/SKILL.md`

# Skill: Clear Writer

Name: Clear Writer

Rewrite and edit text to be clear, short and friendly. Keep the user's meaning
and voice. Use short sentences and simple words. Show the improved version
first, then list the main changes in a few bullets.

### Skill 6: Animation and game feel

Repository file: `skills/ghost-game-engine/animation-and-game-feel/SKILL.md`

# Skill: Animation and game feel

## Purpose

Make movement and feedback feel good: timing, easing, squash, screenshake,
particles and sound cues that all answer the player's input quickly.

## When to use it

- The game works but feels flat, stiff or unclear.
- Jumping, hitting, dying and picking up items need weight.
- Frame-by-frame or tweened animation is being added.

## When not to use it

- Nothing moves yet: build the loop first, then come back.
- The game is a turn-based board game where instant clarity beats juice.

## Required inputs and prerequisites

- A playable build with one clear input to improve.
- The frame timing: what happens on the frame of input, and on the frames after.
- Sprites or shapes to animate, and the animation frame count.

## Steps

1. Answer one question first: on the frame the player presses a key, what changes?
   Movement and a sound should start within one or two frames.
2. Fix the loop timing: everything driven by delta, clamped, so feel is the same
   on 30, 60 and 120 Hz screens.
3. Add anticipation and settle: a few frames before and after an action.
4. Add easing to anything that moves without physics (menus, camera, pickups).
   Use named curves, not magic numbers scattered in code.
5. Add feedback layers, one at a time, testing each: sprite squash or tilt, a
   particle burst, a short screen shake, a sound.
6. Keep shake, flashes and particles switchable off for accessibility.
7. Never block input: animation must not lock controls beyond the planned short
   window, and a queued input must not be swallowed.
8. Profile: particles and shake are cheap; hundreds of sprites and blur are not.
9. Record the tuning values in one file so they can be changed in one place.

## Upstream references

Engine docs for tweens, timers and particles (Phaser, Godot, PixiJS, Three.js).
For Unity, a tween library may be used; read its row in
`docs/ghost-game-engine/repositories.md` before naming its licence.

## Compatibility and licence cautions

Tween and animation libraries carry their own licences. Use the engine's built-in
tweens first; a new dependency needs a stated reason.

## Acceptance criteria and verification

- The action responds on the input frame, checked by eye and by a timing log.
- Feel is the same at 30 and 60 frames per second.
- Each effect can be switched off.
- Frame time stays inside budget with effects on.

## Known limitations

- Feel is judgement: no test proves a jump feels right; a person must play it.
- Screen shake causes motion sickness for some players; it must be optional.

### Skill 7: Asset pipeline and licensing

Repository file: `skills/ghost-game-engine/asset-pipeline-and-licensing/SKILL.md`

# Skill: Asset pipeline and licensing

## Purpose

Bring art, audio and fonts into the project with a repeatable path, and keep a
record of where each file came from and what its licence allows.

## When to use it

- Any time an asset is added, replaced or generated.
- Before a release or a store build.
- When someone asks whether a file may be shipped.

## When not to use it

- Nothing but code is in the repository.

## Required inputs and prerequisites

- The source of the asset: made in the task, bought, found, or generated.
- The licence text or terms page, read, not remembered.
- The target formats and sizes for the engines in use.

## Steps

1. Create `CREDITS.md` (or extend it) with one row per asset: file, what it is,
   source URL, author, licence, attribution required yes or no.
2. Read the licence before the file lands in the repository. If it is unclear,
   do not use it and say why.
3. Keep originals and only add the processed files the game loads.
4. Name files by role, in lower case, with the size when it matters
   (`hero-walk-64.png`).
5. Keep assets small: scale to the size the game draws, compress, and state the
   total size.
6. Record the tools used to make or convert assets, and their versions, so the
   process can be repeated.
7. Separate engine code licensing from asset licensing in the report; they are
   different and both matter.
8. Before release, walk `CREDITS.md` against the shipped files: no uncredited
   file, no missing notice.

## Upstream references

Art and modelling tools are separate programs with their own licences. Blockbench
and Krita each have a row in `docs/repositories.md`; both record **GPL-3.0**, so
never repeat a claim that is not in that row.

## Compatibility and licence cautions

A permissive engine licence does not license its logo, its example art, or
anything you download separately. Fonts need their own licence check. Never
assume a file is MIT or free for commercial use.

## Acceptance criteria and verification

- Every asset in the build appears in `CREDITS.md` with a source and a licence.
- No asset in the build is missing from `CREDITS.md`, checked by listing files and
  comparing.
- Attribution text the licences require appears in the game where it must.
- Total asset size is stated.

## Known limitations

- Licence reading is judgement; an ambiguous licence is a stop, not a guess.
- Generated art may still carry the generator's terms.

### Skill 8: Dialogue and narrative

Repository file: `skills/ghost-game-engine/dialogue-and-narrative/SKILL.md`

# Skill: Dialogue and narrative

## Purpose

Put dialogue, choices and story text into a game in a way that stays editable by
a writer and testable by an agent.

## When to use it

- Characters talk, choices branch, or the story matters.
- A writer needs to edit dialogue without touching code.
- Text must be localised later.

## When not to use it

- One screen of flavour text: write it in the code and move on.
- The game has no characters or story.

## Required inputs and prerequisites

- A script format choice. Yarn Spinner is the common one for Unity and other
  engines; a small JSON file of nodes is enough for a short game.
- The rules: who speaks, what variables the story reads (flags, items).
- Font and text size decided, and that the text fits the screen.
- `jonnyreeves/yarn-bound` returned **404** in this session (see
  `docs/repositories.md`): do not cite it. Read the Yarn Spinner row in the same
  file before naming its licence; the row exists, but its licence cell is blank,
  so read the repository first.

## Steps

1. Keep the script in its own files, one file per scene or chapter.
2. Name every node and every choice id. Never rename a node without updating the
   code that jumps to it.
3. Keep the script free of engine calls: the runtime reports "line shown", "choice
   picked", "node done" and the game reacts.
4. Store story variables in one place, with defaults, so a save can hold them.
5. Build the UI once: speaker name, text, choices, a next hint, a typewriter speed
   setting that can be turned off.
6. Test every node: a script that walks all paths and fails on a missing node or
   an unreachable one.
7. Handle text length: long lines wrap, the box scrolls or pages.
8. Make the text skippable and the speed adjustable for accessibility.
9. Localisation-ready: no text built by gluing words together in code.

## Upstream references

`YarnSpinnerTool/YarnSpinner` for Unity and its Unity integration; the runtime is
also usable from other engines. Licence and verification state:
`docs/repositories.md`.

## Compatibility and licence cautions

A dialogue runtime is a dependency with its own licence and version. Check the
licence before shipping, and do not copy its source into the repository.

## Acceptance criteria and verification

- Every node in every script resolves; the walk-every-path test passes.
- Choices change the variables they claim to change.
- The text box never overflows or covers gameplay controls.
- Story state survives a save and load.

## Known limitations

- Dialogue runtimes do not gate the game for you; the game must read the flags.
- Localisation needs a column-based export from the start, which is easy to skip.

### Skill 9: Enemy AI and behavior trees

Repository file: `skills/ghost-game-engine/enemy-ai-and-behavior-trees/SKILL.md`

# Skill: Enemy AI and behavior trees

## Purpose

Give enemies behaviour that is readable, testable and cheap to run: states for
simple cases, a behavior tree when behaviour branches.

## When to use it

- Enemies do more than move in a straight line.
- Behaviour must change with distance, health, line of sight or time.
- Several enemy types share most of their logic.

## When not to use it

- One enemy that always walks forward: a state or two in code is enough.
- The problem is pathfinding on a grid: solve that first, separately.

## Required inputs and prerequisites

- The list of enemy types and what each must do.
- The senses the AI may use (distance, line of sight, sound, damage taken).
- The frame budget for AI, and how many enemies exist at once.

## Steps

1. Write the behaviour in plain sentences first, one per enemy type.
2. Start with a small state machine: idle, patrol, chase, attack, dead. Use states
   until branching really hurts.
3. Move to a behavior tree when conditions nest: sequence, selector, condition,
   action nodes, each small and named.
4. Keep the AI out of the render code: one update per enemy per frame, driven by
   the same delta as everything else.
5. Use a blackboard (one shared object) for facts the tree reads, so nodes stay
   pure functions of that object.
6. Cache expensive senses: line of sight and pathfinding run on a timer, not every
   frame for every enemy.
7. Cap the work: neighbours, sight checks and path requests per frame.
8. Make behaviour observable: log the current state or node in a debug flag, off
   by default.
9. Test the decisions with plain unit tests on the tree or machine, with no
   renderer.

## Upstream references

Unity projects may use a behavior-tree package; read its row in
`docs/ghost-game-engine/repositories.md` before naming a licence. In JavaScript,
a small tree written by hand is usually less work than a dependency. Behaviour
tree articles from the engine's own docs are the reference.

## Compatibility and licence cautions

A behavior-tree library brings its own licence and update risk. Write the tree by
hand when the behaviour is small; adding a package needs a stated reason.

## Acceptance criteria and verification

- Each enemy type behaves as written in step 1, checked by playing.
- Decision logic has unit tests that run without a renderer.
- Frame time does not climb as enemy count grows to the planned maximum.
- No enemy keeps running expensive senses while off screen or dead.

## Known limitations

- Behavior trees do not solve pathfinding; they call it.
- Debug views cost time to build; without one, odd behaviour is hard to explain.

### Skill 10: Engine Selection

Repository file: `skills/ghost-game-engine/engine-selection/SKILL.md`

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
   `docs/ghost-game-engine/repositories.md`; if the row has no value, say it was
   not recorded and check the repository's own licence file.
6. Say why the runner-up lost in one line.
7. These are not auto-registered Ghost Chat Skills. They are files an agent
   reads from this repository or from a Project. The Skills toggle is not
   involved and still allows only 5 skills on at a time.

## Upstream references

Every engine named above is listed with its source URL in
`docs/ghost-game-engine/repositories.md`. Citation list:
phaserjs/phaser, mrdoob/three.js, pixijs/pixijs, KilledByAPixel/LittleJS,
melonjs/melonJS, godotengine/godot, Unity-Technologies/unity-agent-plugin,
raysan5/raylib, libgdx/libgdx, MonoGame/MonoGame, love2d/love,
excaliburjs/Excalibur, kaplayjs/kaplay. Read the row before repeating a fact.

## Compatibility and licence cautions

Each engine's licence and default branch: `docs/ghost-game-engine/repositories.md`.
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

Own rules. Engine facts: `docs/ghost-game-engine/repositories.md`.

## Do not

- Do not choose an engine without reading the target repository.
- Do not install two engines in one project.
- Do not quote a licence or a version you did not read.

### Skill 11: Game Planning and Scope

Repository file: `skills/ghost-game-engine/game-planning-and-scope/SKILL.md`

# Skill: Game Planning and Scope

## Purpose

Turn a game idea into a buildable scope: one clear loop, a short list of
mechanics, an asset budget and a definition of done. Stop the agent from
building a game nobody can finish.

## When to use it

- The person asks for a game, a prototype or "something like X".
- The idea names more than one mode, genre or platform.
- Someone asks "can this be done?" or "how long will it take?".

## When not to use it

- The scope is already fixed and signed off: go straight to the engine skill.
- The task is a single bug fix inside a finished game.

## Required inputs and prerequisites

- The platform: browser, iOS, Android, desktop.
- The core loop in one sentence: what the player does again and again.
- The time budget the person has.
- Any fixed decision already made (engine, art style, online play).

If a field is missing, ask once, then assume the smallest option and say so.

## Steps

1. Write the one-build brief before any code: platform, the one screen, the one
   loop, up to three mechanics, the done check, the assets, what is left later.
2. One loop first. Cut everything that is not the loop, including menus, saves
   and online play, unless the loop needs them.
3. Three mechanics maximum in a first build. Name each one.
4. Write the done check as a test a person can run: "the game opens, the player
   moves with the arrow keys, the score goes up, the page does not scroll
   sideways on a phone".
5. List the assets before building: how many sprites, tiles, sounds, fonts. Say
   which are drawn in code and which come from a made picture.
6. Keep a "later" list. Nothing from it enters the first build.
7. If the idea cannot fit the time budget, say which feature you dropped and why.

## Upstream references

None. This skill is engine-neutral and cites no upstream project.

## Compatibility and licence cautions

No engine, no package and no dependency of its own. Licence values live in
`docs/ghost-game-engine/repositories.md`; never quote one from memory.

## Acceptance criteria and verification

Acceptance criteria, all checkable:

- The brief exists and names one loop and at most three mechanics.
- The done check lists at least three things a person can see happen.
- Every asset in the list has an owner: code-drawn or made with an image tool.
- The "later" list is written down, not in the agent's head.

Steps: read the brief back to the person in six lines, then start the engine
skill.

## Known limitations

- Scope set here is a first build, not a finished commercial game.
- Time estimates are rough; they assume an agent that can build and check.
- Online play, saves and settings screens are out of scope unless named.

## Source

Own rules. Nothing copied from an outside repository.

## Do not

- Do not promise a look, polish or replay value you cannot check.
- Do not add a second loop "to make it interesting".
- Do not start coding before the brief is written.

### Skill 12: LittleJS Small Games

Repository file: `skills/ghost-game-engine/littlejs-small-games/SKILL.md`

# Skill: LittleJS Small Games

## Purpose

Ship a tiny browser game fast: one page, one script, no build step, a few
hundred lines that run anywhere.

## When to use it

- A jam-size game, a prototype or one mechanic in one screen.
- The person wants a single HTML file and no npm install.
- Very small download size matters.

## When not to use it

- Levels, scenes and a long campaign: Phaser.
- 3D with lighting and models: Three.js.
- An engine with an editor is wanted: Godot or Unity.

## Required inputs and prerequisites

- The one mechanic and the win or lose condition.
- The source of the engine file you load, with its version, and the engine's
  licence read from its own `LICENSE` file. The LittleJS row in
  `docs/repositories.md` records a default branch only; its licence cell is
  blank there, so read the repository before stating one.
- A way to open the page: a local server, not `file://`, if you load files.

## Steps

1. One HTML file, one script, no build step unless the person asks.
2. Keep it under about 500 lines. Past that, move to Phaser and say why.
3. Use the engine's update loop; movement times delta, capped so a slow frame
   does not teleport the player.
4. Draw sprites from canvas-made textures or small code-drawn shapes: no asset
   pack for a jam game.
5. One screen, one loop, one score. No menus in the first version.
6. Touch and keyboard both work; the page never scrolls sideways at 390 px.
7. The first screen draws in under a few seconds on a slow machine.
8. Save the best score in `localStorage` if the person asks for it.

## Compatibility and licence cautions

Licence and branch: `docs/repositories.md`. Check it before repeating a claim. Loading the engine from a CDN pins a version in the URL.

## Acceptance criteria and verification

Acceptance criteria:

- The file opens and the game runs with no uncaught error.
- Every key and tap does what the screen says.
- The score changes and the win or lose state is reachable.
- No sideways scroll at 390 px, 820 px and 1280 px.

Steps: open the page, play once to the end, refresh, read the console.

## Known limitations

- Small engine: fewer docs and examples than Phaser or Three.js.
- No editor, no scene graph to speak of, no built-in level format.
- Not a fit for large projects, teams or long content.

## Upstream references

`KilledByAPixel/LittleJS`. Facts: `docs/repositories.md`.

## Do not

- Do not vendor the engine into the repository.
- Do not grow a jam game into a campaign without switching engine and saying so.

### Skill 13: Multiplayer with Colyseus

Repository file: `skills/ghost-game-engine/multiplayer-with-colyseus/SKILL.md`

# Skill: Multiplayer with Colyseus

## Purpose

Add real-time multiplayer with a server that owns the true game state and rooms
that players join.

## When to use it

- Two or more players share one live world or match.
- State must stay consistent between players.
- The project can run a Node server next to the web client.

## When not to use it

- The game is single player.
- Turn-based play between two people with no live state: the turn-based skill is
  simpler and cheaper.
- The game must be a static site with no server: multiplayer needs a server.

## Required inputs and prerequisites

- A server to host the room (Node 22 and npm locally; a host that runs Node in
  production).
- The authority decision: the server decides, clients only send intents.
- The state shape and the message list.
- Read the row for `colyseus/colyseus` in
  `docs/ghost-game-engine/repositories.md` before naming its licence; it is
  listed as reachable with fields not yet recorded.

## Steps

1. Write the state schema first: what every player sees, and what is private.
2. Write the message list: input intents up, state patches down. No client-side
   authority over position, score or health.
3. Create one room type, join and leave handled, with a player id per client.
4. Run the server loop at a fixed tick, and send input with timestamps so the
   client can interpolate.
5. Interpolate on the client; never snap remote players on every patch.
6. Handle network loss: reconnect, or end the match cleanly and tell the player.
7. Validate every message on the server. A client must not be able to send a
   score.
8. Test with two clients: one creates, one joins, both see the same state, and a
   disconnect is handled.
9. Load-test the planned player count before shipping.

## Upstream references

`colyseus/colyseus`. Licence and verification state:
`docs/ghost-game-engine/repositories.md`. Use its own docs for the schema and
room API of the pinned version.

## Compatibility and licence cautions

Colyseus is a server framework with its own licence and hosting needs. A server
is a running cost: say so before adding it. Never trust a client message, and
never put secrets in the client.

## Acceptance criteria and verification

- Two browser clients join one room and see each other.
- The server rejects an illegal message with no crash.
- A disconnect is handled without freezing the other player.
- The room survives the planned player count in a load test.

## Known limitations

- Needs a server and a deployment step; it cannot run on a static host.
- Latency cannot be removed, only hidden with prediction and interpolation.

### Skill 14: Music and audio playback

Repository file: `skills/ghost-game-engine/music-and-audio-playback/SKILL.md`

# Skill: Music and audio playback

## Purpose

Play music and manage a mix: looping tracks, fades, volume channels, and the
browser rules that stop audio until the player interacts.

## When to use it

- The game has background music, ambient loops or several audio channels.
- Sound must duck, fade or cross-fade between scenes.
- Audio is added with a library such as Howler, or the engine's own system.

## When not to use it

- Only short effects are needed: retro sound effects skill.
- The game is silent by design.

## Required inputs and prerequisites

- The music files and their licences (music is almost always licensed, and often
  needs attribution in the game).
- The channels: music, effects, voice, and the target volumes.
- The target platforms, because mobile browsers unload audio aggressively.

## Steps

1. Pick the playback path: the engine's own audio system first; a library only
   if the engine's is missing something you can name.
2. Read the row for `goldfire/howler.js` in
   `docs/ghost-game-engine/repositories.md` before naming its licence; the same
   for the engine's audio module.
3. Unlock audio on the first user gesture, and show that sound is on.
4. Load music before the scene that needs it, with a real loading state.
5. Keep one music track running across scenes; cross-fade instead of restarting.
6. Build a mixer: separate volume for music and effects, saved in localStorage,
   plus a mute that survives a refresh and pauses music when the tab is hidden.
7. Handle failure: if a file cannot load, play without it and say so in the
   console. Never block the game on audio.
8. Keep file sizes reasonable and use a compressed format the target browsers
   play.
9. Record every track's source, licence and required attribution in the
   repository.

## Upstream references

`goldfire/howler.js` for the library path; engine docs for built-in audio.
Licence and verification state: `docs/ghost-game-engine/repositories.md`.

## Compatibility and licence cautions

Music licensing is separate from code licensing. Do not ship a track whose
licence you have not read, and keep attribution text in the game or the credits
as the licence requires.

## Acceptance criteria and verification

- Music starts after the first gesture and not before.
- Volume and mute work, and survive a refresh.
- Changing scene does not restart or double the music.
- A missing audio file does not crash or freeze the game.

## Known limitations

- Mobile browsers pause or unload audio in the background; state must be
  re-checked on return.
- Gapless looping is unreliable across browsers; short loops may click.

### Skill 15: Performance and accessibility

Repository file: `skills/ghost-game-engine/performance-and-accessibility/SKILL.md`

# Skill: Performance and accessibility

## Purpose

Keep a game fast enough to play on a modest phone, and usable by people who
cannot see, hear or use a mouse the way the design assumes.

## When to use it

- Before a release, and whenever the frame rate drops.
- When the game is meant to run on phones.
- When adding colour, sound or motion based feedback.

## When not to use it

- Never skipped entirely: even a small jam game gets the checks below.

## Required inputs and prerequisites

- The target devices and the target frame rate.
- A way to measure: the engine's frame stats, or `renderer.info` for Three.js.
- The list of player actions and how each is signalled (text, sound, colour,
  motion).

## Steps

1. Measure first: frame time, draw calls, sprite count and memory on the target
   device. Write the numbers down before changing anything.
2. Fix the biggest cost: usually draw calls, then overdraw, then physics, then
   scripts. Instancing, merging, texture atlases and culling come before
   micro-optimisation.
3. Cap the pixel ratio, and give a Low quality setting that turns off shadows and
   post-processing.
4. Load in stages with a real loading screen; never a blank freeze.
5. Never let effects change what the game shows: motion can be reduced, shake and
   flashes turned off, and text still readable.
6. Contrast: text at least 4.5:1 against its background; never colour alone for a
   game-critical signal.
7. Sound: every sound has a visual twin (captions or icons), a volume control and
   a mute that persists.
8. Input: every mouse or touch action has a keyboard path; focus is visible; the
   game pauses when the window loses focus if it can kill the player.
9. Text: scalable, no text baked into images for anything that matters.
10. Test on a real phone, or at phone width with throttled CPU, and record the
    frame time after the fix.

## Upstream references

Engine performance guides (Three.js renderer info, Phaser and PixiJS scale and
cache docs), and the Web Content Accessibility Guidelines for contrast and
motion.

## Compatibility and licence cautions

Accessibility overlays and analytics cost size; each addition needs a reason.
Fonts must be licensed for embedding.

## Acceptance criteria and verification

- Frame time on the target device is inside the stated budget, with numbers
  before and after.
- Low quality setting measurably lowers cost.
- Every critical signal has a non-colour signal and every sound has a visual
  twin.
- The game is playable with the keyboard only, and with reduced motion on.

## Known limitations

- No headless check proves playability for a screen reader user; a person must
  try it.
- A low-end phone cannot be emulated exactly in a sandbox.

### Skill 16: Phaser 2D

Repository file: `skills/ghost-game-engine/phaser-2d/SKILL.md`

# Skill: Phaser 2D

## Purpose

Build a 2D browser game with Phaser: scenes, sprites, arcade physics, input and
scale, in a project that builds and runs.

## When to use it

- A 2D browser game with levels, sprites and collisions.
- The person wants a scene structure (menu, play, game over).
- A repository that already uses Phaser.

## When not to use it

- The game is one idea in one file: LittleJS is smaller.
- The game is 3D: Three.js.
- No bundler and no npm are available and the person wants a single HTML file:
  check first, Phaser needs a build step for a tidy project.

## Required inputs and prerequisites

- Node 22 and npm if the project is built; otherwise a Phaser build file from a
  source you name.
- The resolution and orientation, keyboard, mouse or touch.
- The art: made pictures or code-drawn shapes.
- Read the licence row for Phaser in `docs/repositories.md` before you state
  one. That row records what an API call returned for `phaserjs/phaser`; if a
  cell there is blank, read the repository's own `LICENSE` file instead of
  quoting from memory. Confirm the version in `package.json` after install.

## Steps

1. One scene per concern: `Boot`, `Preload`, `Menu`, `Play`, `GameOver`.
2. Pin the Phaser version in `package.json` and say which one you installed.
3. Arcade physics for platformers and simple collisions; matter only for
   physics puzzles.
4. Load every asset in `preload` and show a real loading bar, not a frozen page.
5. Movement in `update(time, delta)` using delta, never a fixed step per frame.
6. Kill, don't hide: destroy off-world sprites and groups so memory stays flat.
7. Scale with `Phaser.Scale.FIT` and one aspect ratio; test at phone width.
8. Keyboard, mouse and touch: on-screen buttons at least 44 px on phones.
9. Save progress in `localStorage` with a versioned key.

## Compatibility and licence cautions

See the Phaser row in `docs/repositories.md` for the recorded values and the
date they were read. Never state a licence that file does not hold.

## Acceptance criteria and verification

Acceptance criteria:

- `npm run build` (or the project's build) finishes with no error.
- The page opens with no uncaught error in the console.
- The player moves with the keys and with touch.
- The score changes and survives a refresh when saving is on.
- Nothing scrolls sideways at 390 px wide.

Steps: build, open, press every control, refresh, read the console.

## Known limitations

- Large tilemaps need care: one big image will stutter.
- Arcade physics is box-only; no slopes out of the box.
- Sound needs a first user click in most browsers.

## Upstream references

`phaserjs/phaser`. Facts and licence: `docs/repositories.md`.

## Do not

- Do not copy engine source into the repository.
- Do not claim a version or licence you did not read.
- Do not build a second game loop beside Phaser's `update`.

### Skill 17: PixiJS rendering

Repository file: `skills/ghost-game-engine/pixijs-rendering/SKILL.md`

# Skill: PixiJS rendering

## Purpose

Draw a 2D game with PixiJS when the rendering is custom and the gameplay is
written by hand.

## When to use it

- A 2D game with unusual visuals: shaders, particles, many sprites, custom
  drawing.
- The project already uses PixiJS.
- A rendering layer under code the team controls.

## When not to use it

- The game needs scenes, physics, tweens and input out of the box: that is
  Phaser, which is a full 2D engine.
- The game is 3D: Three.js.
- The game is one small idea: LittleJS or KAPLAY is less setup.

## Required inputs and prerequisites

- Node 22 and npm.
- A clear statement of what you implement yourself: the loop, input, collisions
  and collision shapes.
- The resolution and whether the game uses WebGL or WebGPU.
- Read the licence row for `pixijs/pixijs` in
  `docs/ghost-game-engine/repositories.md` first. It is listed as reachable with
  fields not yet recorded.

## Steps

1. Say plainly that PixiJS renders only: every game rule is your code.
2. Pin the PixiJS version and note which renderer it uses in this version.
3. Create one application, one ticker, one stage. Do not create a second loop.
4. Group the display list: world container, UI container, and a camera transform
   on the world container.
5. Implement input once: keyboard state map plus pointer or touch, normalised to
   the same actions.
6. Implement collisions yourself with simple shapes (boxes, circles) unless a
   physics library is added on purpose and named.
7. Move with the ticker's delta. Never assume 60 frames.
8. Destroy sprites that leave the world; reuse from a pool for bullets and
   particles.
9. Test the drawing at phone width and with a slow frame rate.

## Upstream references

`pixijs/pixijs`. Licence and verification state:
`docs/ghost-game-engine/repositories.md`. Use its own guide and examples for the
API of the version you pinned.

## Compatibility and licence cautions

See `docs/ghost-game-engine/repositories.md`. PixiJS is not a game engine: do not
describe it as one, and do not imply physics, audio or scenes come with it. Add
each extra library deliberately and record its licence.

## Acceptance criteria and verification

- The build finishes with no error; the canvas draws frames.
- No uncaught console error.
- Input works with keyboard and touch.
- Sprite count stays flat over a minute of play.
- Nothing scrolls sideways at 390 px wide.

## Known limitations

- No physics, no scene manager, no audio: all of that is additions.
- A custom renderer means more code to test than with a full engine.

### Skill 18: Procedural world generation

Repository file: `skills/ghost-game-engine/procedural-world-generation/SKILL.md`

# Skill: Procedural world generation

## Purpose

Generate worlds and levels from a seed so the same seed always builds the same
world, and the game stays fun and fast at any size.

## When to use it

- Roguelikes, endless runners, terrain, dungeons, loot and waves.
- Variety is wanted without hand-making every level.

## When not to use it

- Hand-made levels are the point: tilemap skill.
- The world happens once and is small: a fixed map is cheaper and easier to
tune.

## Required inputs and prerequisites

- A seed value, shown to the player and accepted from the player.
- The rules the world must obey: connected, reachable exits, no unreachable
  loot, a start and an end.
- A seeded random number generator (write one small PRNG by hand, or use the
  engine's own). Never use the language's unseeded random for world data.

## Steps

1. Write down the world's guarantees in one list (reachable, sized, solvable).
2. Build a pipeline of small passes, each taking the world and returning the
   world: base shape, then rooms, then decoration, then enemies, then items.
3. Pass one seeded generator through the pipeline; never create a new random
   source inside a pass.
4. Keep each pass deterministic and side-effect free so it can be tested with a
   seed alone.
5. Validate the result after generating: flood fill or path search proves the
   exits are reachable. Regenerate with the next seed when validation fails, and
   cap the attempts.
6. Cap the work: a size limit and a time budget per generation.
7. Log the seed with any bug report; the same seed must rebuild the same world.
8. Test: same seed twice gives identical output, different seeds differ, and
   validation passes over many seeds.

## Upstream references

Engine-specific generators exist (for example a procedural toolkit for Unity; read
its row in `docs/ghost-game-engine/repositories.md` before naming a licence). A
small generator written by hand is often enough and has no licence of its own.

## Compatibility and licence cautions

Third-party generators and tile packs have their own licences. A generated world
of someone else's tiles is still their art; keep the notice.

## Acceptance criteria and verification

- The same seed rebuilds the identical world, checked with a test.
- Validation (reachability, size, start and end) passes for many seeds.
- Generation of the largest world finishes inside the stated time budget.
- The player can see and enter the seed.

## Known limitations

- Guarantees cost performance; validation gets slower as worlds grow.
- No generator makes a world fun; tuning is hand work after generation.

### Skill 19: Release and documentation

Repository file: `skills/ghost-game-engine/release-and-documentation/SKILL.md`

# Skill: Release and documentation

## Purpose

Ship a game build with a README a stranger can follow, a record of licences, and
no claims that were never checked.

## When to use it

- A build is going to other people.
- The repository gets a store page, a jam entry or a demo link.
- Someone else has to run the project after you.

## When not to use it

- Never: even a prototype needs a README that says how to run it.

## Required inputs and prerequisites

- A working build and its measured size.
- `CREDITS.md`: every asset with source and licence.
- The list of what was tested and on which devices.

## Steps

1. Write the README in this order: what the game is, how to run it, the controls,
   the quality settings, what is not finished, credits and licences.
2. Give the exact commands and the versions they need (Node, the engine version
   pinned).
3. Create the release build the way the project's own build does, and record its
   size and the date.
4. List every third-party licence that ships with the build, and where the notice
   lives.
5. Write the known limitations plainly. Do not claim a feature that is planned but
   missing.
6. Check the build on the target host or device, once, and say what was checked.
7. Tag or note the version the build came from.
8. Do not publish secrets, keys or private URLs in the README or the build.

## Upstream references

The publishing engine's own export or build documentation, and the store's
submission rules for the platform being shipped to.

## Compatibility and licence cautions

A store may require its own licence text, age rating and attribution placement.
Keep every notice the third-party licences require, including in minified builds.

## Acceptance criteria and verification

- A person who has never seen the repo can run the game from the README alone.
- Every shipped asset appears in `CREDITS.md`.
- Known limitations are listed and true.
- The build runs where it will be hosted.

## Known limitations

- Store submission is a separate process with its own account requirements.
- No documentation proves the game is fun or finished.

### Skill 20: Retro sound effects

Repository file: `skills/ghost-game-engine/retro-sound-effects/SKILL.md`

# Skill: Retro sound effects

## Purpose

Make short, characterful sound effects for a game without a recording studio:
generate them, keep them small, play them without stutter.

## When to use it

- A game needs jump, hit, coin and menu sounds.
- The style is retro, chiptune or arcade.
- There is no sound designer available.

## When not to use it

- The game needs a licensed soundtrack: music-and-audio-playback skill.
- The game is silent by design.

## Required inputs and prerequisites

- The list of events that need a sound, and how often each fires.
- The style: square, saw, noise, bit depth, pitch range.
- A licence check on every generated or downloaded sound.

## Steps

1. List the events first, with how often each can fire per second.
2. Generate the sounds with a small tool (jsfxr-style generators are the common
   choice; read the row for `chr15m/jsfxr` in
   `docs/ghost-game-engine/repositories.md` before naming its licence).
3. Keep files small and short: effects under about a quarter of a second, in a
   format every browser plays.
4. Normalise loudness across effects so one does not blast the mix.
5. Preload before play, and unlock audio on the first click or tap (browsers
   require it).
6. Limit voices: the same effect fired many times per frame plays once, with a
   small random pitch to avoid machine-gun sameness.
7. Give every sound a volume control, and the game a mute that survives a
   refresh.
8. Record the source of each sound in the repository, with its licence.

## Upstream references

`chr15m/jsfxr` and the generator it is built on. Licence and verification state:
`docs/ghost-game-engine/repositories.md`.

## Compatibility and licence cautions

Generated sounds are yours, but the generator's licence still applies to the
code you use. Downloaded sound packs almost always need attribution: keep the
notice and the link in the repository.

## Acceptance criteria and verification

- Every listed event has a sound, and it plays on the event.
- No stutter when the sound first plays.
- Mute and volume work and survive a refresh.
- Total audio size is stated and reasonable for the platform.

## Known limitations

- Generated effects sound retro: they will not fit a realistic game.
- Browsers need a user gesture before any sound plays.

### Skill 21: Three.js 3D

Repository file: `skills/ghost-game-engine/threejs-3d/SKILL.md`

# Skill: Three.js 3D

## Purpose

Build a 3D game in the browser with Three.js: a scene, a camera, a render loop,
lighting and simple gameplay systems written by hand.

## When to use it

- The game is 3D on the web and no full engine is wanted.
- A first-person or third-person view of a small world.
- A voxel or low-poly look built from simple shapes.

## When not to use it

- The game is 2D: Phaser or PixiJS.
- The game needs built-in physics, GUI and an inspector on day one: Babylon.js
  is the closer fit.
- The project is already a React app: React Three Fiber renders the same scene
  inside it.

## Required inputs and prerequisites

- Node 22 and npm, or an import map pointing at an exact version.
- The camera and control scheme (keyboard, mouse, touch).
- The style decision: low-poly, voxel or realistic, said out loud.
- Read the licence row for `mrdoob/three.js` in
  `docs/ghost-game-engine/repositories.md` before stating one. It is listed as
  reachable there with fields not yet recorded; read the value again first.

## Steps

1. Say which style you chose and why. A studio look is out of reach in one task;
   good lighting, fog and simple shapes are not.
2. Pin the exact `three` version in `package.json`; import addons from
   `three/addons/...`.
3. Create the renderer with antialias, pixel ratio capped at 2, sRGB output and
   ACES tone mapping. Handle window resize.
4. If WebGL cannot start, show a message on the page. Never a blank screen.
5. One loop with `renderer.setAnimationLoop`. Multiply movement by delta, capped
   at 0.05, so a slow frame does not throw the player across the map.
6. Build the world from shapes. Many copies of one thing are one InstancedMesh;
   static scenery is merged. Read `renderer.info.render.calls` and keep it low.
7. Light it: one directional light with shadows, one soft ambient or hemisphere
   light, fog to hide the far edge.
8. Add a Low/High quality setting saved in localStorage. Low turns off shadows
   and lowers the pixel ratio.
9. Draw the title and the controls in HTML on top of the canvas, so the first
   screen is readable before the first frame renders.
10. Dispose geometries, materials and textures of anything you remove.
11. Plan the gameplay systems (collisions, enemies, score) explicitly. Three.js
    is a renderer; the game is your code or a physics library.

## Upstream references

`mrdoob/three.js`. Facts and licence: `docs/ghost-game-engine/repositories.md`.
Read the official manual and examples pages for the API you use.

## Compatibility and licence cautions

See the licence row in `docs/ghost-game-engine/repositories.md`. Do not copy the
library's source into the game repository; install it as a dependency. Check the
licence of every model and texture you add, separately from the library.

## Acceptance criteria and verification

- The build finishes with no error.
- The page draws a visible scene within a few seconds, even on slow software
  WebGL.
- No uncaught console error.
- The player moves with keyboard and with touch or on-screen buttons.
- The quality setting survives a refresh.
- Nothing scrolls sideways at 390 px wide.

## Known limitations

- No gameplay engine: collisions, AI and save systems are your own work.
- Shadows and post-processing are slow without a graphics card; the browser
  check runs on software rendering.
- Large scenes need instancing, merging or level-of-detail or they stutter.

### Skill 22: Tilemaps and level design

Repository file: `skills/ghost-game-engine/tilemaps-and-level-design/SKILL.md`

# Skill: Tilemaps and level design

## Purpose

Build levels from tiles and objects with a map editor, load them in the game, and
keep collision, camera and spawn data in the map instead of in the code.

## When to use it

- Levels are grid based, or many hand-made levels are coming.
- Designers need to edit levels without touching code.
- An engine already loads TileD maps (Phaser, melonJS, Excalibur, Godot import).

## When not to use it

- The world is generated at runtime: procedural generation skill.
- The level is a few hand-placed objects: plain data in code is faster.

## Required inputs and prerequisites

- A tile editor. Tiled is the usual choice; read its row in
  `docs/ghost-game-engine/repositories.md` before naming a licence (it is listed
  as `NOASSERTION` there: open its own licence files).
- The tile size, the map size and the layers planned: ground, decoration,
  collision, objects, spawns.
- Art that tiles seamlessly.

## Steps

1. Decide the tile size once (for example 16 or 32 pixels) and keep it for the
   whole game.
2. Split layers by job: ground, decoration, collision, object/spawn.
3. Put collision in the map, not in a list of manual boxes in the code.
4. Mark spawns, exits and triggers as objects with names the code reads.
5. Load the map through the engine's own loader; do not write a parser by hand.
6. Draw only what the camera sees when maps are large; never one giant texture.
7. Keep the map file in the repository and say which editor version made it.
8. Add one small map first, play it, then grow it.

## Upstream references

`mapeditor/tiled` for editing. Engine-specific loading is in that engine's skill
(Phaser, melonJS, Excalibur, Godot). Licence state for each:
`docs/ghost-game-engine/repositories.md`.

## Compatibility and licence cautions

Tiled is a separate program published under its own licence; the map format is
not the editor. Check the licence of any tile art separately; a tileset bought or
found online is not covered by the engine's licence.

## Acceptance criteria and verification

- The map loads with no console error.
- The player cannot walk through walls marked as collision.
- Spawn and exit work.
- The game keeps a steady frame rate on the biggest map you ship.

## Known limitations

- Object layers do not enforce anything; the code must read them correctly.
- Very large maps need chunking or culling, which is extra work.

### Skill 23: Turn-based with boardgame.io

Repository file: `skills/ghost-game-engine/turn-based-with-boardgameio/SKILL.md`

# Skill: Turn-based with boardgame.io

## Purpose

Build a turn-based game with rules that run the same on client and server, and
with moves that are validated rather than trusted.

## When to use it

- The game is turn-based: cards, boards, drafting, puzzles, tactics.
- Rules must be testable without a UI.
- Two players on two machines need a shared, trustworthy game state.

## When not to use it

- The game is real time: Colyseus skill.
- It is a solo game with no turns: a plain state machine in the engine is enough.

## Required inputs and prerequisites

- The rules, written as steps a player takes.
- The state shape and the win condition.
- Whether play is local, online, or both (the library's multiplayer transport may
  be hosted or your own).
- Read the row for `boardgameio/boardgame.io` in
  `docs/ghost-game-engine/repositories.md` before naming its licence; it is
  listed as reachable with fields not yet recorded.

## Steps

1. Write the rules as a list of moves with preconditions.
2. Define the state in one plain object; no hidden state in the UI.
3. Implement each move as a pure function that checks its own preconditions and
   refuses an illegal move.
4. Define the turn order and the end condition explicitly.
5. Test the rules with unit tests: legal move changes state, illegal move does
   not, win condition fires.
6. Build the UI on top of the state only; the UI never mutates state directly.
7. Add online play only after local play works, and check the transport's
   requirements.
8. Handle a dropped connection mid-turn and a reload: the state must be
   recoverable.

## Upstream references

`boardgameio/boardgame.io`. Licence and verification state:
`docs/ghost-game-engine/repositories.md`.

## Compatibility and licence cautions

Online play needs a server or a hosted transport, which is a running cost. Check
the library's licence and any hosting terms before you promise online play.

## Acceptance criteria and verification

- Rules have unit tests that pass without a browser.
- An illegal move is refused and the state is unchanged.
- Local play works end to end, including the win condition.
- Online play recovers from a reload or a dropped connection.

## Known limitations

- The library handles turns, not art, animation or matchmaking quality.
- Online play still needs somewhere to run the server.

### Skill 24: Unity and desktop tool boundaries

Repository file: `skills/ghost-game-engine/unity-and-desktop-tool-boundaries/SKILL.md`

# Skill: Unity and desktop tool boundaries

## Purpose

Say clearly what an agent can and cannot do with Unity and desktop art tools, and
what a person must do in the editor instead.

## When to use it

- A task mentions Unity, a Unity package, or a desktop tool such as an art or
  modelling program.
- Someone asks an agent to drive an editor or connect it through MCP.
- A repository holds a Unity project rather than a web game.

## When not to use it

- The project is a web game with no Unity or editor step.

## Required inputs and prerequisites

- The Unity version and the target platform, taken from the project files, not
  guessed.
- Whether the person runs a machine with the Unity editor and the bridge plugin
  installed. An agent in a cloud workspace cannot drive a local editor without
  one of these bridges.
- Licences of every package added, read from its own repository.

## Steps

1. Read the repository first: `ProjectSettings/ProjectVersion.txt` gives the
   editor version; `Packages/manifest.json` gives the packages.
2. State the boundary aloud: files can be edited and committed by an agent; the
   editor must be opened by the person to import, build and play. An agent in a
   cloud sandbox cannot press Play.
3. Choose the integration only if the person has the editor running: an editor
   plugin or an MCP bridge. Read its row in
   `docs/ghost-game-engine/repositories.md` before naming its licence, and never
   claim the bridge is installed or working unless the person says so.
4. Install a package by editing `Packages/manifest.json` to an exact version, in
   the same commit that uses it.
5. Prefer text assets for review: YAML scenes, `.asset` files, C# scripts. Explain
   binary assets cannot be reviewed in a diff.
6. Keep editor-only changes out of the build; nothing in `Editor/` ships.
7. Do not add a paid Asset Store item, a licence-locked shader or an external
   service without saying what it costs and why it is needed.
8. Build through the project's own CI (for example a Unity build action read from
   its own row in `docs/ghost-game-engine/repositories.md`) or through the
   person's editor; say which one actually ran.
9. Desktop art tools are separate programs: an agent can write files those tools
   open, but cannot click inside them. Say what the person must do there.

## Upstream references

Unity editor integrations, MCP bridges and build actions are listed in
`docs/ghost-game-engine/repositories.md`. Read the row before citing a licence or
version; several of those rows are reachable but not yet recorded in full.

## Compatibility and licence cautions

Unity's own licence and terms apply to the editor and to Unity-hosted services;
that is not the same as the package licences. A tool that is only usable with a
paid editor tier cannot be presented as free. Never state that a plugin or
integration works until it was actually run.

## Acceptance criteria and verification

- The Unity version and package list are quoted from the project files.
- Every change an agent made is in files; every step that needs the editor is
  listed for the person by name.
- The build was run by one named path (CI action or the person's editor), and the
  report says which.
- No new package or paid service appears without a stated reason.

## Known limitations

- An agent without the editor cannot compile, import, or play the game.
- Unity builds are slow and often need paid runner minutes.
- MCP bridges run locally; a cloud sandbox has no route to them.

### Skill 25: Web game testing

Repository file: `skills/ghost-game-engine/web-game-testing/SKILL.md`

# Skill: Web game testing

## Purpose

Prove a browser game works: it builds, the page loads with no uncaught error,
every control does something, and saved data survives a refresh.

## When to use it

- Before every commit to a web game.
- When a change touches input, saving, scaling or the game loop.
- Before a release build.

## When not to use it

- The game is desktop or engine-editor only: test it in the engine, and say so.

## Required inputs and prerequisites

- A build command and a run command for the project.
- The list of controls and the list of screens.
- The repository's own check (a workflow, or Ghost Code's browser check). Do not
  add a second check file that tests the same thing.

## Steps

1. Read the project's own test and check setup first; use it, do not replace it.
2. Build, then load the page and watch the console for uncaught errors.
3. Check the first screen renders in a few seconds on slow software WebGL.
4. Press every control: keys, mouse, and on-screen buttons at phone width.
5. Check the game loop keeps running: frames advance, the score changes.
6. Add or change data, then refresh and check it is still there.
7. Check 390, 820 and 1280 px wide: no sideways scrolling, targets at least 44
   px.
8. Test the failure paths: a missing asset, audio blocked, a save with a bad
   version.
9. Record what was run and what was not. A check that never ran is not a pass.

## Upstream references

Engine docs for building (Phaser, PixiJS, Three.js, LittleJS). Ghost Code's own
browser check is the test in this workspace; its rules are in the task
instructions, not here.

## Compatibility and licence cautions

Do not add browser test frameworks, Playwright or jsdom when the repository
already has a check. A new test dependency needs a stated reason and its licence
recorded.

## Acceptance criteria and verification

- Build passes, page loads, no uncaught error.
- Every control changes something visible.
- Added data survives a refresh (or the game has nothing to add).
- No sideways scroll at 390 px wide.

## Known limitations

- A headless browser cannot judge feel, fun or difficulty.
- Software rendering is slower than a real graphics card; a slow first frame in
  the check may not happen for players.

## 5. Upstream sources and licences

The game skills point here for every licence question. Read the row before you name
a licence. A blank cell means it was not read: say so, do not guess.

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
