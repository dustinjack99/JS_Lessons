const http = require("http");
const path = require("path");
const fs = require("fs");

const port = 8080;

const displayHome = (res) => {
  fs.readFile(
    path.join(__dirname, "../../Frontend/JS 301/index.html"),
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
const displayHome2 = (res) => {
  fs.readFile(path.join(__dirname, "../../website.html"), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
      console.log(data);
    }
  });
  console.log(__dirname);
};
const displayHome3 = (res) => {
  fs.readFile(
    path.join(
      __dirname,
      "../../Frontend/JS 301 - DOM Manipulation/indexxx.html"
    ),
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
        console.log(data);
      }
    }
  );
};
const displayRoot = (res) => {
  res.end(`
    <html>
        <body>
            <h1>ROOT</h1>
        </body>
    </html>
    `);
};
const displayError = (res) => {
  res.end(`
    <html>
        <body>
            <h1>YOU DONE FUCKED UP</h1>
        </body>
    </html>
    `);
};

const handleRequest = (req, res) => {
  // console.log(req.url)
  if (req.url === "/home") {
    displayHome(res);
  } else if (req.url === "/home2") {
    displayHome2(res);
  } else if (req.url === "/home3") {
    displayHome3(res);
  } else if (req.url === "/") {
    displayRoot(res);
  } else {
    displayError(res);
  }
};

const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
