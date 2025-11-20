exports.pageNotFound = (req, res, next) => {
  res.status(400).render("error", { pageTitle: "page not found" });
};
