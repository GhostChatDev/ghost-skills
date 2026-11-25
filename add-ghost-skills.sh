#!/usr/bin/env bash
# add-ghost-skills.sh
# Copy the Ghost Skills game/audio/motion library into your own project.
#
# Usage:
#   ./add-ghost-skills.sh <target-project-dir> [--ref <branch-or-tag>] [--only a,b,c]
#
#   <target-project-dir>  the project you are adding the skills to (default: .)
#   --ref <name>          copy from this branch, tag or commit (default: main)
#   --only a,b,c          copy just these skills (default: every skill in the manifest)
#
# Examples:
#   ./add-ghost-skills.sh ~/code/my-game
#   ./add-ghost-skills.sh ~/code/my-game --only phaser-2d,zzfx-sound-effects
#   ./add-ghost-skills.sh . --ref ghost-code/work-only-in-the-selected-repository-gho-mwwa7nvd
#
# Needs: bash and curl (macOS and Linux have both). Nothing is installed.

set -euo pipefail

TARGET="."
REF="main"
ONLY=""

while [ $# -gt 0 ]; do
  case "$1" in
    --ref)  REF="${2:-}"; shift 2 ;;
    --only) ONLY="${2:-}"; shift 2 ;;
    -h|--help) sed -n '2,20p' "$0"; exit 0 ;;
    *) TARGET="$1"; shift ;;
  esac
done

if [ ! -d "$TARGET" ]; then
  echo "No such folder: $TARGET" >&2
  exit 1
fi

BASE="https://raw.githubusercontent.com/GhostChatDev/ghost-skills/${REF}/skills/ghost-game-engine"
DEST="${TARGET}/skills/ghost-game-engine"
TMP="$(mktemp)"
trap 'rm -f "$TMP"' EXIT

mkdir -p "$DEST"

# 1. The index an agent reads first, and the machine-readable list of skills.
if ! curl -fsS "${BASE}/manifest.json" -o "$TMP"; then
  echo "FAIL manifest.json — check the --ref name (${REF})" >&2
  exit 1
fi
cp "$TMP" "${DEST}/manifest.json"
if ! curl -fsS "${BASE}/README.md" -o "${DEST}/README.md"; then
  echo "FAIL README.md" >&2
  exit 1
fi
echo "ok   README.md (skill index)"
echo "ok   manifest.json"

# 2. Every skill file the manifest lists (or only the ones asked for).
# (the manifest's schema notes also contain the words "SKILL.md", so match real paths only)
PATHS="$(grep -oE '"[a-z0-9][a-z0-9-]*/SKILL\.md"' "$TMP" | tr -d '"' | sort -u)"

if [ -z "$PATHS" ]; then
  echo "FAIL no skill paths found in manifest.json" >&2
  exit 1
fi

copied=0
for p in $PATHS; do
  name="${p%/SKILL.md}"
  if [ -n "$ONLY" ]; then
    case ",${ONLY}," in
      *",${name},"*) : ;;
      *) continue ;;
    esac
  fi
  mkdir -p "${DEST}/${name}"
  if curl -fsS "${BASE}/${p}" -o "${DEST}/${name}/SKILL.md"; then
    printf 'ok   %s/SKILL.md\n' "$name"
    copied=$((copied + 1))
  else
    echo "FAIL ${p}" >&2
    exit 1
  fi
done

if [ "$copied" -eq 0 ]; then
  echo "Nothing copied — check the --only list: ${ONLY}" >&2
  exit 1
fi

echo
echo "Done: ${copied} skills in ${DEST}"
echo "Next: add one line to your project's AGENTS.md:"
echo "  Before any game work, read ${DEST}/README.md and follow every skill that matches the task."
