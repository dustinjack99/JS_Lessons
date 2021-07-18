<!-- Write git commands you learned here :) -->

check version: git --version
asking for SHA1 hash-number of blob contents: git hash-object --stdin (get this from standard-input, rather than a file)
git init - directory info

echo 'Hello, World!" | git hash-object --stdin

git cat-file -t ###### (type) and -p (print the contents)

tree .git

git log --oneline
//cat .git/refs/master?
cat .git/HEAD - find directory/repository head file

git ls .git/objects

(ls = list files)

git commit -m "Commit Name/Comment"
git --help
git branch BRANCHNAME: create new branch

git add (filename/extension) - add file to next commit
git add -p (filename) - stage commit in hunks/partial commit
git rm (filename/extension) - remove file from next commit
git mv (filename/extension) - rename file in next commit (mv = move)

git stash: save uncommitted work, keeping it safe from destructive operations

git stash list: list changes to stash
git stash show stash@{0}: show stash contents
git stash apply: apply last stash
git stash apply stash@{0}: apply specific stash
git stash --include-untracked: keep untracked files*
git stash --all: keep all files (even ignored files)
git stash save "stash name": name stash for reference*
git stash branch <optional branch name>: start new branch from stash
git checkout <stash name> -- <filename>: grab single file from a stash (if file has changes in working area, running this command will overwrite that file with the one from the stash)

git stash pop : remove last stash, apply changes (unless there's a merge conflict)
git stash drop: remove last stash
git stash drop stash@{n} remove nth stash
git stash clear: remove all stashes
git stash list\*
git stash show stash@{n}
-p commands also work with stashing

git checkout master
cat .git/HEAD: see branch currently working on/HEAD's current pointing
git checkout <branchname> switch to branch <branchname>
