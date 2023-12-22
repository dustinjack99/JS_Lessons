//Connect to our database!
// link docs for postgres, pg library, and inquirer library
// also, stack overflow is your friend

const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "top_songs_db",
  password: "Raptor99!",
  port: 5432,
});

client.connect((err, res) => {
  if (err) throw err;

  console.log(
    `Successfully connected to: ${res.database}. On Thread: ${res.processID}`
  );

  // all database functionality goes here!
  //   selectAllArtists();
  runSearch();
});

const selectAllArtists = async () => {
  client.query("SELECT artist FROM top_5000;", (err, res) => {
    if (err) throw err;

    console.log(res.rows);
    client.end();
  });
};

const inquirer = require("inquirer");

const runSearch = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to search from our Top 5000 songs?",
      choices: [
        "Find songs by artist",
        "Find all artists who have more than one top song",
        "Find all songs within a range",
        "Find a specific song",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Find songs by artist":
          artistSearch();
          break;
        case "Find all artists who have more than one top song":
          //   artistSearch();
          break;
        case "Find all songs within a range":
          //   artistSearch();
          break;
        case "Find a specific song":
          //   artistSearch();
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
        "SELECT * FROM top_5000 WHERE artist = $1",
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
