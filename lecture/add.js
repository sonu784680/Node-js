// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers); //-> to get the url slash(/) or method(get,post->get means to get some input from the browser and post means to give the dta )
//   // res.setHeader('content-type','json')
//   res.setHeader("content-type", "text/html");
//   // res.write("<html>");
//   // res.write("<head><title>sonu</title></head>");
//   // res.write("<body><h1>like/share/sub<h1/></body>");
//   // res.write("</html>");
//   // res.end();
//   if (req.url === "/") {
//     res.write("<html>");
//     res.write("<head><title>sonu</title></head>");
//     res.write("<body><h1>wel-come home<h1/></body>");
//     res.write("</html>");
//     return res.end(); //here return is necessary to give otherwise the response end
//   } else if (req.url === "/products") {
//     res.write("<html>");
//     res.write("<head><title>sonu</title></head>");
//     res.write("<body><h1>namaste<h1/></body>");
//     res.write("</html>");
//     return res.end();
//   } else {
//     res.write("<html>");
//     res.write("<head><title>sonu</title></head>");
//     res.write("<body><h1>like/share/sub<h1/></body>");
//     res.write("</html>");
//     res.end();
//   }
// });
// // process.exit(); stop the event

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`the running server is an address http://localhost:${PORT} `);
// });

///take input from the user

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
//   res.write("<html>");
//   res.write("<head><title>sonu</title></head>");
//   res.write("<body><h1>like/share/sub</h1>");
//   res.write('<form action="/submit-details" method ="POST">');
//   res.write(
//     '<input type="text" placeholder="enter your name" name="username">'
//   );
//   res.write(
//     '<label for="male">male</label><input type="radio" id="male" name="sex" value="male">'
//   );
//   res.write('<label for="female">female</label>');
//   res.write('<input type="radio" id="female" name="sex" value="female">');
//   res.write('<input type="submit" value="submit"></form>');
//   res.write("</body>");
//   res.write("</html>");
//   res.end();
// });

// const sonu = 3000;
// server.listen(sonu, () => {
//   console.log(`the running server is an address http://localhost:${sonu} `);
// });

//redirecting webserver

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
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
    req.url.toLowerCase === "/submit-details" &&
    req.method == "POST"
  ) {
    fs.writeFileSync("user.txt", "sonu swain");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.write("<html>");
  res.write("<head><title>sonu</title></head>");
  res.write("<body><h1>like/share/sub<h1/></body>");
  res.write("</html>");
  res.end();
});

const sonu = 3000;
server.listen(sonu, () => {
  console.log(`the running server is an address http://localhost:${sonu} `);
});
