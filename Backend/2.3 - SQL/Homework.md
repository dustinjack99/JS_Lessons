Hooray! We're using SQL queries, joins, and getting our hands dirty and covered with CRUD!

Because we haven't dipped into using SQL in our apps yet, today's homework is centered around getting your portfolio websites deployed to the internet! Yay you!

By the way, how's your portfolio website coming? If you haven't started on it, then someone didn't do their homework two weeks ago, and you're going to be doing double the work for this homework ;)

Your homework:

1. You must make a server.js file that serves all the HTML files of your portfolio website. There must be different routes for all three pages.

2. Yes, you can use Express, but that might be overkill for the homework.

3. Each page must have its own route. Ex. - Your About page should be www.mywebsite.com/about.

4. Finally, we're going to be deploying your websites to Heroku, a free web-hosting service that lets you mount and deploy your live apps. It's a wonderful resource for hosting a small portfolio on the interent, and it's the tech we'll use to accomplish this for you.

To deploy your website to Heroku, follow these steps!

- Install Heroku by entering this into the terminal:
  - `npm i -g heroku`
  - check installation with: `heroku -v`
- Initialize your project as a git repo:
  - type `git init` into your vscode terminal, then add and commit your changes. (You do not need to push)
  - add a `.gitignore` file to your project root, and add `node_modules` to your file.

**_ These next steps are important _**

- Make sure your package.json has this line in the "scripts" section:
  - `"start": "node server.js"`
- Ensure your server.js file has a dynamic port number.
  - `const port = process.env.PORT || 3000`
- Your server file has to use path.join() to point to the html being served.

**_ Finally, deploy your project! _**

- Make a Heroku account online:
  - `https://www.heroku.com/`
- Login through the command line:
  - `heroku login`
- Create the app:
  - `heroku create`

TIPS - You can have a github repo and a Heroku repo in the same directory. Don't worry about these conflicting - just remember to push them up seperately if you're using two repos.

** Useful Links **
Messing with MySQL - UW Bootcamp:
`https://bootcampspot.com/sessions/606278/videos/73938`

MySQL Crash Course - Traversy Media:
`https://www.youtube.com/watch?v=9ylj9NR0Lcg&t=2417s`

SQL Fundamentals - Frontend Masters:
`https://frontendmasters.com/courses/sql-fundamentals/`
