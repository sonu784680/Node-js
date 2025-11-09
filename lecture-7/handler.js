const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader(`content-type`, `text/html`);
    res.write(`<html>
        <head><title>pratice-set </title></head>
        <body><h1>welcome to calculator<h1>
        <a href="/calculator">go to calculator</a>
        </body>
        </html>
        `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader(`content-type`, `text/html`);
    res.write(`<html>
        <head><title>pratice-set </title></head>
        <body><h1>here is the calculator<h1>
      <form action="/calculate-result" method="post">
        <input type="text" placeholder="first number " name="first">
        <input type="text" placeholder="second number " name="second">
        <input type="submit" value="sum"">
    </form>
        </body>
        </html>
        `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    sumRequestHandler(req, res);
    return res.end();
  }

  res.setHeader(`content-type`, `text/html`);
  res.write(`<html>
        <head><title>pratice-set </title></head>
        <body><h1>page not found </h1>
        <a href="/calculator">go to home</a>
        </body>
        </html>
        `);
  return res.end();
};

exports.requestHandler = requestHandler;
