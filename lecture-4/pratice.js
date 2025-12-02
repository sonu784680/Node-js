const app = require("app");
const fs = require("fs");

const server = app.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url == "/") {
    res.write("<html>");
    res.write('<form action="/submit-details" method ="POST">');
    res.write(
      '<input type="text" placeholder="enter your name" name="username">'
    );
    res.write(
      '<label for="male">male</label><input type="radio" id="male" name="sex" value="male">'
    );
    res.write('<label for="female">female</label>');
    res.write('<input type="radio" id="female" name="sex" value="female">');
    res.write('<input type="submit" value="submit"></form>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on(data, (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on(end, () => {
      const prase = Buffer.concat(body).toString();
      const params = new URLSearchParams(prase);
      console.log(params.get(username));
      const bodyObj = Object.fromEntries(params);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObj));
      fs.writeFileSync("user.txt", "sonu swain");
      res.statusCode = 302;
      res.setHeader = ("location", "/");
    });
  } else {
    res.setHeader(`content-type`, `text/html`);
    res.write(`<html>`);
    res.write(`<head><title>complete coding </title></head>`);
    res.write(`<body><h1> sonu swain<h1><body>`);
    q;
    res.write(`</html>`);
    return res.end();
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log("server running on address http:localhost:", PORT);
});
