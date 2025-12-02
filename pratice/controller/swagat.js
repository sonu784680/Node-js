exports.welcomePage = (req, res, next) => {
  res.render("home", { gallery: "inputHome" });
};
