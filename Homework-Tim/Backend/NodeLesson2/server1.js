const http = require("http");
const port = 8081;
const handleRequest = (req, res) => {
  res.end("I am missing the football game to code tonight");
};

const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
