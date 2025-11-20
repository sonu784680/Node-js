//external module
const express = require("express");
const hostRouter = express.Router();
//local module
const homeController = require("../controllers/home");

hostRouter.get("/add-home", homeController.getAddhome);

hostRouter.post("/add-home", homeController.postAddhome);

exports.hostRouter = hostRouter;
