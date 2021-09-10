const http = require("http");
const port = 8081;
const handleRequest = (req, res) => {
  res.end("What is your favorite activity on RDR2?");
};

const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
