const db = require('./db.json')

// Are you scared of learning more stuff??
// Good news, what you learn today makes what we learned earlier 10X easier

// Today we will be using Express, the best way
// to build out a backend API with its ability to
// quickly scaffold routes

// must install express!
// Q: Can you remember what we do to init and install an NPM project?
const express = require("express");

const app = express();
const port = 3000;

//can start using and defining routes out of the box
app.get("/", (req, res) => {
  res.send("I'm Mr. Meeseeks - Look at me!");
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}.`);
});

//Using Routes, now we can...
//BUILD OUR OWN API!

//make star wars app
//                          this is EXPRESS req / res
// app.get('/baby-yoda', (req, res) => {
//     res.json(db.babyYoda);
// });
//do same for maul, han

//make a case where the endpoint doesn't exist

//is there a problem with the code above?

//dynamic routing
//can create variables in our routes
// app.get('/api/:character', (req, res) => {
//     console.log(req.params.character);
//     if(!db[req.params.character]) {
//       res.send("The Force is not with you.");
//     } else {

//       res.send(db[req.params.character]);
//     }
// }) 
