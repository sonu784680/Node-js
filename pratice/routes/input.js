const express = require("express");
const inputRouter = express.Router();
const path = require("path");
const mainRoot = require("../utils/path");
const inputController = require("../controller/home");

inputRouter.get("/contact-us", inputController.inputPages);

inputRouter.post("/contact-us", inputController.inputPaged);

module.exports = inputRouter;
