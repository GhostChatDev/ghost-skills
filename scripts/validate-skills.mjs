// Checks the skill libraries in this repository. No dependencies.
// Usage: node scripts/validate-skills.mjs   (exit 1 on any problem)
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export const LIBRARIES = [
  { name: "writing", index: "skills/INDEX.md" },
  { name: "game development", index: "game-skills/INDEX.md" },
];

export const STUB_TEXT = "MISSING";

// Reads a table row: | name | `folder` | when | status |
export function parseIndex(text) {
  const rows = [];
  for (const line of text.split("\n")) {
    const t = line.trim();
    if (!t.startsWith("|") || t.startsWith("| ---") || t.startsWith("| Skill name")) continue;
    const cells = t.split("|").map((c) => c.trim()).filter((c) => c.length > 0);
    if (cells.length < 4) continue;
    const folder = cells[1].replace(/`/g, "");
    rows.push({ name: cells[0], folder, when: cells[2], status: cells[3] });
  }
  return rows;
}

export function checkSkillFile(path, status, read = (p) => readFileSync(resolve(ROOT, p), "utf8")) {
  const problems = [];
  if (!existsSync(resolve(ROOT, path))) {
    problems.push(`${path}: file does not exist`);
    return problems;
  }
  const text = read(path);
  if (!/^#\s+Skill:\s+\S/m.test(text)) problems.push(`${path}: missing "# Skill: <name>" heading`);
  if (status === "ready") {
    if (!/^Name:\s+\S/m.test(text)) problems.push(`${path}: missing "Name: <name>" line`);
    if (text.includes(STUB_TEXT)) problems.push(`${path}: marked ready but still holds the MISSING stub`);
  } else if (status === "missing") {
    if (!text.includes(STUB_TEXT)) problems.push(`${path}: marked missing but has no MISSING line`);
  } else {
    problems.push(`${path}: unknown status "${status}" (use ready or missing)`);
  }
  return problems;
}

export function validate(read = (p) => readFileSync(resolve(ROOT, p), "utf8"), exists = (p) => existsSync(resolve(ROOT, p))) {
  const problems = [];
  const readyFolders = [];
  for (const lib of LIBRARIES) {
    if (!exists(lib.index)) {
      problems.push(`${lib.index}: library index missing`);
      continue;
    }
    const rows = parseIndex(read(lib.index));
    if (rows.length === 0) problems.push(`${lib.index}: no skill rows found`);
    for (const row of rows) {
      const file = `${row.folder}/SKILL.md`;
      problems.push(...checkSkillFile(file, row.status, read));
      if (row.status === "ready") readyFolders.push(row.folder);
    }
  }

  if (!exists("manifest.json")) {
    problems.push("manifest.json: missing");
    return { problems, readyFolders };
  }
  let manifest;
  try {
    manifest = JSON.parse(read("manifest.json"));
  } catch (error) {
    problems.push(`manifest.json: not valid JSON (${error.message})`);
    return { problems, readyFolders };
  }
  for (const [repo, entry] of Object.entries(manifest.sources ?? {})) {
    if (entry.skill === null) continue;
    if (!exists(`${entry.skill}/SKILL.md`)) problems.push(`manifest.json: ${repo} points at a missing skill folder ${entry.skill}`);
  }
  if (!exists("docs/repositories.md")) problems.push("docs/repositories.md: missing (every licence and version claim lives there)");
  return { problems, readyFolders };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { problems, readyFolders } = validate();
  if (problems.length > 0) {
    console.error(problems.map((p) => `FAIL: ${p}`).join("\n"));
    process.exit(1);
  }
  console.log(`OK: ${readyFolders.length} ready skills, indexes, stubs and manifest agree.`);
}
