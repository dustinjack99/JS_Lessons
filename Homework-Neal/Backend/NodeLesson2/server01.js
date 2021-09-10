const http = require("http");
const port = 8181;
const handleRequest = (req, res) => {
  res.end(
    `Some people say that if you stare at the moon for too long, you'll go mad. And I think that's true. Sir Patrick Moore has been staring at me for decades now and last night I watched him do a shit on the salad.`
  );
};
const server = http.createServer(handleRequest);
server.listen(port, () => {
  console.log(`Server is running on port: ${port}.`);
});
