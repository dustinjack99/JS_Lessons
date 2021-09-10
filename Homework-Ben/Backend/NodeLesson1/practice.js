const fs = require("fs");

fs.readFile(__dirname + "/writeme.txt", "UTF8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data, "data!");
});

console.log(process.argv);
fs.appendFile(__dirname + "/writeme.txt", "\n" + process.argv[2], (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("data recorded");
});
