//built in HTTP package
// const http = require("http");

// //ports are a way to look into your computer
// const port = 8080;

// const handleRequest = (req, res) => {
//   // request sent, res.end() breaks connection
//   res.end("this thing worked");
// };

// const server = http.createServer(handleRequest);

// server.listen(port, () => {
//   console.log(`Server running on port: ${port}`);
// });
//show off localhost!

//activity, two servers
// const port1 = 7000;
// const port2 = 7001;

// const handler1 = (req, res) => {
//   // request sent, res.end() breaks connection
//   res.end(
//     "if you were a hotdog and starving, would you eat yourself. I know I would"
//   );
// };
// const handler2 = (req, res) => {
//   // request sent, res.end() breaks connection
//   res.end("hold onto your butts");
// };

// const server1 = http.createServer(handler1);
// const server2 = http.createServer(handler2);

// server1.listen(port1, () => {
//   console.log(`this server is on port: ${port1}`);
// });
// server2.listen(port2, () => {
//   console.log(`this server is on port: ${port2}`);
// });
