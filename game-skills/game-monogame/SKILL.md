# Skill: MonoGame

Name: MonoGame

## When to use it

A C# game for desktop, consoles or mobile, written the XNA way: `Game`,
`Update`, `Draw`, `Content`.

## Rules

1. Say which MonoGame version, which .NET version and which platforms are
   targeted. Read the version from `docs/repositories.md`; never from memory.
2. One `Game` class with `Initialize`, `LoadContent`, `Update(GameTime)` and
   `Draw(GameTime)`. Movement uses `gameTime.ElapsedGameTime`.
3. Every asset goes through the Content Pipeline. Tell the user the exact file to
   add to the content project and the name used with `Content.Load<T>(...)`.
4. Keep a fixed logical resolution and scale the whole scene, so window sizes do
   not change the game.
5. Input is keyboard, gamepad and touch, decided at the point of use. Do not
   assume only a keyboard.
6. Dispose textures, render targets and audio you create.
7. Say the build command (`dotnet build`, `dotnet run`) and the folder. A project
   that does not build is not delivered.

## Source

`MonoGame/MonoGame` — GitHub reports the licence as NOASSERTION, so open its own
`LICENSE.txt` before telling the user what they may do with it. Not archived,
default branch `develop`. Recorded fields are in `docs/repositories.md`.

## Do not

Do not claim a console build. Those need a licensed platform SDK the user must
set up.
