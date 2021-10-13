const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../Frontend/Public/website.html"));
});

const displayRoot = (res) => {
  res.end(`
    <html>
        <body>
            <h1>YOU FORGOT TO TYPE HOME</h1>
        <body>
    </htm/>
    `);
};
const displayError = (res) => {
  res.end(`
    <html>
        <body>
            <h1>NOPE</h1>
        </body>
    </html>
    `);
};
const handleRequest = (req, res) => {
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
  console.log(`Server is running on port: ${port}`);
});
