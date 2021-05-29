`Teacher: add everyone as collaborators to the Repo.`

Let's start out by pulling down the code of the lessons. This is how you'll be getting the code from our lessons from here on out - and it's a hell of a lot easier than constantly downloading from something like Google Drive.

Here's the steps to start us off, which will grab the project Repo:
**Repo is short for 'repository', which is the place where our codebase lives.**

1. Go to the GitHub Repo: https://github.com/dustinjack99/JS_Lessons

2. Open your Desktop in the code editor. Then open your VS Code terminal again (CTRL + `).

3. Copy the "git clone" address from the repo. Put it in your terminal, and hit 'Enter'.

This will clone a version of the Repo onto your system. From here, you'll be able to pull down changes and updates I make to the 'Master Branch' of these coding lessons.

`Teacher: Test by changing a file, pushing it, then having everyone pull down the change.`

THAT'S NOT ALL! You, yourselves, will be able to make changes and push them to the repo. Let's test this out! Our first step is making different 'branches' for each of us.

1. Now open the repo you've just cloned in your code editor.

2. (Safety Step) Test and see if the repo is attached to git, type this into your terminals: `git remote -v`

3. Type `git checkout -b <yourname>`. This will create a new branch, with your name.

4. Now, choose a file, any file, then add your name in a comment onto the file.

5. Next, type these three commands, hitting enter after each one. I'll explain them afterwards:

   `git add . ` (include the period)
   `git commit -m "type a comment here"` (put a comment between the quotes)
   `git push origin <your-branch-name>` (type the name of your branch)

git add . -- This "stages" all the changes you've made to the git history.

git commit -- This is the command to finalize your changes, which saves them as a snapshot in time called a 'commit'.

git push origin <branch-name> -- This is the command that actually pushes our branch's changes to our repo online. Once there, git will look for conflicts, resolve them, then merge your branches into the Master.

That's it! Time for questions!

Move onto Homework.md for your homework.
