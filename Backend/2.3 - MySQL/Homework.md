5. Deploy to Heroku using this guide!
    - Install Heroku by entering this into the terminal:
        + `npm i -g heroku`
        + check installation with: `heroku -v`
    - Initial your project as a git repo:
        + type `git init` into your vscode terminal, then add and commit your changes. (You do not need to push)
        + add a `.gitignore` file to your project root, and add `node_modules` to your file. 
    - Make sure your package.json has this line in the "scripts" section:
        + `"start": "node server.js"`
    - Make a Heroku account online and login through the command line:
        + `heroku login`
    - Create the app:
        + `heroku create`
    - Ensure your server.js file has a dynamic port number. 
        + `const port = process.env.PORT || 3000`
    - Your files use path.join() to point to the html being served.

** Useful Links **
Messing with MySQL - UW Bootcamp:
`https://bootcampspot.com/sessions/606278/videos/73938`

MySQL Crash Course - Traversy Media:
`https://www.youtube.com/watch?v=9ylj9NR0Lcg&t=2417s`

SQL Fundamentals - Frontend Masters:
`https://frontendmasters.com/courses/sql-fundamentals/`
