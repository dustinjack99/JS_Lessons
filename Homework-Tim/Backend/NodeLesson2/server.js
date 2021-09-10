// Use this file to write a server that routes to 3 index.html files from your previous homework assignments.
const http = require("http");
const path = require("path");
const fs = requires("fs");
const port = 8080;

const displayHome = (res) => {
  fs.readFile(
    path.join(_dirname, "../../Frontend/JS 301 - DOM Manipulation/index.html")
  );
};

const handleRequest = (req, res) => {
  res.end(`
  <html>
<body>
<h1>HOLLLAAAAAA<h1>
<body>
  <html>
  `);
};

const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
