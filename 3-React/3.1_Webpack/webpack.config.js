module.exports = {
  //selecting the file that webpack is going to start with, and scan all dependencies
  entry: "./src/app.js",
  //the place in our project where weback will dump it's transformed files
  output: {
    // relative path, making a dist folder
    path: __dirname + "/dist",
    // name the file that will be output in the dist folder
    filename: "bundle.js",
  },
  // you can specify which mode webpack will run in - dev vs. prod
  mode: "development",
};
