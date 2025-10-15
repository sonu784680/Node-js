//requeset and response
const sonu = require("http");
const fs = require("fs");

const server = sonu.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();//stop the event
  // res.setHeader(`content-type`,`text/html`);
  // res.write(`<html>`);
  // res.write(`<head><title>complete coding </title></head>`);
  // res.write(`<body><h1> sonu swain<h1><body>`);
  // res.write(`</html>`);
  // res.end(); //this code is how to pass the response
  //this code is how to routing
  if (req.url === "/") {
    res.setHeader(`content-type`, `text/html`);
    res.write(`<html>`);
    res.write(`<head><title>complete coding </title></head>`);
    res.write(`<body><h1>enter details :</h1>`);
    res.write(`<form action="/submit"-details method = "POST">`);
    res.write(
      ` <input type="text" name="username" placeholder="enter your name "><br>`
    );
    res.write(`<label for="male">male</label>`);
    res.write(`<input type="radio" id="male" name="gender" value="male"/>`);
    res.write(`<label for="female">female</label>`);
    res.write(`<input type="radio" id="female" name="gender" value="male"/>`);
    res.write(`<input type="submit" value="submit">`);
    res.write(`</form>`);
    res.write(`</body>`);
    res.write(`</html>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    fs.writeFileSync("user.txt", "sonu swain");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader(`content-type`, `text/html`);
  res.write(`<html>`);
  res.write(`<head><title>complete coding </title></head>`);
  res.write(`<body><h1> sonu swain<h1><body>`);
  res.write(`</html>`);
  return res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`the running server is an address http://localhost:${PORT}`);
});
