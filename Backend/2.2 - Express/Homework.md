Express! The best way to handle API routing, and to get your backend server up and running in no time!

Express is a fantastic way to write dynamic rules to your APIs, and scale them up dramatically. 

We've also written a basic app that GETs and POSTs data to your API! Your homework is to do the same!

I want you to write an app with it's own backend API with Express. 

1. You must GET / POST data from the dummy database.json file provided.

2. Your app must be able to GET information based on dynamic /api/ routes. 
    - Example: If I navigate to /api/characters/baby-yoda, I want to see the info for /baby-yoda. 
    - Extra credit: We've seen the routes serve up JSON data - now turn that into an HTML webpage. 

3. The website must be fully styled, make it look pretty.

4. The site only needs to be one HTML page - all it needs it to POST data to your API.

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

** Useful Links **
Express Yourself - UW Bootcamp:
`https://bootcampspot.com/sessions/606280/videos/73475`

Express JS Crash Course - Traversy Media:
`https://www.youtube.com/watch?v=L72fhGm1tfE&t=300s`

API Design in Node.js - Frontend Masters:
`https://frontendmasters.com/courses/api-design-nodejs-v3/`
