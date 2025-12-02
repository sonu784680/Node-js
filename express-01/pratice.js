// const express = require("express");

// const app = express();
// app.use((req, res, next) => {
//   console.log("first middleware", req.url, req.method);
//   next();
// });
// app.use((req, res, next) => {
//   console.log("second middleware", req.url, req.method);
//   next();
// });
// // app.use((req, res, next) => {
// //   console.log("third middleware", req.url, req.method);
// //   res.send("<h1>welcome to practice set</h1>");
// // });
// app.get("/", (req, res, next) => {
//   console.log("handling /for get", req.url, req.method);
//   res.send(`<h1>welcome to practice set</h1>`);
// });
// app.get("/contact-us", (req, res, next) => {
//   console.log("handling for /contact-us", req.url, req.method);
//   res.send(`<form action="/contact-us" method="POST">
//         <input type="text"  name=" name"placeholder="enter your nae">
//         <input type="email" name="email" placeholder="enter your mail ">
//         <input type="submit">
//     </form>`);
// });
// // app.post("/contact-us", (req, res, next) => {
// //   console.log(console.log("handling /for post", req.url, req.method));
// //   res.send(`<h1>thank you for responding</h1>`);
// // });
// const PORT = 3002;
// app.listen(PORT, () => {
//   console.log(`server running on address http:localhost:${PORT}`);
// });

const express = require("express");
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
  console.log(`handling for /home ${req.url}${req.method}`);
  res.send(`<p>welcome to pratice set</p>`);
});
app.get("/contact-us", (req, res, next) => {
  console.log(`handling for /contact-us,${req.url}${req.method}`);
  res.send(`<form action="/contact-us" method="POST">
//         <input type="text"  name=" name"placeholder="enter your name">
//         <input type="email" name="email" placeholder="enter your mail ">
//         <input type="submit">
//     </form>`);
});

app.post("/contact-us", (req, res, next) => {
  console.log(`handling for /post ${req.url}${req.method}`);
  res.send(`<p>thank you for responding</p>`);
});

const port = 2009;
app.listen(port, () => {
  console.log(`server running on address http:localhost:${port}`);
});
