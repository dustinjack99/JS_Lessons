"use strict";
const inquirer = require("inquirer");

console.log("Wild Wild West Wonders");

const questions = [
  {
    type: "confirm",
    name: "Cowboy?",
    message: "So, you think you can be a Cowboy?",
    default: false,
  },
  {
    type: "list",
    name: "Horsey",
    message: "What color horse do you need?",
    choices: ["Brown", "White", "Clear"],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: "input",
    name: "Spitters",
    message: "How many spatoons do you need in a proper saloon?",
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || "Please enter a number";
    },
    filter: Number,
  },
  {
    type: "expand",
    name: "Guns",
    message: "What kind of gun do you want to sling?",
    choices: [
      {
        key: "p",
        name: "Pistol",
        value: "Sixshooter",
      },
      {
        key: "r",
        name: "Rifle",
        value: "Boltaction",
      },
      {
        key: "b",
        name: "Bag of cow pies",
        value: "poop",
      },
    ],
  },
  {
    type: "rawlist",
    name: "Greetings",
    message: "How does your cowboy greet a fellow cowboy",
    choices: ["Howdy", "Partner", "There's a snake in my boot"],
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log("\nCowboy results");
  console.log(JSON.stringify(answers, null, "  "));
});
