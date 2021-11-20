module.exports = {
  // selecting the file webpack will start with, and scan all other dependent JS files
  entry: "./src/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  mode: "development",
};
