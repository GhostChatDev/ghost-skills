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
   `docs/repositories.md` before naming its licence, and never
   claim the bridge is installed or working unless the person says so.
4. Install a package by editing `Packages/manifest.json` to an exact version, in
   the same commit that uses it.
5. Prefer text assets for review: YAML scenes, `.asset` files, C# scripts. Explain
   binary assets cannot be reviewed in a diff.
6. Keep editor-only changes out of the build; nothing in `Editor/` ships.
7. Do not add a paid Asset Store item, a licence-locked shader or an external
   service without saying what it costs and why it is needed.
8. Build through the project's own CI (for example a Unity build action read from
   its own row in `docs/repositories.md`) or through the
   person's editor; say which one actually ran.
9. Desktop art tools are separate programs: an agent can write files those tools
   open, but cannot click inside them. Say what the person must do there.

## Upstream references

Unity editor integrations, MCP bridges and build actions are listed in
`docs/repositories.md`. Read the row before citing a licence or
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
