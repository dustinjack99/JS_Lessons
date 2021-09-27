const db = require("./db.json");
const express = require("express");
const fs = require("fs");
const http = require("http");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
