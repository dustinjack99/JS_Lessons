const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8080;
const displayHome = (res) => {
fs.readFile(path.join(__dirname, "../../Frontend/JS 301 - DOM Manipulation"), (err, data) => {
    if (err) {
        console.log(err)
    }else {
        console.log(data)
    // res.end(`
    // <html>
    //   <body>
    //   <h1>It's not true I did not hit her it's bullshit I did not. Oh hi Mark.</h1>
    //   </body>
    // </html>`)
}
const handleRequest = (req, res) => {
  console.log(req.url);
  if (req.url === "/home") {
  }
  res.end(`
    <html>
      <body>
      <h1>It's not true I did not hit her it's bullshit I did not. Oh hi Mark.</h1>
      </body>
    </html>`)
} else if (req.url === "/"){
    res.end(`
      <html>
        <body>
        <h1>It's not true I did not hit her it's bullshit I did not. Oh hi Mark.</h1>
        </body>
      </html>`);
  } else {}
const server = http.createServer(handleRequest);
server.listen(port, () => {
  console.log(`Server is running on port: ${port}.`);
});
