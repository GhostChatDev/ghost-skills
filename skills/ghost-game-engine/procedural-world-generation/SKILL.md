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
its row in `docs/repositories.md` before naming a licence). A
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
