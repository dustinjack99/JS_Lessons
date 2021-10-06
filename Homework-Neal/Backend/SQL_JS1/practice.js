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
      message:
        "What would you like to search from our Top 5000 Songs? (QUERIES ARE CASE-SENSITIVE)",
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
          artistSearch();
          break;
        case "Find all songs within a range":
          artistSearch();
          break;
        case "Find a specific song":
          artistSearch();
          break;
        default:
          client.end();
      }
    });
};

//make a seed file!
//work together to make a seed file for the .csv file you all have.
//raw_total, raw_usa, raw_uk, raw_eu, raw_row
//Make sure you assign a PRIMARY KEY :)
