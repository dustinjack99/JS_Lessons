const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8080;
const displayError = (res) => {
  res.end(`
<html>
<body>
<h1>Ha ha ha ha ha ha ha ha ha what a story Mark! Anyway how's your sex life.</h1>
</body>
</html>`);
};
const handleRequest = (req, res) => {
  console.log(req.url);
  if (req.url === "/home") {
    displayHome(res);
  } else if (req.url === "/") {
    displayHome(res);
  } else {
    displayError(res);
  }
};
const displayHome = (res) => {
  fs.readFile(
    path.join(__dirname, "../../Frontend/JS 301/index.html"),
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.end(`
    <html>
      <body>
      <h1>Ha ha ha ha ha ha ha what a story Mark. Anyway how's your sex life.</h1>
      </body>
    </html>`);
      }
    }
  );
};
const server = http.createServer(handleRequest);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
