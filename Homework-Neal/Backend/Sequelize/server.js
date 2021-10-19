const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const db = require("./models");
const app = express();
const port = process.env.PORT || 3000; // make sure the port number is 3000, that's important to hook into the db

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//View Engine
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
); //first argument is engine, second is rendering method
app.set("view engine", "handlebars");

// static directory
app.use(express.static(path.join(__dirname, "/public")));

// import our routes:
require("./routes/api-routes")(app);

//REMEMBER: use "{ force: true }" argument in "db.sequelize.sync" for dropping tables at server startup
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
  });
});
//^ asynchronous method, needs a .then promise function
