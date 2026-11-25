// The Ghost Skills default-Project rule, as plain runnable logic.
//
// This file is the rule, not a sign-up system. It is written so it can be
// lifted into the real Ghost Chat backend (the account, Project and chat
// tables) without changing its shape: the store is the only thing that has to
// be swapped for the real database.
//
// The instructions are passed in, never fetched: the caller reads the built
// copy of PROJECT-INSTRUCTIONS.md at build time and hands it over.

export const GHOST_SKILLS_NAME = "Ghost Skills";

/**
 * Make sure the account has exactly one default "Ghost Skills" Project.
 *
 * Called at signup and on every sign-in. Safe to call any number of times:
 * - no default Project  -> create exactly one
 * - one default Project -> leave it, repair its instructions if empty
 * - several defaults    -> keep the oldest, delete the rest, leave one
 *
 * @param {object} store   the account's Project storage
 * @param {string} userId  the account
 * @param {string} instructions  the text of PROJECT-INSTRUCTIONS.md
 * @returns {object} the one default Project
 */
export function ensureGhostSkillsProject(store, userId, instructions) {
  if (!store || typeof store.listDefaults !== "function") {
    throw new Error("ensureGhostSkillsProject: store must have listDefaults()");
  }
  if (!userId) throw new Error("ensureGhostSkillsProject: userId is required");
  if (typeof instructions !== "string" || instructions.trim() === "") {
    throw new Error(
      "ensureGhostSkillsProject: instructions must be the built PROJECT-INSTRUCTIONS.md",
    );
  }

  const defaults = store.listDefaults(userId);

  // Several defaults (a crash mid-create, two sign-ins racing): keep one.
  if (defaults.length > 1) {
    const [keep, ...extra] = [...defaults].sort((a, b) => a.id - b.id);
    for (const project of extra) store.remove(project.id);
    if (!keep.instructions) store.setInstructions(keep.id, instructions);
    return store.get(keep.id);
  }

  if (defaults.length === 1) {
    const only = defaults[0];
    if (!only.instructions) store.setInstructions(only.id, instructions);
    return store.get(only.id);
  }

  // Nothing yet: create exactly one. The store's unique index on
  // (user_id, is_default) is what makes a second create impossible.
  const id = store.create({
    userId,
    name: GHOST_SKILLS_NAME,
    isDefault: true,
    instructions,
  });
  return store.get(id);
}

/**
 * An in-memory stand-in for the Projects table. The real backend replaces this
 * with its own data access; the rule above never talks to SQL directly.
 */
export function createMemoryStore(log = []) {
  let nextId = 1;
  const rows = new Map();

  return {
    rows,
    log,
    create(project) {
      // Mirrors the unique index (user_id, is_default) in the real schema.
      if (project.isDefault) {
        for (const row of rows.values()) {
          if (row.userId === project.userId && row.isDefault) {
            const error = new Error("duplicate default project for user");
            error.code = "UNIQUE_DEFAULT";
            throw error;
          }
        }
      }
      const id = nextId++;
      rows.set(id, { id, ...project });
      log.push(["create", id, project.userId]);
      return id;
    },
    get(id) {
      const row = rows.get(id);
      return row ? { ...row } : null;
    },
    listDefaults(userId) {
      return [...rows.values()].filter((r) => r.userId === userId && r.isDefault);
    },
    remove(id) {
      rows.delete(id);
      log.push(["remove", id]);
    },
    setInstructions(id, instructions) {
      const row = rows.get(id);
      if (row) row.instructions = instructions;
      log.push(["setInstructions", id]);
    },
    countDefaults(userId) {
      return this.listDefaults(userId).length;
    },
  };
}

/**
 * Where a new chat lands when the person has not chosen a Project.
 * Returns the default Project, or null if the account has none yet.
 */
export function defaultProjectFor(store, userId) {
  const defaults = store.listDefaults(userId);
  if (defaults.length === 0) return null;
  return [...defaults].sort((a, b) => a.id - b.id)[0];
}
