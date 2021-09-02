// Write your inquirer quiz app here!
const inquirer = require("inquirer");
inquirer
  .prompt([
    { name: "Question 1", message: "What is your favorite color?", type: "input" },
  ])
  .then((data) => console.log(data));
