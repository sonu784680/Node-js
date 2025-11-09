// const http = require("http");
// const fs = require("fs");
// const { buffer, json } = require("stream/consumers");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   if (req.url === "/") {
//     res.write("<html>");
//     res.write('<form action="/submit-details" method ="POST">');
//     res.write(
//       '<input type="text" placeholder="enter your name" name="username">'
//     );
//     res.write(
//       '<label for="male">male</label><input type="radio" id="male" name="sex" value="male">'
//     );
//     res.write('<label for="female">female</label>');
//     res.write('<input type="radio" id="female" name="sex" value="female">');
//     res.write('<input type="submit" value="submit"></form>');
//     res.write("</body>");
//     res.write("</html>");
//     return res.end();
//   } else if (
//     req.url.toLowerCase() === "/submit-details" &&
//     req.method == "POST"
//   ) {
//     const body = [];
//     req.on("data", (chunk) => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const parsebody = Buffer.concat(body).toString();
//       console.log(parsebody);
//       const params = new URLSearchParams(parsebody);
//       //   console.log(params.get("username"));
//       //   console.log(params.get("sex")); ->first method
//       const bodyObject = Object.fromEntries(params);
//       console.log(bodyObject); //->this is one liner
//       fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
//     });
//     // fs.writeFileSync("user.txt", "sonu swain");
//     // res.statusCode = 302;
//     // res.setHeader("Location", "/");
//   }
//   res.write("<html>");
//   res.write("<head><title>sonu</title></head>");
//   res.write("<body><h1>like/share/sub<h1/></body>");
//   res.write("</html>");
//   res.end();
// });

// const sonu = 3000;
// server.listen(sonu, () => {
//   console.log(`the running server is an address http://localhost:${sonu} `);
// });

///using modules

const fs = require("fs");
const { buffer, json } = require("stream/consumers");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
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
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsebody = Buffer.concat(body).toString();
      console.log(parsebody);
      const params = new URLSearchParams(parsebody);
      //   console.log(params.get("username"));
      //   console.log(params.get("sex")); ->first method
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject); //->this is one liner
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });
    // fs.writeFileSync("user.txt", "sonu swain");
    // res.statusCode = 302;
    // res.setHeader("Location", "/");
  }
  res.write("<html>");
  res.write("<head><title>sonu</title></head>");
  res.write("<body><h1>like/share/sub<h1/></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
