//write your DB code here!

//make a seed file!
//work together to make a seed file for the .csv file you all have.
//raw_total, raw_usa, raw_uk, raw_eu, raw_row
//Make sure you assign a PRIMARY KEY :)

const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "top_songs_db",
  password: "password",
  port: 5432,
});

client.connect((err, res) => {
  if (err) throw err;

  console.log(`Successfully connected to: ${res.database}. On Thread: ${res.processID}`);

  // all database functionality goes here
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
      message: "What would you like to search from our top 5000 songs?",
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
          findMultipleSongs();
          break;
        case "Find all songs within a range":
          findSongRange();
          break;
        case "Find a specific song":
          findSong();
          break;
        case "Exit":
          client.end();
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

const findMultipleSongs = () => {
  inquirer
    .prompt({
      name: "multiple",
      type: "input",
      message: "Minimum number of songs in top 5000?",
    })
    .then((answer) => {
      client.query(
        "SELECT * FROM top_5000 WHERE ", // Write function that says select the top 5000 then take the number from multiple against the array of top 5000 and return the results,
        [answer.multiple],
        (err, res) => {
          if (err) throw err;
          console.log(res.rows);
          client.end();
        }
      );
    });
};

const findSongRange = () => {
  inquirer
    .prompt([
      {
        name: "range",
        type: "number",
        message: "Find all songs within two ranks. Begin at rank...?",
      },
      { name: "end", type: "number", message: "and ending at rank...?" },
    ])
    .then((answer) => {
      client.query(
        // proud I figured this one out
        "SELECT position, artist, song, year FROM top_5000 WHERE position BETWEEN $1 AND $2",
        [answer.range, answer.end],
        (err, res) => {
          if (err) throw err;
          console.log(res.rows);
          client.end();
        }
      );
    });
};
const findSong = () => {
  inquirer
    .prompt({
      name: "title",
      type: "input",
      message: "Song title?",
    })
    .then((answer) => {
      client.query(
        "SELECT * FROM top_5000 WHERE song = $1",
        [answer.title],
        (err, res) => {
          if (err) throw err;
          console.log(res.rows);
          client.end();
        }
      );
    });
};
