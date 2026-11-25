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
`docs/repositories.md` before naming a licence. In JavaScript,
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
