const Home = require("../models/home");

//constant

//controller-1
exports.getAddhome = (req, res, next) => {
  res.render("homeadded", { pageTitle: "addhome" });
};

//controller-2
exports.postAddhome = (req, res, next) => {
  const home = new Home(req.body.housename);
  home.save();

  console.log(req.body);
  res.render("successful", { pageTitle: "completed" });
};

//controller-3
exports.getHome = (req, res, next) => {
  Home.fetchAll((requestItems) => {
    res.render("home", {
      requestItems: requestItems,
      pageTitle: "airbnb homes",
    });
  });
};

exports.gethomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("at home details page", homeId);
  res.render("home/homedetails", {
    pageTitle: "home details",
  });
};
