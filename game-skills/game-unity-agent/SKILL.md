# Skill: Unity agent bridge

Name: Unity agent bridge

## When to use it

The user already has a Unity project and wants an agent to work in it: change
scenes, write C# scripts, or drive the editor.

## Rules

1. Say plainly what you can and cannot do. You can write complete C# scripts and
   `.asset` / project settings files. You cannot open the Unity editor or press
   Play unless a bridge is connected. Do not claim a scene ran.
2. Never claim a Unity build, a screenshot or a Play Mode result you did not see.
3. Unity projects are large and binary: say exactly which files you write, and do
   not touch `Library/`, `Temp/`, `Logs/` or `obj/`. They belong in
   `.gitignore`, not in the commit.
4. Scripts go in `Assets/Scripts/` with a class name that matches the file name.
   A mismatch breaks the component silently.
5. Movement uses `Time.deltaTime`, and physics uses `FixedUpdate` with
   `Time.fixedDeltaTime`.
6. Ask before adding a package: package changes go in
   `Packages/manifest.json` and can break the user's project.
7. Tell the user the exact editor steps to check the change (which scene, which
   GameObject, which button).

## Source

`Unity-Technologies/unity-agent-plugin` and `IvanMurzak/Unity-MCP` answered the
GitHub API in this session. Their licence, branch and version fields are not
recorded in `docs/repositories.md` yet: read them before you quote them or
recommend installing one.

## Do not

Do not install a bridge package into the user's project without asking. It changes
how their editor starts.
