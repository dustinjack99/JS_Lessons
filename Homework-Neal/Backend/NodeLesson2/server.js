const http = require("http");
const fs = require("fs");
const path = require("path");
// var url = require("url");

// const { restart } = require("nodemon");
const port = process.env.PORT || 8080;
const displayError = (res) => {
  res.end(`
<html>
<body>
<h1>Error Encountered</h1>
</body>
</html>`);
};
const display404 = (res) => {
  res.end(`
  <html>
  <body>
  <h1> 404: Not Found</h1>
  </body>
  </html>`);
};
const displayHome = (res) => {
  fs.readFile(
    path.join(__dirname, "../../Backend/NodeLesson2/Portfolio/about.html"),
    (err, data) => {
      if (err) {
        displayError(res);
      } else {
        display404(res);
      }
    }
  );
};
const displayContact = (res) => {
  fs.readFile(
    path.join(__dirname, "../../Backend/NodeLesson2/Portfolio/contact.html"),
    (err, data) => {
      if (err) {
        displayError(res);
      } else {
        display404(res);
      }
    }
  );
};
const displayPortfolio = (res) => {
  fs.readFile(
    path.join(__dirname, "../../Backend/NodeLesson2/Portfolio/portfolio.html"),
    (err, data) => {
      if (err) {
        displayError(res);
      } else {
        display404(res);
      }
    }
  );
};
const handleRequest = (req, res) => {
  console.log(req.url);
  if (req.url === "/home") {
    displayHome(res);
  } else if (req.url === "/portfolio") {
    displayPortfolio(res);
  } else if (req.url === "/contact") {
    displayContact(res);
  } else if (err) {
    displayError(res);
  } else {
    display404(res);
  }
};
const server = http.createServer(handleRequest);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
