## 🔖 My Notes - Kaş Guide

23.12.25 The main structure of the site was completed. We started entering content. In the first phase, proceeding with the list provided by ChatGPT will also increase visibility.

## -------------------------------------------------------------------







## -------------------------------------------------------------------

## 🔖 Stable Snapshot – kasguide-241225-stable-v1.0

This project uses Git tags to preserve stable snapshots without affecting active development.

Purpose:
- Frozen, stable state as of 24.12.25
- Not deployed
- Safe rollback and reference point

Prerequisites:
- Ensure all changes are committed
- Working tree must be clean

Commands:

$ git status
# working tree clean

Create the annotated stable tag:
$ git tag -a kasguide-241225-stable-v1.0 -m "Kas Guide – 241225 Stable Version 1.0"

Verify the tag locally:
$ git tag
$ git show kasguide-241225-stable-v1.0

Push the tag to remote (GitHub):
$ git push origin kasguide-241225-stable-v1.0

Important:
- If the tag is not pushed, it will remain local only.

How to return to this snapshot later:

Checkout (read-only, detached HEAD):
$ git checkout kasguide-241225-stable-v1.0

Create a new branch from this snapshot:
$ git checkout -b hotfix-from-241225 kasguide-241225-stable-v1.0

Notes:
- Tags are immutable snapshots (unlike branches)
- Ideal for marking stable milestones before major refactors
- Active development should continue on a branch (e.g. dev)

## -------------------------------------------------------------------