const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const db = require("./models");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View Engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// static directory
app.use(express.static(path.join(__dirname, "/public")));

// import our routes!
require("./routes/api-routes")(app);

// remember! use {force: true} for dropping tables at server run
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
  });
});
