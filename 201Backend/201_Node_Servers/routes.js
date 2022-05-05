const http = require("http");
const port = 8081;

// can imagine this as a 'controller'
// this is the part that handles routes
const handleRequest = (req, res) => {
  const path = req.url;

  console.log(path);

  // Imagine this as Controller

  // Q: Now what does this look like? Where have we seen all these slashes before?
  switch (path) {
    case "/":
      return displayHome(res);
    case "/portfolio":
      return displayPortfolio(res);
    default:
      return display404(res);
  }
};

const displayHome = (res) => {
  //template literals!!
  const html = `
    <html>
        <body>
            <h1>HOMEPAGE</h1>
        </body>
    </html>
    `;

  //write the header
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(html);
};
const displayPortfolio = (res) => {
  //template literals!!
  const html = `
    <html>
        <body>
            <h1>PORTFOLIO</h1>
        </body>
    </html>
    `;

  //write the header
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(html);
};
const display404 = (res) => {
  //template literals!!
  const html = `
    <html>
        <body>
            <h1>ERROR 404</h1>
        </body>
    </html>
    `;

  //write the header
  res.writeHead(404, { "Content-Type": "text/html" });

  res.end(html);
};

const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

// try out different routes in the url
