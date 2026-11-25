# Skill: libGDX

Name: libGDX

## When to use it

One Java codebase that must run on desktop, Android and HTML5 (and iOS through
its backend). Choose it when the same game has to reach several platforms.

## Rules

1. Say which libGDX version and which JDK the project needs. Read the version
   from `docs/repositories.md`; never from memory.
2. One core module holds the game; each platform module is only a launcher. Do
   not put game logic in the launcher.
3. Use `ApplicationAdapter` or `Screen`, and clear the screen every frame. Use
   `Gdx.graphics.getDeltaTime()` for movement.
4. Put all assets in the shared assets folder, and load them with `AssetManager`
   behind a loading screen.
5. Dispose what you create (`SpriteBatch`, `Texture`, `Stage`). A libGDX object
   that is not disposed leaks memory on Android.
6. Input goes through the input processor, and you add touch controls on Android.
   Do not assume a keyboard.
7. Say how to run it: the Gradle task for desktop, and where the HTML5 build
   output goes.

## Source

`libgdx/libgdx` — Apache-2.0 licence, not archived, default branch `master`.
Recorded fields are in `docs/repositories.md`.

## Do not

Do not claim an Android or HTML5 build works unless that build was actually run.
