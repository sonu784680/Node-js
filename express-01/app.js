//external module
const express = require("express");
//local module
const requestHandler = require("./user");
const app = express();
app.use((req, res, next) => {
  console.log("came in first middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("came in second middleware", req.url, req.method);
  res.send("<p>sonu swain</p>");
  next();
});


const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
