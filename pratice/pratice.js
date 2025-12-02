const express = require("express");
const parser = require("body-parser");
const path = require("path");
const app = express();
const rootDir = require("./utils/path");

const inputRouter = require("./routes/input");
const welcomeRouter = require("./routes/welcome");
app.use(parser.urlencoded());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(inputRouter);
app.use(welcomeRouter);

app.use((req, res, next) => {
  console.log("first middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("second middleware", req.url, req.method);
  next();
});

const port = 2009;
app.listen(port, () => {
  console.log(`server running on address http:localhost:${port}`);
});
