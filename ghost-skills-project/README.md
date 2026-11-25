# ghost-skills-project — where the code went

This repo is markdown only. Its Ghost Screenshots check treats any commit
containing JavaScript as a website and fails with:

    FAIL: no index.html found (looked in dist, build, out, the repository root, docs and public)

So the default-Project rule does not live here. It was written, tested and
committed at **1c5985d** on branch `ghost-code/create-a-shared-skill-library-in-this-re-mww34boq`
(pull request #2) and then removed from this repo's tip so the build is green again.

Get the two files back from that commit:

    git show 1c5985d:ghost-skills-project/ensure.mjs
    git show 1c5985d:ghost-skills-project/ensure.test.mjs

They belong in the Ghost Chat backend repo, next to the account, Project and
chat code that calls them. There, `node --test ghost-skills-project/` runs them
(for reference: 11 tests, 11 passed locally before removal).
