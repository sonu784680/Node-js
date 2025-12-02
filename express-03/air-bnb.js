//core module
const path = require("path");

//external module
const express = require("express");
//local module
const userRouter = require("./bnb-routes/user-router");
const hostRouter = require("./bnb-routes/host-router");
const rootDir = require("./utils/path");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(400).render("error", { pageTitle: "page not found" });
});
const PORT = 2002;
app.listen(PORT, () => {
  console.log(`server listening on address http:localhost:${PORT}`);
});
