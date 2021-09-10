const fs = require("fs");

fs.writeFile(
  __dirname + "/nodegenerated.html",
  process.argv[2],
  (data, err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data, "data!");
    console.log(__dirname);
  }
);

fs.appendFile(
  __dirname + "/nodegenerated.html",
  "\n" +
    "What a tragedy - did you hear Steve Jobs died of Ligma?" +
    "\n" +
    "Who's Steve Jobs?",
  (data, err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data, "LIGMA BALLS! GOTTEM!");
  }
);
