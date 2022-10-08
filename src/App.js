const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const Router = require("./Routes");

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
//Path Router
app.use(Router);

module.exports = app;
