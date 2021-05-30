LESSON TIME!

Git is a tool that gives us something called 'version control'. Version control is 100% necessary when you start collaborating with other coders. It basically prevents us from overwriting each others' work, and to warn us when we're touching someone else's code.

Imagine that your team has a codebase, and one of you are working on it. We can think of the codebase, and the changes you are making, as two different 'versions'. Think of them like branches on a tree, like so:

        --------- Your Branch
       /

----------------- Master Branch (original codebase)

Now, what happens when you save your changes? Easy! Your changes merge into the master branch, and your changes become the new master branch, like this:

            Your Branch
        ------------
       /            \  <--(After you save changes, merges into Master)

------------------------ Master Branch

Easy to understand, right? So what happens when you and a friend are working on the same codebase? Two branches are made, like this:

        --------- Your Branch
       /

----------------- Master Branch
\
 --------- Friend Branch

Now what happens when both people change the codebase and merge it? The answer is 'git' will try to resolve this. Most of the time, both versions of the code will be able to merge into the master branch. However, git is here to catch if our changes conflict with each other.

For example, if both of you change line 20 of your index.html file, how are we supposed to know which one is right? Git will catch this conflict before merging the changes into Master Branch, thereby allowing us to determine which version (branch) is the correct one.

It breaks down like this:

        Your Branch
        ---------
       /         \ <--- (attempt to merge)

------------------------------------------ Master Branch
\ / <--- (attempt to merge)

---

Friend Branch

Now let's get our hands dirty! Jump over to Practice.md, and let's see this theory in action.
