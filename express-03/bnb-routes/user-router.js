//core module
const path = require("path");
//external module
const express = require("express");
const userRouter = express.Router();
//local module
const rootDir = require("../utils/path");
const { requestItems } = require("./host-router");

userRouter.get("/", (req, res, next) => {
  console.log(requestItems);
  res.render("home", { requestItems: requestItems, pageTitle: "airbnb homes" });
});

module.exports = userRouter;
