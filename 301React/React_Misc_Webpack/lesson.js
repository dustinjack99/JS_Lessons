//Why webpack??

// When we learn React, we're going to be writing JS that the browser doesn't inherantly understand.
// Specifically, we're going to be writing a very special type of JavaScript, called JSX - JavaScript XML
// We need to turn our frontend JS into something the browser can understand.

// Webpack also gives us a lot of other optimization tools:
// 1. You can have multiple JS files, and smash them together in a single bundled file

// npm init -y
// - npm i webpack webpack-cli -D

// add "build": "webpack --watch" to scripts in package.json

// make webpack.config.js

// npm run build

// EXAMPE 1:
// point the html file to app.js and write ES6 import with addFunction, then run webpack and point to bundled version.
// Your app not only brings all the JS files together, you can now import / export JS code.
// You can modularize your JS code on the frontend!
// Now you only need to link and worry about one JS file.

//

// bring up that app.js is never shipped out to people - you must keep it, build, then send out the dist folder.

// What else can webpack do for us?

// 1. Can also build html, css, and other media resources like fonts, images, pdfs.
// 2. Can optimize = Can minify your css, JS files, which will make your apps even faster.
// 3. Can install plugins into it, like babel and TypeScript.
// TypeScript, though amazing, is not something the browser can understand, just like React. Webpack is also how we can use things like TS.
