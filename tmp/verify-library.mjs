// Throwaway checker: proves the installed library is internally consistent.
// Node built-ins only. No network, no packages. Run from /tmp.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2];
const lib = join(root, 'skills/ghost-game-engine');
const fail = [];
const ok = (m) => console.log('ok   ' + m);
const bad = (m) => { fail.push(m); console.log('FAIL ' + m); };

// 1. manifest parses and its paths exist
const manifest = JSON.parse(readFileSync(join(lib, 'manifest.json'), 'utf8'));
if (!Array.isArray(manifest.skills)) bad('manifest has no skills array');
const ids = new Set();
let missingPath = 0;
for (const s of manifest.skills) {
  for (const f of ['id', 'path', 'description', 'tags', 'engines', 'requires', 'references']) {
    if (!(f in s)) bad(`manifest entry ${s.id ?? '?'} has no "${f}"`);
  }
  if (ids.has(s.id)) bad(`duplicate manifest id ${s.id}`);
  ids.add(s.id);
  if (!existsSync(join(lib, s.path))) { missingPath++; bad(`manifest path missing: ${s.path}`); }
}
if (missingPath === 0) ok(`every manifest path exists (${manifest.skills.length} entries)`);
if (manifest.skills.length !== 20) bad(`expected 20 skills, manifest has ${manifest.skills.length}`);
else ok('manifest lists 20 skills');

// 2. every SKILL.md has the 9 required sections
const sections = [
  ['purpose'], ['when to use'], ['when not'], ['required inputs'],
  ['step'], ['upstream reference'], ['compat'], ['acceptance'], ['known limitation'],
];
const dirs = readdirSync(lib, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
let sectionFails = 0;
for (const d of dirs) {
  const p = join(lib, d, 'SKILL.md');
  if (!existsSync(p)) { bad(`${d}: no SKILL.md`); sectionFails++; continue; }
  const text = readFileSync(p, 'utf8').toLowerCase();
  for (const alts of sections) {
    if (!alts.some((a) => text.includes(a))) { bad(`${d}: no section matching "${alts[0]}"`); sectionFails++; }
  }
}
if (sectionFails === 0) ok(`all ${dirs.length} SKILL.md files carry the 9 required sections`);

// 3. manifest and folders agree in both directions
const listed = new Set(manifest.skills.map((s) => s.path.split('/')[0]));
for (const d of dirs) if (!listed.has(d)) bad(`folder ${d} has no manifest entry`);
if (dirs.length === listed.size) ok('every skill folder is in the manifest');

// 4. local links inside the library README and skills/INDEX.md resolve
function checkLinks(file, base) {
  if (!existsSync(file)) { bad(`missing file ${file}`); return; }
  const text = readFileSync(file, 'utf8');
  let n = 0;
  for (const m of text.matchAll(/\]\(([^)#:]+)(?:#[^)]*)?\)/g)) {
    const target = m[1].trim();
    if (target.startsWith('http') || target.startsWith('mailto')) continue;
    n++;
    if (!existsSync(join(base, target))) bad(`${file}: broken link ${target}`);
  }
  return n;
}
const libLinks = checkLinks(join(lib, 'README.md'), lib);
const idxLinks = checkLinks(join(root, 'skills/INDEX.md'), join(root, 'skills'));
ok(`checked ${libLinks} links in library README and ${idxLinks} in skills/INDEX.md`);

// 5. INDEX rows: ready/missing status present on every row
const idx = readFileSync(join(root, 'skills/INDEX.md'), 'utf8');
const rows = idx.split('\n').filter((l) => l.startsWith('|') && !l.includes('---') && !l.includes('Skill name'));
let rowFails = 0;
for (const r of rows) {
  if (!/\| (ready|missing) \|\s*$/.test(r)) { bad(`INDEX row without status: ${r.slice(0, 60)}`); rowFails++; }
}
if (rowFails === 0) ok(`all ${rows.length} INDEX rows have a ready/missing status`);

// 6. stubs say MISSING and do not carry invented rules
for (let i = 6; i <= 13; i++) {
  const p = join(root, `skills/skill-${String(i).padStart(2, '0')}/SKILL.md`);
  const t = existsSync(p) ? readFileSync(p, 'utf8') : '';
  if (!t.includes('MISSING')) bad(`skill-${i} stub does not say MISSING`);
}
ok('skill-06 to skill-13 are MISSING stubs');

console.log(fail.length === 0 ? `\nPASS: ${fail.length} problems` : `\nFAILURES: ${fail.length}`);
process.exit(fail.length === 0 ? 0 : 1);
