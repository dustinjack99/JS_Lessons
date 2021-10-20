const express = require("express");
const exphbs = require("express-handlebars");
//const bodyParser = require("body-parser");
const path = require("path");

const db = require("./models");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// View Engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get("/", (req, res) => res.render("index"));

// body parser
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true}));
// static director
app.use(express.static(path.join(__dirname, "/public")));

// import out routes
require("./routes/api-routes")(app);

//remember use {force: true} for dropping tables at sever run
db.sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
  });
});
