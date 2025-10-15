//this is a module method ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const fs = require("fs");
const { buffer } = require("stream/consumers");

const userRequesthandler = (req, res) => {
  console.log(req.url, req.method);
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
    res.write(`<form action="/submit-details" method = "POST">`);
    res.write(
      ` <input type="text" name="username" placeholder="enter your name "><br>`
    );
    res.write(`<label for="male">male</label>`);
    res.write(`<input type="radio" id="male" name="gender" value="male"/>`);
    res.write(`<label for="female">female</label>`);
    res.write(`<input type="radio" id="female" name="gender" value="female"/>`);
    res.write(`<input type="submit" value="submit">`);
    res.write(`</form>`);
    res.write(`</body>`);
    res.write(`</html>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // // const bodyObject = {};
      // // for (const [key, value] of params.entries()) {
      // //   bodyObject[key] = value;
      // // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader(`content-type`, `text/html`);
  res.write(`<html>`);
  res.write(`<head><title>complete coding </title></head>`);
  res.write(`<body><h1> sonu swain<h1><body>`);
  res.write(`</html>`);
  return res.end();
};
module.exports = userRequesthandler;
