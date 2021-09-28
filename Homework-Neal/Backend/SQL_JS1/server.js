// Here is your skeleton command line app!
// To get this up and running, you will need to run npm install
// Next, look on lines 14 and 15 in the 'client' object. You will need to enter in the name and password of your database.

// Run, play around, and familiarize yourself with the code. Good luck!

const inquirer = require("inquirer");
const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  // enter your SQL database / password below
  database: "your-database-name",
  password: "your-database-password",
  port: 5432,
});

client.connect((err, res) => {
  if (err) throw err;
  console.log(
    `Successfully connected to: ${res.database}. On Thread: ${res.processID}`
  );
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to learn?",
      choices: [
        "Find songs by artist",
        "Find all artists who have more than one top song",
        "Find all songs within a range",
        "Find a specfic song",
        "exit",
        //remember, I want three more options a user can choose from!
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Find songs by artist":
          artistSearch();
          break;
        case "Find all artists who have more than one top song":
          findMultipleSongs();
          break;
        case "Find all songs within a range":
          findSongRange();
          break;
        case "Find a specfic song":
          songSearch();
          break;
        default:
          client.end();
      }
    });
};

// Finds all songs from a single artist
const artistSearch = () => {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What's the artist's name?",
    })
    .then((answer) => {
      client.query(
        "SELECT * FROM top5000 WHERE artist = $1",
        [answer.artist],
        (err, res) => {
          if (err) throw err;
          console.log(res.rows);
          client.end();
        }
      );
    });
};

// finish building out these functions by writing SQL queries in JavaScript
const findMultipleSongs = () => {};
const findSongRange = () => {};
const songSearch = () => {};

// Now, write three more query functions that can interperate the data
