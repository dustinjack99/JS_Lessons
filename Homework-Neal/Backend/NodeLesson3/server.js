const db = require("./db.json");
const express = require("express");
const fs = require("fs");
const http = require("http");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});

//GET Method
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/api/characters", (req, res) => {
  res.send(db);
});
app.get("/api/characters/:character", (req, res) => {
  const dynamicCharacter = req.params.character;
  // console.log(dynamicCharacter);
  if (db[dynamicCharacter]) {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${db[dynamicCharacter]}</title>
    </head>
    <body id="body">
        <h1 id="Name" style="
        display: flex;
        justify-content: center;
        font-size: 70px;
        margin: 5%;
        ">Name: ${db[dynamicCharacter].name}</h1>
        <div id="characterDiv">
        <h2 id="Species" style="
        display:flex;
        justify-content: center;
        font-size: 60px;">Species: ${db[dynamicCharacter].species}</h2>
        <h2 id="Role" style="
        display: flex;
        justify-content: center;
        font-size: 60px;
        ">Role: ${db[dynamicCharacter].role}</h2>
        <h2 id="role" style="
        display: flex;
        justify-content: center;
        font-size: 60px;
        ">Age: ${db[dynamicCharacter].age}</h2>
        <h2 id="age" style="
        display: flex;
        justify-content: center;
        font-size: 60px;
        ">Force Points: ${db[dynamicCharacter].forcePoints}</h2>
        </div>
    </body>
    </html>`);
  } else {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error</title>
    </head>
    <body id="body">
        <h1 id="errorMessage" style="
        display: flex;
        justify-content: center;
        font-size: 80px;">Much to learn, you still have.</h1>
        <h2 id="errorExplain" style="
        display: flex;
        justify-content: center;
        margin: 20px;
        font-size: 30px;"> Error: The name you have entered is not in our database. Which means it must not exist.</h2>
        <h3 id="errorRemind" style="
        display: flex;
        justify-content: center;
        font-size: 15px;"> Or else you forgot to refresh the server before searching for the name. Ya dingus.</h3>
        </div>
    </body>
    </html>`);
  }
});

//Posting
app.post("/api/characters", (req, res) => {
  const newChar = req.body;
  // async
  fs.readFile(path.join(__dirname, "/db.json"), (err, data) => {
    const database = JSON.parse(data);
    database[newChar.name] = newChar;

    fs.writeFile(
      path.join(__dirname, "/db.json"),
      JSON.stringify(database),
      (err, data) => {
        if (err) {
          console.log(err, "Error hit");
        } else if (data) {
          console.log(data, "Data posted");
        }
      }
    );
  });
});
// ROUTING REQUESTS FOR CUSTOM URLS
