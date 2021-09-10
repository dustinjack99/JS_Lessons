// Use this file to write a server that routes to 3 index.html files from your previous homework assignments.

const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8080;

const displayHome = (res) => {
  fs.readFile(path.join(__dirname, "./yes.html"), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
      //   console.log(data);
    }
  });
  //   res.end(
  //     `
  //   <html>
  //       <body>
  //           <h1>Hello there</h1>
  //       </body>
  //   </html>
  //     `
  //   );
};
const displayRoot = (res) => {
  res.end(`
    <html>
    <body>
        <h1>Root</h1>
    </body>
</html>
    `);
};
const displayError = (res) => {
  res.end(`
    <html>
    <body>
        <h1>MISTAKE!</h1>
    </body>
</html>
    `);
};
const handleRequest = (req, res) => {
  //   console.log(req.url);
  if (req.url === "/home") {
    displayHome(res);
  } else if (req.url === "/") {
    displayRoot(res);
  } else {
    displayError(res);
  }
};

const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
