// Proof of the default-Project rule. Run: node --test ghost-skills-project/
//
// One test here is the one that matters: "fails when the create step is
// removed". It runs the same tests against a deliberately broken copy of the
// rule and requires them to fail, so the suite cannot pass while the create
// step is missing.

import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import {
  ensureGhostSkillsProject,
  defaultProjectFor,
  createMemoryStore,
  GHOST_SKILLS_NAME,
} from "./ensure.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const INSTRUCTIONS = readFileSync(
  join(here, "..", "PROJECT-INSTRUCTIONS.md"),
  "utf8",
);

test("instructions are the real PROJECT-INSTRUCTIONS.md, read from the repo", () => {
  assert.equal(typeof INSTRUCTIONS, "string");
  assert.ok(INSTRUCTIONS.trim().length > 0, "file must not be empty");
  assert.match(INSTRUCTIONS, /SKILL\.md/i);
});

test("a brand new account has exactly one Ghost Skills Project", () => {
  const store = createMemoryStore();
  const project = ensureGhostSkillsProject(store, "user-1", INSTRUCTIONS);

  assert.equal(store.countDefaults("user-1"), 1);
  assert.equal(project.name, GHOST_SKILLS_NAME);
  assert.equal(project.isDefault, true);
  assert.equal(project.instructions, INSTRUCTIONS);
});

test("running the create path twice still leaves exactly one", () => {
  const store = createMemoryStore();
  const first = ensureGhostSkillsProject(store, "user-1", INSTRUCTIONS);
  const second = ensureGhostSkillsProject(store, "user-1", INSTRUCTIONS);

  assert.equal(store.countDefaults("user-1"), 1);
  assert.equal(first.id, second.id);
  assert.equal(store.log.filter(([op]) => op === "create").length, 1);
});

test("a new chat without a chosen Project lands in it", () => {
  const store = createMemoryStore();
  const project = ensureGhostSkillsProject(store, "user-1", INSTRUCTIONS);

  const landing = defaultProjectFor(store, "user-1");
  assert.ok(landing, "a new chat must land in a Project, not nowhere");
  assert.equal(landing.id, project.id);
  assert.equal(landing.name, GHOST_SKILLS_NAME);
});

test("deleting the Project and starting a chat brings back exactly one", () => {
  const store = createMemoryStore();
  const project = ensureGhostSkillsProject(store, "user-1", INSTRUCTIONS);
  store.remove(project.id);
  assert.equal(store.countDefaults("user-1"), 0);

  // Starting a chat runs the same ensure path before it lands.
  const again = ensureGhostSkillsProject(store, "user-1", INSTRUCTIONS);
  assert.equal(store.countDefaults("user-1"), 1);
  assert.notEqual(again.id, project.id, "a fresh Project, not the deleted id");
  assert.equal(defaultProjectFor(store, "user-1").id, again.id);
});

test("an existing account gets it on next sign-in", () => {
  const store = createMemoryStore();
  // Existing account signed up before this feature: no default Project.
  assert.equal(store.countDefaults("user-old"), 0);

  const project = ensureGhostSkillsProject(store, "user-old", INSTRUCTIONS);
  assert.equal(store.countDefaults("user-old"), 1);
  assert.equal(project.instructions, INSTRUCTIONS);
});

test("a damaged account with two defaults is repaired to one", () => {
  const store = createMemoryStore();
  // Simulate a row inserted before the unique index existed.
  store.rows.set(7, {
    id: 7,
    userId: "user-1",
    name: GHOST_SKILLS_NAME,
    isDefault: true,
    instructions: INSTRUCTIONS,
  });
  store.rows.set(9, {
    id: 9,
    userId: "user-1",
    name: GHOST_SKILLS_NAME,
    isDefault: true,
    instructions: "",
  });

  const kept = ensureGhostSkillsProject(store, "user-1", INSTRUCTIONS);
  assert.equal(store.countDefaults("user-1"), 1);
  assert.equal(kept.id, 7);
  assert.equal(kept.instructions, INSTRUCTIONS);
});

test("an account with a Project but empty instructions gets them filled", () => {
  const store = createMemoryStore();
  const project = store.create({
    userId: "user-1",
    name: GHOST_SKILLS_NAME,
    isDefault: true,
    instructions: "",
  });

  const filled = ensureGhostSkillsProject(store, "user-1", INSTRUCTIONS);
  assert.equal(filled.id, project);
  assert.equal(filled.instructions, INSTRUCTIONS);
  assert.equal(store.countDefaults("user-1"), 1);
});

test("two accounts each get their own one, not a shared Project", () => {
  const store = createMemoryStore();
  const a = ensureGhostSkillsProject(store, "user-a", INSTRUCTIONS);
  const b = ensureGhostSkillsProject(store, "user-b", INSTRUCTIONS);

  assert.notEqual(a.id, b.id);
  assert.equal(store.countDefaults("user-a"), 1);
  assert.equal(store.countDefaults("user-b"), 1);
});

test("a missing instruction text is refused, never invented", () => {
  const store = createMemoryStore();
  assert.throws(() => ensureGhostSkillsProject(store, "user-1", ""), /instructions/);
  assert.throws(() => ensureGhostSkillsProject(store, "", INSTRUCTIONS), /userId/);
  assert.equal(store.rows.size, 0);
});

test("the canary: removing the create step makes this suite fail", async () => {
  const source = readFileSync(join(here, "ensure.mjs"), "utf8");
  // Cut the create step out of the rule, exactly as someone would by mistake.
  const broken = source.replace(
    /  const id = store\.create\(\{[\s\S]*?\}\);\n  return store\.get\(id\);/,
    "  return null; // create step removed",
  );
  assert.notEqual(broken, source, "the create step must be findable to cut it");

  const brokenUrl =
    "data:text/javascript;base64," +
    Buffer.from(broken, "utf8").toString("base64");
  const mod = await import(brokenUrl);

  // The core expectation of the whole suite, as one reusable check.
  function oneProjectAfterCreate(rule) {
    const store = createMemoryStore();
    const project = rule(store, "user-1", INSTRUCTIONS);
    assert.ok(project, "a new account must get a Project");
    assert.equal(store.countDefaults("user-1"), 1);
    return project;
  }

  // The real rule satisfies it ...
  oneProjectAfterCreate(ensureGhostSkillsProject);

  // ... and the copy with the create step removed does not. If this ever stops
  // throwing, the suite above has gone blind and the canary must fail.
  assert.throws(
    () => oneProjectAfterCreate(mod.ensureGhostSkillsProject),
    /must get a Project/,
    "with the create step removed the suite must fail",
  );
});
