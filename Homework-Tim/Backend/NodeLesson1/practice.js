// const action = () => {
//   console.log();
// };

// module.exports = action;
const fs = require("fs");
console.log(process.argv);

fs.appendFile(
  __dirname + "../../../Frontend/JS 301/index.html",
  "\n" + process.argv[2],
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data, "data!");
  }
);
