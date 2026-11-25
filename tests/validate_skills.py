#!/usr/bin/env python3
"""Validate the ghost-game-engine shared skill library.

Runs with the Python 3 standard library only, so no dependency is added.

Checks:
  1. skills/ghost-game-engine/manifest.json is valid JSON and follows its own
     documented schema (every skill has id, path, description, tags, engines,
     requires, references).
  2. Every manifest id is unique and its path exists inside the library folder.
  3. Every SKILL.md on disk is listed in the manifest (one canonical copy).
  4. Every skill has all required sections from the task brief.
  5. Internal Markdown links in AGENTS.md, README.md, PROJECT-INSTRUCTIONS.md,
     skills/INDEX.md and docs/**/*.md point at files that exist.

Usage: python3 tests/validate_skills.py [repository root]
Prints "OK: ..." and exits 0 when every check passes, otherwise prints one
"FAIL: ..." line per problem and exits 1.
"""

import json
import os
import re
import sys

LIBRARY = os.path.join("skills", "ghost-game-engine")

# The sections the brief requires, as pairs of (label, heading pattern).
REQUIRED_SECTIONS = [
    ("name and purpose", r"^# .+"),
    ("purpose", r"^## Purpose\s*$"),
    ("when to use it and when not to use it", r"^## When not to use it\s*$"),
    ("required inputs and prerequisites", r"^## Required inputs and prerequisites\s*$"),
    ("step-by-step instructions", r"^## Steps\s*$"),
    ("upstream references", r"^## Upstream references\s*$"),
    ("compatibility and licence cautions", r"^## Compatibility and licence cautions\s*$"),
    ("acceptance criteria and verification", r"^## Acceptance criteria and verification\s*$"),
    ("known limitations", r"^## Known limitations\s*$"),
]

MANIFEST_FIELDS = ["id", "path", "description", "tags", "engines", "requires", "references"]

LINK_FILES = [
    "AGENTS.md",
    "README.md",
    "PROJECT-INSTRUCTIONS.md",
    os.path.join("skills", "INDEX.md"),
]

errors = []


def fail(message):
    errors.append(message)


def read(path):
    with open(path, "r", encoding="utf-8") as handle:
        return handle.read()


def markdown_files(root, folder):
    found = []
    base = os.path.join(root, folder)
    if not os.path.isdir(base):
        return found
    for name in sorted(os.listdir(base)):
        if name.endswith(".md"):
            found.append(os.path.join(folder, name))
    return found


def main():
    root = sys.argv[1] if len(sys.argv) > 1 else "."
    os.chdir(root)

    manifest_path = os.path.join(LIBRARY, "manifest.json")
    if not os.path.isfile(manifest_path):
        print("FAIL: %s is missing" % manifest_path)
        return 1

    try:
        manifest = json.loads(read(manifest_path))
    except ValueError as error:
        print("FAIL: %s is not valid JSON: %s" % (manifest_path, error))
        return 1

    if "schema" not in manifest:
        fail("manifest.json has no schema block documenting its fields")
    skills = manifest.get("skills")
    if not isinstance(skills, list) or not skills:
        fail("manifest.json has no skills list")
        return report()

    listed = set()
    seen_ids = set()
    for entry in skills:
        if not isinstance(entry, dict):
            fail("manifest.json has a skill entry that is not an object")
            continue
        missing = [field for field in MANIFEST_FIELDS if field not in entry]
        if missing:
            fail("manifest entry %r is missing fields: %s" % (entry.get("id"), ", ".join(missing)))
            continue
        skill_id = entry["id"]
        if skill_id in seen_ids:
            fail("manifest id %r is used more than once" % skill_id)
        seen_ids.add(skill_id)

        relative = entry["path"].lstrip("./")
        full = os.path.join(LIBRARY, relative)
        listed.add(os.path.normpath(full))
        if not os.path.isfile(full):
            fail("manifest id %r points at a missing file: %s" % (skill_id, full))
            continue

        text = read(full)
        lines = text.splitlines()
        for label, pattern in REQUIRED_SECTIONS:
            regex = re.compile(pattern)
            if not any(regex.match(line) for line in lines):
                fail("%s has no section for %s" % (full, label))
        if "MISSING." in text:
            fail("%s still contains a MISSING placeholder" % full)

    on_disk = set()
    base = LIBRARY
    if os.path.isdir(base):
        for name in sorted(os.listdir(base)):
            candidate = os.path.join(base, name, "SKILL.md")
            if os.path.isfile(candidate):
                on_disk.add(os.path.normpath(candidate))
    for path in sorted(on_disk - listed):
        fail("%s exists but is not listed in manifest.json" % path)
    for path in sorted(listed - on_disk):
        fail("%s is listed in manifest.json but missing on disk" % path)

    index_path = os.path.join("skills", "INDEX.md")
    if not os.path.isfile(index_path):
        fail("skills/INDEX.md is missing")
    else:
        index_text = read(index_path)
        for skill_id in sorted(seen_ids):
            if skill_id not in index_text:
                fail("skills/INDEX.md does not mention %r" % skill_id)

    files = list(LINK_FILES)
    files += markdown_files(".", "docs")
    files += markdown_files(".", os.path.join("docs", "ghost-game-engine"))
    for relative in files:
        if not os.path.isfile(relative):
            fail("expected file is missing: %s" % relative)
            continue
        for target in re.findall(r"\]\(([^)#]+\.md)(?:#[^)]*)?\)", read(relative)):
            if target.startswith(("http://", "https://", "mailto:")):
                continue
            resolved = os.path.normpath(os.path.join(os.path.dirname(relative), target))
            if not os.path.isfile(resolved):
                fail("%s links to a missing file: %s" % (relative, target))

    return report(len(skills), len(on_disk))


def report(skill_count=0, file_count=0):
    if errors:
        for message in errors:
            print("FAIL: %s" % message)
        print("%d problem(s) found." % len(errors))
        return 1
    print(
        "OK: %d skills in manifest.json, %d SKILL.md files on disk, all required "
        "sections present, manifest and files agree, internal links resolve."
        % (skill_count, file_count)
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
