# Skill: React Three Fiber

Name: React Three Fiber

## When to use it

The user already has a React app and wants 3D inside it, or wants the 3D scene to
be built from components and state.

## Rules

1. This is Three.js with React on top. Read the Three.js skill too, and follow
   both.
2. Version-match `three`, `@react-three/fiber` and the addon packages. Read the
   versions from `docs/repositories.md`; never write them from memory.
3. The scene is JSX: `<mesh>`, `<boxGeometry>`, `<meshStandardMaterial>`. Do not
   call `new THREE.Mesh()` inside a component and add it by hand.
4. Animation lives in `useFrame((state, delta) => ...)` and is multiplied by
   `delta`. State that changes every frame stays in a ref, not in `useState`.
5. Reuse geometries and materials, and dispose what you create with
   `useMemo` or in `useEffect`'s cleanup.
6. Physics is `@react-three/rapier`. Read the Rapier skill as well.
7. A canvas that fails to start gets a plain message on the page.

## Source

`pmndrs/react-three-fiber` — MIT licence, not archived, default branch `master`.
Recorded fields are in `docs/repositories.md`.

## Do not

Do not turn a whole game into React state. A component that re-renders 60 times a
second is a bug, not a style.
