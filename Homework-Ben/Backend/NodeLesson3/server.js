//No hints on this page! Feel free to reference the lesson, but DO NOT COPY / PASTE. I've ordered the lesson.js in such a way that this will do bad things.
const db = require("./db.json");

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});

//end boilerplate
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/api/characters", (req, res) => {
  res.send(db);
});

// Dynamic "GET"
app.get("/api/characters/:character", (req, res) => {
  const dynamicCharacter = req.params.character;
  console.log(dynamicCharacter);
  if (db[dynamicCharacter]) {
    res.send(
      `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${dynamicCharacter}'s Scouter Reading</title>
</head>
<body id="body">
    <h1 id="characterName" style="
      margin-left: 20%;
    ">${dynamicCharacter}</h1>
    <div id="fullScouter">
    <img src="https://japeal.com/wordpress/wp-content/themes/total/DBFG/scouter/scouter_img.png"
    style="
    display: flex;
    justify-content: center;
    z-index: -1;
    position: absolute;
    "
    />
    <h2 id="powerReading" style="
    display: flex;
    justify-content: center;
    z-index: 4;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
    font-size: 60px;
    width: 860px;
    color: #daad0b;
    position: absolute;
    ">${db[dynamicCharacter].powerLevel}</h2>
    </div>
</body>
</html>`
    );
    // res.sendFile(path.join(__dirname, "/public/character.html"));
    // let characterEntry = document.getElementById("characterEntry");
    // console.log(characterEntry);
    // res.send(
    //   `Now entering the ring... the ${db[dynamicCharacter].race} ${db[dynamicCharacter].name} with a power level of ${db[dynamicCharacter].powerLevel}!`
    // );
  } else {
    res.send("In another dimension");
  }
});

// POST
app.post("/api/characters", (req, res) => {
  const newChar = req.body;
  fs.readFile(path.join(__dirname, "/db.json"), (err, data) => {
    const database = JSON.parse(data);
    database[newChar.name] = newChar;
    fs.writeFile(
      path.join(__dirname, "/db.json"),
      JSON.stringify(database),
      (err, data) => {
        if (err) {
          console.log(err);
        } else if (data) {
          console.log(data, "data posted");
        }
      }
    );
  });
});
