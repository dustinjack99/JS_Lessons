const http = require("http");
const path = require("path");
const fs = require("fs");

const port = 8082;

const displayHome = (res) => {
  fs.readFile(
    path.join(__dirname, "../../Frontend/JS 301 - DOM Manipulation/index.html"),
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
        console.log(data);
      }
    }
  );
  console.log(__dirname);
};

const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//write route code here, genius

//write serving html

//demo __dirname + path;
//highlight ../../ and how to punch out of folders
