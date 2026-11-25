// Tests for the skill validator. Run: node --test tests/
import { test } from "node:test";
import assert from "node:assert/strict";
import { parseIndex, checkSkillFile, validate } from "../scripts/validate-skills.mjs";

const good = "# Skill: Planner\n\nName: Planner\n\n## When to use it\n\nx\n\n## Rules\n\n1. a\n2. b\n3. c\n";
const stub = "# Skill: skill-06\n\nMISSING. Paste the real skill text here. Do not invent rules.\n";

// Every file the test names "exists" and is read from memory, so no disk is touched.
const present = () => true;

test("parseIndex reads name, folder and status", () => {
  const text = [
    "| Skill name | Folder | When to use it | Status |",
    "| --- | --- | --- | --- |",
    "| Planner | `skills/planner/` | goals | ready |",
    "| skill-06 | `skills/skill-06/` | none yet | missing |",
  ].join("\n");
  const rows = parseIndex(text);
  assert.equal(rows.length, 2);
  assert.deepEqual(rows[0], { name: "Planner", folder: "skills/planner", when: "goals", status: "ready" });
  assert.equal(rows[1].status, "missing");
});

test("a ready skill passes", () => {
  assert.deepEqual(checkSkillFile("skills/planner/SKILL.md", "ready", () => good, present), []);
});

test("a stub marked ready fails", () => {
  const problems = checkSkillFile("skills/skill-06/SKILL.md", "ready", () => stub, present);
  assert.equal(problems.length > 0, true);
  assert.match(problems.join(" "), /MISSING stub/);
});

test("a ready skill with no Name line fails", () => {
  const read = () => "# Skill: X\n\nDo the thing.\n";
  assert.match(checkSkillFile("skills/x/SKILL.md", "ready", read, present).join(" "), /Name:/);
});

test("a stub marked missing passes", () => {
  assert.deepEqual(checkSkillFile("skills/skill-06/SKILL.md", "missing", () => stub, present), []);
});

test("a missing file is reported", () => {
  const problems = checkSkillFile("skills/nope/SKILL.md", "ready", () => good, () => false);
  assert.match(problems[0], /does not exist/);
});

test("an unknown status is reported", () => {
  assert.match(checkSkillFile("skills/p/SKILL.md", "draft", () => good, present).join(" "), /unknown status/);
});

test("an index row pointing at a missing file fails", () => {
  const files = new Map([
    ["skills/INDEX.md", "| Skill name | Folder | When to use it | Status |\n| --- | --- | --- | --- |\n| Gone | `skills/gone/` | x | ready |\n"],
    ["game-skills/INDEX.md", "| Skill name | Folder | When to use it | Status |\n| --- | --- | --- | --- |\n| Stub | `game-skills/stub/` | x | missing |\n"],
    ["game-skills/stub/SKILL.md", stub],
    ["manifest.json", JSON.stringify({ sources: {} })],
    ["docs/repositories.md", "# Upstream sources\n"],
  ]);
  const { problems } = validate((p) => files.get(p) ?? "", (p) => files.has(p));
  assert.deepEqual(problems, ["skills/gone/SKILL.md: file does not exist"]);
});

test("the real repository passes validation", () => {
  const { problems, readyFolders } = validate();
  assert.deepEqual(problems, []);
  assert.equal(readyFolders.length, 25);
});
