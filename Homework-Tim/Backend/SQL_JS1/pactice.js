//write your DB code here!
const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "top_songs_db",
  password: "!Oogieboogie2020",
  pots: 5432,
});

client.connect((err, res) => {
  if (err) throw err;

  console.log(
    `Succesfully connected to ${res.database}. On Thread: ${res.processID}`
  );

  // all database functionality goes here
  //selectALLArtists();
  runSearch();
});

//const selectALLArtists = async () => {
//client.query("SELECT artist FROM top_5000;", (err, res) => {
//if (err) throw err;

// console.log(res.rows);
//client.end();
//});
//};
const inquirer = require("inquirer");
//let whereClause = "";

const runSearch = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to find?",
      choices: [
        "Find songs by artist",
        "Millennial search: Find songs between the year 2000 and the year you graduated",
        "Find all artists within a certian year ranked by the good ol USA",
        "Find a song and artist ranked by the Brits accross the pond",
        "exit",
      ],
    })

    .then((answer) => {
      switch (answer.action) {
        case "Find songs by artist":
          //whereClause = sql`WHERE artist = 1`;
          artistSearch();
          break;
        case "Millennial search: Find songs between the year 2000 and the year you graduated":
          findSongRankings();
          break;
        case "Find all artists within a certian year ranked by the good ol USA":
          findSongYear();
          break;
        case "Find a song and artist ranked by the Brits accross the pond":
          similarSearch();
          break;
        default:
          client.end();
      }
    });
};
// ***
// if (options.filter) {
//whereClause = sql`WHERE lower(artistname) LIKE (lower('%${options.filter}%'));
//}
const artistSearch = () => {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What's the artists name?",
    })
    .then((answer) => {
      client.query(
        "SELECT song FROM top_5000 t WHERE t.artist ILIKE ('%' || $1 || '%')",
        [answer.artist],
        (err, res) => {
          if (err) throw err;
          console.log(res.rows);
          client.end();
        }
      );
    });
};

const findSongRankings = () => {
  inquirer
    .prompt({
      name: "years",
      type: "input",
      message: "Between what two years do you want to search",
    })
    .then((answer) => {
      client.query(
        "SELECT song FROM top_5000 WHERE year BETWEEN 2000 and $1",
        [answer.years],
        (err, res) => {
          if (err) throw err;
          console.log(res.rows);
          client.end();
        }
      );
    });
};
const findSongYear = () => {
  inquirer
    .prompt({
      name: "year",
      type: "input",
      message: "What year are you looking for?",
    })
    .then((answer) => {
      client.query(
        "SELECT artist FROM top_5000  WHERE year = $1 ORDER BY raw_usa DESC",
        [answer.year],
        (err, res) => {
          if (err) throw err;
          console.log(res.rows);
          client.end();
        }
      );
    });
};

const similarSearch = () => {
  inquirer
    .prompt({
      name: "limit",
      type: "input",
      message: "What is the limit that you want to set?",
    })
    .then((answer) => {
      client.query(
        "SELECT song, artist FROM top_5000 ORDER BY raw_uk DESC LIMIT $1 OFFSET 3;",
        [answer.year],
        (err, res) => {
          if (err) throw err;
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
