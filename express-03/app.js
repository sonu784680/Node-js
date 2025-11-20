const express = require("express");
const parser = require("body-parser");

const app = express();
app.use((req, res, next) => {
  console.log("first middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("second middleware", req.url, req.method);
  next();
});
app.get("/", (req, res, next) => {
  console.log("handling /for get", req.url, req.method);
  res.send(`<h1>welcome to practice set</h1>`);
});
app.get("/contact-us", (req, res, next) => {
  console.log("handling for /contact-us", req.url, req.method);
  res.send(`<form action="/contact-us" method="POST">
        <input type="text"  name=" name"placeholder="enter your nae">
        <input type="email" name="email" placeholder="enter your mail ">
        <input type="submit">
    </form>`);
});
app.post("/contact-us", (req, res, next) => {
  console.log(console.log("first handling", req.url, req.method, req.body));
  next();
});
app.use(parser.urlencoded());
app.post("/contact-us", (req, res, next) => {
  console.log(console.log("handling /for post", req.url, req.method, req.body));
  res.send(`<h1>thank you for responding</h1>`);
});
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server running on address http:localhost:${PORT}`);
});
