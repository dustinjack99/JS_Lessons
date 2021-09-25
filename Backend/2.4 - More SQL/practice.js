// npm init
// npm i pg

const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "top_songsdb",
  password: "Raptor99!",
  port: 5432,
});

client.connect((err, res) => {
  if (err) throw err;
  console.log(
    `Successfully connected to: ${res.database}. On Thread: ${res.processID}`
  );
  //   selectAllAuthors();
  runSearch();
});

// const selectAllAuthors = async () => {
//   client.query("SELECT * FROM authors;", (err, res) => {
//     if (err) {
//       throw err;
//     }
//     console.log(res.rows);
//     client.end();
//   });
// };

// guard against SQL injections
// const selectAllAuthors = async () => {
//   client.query("SELECT * FROM authors WHERE id = $1", [2], (err, res) => {
//     if (err) {
//       throw err;
//     }
//     console.log(res.rows);
//     client.end();
//   });
// };

//make seed file
//copy csv file
//COPY top5000
// FROM '/Users/dustinjackson/Desktop/CodingLessons/Backend/2.4 - More SQL/TopSongs.csv'
// DELIMITER ','
// CSV HEADER;

// inquirer integration
// npm i inquirer
const inquirer = require("inquirer");
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

const findMultipleSongs = () => {};
const findSongRange = () => {};
const songSearch = () => {};
