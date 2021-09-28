const db = require("./db.json")

// write express boilerplate
const express = require("express");
const fs = require("fs")
const path = require("path")

const app = express();
const port = process.env.PORT || 3000;

// EXPLAIN MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`)
})

// get / post

// "GET" method to display a html file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/view.html"))
})

// "GET" method from a backend database
app.get("/api/charactersee", (req, res) => {
    res.send(db);
})

// Dynamic "GET" - Dynamic routing has literally saved lives.
app.get("/api/characters/:characters", (req, res) => {
    const dynamicCharacter = req.params.character;
    console.log(dynamicCharacter)
    if(db[dynamicCharacter]) {
        res.send(db[dynamicCharacter])
    } else {
        res.send("The Force is not with you.")
    }
})

// POST 
app.post("/api/characters/c", (req, res) => {
    const newChar = req.body;
    
    // asynchronous javascript
    fs.readFile(path.join(__dirname, "/db/.json"), (err, data) => {
        const database = JSON.parse(data)
        database[newChar.name] = newChar;

        fs.writeFile(path.join(__dirname, '/db/.json'), JSON.stringify(database), (err, data) => {
            if (err) {
                console.log(err, "Error hit")
            } else if (data) {
                console.log(data, "data posted")
            }
        })
    })
})