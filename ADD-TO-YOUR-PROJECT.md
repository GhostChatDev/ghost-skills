# Add the Ghost Skills to your own project

Two ways: run the script (all or some skills), or download the files by hand.
Everything below is copied from **`GhostChatDev/ghost-skills`, branch `main`** —
the files are already merged there (each URL below answered `200` when checked
on 2026-11-25).

---

## Option 1 — the script (recommended)

Download `add-ghost-skills.sh`, then:

```bash
chmod +x add-ghost-skills.sh

# every skill in the manifest (25), into ~/code/my-game
./add-ghost-skills.sh ~/code/my-game

# only the seven library skills
./add-ghost-skills.sh ~/code/my-game \
  --only phaser-2d,zzfx-sound-effects,tonejs-music,motion-ui,animejs-motion,threejs-3d,tsparticles

# copy from another branch (e.g. a pull request's version)
./add-ghost-skills.sh . --ref ghost-code/work-only-in-the-selected-repository-gho-mwwa7nvd
```

It writes into `<your project>/skills/ghost-game-engine/`:

```
skills/ghost-game-engine/
  README.md          the skill index — an agent reads this first
  manifest.json      machine-readable list (id, path, description, tags)
  phaser-2d/SKILL.md
  zzfx-sound-effects/SKILL.md
  tonejs-music/SKILL.md
  motion-ui/SKILL.md
  animejs-motion/SKILL.md
  threejs-3d/SKILL.md
  tsparticles/SKILL.md
  ... (18 more if you copy all)
```

The script lists the skill paths from `manifest.json`, so it stays correct when
the library grows. It stops with an error and a non-zero exit on a bad `--ref`
or an unknown `--only` name.

**What I ran (in a sandbox, against `main`):** default run copied **25** `SKILL.md`
files; `--only` with the seven copied exactly **7**; `--ref no-such-branch-xyz`
printed `FAIL manifest.json — check the --ref name` and exited 1; `--only nope`
printed `Nothing copied` and exited 1.

---

## Option 2 — by hand

Open a URL, tap **Download** (or right-click → Save link as…), and save it as the
path shown. Put each one inside a `SKILL.md` file in that folder.

| Save as | Download |
|---|---|
| `skills/ghost-game-engine/README.md` | https://raw.githubusercontent.com/GhostChatDev/ghost-skills/main/skills/ghost-game-engine/README.md |
| `skills/ghost-game-engine/manifest.json` | https://raw.githubusercontent.com/GhostChatDev/ghost-skills/main/skills/ghost-game-engine/manifest.json |
| `phaser-2d/SKILL.md` | https://raw.githubusercontent.com/GhostChatDev/ghost-skills/main/skills/ghost-game-engine/phaser-2d/SKILL.md |
| `zzfx-sound-effects/SKILL.md` | https://raw.githubusercontent.com/GhostChatDev/ghost-skills/main/skills/ghost-game-engine/zzfx-sound-effects/SKILL.md |
| `tonejs-music/SKILL.md` | https://raw.githubusercontent.com/GhostChatDev/ghost-skills/main/skills/ghost-game-engine/tonejs-music/SKILL.md |
| `motion-ui/SKILL.md` | https://raw.githubusercontent.com/GhostChatDev/ghost-skills/main/skills/ghost-game-engine/motion-ui/SKILL.md |
| `animejs-motion/SKILL.md` | https://raw.githubusercontent.com/GhostChatDev/ghost-skills/main/skills/ghost-game-engine/animejs-motion/SKILL.md |
| `threejs-3d/SKILL.md` | https://raw.githubusercontent.com/GhostChatDev/ghost-skills/main/skills/ghost-game-engine/threejs-3d/SKILL.md |
| `tsparticles/SKILL.md` | https://raw.githubusercontent.com/GhostChatDev/ghost-skills/main/skills/ghost-game-engine/tsparticles/SKILL.md |

For the whole library in one go, download the repository zip and copy the folder:

```bash
curl -L -o ghost-skills.zip https://github.com/GhostChatDev/ghost-skills/archive/refs/heads/main.zip
unzip ghost-skills.zip
cp -r ghost-skills-main/skills/ghost-game-engine ~/code/my-game/skills/
```

---

## Make an agent actually use them

Adding the files is only half of it. An agent reads them when a file tells it to.
Add two lines to the top of your project's `AGENTS.md` (create it if you have none):

```markdown
1. Before any game, audio, animation or effects task, read `skills/ghost-game-engine/README.md`.
2. Then read only the `SKILL.md` files whose row in that index matches the task, and follow every one that matches.
```

If your project already has an `AGENTS.md`, add the lines to its list — don't
replace what's there.

### What is NOT automatic

- **GitHub storage does not enable anything.** Files sitting in a repository are
  plain text; nothing runs them and no agent sees them by itself.
- **Ghost Chat Skills ≠ these files.** Skills switched on in Ghost Chat's *+* menu
  are separate saved instructions. To use one of these in Ghost Chat, paste its
  text into **+ → Skills**, or work in a session that points at this repository /
  a Project holding these files.
- **Other repositories don't inherit them.** Each project needs its own copy (run
  the script there) or a Project that includes them.

---

## What is in each skill

| Skill | Covers | Version written in the skill |
|---|---|---|
| `phaser-2d` | 2D browser games: scenes, input, collisions, cameras, asset loading | Phaser 4.2.1 (Phaser 3 notes included) |
| `zzfx-sound-effects` | Generated sound effects from number arrays, presets, mute and volume | ZzFX 1.4.0 |
| `tonejs-music` | Generated music, loops, the Transport, timing, audio controls | tone 15.1.22 |
| `motion-ui` | Interface animation, transitions, springs, reduced motion | motion 14.14.0 |
| `animejs-motion` | Timelines, SVG animation, animated titles | animejs 4.5.0 |
| `threejs-3d` | 3D scenes, cameras, lights, animation loop, disposal | three 0.187.0 |
| `tsparticles` | Particles, confetti, backgrounds, performance limits | tsParticles 4.6.0 |

Each file follows the same order — **Purpose → When to use it → When not to use
it → Setup and supported version → Steps → Code examples** — then its own
sections for the parts that matter most, always ending with **Common mistakes →
Verification checklist → Upstream references → Licence and attribution → Sources
checked (date)**. Browser audio restrictions, accessibility, reduced motion,
mobile performance and resource cleanup appear wherever they apply (they are
their own headings in the ZzFX and Tone.js skills).

Every library in the set is **MIT licensed**; each skill states what attribution
its licence asks for and links the upstream `LICENSE` file it was read from.
No keys, assets or extra dependencies are included — only Markdown.
