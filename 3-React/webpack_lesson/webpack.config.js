module.exports = {
  // selecting the file that webpack is going to start with, and scan all other dependent JS files
  entry: "./src/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  mode: "development",
};
