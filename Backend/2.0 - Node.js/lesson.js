// step 1: install node.js
// https://nodejs.org/en/

//Client / Server model
// Client's send a request from the front end.
// Server sends a response from the back end.
// Those response objects you've been working with has been from servers.

//Node.js!

// Q: Where does Node live?
// Frontend or Backend??

//What is Node?
// Runtime env for JS that lives outside the browser
// Tradeoffs?
// Some things Node can do, some things a browser can and can't do.

// Most powerful concept of Node is modularization

// *** JUMP TO PRACTICE ***
// --------------------
// *** LESSON PT. 2 ***

// NPM! The best thing ever!
// Node Package Manager - like all the lego sets for free
// https://www.npmjs.com/

//Activity!!
// look around for some fun packages - animations / functionality / ui sets / REACT.... dun dun dun

// npm init
// package.json - instructions on how to run project
// most importantly, will list dependencies

// npm i inquirer
const inquirer = require("inquirer")

console.log(inquirer)
// inquirer
// pay attention to downloads, documentation, links to github
inquirer.prompt([
    {
        name: "Question 1",
        message: "What is your favorite color?",
        type: "input"
    },
    {
        name: "Question 2",
        message: "What is your quest?",
        type: "input"
    },
    {
        name: "Question 3",
        message: "What your SS number?",
        type: "number"
    },
]).then(data => console.log(data));
//*** jump over to practice Pt. 2
