import os

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def rd(p):
    with open(os.path.join(root, p), encoding="utf-8") as f:
        return f.read()


def title(p):
    return rd(p).split("\n", 1)[0].strip("# \n").replace("Skill: ", "")


five = ["explain-like-im-new", "social-media", "planner", "marketing-copy", "clear-writer"]
gg = os.path.join(root, "skills", "ghost-game-engine")
game = [d for d in sorted(os.listdir(gg)) if os.path.isfile(os.path.join(gg, d, "SKILL.md"))]
files = ["skills/%s/SKILL.md" % n for n in five] + [
    "skills/ghost-game-engine/%s/SKILL.md" % d for d in game
]

when = {
    "explain-like-im-new": "The user is new, a term needs plain words, or they ask how do I.",
    "social-media": "Writing posts for X, Instagram, LinkedIn, Reddit or TikTok.",
    "planner": "Turning a goal into steps, a checklist or a schedule.",
    "marketing-copy": "Ads, landing pages, emails or promo copy that sells without hype.",
    "clear-writer": "Rewriting or editing text so it is clear, short and friendly.",
}

gwhen = {
    "game-planning-and-scope": "A game is asked for; scope, milestones or a cut list must be decided before code.",
    "engine-selection": "A game is requested and no engine is chosen, or someone asks which engine to use.",
    "phaser-2d": "A fuller 2D browser game with scenes, physics and an asset loader.",
    "littlejs-small-games": "A small, compact browser game that must load fast and stay tiny.",
    "threejs-3d": "3D in the browser: a world, a camera, lighting or 3D models.",
    "pixijs-rendering": "Custom 2D drawing where rendering is the point and no full engine is wanted.",
    "tilemaps-and-level-design": "Levels on a grid: tiles, Tiled maps, collision layers, spawn points.",
    "enemy-ai-and-behavior-trees": "Enemies that chase, patrol, flee or act in phases, and the trees behind them.",
    "dialogue-and-narrative": "Dialogue lines, branching conversations, Yarn files or story text.",
    "procedural-world-generation": "Worlds, levels or rooms made by code from a seed.",
    "animation-and-game-feel": "Tweening, easing, squash and stretch, screen shake, hit pause.",
    "retro-sound-effects": "Short chiptune-style effects: jump, hit, pickup, explosion.",
    "music-and-audio-playback": "Background music, volume, muting and looping sound in a browser game.",
    "multiplayer-with-colyseus": "Two or more players in one session, with rooms and server state.",
    "turn-based-with-boardgameio": "Turn-based or card games with moves, turns and validated state.",
    "asset-pipeline-and-licensing": "Before adding an image, font, sound or model: its source and its licence.",
    "web-game-testing": "Before calling a browser game done: what to play, click and check.",
    "performance-and-accessibility": "The game stutters, loads slowly, or must work with a keyboard and a screen reader.",
    "release-and-documentation": "Shipping: README, controls, credits, build steps and a licence note.",
    "unity-and-desktop-tool-boundaries": "Unity, desktop editors or MCP bridges are mentioned and the limits must be explained.",
}

rules = """This Project shares a skill library, carried by PROJECT-BUNDLE.md in this Project.
Before you answer or write any code:
1. Read the index in section 3 of PROJECT-BUNDLE.md. It lists every skill with its
   folder and when to use it.
2. Read the full text of the skills that match the task. Reading is not applying:
   apply the ones that match, and say which ones you used.
3. Follow every skill that matches. If I name a skill, follow that one first, then
   the others that match. Never drop a skill to be shorter.
4. Licence questions: read section 5 of PROJECT-BUNDLE.md. A blank cell means it was
   not read, so say that; never state a licence from memory.
5. Never invent a skill. If a skill is missing, say so and ask me for its real text."""

L = []
add = L.append
add("# PROJECT-BUNDLE: Ghost Skills\n")
add("One file to upload to a Ghost Chat Project. Once it is there, every chat and every")
add("Ghost Code session inside that Project can read it.\n")
add("It carries everything an agent needs on its own: the rules, the index, all %d skills" % len(files))
add("in full, and the upstream licence table the game skills point at. Nothing else has")
add("to be uploaded, and no file path outside this one is needed.\n")
add("How to use it:\n")
add("1. Open the Project in Ghost Chat (sidebar, then Projects).")
add("2. Add this one file to the Project files.")
add("3. Paste section 1 into the Project instructions.")
add("4. Paste section 2 into the Project instructions, under it.")
add("5. Start a chat or a Ghost Code session inside the Project.\n")
add("This file is a copy. The source of truth is `skills/` and `docs/` in the repository.")
add("If the two disagree, the repository wins and this file is rebuilt from it.\n")
add("Contents: the rules, an index of %d skills, the %d skills in full (5 writing, %d game),"
    % (len(files), len(files), len(game)))
add("and the upstream source rows.\n")
add("## 1. Rules to paste into the Project instructions\n")
add("```text\n" + rules + "\n```\n")
add("## 2. Instruction block\n")
add("```text\n" + rd("PROJECT-INSTRUCTIONS.md").strip() + "\n```\n")
add("## 3. Index: every skill, its folder, when to use it, status\n")
add("| Skill name | Folder | When to use it | Status |")
add("| --- | --- | --- | --- |")
for n in five:
    add("| %s | `skills/%s/` | %s | ready |" % (title("skills/%s/SKILL.md" % n), n, when[n]))
for d in game:
    add(
        "| %s | `skills/ghost-game-engine/%s/` | %s | ready |"
        % (title("skills/ghost-game-engine/%s/SKILL.md" % d), d, gwhen.get(d, "Game-development task that matches this skill."))
    )
add("")
add("Every row says `ready`: the rules are written in full. This library has no empty")
add("placeholder skills.\n")
add("## 4. The skills, in full\n")
for i, f in enumerate(files, 1):
    add("### Skill %d: %s\n" % (i, title(f)))
    add("Repository file: `%s`\n" % f)
    add(rd(f).strip() + "\n")
add("## 5. Upstream sources and licences\n")
add("The game skills point here for every licence question. Read the row before you name")
add("a licence. A blank cell means it was not read: say so, do not guess.\n")
rep = rd("docs/repositories.md")
add(rep[rep.index("| Repository |"):].strip())

text = "\n".join(L) + "\n"
out = os.path.join(root, "project", "PROJECT-BUNDLE.md")
os.makedirs(os.path.dirname(out), exist_ok=True)
with open(out, "w", encoding="utf-8") as f:
    f.write(text)
print("bytes", len(text), "skills", len(files), "index rows", text.count("\n| "),
      "licence table", "| Source" in text)
