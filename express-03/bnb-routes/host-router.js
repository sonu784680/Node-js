//core module
const path = require("path");
//external module
const express = require("express");
const hostRouter = express.Router();
//local module
const rootDir = require("../utils/path");

hostRouter.get("/add-home", (req, res, next) => {
  res.render("homeadded", { pageTitle: "addhome" });
});

const requestItems = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log("home added successfully", req.body, req.body.housename);
  requestItems.push(req.body.housename);
  console.log(req.body);
  res.render("successful", { pageTitle: "completed" });
});

exports.hostRouter = hostRouter;
exports.requestItems = requestItems;
