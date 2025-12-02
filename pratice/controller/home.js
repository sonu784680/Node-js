exports.inputPages = (req, res, next) => {
  res.render("input", { gallery: "inputValue" });
};

exports.inputPaged = (req, res, next) => {
  console.log(`handling for /post ${req.url}${req.method}${req.body}`);
  res.send(`<p>thank you for responding</p>`);
};
