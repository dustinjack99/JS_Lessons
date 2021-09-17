const http = require("http");
const fs = require("fs");
const path = require("path");
// import sitepath from
const port = 8080;

const displayQuiz = (res) => {
  fs.readFile(path.join(__dirname, "../../../../Quiz/index.html"), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
      //   console.log(data);
    }
  });
};
const displayRoot = (res) => {
  fs.readFile(path.join(__dirname, "../../../../Saiyan/index.html"), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
};
const displayWeather = (res) => {
  fs.readFile(path.join(__dirname, "../../../../Weather/index.html"), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
};
const handleRequest = (req, res) => {
  //   console.log(req.url);
  if (req.url === "/quiz") {
    displayQuiz(res);
  } else if (req.url === "/weather") {
    displayWeather(res);
  } else if (req.url === "/") {
    displayRoot(res);
  }
};

const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
