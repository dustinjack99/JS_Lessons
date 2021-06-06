<!-- Write git commands you learned here :) -->

test test test test

blobs are compressed data and meta data that are stored in objects

echo - prints out in terminal

trees point to directories to blobs and other trees - trees are a snapshot of the repository

commits point to parent commits and to trees

git "file name" -t = print the type of file -p prints the contets

Three areas where code lives: 1. Working area 2. staging area 3. repository

Moving files in & out of staging area:
add a file to next commit - "git add <file>"
delete a file in the next commit - "git rm <file>"
rename a file in the next commit - "git mv <file>"

git add -p: allows you to stage commits in hunk
