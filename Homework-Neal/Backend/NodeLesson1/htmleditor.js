const fs = require("fs");

fs.appendFile(
  "../../Frontend/JS 301/index.html",
  `<${process.argv[3]}>${process.argv[2]}</${process.argv[3]}>`,
  (err) => {
    if (err) {
      console.log(err, "ERROR - SCRIPT RUN INTERRUPTED.");
      return;
    }
    console.log("SCRIPT RUN COMPLETE.");
  }
);
