const fs = require("fs");
// fs.readFile(__dirname + "/writeme.txt", "UTF8", (data, err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data, "data!");
//   console.log(__dirname);
// });

// fs.writeFile(__dirname + "/writeme.txt", process.argv[2], (data, err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data, "data!");
//   console.log(__dirname);
// });

fs.appendFile(
  __dirname + "/writeme.txt",
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

// "process.argv[2] = requires a third argument after "node <filename> with text to be appended to file"
// "\n" is a linebreak
