const db = require('./db.json')

// Are you scared of learning more stuff??
// Good news, what you learn today makes what we learned earlier 10X easier

// Today we will be using Express, the best way
// to build out a backend API with its ability to
// quickly scaffold routes

// must install express!
// Q: Can you remember what we do to init and install an NPM project?
const express = require("express");
const fs = require("fs");
const path = require("path")

const app = express();
const port = process.env.PORT || 3000;

//Use middleware ***COME BACK TO LATER***
// user => (req) => server => (req) => controller 
//                    ^^^ middleware, in order to change / work with data before server passes it off.
app.use(express.urlencoded({extended: true}));
app.use(express.json())
//install NodeMon
//npm i -g nodemon

//can start using and defining routes out of the box
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/view.html"));
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}.`);
});

//Using Routes, now we can...
//BUILD OUR OWN API!

//make star wars app
//                          this is EXPRESS req / res
// app.get('/baby-yoda', (req, res) => {
//     res.json(db["baby-yoda"]);
// });
//do same for maul, han

//make a case where the endpoint doesn't exist

//is there a problem with the code above?

//dynamic routing
//can create variables in our routes
app.get('/api/characters/:character', (req, res) => {
    console.log(req.params.character);
    if(!db[req.params.character]) {
      res.send("The Force is not with you.");
    } else {

      res.send(db[req.params.character]);
    }
}) 

app.get('/api/characters', (req, res) => {
  res.send(db);
})

//POST
//FAILS WITHOUT MIDDLEWARE! Go to middleware lesson :) :) :)
app.post('/api/characters', (req, res) => {
  const newChar = req.body;
  
  console.log(newChar)
  //async
  fs.readFile(path.join(__dirname + '/db.json'), (err, data) => {
    const db = JSON.parse(data);
    console.log(db, "db")
    db[`${newChar.name}`] = newChar;

    //async
    fs.writeFile(path.join(__dirname + '/db.json'), JSON.stringify(db), (err, data) => {if (err) console.log(err);console.log(data)})
  })
});

//PUSH UP A SCRAMBLED VERSION