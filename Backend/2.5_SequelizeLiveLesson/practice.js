// npm init
// npm i sequelize sequelize-cli pg pg-hstore express
// npx sequelize init

// configure config/config.json

const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
//pulling in out db from models
const db = require("./models");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View Engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//static directory
app.use(express.static(path.join(__dirname, "/public")));

//routes
require("./routes/api-routes.js")(app);

//syncing, then starting the app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
  });
});
