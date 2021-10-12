//write your DB code here!

const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "top_songs_db",
  password: "postgres",
  port: 5432,
});

client.connect((err, res) => {
  if (err) throw err;

  console.log(
    `Successfully connected to: ${res.database}. On Thread: ${res.processID}`
  );

  // all database functionality goes here, after the connection is established.
  //   selectAllArtists();
  runSearch();
});

// const selectAllArtists = async () => {
//   client.query("SELECT artist FROM top_5000;", (err, res) => {
//     if (err) throw err;
//     console.log(res.rows);
//     client.end();
//   });
// };

const inquirer = require("inquirer");

const runSearch = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message:
        "What would you like to search from our database of the Top 5000 Songs, other than 'White Christmas' by Bing Crosby? (QUERIES ARE CASE-SENSITIVE)",
      choices: [
        "Find songs by Artist",
        "Find all Artists with more than one Top Song",
        "Find all songs within a range",
        "Find a specific song",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Find songs by Artist":
          artistSearch();
          break;
        case "Find all Artists with more than one Top Song":
          multiSearch();
          break;
        case "Find all songs within a range":
          rangeSearch();
          break;
        case "Find a specific song":
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
      message: "What's the artist's name, as long as it isn't Bing Crosby?",
    })
    .then((answer) => {
      client.query(
        "SELECT song, year, raw_total, raw_usa, raw_uk, raw_eu FROM top_5000 WHERE artist = $1 ORDER BY year",
        [answer.artist],
        (err, res) => {
          if (err) throw err;
          console.log("Hit Songs by " + answer.artist + ":");
          console.log(res.rows);
          client.end();
        }
      );
    });
};
const multiSearch = () => {
  inquirer
    .prompt({
      name: "multi",
      type: "input",
      message:
        "Name an Artist other than Bing Crosby and see if they have more than one hit.",
    })
    .then((answer) => {
      client.query(
        "SELECT song, year FROM top_5000 WHERE artist = $1 ORDER BY year", // SQL COMMAND
        [answer.multi],
        (err, res) => {
          if (err) throw err;
          console.log("Hit Songs by " + answer.multi + ":");
          console.log(res.rows);
          client.end();
        }
      );
    });
};
const rangeSearch = () => {
  inquirer
    .prompt([
      {
        name: "rangeMin",
        type: "number", //multiple choice?
        message: "Select starting year between 1911-2014.", //figure out what "ranges" can be referred to here - artist name? Year? artists who are not Bing Crosby?
      },
      {
        name: "rangeMax",
        type: "number",
        message: "Select ending year between 1911-2014",
      },
    ])
    .then((answer) => {
      console.log(answer.rangeMin, answer.rangeMax);
      client.query(
        "SELECT artist, song, year FROM top_5000 WHERE year BETWEEN $1 AND $2 ORDER BY year", // SQL COMMAND
        [answer.rangeMin, answer.rangeMax],
        (err, res) => {
          if (err) throw err;
          console.log(
            "Hit Songs from " + answer.rangeMin + " to " + answer.rangeMax + ":"
          );
          console.log(res.rows);
          client.end();
        }
      );
    });
};
const songSearch = () => {
  inquirer
    .prompt({
      name: "song",
      type: "input", //multiple choice?
      message: "Name a Song other than 'White Christmas'.", //figure out what "ranges" can be referred to here - artist name? Year? artists who are not Bing Crosby?
    })
    .then((answer) => {
      client.query(
        "SELECT * FROM top_5000 WHERE song = $1", // SQL COMMAND
        [answer.song],
        (err, res) => {
          if (err) throw err;
          console.log("All About " + answer.song + ":");
          console.log(res.rows);

          client.end();
        }
      );
    });
};
//make a seed file!
//work together to make a seed file for the .csv file you all have.
//raw_total, raw_usa, raw_uk, raw_eu, raw_row
//Make sure you assign a PRIMARY KEY :)
