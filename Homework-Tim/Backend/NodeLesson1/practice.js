const fs = require("fs");

fs.readFile(__dirname + "/writeme.txt", "UTF8", (data, err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data, "data!");
  console.log(__dirname);
});
