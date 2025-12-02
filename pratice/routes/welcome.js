const express = require("express");
const welcomeRouter = express.Router();
const path = require("path");
const mainRoot = require("../utils/path");
const pageController = require("../controller/swagat");

welcomeRouter.get("/", pageController.welcomePage);

module.exports = welcomeRouter;
