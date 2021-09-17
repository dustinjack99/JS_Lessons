const db = require("./db.json");

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "/view.html"));
});

app.get(".api/characters", (req, res) => {
  res.send(db);
});

app.get("/api/characters/:character", (req, res) => {
  const dynamicCharacter = req.params.character;
  console.log(dynamicCharacter);
  if (db[dynamicCharacter]) {
    res.send(db[dynamicCharacter]);
  } else {
    res.send("The Force is not with you");
  }
});

app.post("/api/characters", (req, res) => {
  const newChar = req.body;

  fs.readFile(path.join(_dirname, "/db.json"), (err, data) => {
    const database = JSON.parse(data);
    database[newChar.name] = newChar;

    fs.writeFile(path.join(_dirname, `/db.json`), JSON.stringify(database), (err, data) =>{
        if (err) {
            console.log(err, "Error hit")
        } else if (data)
    });
  });
});
